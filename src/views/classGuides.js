import { expansions } from '../data/guides.js';
import { assetManifest } from '../data/assetManifest.js';
import { getActiveClassGuides, getActiveClassBuildGuides, getActiveSpecGuides } from '../state.js';
import { escapeHtml, matches, renderAssetImage, rankList, renderClassList, renderScoreCard, renderFilterBar, renderTile, renderNoResults, backLink } from '../render/shared.js';
import { classTile } from '../render/tiles.js';

export const classAtlasCopy = {
  classic: {
    eyebrow: 'Classic Klassen-Guides',
    title: 'Classic Klassen kompakt, visuell und spielbereit.',
    copy: 'Leveling-Specs, Rollen, Stat-Prioritäten, Rotationen, Berufe und Power-Tipps für alle neun Classic-Klassen.'
  },
  'the-burning-crusade': {
    eyebrow: 'The Burning Crusade Klassen-Guides',
    title: 'Alle neun TBC-Klassen mit Rotation, Talenten und der aktuell genutzten Meta-Spec.',
    copy: 'Original Blizzard-Bezeichnungen für Talente und Fähigkeiten, dazu Stat-Prioritäten, Best-in-Slot-Ziele und ein direkter Link zum Wowhead-Talentrechner pro Klasse.'
  },
  'wrath-of-the-lich-king': {
    eyebrow: 'Wrath of the Lich King Klassen-Guides',
    title: 'Alle zehn WotLK-Klassen inklusive Death Knight mit Rotation, Talenten und Meta-Spec.',
    copy: 'Original Blizzard-Bezeichnungen für Talente und Fähigkeiten, dazu Stat-Prioritäten, Best-in-Slot-Ziele und ein direkter Link zum Wowhead-Talentrechner pro Klasse.'
  },
  'mists-of-pandaria': {
    eyebrow: 'Mists of Pandaria Klassen-Guides',
    title: 'Alle elf MoP-Klassen inklusive Monk mit Rotation, Talenten und Meta-Spec.',
    copy: 'Original Blizzard-Bezeichnungen für Talente und Fähigkeiten, dazu Stat-Prioritäten, Best-in-Slot-Ziele und ein direkter Link zum Wowhead-Talentrechner pro Klasse.'
  }
};

export function renderClassGuidesListing(state) {
  const atlasCopy = classAtlasCopy[state.selectedExpansion];
  const activeClassGuides = getActiveClassGuides(state);
  const tiles = activeClassGuides.map(classTile).filter((tile) => matches(tile.hay, state.search));
  return `
    <section class="page">
      ${renderFilterBar('class-guides')}
      <div class="hero">
        <div class="hero-copy">
          <span class="eyebrow">${escapeHtml(atlasCopy?.eyebrow ?? 'Klassen-Guides')}</span>
          <h1>${escapeHtml(atlasCopy?.title ?? 'Für diese Erweiterung sind noch keine Klassen-Guides verfügbar.')}</h1>
          <p>${escapeHtml(atlasCopy?.copy ?? 'Dieser Bereich wird mit dem nächsten Content-Pack für diese Erweiterung ergänzt.')}</p>
        </div>
        <div class="metric-grid"><div><b>${activeClassGuides.length}</b><span>Klassen</span></div></div>
      </div>
      ${activeClassGuides.length === 0
        ? '<div class="empty-state"><b>Noch keine Klassen-Guides</b>Für diese Erweiterung wird der Klassen-Bereich mit dem nächsten Content-Pack ergänzt.</div>'
        : tiles.length > 0 ? `<div class="tile-grid">${tiles.map(renderTile).join('')}</div>` : renderNoResults()}
    </section>`;
}

function renderSpecGuide(spec) {
  return `
    <article class="spec-card">
      <div class="card-meta"><span>${escapeHtml(spec.role)}</span><span>${escapeHtml(spec.name)}</span></div>
      <div class="spec-card-header">
        ${renderAssetImage(assetManifest.specs?.[spec.id], `${spec.name} Icon`, 'spec-icon')}
        <h5>${escapeHtml(spec.name)}</h5>
      </div>
      <p>${escapeHtml(spec.summary)}</p>
      ${renderClassList('Spec-Rotation', spec.rotation)}
      ${renderClassList('Spec-Stats', spec.statPriority)}
      ${renderClassList('Spec-Talente', spec.talents)}
      ${renderClassList('Spec-BiS / Gear', spec.gear)}
      ${renderClassList('Consumables', spec.consumables)}
    </article>`;
}

function renderRotationBlock(title, items) {
  return `<section><h5>${escapeHtml(title)}</h5>${rankList(items)}</section>`;
}

