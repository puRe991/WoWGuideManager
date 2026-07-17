import { categories, guideCards } from '../data/guides.js';
import { dungeonGuides } from '../data/dungeonGuides.js';
import { raidGuides } from '../data/raidGuides.js';
import { farmingGuides } from '../data/farmingGuides.js';
import { reputationGuides } from '../data/reputationGuides.js';
import { classGuides } from '../data/classGuides.js';
import { professionGuides } from '../data/professionGuides.js';
import { buildAllGroups, renderGroupBlock } from '../render/tiles.js';
import { renderNoResults } from '../render/shared.js';

export function renderStart(state) {
  const totalDungeons = Object.values(dungeonGuides).reduce((sum, list) => sum + list.length, 0);
  const totalRaids = Object.values(raidGuides).reduce((sum, list) => sum + list.length, 0);
  const totalFarmingItems = farmingGuides.reduce((sum, group) => sum + group.items.length, 0);
  const totalReputationGuides = Object.values(reputationGuides).reduce((sum, list) => sum + list.length, 0);
  const totalClassGuides = Object.values(classGuides).reduce((sum, list) => sum + list.length, 0);
  const totalGuides = totalClassGuides + professionGuides.length + totalDungeons + totalRaids + totalFarmingItems + totalReputationGuides + guideCards.length;
  const groups = buildAllGroups(state, state.search);

  return `
    <section class="page">
      <div class="hero">
        <div class="hero-copy">
          <span class="eyebrow">Guide-Zentrale · Alle Erweiterungen</span>
          <h1>Jeder Guide. Seine eigene Seite.</h1>
          <p>Wähle einen Bereich, öffne den Guide – und lies ihn übersichtlich auf einer eigenen, aufgeräumten Detailseite. Genau wie ein WoW-Addon-Panel.</p>
        </div>
        <div class="metric-grid">
          <div><b>${totalGuides}</b><span>Guides</span></div>
          <div><b>${categories.length}</b><span>Kategorien</span></div>
          <div><b>${guideCards.filter((g) => g.premium).length}</b><span>Premium</span></div>
        </div>
      </div>
      ${groups.length > 0 ? groups.map(renderGroupBlock).join('') : renderNoResults()}
      <section class="portable">
        <span></span>
        <div>
          <h2>Portable Windows Build</h2>
          <p>Mit <code>npm run dist:win</code> wird ein portabler Ordner mit Windows-Startdateien ohne externe NPM-Abhängigkeiten erzeugt.</p>
        </div>
        <span></span>
      </section>
    </section>`;
}
