import { professionGuides } from '../data/professionGuides.js';
import { farmingGuides } from '../data/farmingGuides.js';
import { guideCards } from '../data/guides.js';
import { getActiveClassGuides, getActiveDungeons, getActiveRaids, getActiveReputationGuides } from '../state.js';
import { escapeHtml, matches, renderTile, libraryDetailAccent } from './shared.js';

export function classTile(c) {
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

export function professionTile(p) {
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

export function reputationTile(r) {
  return {
    href: `#reputation-guides/${r.id}`,
    color: r.theme,
    subtitle: r.type,
    badge: '',
    title: r.name,
    summary: r.summary,
    tags: [r.side],
    meta: r.estimatedTime.split(',')[0],
    hay: `${r.name} ${r.summary} ${r.zone} ${r.type} ${r.side} ruf reputation fraktion`
  };
}

export function dungeonTile(d) {
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

export function raidTile(r) {
  return {
    href: `#raid-guides/${r.id}`,
    color: r.theme,
    subtitle: `${r.size} · ${r.tier}`,
    badge: '',
    title: r.name,
    summary: r.summary,
    tags: [r.zone, `${r.bosses.length} Bosse`],
    meta: r.levelReq,
    hay: `${r.name} ${r.summary} ${r.zone} raid ${r.bosses.map((b) => b.name).join(' ')}`
  };
}

export function farmingTile(item, group) {
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

export function libraryTile(g) {
  return {
    href: `#guides/${g.id}`,
    color: libraryDetailAccent(g),
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

export function buildAllGroups(state, term) {
  const activeDungeons = getActiveDungeons(state);
  const activeRaids = getActiveRaids(state);
  const groups = [
    { key: 'class-guides', label: 'Klassen', accent: '#ffb22e', tiles: getActiveClassGuides(state).map(classTile) },
    { key: 'profession-guides', label: 'Berufe', accent: '#75d15f', tiles: professionGuides.map(professionTile) },
    { key: 'farming-guides', label: 'Farmen', accent: '#c9a86a', tiles: farmingGuides.flatMap((group) => group.items.map((item) => farmingTile(item, group))) },
    { key: 'dungeon-guides', label: 'Dungeons', accent: '#ff8a4c', tiles: activeDungeons.map(dungeonTile) },
    { key: 'raid-guides', label: 'Raids', accent: '#ff6b6b', tiles: activeRaids.map(raidTile) },
    { key: 'reputation-guides', label: 'Ruf', accent: '#7bb6ff', tiles: getActiveReputationGuides(state).map(reputationTile) },
    { key: 'guides', label: 'Bibliothek', accent: '#7bb6ff', tiles: guideCards.map(libraryTile) }
  ];
  return groups
    .map((group) => ({ ...group, tiles: group.tiles.filter((tile) => matches(tile.hay, term)) }))
    .filter((group) => group.tiles.length > 0);
}

export function renderGroupBlock(group) {
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
