export const farmingGuides = [
  {
    id: 'classic-herbs-tier1',
    title: 'Classic Herbs',
    tierLabel: 'Kräuterkunde 1-100',
    profession: 'Kräuterkunde',
    theme: '#75d15f',
    items: [
      {
        id: 'peacebloom',
        name: 'Peacebloom',
        icon: 'inv_misc_flower_02',
        skill: 'Kräuterkunde 1+',
        levelRange: 'Charakterlevel 1-15',
        zones: ['Wald von Elwynn', 'Durotar', 'Mulgore', 'Tirisfal', 'Dun Morogh', 'Teldrassil'],
        respawn: 'Sehr häufig, dichte Spawns entlang aller Startgebiets-Straßen und Wiesen.',
        summary: 'Das häufigste Kraut in Classic. Wächst in jeder Startzone und lässt sich ohne Umwege im Vorbeireiten mitnehmen.',
        tips: [
          'Ideal zum Einsammeln parallel zum Questen in der Startzone.',
          'Wird zusammen mit Silberblatt für den ersten Alchemie-Skillblock benötigt.'
        ]
      },
      {
        id: 'silverleaf',
        name: 'Silverleaf',
        icon: 'inv_misc_herb_10',
        skill: 'Kräuterkunde 1+',
        levelRange: 'Charakterlevel 1-15',
        zones: ['Wald von Elwynn', 'Durotar', 'Mulgore', 'Tirisfal', 'Dun Morogh', 'Teldrassil'],
        respawn: 'Sehr häufig, meist zusammen mit Peacebloom in denselben Spawnpunkten.',
        summary: 'Zweites Grundkraut der Startgebiete, oft direkt neben Peacebloom zu finden.',
        tips: [
          'Sammle es im selben Durchgang wie Peacebloom, die Spawns überschneiden sich stark.',
          'Wird für frühe Heiltränke und Elixiere gebraucht.'
        ]
      },
      {
        id: 'mageroyal',
        name: 'Mageroyal',
        icon: 'inv_jewelry_talisman_03',
        skill: 'Kräuterkunde 50+',
        levelRange: 'Charakterlevel 10-20',
        zones: ['Westfall', 'Rotkammgebirge', 'Loch Modan', 'Brachland', 'Eschental'],
        respawn: 'Häufig entlang offener Grasflächen abseits der Hauptwege.',
        summary: 'Erstes Kraut nach dem Lehrlings-Rang, wichtig für frühe Mana-Elixiere.',
        tips: [
          'Kombiniere Farmrouten mit Westfall- oder Loch-Modan-Questreihen.',
          'Wird für Elixier der Weisheit und frühe Manatränke benötigt.'
        ]
      },
      {
        id: 'briarthorn',
        name: 'Briarthorn',
        icon: 'inv_misc_root_01',
        skill: 'Kräuterkunde 70+',
        levelRange: 'Charakterlevel 15-25',
        zones: ['Loch Modan', 'Rotkammgebirge', 'Eschental', 'Steinkrallengebirge', 'Düsterwald'],
        respawn: 'Mittelhäufig, meist in bewaldeten oder felsigen Übergangszonen.',
        summary: 'Farmst du meist zusammen mit Mageroyal, da sich die Zonen überschneiden.',
        tips: [
          'Steinkrallengebirge liefert die dichtesten Spawns für Hordenspieler.',
          'Wird für Elixier der geringen Verteidigung gebraucht.'
        ]
      },
      {
        id: 'stranglekelp',
        name: 'Stranglekelp',
        icon: 'inv_misc_herb_11',
        skill: 'Kräuterkunde 85+',
        levelRange: 'Charakterlevel 15-30',
        zones: ['Westfall-Küste', 'Schlingendorntal', 'Dunkelküste', 'Durotar-Küste'],
        respawn: 'Nur im flachen Wasser entlang der Küstenlinien, dafür in Gruppen.',
        summary: 'Einziges Unterwasser-Kraut dieser Stufe. Am effizientesten mit Atemwasser oder Wasseratmung.',
        tips: [
          'Trinke einen Wasseratmungstrank, um ohne Auftauchen ganze Küstenabschnitte abzufarmen.',
          'Küstenlinien südlich von Westfall haben besonders dichte Spawns.'
        ]
      },
      {
        id: 'bruiseweed',
        name: 'Bruiseweed',
        icon: 'inv_misc_herb_01',
        skill: 'Kräuterkunde 100+',
        levelRange: 'Charakterlevel 20-35',
        zones: ['Düsterwald', 'Schlingendorntal (Norden)', 'Sümpfe des Elends (Rand)'],
        respawn: 'Mittelhäufig, oft an Waldrändern und Lichtungen.',
        summary: 'Übergangskraut zwischen Tier 1 und Tier 2, meist als Beifang beim Briarthorn-Farmen.',
        tips: [
          'Route durch Düsterwald deckt gleichzeitig Grabmoos und Wildstahlblume ab.',
          'Wird für Heiltrank-Rezepte der mittleren Stufe benötigt.'
        ]
      },
      {
        id: 'gravemoss',
        name: 'Grave Moss',
        icon: 'inv_misc_dust_02',
        skill: 'Kräuterkunde 100+',
        levelRange: 'Charakterlevel 20-35',
        zones: ['Düsterwald (Rabenhügel-Friedhof)', 'Westliche Pestländer'],
        respawn: 'Selten, an Friedhöfe und Grabsteine gebunden.',
        summary: 'Nur auf Friedhöfen und in Grabanlagen zu finden, daher deutlich seltener als andere Kräuter dieser Stufe.',
        tips: [
          'Rabenhügel-Friedhof in Düsterwald ist der verlässlichste Spot.',
          'Plane keine reine Grabmoos-Route, sondern sammle es als Beifang beim Fragenfarmen.'
        ]
      },
      {
        id: 'wildsteelbloom',
        name: 'Wild Steelbloom',
        icon: 'inv_misc_flower_01',
        skill: 'Kräuterkunde 115+',
        levelRange: 'Charakterlevel 20-35',
        zones: ['Düsterwald', 'Rotkammgebirge', 'Ödland', 'Arathihochland', 'Vorgebirge von Hillsbrad'],
        respawn: 'Häufig, dichte Spawns entlang offener Hügelflächen.',
        summary: 'Letztes Kraut der ersten Tier-1-Stufe, oft die verlässlichste Einnahmequelle für Kupfer- und Alchemiematerial.',
        tips: [
          'Arathihochland bietet lange, ununterbrochene Farmrouten.',
          'Notwendig für Erheblicher Heiltrank in späteren Alchemie-Schritten.'
        ]
      }
    ]
  },
  {
    id: 'classic-herbs-tier2',
    title: 'Classic Herbs',
    tierLabel: 'Kräuterkunde 100-185',
    profession: 'Kräuterkunde',
    theme: '#54c2e0',
    items: [
      {
        id: 'kingsblood',
        name: 'Kingsblood',
        icon: 'inv_misc_herb_03',
        skill: 'Kräuterkunde 125+',
        levelRange: 'Charakterlevel 25-40',
        zones: ['Rotkammgebirge', 'Düsterwald', 'Arathihochland', 'Schlingendorntal', 'Vorgebirge von Hillsbrad'],
        respawn: 'Häufig entlang offener Wege und Wiesen der mittleren Zonen.',
        summary: 'Einstiegskraut der zweiten Tier-Stufe mit breiter Zonenverteilung.',
        tips: [
          'Gute Kombination mit Königsblut-Routen in Arathihochland während der Questreihen.',
          'Wird für Erheblicher Heiltrank benötigt.'
        ]
      },
      {
        id: 'liferoot',
        name: 'Liferoot',
        icon: 'inv_misc_root_02',
        skill: 'Kräuterkunde 150+',
        levelRange: 'Charakterlevel 30-42',
        zones: ['Sumpfland', 'Arathihochland', 'Tausend Nadeln', 'Steinkrallengebirge', 'Eschental'],
        respawn: 'Mittelhäufig, bevorzugt feuchte Wiesen und Flussufer.',
        summary: 'Wächst zuverlässig entlang von Gewässern, besonders im Sumpfland.',
        tips: [
          'Sumpfland liefert dichte, zusammenhängende Spawn-Cluster.',
          'Zentrale Zutat für Elixier der großen Beweglichkeit.'
        ]
      },
      {
        id: 'fadeleaf',
        name: 'Fadeleaf',
        icon: 'inv_misc_herb_12',
        skill: 'Kräuterkunde 160+',
        levelRange: 'Charakterlevel 35-45',
        zones: ['Tausend Nadeln', 'Desolace', 'Rand von Feralas'],
        respawn: 'Mittelhäufig, meist auf erhöhten Plateaus und Felsvorsprüngen.',
        summary: 'Typisches Kraut der Steppen- und Wüstenzonen im mittleren Levelbereich.',
        tips: [
          'Die Plateaus von Tausend Nadeln bieten die dichteste Routenführung.',
          'Wird für Trank der Unsichtbarkeit gebraucht.'
        ]
      },
      {
        id: 'goldthorn',
        name: 'Goldthorn',
        icon: 'inv_misc_herb_15',
        skill: 'Kräuterkunde 170+',
        levelRange: 'Charakterlevel 35-45',
        zones: ['Arathihochland', 'Vorgebirge von Hillsbrad', 'Tausend Nadeln', 'Ödland'],
        respawn: 'Mittelhäufig entlang von Hügelketten und offenen Grasflächen.',
        summary: 'Farmst du am effizientesten zusammen mit Königsblut und Wildstahlblume in Arathihochland.',
        tips: [
          'Kombiniere die Route mit Trainerbesuchen in Refugium, falls du gleichzeitig Alchemie skillst.',
          'Wird für Elixier der großen Verteidigung benötigt.'
        ]
      },
      {
        id: 'khadgarswhisker',
        name: 'Khadgar’s Whisker',
        icon: 'inv_misc_herb_08',
        skill: 'Kräuterkunde 185+',
        levelRange: 'Charakterlevel 35-48',
        zones: ['Tausend Nadeln', 'Desolace', 'Arathihochland'],
        respawn: 'Mittelhäufig, oft zusammen mit Fadeleaf in denselben Zonen.',
        summary: 'Letztes Kraut vor dem Sprung in die Wüstenzonen der dritten Farmstufe.',
        tips: [
          'Desolace liefert die zuverlässigsten Spawns für Hordespieler.',
          'Wird für Überragender Heiltrank benötigt.'
        ]
      },
      {
        id: 'sungrass',
        name: 'Sungrass',
        icon: 'inv_misc_herb_18',
        skill: 'Kräuterkunde 190+',
        levelRange: 'Charakterlevel 38-50',
        zones: ['Desolace', 'Tausend Nadeln', 'Tanaris', 'Südlicher Brachland'],
        respawn: 'Mittelhäufig auf offenen Steppen- und Wüstenflächen.',
        summary: 'Vielseitiges Kraut, das in fast jeder Wüsten- und Steppenzone der mittleren Stufe vorkommt.',
        tips: [
          'Desolace-Routen lassen sich gut mit Ruf-Dailys für die Cenarius-Kreis kombinieren (später verfügbar).',
          'Wird für Elixier der großen Beweglichkeit und Überragenden Manatrank gebraucht.'
        ]
      },
      {
        id: 'firebloom',
        name: 'Firebloom',
        icon: 'inv_misc_herb_19',
        skill: 'Kräuterkunde 205+',
        levelRange: 'Charakterlevel 42-55',
        zones: ['Tanaris', 'Brennende Schlucht', 'Ödland'],
        respawn: 'Mittelhäufig, bevorzugt heiße, trockene und vulkanische Gebiete.',
        summary: 'Wächst nur in Wüsten- und Vulkanzonen, daher meist eine Reiseroute für sich.',
        tips: [
          'Brennende Schlucht liefert dichte Spawns, ist aber durch feindliche Elitegegner riskant.',
          'Wird für Feuerölerzeugung und Rüstungsverzauberungen benötigt.'
        ]
      },
      {
        id: 'purplelotus',
        name: 'Purple Lotus',
        icon: 'inv_misc_herb_17',
        skill: 'Kräuterkunde 210+',
        levelRange: 'Charakterlevel 45-60',
        zones: ['Tanaris', 'Desolace', 'Felwald', 'Un’Goro-Krater', 'Silithus'],
        respawn: 'Selten, meist als seltener Zusatz-Spawn neben anderen Kräutern.',
        summary: 'Eines der wertvollsten Farmkräuter in Classic, da es für Überragenden Manatrank und Todesbestien-Verzehr benötigt wird.',
        tips: [
          'Wird nur zusätzlich zu anderen Kräuterknoten gespawnt, also möglichst viele Knoten pro Route abfahren.',
          'Hoher Auktionshauswert macht es auch ohne Beruf lukrativ zum Verkauf.'
        ]
      }
    ]
  },
  {
    id: 'classic-herbs-tier3',
    title: 'Classic Herbs',
    tierLabel: 'Kräuterkunde 185-300',
    profession: 'Kräuterkunde',
    theme: '#c98bf0',
    items: [
      {
        id: 'blindweed',
        name: 'Blindweed',
        icon: 'inv_misc_herb_14',
        skill: 'Kräuterkunde 235+',
        levelRange: 'Charakterlevel 48-60',
        zones: ['Sümpfe des Elends', 'Dustwallow-Marschen', 'Sumpfland (vereinzelt)'],
        respawn: 'Selten, konzentriert auf Sumpf- und Moorflächen.',
        summary: 'Erstes Kraut der Endgame-Farmstufe, gebunden an feuchte Sumpfzonen.',
        tips: [
          'Sümpfe des Elends bietet die dichtesten Spawn-Cluster.',
          'Wird für Elixier der Schattenschutz und Trank des Nordwinds gebraucht.'
        ]
      },
      {
        id: 'ghostmushroom',
        name: 'Ghost Mushroom',
        icon: 'inv_mushroom_08',
        skill: 'Kräuterkunde 245+',
        levelRange: 'Charakterlevel 48-60',
        zones: ['Düsterwald (Rabenhügel-Höhlen)', 'Sumpfland (Höhlen)', 'Dustwallow-Marschen (Höhlen)'],
        respawn: 'Selten, ausschließlich in dunklen Höhlen und unterirdischen Bereichen.',
        summary: 'Einziges Kraut, das nur in Höhlen wächst, daher eine reine Höhlenfarm-Route.',
        tips: [
          'Fackel oder Nachtsicht-Trank hilft beim schnellen Erkennen der Pilze in dunklen Höhlen.',
          'Wird für Elixier der Untotenentdeckung benötigt.'
        ]
      },
      {
        id: 'gromsblood',
        name: 'Gromsblood',
        icon: 'inv_misc_herb_16',
        skill: 'Kräuterkunde 250+',
        levelRange: 'Charakterlevel 48-60',
        zones: ['Verwüstete Lande', 'Brennende Steppen', 'Brennende Schlucht', 'Sümpfe des Elends'],
        respawn: 'Mittelhäufig in vulkanischen und verwüsteten Randzonen.',
        summary: 'Wächst vor allem in den kargen Grenzzonen um Schwarzfels und die Verwüsteten Lande.',
        tips: [
          'Verwüstete Lande lässt sich gut mit Dunkeleisen-Farmrouten kombinieren.',
          'Wird für Elixier der großen Verteidigung (Endgame-Version) benötigt.'
        ]
      },
      {
        id: 'goldensansam',
        name: 'Golden Sansam',
        icon: 'inv_misc_herb_sansamroot',
        skill: 'Kräuterkunde 260+',
        levelRange: 'Charakterlevel 48-60',
        zones: ['Feralas', 'Tanaris', 'Un’Goro-Krater', 'Dustwallow-Marschen'],
        respawn: 'Mittelhäufig, breit über mehrere Endgame-Zonen verteilt.',
        summary: 'Vielseitiges Endgame-Kraut mit guter Verteilung über Feralas und Tanaris.',
        tips: [
          'Feralas-Routen lassen sich gut mit Fadenblatt-Sammeln aus Tier 2 kombinieren.',
          'Wird für Erheblicher Heiltrank benötigt.'
        ]
      },
      {
        id: 'dreamfoil',
        name: 'Dreamfoil',
        icon: 'inv_misc_herb_dreamfoil',
        skill: 'Kräuterkunde 270+',
        levelRange: 'Charakterlevel 50-60',
        zones: ['Felwald', 'Un’Goro-Krater', 'Winterquell', 'Mondlichtung'],
        respawn: 'Mittelhäufig in Wald- und Naturzonen um den Smaragdgrünen Traum.',
        summary: 'Zentrales Kraut für Raid-Tränke, konzentriert auf die späten Naturzonen.',
        tips: [
          'Felwald bietet die dichtesten Spawns nahe Fraktionsstützpunkten.',
          'Grundzutat für Trank der Vergänglichkeit und Elixier der Zauberkraft.'
        ]
      },
      {
        id: 'mountainsilversage',
        name: 'Mountain Silversage',
        icon: 'inv_misc_herb_mountainsilversage',
        skill: 'Kräuterkunde 280+',
        levelRange: 'Charakterlevel 50-60',
        zones: ['Un’Goro-Krater', 'Felwald', 'Winterquell', 'Brennende Steppen'],
        respawn: 'Mittelhäufig auf erhöhten, felsigen Abschnitten.',
        summary: 'Wächst bevorzugt an Berghängen und Hochebenen der Endgame-Zonen.',
        tips: [
          'Un’Goro-Krater liefert wegen der offenen Fläche die schnellste Route.',
          'Wird für Trank der großen Heilung benötigt.'
        ]
      },
      {
        id: 'icecap',
        name: 'Icecap',
        icon: 'inv_misc_herb_icecap',
        skill: 'Kräuterkunde 290+',
        levelRange: 'Charakterlevel 55-60',
        zones: ['Winterquell', 'Östliche Pestländer'],
        respawn: 'Selten, an Schnee- und Frostgebiete gebunden.',
        summary: 'Eines der letzten Kräuter vor Skill 300, nur in kalten Endgame-Zonen zu finden.',
        tips: [
          'Winterquell bietet die verlässlichste Route für dieses Kraut.',
          'Wird für Trank des Nordwinds benötigt.'
        ]
      },
      {
        id: 'sorrowmoss',
        name: 'Plaguebloom',
        icon: 'inv_misc_herb_plaguebloom',
        skill: 'Kräuterkunde 300',
        levelRange: 'Charakterlevel 58-60',
        zones: ['Östliche Pestländer', 'Westliche Pestländer'],
        respawn: 'Sehr selten, nur in den verseuchten Pestländern zu finden.',
        summary: 'Das seltenste reguläre Kraut in Classic und der letzte Schritt auf dem Weg zu Skill 300.',
        tips: [
          'Plane großzügige Zeit ein, da die Spawns in den Pestländern dünn gesät sind.',
          'Wird unter anderem für Trank der Seuchenmeisterschaft benötigt.'
        ]
      }
    ]
  },
  {
    id: 'classic-ores',
    title: 'Classic Ores',
    tierLabel: 'Bergbau 1-300',
    profession: 'Bergbau',
    theme: '#e0a24d',
    items: [
      {
        id: 'copper',
        name: 'Copper Ore',
        icon: 'inv_ore_copper_01',
        skill: 'Bergbau 1+',
        levelRange: 'Charakterlevel 1-15',
        zones: ['Wald von Elwynn', 'Durotar', 'Dun Morogh', 'Mulgore', 'Tirisfal'],
        respawn: 'Sehr häufig, dichte Vorkommen in jeder Startzone.',
        summary: 'Grundlegendes Erz aller Startgebiete, ausreichend für die ersten Skillpunkte.',
        tips: [
          'Sammle es parallel zum Questen, eigene Routen lohnen sich hier kaum.',
          'Wird auch für die ersten Schmiedekunst- und Ingenieurskunst-Rezepte benötigt.'
        ]
      },
      {
        id: 'tin',
        name: 'Tin Ore',
        icon: 'inv_ore_tin_01',
        skill: 'Bergbau 65+',
        levelRange: 'Charakterlevel 10-25',
        zones: ['Westfall', 'Loch Modan', 'Brachland', 'Rotkammgebirge'],
        respawn: 'Häufig, meist zusammen mit Kupfer in denselben Adern.',
        summary: 'Wird mit Kupfer zu Bronze verarbeitet und ist daher eines der meistgefragten frühen Erze.',
        tips: [
          'Westfall und Loch Modan liefern durchgehend gute Adernquoten.',
          'Behalte immer einen Vorrat für Bronzebarren bereit.'
        ]
      },
      {
        id: 'iron',
        name: 'Iron Ore',
        icon: 'inv_ore_iron_01',
        skill: 'Bergbau 125+',
        levelRange: 'Charakterlevel 20-40',
        zones: ['Sumpfland', 'Ödland', 'Rotkammgebirge', 'Arathihochland', 'Tausend Nadeln', 'Steinkrallengebirge'],
        respawn: 'Mittelhäufig, gut verteilt über mehrere mittlere Zonen.',
        summary: 'Kernerz der mittleren Levelphase, breit verfügbar über viele Zonen hinweg.',
        tips: [
          'Sumpfland-Routen liefern durch die Bergketten besonders viele Adern pro Runde.',
          'Sammle parallel Silber- und Goldadern, die häufig an denselben Spots vorkommen.'
        ]
      },
      {
        id: 'mithril',
        name: 'Mithril Ore',
        icon: 'inv_ore_mithril_02',
        skill: 'Bergbau 175+',
        levelRange: 'Charakterlevel 35-50',
        zones: ['Ödland', 'Brennende Schlucht', 'Arathihochland', 'Tausend Nadeln', 'Desolace', 'Tanaris'],
        respawn: 'Mittelhäufig, konzentriert in gebirgigen und wüstenartigen Zonen.',
        summary: 'Wichtigstes Erz für die Ausrüstung im mittleren bis späten Levelbereich.',
        tips: [
          'Brennende Schlucht bietet dichte Vorkommen, ist aber wegen Dunkeleisenzwergen gefährlicher.',
          'Wird für zahlreiche Rüstungs- und Waffenrezepte in Schmiedekunst benötigt.'
        ]
      },
      {
        id: 'thorium',
        name: 'Thorium Ore',
        icon: 'inv_ore_thorium_02',
        skill: 'Bergbau 230+',
        levelRange: 'Charakterlevel 50-60',
        zones: ['Un’Goro-Krater', 'Brennende Steppen', 'Winterquell', 'Silithus', 'Östliche Pestländer'],
        respawn: 'Mittelhäufig, dichteste Vorkommen in Un’Goro-Krater und Silithus.',
        summary: 'Das zentrale Endgame-Erz für Rüstungen, Waffen und Verzauberungsmaterialien.',
        tips: [
          'Un’Goro-Krater und Silithus lassen sich gut zu einer langen Route kombinieren.',
          'Behalte Ausschau nach Reichen Thorium-Adern für höhere Ausbeute.'
        ]
      },
      {
        id: 'dark iron ore',
        name: 'Dark Iron Ore',
        icon: 'inv_ore_mithril_01',
        skill: 'Bergbau 230+',
        levelRange: 'Charakterlevel 50-60',
        zones: ['Brennende Schlucht', 'Brennende Steppen', 'Schwarzfelstiefen'],
        respawn: 'Selten, oft von feindlichen Dunkeleisenzwergen bewacht.',
        summary: 'Seltenes Spezialerz, das nur in den Dunkeleisen-Gebieten rund um Schwarzfels vorkommt.',
        tips: [
          'Gruppenfarm empfohlen, da die Adern häufig von Elite-Zwergen bewacht werden.',
          'Wird für Dunkeleisenbarren und hochwertige Schmiedekunst-Rezepte benötigt.'
        ]
      }
    ]
  },
  {
    id: 'classic-leather',
    title: 'Classic Leather',
    tierLabel: 'Kürschnerei 1-300',
    profession: 'Kürschnerei',
    theme: '#b98a55',
    items: [
      {
        id: 'light',
        name: 'Light Leather',
        icon: 'inv_misc_leatherscrap_03',
        skill: 'Kürschnerei 1+',
        levelRange: 'Charakterlevel 1-20',
        zones: ['Wald von Elwynn', 'Durotar', 'Mulgore', 'Tirisfal', 'Westfall'],
        respawn: 'Sehr häufig, von nahezu jedem Tier der Startgebiete.',
        summary: 'Wird beim Kürschnern von Wölfen, Ebern und anderen Kreaturen niedriger Stufe erbeutet.',
        tips: [
          'Kürsche jedes Tier, das du sowieso beim Questen tötest.',
          'Grundmaterial für die ersten Lederrüstungsrezepte.'
        ]
      },
      {
        id: 'medium',
        name: 'Medium Leather',
        icon: 'inv_misc_leatherscrap_05',
        skill: 'Kürschnerei 100+',
        levelRange: 'Charakterlevel 20-35',
        zones: ['Rotkammgebirge', 'Loch Modan', 'Brachland', 'Eschental'],
        respawn: 'Häufig, von Tieren der mittleren Startgebiete.',
        summary: 'Nächste Lederstufe, farmbar an denselben Tieren, die auch Kraut- und Erzrouten kreuzen.',
        tips: [
          'Kombiniere die Route mit Wildstahlblume- oder Eisenerz-Farmen in denselben Zonen.',
          'Bewahre einen Vorrat für Taschen- und Rüstungsrezepte auf.'
        ]
      },
      {
        id: 'heavy',
        name: 'Heavy Leather',
        icon: 'inv_misc_leatherscrap_07',
        skill: 'Kürschnerei 150+',
        levelRange: 'Charakterlevel 35-45',
        zones: ['Sumpfland', 'Arathihochland', 'Tausend Nadeln', 'Schlingendorntal'],
        respawn: 'Mittelhäufig, aus dem Kürschnern von Schwerer Häute.',
        summary: 'Entsteht durch das Gerben von Schwerer Häute bei einem Kürschnerei-Lehrer.',
        tips: [
          'Sammle zuerst Schwere Häute im Feld und gerbe sie gebündelt beim Trainer.',
          'Wird für mittelschwere Lederrüstung benötigt.'
        ]
      },
      {
        id: 'thick',
        name: 'Thick Leather',
        icon: 'inv_misc_leatherscrap_08',
        skill: 'Kürschnerei 225+',
        levelRange: 'Charakterlevel 45-55',
        zones: ['Ödland', 'Desolace', 'Feralas', 'Tanaris', 'Felwald'],
        respawn: 'Mittelhäufig, von größeren Raubtieren und Bestien dieser Zonen.',
        summary: 'Wichtiges Material für spätere Lederrüstung und beliebte Taschenrezepte.',
        tips: [
          'Feralas und Tanaris bieten dichte Bestienpopulationen für effizientes Kürschnern.',
          'Hoher Auktionshauswert wegen der Nachfrage für Taschenrezepte.'
        ]
      },
      {
        id: 'rugged',
        name: 'Rugged Leather',
        icon: 'inv_misc_leatherscrap_02',
        skill: 'Kürschnerei 275+',
        levelRange: 'Charakterlevel 55-60',
        zones: ['Winterquell', 'Felwald', 'Brennende Steppen', 'Un’Goro-Krater', 'Silithus'],
        respawn: 'Mittelhäufig, von Endgame-Bestien dieser Zonen.',
        summary: 'Höchste reguläre Lederstufe in Classic, zentrale Zutat für Raid-taugliche Lederrüstung.',
        tips: [
          'Winterquell und Silithus bieten dichte Populationen kürschnerbarer Elite- und Normalmobs.',
          'Wird für hochwertige Schulter-, Brust- und Beinrüstung benötigt.'
        ]
      },
      {
        id: 'heavyhide',
        name: 'Heavy Hide',
        icon: 'inv_misc_pelt_wolf_ruin_03',
        skill: 'Kürschnerei 150+',
        levelRange: 'Charakterlevel 35-45',
        zones: ['Sumpfland', 'Arathihochland', 'Tausend Nadeln', 'Schlingendorntal'],
        respawn: 'Mittelhäufig, Rohmaterial vor dem Gerben zu Schwerem Leder.',
        summary: 'Rohe Haut, die erst bei einem Kürschnerei-Lehrer mit Salz zu Schwerem Leder gegerbt werden muss.',
        tips: [
          'Sammle mehrere Häute, bevor du zum Gerben in eine Stadt zurückkehrst.',
          'Ohne Gerben lässt sich die Haut nicht direkt für Rezepte verwenden.'
        ]
      }
    ]
  }
];
