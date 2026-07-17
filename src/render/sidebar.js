import { expansions } from '../data/guides.js';
import { professionGuides } from '../data/professionGuides.js';
import { farmingGuides } from '../data/farmingGuides.js';
import { guideCards } from '../data/guides.js';
import { getActiveClassGuides, getActiveDungeons, getActiveRaids, getActiveReputationGuides } from '../state.js';
import { escapeHtml } from './shared.js';

export const expansionLabels = {
  classic: 'Classic',
  'the-burning-crusade': 'TBC',
  'wrath-of-the-lich-king': 'WotLK',
  'mists-of-pandaria': 'MoP',
  future: 'Zukunft'
};

export const expansionOptions = [
  ['all', 'Alle Erweiterungen'],
  ['classic', 'WoW Classic'],
  ['the-burning-crusade', 'The Burning Crusade'],
  ['wrath-of-the-lich-king', 'Wrath of the Lich King'],
  ['mists-of-pandaria', 'Mists of Pandaria'],
  ['future', 'Zukunft']
];

export const expansionArtwork = {
  classic: { theme: 'Azeroth', art: 'linear-gradient(135deg, rgba(255,178,46,.25), rgba(40,92,58,.35))' },
  'the-burning-crusade': { theme: 'Outland', art: 'linear-gradient(135deg, rgba(73,255,125,.22), rgba(81,41,112,.38))' },
  'wrath-of-the-lich-king': { theme: 'Northrend', art: 'linear-gradient(135deg, rgba(120,206,255,.28), rgba(31,54,104,.45))' },
  'mists-of-pandaria': { theme: 'Pandaria', art: 'linear-gradient(135deg, rgba(122,224,168,.28), rgba(20,90,74,.42))' },
  future: { theme: 'Content Packs', art: 'linear-gradient(135deg, rgba(211,181,255,.28), rgba(255,255,255,.08))' }
};

export function renderExpansionSwitch(refs, state, onExpansionSelect) {
  refs.expansionSwitch.innerHTML = expansions
    .map((item) => `<button type="button" class="expansion-pill ${item.key === state.selectedExpansion ? 'active' : ''}" data-expansion="${escapeHtml(item.key)}">${escapeHtml(expansionLabels[item.key] ?? item.name)}</button>`)
    .join('');

  refs.expansionSwitch.querySelectorAll('[data-expansion]').forEach((button) => {
    button.addEventListener('click', () => onExpansionSelect(button.dataset.expansion));
  });
}

export function renderPackageBox(refs, state) {
  const active = expansions.find((item) => item.key === state.selectedExpansion) ?? expansions[0];
  refs.packageBox.innerHTML = `
    <div class="package-status"><span class="package-dot"></span><small class="package-label">Aktives Paket</small></div>
    <strong>${escapeHtml(active.name)}</strong>
    <small class="package-desc">${escapeHtml(active.launchFocus)}</small>`;
}

export function renderNavCounts(state) {
  const totalDungeons = getActiveDungeons(state).length;
  const totalRaids = getActiveRaids(state).length;
  const totalFarmingItems = farmingGuides.reduce((sum, group) => sum + group.items.length, 0);
  document.querySelector('#nav-count-class-guides').textContent = String(getActiveClassGuides(state).length);
  document.querySelector('#nav-count-profession-guides').textContent = String(professionGuides.length);
  document.querySelector('#nav-count-farming-guides').textContent = String(totalFarmingItems);
  document.querySelector('#nav-count-dungeon-guides').textContent = String(totalDungeons);
  document.querySelector('#nav-count-raid-guides').textContent = String(totalRaids);
  document.querySelector('#nav-count-reputation-guides').textContent = String(getActiveReputationGuides(state).length);
  document.querySelector('#nav-count-guides').textContent = String(guideCards.length);
}

export function renderNavActive(refs, activeSection) {
  refs.siteNav.querySelectorAll('a[data-nav]').forEach((link) => {
    link.classList.toggle('active', link.dataset.nav === activeSection);
  });
}

export function showExpansionPicker(refs, state, visible, onExpansionSelect) {
  refs.expansionPickerMount.classList.toggle('hidden', !visible);
  if (!visible) return;
  refs.expansionPickerMount.innerHTML = `
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

  const heroGrid = refs.expansionPickerMount.querySelector('#expansion-hero-grid');
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
    button.addEventListener('click', () => onExpansionSelect(button.dataset.expansion));
  });

  const active = expansions.find((item) => item.key === state.selectedExpansion) ?? expansions[0];
  refs.expansionPickerMount.querySelector('#active-expansion-card').innerHTML = `
    <span class="eyebrow">Aktives Paket</span>
    <h3>${escapeHtml(active.name)}</h3>
    <p>${escapeHtml(active.launchFocus)}</p>
    <div class="module-list">${active.modules.map((module) => `<span>${escapeHtml(module)}</span>`).join('')}</div>`;

  refs.expansionPickerMount.querySelector('#roadmap-grid').innerHTML = expansions
    .map((item) => `
      <article class="roadmap-card">
        <span class="status ${escapeHtml(item.status.toLowerCase())}">${escapeHtml(item.status)}</span>
        <h3>${escapeHtml(item.name)}</h3>
        <p>${escapeHtml(item.launchFocus)}</p>
        <div class="module-list">${item.modules.map((module) => `<span>${escapeHtml(module)}</span>`).join('')}</div>
      </article>`)
    .join('');
}
