import { existsSync, statSync } from 'node:fs';
import { assetManifest } from '../src/data/assetManifest.js';

function flattenAssets(value) {
  if (typeof value === 'string') {
    return [value];
  }

  return Object.values(value).flatMap(flattenAssets);
}

const assets = [...new Set(flattenAssets(assetManifest))];
const missing = assets.filter((assetPath) => !existsSync(assetPath) || statSync(assetPath).size === 0);

if (missing.length > 0) {
  console.warn('Missing licensed WoW asset files:');
  for (const asset of missing) {
    console.warn(`- ${asset}`);
  }
  console.warn('Place licensed Blizzard/WoW artwork in the paths above. See docs/assets.md.');
  process.exitCode = 0;
} else {
  console.log(`All ${assets.length} WoW asset slots are populated.`);
}
