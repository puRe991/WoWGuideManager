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
      'Dieser Classic-Berufe-Guide zeigt dir einen geradlinigen Weg, Bergbau in Classic Era, Hardcore und Season of Discovery von 1 bis 300 zu steigern – mit Aderrouten nach Zone und Schmelzrezepten.',
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
    ]
  },
  {
    id: 'classic-first-aid',
    name: 'Erste Hilfe',
    icon: 'first-aid',
    expansion: 'classic',
    category: 'Professions',
    skillRange: '1-300',
    audience: 'Einsteiger',
    minutes: 18,
    theme: '#e2685c',
    summary:
      'Dieser Classic-Berufe-Guide zeigt dir einen geradlinigen Weg, Erste Hilfe in Classic Era, Hardcore und Season of Discovery von 1 bis 300 zu steigern – mit Verband-Rezepten, Trainerstopps und der Triage-Questreihe.',
    intro: [
      'Erste Hilfe ist ein Sekundärberuf, den jeder Charakter zusätzlich zu seinen zwei Hauptberufen erlernen kann – er blockiert also keinen Berufsslot.',
      'Das Material besteht praktisch nur aus Stoff, den du beim Questen und Farmen von Humanoiden mitnimmst oder alternativ am Auktionshaus kaufst.',
      'Ab Skill 125 lernst du den Experten-Rang nicht bei einem Trainer, sondern kaufst das Handbuch "Experten-Erste-Hilfe – Unter Verband" bei einem Händler.',
      'Für den Handwerker-Rang (ab Skill 225 und Level 35) musst du zusätzlich die Questreihe "Triage" abschließen, bei der du in einem Zeitlimit verwundete Soldaten rettest.'
    ],
    trainers: [
      {
        rank: 'Lehrling',
        range: 'Erste Hilfe 1-75',
        requirement: 'ab Charakterlevel 1',
        alliance: ['Shaina Fuller in Stormwind', 'Thamner Pol in Dun Morogh', 'Michelle Belle im Wald von Elwynn', 'Nissa Firestone in Ironforge', 'Dannelor in Darnassus', 'Byancie in Teldrassil', 'Fremal Doohickey in den Sumpfländen'],
        horde: ['Arnok in Orgrimmar', 'Pand Stonebinder in Thunder Bluff', 'Mary Edras in Undercity', 'Rawrk in Durotar', 'Nurse Neela in Tirisfal', 'Vira Younghoof in Mulgore']
      },
      {
        rank: 'Geselle',
        range: 'Erste Hilfe 75-150',
        requirement: 'ab Skill 50',
        alliance: ['Shaina Fuller in Stormwind', 'Nissa Firestone in Ironforge', 'Dannelor in Darnassus'],
        horde: ['Arnok in Orgrimmar', 'Mary Edras in Undercity', 'Pand Stonebinder in Thunder Bluff']
      },
      {
        rank: 'Experte',
        range: 'Erste Hilfe 150-225',
        requirement: 'ab Skill 125 – kein Trainer, sondern Kauf des Handbuchs "Experten-Erste-Hilfe – Unter Verband" (1 Gold)',
        alliance: ['Deneb Walker in Sturmgrad, Arathihochland'],
        horde: ["Balai Lok'Wein in Brackenwall, Sumpfland von Dustwallow"]
      },
      {
        rank: 'Handwerker',
        range: 'Erste Hilfe 225-300',
        requirement: 'ab Skill 225 und Level 35 – Abschluss der Questreihe "Triage"',
        alliance: ['Doktor Gustaf VanHowzen in Theramore, Sumpfland von Dustwallow'],
        horde: ['Doktor Gregory Victor in Hammerfall, Arathihochland']
      }
    ],
    shoppingList: [
      '50 Leinenstoff',
      '100 Wollstoff',
      '61 Seidenstoff',
      '49 Magierweb',
      '40 Runenstoff'
    ],
    recipes: [
      'Handbuch "Experten-Erste-Hilfe – Unter Verband" (1 Gold) – Allianz: Deneb Walker in Sturmgrad, Arathihochland. Horde: Balai Lok\'Wein in Brackenwall, Sumpfland von Dustwallow.',
      'Der Handwerker-Rang wird nicht gekauft, sondern über die Questreihe "Triage" bei Doktor Gustaf VanHowzen (Allianz) bzw. Doktor Gregory Victor (Horde) freigeschaltet.'
    ],
    steps: [
      {
        range: '1-40',
        craft: '~40 x Leinenverband',
        materials: '40 Leinenstoff'
      },
      {
        range: '40-50',
        craft: '~10 x Schwerer Leinenverband',
        materials: '10 Leinenstoff',
        note: 'Lerne ab Skill 50 den Gesellen-Rang beim selben Erste-Hilfe-Lehrer.'
      },
      {
        range: '50-80',
        craft: '~30 x Wollverband',
        materials: '30 Wollstoff'
      },
      {
        range: '80-150',
        craft: '~70 x Schwerer Wollverband',
        materials: '70 Wollstoff',
        note: 'Kaufe ab Skill 125 das Handbuch "Experten-Erste-Hilfe – Unter Verband", da es keinen klassischen Trainer für den Experten-Rang gibt.'
      },
      {
        range: '150-180',
        craft: '~30 x Seidenverband',
        materials: '30 Seidenstoff'
      },
      {
        range: '180-211',
        craft: '~31 x Schwerer Seidenverband',
        materials: '31 Seidenstoff'
      },
      {
        range: '211-240',
        craft: '~29 x Magierwebverband',
        materials: '29 Magierweb',
        note: 'Ab Skill 225 und Level 35 kannst du die Questreihe "Triage" für den Handwerker-Rang beginnen.'
      },
      {
        range: '240-260',
        craft: '~20 x Schwerer Magierwebverband',
        materials: '20 Magierweb'
      },
      {
        range: '260-290',
        craft: '~30 x Runenstoffverband',
        materials: '30 Runenstoff'
      },
      {
        range: '290-300',
        craft: '~10 x Schwerer Runenstoffverband',
        materials: '10 Runenstoff'
      }
    ],
    tips: [
      'Materialmengen sind Richtwerte: Verbände bekommen ab einem bestimmten Skillpunkt eine sinkende Lernchance, sodass zusätzliche Stapel nötig sein können.',
      'Schneiderei als Zweitberuf liefert dir automatisch den gesamten Stoffbedarf für Erste Hilfe mit, da beide Berufe dieselben Stoffarten verwenden.',
      'Verbände teilen sich eine eigene Abklingzeit mit anderen Heilungen, sind im Kampf aber trotzdem eine kostenlose Zusatzheilung ohne Mana- oder Reagenzienkosten.',
      'Lege dir für die Triage-Quest vorher ausreichend aktuelle Verbände zurecht, da du während der Rettungsaktion selbst keine neuen herstellen kannst.'
    ]
  },
  {
    id: 'classic-cooking',
    name: 'Kochkunst',
    icon: 'cooking',
    expansion: 'classic',
    category: 'Professions',
    skillRange: '1-300',
    audience: 'Einsteiger',
    minutes: 20,
    theme: '#f2b134',
    summary:
      'Dieser Classic-Berufe-Guide zeigt dir einen geradlinigen Weg, Kochkunst in Classic Era, Hardcore und Season of Discovery von 1 bis 300 zu steigern – mit Fischsorten nach Skillbereich, Trainerstopps und einer klaren Materialliste.',
    intro: [
      'Kochkunst ist ein Sekundärberuf, den jeder Charakter zusätzlich zu seinen zwei Hauptberufen erlernen kann – er blockiert also keinen Berufsslot.',
      'Die schnellste und günstigste Route führt fast ausschließlich über gekochten Fisch, weil sich die Rohfische leicht selbst angeln oder günstig am Auktionshaus kaufen lassen.',
      'Angeln passt hervorragend als Zweitberuf, weil du damit direkt den kompletten Fischbedarf für diese Route selbst sammeln kannst.',
      'Wenn Fisch auf deinem Realm knapp ist, helfen "Angekohltes Wolfsfleisch" und "Gebratenes Eberfleisch" aus gefarmtem Tierfleisch als Ausweichroute in den ersten Skillbereichen.'
    ],
    trainers: [
      {
        rank: 'Lehrling',
        range: 'Kochkunst 1-75',
        requirement: 'ab Charakterlevel 5',
        alliance: ['Alegorn in Darnassus', 'Koch Ghilm in Dun Morogh'],
        horde: ['Aska Mistrunner in Thunder Bluff', 'Eunice Burch in Undercity']
      },
      {
        rank: 'Geselle',
        range: 'Kochkunst 75-150',
        requirement: 'ab Skill 50 und Level 10',
        alliance: ['Daryl Riknussun in Ironforge', 'Stephen Ryback in Stormwind'],
        horde: ['Zamja in Orgrimmar']
      },
      {
        rank: 'Experte',
        range: 'Kochkunst 150-225',
        requirement: 'ab Skill 125 – kein Trainer, sondern Kauf des Rezeptbuchs "Experten-Kochkunst" bei einem Kochkunst-Händler',
        alliance: ['Kochkunst-Händler in den großen Allianz-Hauptstädten'],
        horde: ['Kochkunst-Händler in den großen Horde-Hauptstädten']
      },
      {
        rank: 'Fachmann',
        range: 'Kochkunst 225-300',
        requirement: 'ab Skill 225 und Level 35 – zusätzlich an eine Quest bei einem Kochkunst-Händler gebunden',
        alliance: ['Vivianna in Booty Bay'],
        horde: ['Sheendra Tallgrass in Booty Bay']
      }
    ],
    shoppingList: [
      '50 Roher Strahlender Kleinfisch',
      '50 Roher Langkiefer-Schlammschnapper',
      '120 Roher Borstenbart-Wels',
      '60 Rohe Mithrilkopf-Forelle',
      '70 Roher Getupfter Gelbschwanz',
      '25 Roher Großer Machtfisch'
    ],
    recipes: [
      'Handbuch "Experten-Kochkunst" (ab Skill 125) – bei einem Kochkunst-Händler in einer Hauptstadt erhältlich.',
      'Rezept: Machtfisch-Steak (ab Skill 275) – Allianz: Vivianna in Booty Bay, Horde: Sheendra Tallgrass in Booty Bay.'
    ],
    steps: [
      {
        range: '1-50',
        craft: '50 x Gebratener Strahlender Kleinfisch',
        materials: '50 Roher Strahlender Kleinfisch'
      },
      {
        range: '50-100',
        craft: '50 x Gebratener Langkiefer-Schlammschnapper',
        materials: '50 Roher Langkiefer-Schlammschnapper',
        note: 'Lerne ab Skill 50 den Gesellen-Rang beim nächsten Kochkunst-Trainer.'
      },
      {
        range: '100-150',
        craft: '50 x Gebratener Borstenbart-Wels',
        materials: '50 Roher Borstenbart-Wels'
      },
      {
        range: '150-175',
        craft: '70 x Gebratener Borstenbart-Wels',
        materials: '70 Roher Borstenbart-Wels',
        note: 'Kaufe ab Skill 125 das Handbuch "Experten-Kochkunst", da es keinen klassischen Trainer für den Experten-Rang gibt.'
      },
      {
        range: '175-225',
        craft: '60 x Gebratene Mithrilkopf-Forelle',
        materials: '60 Rohe Mithrilkopf-Forelle'
      },
      {
        range: '225-275',
        craft: '70 x Gebratener Getupfter Gelbschwanz',
        materials: '70 Roher Getupfter Gelbschwanz',
        note: 'Ab Skill 225 und Level 35 kannst du das Fachmann-Rezept in Booty Bay besorgen.'
      },
      {
        range: '275-300',
        craft: '25 x Machtfisch-Steak',
        materials: '25 Roher Großer Machtfisch',
        note: 'Das Rezept kommt aus Booty Bay. Plane den Abstecher vor dem letzten Sprint ein.'
      }
    ],
    tips: [
      'Materialmengen sind Richtwerte: Gelbe und grüne Rezepte können zusätzliche Versuche nötig machen.',
      'Levele Kochkunst zusammen mit Angeln, damit du den Rohfisch für die gesamte Route selbst fängst statt am Auktionshaus zu kaufen.',
      'Meide Tirisfal-Lichtungen zum Angeln für diese Route, da dort vor allem unverkäufliche Fische beißen.',
      'Behalte Buff-Speisen wie "Geräucherte Wüstenknödel" oder "Nachtflossen-Suppe" fürs Leveln, Dungeons oder Hardcore-Sicherheitsmomente statt sie sofort zu verkaufen.'
    ]
  },
  {
    id: 'classic-fishing',
    name: 'Angeln',
    icon: 'fishing',
    expansion: 'classic',
    category: 'Professions',
    skillRange: '1-300',
    audience: 'Einsteiger',
    minutes: 22,
    theme: '#4fb3d9',
    summary:
      'Dieser Classic-Berufe-Guide zeigt dir einen geradlinigen Weg, Angeln in Classic Era, Hardcore und Season of Discovery von 1 bis 300 zu steigern – mit Angelgebieten nach Skillbereich, Trainerstopps und Köder-Tipps.',
    intro: [
      'Angeln ist ein Sekundärberuf, den jeder Charakter zusätzlich zu seinen zwei Hauptberufen erlernen kann – er blockiert also keinen Berufsslot.',
      'Der Beruf ist bewusst langsam und eher meditativ, liefert dir dafür aber günstige Rohfische für Kochkunst, Reagenzien für Alchemie und zusätzliches Gold über das Auktionshaus.',
      'Ab Skill 125 lernst du den Experten-Rang nicht bei einem klassischen Trainer, sondern kaufst das Handbuch "Experten-Angeln – Der Barsch und Du" bei Alter Mann Heming in Loch Modan.',
      'Für den Handwerker-Rang (ab Skill 225 und Level 35) musst du zusätzlich die Questreihe "Nat Pagle, Extremangler" bei Nat Pagle in den Düstermarschen abschließen.'
    ],
    trainers: [
      {
        rank: 'Lehrling',
        range: 'Angeln 1-75',
        requirement: 'ab Charakterlevel 1',
        alliance: ['Arnold Leland in Stormwind', 'Grimnur Stonebrand in Ironforge', 'Lee Brown im Wald von Elwynn'],
        horde: ['Lumak in Orgrimmar', "Lau'Tiki in Durotar", 'Kah Mistrunner in Thunder Bluff']
      },
      {
        rank: 'Geselle',
        range: 'Angeln 75-150',
        requirement: 'ab Skill 50',
        alliance: ['Arnold Leland in Stormwind', 'Grimnur Stonebrand in Ironforge', 'Lee Brown im Wald von Elwynn'],
        horde: ['Lumak in Orgrimmar', "Lau'Tiki in Durotar", 'Kah Mistrunner in Thunder Bluff']
      },
      {
        rank: 'Experte',
        range: 'Angeln 150-225',
        requirement: 'ab Skill 125 und Level 20 – kein Trainer, sondern Kauf des Handbuchs "Experten-Angeln – Der Barsch und Du" (1 Gold)',
        alliance: ['Alter Mann Heming in Loch Modan'],
        horde: ['Alter Mann Heming in Loch Modan (neutral)']
      },
      {
        rank: 'Handwerker',
        range: 'Angeln 225-300',
        requirement: 'ab Skill 225 und Level 35 – Abschluss der Questreihe "Nat Pagle, Extremangler"',
        alliance: ['Nat Pagle in den Düstermarschen'],
        horde: ['Nat Pagle in den Düstermarschen (neutral)']
      }
    ],
    shoppingList: [
      '1 Angelrute (Handelswarenhändler)',
      '1 Glänzende Angelperle (Köder, +25 Fertigkeit)',
      'Nachtkriecher (optionaler Köder, +50 Fertigkeit)',
      'Leuchtende Angelperlen (optionaler Köder, +75 Fertigkeit)',
      'Optional: Starke oder Große Eisenangelrute für höhere Skillbereiche'
    ],
    recipes: [
      'Handbuch "Experten-Angeln – Der Barsch und Du" (1 Gold) – bei Alter Mann Heming in Loch Modan.',
      'Der Handwerker-Rang wird nicht gekauft, sondern über die Questreihe "Nat Pagle, Extremangler" bei Nat Pagle in den Düstermarschen freigeschaltet.'
    ],
    steps: [
      {
        range: '1-75',
        craft: 'In Binnengewässern und an der Küste der Startgebiete angeln',
        materials: 'Rohe Strahlende Kleinfische in Binnengewässern, Rohe Schlangenhaut-Makrelen an der Küste',
        note: 'Nutze die Glänzende Angelperle als Köder, um die Fangchance zu erhöhen.'
      },
      {
        range: '75-150',
        craft: 'In den Hauptstadtbecken von Stormwind oder Orgrimmar angeln',
        materials: 'Rohe Strahlende Kleinfische, Rohe Langkiefer-Schlammschnapper, Rohe Borstenbart-Welse',
        note: 'Lerne ab Skill 50 den Gesellen-Rang beim selben Angel-Trainer.'
      },
      {
        range: '150-225',
        craft: 'In den Düstermarschen angeln (Binnengewässer oder Küste nördlich von Theramore)',
        materials: 'Rohe Borstenbart-Welse, Rohe Mithrilkopf-Forellen, Roher Felsschuppendorsch',
        note: 'Kaufe ab Skill 125 das Handbuch "Experten-Angeln – Der Barsch und Du" bei Alter Mann Heming, da es keinen klassischen Trainer für den Experten-Rang gibt.'
      },
      {
        range: '225-300',
        craft: 'Am Dampfschraubenwerk-Hafen in Tanaris angeln, alternativ Feralas oder Winterquell',
        materials: 'Seltene Fischarten für Nat Pagles Questreihe',
        note: 'Ab Skill 225 und Level 35 kannst du die Questreihe "Nat Pagle, Extremangler" für den Handwerker-Rang beginnen.'
      }
    ],
    tips: [
      'Levele Angeln zusammen mit Kochkunst, damit du deinen Fang direkt weiterverarbeiten kannst.',
      'Meide die Tirisfal-Lichtungen zum Angeln – dort beißen überwiegend unverkäufliche Fische.',
      'Köder senken das Risiko, dass ein Fisch entkommt, besonders in höheren Skillbereichen.',
      'Fischschwärme bieten bessere Chancen auf seltene Fischarten und enthalten gelegentlich verschlossene Truhen – ein Reittier erleichtert das Absuchen großer Gewässer.'
    ]
  },
  {
    id: 'classic-engineering',
    name: 'Ingenieurskunst',
    icon: 'engineering',
    expansion: 'classic',
    category: 'Professions',
    skillRange: '1-300',
    audience: 'Einsteiger',
    minutes: 34,
    theme: '#8f9bb3',
    summary:
      'Dieser Classic-Berufe-Guide zeigt dir einen geradlinigen Weg, Ingenieurskunst in Classic Era, Hardcore und Season of Discovery von 1 bis 300 zu steigern – mit Trainerstopps, Pflicht-Werkzeugen und einer klaren Materialliste.',
    intro: [
      'Ingenieurskunst ist ein Handwerksberuf, der aus Erzbarren, Stein und Stoff Sprengstoffe, Zielfernrohre, Gadgets und mechanische Begleiter herstellt.',
      'Bergbau passt als Pflicht-Zweitberuf am besten, weil praktisch jede Stufe der Route Erzbarren oder Stein verlangt.',
      'Auf dem Weg stellst du mehrfach Werkzeuge wie den Lichtbogenschlüssel oder den Gyromatischen Mikro-Justierer her – diese werden nur einmal gefertigt und danach dauerhaft behalten, nicht verbraucht.',
      'Gnomische und Goblin-Ingenieurskunst sind optionale Spezialisierungen bei Tinkerwiz bzw. Buzzek Bracketswing in Gadgetzan, Tanaris und für die reine 1-300-Route nicht erforderlich.'
    ],
    trainers: [
      {
        rank: 'Lehrling',
        range: 'Ingenieurskunst 1-75',
        requirement: 'ab Charakterlevel 1',
        alliance: ['Bronk Guzzlegear in Dun Morogh', 'Deek Fizzlebizz in Loch Modan', 'Sprite Jumpsprocket in Stormwind', 'Jemma Quikswitch in Ironforge'],
        horde: ['Thund in Orgrimmar', 'Graham Van Talen in Undercity', 'Mukdrak in Durotar', 'Nogg in Orgrimmar']
      },
      {
        rank: 'Geselle',
        range: 'Ingenieurskunst 75-150',
        requirement: 'ab Skill 50 und Level 10',
        alliance: ['Bronk Guzzlegear in Dun Morogh', 'Deek Fizzlebizz in Loch Modan', 'Sprite Jumpsprocket in Stormwind', 'Jemma Quikswitch in Ironforge'],
        horde: ['Thund in Orgrimmar', 'Graham Van Talen in Undercity', 'Mukdrak in Durotar', 'Nogg in Orgrimmar']
      },
      {
        rank: 'Experte',
        range: 'Ingenieurskunst 150-225',
        requirement: 'ab Skill 125 und Level 20',
        alliance: ['Sprite Jumpsprocket in Stormwind', 'Jemma Quikswitch in Ironforge'],
        horde: ['Thund in Orgrimmar', 'Graham Van Talen in Undercity']
      },
      {
        rank: 'Fachmann',
        range: 'Ingenieurskunst 225-300',
        requirement: 'ab Skill 225 und Level 35',
        alliance: ['Tinkerwiz in Gadgetzan, Tanaris (neutral)', 'Buzzek Bracketswing in Gadgetzan, Tanaris (neutral)'],
        horde: ['Tinkerwiz in Gadgetzan, Tanaris (neutral)', 'Buzzek Bracketswing in Gadgetzan, Tanaris (neutral)']
      }
    ],
    shoppingList: [
      '126 Grober Stein',
      '72 Kupferbarren',
      '80 Leinenstoff',
      '5 Silberbarren',
      '110 Bronzebarren',
      '25 Schwaches Flussmittel',
      '10 Moosachat',
      '30 Schwerer Stein',
      '30 Wollstoff',
      '15 Mittleres Leder',
      '4 Stahlbarren',
      '120 Solider Stein',
      '141 Mithrilbarren',
      '20 Magierwirkerstoff',
      '60 Dichter Stein',
      '135 Thoriumbarren',
      '35 Runenstoff'
    ],
    recipes: [
      'Die meisten Rezepte dieser Route werden automatisch beim Rang-Aufstieg vom jeweils aktuellen Ingenieurslehrer gelehrt – ein separater Kauf ist normalerweise nicht nötig.',
      'Für den Fachmann-Rang (ab Skill 225) musst du zu Tinkerwiz oder Buzzek Bracketswing nach Gadgetzan in Tanaris reisen, da es dafür keine Trainer in den Hauptstädten gibt.'
    ],
    steps: [
      {
        range: '1-30',
        craft: '60 x Grobes Sprengpulver',
        materials: '60 Grober Stein'
      },
      {
        range: '30-50',
        craft: '30 x Handvoll Kupferschrauben',
        materials: '30 Kupferbarren',
        note: 'Lerne ab Skill 50 den Gesellen-Rang beim selben Ingenieurslehrer.'
      },
      {
        range: '50-51',
        craft: '1 x Lichtbogenschlüssel',
        materials: '6 Kupferbarren',
        note: 'Pflicht-Werkzeug: Wird nur einmal hergestellt und danach dauerhaft behalten.'
      },
      {
        range: '51-75',
        craft: '30 x Grobe Kupferbombe',
        materials: '30 Kupferbarren, 30 Handvoll Kupferschrauben, 60 Grobes Sprengpulver, 30 Leinenstoff'
      },
      {
        range: '75-90',
        craft: '60 x Grobes Sprengpulver',
        materials: '60 Grober Stein'
      },
      {
        range: '90-100',
        craft: '20 x Grobes Dynamit',
        materials: '60 Grobes Sprengpulver, 20 Leinenstoff'
      },
      {
        range: '100-105',
        craft: '5 x Silberkontakt',
        materials: '5 Silberbarren'
      },
      {
        range: '105-125',
        craft: '25 x Bronzerohr',
        materials: '50 Bronzebarren, 25 Schwaches Flussmittel',
        note: 'Besuche ab Skill 125 den Experten-Trainer, damit der Skillbalken nicht stoppt.'
      },
      {
        range: '125-135',
        craft: '10 x Standardzielfernrohr',
        materials: '10 Bronzerohr, 10 Moosachat'
      },
      {
        range: '135-150',
        craft: '30 x Schweres Sprengpulver',
        materials: '30 Schwerer Stein'
      },
      {
        range: '150-175',
        craft: '15 x Bronzerahmen',
        materials: '30 Bronzebarren, 15 Mittleres Leder, 15 Wollstoff'
      },
      {
        range: '175-176',
        craft: '1 x Gyromatischer Mikro-Justierer',
        materials: '4 Stahlbarren',
        note: 'Pflicht-Werkzeug: Wird nur einmal hergestellt und danach dauerhaft behalten.'
      },
      {
        range: '176-195',
        craft: '60 x Solides Sprengpulver',
        materials: '120 Solider Stein'
      },
      {
        range: '195-200',
        craft: '7 x Mithrilrohr',
        materials: '21 Mithrilbarren'
      },
      {
        range: '200-215',
        craft: '20 x Instabiler Auslöser',
        materials: '20 Mithrilbarren, 20 Magierwirkerstoff, 20 Solides Sprengpulver',
        note: 'Ab Skill 225 musst du zu Tinkerwiz oder Buzzek Bracketswing nach Gadgetzan reisen, um weiterzuskillen.'
      },
      {
        range: '215-238',
        craft: '40 x Mithrilgehäuse',
        materials: '120 Mithrilbarren'
      },
      {
        range: '238-250',
        craft: '20 x Hochexplosive Bombe',
        materials: '40 Mithrilgehäuse, 20 Instabiler Auslöser, 40 Solides Sprengpulver'
      },
      {
        range: '250-260',
        craft: '30 x Dichtes Sprengpulver',
        materials: '60 Dichter Stein'
      },
      {
        range: '260-285',
        craft: '35 x Thoriumteil',
        materials: '105 Thoriumbarren, 35 Runenstoff',
        note: 'Der teuerste Abschnitt der Route – plane Thoriumbarren und Runenstoff frühzeitig ein.'
      },
      {
        range: '285-300',
        craft: '15 x Thoriumhülsen',
        materials: '30 Thoriumbarren, 15 Dichtes Sprengpulver'
      }
    ],
    tips: [
      'Materialmengen sind Richtwerte: Gelbe und grüne Rezepte können zusätzliche Versuche nötig machen.',
      'Kombiniere Ingenieurskunst mit Bergbau, da fast jede Stufe der Route Erzbarren oder Stein verlangt.',
      'Verkaufe den Lichtbogenschlüssel und den Gyromatischen Mikro-Justierer niemals – ohne sie kannst du bestimmte Folgerezepte nicht mehr herstellen.',
      'Jäger profitieren im PvE besonders stark von Ingenieurskunst, aber auch andere Klassen genießen praktische Gadgets wie Teleportationsgeräte oder mechanische Begleiter.'
    ]
  },
  {
    id: 'classic-skinning',
    name: 'Kürschnerei',
    icon: 'skinning',
    expansion: 'classic',
    category: 'Professions',
    skillRange: '1-300',
    audience: 'Einsteiger',
    minutes: 19,
    theme: '#a9713f',
    summary:
      'Dieser Classic-Berufe-Guide zeigt dir einen geradlinigen Weg, Kürschnerei in Classic Era, Hardcore und Season of Discovery von 1 bis 300 zu steigern – mit Farmzonen nach Skillbereich und Trainerstopps.',
    intro: [
      'Kürschnerei ist ein Sammelberuf: Du häutest erlegte Tiere und Kreaturen ab und gewinnst dabei Leder, Felle und Schuppen für Lederverarbeitung, Schneiderei und das Auktionshaus.',
      'Anders als bei den meisten anderen Berufen brauchst du für Kürschnerei keine Rezepte – nur ein Kürschnermesser, das du bei jedem Handelswarenhändler kaufen kannst.',
      'Die effizienteste Route läuft parallel zum Questen: Häute jede Kreatur ab, die du ohnehin für Quests oder XP tötest, statt gezielt Farmrunden zu drehen.',
      'Lederverarbeitung passt hervorragend als Zweitberuf, weil du damit dein gesamtes gesammeltes Leder sofort selbst weiterverarbeiten kannst.'
    ],
    trainers: [
      {
        rank: 'Lehrling',
        range: 'Kürschnerei 1-75',
        requirement: 'ab Charakterlevel 1',
        alliance: ['Helene Peltskinner im Wald von Elwynn', 'Maris Granger in Stormwind', 'Eladriel in Darnassus', 'Balthus Stoneflayer in Ironforge'],
        horde: ['Rand Rhobart in Tirisfal', 'Yonn Deepcut in Mulgore', 'Thuwd in Orgrimmar', 'Killian Hagey in Undercity']
      },
      {
        rank: 'Geselle',
        range: 'Kürschnerei 75-150',
        requirement: 'ab Skill 50',
        alliance: ['Maris Granger in Stormwind', 'Balthus Stoneflayer in Ironforge'],
        horde: ['Thuwd in Orgrimmar', 'Killian Hagey in Undercity']
      },
      {
        rank: 'Experte',
        range: 'Kürschnerei 150-225',
        requirement: 'ab Skill 125',
        alliance: ['Maris Granger in Stormwind'],
        horde: ['Mooranta in Thunder Bluff']
      },
      {
        rank: 'Handwerker',
        range: 'Kürschnerei 225-300',
        requirement: 'ab Skill 200',
        alliance: ['Balthus Stoneflayer in Ironforge'],
        horde: ['Kulleg Stonehorn in Feralas']
      }
    ],
    shoppingList: [
      '1 Kürschnermesser (Handelswarenhändler)',
      '~80 Leichtes Leder',
      '~90 Grobes Leder',
      '~70 Mittleres Leder',
      '~80 Schweres Leder',
      '~60 Dickes Leder',
      'Diverse Schuppen (Deviate, Murloc, Skorpid) je nach Zone'
    ],
    recipes: [
      'Kürschnerei benötigt kein Extra-Rezept – kaufe lediglich ein Kürschnermesser bei einem Handelswarenhändler, bevor du losziehst.',
      'Ab Skill 300 helfen spezielle Messer wie Pips Kürschnermesser oder das Zulianische Messer (jeweils +10 Fertigkeit), um für Raid-Bosse bis Skill 315 zu kommen.'
    ],
    steps: [
      {
        range: '1-75',
        craft: 'Eber, Wölfe und Bären in den Startgebieten abhäuten',
        materials: 'Durotar, Wald von Elwynn, Dun Morogh, Mulgore, Tirisfal',
        note: 'Häute jede Kreatur ab, die du ohnehin beim Questen tötest.'
      },
      {
        range: '75-150',
        craft: 'Krokodilisken, Schleicher und Raptoren abhäuten',
        materials: 'Loch Modan, Westfall, Brachland',
        note: 'Lerne ab Skill 50 den Gesellen-Rang beim selben Kürschnerei-Trainer.'
      },
      {
        range: '150-225',
        craft: 'Panther, Tiger und Raptoren abhäuten',
        materials: 'Vorgebirge von Hillsbrad, Alterac-Tal, Schlingendorntal',
        note: 'Ab Skill 200 kannst du den Handwerker-Rang beim jeweiligen Kürschnerei-Trainer lernen.'
      },
      {
        range: '225-300',
        craft: 'Yetis und Dinosaurier abhäuten',
        materials: 'Hinterland, Brachland, Ödland, Un\'Goro-Krater',
        note: 'In diesen Zonen droppen zusätzlich Drachenschuppen (grün, blau, rot, schwarz) für Lederverarbeitung.'
      }
    ],
    tips: [
      'Mengenangaben sind Richtwerte: Verpasste Abhäutungen bei Gruppenkills können zusätzliche Runden nötig machen.',
      'Häute jede abhäutbare Kreatur ab, die du sowieso tötest – das kostet kaum Zeit und liefert konstantes Nebeneinkommen.',
      'Eine +Kürschnerei-Verzauberung auf dem Kürschnermesser (+5 Fertigkeit) beschleunigt vor allem die letzten Skillpunkte vor 300.',
      'Leder- und Schuppenpreise bleiben nach einem Auktionshaus-Reset wie bei Classic Fresh meist lange hoch – ein guter Zeitpunkt, um Überschüsse zu verkaufen statt selbst zu verarbeiten.'
    ]
  }
];
