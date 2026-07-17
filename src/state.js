import { guideCards } from './data/guides.js';
import { classGuides } from './data/classGuides.js';
import { classBuildGuides } from './data/classBuildGuides.js';
import { specGuides } from './data/specGuides.js';
import { dungeonGuides } from './data/dungeonGuides.js';
import { raidGuides } from './data/raidGuides.js';
import { reputationGuides } from './data/reputationGuides.js';

export const NAV_SECTIONS = ['start', 'class-guides', 'profession-guides', 'farming-guides', 'dungeon-guides', 'raid-guides', 'reputation-guides', 'guides', 'subscriptions'];

export function createState() {
  return {
    search: '',
    category: 'Alle',
    expansion: 'classic',
    showPremiumOnly: false,
    selectedExpansion: 'classic'
  };
}

export function parseHash(hash) {
  const raw = hash.replace(/^#/, '');
  if (!raw) return ['start', null];
  const slashIndex = raw.indexOf('/');
  if (slashIndex === -1) return [raw, null];
  return [raw.slice(0, slashIndex), decodeURIComponent(raw.slice(slashIndex + 1))];
}

export function getActiveClassGuides(state) {
  return classGuides[state.selectedExpansion] ?? [];
}

export function getActiveClassBuildGuides(state) {
  return classBuildGuides[state.selectedExpansion] ?? {};
}

export function getActiveSpecGuides(state) {
  return specGuides[state.selectedExpansion] ?? {};
}

export function getActiveDungeons(state) {
  return dungeonGuides[state.selectedExpansion] ?? [];
}

export function getActiveRaids(state) {
  return raidGuides[state.selectedExpansion] ?? [];
}

export function getActiveReputationGuides(state) {
  return reputationGuides[state.selectedExpansion] ?? [];
}

export function isMopContent(state, section, id) {
  if (section === 'dungeon-guides' || section === 'raid-guides') return state.selectedExpansion === 'mists-of-pandaria';
  if (section === 'guides') {
    if (id) return guideCards.find((item) => item.id === id)?.expansion === 'mists-of-pandaria';
    return state.expansion === 'mists-of-pandaria';
  }
  return false;
}
