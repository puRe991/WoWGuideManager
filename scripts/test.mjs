import assert from 'node:assert/strict';
import { existsSync, readFileSync } from 'node:fs';
import { guideCards } from '../src/data/guides.js';
import { classGuides } from '../src/data/classGuides.js';
import { classBuildGuides } from '../src/data/classBuildGuides.js';
import { specGuides } from '../src/data/specGuides.js';
import { dungeonGuides } from '../src/data/dungeonGuides.js';
import { professionGuides } from '../src/data/professionGuides.js';
import { reputationGuides } from '../src/data/reputationGuides.js';
import { assetManifest } from '../src/data/assetManifest.js';
import { filterGuides } from '../src/lib/filterGuides.js';

const auction = filterGuides(guideCards, {
  search: 'auction',
  category: 'Alle',
  expansion: 'all',
  showPremiumOnly: false
});
assert.deepEqual(auction.map((guide) => guide.id), ['classic-gold-auction']);

const premiumRaid = filterGuides(guideCards, {
  search: '',
  category: 'Raids',
  expansion: 'classic',
  showPremiumOnly: true
});
assert.equal(premiumRaid.length, 7, 'Classic raid catalog should surface all seven classic raids as guide cards');
assert.ok(premiumRaid.every((guide) => guide.premium === true));

const classicRaidCards = guideCards.filter((guide) => guide.category === 'Raids' && guide.expansion === 'classic');
assert.equal(classicRaidCards.length, 7, 'Classic guide catalog should include a card for every Classic raid (Onyxia, MC, ZG, BWL, AQ20, AQ40, Naxxramas)');

assert.ok(guideCards.some((guide) => guide.category === 'PvP' && guide.expansion === 'classic'), 'Classic guide catalog should include a PvP guide card');
assert.ok(guideCards.some((guide) => guide.category === 'Reputation' && guide.expansion === 'classic'), 'Classic guide catalog should include a Reputation guide card');

assert.ok(existsSync('index.html'), 'index.html must exist');
const indexHtml = readFileSync('index.html', 'utf8');
assert.match(indexHtml, /expansion-picker/, 'home screen must include an expansion selector');
assert.match(indexHtml, /class-guides/, 'home screen must include class guide navigation');
assert.match(indexHtml, /dungeon-guides/, 'home screen must include the Classic dungeon atlas');
assert.match(indexHtml, /profession-guides/, 'home screen must include Classic profession guides');
assert.match(indexHtml, /reputation-guides/, 'home screen must include the Classic reputation almanac');
assert.ok(guideCards.length >= 8, 'MVP should include at least eight guide cards');

const tbcGuides = guideCards.filter((guide) => guide.expansion === 'the-burning-crusade');
assert.ok(tbcGuides.length >= 8, 'The Burning Crusade should ship a first guide pack with at least eight cards');
assert.ok(
  new Set(tbcGuides.map((guide) => guide.category)).size >= 6,
  'The Burning Crusade guide pack should span multiple categories, not just leveling'
);
assert.ok(
  tbcGuides.every((guide) => guide.checklist.length >= 4 && guide.summary.length > 0),
  'Every The Burning Crusade guide card should include a summary and a full checklist'
);
assert.equal(classGuides.classic.length, 9, 'Classic should include all nine original classes');

assert.ok(dungeonGuides.classic, 'dungeonGuides must expose a classic expansion key');
assert.ok(dungeonGuides['the-burning-crusade'], 'dungeonGuides must expose a the-burning-crusade expansion key');

const classicDungeons = dungeonGuides.classic;
assert.ok(classicDungeons.length >= 20, 'Classic dungeon atlas should include the main leveling and endgame dungeons');
assert.equal(classicDungeons.length, 20, 'Classic dungeon atlas should cover all 20 Classic dungeon entries including combined wing hubs');
assert.ok(classicDungeons.every((dungeon) => dungeon.route.length >= 5 && dungeon.bosses.length >= 4), 'Each Classic dungeon guide should include route steps and boss targets');

