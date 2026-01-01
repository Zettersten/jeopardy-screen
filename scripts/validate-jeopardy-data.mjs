import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";
import ts from "typescript";

const ROOT = process.cwd();
const DATA_FILE = path.resolve(ROOT, "src/data/jeopardyData.ts");

function fail(message) {
  console.error(`ERROR: ${message}`);
  process.exitCode = 1;
}

function warn(message) {
  console.warn(`WARN: ${message}`);
}

function normalizeText(value) {
  return value
    .toLowerCase()
    .replace(/[^\p{L}\p{N}]+/gu, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function extractResponse(answer) {
  // Strip common Jeopardy response prefixes, then normalize.
  const stripped = answer
    .trim()
    .replace(/\?+\s*$/u, "")
    .replace(/^(what|who|where|when)\s+(is|are|was|were)\s+/iu, "")
    .trim();
  return stripped;
}

function loadCategoriesFromTypescript(tsFilePath) {
  const source = fs.readFileSync(tsFilePath, "utf8");
  const transpiled = ts.transpileModule(source, {
    compilerOptions: {
      target: ts.ScriptTarget.ES2020,
      module: ts.ModuleKind.CommonJS,
      esModuleInterop: true,
      strict: false,
    },
    fileName: path.basename(tsFilePath),
  });

  const module = { exports: {} };
  const sandbox = {
    module,
    exports: module.exports,
    require: () => {
      throw new Error("require() is not allowed in jeopardyData.ts");
    },
  };

  vm.runInNewContext(transpiled.outputText, sandbox, { filename: tsFilePath });
  return sandbox.module.exports.categories;
}

function main() {
  if (!fs.existsSync(DATA_FILE)) {
    fail(`Missing data file: ${DATA_FILE}`);
    return;
  }

  const categories = loadCategoriesFromTypescript(DATA_FILE);

  if (!Array.isArray(categories)) {
    fail("`categories` must be an array exported from src/data/jeopardyData.ts");
    return;
  }

  // UI contract checks
  const expectedCategoryCount = 7;
  const expectedClueCount = 8;
  const expectedPoints = [100, 200, 300, 400, 500, 600, 700, 800];

  if (categories.length !== expectedCategoryCount) {
    fail(`Expected exactly ${expectedCategoryCount} categories; got ${categories.length}`);
  }

  const seenCategoryNames = new Set();
  const seenQuestions = new Set();
  const seenAnswers = new Set();

  categories.forEach((cat, catIdx) => {
    if (!cat || typeof cat !== "object") {
      fail(`Category[${catIdx}] must be an object`);
      return;
    }

    if (typeof cat.name !== "string" || cat.name.trim().length === 0) {
      fail(`Category[${catIdx}] must have a non-empty string 'name'`);
    } else {
      const nameKey = normalizeText(cat.name);
      if (seenCategoryNames.has(nameKey)) {
        fail(`Duplicate category name: "${cat.name}"`);
      }
      seenCategoryNames.add(nameKey);
    }

    if (!Array.isArray(cat.questions)) {
      fail(`Category "${cat?.name ?? catIdx}" must have a 'questions' array`);
      return;
    }

    if (cat.questions.length !== expectedClueCount) {
      fail(
        `Category "${cat.name}" must have exactly ${expectedClueCount} clues; got ${cat.questions.length}`,
      );
    }

    const pointsInCategory = new Set();

    cat.questions.forEach((q, qIdx) => {
      const label = `Category "${cat.name}" clue[${qIdx}]`;

      if (!q || typeof q !== "object") {
        fail(`${label} must be an object`);
        return;
      }

      if (typeof q.points !== "number" || !Number.isFinite(q.points)) {
        fail(`${label} must have numeric 'points'`);
      } else {
        pointsInCategory.add(q.points);
        if (!expectedPoints.includes(q.points)) {
          fail(`${label} has invalid points ${q.points}; expected one of ${expectedPoints.join(", ")}`);
        }
      }

      if (typeof q.question !== "string" || q.question.trim().length === 0) {
        fail(`${label} must have a non-empty string 'question'`);
      }

      if (typeof q.answer !== "string" || q.answer.trim().length === 0) {
        fail(`${label} must have a non-empty string 'answer'`);
      } else {
        const response = extractResponse(q.answer);
        if (!/^(what|who|where|when)\s+(is|are|was|were)\b/iu.test(q.answer.trim())) {
          warn(`${label} answer does not start with a standard Jeopardy response: "${q.answer}"`);
        }

        const normalizedQuestion = normalizeText(q.question);
        const normalizedResponse = normalizeText(response);

        // Heuristic: ensure the response isn't literally embedded in the clue.
        if (normalizedResponse.length >= 4 && normalizedQuestion.includes(normalizedResponse)) {
          fail(`${label} appears to include the response in the clue ("${response}")`);
        }
      }

      if (q.revealed !== false) {
        fail(`${label} must set 'revealed: false' (got ${String(q.revealed)})`);
      }

      // Global duplicate checks (normalized, not perfect but useful)
      if (typeof q.question === "string") {
        const key = normalizeText(q.question);
        if (seenQuestions.has(key)) {
          fail(`Duplicate clue text found: "${q.question}"`);
        }
        seenQuestions.add(key);
      }

      if (typeof q.answer === "string") {
        const key = normalizeText(q.answer);
        if (seenAnswers.has(key)) {
          fail(`Duplicate answer text found: "${q.answer}"`);
        }
        seenAnswers.add(key);
      }
    });

    // Ensure each points value appears once per category
    expectedPoints.forEach((p) => {
      if (!pointsInCategory.has(p)) {
        fail(`Category "${cat.name}" is missing a ${p}-point clue`);
      }
    });
  });

  if (process.exitCode && process.exitCode !== 0) return;
  console.log("OK: Jeopardy data shape and clue sanity checks passed.");
}

main();

