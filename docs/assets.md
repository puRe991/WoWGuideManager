# WoW assets, maps and icons

The app is wired for real World of Warcraft artwork, maps and icons under `assets/wow/`, but the repository does not bundle Blizzard-owned image files.

## Why assets are not committed

World of Warcraft artwork, maps, icons, logos and screenshots are protected Blizzard Entertainment content. Keep only files you are licensed to use in `assets/wow/` and preserve copyright/trademark notices required by Blizzard's rules.

## Expected folders

- `assets/wow/expansions/` for expansion hero artwork.
- `assets/wow/icons/classes/` for class icons.
- `assets/wow/icons/dungeons/` for dungeon icons.
- `assets/wow/maps/` for Azeroth, expansion and dungeon maps.

The exact expected filenames are listed in `src/data/assetManifest.js`.

## Runtime behavior

The UI no longer uses emoji/demo graphics. It renders image slots from `assetManifest`. If an image file is missing, the app shows a neutral "Asset fehlt" notice for that slot instead of a fake placeholder graphic.


## Optional icon downloader

`npm run assets:download` can populate class icon slots from public Wowhead icon CDN URLs listed in `assetSources`. Use it only if your project is allowed to use those assets. Expansion art, dungeon maps and dungeon icons still require licensed files in the paths listed by `npm run assets:check`.
