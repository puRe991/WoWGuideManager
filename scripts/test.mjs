import assert from 'node:assert/strict';
import { existsSync } from 'node:fs';
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

console.log('All tests passed.');
