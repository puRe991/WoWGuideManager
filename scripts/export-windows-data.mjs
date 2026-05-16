import { mkdir, writeFile } from 'node:fs/promises';
import { expansions, guideCards, categories } from '../src/data/guides.js';
import { classGuides } from '../src/data/classGuides.js';
import { classBuildGuides } from '../src/data/classBuildGuides.js';
import { specGuides } from '../src/data/specGuides.js';
import { dungeonGuides } from '../src/data/dungeonGuides.js';
import { professionGuides } from '../src/data/professionGuides.js';
import { subscriptionTiers } from '../src/data/subscriptions.js';
import { assetManifest } from '../src/data/assetManifest.js';

const output = {
  generatedAt: new Date().toISOString(),
  expansions,
  categories,
  guideCards,
  classGuides,
  classBuildGuides,
  specGuides,
  dungeonGuides,
  professionGuides,
  subscriptionTiers,
  assetManifest
};

await mkdir('dist/windows', { recursive: true });
await writeFile('dist/windows/app-data.json', JSON.stringify(output, null, 2), 'utf8');
console.log('Windows app data exported: dist/windows/app-data.json');
