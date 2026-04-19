/**
 * validate-board-data.mjs
 *
 * Validates a Jeopardy board data JSON file and the game manifest.
 * All constraints (columns, rows, pointValues) are read from the game file
 * itself — nothing is hardcoded here.
 *
 * Usage:
 *   node scripts/validate-board-data.mjs                          # validates data/games/current.json
 *   node scripts/validate-board-data.mjs data/games/my-game.json  # validates a specific file
 *
 * Also validates data/manifest.json if present.
 */

import fs from "node:fs";
import path from "node:path";

const ROOT = process.cwd();
const DEFAULT_GAME_FILE = path.resolve(ROOT, "data/games/current.json");
const MANIFEST_FILE = path.resolve(ROOT, "data/manifest.json");

function fail(message) {
  console.error(`ERROR: ${message}`);
  process.exitCode = 1;
}

function warn(message) {
  console.warn(`WARN:  ${message}`);
}

function normalizeText(value) {
  return value
    .toLowerCase()
    .replace(/[^\p{L}\p{N}]+/gu, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function extractResponse(answer) {
  return answer
    .trim()
    .replace(/\?+\s*$/u, "")
    .replace(/^(what|who|where|when)\s+(is|are|was|were)\s+/iu, "")
    .trim();
}

function validateGameFile(filePath) {
  console.log(`\nValidating game file: ${path.relative(ROOT, filePath)}`);

  if (!fs.existsSync(filePath)) {
    fail(`Game file not found: ${filePath}`);
    return false;
  }

  let game;
  try {
    game = JSON.parse(fs.readFileSync(filePath, "utf8"));
  } catch (err) {
    fail(`Failed to parse JSON: ${err.message}`);
    return false;
  }

  // ── Top-level required fields ──────────────────────────────────────────────
  const requiredFields = ["id", "title", "date", "columns", "rows", "pointValues", "categories"];
  for (const field of requiredFields) {
    if (game[field] === undefined || game[field] === null) {
      fail(`Missing required top-level field: "${field}"`);
    }
  }

  if (typeof game.columns !== "number" || !Number.isInteger(game.columns) || game.columns < 1) {
    fail(`"columns" must be a positive integer; got ${JSON.stringify(game.columns)}`);
    return false;
  }

  if (typeof game.rows !== "number" || !Number.isInteger(game.rows) || game.rows < 1) {
    fail(`"rows" must be a positive integer; got ${JSON.stringify(game.rows)}`);
    return false;
  }

  if (!Array.isArray(game.pointValues) || game.pointValues.length !== game.rows) {
    fail(
      `"pointValues" must be an array with exactly ${game.rows} entries (one per row); got ${JSON.stringify(game.pointValues)}`
    );
    return false;
  }

  if (!game.pointValues.every((v) => typeof v === "number" && Number.isFinite(v) && v > 0)) {
    fail(`All "pointValues" entries must be positive numbers`);
    return false;
  }

  const expectedPoints = new Set(game.pointValues);

  // ── Categories ─────────────────────────────────────────────────────────────
  if (!Array.isArray(game.categories)) {
    fail(`"categories" must be an array`);
    return false;
  }

  if (game.categories.length !== game.columns) {
    fail(
      `Expected exactly ${game.columns} categories (matching "columns"); got ${game.categories.length}`
    );
  }

  const seenCategoryNames = new Set();
  const seenQuestions = new Set();
  const seenAnswers = new Set();

  game.categories.forEach((cat, catIdx) => {
    if (!cat || typeof cat !== "object") {
      fail(`categories[${catIdx}] must be an object`);
      return;
    }

    if (typeof cat.name !== "string" || cat.name.trim().length === 0) {
      fail(`categories[${catIdx}] must have a non-empty string "name"`);
    } else {
      const nameKey = normalizeText(cat.name);
      if (seenCategoryNames.has(nameKey)) {
        fail(`Duplicate category name: "${cat.name}"`);
      }
      seenCategoryNames.add(nameKey);
    }

    if (!Array.isArray(cat.questions)) {
      fail(`Category "${cat.name ?? catIdx}" must have a "questions" array`);
      return;
    }

    if (cat.questions.length !== game.rows) {
      fail(
        `Category "${cat.name}" must have exactly ${game.rows} questions (matching "rows"); got ${cat.questions.length}`
      );
    }

    const pointsInCategory = new Set();

    cat.questions.forEach((q, qIdx) => {
      const label = `Category "${cat.name}" question[${qIdx}]`;

      if (!q || typeof q !== "object") {
        fail(`${label} must be an object`);
        return;
      }

      // Points
      if (typeof q.points !== "number" || !Number.isFinite(q.points)) {
        fail(`${label} must have a numeric "points" field`);
      } else {
        if (!expectedPoints.has(q.points)) {
          fail(
            `${label} has invalid points value ${q.points}; expected one of [${game.pointValues.join(", ")}]`
          );
        }
        if (pointsInCategory.has(q.points)) {
          fail(`${label} duplicates the ${q.points}-point value within category "${cat.name}"`);
        }
        pointsInCategory.add(q.points);
      }

      // Question text
      if (typeof q.question !== "string" || q.question.trim().length === 0) {
        fail(`${label} must have a non-empty string "question"`);
      }

      // Answer
      if (typeof q.answer !== "string" || q.answer.trim().length === 0) {
        fail(`${label} must have a non-empty string "answer"`);
      } else {
        if (!/^(what|who|where|when)\s+(is|are|was|were)\b/iu.test(q.answer.trim())) {
          warn(`${label} answer does not start with a standard Jeopardy response: "${q.answer}"`);
        }

        const response = extractResponse(q.answer);
        const normalizedQuestion = normalizeText(q.question);
        const normalizedResponse = normalizeText(response);

        if (normalizedResponse.length >= 4 && normalizedQuestion.includes(normalizedResponse)) {
          fail(`${label} appears to embed the answer in the clue ("${response}")`);
        }
      }

      // Revealed must be false
      if (q.revealed !== false) {
        fail(`${label} must have "revealed": false (got ${JSON.stringify(q.revealed)})`);
      }

      // Global duplicate checks
      if (typeof q.question === "string") {
        const key = normalizeText(q.question);
        if (seenQuestions.has(key)) {
          fail(`Duplicate clue text: "${q.question}"`);
        }
        seenQuestions.add(key);
      }

      if (typeof q.answer === "string") {
        const key = normalizeText(q.answer);
        if (seenAnswers.has(key)) {
          fail(`Duplicate answer text: "${q.answer}"`);
        }
        seenAnswers.add(key);
      }
    });

    // Every expected point value must appear exactly once per category
    for (const p of expectedPoints) {
      if (!pointsInCategory.has(p)) {
        fail(`Category "${cat.name}" is missing a ${p}-point question`);
      }
    }
  });

  return true;
}

function validateManifest(gameFilePath) {
  if (!fs.existsSync(MANIFEST_FILE)) {
    warn(`Manifest not found at ${path.relative(ROOT, MANIFEST_FILE)} — skipping manifest check`);
    return;
  }

  console.log(`\nValidating manifest: ${path.relative(ROOT, MANIFEST_FILE)}`);

  let manifest;
  try {
    manifest = JSON.parse(fs.readFileSync(MANIFEST_FILE, "utf8"));
  } catch (err) {
    fail(`Failed to parse manifest JSON: ${err.message}`);
    return;
  }

  if (typeof manifest.current !== "string" || manifest.current.trim().length === 0) {
    fail(`Manifest must have a non-empty string "current" field`);
  }

  if (!Array.isArray(manifest.games) || manifest.games.length === 0) {
    fail(`Manifest must have a non-empty "games" array`);
    return;
  }

  const gameIds = new Set();
  manifest.games.forEach((entry, idx) => {
    const label = `manifest.games[${idx}]`;
    for (const field of ["id", "title", "date", "filePath", "columns", "rows"]) {
      if (!entry[field]) fail(`${label} missing required field "${field}"`);
    }
    if (entry.id) {
      if (gameIds.has(entry.id)) fail(`${label} duplicate game id "${entry.id}"`);
      gameIds.add(entry.id);
    }
    if (entry.filePath) {
      const resolved = path.resolve(ROOT, entry.filePath);
      if (!fs.existsSync(resolved)) {
        fail(`${label} filePath does not exist: "${entry.filePath}"`);
      }
    }
  });

  if (manifest.current && !gameIds.has(manifest.current)) {
    fail(`Manifest "current" value "${manifest.current}" does not match any game id`);
  }
}

// ── Entry point ───────────────────────────────────────────────────────────────

const targetFile = process.argv[2]
  ? path.resolve(ROOT, process.argv[2])
  : DEFAULT_GAME_FILE;

const gameOk = validateGameFile(targetFile);
if (gameOk) {
  validateManifest(targetFile);
}

if (!process.exitCode || process.exitCode === 0) {
  console.log("\nOK: Board data and manifest validation passed.");
}