const tbcDungeons = dungeonGuides['the-burning-crusade'];
assert.equal(tbcDungeons.length, 16, 'The Burning Crusade dungeon atlas should cover all 16 TBC 5-player instances');
assert.ok(tbcDungeons.every((dungeon) => dungeon.route.length >= 5 && dungeon.bosses.length >= 2), 'Each TBC dungeon guide should include route steps and boss targets (TBC instances are smaller than Classic wing hubs)');
assert.ok(new Set(tbcDungeons.map((dungeon) => dungeon.id)).size === tbcDungeons.length, 'TBC dungeon ids must be unique');

const allDungeons = [...classicDungeons, ...tbcDungeons];
assert.ok(allDungeons.every((dungeon) => dungeon.loot.length >= 3 && dungeon.tips.length >= 3 && dungeon.quests.length >= 3 && dungeon.composition.length >= 3 && dungeon.time), 'Each dungeon guide should include loot, group tips, quests, composition and time planning');
assert.ok(allDungeons.every((dungeon) => assetManifest.dungeons[dungeon.id] && assetManifest.dungeonMaps[dungeon.id]), 'Each dungeon must reference icon and map asset slots');

assert.equal(professionGuides.length, 12, 'Classic profession guide pack should include Alchemy, Enchanting, Mining, First Aid, Cooking, Fishing, Engineering, Skinning, Blacksmithing, Leatherworking, Tailoring and Herbalism');
assert.equal(professionGuides[0].id, 'classic-alchemy', 'Alchemy guide should use a stable id');
assert.ok(professionGuides[0].shoppingList.length >= 15 && professionGuides[0].steps.length >= 12, 'Alchemy guide should include material planning and a full 1-300 route');
assert.ok(assetManifest.professions.alchemy?.startsWith('https://wow.zamimg.com/'), 'Alchemy profession must reference a verified hotlinked icon URL');

const enchantingGuide = professionGuides.find((profession) => profession.id === 'classic-enchanting');
assert.ok(enchantingGuide, 'Profession guide pack should include an Enchanting guide');
assert.ok(enchantingGuide.shoppingList.length >= 15 && enchantingGuide.steps.length >= 12, 'Enchanting guide should include material planning and a full 1-300 route');
assert.ok(assetManifest.professions.enchanting?.startsWith('https://wow.zamimg.com/'), 'Enchanting profession must reference a verified hotlinked icon URL');

const miningGuide = professionGuides.find((profession) => profession.id === 'classic-mining');
assert.ok(miningGuide, 'Profession guide pack should include a Mining guide');
assert.ok(miningGuide.shoppingList.length >= 5 && miningGuide.steps.length >= 5, 'Mining guide should include ore planning and a full 1-300 route');
assert.ok(assetManifest.professions.mining?.startsWith('https://wow.zamimg.com/'), 'Mining profession must reference a verified hotlinked icon URL');

const firstAidGuide = professionGuides.find((profession) => profession.id === 'classic-first-aid');
assert.ok(firstAidGuide, 'Profession guide pack should include a First Aid guide');
assert.ok(firstAidGuide.shoppingList.length >= 5 && firstAidGuide.steps.length >= 5, 'First Aid guide should include material planning and a full 1-300 route');
assert.ok(assetManifest.professions['first-aid']?.startsWith('https://wow.zamimg.com/'), 'First Aid profession must reference a verified hotlinked icon URL');

const cookingGuide = professionGuides.find((profession) => profession.id === 'classic-cooking');
assert.ok(cookingGuide, 'Profession guide pack should include a Cooking guide');
assert.ok(cookingGuide.shoppingList.length >= 5 && cookingGuide.steps.length >= 5, 'Cooking guide should include material planning and a full 1-300 route');
assert.ok(assetManifest.professions.cooking?.startsWith('https://wow.zamimg.com/'), 'Cooking profession must reference a verified hotlinked icon URL');

