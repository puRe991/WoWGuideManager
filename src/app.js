import { categories, expansions, guideCards } from './data/guides.js';
import { subscriptionTiers } from './data/subscriptions.js';
import { filterGuides } from './lib/filterGuides.js';

const state = {
  search: '',
  category: 'Alle',
  expansion: 'classic',
  showPremiumOnly: false
};

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

function escapeHtml(value) {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');
}

function renderMetrics() {
  document.querySelector('#metric-guides').textContent = guideCards.length;
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
            ${guide.premium ? '<span class="premium">💎 Premium</span>' : '<span class="free">Free</span>'}
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
  renderGuides();
});

premiumToggle.addEventListener('click', () => {
  state.showPremiumOnly = !state.showPremiumOnly;
  premiumToggle.classList.toggle('active', state.showPremiumOnly);
  renderGuides();
});

renderMetrics();
renderSelects();
renderGuides();
renderRoadmap();
renderPricing();
