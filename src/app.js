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
const dungeonRail = document.querySelector('#dungeon-rail');
const dungeonDetail = document.querySelector('#dungeon-detail');
const dungeonCount = document.querySelector('#dungeon-count');
const professionTabs = document.querySelector('#profession-tabs');
const professionDetail = document.querySelector('#profession-detail');
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
  return `<span class="asset-slot ${className}"><img src="${escapeHtml(src)}" alt="${escapeHtml(alt)}" loading="lazy" onerror="this.parentElement.classList.add('missing-asset'); this.remove();" /><span class="asset-missing">Asset fehlt</span></span>`;
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
    });
  });

  const active = expansions.find((item) => item.key === state.selectedExpansion) ?? expansions[0];
  activeExpansionName.textContent = active.name;
  activeExpansionFocus.textContent = active.launchFocus;
  activeExpansionModules.innerHTML = active.modules.map((module) => `<span>${escapeHtml(module)}</span>`).join('');
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
  const build = classBuildGuides[guide.id];
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
        <a href="#class-guides">Übersicht</a>
        <a href="#class-guides">Talente</a>
        <a href="#class-guides">Rotation</a>
        <a href="#class-guides">Stats</a>
        <a href="#class-guides">BiS & Gear</a>
        <a href="#class-guides">Berufe</a>
        <a href="#class-guides">Specs</a>
      </nav>
      <aside class="class-toc">
        <span>Inhaltsverzeichnis</span>
        <ol>
          <li>Overview und Rollenprofil</li>
          <li>Basis-Rotation und Prioritäten</li>
          <li>Talente, Berufe und Power-Tipps</li>
          <li>Content-Rotation nach Leveling, Dungeon und Raid</li>
          <li>Best-in-Slot Ziele und Spec Guides</li>
        </ol>
      </aside>
      <section class="class-overview-card">
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
        ${renderClassList('Basis-Rotation', guide.rotation)}
        ${renderClassList('Stat-Priorität', guide.statPriority)}
        ${renderClassList('Talente', guide.talents)}
        ${renderClassList('Berufe', guide.professions)}
        ${renderClassList('Power-Tipps', guide.powerTips)}
      </div>
      <div class="rotation-lab">
        <div class="guide-section-heading"><span>Prioritätsliste</span><h4>Rotation Guide nach Content</h4></div>
        <div class="rotation-grid">
          ${renderRotationBlock('Leveling', build.rotations.leveling)}
          ${renderRotationBlock('Dungeon', build.rotations.dungeon)}
          ${renderRotationBlock('Raid / Endgame', build.rotations.raid)}
        </div>
      </div>
      <div class="bis-panel">
        <div class="guide-section-heading"><span>Gear Planner</span><h4>Best in Slot Ziele</h4></div>
        <div class="bis-list">${build.bestInSlot.map((item) => `<span>${escapeHtml(item)}</span>`).join('')}</div>
      </div>
      <div class="spec-guides">
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
  return `<section><h5>${escapeHtml(title)}</h5><ol>${items.map((item) => `<li>${escapeHtml(item)}</li>`).join('')}</ol></section>`;
}

function renderClassList(title, items) {
  return `<section><h4>${escapeHtml(title)}</h4><ul>${items.map((item) => `<li>${escapeHtml(item)}</li>`).join('')}</ul></section>`;
}


function renderDungeonGuides() {
  dungeonCount.textContent = dungeonGuides.length;
  dungeonRail.innerHTML = dungeonGuides
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

  const dungeon = dungeonGuides.find((item) => item.id === state.selectedDungeonId) ?? dungeonGuides[0];
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
        <a href="#profession-guides">Allgemeines</a>
        <a href="#profession-guides">Lehrer</a>
        <a href="#profession-guides">Einkaufszettel</a>
        <a href="#profession-guides">Rezepte</a>
        <a href="#profession-guides">1-300 Route</a>
      </nav>
      <section class="profession-intro">${profession.intro.map((item) => `<p>${escapeHtml(item)}</p>`).join('')}</section>
      <div class="profession-grid">
        <section class="profession-card trainers-card">
          <div class="guide-section-heading"><span>Trainer</span><h4>Alchemie-Lehrer nach Rang</h4></div>
          <div class="trainer-list">${profession.trainers.map(renderTrainerBlock).join('')}</div>
        </section>
        <section class="profession-card">
          <div class="guide-section-heading"><span>Materialien</span><h4>Einkaufszettel</h4></div>
          <p class="profession-note">Richtwerte für den kompletten Weg bis 300. Plane Reserven ein, wenn gelbe oder grüne Rezepte Pechsträhnen verursachen.</p>
          <div class="material-list">${profession.shoppingList.map((item) => `<span>${escapeHtml(item)}</span>`).join('')}</div>
        </section>
        <section class="profession-card">
          <div class="guide-section-heading"><span>Rezepte</span><h4>Vor dem Skillen besorgen</h4></div>
          <ul>${profession.recipes.map((item) => `<li>${escapeHtml(item)}</li>`).join('')}</ul>
        </section>
        <section class="profession-card">
          <div class="guide-section-heading"><span>Tipps</span><h4>Effizienter leveln</h4></div>
          <ul>${profession.tips.map((item) => `<li>${escapeHtml(item)}</li>`).join('')}</ul>
        </section>
      </div>
      <section class="profession-route">
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
  document.querySelector('#metric-guides').textContent = guideCards.length + dungeonGuides.length + professionGuides.length;
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
  }
  renderGuides();
});

premiumToggle.addEventListener('click', () => {
  state.showPremiumOnly = !state.showPremiumOnly;
  premiumToggle.classList.toggle('active', state.showPremiumOnly);
  renderGuides();
});

renderMetrics();
renderSelects();
renderExpansionSelector();
renderClassGuides();
renderDungeonGuides();
renderProfessionGuides();
renderGuides();
renderRoadmap();
renderPricing();
