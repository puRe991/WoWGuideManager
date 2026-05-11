import assert from 'node:assert/strict';
import { existsSync, readFileSync } from 'node:fs';
import { guideCards } from '../src/data/guides.js';
import { classGuides } from '../src/data/classGuides.js';
import { dungeonGuides } from '../src/data/dungeonGuides.js';
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
assert.ok(guideCards.length >= 8, 'MVP should include at least eight guide cards');
assert.equal(classGuides.length, 9, 'Classic should include all nine original classes');
assert.ok(dungeonGuides.length >= 20, 'Classic dungeon atlas should include the main leveling and endgame dungeons');
assert.ok(dungeonGuides.every((dungeon) => dungeon.route.length >= 5 && dungeon.bosses.length >= 4), 'Each dungeon guide should include route steps and boss targets');
assert.ok(classGuides.every((classGuide) => classGuide.rotation.length >= 5), 'Each class guide should include a detailed rotation checklist');

const buildScript = readFileSync('scripts/build.mjs', 'utf8');
assert.match(buildScript, /app\.bundle\.js/, 'build must emit a browser-safe bundle for file protocol usage');
assert.match(buildScript, /dungeonGuides\.js/, 'build must include dungeon guide data in the portable bundle');

const setupBatch = readFileSync('setup-windows.bat', 'utf8');
assert.match(setupBatch, /:verify_node/, 'Windows setup must verify that node and npm are startable');
assert.match(setupBatch, /call npm --version/, 'Windows setup must call npm.cmd safely from batch files');
assert.match(setupBatch, /:install_portable_node/, 'Windows setup must fall back to a portable Node.js ZIP instead of MSI-only installation');
assert.match(setupBatch, /\.tools\\node/, 'Windows setup must add the portable Node.js folder to PATH');

console.log('All tests passed.');
