export const reputationGuides = [
  {
    id: 'argent-dawn',
    name: 'Argentum-Dämmerung',
    side: 'Beide Fraktionen',
    type: 'Endgame-Kriegsfraktion',
    zone: 'Östliche Pestländer',
    theme: '#d9b46a',
    audience: 'Fortgeschritten',
    minutes: 24,
    summary:
      'Die wichtigste Endgame-Fraktion vor Naxxramas. Ruf kommt aus einer Questreihe rund um das Chillwind-Lager, wiederholbaren Kommissionierungen und dem Farmen von Scholomance/Stratholme, wo die meisten Turn-in-Materialien fallen.',
    startRequirement: 'Ab Stufe 51, Einstieg am Chillwind-Lager in den Östlichen Pestländern',
    grindLength: '1-2 Wochen',
    estimatedTime: '1-2 Wochen Gelegenheitsspiel bis Respektvoll, Ehrfürchtig ist ein Langzeitziel über mehrere Wochen',
    howTo: [
      'Die Einführungs-Questreihe rund um das Chillwind-Lager und Licht der Hoffnung-Kapelle abschließen',
      'Wiederholbare Kommissionierungen bei den Argentum-Wachposten annehmen und Untotenteile abgeben',
      'Scholomance und Stratholme regelmäßig farmen – dort droppen die meisten Turn-in-Materialien',
      'Sobald verfügbar: Naxxramas-Trash und -Bosse geben zusätzlich passiv Ruf'
    ],
    grindTargets: [
      'Untote Kreaturen in Scholomance, besonders auf dem Weg zu Instructor Razuvious',
      'Untote Kreaturen in Stratholme auf beiden Routen (Lebendige und Tote Seite)',
      'Kommissionsquests der Argentum-Wache, alle ca. 20 Minuten an mehreren Wachposten wiederholbar'
    ],
    keyQuests: [
      'Verteidigungs- und Einführungskette am Chillwind-Lager',
      'Crown-Guard-Questreihe bei Licht der Hoffnung-Kapelle',
      'Fortlaufende Kommissionsquests der Argentum-Wache'
    ],
    standings: [
      { rank: 'Freundlich', rewards: ['Zugang zum Argentum-Händler für Grundausrüstung und Reagenzien', 'Erste Verzauberungsrezepte für Waffen'] },
      { rank: 'Wohlwollend', rewards: ['Verzauberung Umhang – Größere Feuerresistenz', 'Ringe mit Ausdauer- und Widerstandsboni'] },
      { rank: 'Respektvoll', rewards: ['Verzauberung Waffe mit Zusatzschaden gegen Untote', 'Schmuckstücke mit Feuer-/Frostresistenz für die Naxxramas-Vorbereitung'] },
      { rank: 'Ehrfürchtig', rewards: ['Bestes verfügbares Widerstands-Zubehör für den Naxxramas-Einstieg', 'Voller Zugang zu allen Argentum-Rezepten'] }
    ],
    tips: [
      'Kombiniere Scholo-/Stratholme-Runs mit anderen Zielen wie Verzauberungsmaterial-Farmrunden',
      'Sammle Kommissionsmaterialien nebenbei beim normalen Dungeon-Loot ein – sie stapeln sich schnell',
      'Naxxramas-Progress braucht oft schon Wohlwollend/Respektvoll für Resistenz-Ausrüstung – früh genug starten'
    ]
  },
  {
    id: 'thorium-brotherhood',
    name: 'Thorium-Bruderschaft',
    side: 'Beide Fraktionen',
    type: 'Handwerks-Fraktion',
    zone: 'Winterspring',
    theme: '#b5651d',
    audience: 'Fortgeschritten',
    minutes: 22,
    summary:
      'Zentrale Schmiede- und Ingenieurs-Fraktion am Thorium-Punkt in Winterspring. Liefert hochwertige Rüstungs- und Waffenrezepte, die für viele Pre-Raid-BiS-Listen wichtig sind.',
    startRequirement: 'Ab Stufe 55, Einstieg am Thorium-Punkt-Lager in Winterspring',
    grindLength: '2-3 Wochen',
    estimatedTime: '2-3 Wochen bei regelmäßigem Elementar-Farmen bis Respektvoll',
    howTo: [
      'Die Einführungs-Questreihe rund um das Thorium-Punkt-Lager abschließen',
      'Wiederholbare Turn-ins am Vorposten: kristallisierte Feuer-, Erd- und Wasserelemente abgeben',
      'Zusatzquests des Fraktionsführers Lorekeeper Lydros regelmäßig annehmen'
    ],
    grindTargets: [
      'Elementare in Silithus, Winterspring, Feralas und der Brennenden Steppe farmen',
      'Kristalle von Elementarwächtern und Feuer-/Erdelementaren sammeln'
    ],
    keyQuests: [
      'Einführungskette am Thorium-Punkt-Lager',
      'Wiederholbare Reihe der kristallisierten Elemente',
      'Vorquests für den Zugang zum Blackrock-Schmiedemeister'
    ],
    standings: [
      { rank: 'Freundlich', rewards: ['Grundrezepte für Rüstschmiede und Waffenschmiede'] },
      { rank: 'Wohlwollend', rewards: ['Rezept für Zwergenschlangen-Sprengfallen', 'Verbesserte Rüstungsplan-Rezepte'] },
      { rank: 'Respektvoll', rewards: ['Feuerfeste Rüstungsteile für Molten-Core-Vorbereitung', 'Höherwertige Schmiederezepte'] },
      { rank: 'Ehrfürchtig', rewards: ['Endgame-Schmiederezepte für Tank- und DD-Sets', 'Voller Zugang zum kompletten Rezeptkatalog'] }
    ],
    tips: [
      'Sehr wertvoll für Schmiede und Ingenieure – vor dem ersten Raid-Einstieg priorisieren',
      'Elementar-Farmrouten mit anderen Ruf- oder Materialzielen in derselben Zone kombinieren'
    ]
  },
  {
    id: 'timbermaw-hold',
    name: 'Klauholz-Feste',
    side: 'Beide Fraktionen',
    type: 'Zugangs-Fraktion',
    zone: 'Fellwald & Winterspring',
    theme: '#5a7247',
    audience: 'Fortgeschritten',
    minutes: 18,
    summary:
      'Schaltet den direkten Weg durch die Klauholz-Feste zwischen Fellwald und Winterspring frei und liefert solide Zwischenstufen-Ausrüstung für die Levelphase 50-58.',
    startRequirement: 'Ab Stufe 48, Furbolgs greifen dich zunächst feindselig an',
    grindLength: '~1 Woche',
    estimatedTime: '1 Woche bei regelmäßigem Turn-in-Farmen bis Respektvoll',
    howTo: [
      'Die Fellwald-Questreihe der Klauholz-Furbolgs abschließen, um Feindseligkeit zu beenden',
      'Wiederholbare Turn-ins am Vorposten: Grollhufhörner und Felsenkiefer-Zähne abgeben',
      'Optional das Buch der Furbolg-Sprache abschließen, um Zugang zu allen Händlern zu erhalten'
    ],
    grindTargets: [
      'Grollhuf-Furbolgs im Fellwald farmen',
      'Felsenkiefer-Furbolgs in Winterspring farmen'
    ],
    keyQuests: [
      'Einführungskette am Vorposten der Klauholz-Feste',
      'Buch-der-Sprache-Reihe',
      'Wiederholbare Hornsammel-Quest'
    ],
    standings: [
      { rank: 'Freundlich', rewards: ['Freier Durchgang durch das Gebiet ohne Angriffe', 'Grundhändler-Zugang'] },
      { rank: 'Wohlwollend', rewards: ['Direkte Winterspring-Abkürzung durch die Feste', 'Weitere Händler-Freischaltung'] },
      { rank: 'Respektvoll', rewards: ['Verzauberungsrezepte und Trinkets für die Levelphase'] },
      { rank: 'Ehrfürchtig', rewards: ['Seltene Umhänge und Ringe', 'Volle Freischaltung aller Klauholz-Händler'] }
    ],
    tips: [
      'Ohne Fortschritt greifen dich Furbolgs sofort an – zuerst die Einführungsquest starten',
      'Guter Nebeneffekt-Ruf beim normalen Leveln in Fellwald und Winterspring'
    ]
  },
  {
    id: 'zandalar-tribe',
    name: 'Zandalar-Stamm',
    side: 'Beide Fraktionen',
    type: 'Raid-Ruf (Zul’Gurub)',
    zone: 'Vorgebirge des Donners, Schlingendorntal',
    theme: '#7a4fae',
    audience: 'Experte',
    minutes: 20,
    summary:
      'Ruf-Fraktion rund um Zul’Gurub. Die Befreiung des Gefangenen Yenniku gibt einen großen Startbonus, danach liefert jeder Zul’Gurub-Bosskill weiteren Ruf für Verzauberungen und den Zugang zu den seltenen Reittier-Drops.',
    startRequirement: 'Ab Stufe 60, Einführungskette in Schlingendorntal am Rand von Zul’Gurub',
    grindLength: '3-6 ZG-Runs',
    estimatedTime: '3-6 Zul’Gurub-Runs bis Respektvoll, Ehrfürchtig erfordert regelmäßiges Farmen',
    howTo: [
      'Den Gefangenen Yenniku in Schlingendorntal befreien – gibt einen großen Ruf-Sprung und schaltet ihn als Händler frei',
      'Zul’Gurub-Bosse töten, jeder Boss gibt spürbaren Ruf',
      'Regelmäßige Zul’Gurub-Runs für kontinuierlichen Fraktionsfortschritt einplanen'
    ],
    grindTargets: [
      'Zul’Gurub-Bosskills als Hauptquelle',
      'Bonus- und Eskortquests innerhalb von Zul’Gurub'
    ],
    keyQuests: [
      'Befreiungskette um den Gefangenen Yenniku',
      'Zul’Gurub-Einführungsquests bei den Wachposten'
    ],
    standings: [
      { rank: 'Freundlich', rewards: ['Yenniku als Händler freigeschaltet', 'Grundrezepte'] },
      { rank: 'Wohlwollend', rewards: ['Verzauberungsrezepte mit Waffenschaden', 'Erste Schmuckstück-Rezepte'] },
      { rank: 'Respektvoll', rewards: ['Seltene Schmuck- und Verzauberungsrezepte'] },
      { rank: 'Ehrfürchtig', rewards: ['Voraussetzung, um die seltenen Zul’Gurub-Reittiere (Tiger/Raptor) von Bossen bewürfeln zu dürfen', 'Beste verfügbare Zul’Gurub-Rezepte'] }
    ],
    tips: [
      'Yenniku so früh wie möglich befreien – der Ruf-Sprung ist erheblich',
      'Für die Reittier-Drops brauchst du Ehrfürchtig, bevor der jeweilige Boss überhaupt würfelbar ist'
    ]
  },
  {
    id: 'hydraxian-waterlords',
    name: 'Hydraxische Wasserfürsten',
    side: 'Beide Fraktionen',
    type: 'Raid-Ruf (Feuerlande / Kern)',
    zone: 'Azshara',
    theme: '#2f7ac9',
    audience: 'Experte',
    minutes: 20,
    summary:
      'Fraktion am Feuerdüsen-Vorposten in Azshara, die Feuerresistenz-Zubehör für den Ragnaros-Kampf liefert und zentrale Vorquests für Feuerlande-bezogene Belohnungen freischaltet.',
    startRequirement: 'Ab Stufe 60, Einführungskette am Feuerdüsen-Vorposten in Azshara',
    grindLength: 'Mit MC-Progress',
    estimatedTime: 'Läuft meist parallel zum Molten-Core-Fortschritt über mehrere Wochen',
    howTo: [
      'Die Einführungs-Questreihe am Feuerdüsen-Vorposten abschließen',
      'Molten-Core-Bosskills geben passiv Ruf bei jedem Clear',
      'Kernhundfell an den Questgeber abgeben – wiederholbare Turn-ins zwischen Runs'
    ],
    grindTargets: [
      'Kernhunde und Feuerelementare im Vorbereich der Feuerlande',
      'Molten-Core-Trash und -Bosse'
    ],
    keyQuests: [
      'Einführungskette am Feuerdüsen-Vorposten',
      'Fellabgabe-Reihe für Ruf und Zwischenbelohnungen',
      'Vorquests für die Amulett-Reihe gegen Feuerschaden'
    ],
    standings: [
      { rank: 'Freundlich', rewards: ['Grundhändler und Reagenzien'] },
      { rank: 'Wohlwollend', rewards: ['Feuerresistenz-Ringe'] },
      { rank: 'Respektvoll', rewards: ['Feuerresistenz-Umhang und -Schmuck'] },
      { rank: 'Ehrfürchtig', rewards: ['Bestes Feuerresistenz-Zubehör für den Ragnaros-Kampf', 'Zugang zu allen Vorquests der Onyxia-Umhang-Reihe'] }
    ],
    tips: [
      'Ruf läuft meist automatisch mit dem Molten-Core-Fortschritt – kein separater Grind nötig',
      'Frühzeitig anfangen, wenn deine Gruppe die Sulfuras- oder Onyxia-Umhang-Questreihe plant'
    ]
  },
  {
    id: 'brood-of-nozdormu',
    name: 'Brut des Nozdormu',
    side: 'Beide Fraktionen',
    type: 'Kriegseinsatz (Ahn’Qiraj)',
    zone: 'Silithus',
    theme: '#c47a2c',
    audience: 'Experte',
    minutes: 20,
    summary:
      'Zweite Ahn’Qiraj-Kriegseinsatz-Fraktion. Ruf kommt aus täglichen Kriegseinsatzquests und Ahn’Qiraj-Bosskills und ist Voraussetzung für mehrere klassenspezifische Legendär-/Episch-Waffenreihen.',
    startRequirement: 'Ab Stufe 60, Einstieg über die Kriegseinsatz-Questreihe in Silithus',
    grindLength: 'Mehrere Wochen',
    estimatedTime: 'Mehrere Wochen bei täglichem Kriegseinsatz-Quest',
    howTo: [
      'Tägliche Ahn’Qiraj-Kriegseinsatzquests in Silithus abschließen',
      'Ahn’Qiraj-20 und -40 Bosskills geben zusätzlichen Ruf',
      'Skarabäenmünzen sammeln und beim Questgeber abgeben'
    ],
    grindTargets: [
      'Sandwurm- und Qiraji-Ziele der täglichen Kriegseinsatzquests in Silithus',
      'Ahn’Qiraj-Bosskills'
    ],
    keyQuests: [
      'Tägliche Kriegseinsatz-Reihe der Brut des Nozdormu',
      'Vorquests für klassenspezifische Legendär-/Episch-Waffenreihen'
    ],
    standings: [
      { rank: 'Freundlich', rewards: ['Grundrezepte'] },
      { rank: 'Wohlwollend', rewards: ['Skarabäus-Schmuck mit Grundstats'] },
      { rank: 'Respektvoll', rewards: ['Verbesserte Anhänger mit höherem Rüstungswert'] },
      { rank: 'Ehrfürchtig', rewards: ['Seltene Halsketten und Ringe mit hoher Rüstung', 'Voraussetzung für einige Klassen-Questreihen'] }
    ],
    tips: [
      'Guter Nebeneffekt beim täglichen Ahn’Qiraj-Kriegseinsatz für Silithus-Buffs',
      'Mit Cenarion Circle parallel farmen, da beide Fraktionen in derselben Zone leveln'
    ]
  },
  {
    id: 'cenarion-circle',
    name: 'Cenarius-Kreis',
    side: 'Beide Fraktionen',
    type: 'Kriegseinsatz (Ahn’Qiraj)',
    zone: 'Silithus',
    theme: '#3f8f4f',
    audience: 'Experte',
    minutes: 20,
    summary:
      'Erste Ahn’Qiraj-Kriegseinsatz-Fraktion rund um Cenarion Hold. Liefert Naturschutz-Ausrüstung für Heiler und Caster und trägt zum serverweiten Fortschritt des Tors nach Ahn’Qiraj bei.',
    startRequirement: 'Ab Stufe 60, Einstieg über die Silithus-Questreihe bei Cenarion Hold',
    grindLength: 'Mehrere Wochen',
    estimatedTime: 'Mehrere Wochen bei täglichem Kriegseinsatz-Quest',
    howTo: [
      'Die Silithus-Questreihe rund um Cenarion Hold abschließen',
      'Tägliche Kriegseinsatz-Ressourcenquests erledigen',
      'Ahn’Qiraj-20-Bosskills geben zusätzlichen Ruf'
    ],
    grindTargets: [
      'Tägliche Ressourcen-Lieferquests in Silithus',
      'Ahn’Qiraj-20-Bosskills'
    ],
    keyQuests: [
      'Einführungskette bei Cenarion Hold',
      'Tägliche Ressourcen-Lieferquests',
      'Vorquests für den serverweiten Ahn’Qiraj-Toröffnungs-Fortschritt'
    ],
    standings: [
      { rank: 'Freundlich', rewards: ['Grundhändler und Erste-Hilfe-Rezepte'] },
      { rank: 'Wohlwollend', rewards: ['Naturschutz-Schmuck mit Grundstats'] },
      { rank: 'Respektvoll', rewards: ['Verbesserte Trinkets mit Zaubermacht'] },
      { rank: 'Ehrfürchtig', rewards: ['Starke Heiler- und Caster-Trinkets', 'Zugang zu allen Kriegseinsatz-Vorteilen der Fraktion'] }
    ],
    tips: [
      'Tägliche Kriegseinsatzquests sind pro Account limitiert – langfristig einplanen',
      'Wichtig für den serverweiten Fortschritt der Ahn’Qiraj-Toröffnung'
    ]
  },
  {
    id: 'wintersaber-trainers',
    name: 'Wintersäbler-Lehrmeister',
    side: 'Allianz',
    type: 'Reittier-Fraktion',
    zone: 'Winterspring',
    theme: '#7fc4d9',
    audience: 'Einsteiger',
    minutes: 16,
    summary:
      'Reine Zeitinvestition ohne Kampf: eine sich wiederholende Eskort- und Sammelquest-Rotation am Wintersäbler-Lager, die am Ende das begehrte Wintersäbler-Reittier freischaltet.',
    startRequirement: 'Ab Stufe 40, Einstieg am Wintersäbler-Lager in Winterspring',
    grindLength: 'Mehrere Wochen',
    estimatedTime: 'Mehrere Wochen bei täglichem Questzyklus, ca. 30-50 Stunden Gesamtaufwand',
    howTo: [
      'Die rotierende Eskort- und Sammelquestkette am Wintersäbler-Lager jeden Zyklus abschließen (ca. eine Stunde pro Durchlauf)',
      'Den Zyklus regelmäßig wiederholen, bis Ehrfürchtig erreicht ist'
    ],
    grindTargets: [
      'Keine Mobs – reiner Quest-Loop mit Eskorten und Materialsammlung am Wintersäbler-Lager'
    ],
    keyQuests: [
      'Rotierende Tagesquest-Kette am Wintersäbler-Lager'
    ],
    standings: [
      { rank: 'Freundlich', rewards: ['Zugang zur Questrotation'] },
      { rank: 'Wohlwollend', rewards: ['Zwischenbelohnungen wie Ausrüstung und Gold'] },
      { rank: 'Respektvoll', rewards: ['Weitere Ausrüstungs-Zwischenbelohnungen'] },
      { rank: 'Ehrfürchtig', rewards: ['Kaufbares Wintersäbler-Reittier mit Sprintfähigkeit'] }
    ],
    tips: [
      'Reiner Zeitgrind – kein Kampf nötig, ideal als Nebenbeschäftigung beim Leveln in Winterspring',
      'Nur für Allianz-Charaktere verfügbar, Horde hat in Classic keine direkte Entsprechung'
    ]
  },
  {
    id: 'ravenholdt',
    name: 'Rabenhold',
    side: 'Beide Fraktionen',
    type: 'Schurken-Fraktion',
    zone: 'Hochland von Hillsbrad',
    theme: '#8a2c3b',
    audience: 'Fortgeschritten',
    minutes: 14,
    summary:
      'Kleine, aber für Schurken wertvolle Fraktion. Liefert die stärkeren Giftrezepte und ist vor allem beim Twinken und für PvE-Progress relevant.',
    startRequirement: 'Ab Stufe 35, Einführungsquest bei Rabenhold-Anwesen im Hochland von Hillsbrad',
    grindLength: 'Mehrere Wochen',
    estimatedTime: 'Mehrere Wochen bei gelegentlichem Turn-in-Farmen',
    howTo: [
      'Die Einführungsquest bei Rabenhold-Anwesen annehmen',
      'Beutestücke und Diebesgut-Bündel, die gelegentlich von Humanoiden im Hochland von Hillsbrad und Wetterlicht fallen, beim Rabenhold-Questgeber abgeben'
    ],
    grindTargets: [
      'Humanoide Gegner im Hochland von Hillsbrad und Wetterlicht für Diebesgut-Drops'
    ],
    keyQuests: [
      'Einführungsquest bei Rabenhold-Anwesen'
    ],
    standings: [
      { rank: 'Freundlich', rewards: ['Zugang zum Rabenhold-Händler'] },
      { rank: 'Wohlwollend', rewards: ['Grundlegende Giftrezepte'] },
      { rank: 'Respektvoll', rewards: ['Stärkere Giftrezepte für PvE und PvP'] },
      { rank: 'Ehrfürchtig', rewards: ['Höchststufige Giftrezepte der Fraktion'] }
    ],
    tips: [
      'Für Nicht-Schurken kaum relevant – primär eine Schurken-Fraktion',
      'Guter Nebeneffekt-Ruf beim Leveln im Hochland von Hillsbrad'
    ]
  },
  {
    id: 'bloodsail-buccaneers',
    name: 'Blutsegel-Piraten',
    side: 'Beide Fraktionen',
    type: 'Sonderfraktion (invers)',
    zone: 'Küstenzonen von Kalimdor und den Östlichen Königreichen',
    theme: '#4a1f1f',
    audience: 'Experte',
    minutes: 16,
    summary:
      'Einzigartige inverse Fraktion: Ruf bei den Blutsegel-Piraten steigt durch das Töten von Piraten und Versenken ihrer Schiffe, senkt aber gleichzeitig den Ruf bei allen vier Steamwheedle-Kartell-Häfen bis auf Verhasst.',
    startRequirement: 'Beliebige Stufe, aber unumkehrbare Konsequenzen für den Kartell-Ruf beachten',
    grindLength: 'Wenige Tage',
    estimatedTime: 'Wenige Tage gezieltes Piraten-Farmen bis Ehrfürchtig',
    howTo: [
      'Blutsegel-Piraten in Tanaris, Schlingendorntal und weiteren Küstenzonen töten',
      'Blutsegel-Schiffe entlang der Küsten versenken'
    ],
    grindTargets: [
      'Blutsegel-Piraten-Lager in Tanaris und Schlingendorntal',
      'Patrouillierende Blutsegel-Schiffe'
    ],
    keyQuests: [
      'Kein klassischer Questpfad – reiner Kill-basierter Fraktionsruf'
    ],
    standings: [
      { rank: 'Freundlich', rewards: ['Erste Piratenausrüstungsteile'] },
      { rank: 'Wohlwollend', rewards: ['Weitere Piratenausrüstung'] },
      { rank: 'Respektvoll', rewards: ['Piratenwaffen'] },
      { rank: 'Ehrfürchtig', rewards: ['Episches Piratenschwert', 'Blutsegel-Papagei als Begleiter'] }
    ],
    tips: [
      'Senkt gleichzeitig den Ruf bei Beutebucht, Gadgetzan, Eiskronen-Ausguck und Ratschet auf Verhasst',
      'Nur für Sammler und Twink-Ausrüstung sinnvoll, nicht für normalen Endgame-Progress',
      'Vor dem Start Flugpunkte und Händlerzugang bei den Kartell-Städten sichern'
    ]
  },
  {
    id: 'steamwheedle-cartel',
    name: 'Steamwheedle-Kartell',
    side: 'Beide Fraktionen',
    type: 'Handelsfraktionen',
    zone: 'Beutebucht, Gadgetzan, Eiskronen-Ausguck, Ratschet',
    theme: '#d4a72c',
    audience: 'Einsteiger',
    minutes: 14,
    summary:
      'Vier unabhängige Goblin-Handelsstädte mit jeweils eigenem Ruf. Wichtig für Flugpunkt-Zugang, Bankfächer und Händlerrabatte in allen vier Städten.',
    startRequirement: 'Keine, Ruf startet neutral in jeder der vier Städte',
    grindLength: 'Nebenbei',
    estimatedTime: 'Läuft meist nebenbei beim normalen Leveln der jeweiligen Zonen',
    howTo: [
      'Lokale Questreihen in jeder der vier Städte abschließen',
      'Allgemeine Quests in der Umgebung (Tanaris, Feralas, Winterspring, Brachland) geben zusätzlich Ruf zur jeweils nächsten Stadt',
      'Blutsegel-Piraten meiden, da sie den Kartell-Ruf senken'
    ],
    grindTargets: [
      'Standard-Questreihen in Tanaris (Gadgetzan), Feralas (Eiskronen-Ausguck), Winterspring (Everlook/Eiskronen) und Brachland (Beutebucht/Ratschet)'
    ],
    keyQuests: [
      'Städtische Einführungsquests in Beutebucht, Gadgetzan, Eiskronen-Ausguck und Ratschet'
    ],
    standings: [
      { rank: 'Freundlich', rewards: ['Flugmeister-Zugang'] },
      { rank: 'Wohlwollend', rewards: ['Bankzugang in der jeweiligen Stadt'] },
      { rank: 'Respektvoll', rewards: ['Rabatte bei Händlern'] },
      { rank: 'Ehrfürchtig', rewards: ['Maximale Handelsrabatte', 'Zugang zu seltenen Handelswaren'] }
    ],
    tips: [
      'Ruf ist pro Stadt getrennt – für volle Reisefreiheit alle vier Fraktionen anpeilen',
      'Läuft meist automatisch beim normalen Leveln in den jeweiligen Zonen mit'
    ]
  },
  {
    id: 'darkmoon-faire',
    name: 'Dunkelmond-Jahrmarkt',
    side: 'Beide Fraktionen',
    type: 'Sonderfraktion',
    zone: 'Wechselnder Standort (Mulgore, Elwynnwald, Brachland)',
    theme: '#8a4fae',
    audience: 'Einsteiger',
    minutes: 14,
    summary:
      'Alle zwei Wochen erscheinender Wanderjahrmarkt. Ruf kommt aus dem Abgeben von Jahrmarkt-Tickets und liefert einzigartige Verzauberungen und Trinkets, die es nirgendwo sonst gibt.',
    startRequirement: 'Keine feste Stufe, viele Belohnungen sind erst ab Stufe 30+ sinnvoll',
    grindLength: 'Mehrere Zyklen',
    estimatedTime: 'Mehrere Jahrmarkt-Zyklen (jeweils zwei Wochen Abstand) bis Ehrfürchtig',
    howTo: [
      'Jahrmarkt-Tickets sammeln und beim Postboten am Jahrmarkt abgeben',
      'Glücksspiel- und Minispielbuden besuchen für zusätzliche Tickets',
      'Wiederkehrende Quests bei jedem Jahrmarkt-Besuch erledigen'
    ],
    grindTargets: [
      'Ticket-Sammelquests und Minispiele während der aktiven Jahrmarkt-Woche'
    ],
    keyQuests: [
      'Wiederkehrende Ticket-Abgabequests bei jedem Jahrmarkt-Zyklus'
    ],
    standings: [
      { rank: 'Freundlich', rewards: ['Grundverzauberungen'] },
      { rank: 'Wohlwollend', rewards: ['Seltene Trinkets'] },
      { rank: 'Respektvoll', rewards: ['Starke Klassenverzauberungen, z. B. für Waffen'] },
      { rank: 'Ehrfürchtig', rewards: ['Exklusive Jahrmarkt-Trinkets und Reittier-Vorstufen'] }
    ],
    tips: [
      'Der Jahrmarkt ist nur etwa eine Woche alle zwei Wochen verfügbar – Ticket-Vorrat vorher anlegen',
      'Guter Nebenschauplatz für Twinks dank niedriger Levelanforderungen'
    ]
  },
  {
    id: 'warsong-silverwing',
    name: 'Kriegshymnenschlucht-Fraktionen',
    side: 'Beide Fraktionen',
    type: 'PvP-Fraktion',
    zone: 'Kriegshymnenschlucht (Battleground)',
    theme: '#4f8a3f',
    audience: 'Fortgeschritten',
    minutes: 16,
    summary:
      'Silberschwingen-Wildhüterinnen (Allianz) und Kriegshymnen-Kundschafter (Horde) sind die Battleground-Fraktionen der Kriegshymnenschlucht. Ruf und Ehre-Rang laufen parallel und schalten zusammen komplette PvP-Sets frei.',
    startRequirement: 'Ab Stufe 60 für volle Belohnungen, Battleground selbst ab Stufe 51 spielbar',
    grindLength: 'Mehrere Wochen',
    estimatedTime: 'Mehrere Wochen regelmäßiges Kriegshymnenschlucht-Spielen bis Respektvoll',
    howTo: [
      'Kriegshymnenschlucht-Runden gewinnen – gibt den größten Ruf-Bonus',
      'Flaggen erobern und verteidigen für zusätzlichen Ruf während der Runde',
      'Auch Niederlagen geben etwas Ruf, deutlich weniger als Siege'
    ],
    grindTargets: [
      'Regelmäßige Kriegshymnenschlucht-Warteschlange, idealerweise mit organisierter Gruppe'
    ],
    keyQuests: [
      'Keine klassischen Questreihen – reiner Battleground-basierter Ruf'
    ],
    standings: [
      { rank: 'Freundlich', rewards: ['Erste PvP-Ausrüstungsteile'] },
      { rank: 'Wohlwollend', rewards: ['Weitere Rüstungsteile des PvP-Sets'] },
      { rank: 'Respektvoll', rewards: ['Waffen-Sets der Fraktion'] },
      { rank: 'Ehrfürchtig', rewards: ['Komplettes PvP-Set-Ziel in Kombination mit ausreichendem Ehre-Rang'] }
    ],
    tips: [
      'Ruf und Ehre-Rang laufen parallel – viele Setteile brauchen beide Voraussetzungen',
      'Premade-Gruppen gewinnen deutlich mehr Runden und beschleunigen den Ruf erheblich'
    ]
  },
  {
    id: 'capital-city-factions',
    name: 'Hauptstadt- & Rassenfraktionen',
    side: 'Beide Fraktionen',
    type: 'Hauptstadt-Fraktionen',
    zone: 'Alle Hauptstädte und Startgebiete',
    theme: '#c9a86a',
    audience: 'Einsteiger',
    minutes: 12,
    summary:
      'Sammel-Guide für die acht Hauptstadt-Fraktionen (Sturmwind, Eisenschmiede, Gnomeregan-Exilanten, Darnassus für die Allianz; Orgrimmar, Donnerfels, Unterstadt, Dunkelspeer-Trolle für die Horde). Ruf steigt fast ausschließlich nebenbei beim normalen Leveln.',
    startRequirement: 'Keine, Ruf startet je nach Rasse unterschiedlich hoch',
    grindLength: 'Nebenbei',
    estimatedTime: 'Meist "nebenbei" beim normalen Durchleveln erreicht, gezielter Endgrind nur für Exaltiert nötig',
    howTo: [
      'Startgebiets- und Hauptstadt-Questreihen der eigenen Rasse abschließen',
      'Fraktionsübergreifende Quests in gegnerischen Gebieten geben teils ebenfalls etwas Ruf',
      'Bosskills in manchen Classic-Dungeons geben Bonus-Ruf zur zugehörigen Hauptstadt'
    ],
    grindTargets: [
      'Kein dedizierter Grind nötig, normale Levelquests reichen meist bis Respektvoll',
      'Für Exaltiert: gezielt weitere Questreihen der jeweiligen Rasse abschließen oder Dungeon-Bosse mit Bonus-Ruf wiederholen'
    ],
    keyQuests: [
      'Startgebiets-Questreihen der jeweiligen Rasse',
      'Hauptstadt-Questreihen und gelegentliche Bündnisquests'
    ],
    standings: [
      { rank: 'Freundlich', rewards: ['Standardzugang zu Handwerkslehrern'] },
      { rank: 'Wohlwollend', rewards: ['Rabatte bei Händlern'] },
      { rank: 'Respektvoll', rewards: ['Seltene Handwerksrezepte der Rasse'] },
      { rank: 'Ehrfürchtig', rewards: ['Exaltiertes Rassen-Reittier (z. B. Kodo, Wolf, Tiger oder Widder) zum vollen Rabattpreis'] }
    ],
    tips: [
      'Wird meist automatisch beim normalen Leveln erreicht',
      'Nur relevant, wenn du gezielt das exaltierte Rassen-Reittier oder maximale Händlerrabatte willst'
    ]
  }
];
