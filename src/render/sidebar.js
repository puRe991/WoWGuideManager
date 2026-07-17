import { expansions } from '../data/guides.js';
import { professionGuides } from '../data/professionGuides.js';
import { farmingGuides } from '../data/farmingGuides.js';
import { guideCards } from '../data/guides.js';
import { getActiveClassGuides, getActiveDungeons, getActiveRaids, getActiveReputationGuides } from '../state.js';
import { escapeHtml } from './shared.js';

export const expansionLabels = {
  classic: 'Classic',
  'season-of-discovery': 'SoD',
  hardcore: 'Hardcore',
  'season-of-mastery': 'SoM',
  'classic-anniversary': 'Anniversary',
  'mop-remix': 'Remix',
  plunderstorm: 'Plunderstorm',
  'the-burning-crusade': 'TBC',
  'wrath-of-the-lich-king': 'WotLK',
  cataclysm: 'Cata',
  'mists-of-pandaria': 'MoP',
  'warlords-of-draenor': 'WoD',
  legion: 'Legion',
  'battle-for-azeroth': 'BfA',
  shadowlands: 'SL',
  dragonflight: 'DF',
  'the-war-within': 'TWW',
  midnight: 'Midnight',
  future: 'Zukunft'
};

export const expansionOptions = [
  ['all', 'Alle Erweiterungen'],
  ['classic', 'WoW Classic'],
  ['season-of-discovery', 'Season of Discovery'],
  ['hardcore', 'Hardcore'],
  ['season-of-mastery', 'Season of Mastery'],
  ['classic-anniversary', 'Classic Anniversary'],
  ['mop-remix', 'Pandaria Remix'],
  ['plunderstorm', 'Plunderstorm'],
  ['the-burning-crusade', 'The Burning Crusade'],
  ['wrath-of-the-lich-king', 'Wrath of the Lich King'],
  ['cataclysm', 'Cataclysm'],
  ['mists-of-pandaria', 'Mists of Pandaria'],
  ['warlords-of-draenor', 'Warlords of Draenor'],
  ['legion', 'Legion'],
  ['battle-for-azeroth', 'Battle for Azeroth'],
  ['shadowlands', 'Shadowlands'],
  ['dragonflight', 'Dragonflight'],
  ['the-war-within', 'The War Within'],
  ['midnight', 'Midnight'],
  ['future', 'Zukunft']
];

export const expansionArtwork = {
  classic: { theme: 'Azeroth', art: 'linear-gradient(135deg, rgba(255,178,46,.25), rgba(40,92,58,.35))' },
  'season-of-discovery': { theme: 'Rune Discovery', art: 'linear-gradient(135deg, rgba(255,215,90,.26), rgba(90,60,20,.42))' },
  hardcore: { theme: 'Permadeath', art: 'linear-gradient(135deg, rgba(255,70,70,.28), rgba(40,10,10,.42))' },
  'season-of-mastery': { theme: 'Mastery', art: 'linear-gradient(135deg, rgba(255,190,90,.26), rgba(80,50,10,.42))' },
  'classic-anniversary': { theme: 'Fresh Start', art: 'linear-gradient(135deg, rgba(255,220,140,.26), rgba(60,92,58,.4))' },
  'mop-remix': { theme: 'Cloud Serpent', art: 'linear-gradient(135deg, rgba(150,220,255,.26), rgba(20,70,90,.42))' },
  plunderstorm: { theme: 'Plunder Isle', art: 'linear-gradient(135deg, rgba(255,150,60,.28), rgba(60,30,10,.42))' },
  'the-burning-crusade': { theme: 'Outland', art: 'linear-gradient(135deg, rgba(73,255,125,.22), rgba(81,41,112,.38))' },
  'wrath-of-the-lich-king': { theme: 'Northrend', art: 'linear-gradient(135deg, rgba(120,206,255,.28), rgba(31,54,104,.45))' },
  cataclysm: { theme: 'Deepholm', art: 'linear-gradient(135deg, rgba(255,120,64,.28), rgba(92,32,20,.42))' },
  'mists-of-pandaria': { theme: 'Pandaria', art: 'linear-gradient(135deg, rgba(122,224,168,.28), rgba(20,90,74,.42))' },
  'warlords-of-draenor': { theme: 'Draenor', art: 'linear-gradient(135deg, rgba(198,140,90,.28), rgba(60,38,20,.42))' },
  legion: { theme: 'Argus', art: 'linear-gradient(135deg, rgba(120,255,180,.26), rgba(20,80,60,.42))' },
  'battle-for-azeroth': { theme: 'Kul Tiras', art: 'linear-gradient(135deg, rgba(90,150,255,.26), rgba(20,40,90,.42))' },
  shadowlands: { theme: 'Bastion', art: 'linear-gradient(135deg, rgba(200,180,255,.26), rgba(40,20,60,.42))' },
  dragonflight: { theme: 'Dragon Isles', art: 'linear-gradient(135deg, rgba(90,220,255,.26), rgba(20,60,90,.42))' },
  'the-war-within': { theme: 'Khaz Algar', art: 'linear-gradient(135deg, rgba(180,90,220,.26), rgba(40,20,60,.42))' },
  midnight: { theme: 'Quel’Thalas', art: 'linear-gradient(135deg, rgba(255,90,140,.26), rgba(60,20,40,.42))' },
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