const fishingGuide = professionGuides.find((profession) => profession.id === 'classic-fishing');
assert.ok(fishingGuide, 'Profession guide pack should include a Fishing guide');
assert.ok(fishingGuide.shoppingList.length >= 3 && fishingGuide.steps.length >= 4, 'Fishing guide should include gear planning and a full 1-300 route');
assert.ok(assetManifest.professions.fishing?.startsWith('https://wow.zamimg.com/'), 'Fishing profession must reference a verified hotlinked icon URL');

const engineeringGuide = professionGuides.find((profession) => profession.id === 'classic-engineering');
assert.ok(engineeringGuide, 'Profession guide pack should include an Engineering guide');
assert.ok(engineeringGuide.shoppingList.length >= 15 && engineeringGuide.steps.length >= 12, 'Engineering guide should include material planning and a full 1-300 route');
assert.ok(assetManifest.professions.engineering?.startsWith('https://wow.zamimg.com/'), 'Engineering profession must reference a verified hotlinked icon URL');

const skinningGuide = professionGuides.find((profession) => profession.id === 'classic-skinning');
assert.ok(skinningGuide, 'Profession guide pack should include a Skinning guide');
assert.ok(skinningGuide.shoppingList.length >= 5 && skinningGuide.steps.length >= 4, 'Skinning guide should include material planning and a full 1-300 route');
assert.ok(assetManifest.professions.skinning?.startsWith('https://wow.zamimg.com/'), 'Skinning profession must reference a verified hotlinked icon URL');

const blacksmithingGuide = professionGuides.find((profession) => profession.id === 'classic-blacksmithing');
assert.ok(blacksmithingGuide, 'Profession guide pack should include a Blacksmithing guide');
assert.ok(blacksmithingGuide.shoppingList.length >= 15 && blacksmithingGuide.steps.length >= 12, 'Blacksmithing guide should include material planning and a full 1-300 route');
assert.ok(assetManifest.professions.blacksmithing?.startsWith('https://wow.zamimg.com/'), 'Blacksmithing profession must reference a verified hotlinked icon URL');

const leatherworkingGuide = professionGuides.find((profession) => profession.id === 'classic-leatherworking');
assert.ok(leatherworkingGuide, 'Profession guide pack should include a Leatherworking guide');
assert.ok(leatherworkingGuide.shoppingList.length >= 15 && leatherworkingGuide.steps.length >= 12, 'Leatherworking guide should include material planning and a full 1-300 route');
assert.ok(assetManifest.professions.leatherworking?.startsWith('https://wow.zamimg.com/'), 'Leatherworking profession must reference a verified hotlinked icon URL');

const tailoringGuide = professionGuides.find((profession) => profession.id === 'classic-tailoring');
assert.ok(tailoringGuide, 'Profession guide pack should include a Tailoring guide');
assert.ok(tailoringGuide.shoppingList.length >= 15 && tailoringGuide.steps.length >= 12, 'Tailoring guide should include material planning and a full 1-300 route');
assert.ok(assetManifest.professions.tailoring?.startsWith('https://wow.zamimg.com/'), 'Tailoring profession must reference a verified hotlinked icon URL');

const herbalismGuide = professionGuides.find((profession) => profession.id === 'classic-herbalism');
assert.ok(herbalismGuide, 'Profession guide pack should include a Herbalism guide');
assert.ok(herbalismGuide.shoppingList.length >= 5 && herbalismGuide.steps.length >= 4, 'Herbalism guide should include gathering planning and a full 1-300 route');
assert.ok(assetManifest.professions.herbalism?.startsWith('https://wow.zamimg.com/'), 'Herbalism profession must reference a verified hotlinked icon URL');

