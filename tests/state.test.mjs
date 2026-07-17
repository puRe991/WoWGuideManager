import { test } from 'node:test';
import assert from 'node:assert/strict';
import {
  createState,
  parseHash,
  isMopContent,
  getActiveClassGuides,
  getActiveDungeons,
  getActiveRaids,
  getActiveReputationGuides,
  NAV_SECTIONS
} from '../src/state.js';

test('createState returns the classic-scoped default state', () => {
  const state = createState();
  assert.deepEqual(state, {
    search: '',
    category: 'Alle',
    expansion: 'classic',
    showPremiumOnly: false,
    selectedExpansion: 'classic'
  });
});

test('parseHash defaults to the start section', () => {
  assert.deepEqual(parseHash(''), ['start', null]);
  assert.deepEqual(parseHash('#'), ['start', null]);
});

test('parseHash reads a section without an id', () => {
  assert.deepEqual(parseHash('#class-guides'), ['class-guides', null]);
});

test('parseHash splits a section and a (decoded) detail id', () => {
  assert.deepEqual(parseHash('#class-guides/druid'), ['class-guides', 'druid']);
  assert.deepEqual(parseHash('#farming-guides/silverleaf%20herb'), ['farming-guides', 'silverleaf herb']);
});

test('NAV_SECTIONS lists every routable top-level section', () => {
  assert.ok(NAV_SECTIONS.includes('start'));
  assert.ok(NAV_SECTIONS.includes('class-guides'));
  assert.ok(NAV_SECTIONS.includes('guides'));
});

test('isMopContent flags MoP dungeons and raids by selected expansion', () => {
  const state = { ...createState(), selectedExpansion: 'mists-of-pandaria' };
  assert.equal(isMopContent(state, 'dungeon-guides', null), true);
  assert.equal(isMopContent(state, 'raid-guides', null), true);
  assert.equal(isMopContent({ ...state, selectedExpansion: 'classic' }, 'dungeon-guides', null), false);
});

test('isMopContent falls back to false for unrelated sections', () => {
  const state = createState();
  assert.equal(isMopContent(state, 'class-guides', null), false);
  assert.equal(isMopContent(state, 'subscriptions', null), false);
});

test('selectors fall back to an empty collection for an unknown expansion', () => {
  const state = { ...createState(), selectedExpansion: 'future' };
  assert.deepEqual(getActiveClassGuides(state), []);
  assert.deepEqual(getActiveDungeons(state), []);
  assert.deepEqual(getActiveRaids(state), []);
  assert.deepEqual(getActiveReputationGuides(state), []);
});

test('selectors return real content for a known expansion', () => {
  const state = createState();
  assert.ok(getActiveClassGuides(state).length > 0);
  assert.ok(getActiveDungeons(state).length > 0);
  assert.ok(getActiveRaids(state).length > 0);
  assert.ok(getActiveReputationGuides(state).length > 0);
});
