import { reputationGuides } from '../data/reputationGuides.js';
import { getActiveReputationGuides } from '../state.js';
import { escapeHtml, matches, plainList, renderAssetImage, renderFilterBar, renderTile, renderNoResults, backLink } from '../render/shared.js';
import { reputationTile } from '../render/tiles.js';

export const reputationAtlasCopy = {
  classic: {
    eyebrow: 'Classic Ruf-Almanach',
    title: 'Alle Classic-Ruf-Fraktionen mit Belohnungen, Quests und Grind-Routen.',
    copy: 'Jede Fraktion bekommt eine eigene Seite: wie du Ruf sammelst, welche Quests und Turn-ins zählen, was du farmen solltest und welche Belohnungen pro Rang warten.'
  },
  'the-burning-crusade': {
    eyebrow: 'The Burning Crusade Ruf-Almanach',
    title: 'Alle Outland-Ruf-Fraktionen von Honor Hold bis Ashtongue Deathsworn.',
    copy: 'Von Hellfire Peninsula bis Shadowmoon Valley: Schulter- und Umhangverzauberungen, Heroic-Schlüssel, Netherwing-Drachen und die komplette Raid-Vorbereitung mit Grind-Routen pro Fraktion.'
  },
  'wrath-of-the-lich-king': {
    eyebrow: 'Wrath of the Lich King Ruf-Almanach',
    title: "Alle Nordend-Ruf-Fraktionen von den Kalu'ak bis zur Ashen Verdict.",
    copy: "Von Howling Fjord bis Icecrown Citadel: Schulterverzauberungen der Sons of Hodir, Dalaran-Botschaften, Sholazar-Konkurrenzfraktionen und die komplette Ashen-Verdict-Vorbereitung mit Grind-Routen pro Fraktion."
  },
  'mists-of-pandaria': {
    eyebrow: 'Mists of Pandaria Ruf-Almanach',
    title: 'Alle Pandaria-Ruf-Fraktionen von The Tillers bis Shado-Pan Assault.',
    copy: 'Vom Jade Forest bis zur Isle of Thunder: Torwächter-Fraktionen im Vale of Eternal Blossoms, Reittier- und Angel-Grinds, Kriegskampagnen und die komplette Raid-Vorbereitung mit Grind-Routen pro Fraktion.'
  }
};

export function renderReputationGuidesListing(state) {
  const atlasCopy = reputationAtlasCopy[state.selectedExpansion];
  const activeReputationGuides = getActiveReputationGuides(state);
  const tiles = activeReputationGuides.map(reputationTile).filter((tile) => matches(tile.hay, state.search));

  return `
    <section class="page">
      ${renderFilterBar('reputation-guides')}
      <div class="hero">
        <div class="hero-copy">
          <span class="eyebrow">${escapeHtml(atlasCopy?.eyebrow ?? 'Ruf-Almanach')}</span>
          <h1>${escapeHtml(atlasCopy?.title ?? 'Für diese Erweiterung ist noch kein Ruf-Almanach verfügbar.')}</h1>
          <p>${escapeHtml(atlasCopy?.copy ?? 'Dieser Bereich wird mit dem nächsten Content-Pack für diese Erweiterung ergänzt.')}</p>
        </div>
        <div class="metric-grid"><div><b>${activeReputationGuides.length}</b><span>Fraktionen</span></div></div>
      </div>
      ${activeReputationGuides.length === 0
        ? '<div class="empty-state"><b>Noch kein Ruf-Almanach</b>Für diese Erweiterung wird der Ruf-Bereich mit dem nächsten Content-Pack ergänzt.</div>'
        : tiles.length > 0 ? `<div class="tile-grid">${tiles.map(renderTile).join('')}</div>` : renderNoResults()}
    </section>`;
}

function renderReputationRank(standing) {
  return `
    <article>
      <h5>${escapeHtml(standing.rank)}</h5>
      ${plainList(standing.rewards, '--profession-color')}
    </article>`;
}

export function renderReputationDetail(state, id) {
  const rep = getActiveReputationGuides(state).find((item) => item.id === id) ?? Object.values(reputationGuides).flat().find((item) => item.id === id);
  if (!rep) return null;

  return `
    <article class="page narrow detail-page">
      ${backLink('#reputation-guides')}
      <div class="crumb">Übersicht · Ruf · ${escapeHtml(rep.name)}</div>
      <article class="profession-panel" style="--profession-color: ${escapeHtml(rep.theme)}">
        <header class="profession-hero">
          <div class="profession-title">
            ${renderAssetImage(undefined, rep.name, 'profession-hero-icon')}
            <div>
              <div class="card-meta"><span>${escapeHtml(rep.side)}</span><span>${escapeHtml(rep.type)}</span><span>${escapeHtml(rep.zone)}</span></div>
              <h3>${escapeHtml(rep.name)}</h3>
              <p>${escapeHtml(rep.summary)}</p>
            </div>
          </div>
          <div class="profession-stat-card">
            <span>Grind-Dauer</span>
            <strong>${escapeHtml(rep.grindLength)}</strong>
            <small>${escapeHtml(rep.startRequirement)}</small>
          </div>
        </header>
        <nav class="profession-nav" aria-label="${escapeHtml(rep.name)} Guide Schnellnavigation">
          <a href="#reputation-howto">Ruf sammeln</a>
          <a href="#reputation-grind">Grind-Ziele</a>
          <a href="#reputation-quests">Quests</a>
          <a href="#reputation-tips">Tipps</a>
          <a href="#reputation-standings">Belohnungen</a>
        </nav>
        <section class="profession-intro"><p>${escapeHtml(rep.estimatedTime)}</p></section>
        <div class="profession-grid">
          <section class="profession-card trainers-card" id="reputation-howto">
            <div class="guide-section-heading"><span>Ruf sammeln</span><h4>So steigt dein Ruf</h4></div>
            <ul>${rep.howTo.map((item) => `<li>${escapeHtml(item)}</li>`).join('')}</ul>
          </section>
          <section class="profession-card" id="reputation-grind">
            <div class="guide-section-heading"><span>Grind</span><h4>Farm- &amp; Turn-in-Ziele</h4></div>
            <ul>${rep.grindTargets.map((item) => `<li>${escapeHtml(item)}</li>`).join('')}</ul>
          </section>
          <section class="profession-card" id="reputation-quests">
            <div class="guide-section-heading"><span>Quests</span><h4>Wichtige Questreihen</h4></div>
            <ul>${rep.keyQuests.map((item) => `<li>${escapeHtml(item)}</li>`).join('')}</ul>
          </section>
          <section class="profession-card" id="reputation-tips">
            <div class="guide-section-heading"><span>Tipps</span><h4>Effizient Ruf farmen</h4></div>
            <ul>${rep.tips.map((item) => `<li>${escapeHtml(item)}</li>`).join('')}</ul>
          </section>
        </div>
        <section class="profession-route" id="reputation-standings">
          <div class="guide-section-heading"><span>Belohnungen</span><h4>Ruf-Ränge &amp; Rewards</h4></div>
          <div class="trainer-list">${rep.standings.map(renderReputationRank).join('')}</div>
        </section>
      </article>
    </article>`;
}