export function renderClassDetail(state, id) {
  const guide = getActiveClassGuides(state).find((item) => item.id === id);
  if (!guide) return null;
  const build = getActiveClassBuildGuides(state)[guide.id] ?? { rotations: { leveling: [], dungeon: [], raid: [] }, bestInSlot: [] };
  const specs = getActiveSpecGuides(state)[guide.id] ?? [];
  const expansionName = expansions.find((item) => item.key === state.selectedExpansion)?.name ?? 'WoW Classic';

  return `
    <article class="page narrow detail-page">
      ${backLink('#class-guides')}
      <div class="crumb">Übersicht · Klassen · ${escapeHtml(guide.name)}</div>
      <article class="class-panel" style="--class-color: ${escapeHtml(guide.color)}">
        <header class="class-guide-hero">
          <div class="class-breadcrumb">World of Warcraft / Classes / ${escapeHtml(guide.name)}</div>
          <div class="class-guide-title">
            <div class="class-portrait">${renderAssetImage(assetManifest.classes[guide.id], guide.name, 'class-portrait-image')}</div>
            <div class="class-copy">
              <div class="card-meta"><span>${escapeHtml(guide.levelingSpec)}</span>${guide.metaSpec ? `<span>${escapeHtml(guide.metaSpec)}</span>` : ''}<span>${escapeHtml(guide.difficulty)}</span></div>
              <h3>${escapeHtml(guide.name)} ${escapeHtml(expansionName)} Class Guide</h3>
              <p>${escapeHtml(guide.summary)}</p>
              <div class="class-pill-row">${guide.roles.map((role) => `<span>${escapeHtml(role)}</span>`).join('')}</div>
              ${guide.talentPlannerUrl ? `<a class="talent-planner-link" href="${escapeHtml(guide.talentPlannerUrl)}" target="_blank" rel="noopener noreferrer">Talente im Wowhead-Talentrechner planen ↗</a>` : ''}
            </div>
          </div>
          <div class="guide-update-card">
            <span>Zuletzt geprüft</span>
            <strong>${escapeHtml(expansionName)}</strong>
            <small>Eigene Guide-Seite mit Overview, Rotation, Talenten, Rotation-Lab, BiS und Spec Guides.</small>
          </div>
        </header>
        <nav class="class-guide-nav" aria-label="${escapeHtml(guide.name)} Guide Schnellnavigation">
          <a href="#class-overview">Übersicht</a>
          <a href="#class-talente">Talente</a>
          <a href="#class-rotation">Rotation</a>
          <a href="#class-stats">Stats</a>
          <a href="#class-bis">BiS &amp; Gear</a>
          <a href="#class-berufe">Berufe</a>
          <a href="#class-specs">Specs</a>
        </nav>
        <aside class="class-toc">
          <span>Inhaltsverzeichnis</span>
          <ol>
            <li><a href="#class-overview">Overview und Rollenprofil</a></li>
            <li><a href="#class-stats">Basis-Rotation und Prioritäten</a></li>
            <li><a href="#class-talente">Talente, Berufe und Power-Tipps</a></li>
            <li><a href="#class-rotation">Content-Rotation nach Leveling, Dungeon und Raid</a></li>
            <li><a href="#class-bis">Best-in-Slot Ziele und Spec Guides</a></li>
          </ol>
        </aside>
        <section class="class-overview-card" id="class-overview">
          <div>
            <span class="eyebrow">${escapeHtml(guide.name)} Overview</span>
            <h4>Spielplan in 60 Sekunden</h4>
            <p>${escapeHtml(guide.summary)}</p>
          </div>
          <div class="class-score-grid">
            ${renderScoreCard('Leveling', guide.rotation.length, 'Tempo')}
            ${renderScoreCard('Dungeons', build.rotations.dungeon.length, 'Praxis')}
            ${renderScoreCard('Raid', build.rotations.raid.length, 'Tiefe')}
            ${renderScoreCard('Utility', guide.powerTips.length, 'Tools')}
          </div>
        </section>
        <div class="class-columns">
          ${renderClassList('Basis-Rotation', guide.rotation, 'class-rotation-basic')}
          ${renderClassList('Stat-Priorität', guide.statPriority, 'class-stats')}
          ${renderClassList('Talente', guide.talents, 'class-talente')}
          ${renderClassList('Berufe', guide.professions, 'class-berufe')}
          ${renderClassList('Power-Tipps', guide.powerTips)}
        </div>
        <div class="rotation-lab" id="class-rotation">
          <div class="guide-section-heading"><span>Prioritätsliste</span><h4>Rotation Guide nach Content</h4></div>
          <div class="rotation-grid">
            ${renderRotationBlock('Leveling', build.rotations.leveling)}
            ${renderRotationBlock('Dungeon', build.rotations.dungeon)}
            ${renderRotationBlock('Raid / Endgame', build.rotations.raid)}
          </div>
        </div>
        <div class="bis-panel" id="class-bis">
          <div class="guide-section-heading"><span>Gear Planner</span><h4>Best in Slot Ziele</h4></div>
          <div class="bis-list">${build.bestInSlot.map((item) => `<span>${escapeHtml(item)}</span>`).join('')}</div>
        </div>
        <div class="spec-guides" id="class-specs">
          <div class="guide-section-heading"><span>Spezialisierungen</span><h4>Spec Guides</h4></div>
          <div class="spec-grid">${specs.map(renderSpecGuide).join('')}</div>
        </div>
      </article>
    </article>`;
}
