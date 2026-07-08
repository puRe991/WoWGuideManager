import { existsSync, statSync } from 'node:fs';
import { assetManifest } from '../src/data/assetManifest.js';

function flattenAssets(value) {
  if (typeof value === 'string') {
    return [value];
  }

  return Object.values(value).flatMap(flattenAssets);
}

const allAssets = [...new Set(flattenAssets(assetManifest))];
const remoteAssets = allAssets.filter((assetPath) => assetPath.startsWith('http://') || assetPath.startsWith('https://'));
const localAssets = allAssets.filter((assetPath) => !remoteAssets.includes(assetPath));
const missing = localAssets.filter((assetPath) => !existsSync(assetPath) || statSync(assetPath).size === 0);

console.log(`${remoteAssets.length} asset slot(s) are hotlinked from a public CDN (classes, professions) and are not checked locally.`);

if (missing.length > 0) {
  console.warn('Missing licensed WoW asset files (dungeons, expansions):');
  for (const asset of missing) {
    console.warn(`- ${asset}`);
  }
  console.warn('Place licensed Blizzard/WoW artwork in the paths above. See docs/assets.md.');
  process.exitCode = 0;
} else {
  console.log(`All ${localAssets.length} local WoW asset slots are populated.`);
}
