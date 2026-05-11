import { mkdir, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { assetManifest, assetSources } from '../src/data/assetManifest.js';

async function download(url, destination) {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Failed ${response.status} ${response.statusText}: ${url}`);
  }

  await mkdir(path.dirname(destination), { recursive: true });
  const bytes = Buffer.from(await response.arrayBuffer());
  await writeFile(destination, bytes);
  console.log(`Downloaded ${destination}`);
}

const downloads = Object.entries(assetSources.classes).map(([classId, url]) => ({
  url,
  destination: assetManifest.classes[classId]
}));

for (const item of downloads) {
  await download(item.url, item.destination);
}

console.log('Class icon download complete. Add licensed expansion art, dungeon icons and maps manually or extend assetSources.');
