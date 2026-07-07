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

- The Burning Crusade guide pack: **started**. Guide Command Center cards for Leveling, Attunements, Heroics, Reputation, Professions, Gold, PvP and Classes are live in `src/data/guides.js`. Still open: per-class TBC guides (`classGuides`/`classBuildGuides`/`specGuides` equivalent), a TBC dungeon atlas, and TBC profession deep guides — today those sections still only render Classic data in `src/app.js`.
- Wrath of the Lich King guide pack.
- Retail expansion packs.
- Regional localization.
- Guild and team workspaces.

## Software quality (ongoing)

- CI workflow (`.github/workflows/ci.yml`) runs lint, test, build and asset checks on every push/PR.
- Dependency-free lint script (`scripts/lint.mjs`) enforces basic syntax and style hygiene.
- `src/app.js` fails gracefully: missing data falls back to an empty state instead of a blank crashed page, and a top-level error boundary shows a banner if initialization throws.
- Still open: automated UI/browser tests (current tests are data- and string-assertion based), TypeScript or JSDoc typing for the data layer, and an accessibility pass (keyboard navigation, ARIA roles for the tab/rail components).
