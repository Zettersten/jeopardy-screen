## Summary
- [ ] This PR updates **only** Jeopardy data (no UI changes).

## Scope
- **Allowed**: `src/data/jeopardyData.ts` (categories + clues)
- **Not needed**: UI/component/layout changes (the board is intentionally data-driven)

## Question-writing checklist
- [ ] Clues are **Jeopardy-style** and **don’t contain the response** in the clue text
- [ ] Clues are **challenging but fair** (include a discriminating detail)
- [ ] Content is **90s/2000s relevant** for late-80s-born players
- [ ] Nothing is invented (no made-up dates, attributions, quotes, “facts”)
- [ ] Answers are phrased as responses (e.g., “What is…?”, “Who is…?”)

## Data contract (must match UI expectations)
- [ ] Exactly **7 categories**
- [ ] Exactly **8 clues per category**
- [ ] Points are **100–800 by 100s**, each used once per category
- [ ] All clues have `revealed: false`

## Validation
- [ ] `npm run validate:data`
- [ ] `npm run build`
- [ ] `npm run lint`

