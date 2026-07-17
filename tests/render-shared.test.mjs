import { test } from 'node:test';
import assert from 'node:assert/strict';
import { escapeHtml, matches, scopeNote, renderNoResults, renderFilterBar, libraryDetailAccent } from '../src/render/shared.js';

test('escapeHtml escapes all five reserved HTML characters', () => {
  assert.equal(escapeHtml(`<b>"Tank & Spank" 'AoE'</b>`), '&lt;b&gt;&quot;Tank &amp; Spank&quot; &#039;AoE&#039;&lt;/b&gt;');
});

test('escapeHtml stringifies non-string input', () => {
  assert.equal(escapeHtml(42), '42');
});

test('matches is case-insensitive and trims the search term', () => {
  assert.equal(matches('Onyxias Hort', '  onyxia  '), true);
  assert.equal(matches('Onyxias Hort', 'MOLTEN'), false);
});

test('matches treats an empty term as matching everything', () => {
  assert.equal(matches('anything', ''), true);
});

test('scopeNote is silent for classic and renders a note for other expansions', () => {
  assert.equal(scopeNote({ selectedExpansion: 'classic' }, 'Nur fuer Classic.'), '');
  assert.equal(scopeNote({ selectedExpansion: 'the-burning-crusade' }, 'Nur fuer Classic.'), '<p class="scope-note">Nur fuer Classic.</p>');
});

test('renderNoResults renders a stable empty-state message', () => {
  assert.match(renderNoResults(), /Keine Guides gefunden/);
});

test('renderFilterBar labels the active section', () => {
  assert.match(renderFilterBar('dungeon-guides'), /Dungeons/);
});

test('libraryDetailAccent prefers the MoP accent regardless of category', () => {
  assert.equal(libraryDetailAccent({ expansion: 'mists-of-pandaria', category: 'Raids' }), '#2f8f66');
});

test('libraryDetailAccent falls back to a category accent, then a default', () => {
  assert.equal(libraryDetailAccent({ expansion: 'classic', category: 'Gold' }), '#ffd36f');
  assert.equal(libraryDetailAccent({ expansion: 'classic', category: 'Unknown Category' }), '#ffb22e');
});
