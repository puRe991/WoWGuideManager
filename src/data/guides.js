export const expansions = [
  {
    key: 'classic',
    name: 'World of Warcraft Classic',
    status: 'Live',
    launchFocus: 'Startkatalog für Leveling, Dungeons, Gold, Klassen und Geheimnisse von Azeroth.',
    modules: ['1-60 Leveling-Routen', 'Dungeon-Flügel', 'Berufe 1-300', 'Pre-Raid BiS', 'Seltene Spawns']
  },
  {
    key: 'the-burning-crusade',
    name: 'The Burning Crusade',
    status: 'Startpaket',
    launchFocus: 'Outland-Hub mit Attunements, Heroics, Ruf-Fraktionen und Flugvorbereitung. Erster Guide-Satz ist live, Klassen- und Dungeon-Tiefenguides folgen als nächster Ausbauschritt.',
    modules: ['Attunement Tracker', 'Ruf-Guides', 'Heroic Keys', 'Raid Progression']
  },
  {
    key: 'wrath-of-the-lich-king',
    name: 'Wrath of the Lich King',
    status: 'Geplant',
    launchFocus: 'Northrend-Routen, Embleme, Dailies und Raid-Wings als aktivierbare Erweiterung.',
    modules: ['Northrend Leveling', 'Emblem Planner', 'Daily Rotation', 'Raid Lockouts']
  },
  {
    key: 'mists-of-pandaria',
    name: 'Mists of Pandaria',
    status: 'Geplant',
    launchFocus: 'Pandaria-Leveling, Ruf-Fraktionen, Dailies, Challenge Modes und Raid-Wings als aktivierbare Erweiterung.',
    modules: ['Pandaria Leveling', 'Ruf-Guides', 'Challenge Modes', 'Raid Lockouts']
  },
  {
    key: 'future',
    name: 'Weitere Erweiterungen',
    status: 'Template',
    launchFocus: 'Datenmodell ist vorbereitet, damit Content-Packs ohne App-Umbau ergänzt werden können.',
    modules: ['Content Pack Import', 'Versionierung', 'Abo-Freischaltung', 'Lokalisierung']
  }
];

export const categories = ['Leveling', 'Dungeons', 'Raids', 'Professions', 'Gold', 'PvP', 'Classes', 'Secrets', 'Reputation', 'Addons'];

