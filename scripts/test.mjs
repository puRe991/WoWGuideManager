import assert from 'node:assert/strict';
import { existsSync, readdirSync, readFileSync } from 'node:fs';
import { guideCards } from '../src/data/guides.js';
import { classGuides } from '../src/data/classGuides.js';
import { classBuildGuides } from '../src/data/classBuildGuides.js';
import { specGuides } from '../src/data/specGuides.js';
import { dungeonGuides } from '../src/data/dungeonGuides.js';
import { assetManifest, assetSources } from '../src/data/assetManifest.js';
import { filterGuides } from '../src/lib/filterGuides.js';

const ignoredScanDirs = new Set(['.git', 'dist', 'handoff', 'node_modules', 'release', '.tools']);
const textFilePattern = /\.(bat|cmd|css|html|js|json|md|mjs|ps1|txt)$/i;
const mergeConflictPattern = /^(<<<<<<<|>>>>>>>)(?: .*)?$|^=======$/m;

function listProjectTextFiles(directory = '.') {
  return readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const relativePath = directory === '.' ? entry.name : `${directory}/${entry.name}`;

    if (entry.isDirectory()) {
      return ignoredScanDirs.has(entry.name) ? [] : listProjectTextFiles(relativePath);
    }

    if (!entry.isFile() || !textFilePattern.test(entry.name)) {
      return [];
    }

    return [relativePath];
  });
}

const filesWithMergeMarkers = listProjectTextFiles().filter((file) => mergeConflictPattern.test(readFileSync(file, 'utf8')));
assert.deepEqual(filesWithMergeMarkers, [], `Unresolved merge-conflict markers found in: ${filesWithMergeMarkers.join(', ')}`);

const auction = filterGuides(guideCards, {
  search: 'auction',
  category: 'Alle',
  expansion: 'all',
  showPremiumOnly: false
});
assert.deepEqual(auction.map((guide) => guide.id), ['classic-gold-auction']);

const premiumRaid = filterGuides(guideCards, {
  search: '',
  category: 'Raids',
  expansion: 'classic',
  showPremiumOnly: true
});
assert.equal(premiumRaid.length, 1);
assert.equal(premiumRaid[0].premium, true);

assert.ok(existsSync('index.html'), 'index.html must exist');
const indexHtml = readFileSync('index.html', 'utf8');
assert.match(indexHtml, /expansion-picker/, 'home screen must include an expansion selector');
assert.match(indexHtml, /class-guides/, 'home screen must include class guide navigation');
assert.match(indexHtml, /dungeon-guides/, 'home screen must include the Classic dungeon atlas');
assert.ok(guideCards.length >= 8, 'MVP should include at least eight guide cards');
assert.equal(classGuides.length, 9, 'Classic should include all nine original classes');
assert.ok(dungeonGuides.length >= 20, 'Classic dungeon atlas should include the main leveling and endgame dungeons');
assert.equal(dungeonGuides.length, 20, 'Classic dungeon atlas should cover all 20 Classic dungeon entries including combined wing hubs');
assert.ok(dungeonGuides.every((dungeon) => dungeon.route.length >= 5 && dungeon.bosses.length >= 4), 'Each dungeon guide should include route steps and boss targets');
assert.ok(dungeonGuides.every((dungeon) => dungeon.loot.length >= 3 && dungeon.tips.length >= 3 && dungeon.quests.length >= 3 && dungeon.composition.length >= 3 && dungeon.time), 'Each dungeon guide should include loot, group tips, quests, composition and time planning');
assert.ok(classGuides.every((classGuide) => classGuide.rotation.length >= 5), 'Each class guide should include a detailed rotation checklist');
assert.ok(classGuides.every((classGuide) => assetManifest.classes[classGuide.id]), 'Each class must reference a real asset slot');
assert.ok(dungeonGuides.every((dungeon) => assetManifest.dungeons[dungeon.id] && assetManifest.dungeonMaps[dungeon.id]), 'Each dungeon must reference icon and map asset slots');
assert.ok(classGuides.every((classGuide) => assetSources.classes[classGuide.id]), 'Each class must have an optional real icon source URL');

const buildScript = readFileSync('scripts/build.mjs', 'utf8');
assert.match(buildScript, /app\.bundle\.js/, 'build must emit a browser-safe bundle for file protocol usage');
assert.match(buildScript, /dungeonGuides\.js/, 'build must include dungeon guide data in the portable bundle');
assert.match(buildScript, /assetManifest\.js/, 'build must include real asset manifest data in the portable bundle');
assert.match(buildScript, /classBuildGuides\.js/, 'build must include advanced rotation and BiS data in the portable bundle');
assert.match(buildScript, /specGuides\.js/, 'build must include per-spec guide data in the portable bundle');
assert.match(buildScript, /createWindowsData/, 'portable build must export native Windows app data');
assert.match(buildScript, /Start-WoWGuideManager\.cmd/, 'portable build must launch the native Windows app shell');

const windowsShell = readFileSync('windows/WoWGuideManager.ps1', 'utf8');
assert.match(windowsShell, /PresentationFramework/, 'Windows shell must use native WPF assemblies');
assert.match(windowsShell, /Show-Class/, 'Windows shell must render class guides natively');
assert.match(windowsShell, /GetNewClosure/, 'Windows shell event handlers must capture per-tab selection callbacks');

const windowsLauncher = readFileSync('windows/Start-WoWGuideManager.cmd', 'utf8');
assert.match(windowsLauncher, /-STA/, 'Windows launcher must start PowerShell in STA mode for WPF');

const handoffScript = readFileSync('scripts/package-handoff.mjs', 'utf8');
assert.match(handoffScript, /Git tracked files unavailable/, 'handoff packaging must work without git metadata');
assert.match(handoffScript, /listProjectFiles/, 'handoff packaging must fall back to a directory scan');

const downloadScript = readFileSync('scripts/download-assets.mjs', 'utf8');
assert.match(downloadScript, /assetSources/, 'asset downloader must use real source URLs from the asset manifest');

const setupBatch = readFileSync('setup-windows.bat', 'utf8');
assert.match(setupBatch, /:verify_node/, 'Windows setup must verify that node and npm are startable');
assert.match(setupBatch, /call npm --version/, 'Windows setup must call npm.cmd safely from batch files');
assert.match(setupBatch, /:install_portable_node/, 'Windows setup must fall back to a portable Node.js ZIP instead of MSI-only installation');
assert.match(setupBatch, /\.tools\\node/, 'Windows setup must add the portable Node.js folder to PATH');

console.log('All tests passed.');
