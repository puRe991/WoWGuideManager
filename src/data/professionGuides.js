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
  }
];
