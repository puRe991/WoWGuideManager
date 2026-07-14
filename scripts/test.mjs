import assert from 'node:assert/strict';
import { existsSync, readFileSync } from 'node:fs';
import { guideCards } from '../src/data/guides.js';
import { classGuides } from '../src/data/classGuides.js';
import { classBuildGuides } from '../src/data/classBuildGuides.js';
import { specGuides } from '../src/data/specGuides.js';
import { dungeonGuides } from '../src/data/dungeonGuides.js';
import { professionGuides } from '../src/data/professionGuides.js';
import { assetManifest } from '../src/data/assetManifest.js';
import { filterGuides } from '../src/lib/filterGuides.js';

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
assert.match(indexHtml, /profession-guides/, 'home screen must include Classic profession guides');
assert.ok(guideCards.length >= 8, 'MVP should include at least eight guide cards');

const tbcGuides = guideCards.filter((guide) => guide.expansion === 'the-burning-crusade');
assert.ok(tbcGuides.length >= 8, 'The Burning Crusade should ship a first guide pack with at least eight cards');
assert.ok(
  new Set(tbcGuides.map((guide) => guide.category)).size >= 6,
  'The Burning Crusade guide pack should span multiple categories, not just leveling'
);
assert.ok(
  tbcGuides.every((guide) => guide.checklist.length >= 4 && guide.summary.length > 0),
  'Every The Burning Crusade guide card should include a summary and a full checklist'
);
assert.equal(classGuides.length, 9, 'Classic should include all nine original classes');

assert.ok(dungeonGuides.classic, 'dungeonGuides must expose a classic expansion key');
assert.ok(dungeonGuides['the-burning-crusade'], 'dungeonGuides must expose a the-burning-crusade expansion key');

const classicDungeons = dungeonGuides.classic;
assert.ok(classicDungeons.length >= 20, 'Classic dungeon atlas should include the main leveling and endgame dungeons');
assert.equal(classicDungeons.length, 20, 'Classic dungeon atlas should cover all 20 Classic dungeon entries including combined wing hubs');
assert.ok(classicDungeons.every((dungeon) => dungeon.route.length >= 5 && dungeon.bosses.length >= 4), 'Each Classic dungeon guide should include route steps and boss targets');

const tbcDungeons = dungeonGuides['the-burning-crusade'];
assert.equal(tbcDungeons.length, 16, 'The Burning Crusade dungeon atlas should cover all 16 TBC 5-player instances');
assert.ok(tbcDungeons.every((dungeon) => dungeon.route.length >= 5 && dungeon.bosses.length >= 2), 'Each TBC dungeon guide should include route steps and boss targets (TBC instances are smaller than Classic wing hubs)');
assert.ok(new Set(tbcDungeons.map((dungeon) => dungeon.id)).size === tbcDungeons.length, 'TBC dungeon ids must be unique');

const allDungeons = [...classicDungeons, ...tbcDungeons];
assert.ok(allDungeons.every((dungeon) => dungeon.loot.length >= 3 && dungeon.tips.length >= 3 && dungeon.quests.length >= 3 && dungeon.composition.length >= 3 && dungeon.time), 'Each dungeon guide should include loot, group tips, quests, composition and time planning');
assert.ok(allDungeons.every((dungeon) => assetManifest.dungeons[dungeon.id] && assetManifest.dungeonMaps[dungeon.id]), 'Each dungeon must reference icon and map asset slots');

assert.equal(professionGuides.length, 3, 'Classic profession guide pack should include Alchemy, Enchanting and Mining');
assert.equal(professionGuides[0].id, 'classic-alchemy', 'Alchemy guide should use a stable id');
assert.ok(professionGuides[0].shoppingList.length >= 15 && professionGuides[0].steps.length >= 12, 'Alchemy guide should include material planning and a full 1-300 route');
assert.ok(assetManifest.professions.alchemy?.startsWith('https://wow.zamimg.com/'), 'Alchemy profession must reference a verified hotlinked icon URL');