assert.ok(classGuides.classic.every((classGuide) => classGuide.rotation.length >= 5), 'Each class guide should include a detailed rotation checklist');
assert.ok(classGuides.classic.every((classGuide) => assetManifest.classes[classGuide.id]?.startsWith('https://wow.zamimg.com/')), 'Each class must reference a verified hotlinked icon URL');

assert.ok(classGuides['the-burning-crusade'], 'classGuides must expose a the-burning-crusade expansion key');
assert.ok(classGuides['wrath-of-the-lich-king'], 'classGuides must expose a wrath-of-the-lich-king expansion key');
assert.ok(classGuides['mists-of-pandaria'], 'classGuides must expose a mists-of-pandaria expansion key');

const tbcClassGuides = classGuides['the-burning-crusade'];
assert.equal(tbcClassGuides.length, 9, 'TBC should include all nine classes (no Death Knight yet)');
assert.ok(!tbcClassGuides.some((c) => c.id === 'death-knight'), 'TBC must not include the Death Knight, which launches in Wrath');
assert.ok(!tbcClassGuides.some((c) => c.id === 'monk'), 'TBC must not include the Monk, which launches in Mists of Pandaria');

const wrathClassGuides = classGuides['wrath-of-the-lich-king'];
assert.equal(wrathClassGuides.length, 10, 'Wrath should include all nine original classes plus the Death Knight');
assert.ok(wrathClassGuides.some((c) => c.id === 'death-knight'), 'Wrath class guide pack should include the Death Knight');
assert.ok(!wrathClassGuides.some((c) => c.id === 'monk'), 'Wrath must not include the Monk, which launches in Mists of Pandaria');

const mopClassGuidesList = classGuides['mists-of-pandaria'];
assert.equal(mopClassGuidesList.length, 11, 'Mists of Pandaria should include all ten prior classes plus the Monk');
assert.ok(mopClassGuidesList.some((c) => c.id === 'monk'), 'MoP class guide pack should include the Monk');

const allExpansionClassGuides = [...tbcClassGuides, ...wrathClassGuides, ...mopClassGuidesList];
assert.ok(
  allExpansionClassGuides.every((c) => c.rotation.length >= 5 && c.talents.length >= 2 && c.metaSpec && c.talentPlannerUrl?.startsWith('https://www.wowhead.com/')),
  'Every TBC/Wrath/MoP class guide should include a rotation, talents, the currently used meta spec and a Wowhead talent planner link'
);
assert.ok(
  allExpansionClassGuides.every((c) => assetManifest.classes[c.id]?.startsWith('https://wow.zamimg.com/')),
  'Every TBC/Wrath/MoP class must reference a verified hotlinked icon URL'
);

for (const expansionKey of ['the-burning-crusade', 'wrath-of-the-lich-king', 'mists-of-pandaria']) {
  const guides = classGuides[expansionKey];
  const builds = classBuildGuides[expansionKey];
  const specs = specGuides[expansionKey];
  assert.ok(builds, `classBuildGuides must expose a ${expansionKey} expansion key`);
  assert.ok(specs, `specGuides must expose a ${expansionKey} expansion key`);
  for (const guide of guides) {
    const build = builds[guide.id];
    assert.ok(build, `classBuildGuides.${expansionKey} is missing an entry for ${guide.id}`);
    assert.ok(
      build.rotations.leveling.length >= 3 && build.rotations.dungeon.length >= 3 && build.rotations.raid.length >= 3 && build.bestInSlot.length >= 3,
      `classBuildGuides.${expansionKey}.${guide.id} should cover leveling/dungeon/raid rotations and BiS targets`
    );
    const classSpecs = specs[guide.id];
    assert.ok(classSpecs && classSpecs.length >= 2, `specGuides.${expansionKey}.${guide.id} should include at least two spec guides`);
    for (const spec of classSpecs) {
      assert.ok(
        spec.rotation.length >= 4 && spec.statPriority.length >= 3 && spec.talents.length >= 2 && spec.gear.length >= 2 && spec.consumables.length >= 2,
        `${spec.id} should include a full rotation, stat priority, talents, gear and consumables`
      );
      assert.ok(assetManifest.specs[spec.id]?.startsWith('https://wow.zamimg.com/'), `${spec.id} must reference a verified hotlinked icon URL`);
    }
  }
}

