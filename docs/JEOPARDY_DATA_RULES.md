# Jeopardy Data Rules (Questions & Categories)

This repo intentionally treats the Jeopardy board as **data-driven**. The UI is considered stable and **we do not change UI code** when rotating content.

Historically, question updates in this repo have been simple data swaps (e.g. commits like “Update Jeopardy questions and answers”), so these rules codify what “good” looks like for future updates.

## Where the data lives

- **Single source of truth**: `src/data/jeopardyData.ts`
- **Export**: `export const categories: Category[]`

## Board shape (UI contract — don’t break it)

The board UI assumes a fixed clue grid:

- **Exactly 7 categories**
- **Exactly 8 clues per category**
- **Point values**: `100, 200, 300, 400, 500, 600, 700, 800` (each used once per category)
- **All clues start unrevealed**: `revealed: false`

If you change these, you are implicitly changing the UI contract (which we don’t do).

## Jeopardy-style clue writing rules

- **Be Jeopardy-like**: write a clue; the response appears in the answer.
- **Don’t give away the response**: the clue should not contain the response (or a near-verbatim version of it).
- **Challenging but fair**: avoid trivia that’s only guessable by luck; include an identifying detail.
- **Relevant to late-80s-born players**:
  - Heavy preference for **1990s + 2000s** pop culture, tech, games, news, sports, etc.
  - Earlier references are OK if they were culturally “in the air” during the 90s/00s.
- **Don’t make things up**: no invented facts, quotes, credits, dates, or attributions.
- **Avoid “this/that” ambiguity**: if multiple answers could fit, add one more discriminating detail.

## Answer formatting rules

- Answers should be phrased as responses:
  - Prefer: **“What is …?”**, **“Who is …?”**, **“What are …?”**, **“Who are …?”**
  - (Other Jeopardy forms are acceptable if needed, but keep it consistent.)

## Required checks before committing

From the repo root:

```sh
npm run validate:data
npm run build
npm run lint
```

`validate:data` is designed to catch common mistakes (wrong counts, wrong points, “answer appears in clue”, duplicates, etc.) without any UI changes.

