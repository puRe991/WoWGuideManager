# Product roadmap

## Phase 1: Classic MVP

- Portable Windows app shell.
- Browseable Classic guide catalog.
- Search, category, expansion and premium filters.
- Subscription tier presentation.
- Expansion roadmap cards.

## Phase 2: Content operations

- Markdown or CMS-backed guide import.
- Author workflow with review status.
- Versioned guide updates.
- Screenshot and map attachment support.
- Source notes for every factual claim.

## Phase 3: Premium platform

- Account login.
- Payment provider integration.
- Entitlement API.
- Signed offline license cache.
- Premium-only content packs.

## Phase 4: Expansion scale-out

- The Burning Crusade guide pack: **in progress**.
  - Done: Guide Command Center cards for Leveling, Attunements, Heroics, Reputation, Professions, Gold, PvP and Classes (`src/data/guides.js`); a full 16-instance TBC Dungeon Atlas (`src/data/dungeonGuides.js`) with the Dungeon Atlas UI now expansion-aware (`src/app.js` switches rail/heading/count by selected expansion, with an honest empty state for expansions without data yet).
  - Still open: per-class TBC guides (`classGuides`/`classBuildGuides`/`specGuides` equivalent) and TBC profession deep guides. Those sections currently show Classic content with an explicit "Classic-only for now" scope note when a non-Classic expansion is selected, rather than silently mislabeling Classic data as TBC.
- Wrath of the Lich King guide pack.
- Mists of Pandaria guide pack: roadmap card added (`src/data/guides.js`), status **Geplant** — no guide/dungeon content yet.
- Retail expansion packs.
- Regional localization.
- Guild and team workspaces.

## Software quality (ongoing)

- CI workflow (`.github/workflows/ci.yml`) runs lint, typecheck, test, build, asset checks and the Playwright e2e suite on every push/PR.
- Dependency-free lint script (`scripts/lint.mjs`) enforces basic syntax and style hygiene; ESLint (`eslint.config.js`) adds deeper static analysis on top.
- `src/app.js` was split into `src/state.js`, `src/render/*.js` and `src/views/*.js` (see README "Architecture") so state handling, shared rendering and per-section pages are separately testable instead of living in one ~1360-line file.
- The data layer (`src/data/*.js`) is JSDoc-typed against shapes in `src/types.js` and checked with `npm run typecheck` (`tsc --checkJs`), catching missing/mistyped fields in new guide entries.
- `node --test` (`tests/`) covers the extracted state selectors, router and pure render/tile-builder functions; Playwright (`e2e/`) covers real browser flows (search, filters, expansion switching, navigation through every detail page type).
- `src/app.js` fails gracefully: missing data falls back to an empty state instead of a blank crashed page, and a top-level error boundary shows a banner if initialization throws.
- Still open: an accessibility pass (keyboard navigation, ARIA roles for the tab/rail components).
