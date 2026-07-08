import { categories, expansions, guideCards } from './data/guides.js';
import { classGuides } from './data/classGuides.js';
import { classBuildGuides } from './data/classBuildGuides.js';
import { specGuides } from './data/specGuides.js';
import { dungeonGuides } from './data/dungeonGuides.js';
import { professionGuides } from './data/professionGuides.js';
import { assetManifest } from './data/assetManifest.js';
import { subscriptionTiers } from './data/subscriptions.js';
import { filterGuides } from './lib/filterGuides.js';

const state = {
  search: '',
  category: 'Alle',
  expansion: 'classic',
  showPremiumOnly: false,
  selectedExpansion: 'classic',
  selectedClassId: 'warrior',
  selectedDungeonId: 'blackrock-depths',
  selectedProfessionId: 'classic-alchemy'
};

const expansionHeroGrid = document.querySelector('#expansion-hero-grid');
const activeExpansionName = document.querySelector('#active-expansion-name');
const activeExpansionFocus = document.querySelector('#active-expansion-focus');
const activeExpansionModules = document.querySelector('#active-expansion-modules');
const classTabs = document.querySelector('#class-tabs');
const classDetail = document.querySelector('#class-detail');
const classScopeNote = document.querySelector('#class-guides-scope-note');
const dungeonRail = document.querySelector('#dungeon-rail');
const dungeonDetail = document.querySelector('#dungeon-detail');
const dungeonCount = document.querySelector('#dungeon-count');
const dungeonEyebrow = document.querySelector('#dungeon-eyebrow');
const dungeonHeadingTitle = document.querySelector('#dungeon-heading-title');
const dungeonHeadingCopy = document.querySelector('#dungeon-heading-copy');
const professionTabs = document.querySelector('#profession-tabs');
const professionDetail = document.querySelector('#profession-detail');
const professionScopeNote = document.querySelector('#profession-guides-scope-note');
const guideGrid = document.querySelector('#guide-grid');
const roadmapGrid = document.querySelector('#roadmap-grid');
const pricingGrid = document.querySelector('#pricing-grid');
const emptyState = document.querySelector('#empty-state');
const searchInput = document.querySelector('#search');
const categorySelect = document.querySelector('#category');
const expansionSelect = document.querySelector('#expansion');
const premiumToggle = document.querySelector('#premium-toggle');

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

function escapeHtml(value) {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');
}



function renderAssetImage(src, alt, className = 'asset-image') {
  const initial = escapeHtml((String(alt).trim().charAt(0) || '?').toUpperCase());
  if (!src) {
    return `<span class="asset-slot ${className} missing-asset"><span class="asset-fallback" aria-hidden="true">${initial}</span></span>`;
  }
  return `<span class="asset-slot ${className}"><img src="${escapeHtml(src)}" alt="${escapeHtml(alt)}" loading="lazy" onerror="this.parentElement.classList.add('missing-asset'); this.remove();" /><span class="asset-fallback" aria-hidden="true">${initial}</span></span>`;
}

function getExpansionArtwork(key) {
  return expansionArtwork[key] ?? expansionArtwork.future;
}

function renderExpansionSelector() {
  expansionHeroGrid.innerHTML = expansions
    .map((item) => {
      const art = getExpansionArtwork(item.key);
      const isActive = state.selectedExpansion === item.key;
      return `
        <button class="expansion-tile ${isActive ? 'active' : ''}" data-expansion="${escapeHtml(item.key)}" style="--tile-art: ${escapeHtml(art.art)}">
          ${renderAssetImage(assetManifest.expansions[item.key]?.hero ?? assetManifest.expansions.future.hero, item.name, 'expansion-image')}
          <span class="expansion-status">${escapeHtml(item.status)}</span>
          <strong>${escapeHtml(item.name)}</strong>
          <small>${escapeHtml(art.theme)}</small>
        </button>`;
    })
    .join('');

  expansionHeroGrid.querySelectorAll('[data-expansion]').forEach((button) => {
    button.addEventListener('click', () => {
      state.selectedExpansion = button.dataset.expansion;
      state.expansion = state.selectedExpansion;
      expansionSelect.value = state.expansion;
      renderExpansionSelector();
      renderGuides();
      renderDungeonGuides();
      renderScopeNotes();
    });
  });

  const active = expansions.find((item) => item.key === state.selectedExpansion) ?? expansions[0];
  activeExpansionName.textContent = active.name;
  activeExpansionFocus.textContent = active.launchFocus;
  activeExpansionModules.innerHTML = active.modules.map((module) => `<span>${escapeHtml(module)}</span>`).join('');
}

