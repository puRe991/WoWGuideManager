import { categories, expansions, guideCards } from './data/guides.js';
import { classGuides } from './data/classGuides.js';
import { classBuildGuides } from './data/classBuildGuides.js';
import { specGuides } from './data/specGuides.js';
import { dungeonGuides } from './data/dungeonGuides.js';
import { professionGuides } from './data/professionGuides.js';
import { farmingGuides } from './data/farmingGuides.js';
import { assetManifest } from './data/assetManifest.js';
import { subscriptionTiers } from './data/subscriptions.js';
import { filterGuides } from './lib/filterGuides.js';

const state = {
  search: '',
  category: 'Alle',
  expansion: 'classic',
  showPremiumOnly: false,
  selectedExpansion: 'classic'
};

const sidebar = document.querySelector('#sidebar');
const sidebarToggle = document.querySelector('#sidebar-toggle');
const searchInput = document.querySelector('#search');
const expansionSwitch = document.querySelector('#expansion-switch');
const siteNav = document.querySelector('#site-nav');
const packageBox = document.querySelector('#package-box');
const expansionPickerMount = document.querySelector('#expansion-picker');
const viewContent = document.querySelector('#view-content');
const viewRoot = document.querySelector('#view-root');

const NAV_SECTIONS = ['start', 'class-guides', 'profession-guides', 'farming-guides', 'dungeon-guides', 'guides', 'subscriptions'];

const expansionLabels = {
  classic: 'Classic',
  'the-burning-crusade': 'TBC',
  'wrath-of-the-lich-king': 'WotLK',
  future: 'Zukunft'
};

const expansionOptions = [
  ['all', 'Alle Erweiterungen'],
  ['classic', 'WoW Classic'],
  ['the-burning-crusade', 'The Burning Crusade'],
  ['wrath-of-the-lich-king', 'Wrath of the Lich King'],
  ['future', 'Zukunft']
];

const dungeonAtlasCopy = {
  classic: {
    eyebrow: 'Classic Dungeon Atlas',
    title: 'Alle Classic Dungeons mit Route, Bossen, Loot und Gruppen-Tipps.',
    copy: 'Ein übersichtlicher Dungeon-Bereich für schnelle Run-Planung: Levelbereich wählen, Route lesen, Bossziele markieren und Loot-Fokus setzen.'
  },
  'the-burning-crusade': {
    eyebrow: 'The Burning Crusade Dungeon Atlas',
    title: 'Alle Outland-Heroics und -Dungeons mit Route, Bossen, Loot und Gruppen-Tipps.',
    copy: 'Von Hellfeuerzitadelle bis Magierviertel: Levelbereich wählen, Route lesen, Bossziele markieren und Attunement-relevante Runs erkennen.'
  }
};

const expansionArtwork = {
  classic: { theme: 'Azeroth', art: 'linear-gradient(135deg, rgba(255,178,46,.25), rgba(40,92,58,.35))' },
  'the-burning-crusade': { theme: 'Outland', art: 'linear-gradient(135deg, rgba(73,255,125,.22), rgba(81,41,112,.38))' },
  'wrath-of-the-lich-king': { theme: 'Northrend', art: 'linear-gradient(135deg, rgba(120,206,255,.28), rgba(31,54,104,.45))' },
  future: { theme: 'Content Packs', art: 'linear-gradient(135deg, rgba(211,181,255,.28), rgba(255,255,255,.08))' }
};

const categoryAccents = {
  Leveling: '#aad372', Dungeons: '#3fc7eb', Raids: '#ff6b6b', Professions: '#75d15f', Gold: '#ffd36f',
  PvP: '#f48cba', Classes: '#c69b6d', Secrets: '#9482c9', Reputation: '#7bb6ff', Addons: '#d3b5ff'
};

const NAV_LABELS = {
  start: 'Übersicht',
  'class-guides': 'Klassen',
  'profession-guides': 'Berufe',
  'farming-guides': 'Farmen',
  'dungeon-guides': 'Dungeons',
  guides: 'Bibliothek'
};

function escapeHtml(value) {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');
}

function matches(hay, term) {
  if (!term) return true;
  return hay.toLowerCase().includes(term.trim().toLowerCase());
}

