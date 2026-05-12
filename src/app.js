import { categories, expansions, guideCards } from './data/guides.js';
import { classGuides } from './data/classGuides.js';
import { classBuildGuides } from './data/classBuildGuides.js';
import { specGuides } from './data/specGuides.js';
import { dungeonGuides } from './data/dungeonGuides.js';
import { assetManifest } from './data/assetManifest.js';
import { subscriptionTiers } from './data/subscriptions.js';
import { filterGuides } from './lib/filterGuides.js';

const state = {
  search: '',
  category: 'Alle',
  expansion: 'all',
  showPremiumOnly: false,
  selectedExpansion: '',
  selectedClassId: 'warrior',
  selectedDungeonId: 'blackrock-depths'
};

const appShell = document.querySelector('#app-shell');
const startupOverlay = document.querySelector('#startup-version-overlay');
const startupVersionGrid = document.querySelector('#startup-version-grid');
const startupSelectedName = document.querySelector('#startup-selected-name');
const startupContinue = document.querySelector('#startup-continue');
const expansionHeroGrid = document.querySelector('#expansion-hero-grid');
const activeExpansionName = document.querySelector('#active-expansion-name');
const activeExpansionFocus = document.querySelector('#active-expansion-focus');
const activeExpansionModules = document.querySelector('#active-expansion-modules');
const classTabs = document.querySelector('#class-tabs');
const classDetail = document.querySelector('#class-detail');
const dungeonRail = document.querySelector('#dungeon-rail');
const dungeonDetail = document.querySelector('#dungeon-detail');
const dungeonCount = document.querySelector('#dungeon-count');
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

function selectExpansion(key) {
  state.selectedExpansion = key;
  state.expansion = key;
  expansionSelect.value = key;
  renderStartupVersionPicker();
  renderExpansionSelector();
  renderGuides();
}

function finishStartupSelection() {
  if (!state.selectedExpansion) {
    return;
  }

  startupOverlay.classList.add('hidden');
  appShell.classList.remove('startup-hidden');
  document.body.classList.remove('startup-active');
}

function renderStartupVersionPicker() {
  startupVersionGrid.innerHTML = expansions
    .map((item) => {
      const art = getExpansionArtwork(item.key);
      const isActive = state.selectedExpansion === item.key;
      return `
        <button class="startup-version-option ${isActive ? 'active' : ''}" data-start-expansion="${escapeHtml(item.key)}" style="--tile-art: ${escapeHtml(art.art)}">
          <span>${escapeHtml(item.status)}</span>
          <strong>${escapeHtml(item.name)}</strong>
          <small>${escapeHtml(item.launchFocus)}</small>
        </button>`;
    })
    .join('');

  startupVersionGrid.querySelectorAll('[data-start-expansion]').forEach((button) => {
    button.addEventListener('click', () => selectExpansion(button.dataset.startExpansion));
  });

  const selected = expansions.find((item) => item.key === state.selectedExpansion);
  startupSelectedName.textContent = selected ? `${selected.name} ist ausgewählt` : 'Noch keine Version ausgewählt';
  startupContinue.disabled = !selected;
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
      selectExpansion(button.dataset.expansion);
    });
  });

  const active = expansions.find((item) => item.key === state.selectedExpansion);
  activeExpansionName.textContent = active?.name ?? 'Bitte zuerst WoW-Version auswählen';
  activeExpansionFocus.textContent = active?.launchFocus ?? 'Wähle beim Start eine Ära, damit Guides und Filter auf deine gewünschte WoW-Version ausgerichtet werden.';
  activeExpansionModules.innerHTML = (active?.modules ?? ['Startauswahl erforderlich']).map((module) => `<span>${escapeHtml(module)}</span>`).join('');
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
      <div class="class-portrait">${renderAssetImage(assetManifest.classes[guide.id], guide.name, 'class-portrait-image')}</div>
      <div class="class-copy">
        <div class="card-meta"><span>${escapeHtml(guide.levelingSpec)}</span><span>${escapeHtml(guide.difficulty)}</span></div>
        <h3>${escapeHtml(guide.name)} Classic Master Guide</h3>
        <p>${escapeHtml(guide.summary)}</p>
        <div class="class-pill-row">${guide.roles.map((role) => `<span>${escapeHtml(role)}</span>`).join('')}</div>
      </div>
      <div class="class-columns">
        ${renderClassList('Basis-Rotation', guide.rotation)}
        ${renderClassList('Stat-Priorität', guide.statPriority)}
        ${renderClassList('Talente', guide.talents)}
        ${renderClassList('Berufe', guide.professions)}
        ${renderClassList('Power-Tipps', guide.powerTips)}
      </div>
      <div class="rotation-lab">
        <h4>Rotation Guide nach Content</h4>
        <div class="rotation-grid">
          ${renderRotationBlock('Leveling', build.rotations.leveling)}
          ${renderRotationBlock('Dungeon', build.rotations.dungeon)}
          ${renderRotationBlock('Raid / Endgame', build.rotations.raid)}
        </div>
      </div>
      <div class="bis-panel">
        <h4>Best in Slot Ziele</h4>
        <div class="bis-list">${build.bestInSlot.map((item) => `<span>${escapeHtml(item)}</span>`).join('')}</div>
      </div>
      <div class="spec-guides">
        <h4>Spec Guides</h4>
        <div class="spec-grid">${specs.map(renderSpecGuide).join('')}</div>
      </div>
    </article>`;
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

function renderMetrics() {
  document.querySelector('#metric-guides').textContent = guideCards.length + dungeonGuides.length;
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

startupContinue.addEventListener('click', finishStartupSelection);

renderMetrics();
renderSelects();
renderStartupVersionPicker();
renderExpansionSelector();
renderClassGuides();
renderDungeonGuides();
renderGuides();
renderRoadmap();
renderPricing();
