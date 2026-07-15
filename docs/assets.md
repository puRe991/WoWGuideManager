# WoW assets, maps and icons

The repository does not bundle Blizzard-owned image files. Class and profession
icons are hotlinked instead; dungeon and expansion artwork still needs licensed
local files.

## Why assets are not committed

World of Warcraft artwork, maps, icons, logos and screenshots are protected
Blizzard Entertainment content. The app never downloads or stores these files
in the repository.

## Class and profession icons: hotlinked, not committed

`src/data/assetManifest.js` points `classes` and `professions` directly at
Wowhead's public static icon CDN (`wow.zamimg.com`), the same CDN countless
WoW fan sites, guides and addons use to embed Blizzard icon textures without
redistributing the files themselves. No binary image ever lives in this repo
for these — the browser just requests the icon from Wowhead at runtime.

Every URL in `assetManifest.js` was checked (HTTP status + real image content,
cross-referenced against Wowhead's own profession/class pages) before being
added. If Wowhead ever renames or removes an icon, the `<img onerror>` handler
in `src/app.js` falls back to a styled placeholder with the item's initial
letter instead of a broken image — see `renderAssetImage` in `src/app.js`.

## Leveling zone icons: hotlinked where verified, local otherwise

`assetManifest.zones` powers the zone-route images on leveling guides (e.g.
the Horde 1-60 route). Each zone was checked individually against
`wow.zamimg.com`: zones whose "Explore <Zone>" achievement icon still
resolves (HTTP 200, real image) are hotlinked directly; starting zones use
the matching race icon (also verified) since Wowhead does not keep a
zone-specific icon for them. Zones that were reworked in later expansions
(the old icon URL no longer resolves) fall back to local files under
`assets/wow/icons/zones/`, same convention as dungeon icons below.

## Dungeon and expansion artwork: still local-only

No verified, per-dungeon icon or expansion hero screenshot source was found
that could be confidently hotlinked (Wowhead's zone/dungeon pages render their
media client-side, so there's no static, stable URL to link to per instance).
These slots (`assetManifest.dungeons`, `assetManifest.dungeonMaps`,
`assetManifest.expansions`) still expect local files under `assets/wow/`:

- `assets/wow/expansions/` for expansion hero artwork.
- `assets/wow/icons/dungeons/` for dungeon icons.
- `assets/wow/icons/zones/` for the leveling-zone icons without a verified hotlink.
- `assets/wow/maps/` for Azeroth, expansion and dungeon maps.

The exact expected filenames are listed in `src/data/assetManifest.js`. Place
only files you are licensed to use there; `npm run assets:check` reports which
of these local slots are still empty (it does not check the hotlinked class/
profession URLs, since those aren't local files).

## Runtime behavior

`renderAssetImage` in `src/app.js` renders an `<img>` for every icon/art slot.
If the image is missing or fails to load, the slot shows a styled fallback
with the item's initial letter (`.asset-fallback` in `src/styles.css`) instead
of a broken image or silent blank box.
