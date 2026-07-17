import { dungeonGuides } from '../data/dungeonGuides.js';
import { assetManifest } from '../data/assetManifest.js';
import { getActiveDungeons } from '../state.js';
import { escapeHtml, matches, renderAssetImage, renderClassList, renderFilterBar, renderTile, renderNoResults, backLink } from '../render/shared.js';
import { dungeonTile } from '../render/tiles.js';

export const dungeonAtlasCopy = {
  classic: {
    eyebrow: 'Classic Dungeon Atlas',
    title: 'Alle Classic Dungeons mit Route, Bossen, Loot und Gruppen-Tipps.',
    copy: 'Ein übersichtlicher Dungeon-Bereich für schnelle Run-Planung: Levelbereich wählen, Route lesen, Bossziele markieren und Loot-Fokus setzen.'
  },
  'the-burning-crusade': {
    eyebrow: 'The Burning Crusade Dungeon Atlas',
    title: 'Alle Outland-Heroics und -Dungeons mit Route, Bossen, Loot und Gruppen-Tipps.',
    copy: 'Von Hellfeuerzitadelle bis Magierviertel: Levelbereich wählen, Route lesen, Bossziele markieren und Attunement-relevante Runs erkennen.'
  },
  'mists-of-pandaria': {
    eyebrow: 'Pandaria Dungeon-Atlas',
    title: 'Neun Prüfungen – von den Hallen des Jadeserpents bis zu den scharlachroten Ruinen.',
    copy: 'Wähle eine Instanz für Route, Bosse, Loot-Ziele und Gruppen-Tipps. Alle neun Dungeons bilden gleichzeitig den Challenge-Mode-Pool.'
  }
};

export function renderDungeonGuidesListing(state) {
  const atlasCopy = dungeonAtlasCopy[state.selectedExpansion];
  const activeDungeons = getActiveDungeons(state);
  const tiles = activeDungeons.map(dungeonTile).filter((tile) => matches(tile.hay, state.search));

  return `
    <section class="page">
      ${renderFilterBar('dungeon-guides')}
      <div class="hero">
        <div class="hero-copy">
          <span class="eyebrow">${escapeHtml(atlasCopy?.eyebrow ?? 'Dungeon Atlas')}</span>
          <h1>${escapeHtml(atlasCopy?.title ?? 'Für diese Erweiterung ist noch kein Dungeon Atlas verfügbar.')}</h1>
          <p>${escapeHtml(atlasCopy?.copy ?? 'Dieser Bereich wird mit dem nächsten Content-Pack für diese Erweiterung ergänzt.')}</p>
        </div>
        <div class="metric-grid"><div><b>${activeDungeons.length}</b><span>Dungeons</span></div></div>
      </div>
      ${activeDungeons.length === 0
        ? '<div class="empty-state"><b>Noch kein Dungeon Atlas</b>Für diese Erweiterung wird der Dungeon-Bereich mit dem nächsten Content-Pack ergänzt.</div>'
        : tiles.length > 0 ? `<div class="tile-grid">${tiles.map(renderTile).join('')}</div>` : renderNoResults()}
    </section>`;
}

function renderDungeonBossCard(boss) {
  return `
    <article class="dungeon-boss-card">
      <h5>${escapeHtml(boss.name)}</h5>
      <span class="dungeon-boss-role">${escapeHtml(boss.role)}</span>
      <p>${escapeHtml(boss.note)}</p>
    </article>`;
}

function renderDungeonBossSection(dungeon) {
  if (dungeon.bosses.length > 0 && typeof dungeon.bosses[0] === 'object') {
    return `
      <section class="dungeon-boss-cell">
        <h4>Bosse</h4>
        <div class="dungeon-boss-grid">${dungeon.bosses.map(renderDungeonBossCard).join('')}</div>
      </section>`;
  }
  return renderClassList('Bosse', dungeon.bosses);
}

export function renderDungeonDetail(state, id) {
  const dungeon = getActiveDungeons(state).find((item) => item.id === id) ?? Object.values(dungeonGuides).flat().find((item) => item.id === id);
  if (!dungeon) return null;

  return `
    <article class="page narrow detail-page">
      ${backLink('#dungeon-guides')}
      <div class="crumb">Übersicht · Dungeons · ${escapeHtml(dungeon.name)}</div>
      <article class="dungeon-panel" style="--dungeon-color: ${escapeHtml(dungeon.theme)}">
        <div class="dungeon-art">
          ${renderAssetImage(assetManifest.dungeonMaps[dungeon.id], `${dungeon.name} Karte`, 'dungeon-map-image')}
          <strong>${escapeHtml(dungeon.wing)}</strong>
        </div>
        <div class="dungeon-main">
          <div class="card-meta"><span>${escapeHtml(dungeon.faction)}</span><span>Level ${escapeHtml(dungeon.levelRange)}</span></div>
          <h3>${escapeHtml(dungeon.name)}</h3>
          <p>${escapeHtml(dungeon.summary)}</p>
          <div class="class-pill-row"><span>${escapeHtml(dungeon.zone)}</span><span>${escapeHtml(dungeon.wing)}</span><span>${escapeHtml(dungeon.time)}</span></div>
          ${dungeon.subDungeons ? `<div class="sub-dungeon-row">${dungeon.subDungeons.map((wing) => `<span>${escapeHtml(wing)}</span>`).join('')}</div>` : ''}
        </div>
        <div class="dungeon-guide-grid">
          ${renderDungeonBossSection(dungeon)}
          ${renderClassList('Optimale Route', dungeon.route)}
          ${renderClassList('Loot-Ziele', dungeon.loot)}
          ${renderClassList('Gruppen-Tipps', dungeon.tips)}
          ${renderClassList('Quests / Vorbereitung', dungeon.quests)}
          ${renderClassList('Gruppen-Setup', dungeon.composition)}
        </div>
      </article>
    </article>`;
}