function renderScopeNotes() {
  const isClassic = state.selectedExpansion === 'classic';
  classScopeNote.textContent = 'Diese Klassen-Detailguides sind aktuell nur für WoW Classic verfügbar. Weitere Erweiterungen folgen.';
  classScopeNote.classList.toggle('hidden', isClassic);
  professionScopeNote.textContent = 'Diese Berufs-Detailguides sind aktuell nur für WoW Classic verfügbar. Weitere Erweiterungen folgen.';
  professionScopeNote.classList.toggle('hidden', isClassic);
}

function renderClassGuides() {
  classTabs.innerHTML = classGuides
    .map(
      (classGuide) => `
        <button class="class-tab ${classGuide.id === state.selectedClassId ? 'active' : ''}" data-class="${escapeHtml(classGuide.id)}" style="--class-color: ${escapeHtml(classGuide.color)}">
          ${renderAssetImage(assetManifest.classes[classGuide.id], classGuide.name, 'class-tab-image')}${escapeHtml(classGuide.name)}
        </button>`
    )
    .join('');

  classTabs.querySelectorAll('[data-class]').forEach((button) => {
    button.addEventListener('click', () => {
      state.selectedClassId = button.dataset.class;
      renderClassGuides();
    });
  });

  const guide = classGuides.find((item) => item.id === state.selectedClassId) ?? classGuides[0];
  if (!guide) {
    classDetail.innerHTML = '<p class="empty-state">Keine Klassendaten verfügbar.</p>';
    return;
  }
  const build = classBuildGuides[guide.id] ?? { rotations: { leveling: [], dungeon: [], raid: [] }, bestInSlot: [] };
  const specs = specGuides[guide.id] ?? [];
  classDetail.innerHTML = `
    <article class="class-panel" style="--class-color: ${escapeHtml(guide.color)}">
      <header class="class-guide-hero">
        <div class="class-breadcrumb">Home / World of Warcraft / Classes / ${escapeHtml(guide.name)}</div>
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
          <small>Redaktionelles Layout mit Schnellnavigation, Overview und kompakten Detailseiten.</small>
        </div>
      </header>
      <nav class="class-guide-nav" aria-label="${escapeHtml(guide.name)} Guide Schnellnavigation">
        <a href="#class-overview">Übersicht</a>
        <a href="#class-talente">Talente</a>
        <a href="#class-rotation">Rotation</a>
        <a href="#class-stats">Stats</a>
        <a href="#class-bis">BiS & Gear</a>
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
    </article>`;
}


function renderScoreCard(title, value, label) {
  const score = Math.min(5, Math.max(3, value - 1));
  return `<section><strong>${escapeHtml(title)}</strong><span>${'★'.repeat(score)}${'☆'.repeat(5 - score)}</span><small>${escapeHtml(label)}</small></section>`;
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
  return `<section><h5>${escapeHtml(title)}</h5><ol class="rank-list">${items.map((item) => `<li>${escapeHtml(item)}</li>`).join('')}</ol></section>`;
}

function renderClassList(title, items, id = '') {
  return `<section${id ? ` id="${escapeHtml(id)}"` : ''}><h4>${escapeHtml(title)}</h4><ol class="rank-list">${items.map((item) => `<li>${escapeHtml(item)}</li>`).join('')}</ol></section>`;
}


function getActiveDungeons() {
  return dungeonGuides[state.selectedExpansion] ?? [];
}

