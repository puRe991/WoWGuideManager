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
    status: 'Geplant',
    launchFocus: 'Outland-Hub mit Attunements, Heroics, Ruf-Fraktionen und Flugvorbereitung.',
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
  }
];
