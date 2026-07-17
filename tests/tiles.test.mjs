import { test } from 'node:test';
import assert from 'node:assert/strict';
import { classTile, dungeonTile, raidTile, farmingTile, libraryTile, buildAllGroups } from '../src/render/tiles.js';
import { createState } from '../src/state.js';

test('classTile builds a hash link and a searchable haystack', () => {
  const tile = classTile({ id: 'druid', color: '#ff7c0a', levelingSpec: 'Feral 1-60', name: 'Druide', summary: 'Allrounder', roles: ['Tank', 'Heiler', 'Melee DPS', 'Caster DPS'] });
  assert.equal(tile.href, '#class-guides/druid');
  assert.equal(tile.tags.length, 3);
  assert.match(tile.hay, /druide/i);
});

test('dungeonTile surfaces the level range as the subtitle', () => {
  const tile = dungeonTile({ id: 'deadmines', theme: '#b45309', levelRange: '17-24', name: 'Todesminen', summary: 'Klassiker', faction: 'Allianz', zone: 'Westfall', time: '45-90 Minuten' });
  assert.equal(tile.subtitle, 'Level 17-24');
  assert.equal(tile.href, '#dungeon-guides/deadmines');
});

test('raidTile counts the bosses into the tag list', () => {
  const tile = raidTile({ id: 'onyxias-lair', theme: '#7f1d1d', size: '40-Spieler-Raid', tier: 'Tier 0.5', name: 'Onyxias Hort', summary: 'Ein-Boss-Raid', zone: 'Schlammiges Delta', levelReq: '60', bosses: [{ name: 'Onyxia' }] });
  assert.deepEqual(tile.tags, ['Schlammiges Delta', '1 Bosse']);
});

test('farmingTile encodes the item id in the detail link', () => {
  const tile = farmingTile({ id: 'peace bloom', name: 'Peacebloom', summary: '', skill: 'Kraeuterkunde 1+', levelRange: '1-15', zones: ['Elwynn'] }, { theme: '#75d15f', profession: 'Kraeuterkunde', title: 'Classic Herbs' });
  assert.equal(tile.href, '#farming-guides/peace%20bloom');
});

test('libraryTile derives the premium badge from the guide flag', () => {
  const freeTile = libraryTile({ id: 'a', title: 'A', category: 'Gold', summary: '', tags: [], minutes: 5, premium: false, expansion: 'classic' });
  const premiumTile = libraryTile({ id: 'b', title: 'B', category: 'Gold', summary: '', tags: [], minutes: 5, premium: true, expansion: 'classic' });
  assert.equal(freeTile.badge, 'Free');
  assert.equal(premiumTile.badge, 'Premium');
});

test('buildAllGroups filters every content group by the search term', () => {
  const state = createState();
  const allGroups = buildAllGroups(state, '');
  assert.ok(allGroups.length > 0);

  const filtered = buildAllGroups(state, 'onyxia');
  assert.ok(filtered.length > 0);
  assert.ok(filtered.every((group) => group.tiles.every((tile) => /onyxia/i.test(tile.hay))));

  const noMatches = buildAllGroups(state, 'this-term-does-not-exist-anywhere-xyz');
  assert.deepEqual(noMatches, []);
});
