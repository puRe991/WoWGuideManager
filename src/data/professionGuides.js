export const professionGuides = [
  {
    id: 'classic-alchemy',
    name: 'Alchemie',
    icon: 'alchemy',
    expansion: 'classic',
    category: 'Professions',
    skillRange: '1-300',
    audience: 'Einsteiger',
    minutes: 32,
    theme: '#75d15f',
    summary:
      'Dieser Classic-Berufe-Guide zeigt dir einen geradlinigen Weg, Alchemie in Classic Era, Hardcore und Season of Discovery von 1 bis 300 zu steigern – mit Materialplanung, Trainerstopps und Rezept-Hinweisen.',
    intro: [
      'Alchemie ist ein Handwerksberuf, der Kräuter, Öle und weitere Reagenzien in Tränke, Elixiere, Fläschchen und Transmutationen verwandelt.',
      'Für fast alle Rezepte brauchst du passende Phiolen. Halte deshalb vor jedem Skillblock genügend Leere, Verbleite oder Kristallphiolen bereit.',
      'Kräuterkunde passt hervorragend als Zweitberuf, weil du viele Pflanzen selbst farmen kannst und nicht komplett vom Auktionshaus abhängig bist.',
      'Die Route ist bewusst auf einfache Trainerrezepte und wenige Händlerrezepte ausgelegt, damit du möglichst ohne Umwege bis 300 kommst.'
    ],
    trainers: [
      {
        rank: 'Lehrling',
        range: 'Alchemie 1-75',
        requirement: 'ab Charakterlevel 5',
        alliance: ['Vosur Brakthel in Ironforge', "Tel'Athir in Stormwind", 'Milla Fairancora in Darnassus', 'Alchimist Mallory im Wald von Elwynn', 'Cyndra Kindwhisper in Teldrassil'],
        horde: ['Whuut in Orgrimmar', 'Doktor Martin Felben in Undercity', 'Kray in Thunder Bluff', 'Carolai Anise in Tirisfal', "Miao'zan in Durotar"]
      },
      {
        rank: 'Geselle',
        range: 'Alchemie 75-150',
        requirement: 'ab Skill 50 und Level 10',
        alliance: ['Kylanna in Ashenvale', 'Sylvanna Forestmoon in Darnassus', 'Tally Berryfizz in Ironforge', 'Alchimist Narett in den Marschen von Dustwallow', 'Lilyssia Nightbreeze in Stormwind', 'Jaxin Chong in Booty Bay'],
        horde: ['Yelmak in Orgrimmar', 'Bena Winterhoof in Thunder Bluff', 'Doktor Marsh in Undercity', 'Serge Hinott im Vorgebirge von Hillsbrad', 'Jaxin Chong in Booty Bay']
      },
      {
        rank: 'Experte',
        range: 'Alchemie 150-225',
        requirement: 'ab Skill 125 und Level 20',
        alliance: ['Ainethil in Darnassus'],
        horde: ['Doktor Herbert Halsey in Undercity']
      },
      {
        rank: 'Fachmann',
        range: 'Alchemie 225-300',
        requirement: 'ab Skill 225 und Level 35',
        alliance: ['Kylanna Windwhisper in der Mondfederfeste, Feralas'],
        horde: ['Rogvar in Stonard, Sümpfe des Elends']
      }
    ],
    shoppingList: [
      '66 Friedensblume',
      '66 Silberblatt',
      '95 Wilddornrose',
      '30 Beulengras',
      '23 Maguskönigskraut',
      '51 Würgetang',
      '32 Lebenswurz',
      '32 Königsblut',
      '52 Golddorn',
      '5 Wildstahlblume',
      '76 Sonnengras',
      "30 Khadgars Schnurrbart",
      "21 Arthas' Tränen",
      '42 Blindkraut',
      '34 Goldener Sansam',
      '17 Bergsilberweisling'
    ],
    recipes: [
      'Rezept: Überragender Manatrank – Allianz: Ulthir in Darnassus, Horde: Algernon in Undercity.',
      'Rezept: Erheblicher Heiltrank – Evie Whirlbrew in Everlook, Winterspring.'
    ],
    steps: [
      {
        range: '1-60',
        craft: '66 x Schwacher Heiltrank',
        materials: '66 Friedensblume, 66 Silberblatt, 66 Leere Phiole',
        note: 'Lerne ab Skill 50 den nächsten Berufs-Rang in einer Hauptstadt.'
      },
      {
        range: '60-105',
        craft: '63 x Geringer Heiltrank',
        materials: '63 Schwacher Heiltrank, 63 Wilddornrose'
      },
      {
        range: '105-110',
        craft: '5 x Schwimmtempotrank',
        materials: '5 Flitzdistel, 5 Schwarzmaulöl, 5 Leere Phiole'
      },
      {
        range: '110-140',
        craft: '32 x Heiltrank',
        materials: '32 Beulengras, 32 Wilddornrose, 32 Verbleite Phiole',
        note: 'Besuche ab Skill 125 den Experten-Trainer, damit der Skillbalken nicht stoppt.'
      },
      {
        range: '140-155',
        craft: '23 x Geringer Manatrank',
        materials: '23 Maguskönigskraut, 23 Würgetang, 23 Leere Phiole'
      },
      {
        range: '155-185',
        craft: '32 x Großer Heiltrank',
        materials: '32 Lebenswurz, 32 Königsblut, 32 Verbleite Phiole'
      },
      {
        range: '185-210',
        craft: '28 x Elixier der Beweglichkeit',
        materials: '28 Würgetang, 28 Golddorn, 28 Verbleite Phiole',
        note: 'Ab Skill 200 kannst du den nächsten Rang vorbereiten; spätestens bei 225 musst du zum Fachmann-Trainer.'
      },
      {
        range: '210-215',
        craft: '5 x Elixier der großen Verteidigung',
        materials: '5 Wildstahlblume, 5 Golddorn, 5 Verbleite Phiole'
      },
      {
        range: '215-230',
        craft: '15 x Überragender Heiltrank',
        materials: "15 Sonnengras, 15 Khadgars Schnurrbart, 15 Kristallphiole"
      },
      {
        range: '230-250',
        craft: '21 x Elixier der Untotenentdeckung',
        materials: "21 Arthas' Tränen, 21 Kristallphiole"
      },
      {
        range: '250-265',
        craft: '19 x Elixier der großen Beweglichkeit',
        materials: '19 Sonnengras, 19 Golddorn, 19 Kristallphiole'
      },
      {
        range: '265-285',
        craft: '21 x Überragender Manatrank',
        materials: '42 Sonnengras, 42 Blindkraut, 21 Kristallphiole',
        note: 'Kaufe das Händlerrezept vor diesem Abschnitt, sonst fehlt dir der wichtigste Skillblock.'
      },
      {
        range: '285-300',
        craft: '17 x Erheblicher Heiltrank',
        materials: '34 Goldener Sansam, 17 Bergsilberweisling, 17 Kristallphiole',
        note: 'Das Rezept kommt aus Everlook. Plane den Abstecher nach Winterspring vor dem letzten Sprint ein.'
      }
    ],
    tips: [
      'Materialmengen sind Richtwerte: Gelbe und grüne Rezepte können zusätzliche Versuche nötig machen.',
      'Kaufe Phiolen in großen Stapeln, damit du während des Skillens nicht ständig zum Händler laufen musst.',
      'Wenn Kräuter auf deinem Realm teuer sind, farme Friedensblume/Silberblatt in Startgebieten und Sonnengras/Golddorn in höheren Zonen selbst.',
      'Bewahre nützliche Tränke fürs Leveln, Dungeons oder Hardcore-Sicherheitsmomente auf, statt alles sofort zu verkaufen.'
    ]
  },
  {
    id: 'classic-enchanting',
    name: 'Verzauberkunst',
    icon: 'enchanting',
    expansion: 'classic',
    category: 'Professions',
    skillRange: '1-300',
    audience: 'Einsteiger',
    minutes: 26,
    theme: '#b98eff',
    summary:
      'Dieser Classic-Berufe-Guide zeigt dir einen geradlinigen Weg, Verzauberkunst in Classic Era, Hardcore und Season of Discovery von 1 bis 300 zu steigern – mit Trainerstopps, Stab-Rezepten und einer klaren Materialliste.',
    intro: [
      'Verzauberkunst ist ein Handwerksberuf, der Ausrüstung wie Waffen, Umhänge, Handschuhe oder Rüstung dauerhaft mit zusätzlichen Werten verzaubert – anders als bei den meisten Berufen brauchst du dafür keine Handwerksstation.',
      'Deine wichtigste Materialquelle ist das Entzaubern: Zerlege grüne und blaue Gegenstände in Verzauberungsstaub, Kristalle und Essenzen, statt sie zu verkaufen.',
      'Für mehrere Rang-Aufstiege brauchst du einen selbst hergestellten Verzauberungsstab (Kupfer, Silber, Gold, Echsilber, Arkanit) – ohne ihn stockt dein Fortschritt.',
      'Schneiderei passt besonders gut als Zweitberuf, weil du eigene Stoffgegenstände sofort wieder entzaubern kannst und so kaum vom Auktionshaus abhängig bist.'
    ],
    trainers: [
      {
        rank: 'Lehrling',
        range: 'Verzauberkunst 1-75',
        requirement: 'ab Charakterlevel 1',
        alliance: ['Alanna Raveneye in Teldrassil', 'Thonys Pillarstone in Ironforge', 'Betty Quin in Stormwind', 'Lalina Summermoon in Darnassus'],
        horde: ['Teg Dawnstrider in Thunder Bluff', 'Vance Undergloom in Tirisfal', 'Jhag in Orgrimmar', 'Malcomb Wynn in Undercity']
      },
      {
        rank: 'Geselle',
        range: 'Verzauberkunst 75-150',
        requirement: 'ab Skill 50 und Level 10',
        alliance: ['Alanna Raveneye in Teldrassil', 'Thonys Pillarstone in Ironforge', 'Betty Quin in Stormwind', 'Lalina Summermoon in Darnassus'],
        horde: ['Teg Dawnstrider in Thunder Bluff', 'Vance Undergloom in Tirisfal', 'Jhag in Orgrimmar', 'Malcomb Wynn in Undercity']
      },
      {
        rank: 'Experte',
        range: 'Verzauberkunst 150-225',
        requirement: 'ab Skill 125 und Level 20',
        alliance: ['Kitta Firewind im Wald von Elwynn'],
        horde: ['Hgarth im Steinkrallengebirge']
      },
      {
        rank: 'Fachmann',
        range: 'Verzauberkunst 225-300',
        requirement: 'ab Skill 225 und Level 35',
        alliance: ['Annora in Uldaman, Ödland'],
        horde: ['Annora in Uldaman, Ödland']
      }
    ],
    shoppingList: [
      '125 Seltsamer Staub',
      '1 Kleine Magiessenz',
      '12 Große Magiessenz',
      '25 Kleine Astralessenz',
      '130 Seelenstaub',
      '2 Große Astralessenz',
      '2 Große Mystische Essenz',
      '240 Visionsstaub',
      '5 Kleine Nethressenz',
      '360 Traumstaub',
      '40 Purpurlotus',
      '20 Kristallfläschchen',
      '82 Illusionsstaub',
      '4 Große Ewige Essenz',
      '4 Kleiner Leuchtender Splitter',
      '2 Großer Leuchtender Splitter',
      '9 Einfaches Holz',
      '1 Kupferstab',
      '1 Silberstab',
      '1 Goldstab',
      '1 Echsilberstab',
      '1 Arkanitstab',
      '1 Schattenedelstein',
      '1 Schillernde Perle',
      '1 Schwarze Perle',
      '1 Goldene Perle'
    ],
    recipes: [
      'Die meisten Verzauberungen dieser Route lernst du automatisch beim Rang-Aufstieg direkt beim Verzauberungslehrer – ein separater Kauf ist normalerweise nicht nötig.',
      'Die Runenstab-Rezepte (Kupfer, Silber, Gold, Echsilber, Arkanit) sind Pflicht-Zwischenschritte und werden ebenfalls vom jeweils aktuellen Trainer gelehrt.'
    ],
    steps: [
      {
        range: '1-2',
        craft: '1 x Runenstab aus Kupfer',
        materials: '1 Kupferstab, 1 Seltsamer Staub, 1 Kleine Magiessenz',
        note: 'Stelle den Stab als Allererstes her – ohne ihn kannst du keine höherwertigen Verzauberungen anwenden.'
      },
      {
        range: '2-50',
        craft: '48 x Verzauberung: Handgelenk - Kleine Gesundheit',
        materials: '48 Seltsamer Staub'
      },
      {
        range: '50-90',
        craft: '40 x Verzauberung: Handgelenk - Kleine Gesundheit',
        materials: '40 Seltsamer Staub'
      },
      {
        range: '90-100',
        craft: '10 x Verzauberung: Handgelenk - Kleine Ausdauer',
        materials: '30 Seltsamer Staub'
      },
      {
        range: '100-101',
        craft: '1 x Runenstab aus Silber',
        materials: '1 Silberstab, 6 Seltsamer Staub, 3 Große Magiessenz, 1 Schattenedelstein',
        note: 'Der Silberstab ist Pflicht, um über Skill 100 hinauszukommen.'
      },
      {
        range: '101-110',
        craft: '9 x Großer Magiestab',
        materials: '9 Einfaches Holz, 9 Große Magiessenz'
      },
      {
        range: '110-135',
        craft: '25 x Verzauberung: Umhang - Kleine Beweglichkeit',
        materials: '25 Kleine Astralessenz'
      },
      {
        range: '135-155',
        craft: '20 x Verzauberung: Handgelenk - Kleine Ausdauer',
        materials: '40 Seelenstaub'
      },
      {
        range: '155-156',
        craft: '1 x Runenstab aus Gold',
        materials: '1 Goldstab, 1 Schillernde Perle, 2 Große Astralessenz, 2 Seelenstaub',
        note: 'Besuche spätestens jetzt den Experten-Trainer (ab Skill 125 verfügbar), sonst stoppt dein Skillfortschritt.'
      },
      {
        range: '156-185',
        craft: '40 x Verzauberung: Handgelenk - Kleine Stärke',
        materials: '80 Seelenstaub'
      },
      {
        range: '185-200',
        craft: '15 x Verzauberung: Handgelenk - Stärke',
        materials: '15 Visionsstaub'
      },
      {
        range: '200-201',
        craft: '1 x Runenstab aus Echsilber',
        materials: '1 Echsilberstab, 1 Schwarze Perle, 2 Große Mystische Essenz, 2 Visionsstaub'
      },
      {
        range: '201-220',
        craft: '25 x Verzauberung: Handgelenk - Stärke',
        materials: '25 Visionsstaub'
      },
      {
        range: '220-225',
        craft: '5 x Verzauberung: Umhang - Große Verteidigung',
        materials: '15 Visionsstaub',
        note: 'Ab Skill 225 musst du zum Fachmann-Trainer wechseln (Annora, Uldaman), um weiterzuskillen.'
      },
      {
        range: '225-230',
        craft: '5 x Verzauberung: Handschuhe - Beweglichkeit',
        materials: '5 Kleine Nethressenz, 5 Visionsstaub'
      },
      {
        range: '230-235',
        craft: '5 x Verzauberung: Stiefel - Ausdauer',
        materials: '25 Visionsstaub'
      },
      {
        range: '235-250',
        craft: '25 x Verzauberung: Brust - Überlegene Gesundheit',
        materials: '150 Visionsstaub'
      },
      {
        range: '250-265',
        craft: '~20 x Kleines Manaöl',
        materials: '60 Traumstaub, 40 Purpurlotus, 20 Kristallfläschchen',
        note: 'Dieser Abschnitt braucht Alchemie-Phiolen und Kräuter – kaufe sie rechtzeitig am Auktionshaus.'
      },
      {
        range: '265-294',
        craft: '30 x Verzauberung: Schild - Große Ausdauer',
        materials: '300 Traumstaub'
      },
      {
        range: '294-295',
        craft: '1 x Runenstab aus Arkanit',
        materials: '1 Arkanitstab, 1 Goldene Perle, 10 Illusionsstaub, 4 Große Ewige Essenz, 4 Kleiner Leuchtender Splitter, 2 Großer Leuchtender Splitter',
        note: 'Der teuerste Schritt der Route – plane Splitter und Essenzen frühzeitig ein.'
      },
      {
        range: '295-300',
        craft: '5 x Verzauberung: Umhang - Überlegene Verteidigung',
        materials: '40 Illusionsstaub'
      }
    ],
    tips: [
      'Materialmengen sind Richtwerte: Gelbe und grüne Rezepte können zusätzliche Versuche nötig machen.',
      'Entzaubern ist deine Hauptquelle für Verzauberungsstaub, Essenzen und Kristalle – sammle grüne und blaue Gegenstände und entzaubere sie, statt sie zu verkaufen.',
      'Halte für jeden Rang-Wechsel den passenden Verzauberungsstab bereit (Kupfer, Silber, Gold, Echsilber, Arkanit), da du ohne ihn nicht weiterskillen kannst.',
      'Hochwertige Endgame-Verzauberungen ab Level 60 erfordern zusätzlich Ruf bei Fraktionen wie der Silbernen Morgendämmerung oder der Thorium-Bruderschaft.'
    ]
  },
  {
    id: 'classic-mining',
    name: 'Bergbau',
    icon: 'mining',
    expansion: 'classic',
    category: 'Professions',
    skillRange: '1-300',
    audience: 'Einsteiger',
    minutes: 30,
    theme: '#e0a24d',
    summary:
      'Dieser Classic-Berufe-Guide zeigt dir einen geradlinigen Weg, Bergbau in Classic Era, Hardcore und Season of Discovery von 1 bis 300 zu steigern – mit Aderrouten nach Zone, Schmelzrezepten und einem Link zu einem ausführlichen externen Guide.',
    intro: [
      'Bergbau ist ein Sammelberuf: Du baust Erzadern in der Welt ab und verarbeitest das Erz per Schmelzen direkt zu Barren, die von Schmiedekunst, Ingenieurskunst und Juwelenschleifen benötigt werden.',
      'Anders als bei den meisten anderen Berufen lehrt in Bergbau ein einzelner Lehrer pro Fraktion alle vier Ränge – ein Trainerwechsel während des Skillens ist normalerweise nicht nötig.',
      'Kürschnerei oder Schmiedekunst/Ingenieurskunst passen als Zweitberuf hervorragend, weil sich Fell- und Erzrouten oft in denselben Zonen überschneiden.',
      'Die Route unten kombiniert Aderfarmen mit den passenden Schmelzrezepten, damit du auch bei knappen Erzvorkommen weiterskillen kannst.'
    ],
    trainers: [
      {
        rank: 'Lehrling',
        range: 'Bergbau 1-75',
        requirement: 'ab Charakterlevel 1',
        alliance: ['Geofram Bouldertoe in Ironforge', 'Gelman Stonehand in Stormwind', 'Yarr Hammerstone in Dun Morogh', 'Kurdram Stonehammer in Darkshore', 'Matt Johnson in Duskwood'],
        horde: ['Makaru in Orgrimmar', 'Brom Killian in Undercity', 'Krunn in Durotar', 'Brek Stonehoof in Thunder Bluff', 'Johan Focht in Silverpine Forest']
      },
      {
        rank: 'Geselle',
        range: 'Bergbau 75-150',
        requirement: 'ab Skill 50 und Level 10',
        alliance: ['Geofram Bouldertoe in Ironforge', 'Gelman Stonehand in Stormwind', 'Yarr Hammerstone in Dun Morogh', 'Kurdram Stonehammer in Darkshore'],
        horde: ['Makaru in Orgrimmar', 'Brom Killian in Undercity', 'Krunn in Durotar', 'Brek Stonehoof in Thunder Bluff']
      },
      {
        rank: 'Experte',
        range: 'Bergbau 150-225',
        requirement: 'ab Skill 125 und Level 20',
        alliance: ['Geofram Bouldertoe in Ironforge', 'Gelman Stonehand in Stormwind'],
        horde: ['Makaru in Orgrimmar', 'Brom Killian in Undercity']
      },
      {
        rank: 'Fachmann',
        range: 'Bergbau 225-300',
        requirement: 'ab Skill 225 und Level 35',
        alliance: ['Geofram Bouldertoe in Ironforge', 'Pikkle in Tanaris (neutral)'],
        horde: ['Makaru in Orgrimmar', 'Pikkle in Tanaris (neutral)']
      }
    ],
    shoppingList: [
      '155 Kupfererz',
      '85 Zinnerz',
      '20 Silbererz (optional für Zwischenskillpunkte)',
      '105 Eisenerz',
      '15 Golderz (optional für Zwischenskillpunkte)',
      '110 Mithrilerz',
      '10 Echtsilbererz (optional für Zwischenskillpunkte)',
      '155 Thoriumerz'
    ],
    recipes: [
      'Alle Schmelzrezepte werden automatisch beim Rang-Aufstieg vom Bergbau-Lehrer gelehrt – ein separater Kauf ist nicht nötig.',
      'Schmelzen: Bronzebarren (ab Skill 25) benötigt Kupfer- und Zinnerz und lässt sich auch ohne eigene Zinn-Adern durch Auktionshaus-Käufe vorziehen.'
    ],
    steps: [
      {
        range: '1-65',
        craft: 'Kupfererz abbauen',
        materials: 'Wald von Elwynn, Durotar, Dun Morogh, Mulgore, Tirisfal',
        note: 'Kupfer ist in jeder Startzone dicht gesät; paralleles Sammeln beim Questen reicht meist aus.'
      },
      {
        range: '65-125',
        craft: 'Zinn- und Silbererz abbauen, dazwischen Bronze und Silber schmelzen',
        materials: 'Westfall, Loch Modan, Brachland, Rotkammgebirge',
        note: 'Schmelzen: Bronze (25) und Schmelzen: Silber (50) liefern zusätzliche Skillpunkte, wenn Adern gerade knapp sind.'
      },
      {
        range: '125-175',
        craft: 'Eisen- und Golderz abbauen, dazwischen Eisen und Gold schmelzen',
        materials: 'Sumpfland, Ödland, Rotkammgebirge, Arathihochland, Tausend Nadeln, Steinkrallengebirge',
        note: 'Schmelzen: Eisen (125) und Schmelzen: Gold (155) schließen kleinere Skilllücken ohne Ortswechsel.'
      },
      {
        range: '175-230',
        craft: 'Mithril- und Echtsilbererz abbauen, dazwischen Mithril schmelzen',
        materials: 'Ödland, Brennende Schlucht, Arathihochland, Tausend Nadeln, Desolace, Tanaris',
        note: 'Brennende Schlucht liefert dichte Mithril-Vorkommen, ist aber wegen Dunkeleisenzwergen gefährlicher.'
      },
      {
        range: '230-300',
        craft: 'Thoriumerz abbauen (inklusive Reicher Adern), dazwischen Echtsilber und Thorium schmelzen',
        materials: "Un'Goro-Krater, Brennende Steppen, Winterquell, Silithus, Östliche Pestländer",
        note: 'Schmelzen: Echtsilber und Schmelzen: Thorium (beide ab Skill 230) helfen über die letzten Skillpunkte vor 300.'
      }
    ],
    tips: [
      'Erzmengen sind Richtwerte: Verpasste Adern und Fehlversuche beim Schmelzen können zusätzliche Runden nötig machen.',
      'Kaufe Zinnerz früh am Auktionshaus, um schon ab Skill 25 Bronze zu schmelzen, auch wenn Zinn-Adern erst ab Skill 65 abbaubar sind.',
      'Ein Goblin-Bergarbeiterhelm oder eine +Bergbau-Verzauberung auf Handschuhen erleichtern das Auffinden von Adern spürbar.',
      'Da alle Ränge beim selben Lehrer sitzen, brauchst du für Bergbau keinen zusätzlichen Trainer-Reiseplan einzuplanen.'
    ],
    externalGuides: [
      {
        label: 'Overgear – Bergbau Guide (DE)',
        url: 'https://overgear.com/guides/de/wow-classic/guide-for-mining/'
      }
    ]
  }
];
