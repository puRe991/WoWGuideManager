export const categoryAccents = {
  Leveling: '#aad372', Dungeons: '#3fc7eb', Raids: '#ff6b6b', Professions: '#75d15f', Gold: '#ffd36f',
  PvP: '#f48cba', Classes: '#c69b6d', Secrets: '#9482c9', Reputation: '#7bb6ff', Addons: '#d3b5ff'
};

export const NAV_LABELS = {
  start: 'Übersicht',
  'class-guides': 'Klassen',
  'profession-guides': 'Berufe',
  'farming-guides': 'Farmen',
  'dungeon-guides': 'Dungeons',
  'raid-guides': 'Raids',
  'reputation-guides': 'Ruf',
  guides: 'Bibliothek'
};

export function escapeHtml(value) {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');
}

export function matches(hay, term) {
  if (!term) return true;
  return hay.toLowerCase().includes(term.trim().toLowerCase());
}

export function scopeNote(state, text) {
  return state.selectedExpansion === 'classic' ? '' : `<p class="scope-note">${escapeHtml(text)}</p>`;
}

export function renderAssetImage(src, alt, className = 'asset-image') {
  const initial = escapeHtml((String(alt).trim().charAt(0) || '?').toUpperCase());
  if (!src) {
    return `<span class="asset-slot ${className} missing-asset"><span class="asset-fallback" aria-hidden="true">${initial}</span></span>`;
  }
  return `<span class="asset-slot ${className}"><img src="${escapeHtml(src)}" alt="${escapeHtml(alt)}" loading="lazy" onerror="this.parentElement.classList.add('missing-asset'); this.remove();" /><span class="asset-fallback" aria-hidden="true">${initial}</span></span>`;
}

export function rankList(items) {
  return `<ol class="rank-list">${items.map((item) => `<li>${escapeHtml(item)}</li>`).join('')}</ol>`;
}

export function plainList(items, accentVar) {
  return `<ul class="plain-list">${items
    .map((item) => `<li><span class="plain-dot" style="background: var(${accentVar})"></span><span class="item-text">${escapeHtml(item)}</span></li>`)
    .join('')}</ul>`;
}

export function renderClassList(title, items, id = '') {
  return `<section${id ? ` id="${escapeHtml(id)}"` : ''}><h4>${escapeHtml(title)}</h4>${rankList(items)}</section>`;
}

export function renderScoreCard(title, value, label) {
  const score = Math.min(5, Math.max(3, value - 1));
  return `<section><strong>${escapeHtml(title)}</strong><span>${'★'.repeat(score)}${'☆'.repeat(5 - score)}</span><small>${escapeHtml(label)}</small></section>`;
}

export function renderTile(tile) {
  const badge = tile.badge ? `<span class="tile-badge ${tile.badgeClass || ''}">${escapeHtml(tile.badge)}</span>` : '';
  return `
    <a class="tile" href="${tile.href}" style="--tc: ${escapeHtml(tile.color)}">
      <div class="tile-top"><span class="tile-subtitle">${escapeHtml(tile.subtitle)}</span>${badge}</div>
      <h3>${escapeHtml(tile.title)}</h3>
      <p class="tile-summary">${escapeHtml(tile.summary)}</p>
      <div class="tile-tags">
        ${tile.tags.map((tag) => `<span class="tag">${escapeHtml(tag)}</span>`).join('')}
        <span class="tile-meta">${escapeHtml(tile.meta)} →</span>
      </div>
    </a>`;
}

export function renderNoResults() {
  return '<div class="empty-state"><b>Keine Guides gefunden</b>Passe Suche oder Filter an.</div>';
}

export function renderFilterBar(sectionKey) {
  return `
    <div class="filter-bar">
      <span>Bereich: ${escapeHtml(NAV_LABELS[sectionKey])}</span>
      <button type="button" data-clear-filter>Alle anzeigen ✕</button>
    </div>`;
}

export function backLink(targetHash) {
  return `<a class="back-link" href="${targetHash}">← Zurück zur Übersicht</a>`;
}

export function libraryDetailAccent(guide) {
  if (guide.expansion === 'mists-of-pandaria') return '#2f8f66';
  return categoryAccents[guide.category] || '#ffb22e';
}
