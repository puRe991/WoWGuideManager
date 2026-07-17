import { createState, parseHash, NAV_SECTIONS, isMopContent, getActiveDungeons, getActiveRaids, getActiveReputationGuides, getActiveClassGuides } from './state.js';
import { renderExpansionSwitch, renderPackageBox, renderNavCounts, renderNavActive, showExpansionPicker } from './render/sidebar.js';
import { renderStart } from './views/start.js';
import { renderClassGuidesListing, renderClassDetail } from './views/classGuides.js';
import { renderProfessionGuidesListing, renderProfessionDetail } from './views/professionGuides.js';
import { renderFarmingGuidesListing, renderFarmingDetail } from './views/farmingGuides.js';
import { renderDungeonGuidesListing, renderDungeonDetail } from './views/dungeonGuides.js';
import { renderRaidGuidesListing, renderRaidDetail } from './views/raidGuides.js';
import { renderReputationGuidesListing, renderReputationDetail } from './views/reputationGuides.js';
import { renderLibraryListing, renderLibraryDetail } from './views/library.js';
import { renderPricing } from './views/pricing.js';

const state = createState();

const refs = {
  sidebar: document.querySelector('#sidebar'),
  sidebarToggle: document.querySelector('#sidebar-toggle'),
  searchInput: /** @type {HTMLInputElement} */ (document.querySelector('#search')),
  expansionSwitch: document.querySelector('#expansion-switch'),
  siteNav: document.querySelector('#site-nav'),
  packageBox: document.querySelector('#package-box'),
  expansionPickerMount: document.querySelector('#expansion-picker'),
  viewContent: document.querySelector('#view-content'),
  viewRoot: document.querySelector('#view-root')
};

function redirectIfDungeonMissing() {
  const [section, id] = parseHash(window.location.hash);
  if (section === 'dungeon-guides' && id && !getActiveDungeons(state).some((dungeon) => dungeon.id === id)) {
    window.location.hash = '#dungeon-guides';
    return;
  }
  if (section === 'raid-guides' && id && !getActiveRaids(state).some((raid) => raid.id === id)) {
    window.location.hash = '#raid-guides';
    return;
  }
  if (section === 'reputation-guides' && id && !getActiveReputationGuides(state).some((rep) => rep.id === id)) {
    window.location.hash = '#reputation-guides';
    return;
  }
  if (section === 'class-guides' && id && !getActiveClassGuides(state).some((guide) => guide.id === id)) {
    window.location.hash = '#class-guides';
  }
}

function selectExpansion(key) {
  state.selectedExpansion = key;
  state.expansion = key;
  state.expansionConfirmed = true;
  redirectIfDungeonMissing();
  render();
}

function wireLibraryFilters() {
  const categorySelect = refs.viewContent.querySelector('#category-select');
  const expansionSelect = refs.viewContent.querySelector('#expansion-select');
  const premiumToggle = refs.viewContent.querySelector('#premium-toggle');
  if (!categorySelect) return;

  categorySelect.addEventListener('change', (event) => {
    state.category = /** @type {HTMLSelectElement} */ (event.target).value;
    renderView();
  });
  expansionSelect.addEventListener('change', (event) => {
    state.expansion = /** @type {HTMLSelectElement} */ (event.target).value;
    if (state.expansion !== 'all') {
      state.selectedExpansion = state.expansion;
      redirectIfDungeonMissing();
      renderExpansionSwitch(refs, state, selectExpansion);
      renderPackageBox(refs, state);
      renderNavCounts(state);
    }
    renderView();
  });
  premiumToggle.addEventListener('click', () => {
    state.showPremiumOnly = !state.showPremiumOnly;
    renderView();
  });
}

function wireFilterBarClear() {
  const clearButton = refs.viewContent.querySelector('[data-clear-filter]');
  if (!clearButton) return;
  clearButton.addEventListener('click', () => {
    state.search = '';
    refs.searchInput.value = '';
    window.location.hash = '#start';
  });
}

function renderView() {
  const [section, id] = parseHash(window.location.hash);
  document.body.classList.toggle('pre-launch', !state.expansionConfirmed);
  showExpansionPicker(refs, state, !state.expansionConfirmed || section === 'start', selectExpansion);

  if (!state.expansionConfirmed) {
    refs.viewContent.innerHTML = '';
    return;
  }

  refs.viewContent.classList.toggle('mop-content', isMopContent(state, section, id));

  let html = '';
  if (section === 'start') {
    html = renderStart(state);
  } else if (section === 'class-guides') {
    html = id ? renderClassDetail(state, id) : renderClassGuidesListing(state);
  } else if (section === 'profession-guides') {
    html = id ? renderProfessionDetail(id) : renderProfessionGuidesListing(state);
  } else if (section === 'farming-guides') {
    html = id ? renderFarmingDetail(id) : renderFarmingGuidesListing(state);
  } else if (section === 'dungeon-guides') {
    html = id ? renderDungeonDetail(state, id) : renderDungeonGuidesListing(state);
  } else if (section === 'raid-guides') {
    html = id ? renderRaidDetail(state, id) : renderRaidGuidesListing(state);
  } else if (section === 'reputation-guides') {
    html = id ? renderReputationDetail(state, id) : renderReputationGuidesListing(state);
  } else if (section === 'guides') {
    html = id ? renderLibraryDetail(id) : renderLibraryListing(state);
  } else if (section === 'subscriptions') {
    html = renderPricing();
  }

  if (!html) {
    window.location.hash = `#${NAV_SECTIONS.includes(section) ? section : 'start'}`;
    return;
  }

  refs.viewContent.innerHTML = html;
  renderNavActive(refs, NAV_SECTIONS.includes(section) ? section : 'start');
  wireLibraryFilters();
  wireFilterBarClear();
  refs.viewRoot.scrollTop = 0;
  window.scrollTo(0, 0);
}

function render() {
  document.documentElement.dataset.activeExpansion = state.selectedExpansion;
  renderExpansionSwitch(refs, state, selectExpansion);
  renderPackageBox(refs, state);
  renderNavCounts(state);
  renderView();
}

refs.searchInput.addEventListener('input', (event) => {
  state.search = /** @type {HTMLInputElement} */ (event.target).value;
  renderView();
});

refs.sidebarToggle.addEventListener('click', () => {
  refs.sidebar.classList.toggle('sidebar-open');
});

refs.siteNav.querySelectorAll('a[data-nav]').forEach((link) => {
  link.addEventListener('click', () => {
    refs.sidebar.classList.remove('sidebar-open');
  });
});

document.querySelector('#logo-link').addEventListener('click', () => {
  state.search = '';
  refs.searchInput.value = '';
  refs.sidebar.classList.remove('sidebar-open');
});

window.addEventListener('hashchange', () => {
  renderView();
});

function showFatalError(error) {
  console.error('WoW Guide Manager failed to start:', error);
  if (!refs.viewRoot) return;
  const banner = document.createElement('div');
  banner.className = 'fatal-error-banner';
  banner.setAttribute('role', 'alert');
  banner.innerHTML = `
    <strong>Die App konnte nicht vollständig geladen werden.</strong>
    <p>Bitte lade die Seite neu. Wenn der Fehler bestehen bleibt, melde ihn mit den Details aus der Konsole.</p>`;
  refs.viewRoot.prepend(banner);
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
