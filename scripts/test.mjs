import assert from 'node:assert/strict';
import { existsSync, readFileSync } from 'node:fs';
import { guideCards } from '../src/data/guides.js';
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
assert.ok(guideCards.length >= 8, 'MVP should include at least eight guide cards');

const buildScript = readFileSync('scripts/build.mjs', 'utf8');
assert.match(buildScript, /app\.bundle\.js/, 'build must emit a browser-safe bundle for file protocol usage');

const setupBatch = readFileSync('setup-windows.bat', 'utf8');
assert.match(setupBatch, /:verify_node/, 'Windows setup must verify that node and npm are startable');
assert.match(setupBatch, /call npm --version/, 'Windows setup must call npm.cmd safely from batch files');

console.log('All tests passed.');