function renderAssetImage(src, alt, className = 'asset-image') {
  const initial = escapeHtml((String(alt).trim().charAt(0) || '?').toUpperCase());
  if (!src) {
    return `<span class="asset-slot ${className} missing-asset"><span class="asset-fallback" aria-hidden="true">${initial}</span></span>`;
  }
  return `<span class="asset-slot ${className}"><img src="${escapeHtml(src)}" alt="${escapeHtml(alt)}" loading="lazy" onerror="this.parentElement.classList.add('missing-asset'); this.remove();" /><span class="asset-fallback" aria-hidden="true">${initial}</span></span>`;
}

function rankList(items) {
  return `<ol class="rank-list">${items.map((item) => `<li>${escapeHtml(item)}</li>`).join('')}</ol>`;
}

function plainList(items, accentVar) {
  return `<ul class="plain-list">${items
    .map((item) => `<li><span class="plain-dot" style="background: var(${accentVar})"></span><span class="item-text">${escapeHtml(item)}</span></li>`)
    .join('')}</ul>`;
}

function renderClassList(title, items, id = '') {
  return `<section${id ? ` id="${escapeHtml(id)}"` : ''}><h4>${escapeHtml(title)}</h4>${rankList(items)}</section>`;
}

function renderScoreCard(title, value, label) {
  const score = Math.min(5, Math.max(3, value - 1));
  return `<section><strong>${escapeHtml(title)}</strong><span>${'★'.repeat(score)}${'☆'.repeat(5 - score)}</span><small>${escapeHtml(label)}</small></section>`;
}

function getActiveDungeons() {
  return dungeonGuides[state.selectedExpansion] ?? [];
}

function scopeNote(text) {
  return state.selectedExpansion === 'classic' ? '' : `<p class="scope-note">${escapeHtml(text)}</p>`;
}

/* ---------- Tile builders (used on Übersicht + section listing pages) ---------- */

function classTile(c) {
  return {
    href: `#class-guides/${c.id}`,
    color: c.color,
    subtitle: c.levelingSpec,
    badge: '',
    title: c.name,
    summary: c.summary,
    tags: c.roles.slice(0, 3),
    meta: 'Guide öffnen',
    hay: `${c.name} ${c.summary} ${c.roles.join(' ')} klasse class`
  };
}

function professionTile(p) {
  return {
    href: `#profession-guides/${p.id}`,
    color: p.theme,
    subtitle: 'Beruf · Classic',
    badge: '',
    title: `${p.name} ${p.skillRange}`,
    summary: p.summary,
    tags: [p.audience],
    meta: `${p.minutes} Min.`,
    hay: `${p.name} ${p.summary} beruf profession`
  };
}

function dungeonTile(d) {
  return {
    href: `#dungeon-guides/${d.id}`,
    color: d.theme,
    subtitle: `Level ${d.levelRange}`,
    badge: '',
    title: d.name,
    summary: d.summary,
    tags: [d.faction, d.zone],
    meta: d.time,
    hay: `${d.name} ${d.summary} ${d.zone} ${d.faction} dungeon`
  };
}

function farmingTile(item, group) {
  return {
    href: `#farming-guides/${encodeURIComponent(item.id)}`,
    color: group.theme,
    subtitle: group.profession,
    badge: '',
    title: item.name,
    summary: item.summary,
    tags: [item.skill],
    meta: item.levelRange,
    hay: `${item.name} ${item.summary} ${group.title} ${group.profession} ${item.skill} ${item.zones.join(' ')}`
  };
}

function libraryTile(g) {
  return {
    href: `#guides/${g.id}`,
    color: categoryAccents[g.category] || '#ffb22e',
    subtitle: g.category,
    badge: g.premium ? 'Premium' : 'Free',
    badgeClass: g.premium ? 'premium' : 'free',
    title: g.title,
    summary: g.summary,
    tags: g.tags.slice(0, 2),
    meta: `${g.minutes} Min.`,
    hay: `${g.title} ${g.summary} ${g.category} ${g.tags.join(' ')}`
  };
}