assert.ok(reputationGuides.classic, 'reputationGuides must expose a classic expansion key');
assert.ok(reputationGuides['the-burning-crusade'], 'reputationGuides must expose a the-burning-crusade expansion key');
assert.ok(reputationGuides['wrath-of-the-lich-king'], 'reputationGuides must expose a wrath-of-the-lich-king expansion key');

const classicReputationGuides = reputationGuides.classic;
assert.ok(classicReputationGuides.length >= 12, 'Classic reputation almanac should cover at least twelve factions');
assert.ok(classicReputationGuides.some((rep) => rep.id === 'argent-dawn'), 'Reputation almanac should include Argent Dawn');
assert.ok(classicReputationGuides.some((rep) => rep.id === 'zandalar-tribe'), 'Reputation almanac should include the Zandalar Tribe');

const tbcReputationGuides = reputationGuides['the-burning-crusade'];
assert.ok(tbcReputationGuides.length >= 12, 'The Burning Crusade reputation almanac should cover at least twelve Outland factions');
assert.ok(tbcReputationGuides.some((rep) => rep.id === 'sha-tar'), 'TBC reputation almanac should include The Sha\'tar');
assert.ok(tbcReputationGuides.some((rep) => rep.id === 'aldor'), 'TBC reputation almanac should include The Aldor');
assert.ok(tbcReputationGuides.some((rep) => rep.id === 'scryers'), 'TBC reputation almanac should include The Scryers');
assert.ok(tbcReputationGuides.some((rep) => rep.id === 'netherwing'), 'TBC reputation almanac should include Netherwing');

const wrathReputationGuides = reputationGuides['wrath-of-the-lich-king'];
assert.ok(wrathReputationGuides.length >= 10, 'Wrath of the Lich King reputation almanac should cover at least ten Northrend factions');
assert.ok(wrathReputationGuides.some((rep) => rep.id === 'argent-crusade'), 'WotLK reputation almanac should include The Argent Crusade');
assert.ok(wrathReputationGuides.some((rep) => rep.id === 'knights-of-the-ebon-blade'), 'WotLK reputation almanac should include The Knights of the Ebon Blade');
assert.ok(wrathReputationGuides.some((rep) => rep.id === 'ashen-verdict'), 'WotLK reputation almanac should include The Ashen Verdict');
assert.ok(wrathReputationGuides.some((rep) => rep.id === 'sons-of-hodir'), 'WotLK reputation almanac should include The Sons of Hodir');
assert.ok(wrathReputationGuides.some((rep) => rep.id === 'the-kalu-ak'), "WotLK reputation almanac should include The Kalu'ak");

assert.ok(reputationGuides['mists-of-pandaria'], 'reputationGuides must expose a mists-of-pandaria expansion key');

const mopReputationGuides = reputationGuides['mists-of-pandaria'];
assert.ok(mopReputationGuides.length >= 8, 'Mists of Pandaria reputation almanac should cover at least eight Pandaria factions');
assert.ok(mopReputationGuides.some((rep) => rep.id === 'golden-lotus'), 'MoP reputation almanac should include The Golden Lotus');
assert.ok(mopReputationGuides.some((rep) => rep.id === 'shado-pan'), 'MoP reputation almanac should include Shado-Pan');
assert.ok(mopReputationGuides.some((rep) => rep.id === 'the-klaxxi'), 'MoP reputation almanac should include The Klaxxi');
assert.ok(mopReputationGuides.some((rep) => rep.id === 'order-of-the-cloud-serpent'), 'MoP reputation almanac should include the Order of the Cloud Serpent');

