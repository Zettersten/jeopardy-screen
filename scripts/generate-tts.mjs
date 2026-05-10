#!/usr/bin/env node
/**
 * Build-time script: generates Fish Audio TTS MP3s for every question and answer
 * in the current game, saving them as static files in public/audio/tts/.
 *
 * Output naming: {question|answer}-{catIdx}-{qIdx}.mp3
 * Run: FISH_AUDIO_API_KEY=xxx node scripts/generate-tts.mjs
 *      (or define FISH_AUDIO_API_KEY in .env for local dev)
 */

import { readFileSync, writeFileSync, existsSync, mkdirSync } from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");

// ── Load .env for local development ──────────────────────────────────────────
const envPath = path.join(ROOT, ".env");
if (existsSync(envPath)) {
  for (const line of readFileSync(envPath, "utf-8").split("\n")) {
    const eq = line.indexOf("=");
    if (eq === -1) continue;
    const key = line.slice(0, eq).trim();
    const val = line.slice(eq + 1).trim();
    if (key && !process.env[key]) process.env[key] = val;
  }
}

// ── Config ────────────────────────────────────────────────────────────────────
const API_KEY = process.env.FISH_AUDIO_API_KEY;
const VOICE_ID = "206876150db246b28779d28b3471b74b";
const TTS_URL = "https://api.fish.audio/v1/tts";
const OUT_DIR = path.join(ROOT, "public", "audio", "tts");
const BATCH_SIZE = 5;

if (!API_KEY) {
  console.error("ERROR: FISH_AUDIO_API_KEY is not set.");
  process.exit(1);
}

mkdirSync(OUT_DIR, { recursive: true });

// ── Game data ─────────────────────────────────────────────────────────────────
const gameData = JSON.parse(
  readFileSync(path.join(ROOT, "data", "games", "current.json"), "utf-8")
);

// ── Build task list ───────────────────────────────────────────────────────────
const tasks = [];
gameData.categories.forEach((category, catIdx) => {
  category.questions.forEach((question, qIdx) => {
    tasks.push({ type: "question", text: question.question, catIdx, qIdx });
    tasks.push({ type: "answer", text: question.answer, catIdx, qIdx });
  });
});

console.log(`Generating ${tasks.length} TTS files (${BATCH_SIZE} at a time)...`);

// ── Fetch helper ──────────────────────────────────────────────────────────────
async function fetchTTS(text) {
  const res = await fetch(TTS_URL, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${API_KEY}`,
      "Content-Type": "application/json",
      model: "s2-pro",
    },
    body: JSON.stringify({
      text,
      reference_id: VOICE_ID,
      format: "mp3",
      prosody: { speed: 1.0 },
    }),
  });
  if (!res.ok) {
    const body = await res.text().catch(() => "");
    throw new Error(`HTTP ${res.status}: ${body}`);
  }
  return Buffer.from(await res.arrayBuffer());
}

// ── Process in batches ────────────────────────────────────────────────────────
let generated = 0;
let skipped = 0;

for (let i = 0; i < tasks.length; i += BATCH_SIZE) {
  const batch = tasks.slice(i, i + BATCH_SIZE);
  await Promise.all(
    batch.map(async ({ type, text, catIdx, qIdx }) => {
      const filename = `${type}-${catIdx}-${qIdx}.mp3`;
      const filepath = path.join(OUT_DIR, filename);

      if (existsSync(filepath)) {
        console.log(`  skip  ${filename}`);
        skipped++;
        return;
      }

      try {
        const buffer = await fetchTTS(text);
        writeFileSync(filepath, buffer);
        console.log(`  done  ${filename}`);
        generated++;
      } catch (err) {
        console.error(`  FAIL  ${filename}: ${err.message}`);
        process.exitCode = 1;
      }
    })
  );
}

console.log(`\nDone. Generated: ${generated}, Skipped: ${skipped}`);
if (process.exitCode === 1) {
  console.error("One or more files failed to generate.");
}
