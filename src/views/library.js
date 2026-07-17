import { categories, guideCards } from '../data/guides.js';
import { assetManifest } from '../data/assetManifest.js';
import { filterGuides } from '../lib/filterGuides.js';
import { expansionOptions } from '../render/sidebar.js';
import { escapeHtml, rankList, plainList, renderAssetImage, renderFilterBar, renderTile, backLink, libraryDetailAccent } from '../render/shared.js';
import { libraryTile } from '../render/tiles.js';

export function renderLibraryListing(state) {
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

function renderZoneRoute(zones) {
  return `
    <section class="section-card zone-route">
      <h4>Zonen-Route</h4>
      <ol class="zone-route-list">
        ${zones
          .map(
            (zone) => `
          <li class="zone-route-item">
            ${renderAssetImage(assetManifest.zones?.[zone.id], `${zone.name} Icon`, 'zone-icon')}
            <div class="zone-route-main">
              <div class="zone-route-top"><strong>${escapeHtml(zone.name)}</strong><span class="zone-level-range">Level ${escapeHtml(zone.levelRange)}</span></div>
              <p>${escapeHtml(zone.note)}</p>
            </div>
          </li>`
          )
          .join('')}
      </ol>
    </section>`;
}

function renderFactionGrid(factions) {
  return `
    <section class="section-card faction-grid-section">
      <h4>Fraktionen</h4>
      <div class="faction-grid">
        ${factions
          .map(
            (f) => `
          <article class="faction-card">
            <div class="faction-card-top">
              <span class="faction-glyph">${escapeHtml(f.glyph)}</span>
              <div class="faction-card-title"><strong>${escapeHtml(f.name)}</strong><span class="faction-region">${escapeHtml(f.region)}</span></div>
            </div>
            <p>${escapeHtml(f.reward)}</p>
            <div class="faction-bar-track"><div class="faction-bar-fill" style="width: ${escapeHtml(f.bar)}"></div></div>
            <span class="faction-standing">Ziel: ${escapeHtml(f.standing)}</span>
          </article>`
          )
          .join('')}
      </div>
    </section>`;
}

function renderMedalGrid(medals) {
  return `
    <section class="section-card medal-grid-section">
      <h4>Medaillen</h4>
      <div class="medal-grid">
        ${medals
          .map(
            (m) => `
          <article class="medal-card" style="--medal-color: ${escapeHtml(m.color)}">
            <span class="medal-icon">${escapeHtml(m.icon)}</span>
            <h5>${escapeHtml(m.name)}</h5>
            <p>${escapeHtml(m.desc)}</p>
          </article>`
          )
          .join('')}
      </div>
    </section>`;
}

function renderRewardList(rewards) {
  return `
    <section class="section-card">
      <h4>Belohnungen der Gold-Jäger</h4>
      ${plainList(rewards, '--ac')}
    </section>`;
}

export function renderLibraryDetail(id) {
  const guide = guideCards.find((item) => item.id === id);
  if (!guide) return null;
  const color = libraryDetailAccent(guide);

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
      ${guide.zones ? renderZoneRoute(guide.zones) : ''}
      ${guide.factions ? renderFactionGrid(guide.factions) : ''}
      ${guide.medals ? renderMedalGrid(guide.medals) : ''}
      ${guide.challengeRewards ? renderRewardList(guide.challengeRewards) : ''}
      <div class="hashtags">${guide.tags.map((tag) => `<span class="hashtag">#${escapeHtml(tag)}</span>`).join('')}</div>
    </article>`;
}
