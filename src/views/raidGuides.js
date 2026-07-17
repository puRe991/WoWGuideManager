import { raidGuides } from '../data/raidGuides.js';
import { getActiveRaids } from '../state.js';
import { escapeHtml, matches, plainList, renderClassList, renderFilterBar, renderTile, renderNoResults, backLink } from '../render/shared.js';
import { raidTile } from '../render/tiles.js';

export const raidAtlasCopy = {
  classic: {
    eyebrow: 'Classic Raid Atlas',
    title: 'Alle Classic-Raids boss für boss – von Onyxia bis Naxxramas.',
    copy: 'Jeder Classic-Raid mit Attunement, Route, Gruppen-Setup und einer eigenen Boss-für-Boss-Aufschlüsselung inklusive Mechaniken und Loot-Zielen.'
  },
  'the-burning-crusade': {
    eyebrow: 'The Burning Crusade Raid Atlas',
    title: 'Alle TBC-Raids boss für boss – von Karazhan bis Sunwell Plateau.',
    copy: 'Von Gruul’s Lair bis zum Serienfinale in Sunwell: Attunement-Ketten, Route und Boss-für-Boss-Mechaniken für jeden Outland-Raid.'
  },
  'mists-of-pandaria': {
    eyebrow: 'Pandaria Schlachtzug-Atlas',
    title: 'Die großen Belagerungen – von der Schatzkammer der Mogu bis zum Sturz von Garrosh.',
    copy: 'Von Mogu’shan-Schatzkammer bis zur Belagerung von Orgrimmar: jeder Schlachtzug der Erweiterung boss für boss vorbereitet.'
  }
};

export function renderRaidGuidesListing(state) {
  const atlasCopy = raidAtlasCopy[state.selectedExpansion];
  const activeRaids = getActiveRaids(state);
  const tiles = activeRaids.map(raidTile).filter((tile) => matches(tile.hay, state.search));

  return `
    <section class="page">
      ${renderFilterBar('raid-guides')}
      <div class="hero">
        <div class="hero-copy">
          <span class="eyebrow">${escapeHtml(atlasCopy?.eyebrow ?? 'Raid Atlas')}</span>
          <h1>${escapeHtml(atlasCopy?.title ?? 'Für diese Erweiterung ist noch kein Raid Atlas verfügbar.')}</h1>
          <p>${escapeHtml(atlasCopy?.copy ?? 'Dieser Bereich ist aktuell als "Geplant" markiert und wird mit dem nächsten Content-Pack für diese Erweiterung ergänzt.')}</p>
        </div>
        <div class="metric-grid"><div><b>${activeRaids.length}</b><span>Raids</span></div></div>
      </div>
      ${activeRaids.length === 0
        ? '<div class="empty-state"><b>Geplant</b>Für diese Erweiterung ist der Raid-Bereich noch nicht verfügbar und wird mit dem nächsten Content-Pack ergänzt.</div>'
        : tiles.length > 0 ? `<div class="tile-grid">${tiles.map(renderTile).join('')}</div>` : renderNoResults()}
    </section>`;
}

function renderBossCard(boss, accentVar) {
  return `
    <article class="boss-card">
      <h5>${escapeHtml(boss.name)}</h5>
      ${plainList(boss.mechanics, accentVar)}
      ${boss.loot?.length ? `<div class="boss-loot">${boss.loot.map((item) => `<span>${escapeHtml(item)}</span>`).join('')}</div>` : ''}
    </article>`;
}

export function renderRaidDetail(state, id) {
  const raid = getActiveRaids(state).find((item) => item.id === id) ?? Object.values(raidGuides).flat().find((item) => item.id === id);
  if (!raid) return null;

  return `
    <article class="page narrow detail-page">
      ${backLink('#raid-guides')}
      <div class="crumb">Übersicht · Raids · ${escapeHtml(raid.name)}</div>
      <article class="raid-panel" style="--raid-color: ${escapeHtml(raid.theme)}">
        <header class="raid-hero">
          <div class="card-meta"><span>${escapeHtml(raid.size)}</span><span>${escapeHtml(raid.tier)}</span><span>Level ${escapeHtml(raid.levelReq)}</span></div>
          <h3>${escapeHtml(raid.name)}</h3>
          <p>${escapeHtml(raid.summary)}</p>
          <div class="class-pill-row"><span>${escapeHtml(raid.zone)}</span><span>${escapeHtml(raid.wing)}</span><span>${raid.bosses.length} Bosse</span></div>
          ${raid.subDungeons ? `<div class="sub-dungeon-row">${raid.subDungeons.map((wing) => `<span>${escapeHtml(wing)}</span>`).join('')}</div>` : ''}
        </header>
        <div class="raid-info-grid">
          ${raid.attunement?.length ? renderClassList('Attunement', raid.attunement) : ''}
          ${renderClassList('Route & Vorbereitung', raid.route)}
          ${renderClassList('Loot-Highlights', raid.loot)}
          ${renderClassList('Raid-Tipps', raid.tips)}
          ${renderClassList('Gruppen-Setup', raid.composition)}
        </div>
        <div class="raid-boss-section">
          <div class="guide-section-heading"><span>Boss für Boss</span><h4>${escapeHtml(raid.name)} Encounter-Guide</h4></div>
          <div class="raid-boss-grid">${raid.bosses.map((boss) => renderBossCard(boss, '--raid-color')).join('')}</div>
        </div>
      </article>
    </article>`;
}