function renderTile(tile) {
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

function buildAllGroups(term) {
  const activeDungeons = getActiveDungeons();
  const groups = [
    { key: 'class-guides', label: 'Klassen', accent: '#ffb22e', tiles: classGuides.map(classTile) },
    { key: 'profession-guides', label: 'Berufe', accent: '#75d15f', tiles: professionGuides.map(professionTile) },
    { key: 'farming-guides', label: 'Farmen', accent: '#c9a86a', tiles: farmingGuides.flatMap((group) => group.items.map((item) => farmingTile(item, group))) },
    { key: 'dungeon-guides', label: 'Dungeons', accent: '#ff8a4c', tiles: activeDungeons.map(dungeonTile) },
    { key: 'guides', label: 'Bibliothek', accent: '#7bb6ff', tiles: guideCards.map(libraryTile) }
  ];
  return groups
    .map((group) => ({ ...group, tiles: group.tiles.filter((tile) => matches(tile.hay, term)) }))
    .filter((group) => group.tiles.length > 0);
}

function renderGroupBlock(group) {
  return `
    <section class="group-block">
      <div class="group-header">
        <span class="group-dot" style="background: ${escapeHtml(group.accent)}"></span>
        <h2>${escapeHtml(group.label)}</h2>
        <span class="group-count">${group.tiles.length} ${group.tiles.length === 1 ? 'Guide' : 'Guides'}</span>
      </div>
      <div class="tile-grid">${group.tiles.map(renderTile).join('')}</div>
    </section>`;
}

function renderNoResults() {
  return '<div class="empty-state"><b>Keine Guides gefunden</b>Passe Suche oder Filter an.</div>';
}

/* ---------- Page renderers ---------- */

function renderStart() {
  const totalDungeons = Object.values(dungeonGuides).reduce((sum, list) => sum + list.length, 0);
  const totalFarmingItems = farmingGuides.reduce((sum, group) => sum + group.items.length, 0);
  const totalGuides = classGuides.length + professionGuides.length + totalDungeons + totalFarmingItems + guideCards.length;
  const groups = buildAllGroups(state.search);

  return `
    <section class="page">
      <div class="hero">
        <div class="hero-copy">
          <span class="eyebrow">Guide-Zentrale · Alle Erweiterungen</span>
          <h1>Jeder Guide. Seine eigene Seite.</h1>
          <p>Wähle einen Bereich, öffne den Guide – und lies ihn übersichtlich auf einer eigenen, aufgeräumten Detailseite. Genau wie ein WoW-Addon-Panel.</p>
        </div>
        <div class="metric-grid">
          <div><b>${totalGuides}</b><span>Guides</span></div>
          <div><b>${categories.length}</b><span>Kategorien</span></div>
          <div><b>${guideCards.filter((g) => g.premium).length}</b><span>Premium</span></div>
        </div>
      </div>
      ${groups.length > 0 ? groups.map(renderGroupBlock).join('') : renderNoResults()}
      <section class="portable">
        <span></span>
        <div>
          <h2>Portable Windows Build</h2>
          <p>Mit <code>npm run dist:win</code> wird ein portabler Ordner mit Windows-Startdateien ohne externe NPM-Abhängigkeiten erzeugt.</p>
        </div>
        <span></span>
      </section>
    </section>`;
}

function renderFilterBar(sectionKey) {
  return `
    <div class="filter-bar">
      <span>Bereich: ${escapeHtml(NAV_LABELS[sectionKey])}</span>
      <button type="button" data-clear-filter>Alle anzeigen ✕</button>
    </div>`;
}

function renderClassGuidesListing() {
  const tiles = classGuides.map(classTile).filter((tile) => matches(tile.hay, state.search));
  return `
    <section class="page">
      ${renderFilterBar('class-guides')}
      <div class="hero"><div class="hero-copy"><span class="eyebrow">Ausführliche Klassen-Guides</span><h1>Classic Klassen kompakt, visuell und spielbereit.</h1><p>Leveling-Specs, Rollen, Stat-Prioritäten, Rotationen, Berufe und Power-Tipps für alle neun Classic-Klassen.</p>${scopeNote('Diese Klassen-Detailguides sind aktuell nur für WoW Classic verfügbar. Weitere Erweiterungen folgen.')}</div></div>
      ${tiles.length > 0 ? `<div class="tile-grid">${tiles.map(renderTile).join('')}</div>` : renderNoResults()}
    </section>`;
}

function renderProfessionGuidesListing() {
  const tiles = professionGuides.map(professionTile).filter((tile) => matches(tile.hay, state.search));
  return `
    <section class="page">
      ${renderFilterBar('profession-guides')}
      <div class="hero"><div class="hero-copy"><span class="eyebrow">Classic Berufe</span><h1>Alchemie 1-300 mit eigenständig formuliertem Guide.</h1><p>Icon, Trainerübersicht, Einkaufszettel, Rezeptquellen und Schritt-für-Schritt-Skillplan.</p>${scopeNote('Diese Berufs-Detailguides sind aktuell nur für WoW Classic verfügbar. Weitere Erweiterungen folgen.')}</div></div>
      ${tiles.length > 0 ? `<div class="tile-grid">${tiles.map(renderTile).join('')}</div>` : renderNoResults()}
    </section>`;
}

function renderFarmingGuidesListing() {
  const groupedTiles = farmingGuides.map((group) => ({
    group,
    tiles: group.items.map((item) => farmingTile(item, group)).filter((tile) => matches(tile.hay, state.search))
  })).filter((entry) => entry.tiles.length > 0);

  return `
    <section class="page">
      ${renderFilterBar('farming-guides')}
      <div class="hero"><div class="hero-copy"><span class="eyebrow">Classic Farming Guides</span><h1>Kräuter, Erze und Leder gezielt farmen.</h1><p>Jedes Material bekommt seine eigene Seite mit Fundorten, Spawn-Verhalten und Farm-Tipps.</p>${scopeNote('Diese Farming-Guides sind aktuell nur für WoW Classic verfügbar. Weitere Erweiterungen folgen.')}</div></div>
      ${groupedTiles.length > 0
        ? groupedTiles.map(({ group, tiles }) => `
          <section class="group-block">
            <div class="group-header"><span class="group-dot" style="background: ${escapeHtml(group.theme)}"></span><h2>${escapeHtml(group.title)}</h2><span class="group-count">${escapeHtml(group.tierLabel)}</span></div>
            <div class="tile-grid">${tiles.map(renderTile).join('')}</div>
          </section>`).join('')
        : renderNoResults()}
    </section>`;
}

function renderDungeonGuidesListing() {
  const atlasCopy = dungeonAtlasCopy[state.selectedExpansion];
  const activeDungeons = getActiveDungeons();
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

function renderLibraryListing() {
  const guides = filterGuides(guideCards, state);
  const optionsHtml = (options, current) => options.map(([value, label]) => `<option value="${escapeHtml(value)}" ${value === current ? 'selected' : ''}>${escapeHtml(label)}</option>`).join('');

  return `
    <section class="page">
      ${renderFilterBar('guides')}
      <div class="hero"><div class="hero-copy"><span class="eyebrow">Guide Command Center</span><h1>Suche, filtere und priorisiere Content.</h1><p>Free- und Premium-Guides für Leveling, Dungeons, Raids, Berufe, Gold, PvP, Klassen, Ruf und Geheimnisse.</p></div></div>
      <div class="library-filters">
        <select id="category-select">${optionsHtml(['Alle', ...categories].map((c) => [c, c === 'Alle' ? 'Alle Kategorien' : c]), state.category)}</select>
        <select id="expansion-select">${optionsHtml(expansionOptions, state.expansion)}</select>
        <button type="button" class="toggle ${state.showPremiumOnly ? 'active' : ''}" id="premium-toggle">Nur Premium</button>
      </div>
      ${guides.length > 0
        ? `<div class="tile-grid">${guides.map(libraryTile).map(renderTile).join('')}</div>`
        : '<div class="empty-state">Keine Guides gefunden. Passe Suche oder Filter an.</div>'}
    </section>`;
}

function renderPricing() {
  return `
    <section class="page narrow">
      <span class="eyebrow">Monetarisierung</span>
      <h1>Abo-Modell vorbereitet, Payment später integrierbar.</h1>
      <p>Die Oberfläche trennt Free- und Premium-Content bereits sichtbar. Der nächste Schritt ist ein Lizenzserver mit Stripe- oder Paddle-Anbindung.</p>
      <div class="pricing-grid">
        ${subscriptionTiers.map((tier) => `
          <article class="price-card ${tier.highlighted ? 'highlighted' : ''}">
            <h3>${escapeHtml(tier.name)}</h3>
            <strong>${escapeHtml(tier.price)}</strong>
            <p>${escapeHtml(tier.description)}</p>
            <ul>${tier.features.map((f) => `<li>${escapeHtml(f)}</li>`).join('')}</ul>
            <button type="button">${escapeHtml(tier.cta)}</button>
          </article>`).join('')}
      </div>
    </section>`;
}

/* ---------- Detail pages ---------- */

function backLink(targetHash) {
  return `<a class="back-link" href="${targetHash}">← Zurück zur Übersicht</a>`;
}

function renderSpecGuide(spec) {
  return `
    <article class="spec-card">
      <div class="card-meta"><span>${escapeHtml(spec.role)}</span><span>${escapeHtml(spec.name)}</span></div>
      <h5>${escapeHtml(spec.name)}</h5>
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

function renderClassDetail(id) {
  const guide = classGuides.find((item) => item.id === id);
  if (!guide) return null;
  const build = classBuildGuides[guide.id] ?? { rotations: { leveling: [], dungeon: [], raid: [] }, bestInSlot: [] };
  const specs = specGuides[guide.id] ?? [];

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
              <div class="card-meta"><span>${escapeHtml(guide.levelingSpec)}</span><span>${escapeHtml(guide.difficulty)}</span></div>
              <h3>${escapeHtml(guide.name)} Classic Class Guide</h3>
              <p>${escapeHtml(guide.summary)}</p>
              <div class="class-pill-row">${guide.roles.map((role) => `<span>${escapeHtml(role)}</span>`).join('')}</div>
            </div>
          </div>
          <div class="guide-update-card">
            <span>Zuletzt geprüft</span>
            <strong>Classic Launch-Katalog</strong>
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

function renderTrainerBlock(trainer) {
  return `
    <article>
      <h5>${escapeHtml(trainer.rank)} <span>${escapeHtml(trainer.range)}</span></h5>
      <p>${escapeHtml(trainer.requirement)}</p>
      <div class="trainer-columns">
        <div><strong>Allianz</strong><ul>${trainer.alliance.map((item) => `<li>${escapeHtml(item)}</li>`).join('')}</ul></div>
        <div><strong>Horde</strong><ul>${trainer.horde.map((item) => `<li>${escapeHtml(item)}</li>`).join('')}</ul></div>
      </div>
    </article>`;
}

function renderProfessionStep(step) {
  return `
    <article class="profession-step">
      <strong>${escapeHtml(step.range)}</strong>
      <div>
        <h5>${escapeHtml(step.craft)}</h5>
        <p>${escapeHtml(step.materials)}</p>
        ${step.note ? `<small>${escapeHtml(step.note)}</small>` : ''}
      </div>
    </article>`;
}

function renderProfessionDetail(id) {
  const profession = professionGuides.find((item) => item.id === id);
  if (!profession) return null;

  return `
    <article class="page narrow detail-page">
      ${backLink('#profession-guides')}
      <div class="crumb">Übersicht · Berufe · ${escapeHtml(profession.name)}</div>
      <article class="profession-panel" style="--profession-color: ${escapeHtml(profession.theme)}">
        <header class="profession-hero">
          <div class="profession-title">
            ${renderAssetImage(assetManifest.professions?.[profession.icon], `${profession.name} Icon`, 'profession-hero-icon')}
            <div>
              <div class="card-meta"><span>WoW Classic</span><span>${escapeHtml(profession.skillRange)}</span><span>${escapeHtml(profession.audience)}</span></div>
              <h3>${escapeHtml(profession.name)} ${escapeHtml(profession.skillRange)}</h3>
              <p>${escapeHtml(profession.summary)}</p>
            </div>
          </div>
          <div class="profession-stat-card">
            <span>Guide-Dauer</span>
            <strong>${profession.minutes} Min.</strong>
            <small>Materialcheck, Trainer, Rezepte und Skillroute in einem Ablauf.</small>
          </div>
        </header>
        <nav class="profession-nav" aria-label="${escapeHtml(profession.name)} Guide Schnellnavigation">
          <a href="#profession-intro">Allgemeines</a>
          <a href="#profession-trainers">Lehrer</a>
          <a href="#profession-materials">Einkaufszettel</a>
          <a href="#profession-recipes">Rezepte</a>
          <a href="#profession-route">1-300 Route</a>
        </nav>
        <section class="profession-intro" id="profession-intro">${profession.intro.map((item) => `<p>${escapeHtml(item)}</p>`).join('')}</section>
        <div class="profession-grid">
          <section class="profession-card trainers-card" id="profession-trainers">
            <div class="guide-section-heading"><span>Trainer</span><h4>${escapeHtml(profession.name)}-Lehrer nach Rang</h4></div>
            <div class="trainer-list">${profession.trainers.map(renderTrainerBlock).join('')}</div>
          </section>
          <section class="profession-card" id="profession-materials">
            <div class="guide-section-heading"><span>Materialien</span><h4>Einkaufszettel</h4></div>
            <p class="profession-note">Richtwerte für den kompletten Weg bis 300. Plane Reserven ein, wenn gelbe oder grüne Rezepte Pechsträhnen verursachen.</p>
            <div class="material-list">${profession.shoppingList.map((item) => `<span>${escapeHtml(item)}</span>`).join('')}</div>
          </section>
          <section class="profession-card" id="profession-recipes">
            <div class="guide-section-heading"><span>Rezepte</span><h4>Vor dem Skillen besorgen</h4></div>
            <ul>${profession.recipes.map((item) => `<li>${escapeHtml(item)}</li>`).join('')}</ul>
          </section>
          <section class="profession-card">
            <div class="guide-section-heading"><span>Tipps</span><h4>Effizienter leveln</h4></div>
            <ul>${profession.tips.map((item) => `<li>${escapeHtml(item)}</li>`).join('')}</ul>
          </section>
        </div>
        <section class="profession-route" id="profession-route">
          <div class="guide-section-heading"><span>Skillroute</span><h4>Schritt für Schritt zu ${escapeHtml(profession.name)} 300</h4></div>
          <div class="profession-step-list">${profession.steps.map(renderProfessionStep).join('')}</div>
        </section>
      </article>
    </article>`;
}

function renderDungeonDetail(id) {
  const dungeon = getActiveDungeons().find((item) => item.id === id) ?? Object.values(dungeonGuides).flat().find((item) => item.id === id);
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
          ${renderClassList('Optimale Route', dungeon.route)}
          ${renderClassList('Bosse', dungeon.bosses)}
          ${renderClassList('Loot-Ziele', dungeon.loot)}
          ${renderClassList('Gruppen-Tipps', dungeon.tips)}
          ${renderClassList('Quests / Vorbereitung', dungeon.quests)}
          ${renderClassList('Gruppen-Setup', dungeon.composition)}
        </div>
      </article>
    </article>`;
}

function renderFarmingDetail(itemId) {
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

function renderLibraryDetail(id) {
  const guide = guideCards.find((item) => item.id === id);
  if (!guide) return null;
  const color = categoryAccents[guide.category] || '#ffb22e';

  return `
    <article class="page narrow detail-page" style="--ac: ${escapeHtml(color)}">
      ${backLink('#guides')}
      <div class="crumb">Übersicht · Bibliothek · ${escapeHtml(guide.title)}</div>
      <header class="detail-header">
        <div class="detail-icon">${escapeHtml(guide.category.charAt(0))}</div>
        <div class="detail-main">
          <div class="detail-topline">
            <span class="detail-subline">${escapeHtml(guide.category)} · ${guide.minutes} Min.</span>
            <span class="${guide.premium ? 'premium' : 'free'}">${guide.premium ? 'Premium' : 'Free'}</span>
          </div>
          <h1 class="detail-title">${escapeHtml(guide.title)}</h1>
          <p class="detail-summary">${escapeHtml(guide.summary)}</p>
          <div class="pill-row">
            <span class="pill">${escapeHtml(guide.category)}</span>
            <span class="pill">${escapeHtml(guide.audience)}</span>
            <span class="pill">${guide.minutes} Min.</span>
          </div>
        </div>
      </header>
      <div class="section-cards">
        <section class="section-card">
          <h4>Checkliste</h4>
          ${rankList(guide.checklist)}
        </section>
      </div>
      <div class="hashtags">${guide.tags.map((tag) => `<span class="hashtag">#${escapeHtml(tag)}</span>`).join('')}</div>
    </article>`;
}

/* ---------- Sidebar ---------- */

function renderExpansionSwitch() {
  expansionSwitch.innerHTML = expansions
    .map((item) => `<button type="button" class="expansion-pill ${item.key === state.selectedExpansion ? 'active' : ''}" data-expansion="${escapeHtml(item.key)}">${escapeHtml(expansionLabels[item.key] ?? item.name)}</button>`)
    .join('');

  expansionSwitch.querySelectorAll('[data-expansion]').forEach((button) => {
    button.addEventListener('click', () => {
      state.selectedExpansion = button.dataset.expansion;
      state.expansion = state.selectedExpansion;
      redirectIfDungeonMissing();
      render();
    });
  });
}

function redirectIfDungeonMissing() {
  const [section, id] = parseHash();
  if (section !== 'dungeon-guides' || !id) return;
  if (!getActiveDungeons().some((dungeon) => dungeon.id === id)) {
    window.location.hash = '#dungeon-guides';
  }
}

function renderPackageBox() {
  const active = expansions.find((item) => item.key === state.selectedExpansion) ?? expansions[0];
  packageBox.innerHTML = `
    <div class="package-status"><span class="package-dot"></span><small class="package-label">Aktives Paket</small></div>
    <strong>${escapeHtml(active.name)}</strong>
    <small class="package-desc">${escapeHtml(active.launchFocus)}</small>`;
}

function renderNavCounts() {
  const totalDungeons = getActiveDungeons().length;
  const totalFarmingItems = farmingGuides.reduce((sum, group) => sum + group.items.length, 0);
  document.querySelector('#nav-count-class-guides').textContent = classGuides.length;
  document.querySelector('#nav-count-profession-guides').textContent = professionGuides.length;
  document.querySelector('#nav-count-farming-guides').textContent = totalFarmingItems;
  document.querySelector('#nav-count-dungeon-guides').textContent = totalDungeons;
  document.querySelector('#nav-count-guides').textContent = guideCards.length;
}

function renderNavActive(activeSection) {
  siteNav.querySelectorAll('a[data-nav]').forEach((link) => {
    link.classList.toggle('active', link.dataset.nav === activeSection);
  });
}

/* ---------- Router ---------- */

function parseHash() {
  const raw = window.location.hash.replace(/^#/, '');
  if (!raw) return ['start', null];
  const slashIndex = raw.indexOf('/');
  if (slashIndex === -1) return [raw, null];
  return [raw.slice(0, slashIndex), decodeURIComponent(raw.slice(slashIndex + 1))];
}

function showExpansionPicker(visible) {
  expansionPickerMount.classList.toggle('hidden', !visible);
  if (!visible) return;
  expansionPickerMount.innerHTML = `
    <div class="expansion-picker-inner">
      <div class="section-heading">
        <span class="eyebrow">Erweiterung auswählen</span>
        <h2>Wähle zuerst deine WoW-Ära.</h2>
        <p>Jede Erweiterung bekommt eigene Grafiken, Module und später eigene Content-Packs. Classic ist aktuell aktiv.</p>
      </div>
      <div class="expansion-layout">
        <div class="expansion-hero-grid" id="expansion-hero-grid"></div>
        <aside class="active-expansion-card" id="active-expansion-card"></aside>
      </div>
    </div>
    <section class="roadmap-grid" id="roadmap-grid"></section>`;

  const heroGrid = expansionPickerMount.querySelector('#expansion-hero-grid');
  heroGrid.innerHTML = expansions
    .map((item) => {
      const art = expansionArtwork[item.key] ?? expansionArtwork.future;
      const isActive = state.selectedExpansion === item.key;
      return `
        <button type="button" class="expansion-tile ${isActive ? 'active' : ''}" data-expansion="${escapeHtml(item.key)}" style="--tile-art: ${escapeHtml(art.art)}">
          <span class="expansion-status">${escapeHtml(item.status)}</span>
          <strong>${escapeHtml(item.name)}</strong>
          <small>${escapeHtml(art.theme)}</small>
        </button>`;
    })
    .join('');

  heroGrid.querySelectorAll('[data-expansion]').forEach((button) => {
    button.addEventListener('click', () => {
      state.selectedExpansion = button.dataset.expansion;
      state.expansion = state.selectedExpansion;
      redirectIfDungeonMissing();
      render();
    });
  });

  const active = expansions.find((item) => item.key === state.selectedExpansion) ?? expansions[0];
  expansionPickerMount.querySelector('#active-expansion-card').innerHTML = `
    <span class="eyebrow">Aktives Paket</span>
    <h3>${escapeHtml(active.name)}</h3>
    <p>${escapeHtml(active.launchFocus)}</p>
    <div class="module-list">${active.modules.map((module) => `<span>${escapeHtml(module)}</span>`).join('')}</div>`;

  expansionPickerMount.querySelector('#roadmap-grid').innerHTML = expansions
    .map((item) => `
      <article class="roadmap-card">
        <span class="status ${escapeHtml(item.status.toLowerCase())}">${escapeHtml(item.status)}</span>
        <h3>${escapeHtml(item.name)}</h3>
        <p>${escapeHtml(item.launchFocus)}</p>
        <div class="module-list">${item.modules.map((module) => `<span>${escapeHtml(module)}</span>`).join('')}</div>
      </article>`)
    .join('');
}

function wireLibraryFilters() {
  const categorySelect = viewContent.querySelector('#category-select');
  const expansionSelect = viewContent.querySelector('#expansion-select');
  const premiumToggle = viewContent.querySelector('#premium-toggle');
  if (!categorySelect) return;

  categorySelect.addEventListener('change', (event) => {
    state.category = event.target.value;
    renderView();
  });
  expansionSelect.addEventListener('change', (event) => {
    state.expansion = event.target.value;
    if (state.expansion !== 'all') {
      state.selectedExpansion = state.expansion;
      redirectIfDungeonMissing();
      renderExpansionSwitch();
      renderPackageBox();
      renderNavCounts();
    }
    renderView();
  });
  premiumToggle.addEventListener('click', () => {
    state.showPremiumOnly = !state.showPremiumOnly;
    renderView();
  });
}

function wireFilterBarClear() {
  const clearButton = viewContent.querySelector('[data-clear-filter]');
  if (!clearButton) return;
  clearButton.addEventListener('click', () => {
    state.search = '';
    searchInput.value = '';
    window.location.hash = '#start';
  });
}

function renderView() {
  const [section, id] = parseHash();
  showExpansionPicker(section === 'start');

  let html = '';
  if (section === 'start') {
    html = renderStart();
  } else if (section === 'class-guides') {
    html = id ? renderClassDetail(id) : renderClassGuidesListing();
  } else if (section === 'profession-guides') {
    html = id ? renderProfessionDetail(id) : renderProfessionGuidesListing();
  } else if (section === 'farming-guides') {
    html = id ? renderFarmingDetail(id) : renderFarmingGuidesListing();
  } else if (section === 'dungeon-guides') {
    html = id ? renderDungeonDetail(id) : renderDungeonGuidesListing();
  } else if (section === 'guides') {
    html = id ? renderLibraryDetail(id) : renderLibraryListing();
  } else if (section === 'subscriptions') {
    html = renderPricing();
  }

  if (!html) {
    window.location.hash = `#${NAV_SECTIONS.includes(section) ? section : 'start'}`;
    return;
  }

  viewContent.innerHTML = html;
  renderNavActive(NAV_SECTIONS.includes(section) ? section : 'start');
  wireLibraryFilters();
  wireFilterBarClear();
  viewRoot.scrollTop = 0;
  window.scrollTo(0, 0);
}

function render() {
  renderExpansionSwitch();
  renderPackageBox();
  renderNavCounts();
  renderView();
}

searchInput.addEventListener('input', (event) => {
  state.search = event.target.value;
  renderView();
});

sidebarToggle.addEventListener('click', () => {
  sidebar.classList.toggle('sidebar-open');
});

siteNav.querySelectorAll('a[data-nav]').forEach((link) => {
  link.addEventListener('click', () => {
    sidebar.classList.remove('sidebar-open');
  });
});

document.querySelector('#logo-link').addEventListener('click', () => {
  state.search = '';
  searchInput.value = '';
  sidebar.classList.remove('sidebar-open');
});

window.addEventListener('hashchange', () => {
  renderView();
});

function showFatalError(error) {
  console.error('WoW Guide Manager failed to start:', error);
  if (!viewRoot) return;
  const banner = document.createElement('div');
  banner.className = 'fatal-error-banner';
  banner.setAttribute('role', 'alert');
  banner.innerHTML = `
    <strong>Die App konnte nicht vollständig geladen werden.</strong>
    <p>Bitte lade die Seite neu. Wenn der Fehler bestehen bleibt, melde ihn mit den Details aus der Konsole.</p>`;
  viewRoot.prepend(banner);
}

function init() {
  render();
}

try {
  init();
} catch (error) {
  showFatalError(error);
}

window.addEventListener('error', (event) => {
  console.error('Unhandled error:', event.error ?? event.message);
});
