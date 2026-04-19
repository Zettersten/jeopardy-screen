# Jeopardy! Game Board

Interactive Jeopardy game board with 7 categories and flip animations.

## Getting started

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

```sh
git clone https://github.com/Zettersten/jeopardy-screen.git
cd jeopardy-screen
npm install
npm run dev
```

## Tech stack

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## Jeopardy question data (rules of the repo)

We **do not need UI changes** for routine content refreshes. Updates should target the Jeopardy categories + clues data only:

- **Data file**: `src/data/jeopardyData.ts`
- **Rules / guidelines**: `docs/JEOPARDY_DATA_RULES.md`

Validate changes locally:

```sh
npm run validate:data
npm run build
npm run lint
```