function renderDungeonGuides() {
  const activeDungeons = getActiveDungeons();
  const atlasCopy = dungeonAtlasCopy[state.selectedExpansion];

  dungeonEyebrow.textContent = atlasCopy?.eyebrow ?? 'Dungeon Atlas';
  dungeonHeadingTitle.textContent = atlasCopy?.title ?? 'Für diese Erweiterung ist noch kein Dungeon Atlas verfügbar.';
  dungeonHeadingCopy.textContent =
    atlasCopy?.copy ?? 'Dieser Bereich wird mit dem nächsten Content-Pack für diese Erweiterung ergänzt.';

  dungeonCount.textContent = activeDungeons.length;

  if (!activeDungeons.some((dungeon) => dungeon.id === state.selectedDungeonId)) {
    state.selectedDungeonId = activeDungeons[0]?.id ?? null;
  }

  if (activeDungeons.length === 0) {
    dungeonRail.innerHTML = '';
    dungeonDetail.innerHTML = '<p class="empty-state">Für diese Erweiterung ist noch kein Dungeon Atlas verfügbar.</p>';
    return;
  }

  dungeonRail.innerHTML = activeDungeons
    .map(
      (dungeon) => `
        <button class="dungeon-chip ${dungeon.id === state.selectedDungeonId ? 'active' : ''}" data-dungeon="${escapeHtml(dungeon.id)}" style="--dungeon-color: ${escapeHtml(dungeon.theme)}">
          ${renderAssetImage(assetManifest.dungeons[dungeon.id], dungeon.name, 'dungeon-chip-image')}
          <strong>${escapeHtml(dungeon.name)}</strong>
          <small>${escapeHtml(dungeon.levelRange)} · ${escapeHtml(dungeon.zone)}</small>
        </button>`
    )
    .join('');

  dungeonRail.querySelectorAll('[data-dungeon]').forEach((button) => {
    button.addEventListener('click', () => {
      state.selectedDungeonId = button.dataset.dungeon;
      renderDungeonGuides();
    });
  });

  const dungeon = activeDungeons.find((item) => item.id === state.selectedDungeonId) ?? activeDungeons[0];
  if (!dungeon) {
    dungeonDetail.innerHTML = '<p class="empty-state">Keine Dungeon-Daten verfügbar.</p>';
    return;
  }
  dungeonDetail.innerHTML = `
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
    </article>`;
}