export const guideCards = [
  {
    id: 'classic-1-60-horde',
    title: 'Horde 1-60 Sprint Route',
    category: 'Leveling',
    expansion: 'classic',
    audience: 'Fortgeschritten',
    minutes: 42,
    summary: 'Optimierte Kapitelstruktur für effizientes Leveln mit Hearthstone-Punkten, Klassenquests und Dungeon-Abstechern.',
    checklist: ['Startzone nach Klasse wählen', 'Hearthstone nur bei Routenwechsel setzen', 'Grüne Quests bündeln', 'Dungeon nur bei Questpaketen laufen'],
    premium: false,
    tags: ['Horde', 'Solo', 'Speed']
  },
  {
    id: 'classic-1-60-alliance',
    title: 'Allianz 1-60 Komfort Route',
    category: 'Leveling',
    expansion: 'classic',
    audience: 'Einsteiger',
    minutes: 38,
    summary: 'Einsteigerfreundliche Leveling-Route mit Sicherheitszonen, Händlerstopps und optionalen Grind-Fenstern.',
    checklist: ['Waffen-Upgrades vorplanen', 'Taschen früh kaufen', 'Gefährliche Elitequests markieren', 'Flugpunkte priorisieren'],
    premium: false,
    tags: ['Allianz', 'Einsteiger', 'Questing']
  },
  {
    id: 'classic-prebis-warrior',
    title: 'Krieger Pre-Raid BiS Matrix',
    category: 'Classes',
    expansion: 'classic',
    audience: 'Experte',
    minutes: 27,
    summary: 'Priorisierte Gear-Matrix für Tank und DPS mit Alternativen aus Dungeons, Quests, Berufen und Welt-Drops.',
    checklist: ['Hit-Cap Ziel definieren', 'Dungeon-Priorität nach Dropdichte sortieren', 'Rüstung vs. Bedrohung bewerten', 'Verzauberungen vorbereiten'],
    premium: true,
    tags: ['Warrior', 'BiS', 'Raid Prep']
  },
  {
    id: 'classic-gold-auction',
    title: 'Auktionshaus Goldsystem',
    category: 'Gold',
    expansion: 'classic',
    audience: 'Fortgeschritten',
    minutes: 31,
    summary: 'Wiederholbarer Workflow für Marktbeobachtung, Material-Flips und risikoarme Kapitalrotation.',
    checklist: ['Tagespreise dokumentieren', 'Materialien mit Raid-Nachfrage filtern', 'Unterbietungen vermeiden', 'Exit-Regeln setzen'],
    premium: true,
    tags: ['Gold', 'Auction House', 'Economy']
  },
  {
    id: 'classic-professions-300',
    title: 'Berufe 1-300 Materialplaner',
    category: 'Professions',
    expansion: 'classic',
    audience: 'Einsteiger',
    minutes: 35,
    summary: 'Planbare Einkaufslisten und Skillfenster für Kernberufe inklusive Sparvarianten und Farmalternativen.',
    checklist: ['Zielberuf auswählen', 'Materialfenster prüfen', 'Gelbe Rezepte vermeiden', 'Farmspots vormerken'],
    premium: false,
    tags: ['Crafting', 'Farming', 'Planner']
  },
  {
    id: 'classic-alchemy-1-300',
    title: 'Alchemie 1-300 Classic Guide',
    category: 'Professions',
    expansion: 'classic',
    audience: 'Einsteiger',
    minutes: 32,
    summary: 'Eigenständig formulierter Alchemie-Fahrplan mit Trainerstufen, Einkaufszettel, Händlerrezepten und Crafting-Schritten bis Skill 300.',
    checklist: ['Kräuter und Phiolen bündeln', 'Trainerstopps bei 50/125/225 einplanen', 'Händlerrezepte vor 265 und 285 kaufen', 'Gelbe Skillpunkte mit Reserve kalkulieren'],
    premium: false,
    tags: ['Alchemie', 'Berufe', 'Classic']
  },
  {
    id: 'classic-mining-1-300',
    title: 'Bergbau 1-300 Classic Guide',
    category: 'Professions',
    expansion: 'classic',
    audience: 'Einsteiger',
    minutes: 30,
    summary: 'Eigenständig formulierter Bergbau-Fahrplan mit Aderrouten nach Zone, Schmelzrezepten und Trainer-Infos bis Skill 300.',
    checklist: ['Adernrouten nach Zone bündeln', 'Bronze/Silber/Eisen/Gold/Mithril/Thorium rechtzeitig schmelzen', 'Zinnerz bei Bedarf am Auktionshaus vorziehen', 'Zweitberuf wie Kürschnerei kombinieren'],
    premium: false,
    tags: ['Bergbau', 'Berufe', 'Classic']
  },
  {
    id: 'classic-first-aid-1-300',
    title: 'Erste Hilfe 1-300 Classic Guide',
    category: 'Professions',
    expansion: 'classic',
    audience: 'Einsteiger',
    minutes: 18,
    summary: 'Eigenständig formulierter Erste-Hilfe-Fahrplan mit Verband-Rezepten, Trainer-Infos und der Triage-Questreihe bis Skill 300.',
    checklist: ['Stoff nach Rang bündeln (Leinen/Woll/Seiden/Magierweb/Runenstoff)', 'Handbuch für den Experten-Rang ab Skill 125 kaufen', 'Triage-Quest ab Skill 225 und Level 35 einplanen', 'Verbände für Notfälle zurücklegen statt alles zu verbrauchen'],
    premium: false,
    tags: ['Erste Hilfe', 'Berufe', 'Classic']
  },
  {
    id: 'classic-secrets-azeroth',
    title: 'Azeroth Geheimnisse & Rare Spawns',
    category: 'Secrets',
    expansion: 'classic',
    audience: 'Experte',
    minutes: 49,
    summary: 'Kuratierte Geheimnisdatenbank mit seltenen Gegnern, versteckten Händlern, Events und Sammler-Hinweisen.',
    checklist: ['Spawnfenster notieren', 'Route mit Flugpunkten verbinden', 'Loot-Tabelle bewerten', 'Screenshot-Beweise sammeln'],
    premium: true,
    tags: ['Secrets', 'Rares', 'Collectors']
  },
  {
    id: 'classic-dungeon-wingman',
    title: 'Dungeon Wingman Classic',
    category: 'Dungeons',
    expansion: 'classic',
    audience: 'Fortgeschritten',
    minutes: 44,
    summary: 'Instanzübersicht mit Questpaketen, Mindestleveln, Rollenhinweisen und Loot-Zielen pro Dungeon.',
    checklist: ['Quest-Hub vorbereiten', 'Summon-Ort festlegen', 'CC-Markierungen nutzen', 'Loot-Ziel pro Spieler klären'],
    premium: false,
    tags: ['Dungeons', 'Group', 'Loot']
  },
  {
    id: 'classic-raid-molten-core',
    title: 'Molten Core Raid Control',
    category: 'Raids',
    expansion: 'classic',
    audience: 'Experte',
    minutes: 55,
    summary: 'Raid-Planung mit Bossmechaniken, Consumable-Listen, Aufgabenverteilung und Progress-Checkpoints.',
    checklist: ['Hydraxianer-Status prüfen', 'Feuerresistenz verteilen', 'Consumables bestätigen', 'Loot-Regeln veröffentlichen'],
    premium: true,
    tags: ['Raid', 'Molten Core', 'Progress']
  },
  {
    id: 'tbc-leveling-60-70',
    title: 'Outland 60-70 Leveling Route',
    category: 'Leveling',
    expansion: 'the-burning-crusade',
    audience: 'Fortgeschritten',
    minutes: 40,
    summary: 'Zonenreihenfolge von Hellfire-Halbinsel bis Nethersturm mit Flugpunkt-Priorität, Questpaketen und Gruppenquest-Alternativen.',
    checklist: ['Hellfire-Halbinsel als Startzone bestätigen', 'Flugmeister-Route pro Zone freischalten', 'Gruppenquests markieren oder überspringen', 'Zonenwechsel bei ~63/66/68 einplanen'],
    premium: false,
    tags: ['Outland', 'Leveling', '60-70']
  },
  {
    id: 'tbc-attunement-tracker',
    title: 'Raid-Attunement Tracker',
    category: 'Raids',
    expansion: 'the-burning-crusade',
    audience: 'Fortgeschritten',
    minutes: 33,
    summary: 'Schritt-für-Schritt-Kette für Karazhan, Gruul, Magtheridon sowie SSC/TK Attunements inklusive Vorquests und Ruf-Voraussetzungen.',
    checklist: ['Karazhan-Schlüsselkette abschließen', 'Ruf-Voraussetzungen pro Raid prüfen', 'Vorquests in Shattrath bündeln', 'Gruppenfenster für Attunement-Runs planen'],
    premium: true,
    tags: ['Attunement', 'Karazhan', 'Raid Prep']
  },
  {
    id: 'tbc-heroic-keys',
    title: 'Heroic Key & Dungeon Guide',
    category: 'Dungeons',
    expansion: 'the-burning-crusade',
    audience: 'Fortgeschritten',
    minutes: 37,
    summary: 'Übersicht aller Heroic-Schlüssel, Ruf-Anforderungen und CC-lastigen Trashpulls für einen stabilen Einstieg in Heroics.',
    checklist: ['Schlüssel-Ruf pro Fraktion prüfen', 'CC-Zuweisung vor dem Pull klären', 'Bosse mit Enrage-Timer markieren', 'Loot-Ziel je Klasse abstimmen'],
    premium: false,
    tags: ['Heroic', 'Dungeons', 'CC']
  },
  {
    id: 'tbc-reputation-factions',
    title: 'Outland Ruf-Fahrplan',
    category: 'Reputation',
    expansion: 'the-burning-crusade',
    audience: 'Einsteiger',
    minutes: 29,
    summary: 'Priorisierte Ruf-Reihenfolge für Aldor/Scryer, Cenarion Expedition, Sha\'tari Schlittschuh und Ashtongue für Enchants und Rezepte.',
    checklist: ['Aldor oder Scryer vor Stufe 70 entscheiden', 'Tages- und Ruf-Quests bündeln', 'Belohnungen pro Ruf-Stufe abgleichen', 'Fraktions-Tabard für Dungeon-Grinding nutzen'],
    premium: false,
    tags: ['Ruf', 'Fraktionen', 'Outland']
  },
  {
    id: 'tbc-professions-outland',
    title: 'Outland Berufe 300-375',
    category: 'Professions',
    expansion: 'the-burning-crusade',
    audience: 'Fortgeschritten',
    minutes: 34,
    summary: 'Materialplaner und Skillfenster für den Sprung von 300 auf 375 inklusive Ruf-gebundener Rezepte und Farmrouten in Outland.',
    checklist: ['Trainer in Shattrath aufsuchen', 'Ruf-Rezepte vor 350 einplanen', 'Farmrouten nach Zone sortieren', 'Sparvariante mit Auktionshaus-Preisen vergleichen'],
    premium: false,
    tags: ['Berufe', 'Outland', 'Crafting']
  },
  {
    id: 'tbc-gold-jewelcrafting',
    title: 'Juwelenschleifen Gold-Flip',
    category: 'Gold',
    expansion: 'the-burning-crusade',
    audience: 'Fortgeschritten',
    minutes: 26,
    summary: 'Wiederholbarer Flip-Workflow für Erze, geschliffene Steine und Sockelschmuck mit Fokus auf Raid-Nachfrage nach BC-Release.',
    checklist: ['Erzpreise täglich prüfen', 'Seltene Schliffe priorisieren', 'Sockel-Nachfrage nach Klasse einschätzen', 'Exit-Preis vor dem Craften festlegen'],
    premium: true,
    tags: ['Gold', 'Jewelcrafting', 'Economy']
  },
  {
    id: 'tbc-arena-pvp-basics',
    title: 'Arena & Battleground Einstieg',
    category: 'PvP',
    expansion: 'the-burning-crusade',
    audience: 'Einsteiger',
    minutes: 31,
    summary: 'Grundlagen für 2v2/3v3-Arena-Teams, Ehre-Ausrüstung vor Season-Start und Battleground-Prioritäten für schnellen PvP-Einstieg.',
    checklist: ['Teamzusammensetzung nach Comp-Stärke wählen', 'Ehre-Gear vor Arena-Gear kaufen', 'Battleground-Marken für Übergangs-Sets nutzen', 'Season-Wechsel-Termine im Blick behalten'],
    premium: false,
    tags: ['PvP', 'Arena', 'Battleground']
  },
  {
    id: 'tbc-class-prebis',
    title: 'TBC Pre-Raid BiS Übersicht',
    category: 'Classes',
    expansion: 'the-burning-crusade',
    audience: 'Experte',
    minutes: 30,
    summary: 'Klassenübergreifende Pre-Raid-Gear-Ziele aus Heroics, Quests und Rufbelohnungen als Startpunkt vor dem ersten Karazhan-Run.',
    checklist: ['Heroic-Loot nach Rolle priorisieren', 'Rufbelohnungen mit Dungeon-Drops vergleichen', 'Verzauberungen und Sockel vor Raidstart planen', 'Lückenslots über Quests schließen'],
    premium: true,
    tags: ['BiS', 'Karazhan Prep', 'Classes']
  }
];
