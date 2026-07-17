import { farmingGuides } from '../data/farmingGuides.js';
import { assetManifest } from '../data/assetManifest.js';
import { escapeHtml, matches, scopeNote, renderAssetImage, renderFilterBar, renderTile, renderNoResults, backLink } from '../render/shared.js';
import { farmingTile } from '../render/tiles.js';

export function renderFarmingGuidesListing(state) {
  const groupedTiles = farmingGuides.map((group) => ({
    group,
    tiles: group.items.map((item) => farmingTile(item, group)).filter((tile) => matches(tile.hay, state.search))
  })).filter((entry) => entry.tiles.length > 0);

  return `
    <section class="page">
      ${renderFilterBar('farming-guides')}
      <div class="hero"><div class="hero-copy"><span class="eyebrow">Classic Farming Guides</span><h1>Kräuter, Erze und Leder gezielt farmen.</h1><p>Jedes Material bekommt seine eigene Seite mit Fundorten, Spawn-Verhalten und Farm-Tipps.</p>${scopeNote(state, 'Diese Farming-Guides sind aktuell nur für WoW Classic verfügbar. Weitere Erweiterungen folgen.')}</div></div>
      ${groupedTiles.length > 0
        ? groupedTiles.map(({ group, tiles }) => `
          <section class="group-block">
            <div class="group-header"><span class="group-dot" style="background: ${escapeHtml(group.theme)}"></span><h2>${escapeHtml(group.title)}</h2><span class="group-count">${escapeHtml(group.tierLabel)}</span></div>
            <div class="tile-grid">${tiles.map(renderTile).join('')}</div>
          </section>`).join('')
        : renderNoResults()}
    </section>`;
}

export function renderFarmingDetail(itemId) {
  let found = null;
  for (const group of farmingGuides) {
    const item = group.items.find((entry) => entry.id === itemId);
    if (item) { found = { group, item }; break; }
  }
  if (!found) return null;
  const { group, item } = found;

  return `
    <article class="page narrow detail-page">
      ${backLink('#farming-guides')}
      <div class="crumb">Übersicht · Farmen · ${escapeHtml(item.name)}</div>
      <article class="farming-panel" style="--farming-color: ${escapeHtml(group.theme)}">
        <header class="farming-hero">
          ${renderAssetImage(assetManifest.farmingItems?.[item.id], `${item.name} Icon`, 'farming-hero-icon')}
          <div>
            <div class="card-meta"><span>${escapeHtml(group.profession)}</span><span>${escapeHtml(item.skill)}</span><span>${escapeHtml(item.levelRange)}</span></div>
            <h3>${escapeHtml(item.name)}</h3>
            <p>${escapeHtml(item.summary)}</p>
          </div>
        </header>
        <div class="farming-info-grid">
          <section class="farming-card">
            <h4>Fundorte</h4>
            <div class="farming-zone-list">${item.zones.map((zone) => `<span>${escapeHtml(zone)}</span>`).join('')}</div>
          </section>
          <section class="farming-card">
            <h4>Spawn-Verhalten</h4>
            <p>${escapeHtml(item.respawn)}</p>
          </section>
          <section class="farming-card">
            <h4>Farm-Tipps</h4>
            <ul>${item.tips.map((tip) => `<li>${escapeHtml(tip)}</li>`).join('')}</ul>
          </section>
        </div>
      </article>
    </article>`;
}