function renderProfessionGuides() {
  professionTabs.innerHTML = professionGuides
    .map(
      (profession) => `
        <button class="profession-tab ${profession.id === state.selectedProfessionId ? 'active' : ''}" data-profession="${escapeHtml(profession.id)}" style="--profession-color: ${escapeHtml(profession.theme)}">
          ${renderAssetImage(assetManifest.professions?.[profession.icon], `${profession.name} Icon`, 'profession-icon-image')}
          <span>${escapeHtml(profession.name)}</span>
          <small>${escapeHtml(profession.skillRange)}</small>
        </button>`
    )
    .join('');

  professionTabs.querySelectorAll('[data-profession]').forEach((button) => {
    button.addEventListener('click', () => {
      state.selectedProfessionId = button.dataset.profession;
      renderProfessionGuides();
    });
  });

  const profession = professionGuides.find((item) => item.id === state.selectedProfessionId) ?? professionGuides[0];
  if (!profession) {
    professionDetail.innerHTML = '<p class="empty-state">Keine Berufsdaten verfügbar.</p>';
    return;
  }
  professionDetail.innerHTML = `
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
          <div class="guide-section-heading"><span>Trainer</span><h4>Alchemie-Lehrer nach Rang</h4></div>
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

function renderMetrics() {
  const totalDungeons = Object.values(dungeonGuides).reduce((sum, list) => sum + list.length, 0);
  document.querySelector('#metric-guides').textContent = guideCards.length + totalDungeons + professionGuides.length;
  document.querySelector('#metric-categories').textContent = categories.length;
  document.querySelector('#metric-premium').textContent = guideCards.filter((guide) => guide.premium).length;
}

function renderSelects() {
  categorySelect.innerHTML = ['Alle', ...categories]
    .map((category) => `<option value="${escapeHtml(category)}">${escapeHtml(category === 'Alle' ? 'Alle Kategorien' : category)}</option>`)
    .join('');
  categorySelect.value = state.category;

  expansionSelect.innerHTML = expansionOptions
    .map(([value, label]) => `<option value="${escapeHtml(value)}">${escapeHtml(label)}</option>`)
    .join('');
  expansionSelect.value = state.expansion;
}

function renderGuides() {
  const guides = filterGuides(guideCards, state);
  guideGrid.innerHTML = guides
    .map(
      (guide) => `
        <article class="guide-card">
          <div class="card-meta"><span>${escapeHtml(guide.category)}</span><span>${guide.minutes} Min.</span></div>
          <h3>${escapeHtml(guide.title)}</h3>
          <p>${escapeHtml(guide.summary)}</p>
          <ul>${guide.checklist.slice(0, 3).map((item) => `<li>${escapeHtml(item)}</li>`).join('')}</ul>
          <div class="tag-row">${guide.tags.map((tag) => `<span>${escapeHtml(tag)}</span>`).join('')}</div>
          <div class="card-footer">
            <span class="audience">${escapeHtml(guide.audience)}</span>
            ${guide.premium ? '<span class="premium">Premium</span>' : '<span class="free">Free</span>'}
          </div>
        </article>`
    )
    .join('');
  emptyState.classList.toggle('hidden', guides.length !== 0);
}

function renderRoadmap() {
  roadmapGrid.innerHTML = expansions
    .map(
      (item) => `
        <article class="roadmap-card">
          <span class="status ${escapeHtml(item.status.toLowerCase())}">${escapeHtml(item.status)}</span>
          <h3>${escapeHtml(item.name)}</h3>
          <p>${escapeHtml(item.launchFocus)}</p>
          <div class="module-list">${item.modules.map((module) => `<span>${escapeHtml(module)}</span>`).join('')}</div>
        </article>`
    )
    .join('');
}

function renderPricing() {
  pricingGrid.innerHTML = subscriptionTiers
    .map(
      (tier) => `
        <article class="price-card ${tier.highlighted ? 'highlighted' : ''}">
          <h3>${escapeHtml(tier.name)}</h3>
          <strong>${escapeHtml(tier.price)}</strong>
          <p>${escapeHtml(tier.description)}</p>
          <ul>${tier.features.map((feature) => `<li>${escapeHtml(feature)}</li>`).join('')}</ul>
          <button>${escapeHtml(tier.cta)}</button>
        </article>`
    )
    .join('');
}

searchInput.addEventListener('input', (event) => {
  state.search = event.target.value;
  renderGuides();
});

categorySelect.addEventListener('change', (event) => {
  state.category = event.target.value;
  renderGuides();
});

expansionSelect.addEventListener('change', (event) => {
  state.expansion = event.target.value;
  if (state.expansion !== 'all') {
    state.selectedExpansion = state.expansion;
    renderExpansionSelector();
    renderDungeonGuides();
    renderScopeNotes();
  }
  renderGuides();
});

premiumToggle.addEventListener('click', () => {
  state.showPremiumOnly = !state.showPremiumOnly;
  premiumToggle.classList.toggle('active', state.showPremiumOnly);
  renderGuides();
});

const VIEW_IDS = ['start', 'class-guides', 'profession-guides', 'dungeon-guides', 'guides', 'subscriptions'];
const navLinks = document.querySelectorAll('.site-nav a');

function setActiveView(viewId, { updateHash = true } = {}) {
  const target = VIEW_IDS.includes(viewId) ? viewId : 'start';
  VIEW_IDS.forEach((id) => {
    document.getElementById(id)?.classList.toggle('active', id === target);
  });
  navLinks.forEach((link) => {
    link.classList.toggle('active', link.getAttribute('href') === `#${target}`);
  });
  if (updateHash && window.location.hash.slice(1) !== target) {
    window.history.replaceState(null, '', `#${target}`);
  }
  window.scrollTo(0, 0);
}

document.addEventListener('click', (event) => {
  const link = event.target.closest('a[href^="#"]');
  if (!link) return;
  const targetId = link.getAttribute('href').slice(1);
  if (!VIEW_IDS.includes(targetId)) return;
  event.preventDefault();
  setActiveView(targetId);
});

window.addEventListener('hashchange', () => {
  setActiveView(window.location.hash.slice(1), { updateHash: false });
});

function showFatalError(error) {
  console.error('WoW Guide Manager failed to start:', error);
  const appShell = document.querySelector('.app-shell');
  if (!appShell) return;
  const banner = document.createElement('div');
  banner.className = 'fatal-error-banner';
  banner.setAttribute('role', 'alert');
  banner.innerHTML = `
    <strong>Die App konnte nicht vollständig geladen werden.</strong>
    <p>Bitte lade die Seite neu. Wenn der Fehler bestehen bleibt, melde ihn mit den Details aus der Konsole.</p>`;
  appShell.prepend(banner);
}

function init() {
  renderMetrics();
  renderSelects();
  renderExpansionSelector();
  renderClassGuides();
  renderDungeonGuides();
  renderProfessionGuides();
  renderScopeNotes();
  renderGuides();
  renderRoadmap();
  renderPricing();
  setActiveView(window.location.hash.slice(1), { updateHash: false });
}

try {
  init();
} catch (error) {
  showFatalError(error);
}

window.addEventListener('error', (event) => {
  console.error('Unhandled error:', event.error ?? event.message);
});