const allReputationGuides = [...classicReputationGuides, ...tbcReputationGuides, ...wrathReputationGuides, ...mopReputationGuides];
assert.ok(new Set(allReputationGuides.map((rep) => rep.id)).size === allReputationGuides.length, 'Reputation guide ids must be unique across expansions');
assert.ok(
  allReputationGuides.every((rep) => rep.howTo.length >= 2 && rep.grindTargets.length >= 1 && rep.keyQuests.length >= 1 && rep.tips.length >= 2),
  'Each reputation guide should explain how to gain rep, what to grind, key quests and tips'
);
assert.ok(
  allReputationGuides.every((rep) => rep.standings.length === 4 && rep.standings.every((standing) => standing.rewards.length >= 1)),
  'Each reputation guide should list Friendly/Honored/Revered/Exalted standings with rewards'
);

const buildScript = readFileSync('scripts/build.mjs', 'utf8');
assert.match(buildScript, /app\.bundle\.js/, 'build must emit a browser-safe bundle for file protocol usage');
assert.match(buildScript, /dungeonGuides\.js/, 'build must include dungeon guide data in the portable bundle');
assert.match(buildScript, /raidGuides\.js/, 'build must include raid guide data in the portable bundle');
assert.match(buildScript, /professionGuides\.js/, 'build must include profession guide data in the portable bundle');
assert.match(buildScript, /reputationGuides\.js/, 'build must include reputation guide data in the portable bundle');
assert.match(buildScript, /assetManifest\.js/, 'build must include real asset manifest data in the portable bundle');
assert.match(buildScript, /classBuildGuides\.js/, 'build must include advanced rotation and BiS data in the portable bundle');
assert.match(buildScript, /specGuides\.js/, 'build must include per-spec guide data in the portable bundle');
assert.match(buildScript, /createWindowsData/, 'portable build must export native Windows app data');
assert.match(buildScript, /Start-WoWGuideManager\.cmd/, 'portable build must launch the native Windows app shell');

const windowsShell = readFileSync('windows/WoWGuideManager.ps1', 'utf8');
assert.match(windowsShell, /PresentationFramework/, 'Windows shell must use native WPF assemblies');
assert.match(windowsShell, /Show-Class/, 'Windows shell must render class guides natively');
assert.match(windowsShell, /Show-Profession/, 'Windows shell must render profession guides natively');
assert.match(windowsShell, /GetNewClosure/, 'Windows shell event handlers must capture per-tab selection callbacks');

const windowsLauncher = readFileSync('windows/Start-WoWGuideManager.cmd', 'utf8');
assert.match(windowsLauncher, /-STA/, 'Windows launcher must start PowerShell in STA mode for WPF');

const handoffScript = readFileSync('scripts/package-handoff.mjs', 'utf8');
assert.match(handoffScript, /Git tracked files unavailable/, 'handoff packaging must work without git metadata');
assert.match(handoffScript, /listProjectFiles/, 'handoff packaging must fall back to a directory scan');

const setupBatch = readFileSync('setup-windows.bat', 'utf8');
assert.match(setupBatch, /:verify_node/, 'Windows setup must verify that node and npm are startable');
assert.match(setupBatch, /call npm --version/, 'Windows setup must call npm.cmd safely from batch files');
assert.match(setupBatch, /:install_portable_node/, 'Windows setup must fall back to a portable Node.js ZIP instead of MSI-only installation');
assert.match(setupBatch, /\.tools\\node/, 'Windows setup must add the portable Node.js folder to PATH');

const packageJson = JSON.parse(readFileSync('package.json', 'utf8'));
assert.ok(packageJson.scripts.lint, 'package.json must expose a lint script for CI');
assert.ok(existsSync('scripts/lint.mjs'), 'lint script must exist');
assert.ok(existsSync('.github/workflows/ci.yml'), 'CI workflow must exist so lint/test/build run on every push and PR');

console.log('All tests passed.');