const enchantingGuide = professionGuides.find((profession) => profession.id === 'classic-enchanting');
assert.ok(enchantingGuide, 'Profession guide pack should include an Enchanting guide');
assert.ok(enchantingGuide.shoppingList.length >= 15 && enchantingGuide.steps.length >= 12, 'Enchanting guide should include material planning and a full 1-300 route');
assert.ok(assetManifest.professions.enchanting?.startsWith('https://wow.zamimg.com/'), 'Enchanting profession must reference a verified hotlinked icon URL');

const miningGuide = professionGuides.find((profession) => profession.id === 'classic-mining');
assert.ok(miningGuide, 'Profession guide pack should include a Mining guide');
assert.ok(miningGuide.shoppingList.length >= 5 && miningGuide.steps.length >= 5, 'Mining guide should include ore planning and a full 1-300 route');
assert.ok(assetManifest.professions.mining?.startsWith('https://wow.zamimg.com/'), 'Mining profession must reference a verified hotlinked icon URL');
assert.ok(miningGuide.externalGuides?.some((link) => link.url === 'https://overgear.com/guides/de/wow-classic/guide-for-mining/'), 'Mining guide should link the Overgear Classic mining guide');
assert.ok(classGuides.every((classGuide) => classGuide.rotation.length >= 5), 'Each class guide should include a detailed rotation checklist');
assert.ok(classGuides.every((classGuide) => assetManifest.classes[classGuide.id]?.startsWith('https://wow.zamimg.com/')), 'Each class must reference a verified hotlinked icon URL');

const buildScript = readFileSync('scripts/build.mjs', 'utf8');
assert.match(buildScript, /app\.bundle\.js/, 'build must emit a browser-safe bundle for file protocol usage');
assert.match(buildScript, /dungeonGuides\.js/, 'build must include dungeon guide data in the portable bundle');
assert.match(buildScript, /professionGuides\.js/, 'build must include profession guide data in the portable bundle');
assert.match(buildScript, /assetManifest\.js/, 'build must include real asset manifest data in the portable bundle');
assert.match(buildScript, /classBuildGuides\.js/, 'build must include advanced rotation and BiS data in the portable bundle');
assert.match(buildScript, /specGuides\.js/, 'build must include per-spec guide data in the portable bundle');
assert.match(buildScript, /createWindowsData/, 'portable build must export native Windows app data');
assert.match(buildScript, /Start-WoWGuideManager\.cmd/, 'portable build must launch the native Windows app shell');

const windowsShell = readFileSync('windows/WoWGuideManager.ps1', 'utf8');
assert.match(windowsShell, /PresentationFramework/, 'Windows shell must use native WPF assemblies');
assert.match(windowsShell, /Show-Class/, 'Windows shell must render class guides natively');
assert.match(windowsShell, /Show-Profession/, 'Windows shell must render profession guides natively');
assert.match(windowsShell, /GetNewClosure/, 'Windows shell event handlers must capture per-tab selection callbacks');

const windowsLauncher = readFileSync('windows/Start-WoWGuideManager.cmd', 'utf8');
assert.match(windowsLauncher, /-STA/, 'Windows launcher must start PowerShell in STA mode for WPF');

const handoffScript = readFileSync('scripts/package-handoff.mjs', 'utf8');
assert.match(handoffScript, /Git tracked files unavailable/, 'handoff packaging must work without git metadata');
assert.match(handoffScript, /listProjectFiles/, 'handoff packaging must fall back to a directory scan');

const setupBatch = readFileSync('setup-windows.bat', 'utf8');
assert.match(setupBatch, /:verify_node/, 'Windows setup must verify that node and npm are startable');
assert.match(setupBatch, /call npm --version/, 'Windows setup must call npm.cmd safely from batch files');
assert.match(setupBatch, /:install_portable_node/, 'Windows setup must fall back to a portable Node.js ZIP instead of MSI-only installation');
assert.match(setupBatch, /\.tools\\node/, 'Windows setup must add the portable Node.js folder to PATH');

const packageJson = JSON.parse(readFileSync('package.json', 'utf8'));
assert.ok(packageJson.scripts.lint, 'package.json must expose a lint script for CI');
assert.ok(existsSync('scripts/lint.mjs'), 'lint script must exist');
assert.ok(existsSync('.github/workflows/ci.yml'), 'CI workflow must exist so lint/test/build run on every push and PR');

console.log('All tests passed.');
