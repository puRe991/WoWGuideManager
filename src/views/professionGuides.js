import { professionGuides } from '../data/professionGuides.js';
import { assetManifest } from '../data/assetManifest.js';
import { escapeHtml, matches, scopeNote, renderAssetImage, renderFilterBar, renderTile, renderNoResults, backLink } from '../render/shared.js';
import { professionTile } from '../render/tiles.js';

export function renderProfessionGuidesListing(state) {
  const tiles = professionGuides.map(professionTile).filter((tile) => matches(tile.hay, state.search));
  return `
    <section class="page">
      ${renderFilterBar('profession-guides')}
      <div class="hero"><div class="hero-copy"><span class="eyebrow">Classic Berufe</span><h1>Alchemie 1-300 mit eigenständig formuliertem Guide.</h1><p>Icon, Trainerübersicht, Einkaufszettel, Rezeptquellen und Schritt-für-Schritt-Skillplan.</p>${scopeNote(state, 'Diese Berufs-Detailguides sind aktuell nur für WoW Classic verfügbar. Weitere Erweiterungen folgen.')}</div></div>
      ${tiles.length > 0 ? `<div class="tile-grid">${tiles.map(renderTile).join('')}</div>` : renderNoResults()}
    </section>`;
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

export function renderProfessionDetail(id) {
  const profession = professionGuides.find((item) => item.id === id);
  if (!profession) return null;

  return `
    <article class="page narrow detail-page">
      ${backLink('#profession-guides')}
      <div class="crumb">Übersicht · Berufe · ${escapeHtml(profession.name)}</div>
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
            <div class="guide-section-heading"><span>Trainer</span><h4>${escapeHtml(profession.name)}-Lehrer nach Rang</h4></div>
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
      </article>
    </article>`;
}
