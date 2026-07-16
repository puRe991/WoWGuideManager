const classicReputationGuides = [
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

const tbcReputationGuides = [
  {
    id: 'honor-hold-thrallmar',
    name: 'Honor Hold & Thrallmar',
    side: 'Beide Fraktionen',
    type: 'Hub-Fraktion (Hellfire Peninsula)',
    zone: 'Hellfire Peninsula',
    theme: '#b33a2e',
    audience: 'Einsteiger',
    minutes: 18,
    summary:
      'Die ersten Fraktionen nach dem Dark Portal: Honor Hold für die Allianz, Thrallmar für die Horde. Der komplette Levelweg durch Hellfire Peninsula füllt den Ruf fast von allein, zusätzlich gibt es wiederholbare Beute-Turn-ins für Nachzügler.',
    startRequirement: 'Ab Stufe 58, Einstieg direkt am Dark Portal in Hellfire Peninsula',
    grindLength: '1 Levelphase',
    estimatedTime: 'Läuft meist automatisch während des Levelns von 58-63 in Hellfire Peninsula mit, Respektvoll braucht meist etwas gezieltes Nacharbeiten',
    howTo: [
      'Die komplette Hellfire-Peninsula-Questreihe rund um Honor Hold bzw. Thrallmar abschließen',
      'Wiederholbare Beuteabgaben (erbeutete Fel-Orc-Kriegspläne) beim Quartiermeister einreichen',
      'Hellfire-Citadel-Dungeons (Ramparts, The Blood Furnace, The Shattered Halls) laufen für zusätzlichen Ruf mit'
    ],
    grindTargets: [
      'Fel-Orc-Lager in Hellfire Peninsula für wiederholbare Kriegsplan-Turn-ins',
      'Ramparts-, Blood-Furnace- und Shattered-Halls-Bosskills'
    ],
    keyQuests: [
      'Einführungskette am Honor Hold bzw. Thrallmar direkt nach dem Dark Portal',
      'Zonenabschluss-Questreihe rund um The Shattered Halls und die Magtheridon’s-Lair-Vorbereitung'
    ],
    standings: [
      { rank: 'Freundlich', rewards: ['Grundausrüstung und Reagenzien beim Fraktionshändler'] },
      { rank: 'Wohlwollend', rewards: ['Verbesserte Ringe und Schmuckstücke mit Ausdauer'] },
      { rank: 'Respektvoll', rewards: ['Flamewrought Key für alle drei Hellfire-Citadel-Heroics (Ramparts, The Blood Furnace, The Shattered Halls)', 'Episches Zwischen-Zubehör'] },
      { rank: 'Ehrfürchtig', rewards: ['Bestes verfügbares Fraktionszubehör (Ringe, Halsketten, Schultern)', 'Voller Zugang zum kompletten Rezept- und Ausrüstungskatalog'] }
    ],
    tips: [
      'Der Flamewrought Key ab Respektvoll ist Pflicht für alle Hellfire-Citadel-Heroics – möglichst früh im Levelprozess mitnehmen',
      'Beide Fraktionen laufen strikt parallel, nur die eigene Charakterfraktion zählt',
      'Kriegsplan-Turn-ins sind ein guter Lückenfüller, falls der Zonen-Ruf allein nicht für Respektvoll reicht'
    ]
  },
  {
    id: 'cenarion-expedition',
    name: 'Cenarion Expedition',
    side: 'Beide Fraktionen',
    type: 'Hub-Fraktion (Zangarmarsh)',
    zone: 'Zangarmarsh',
    theme: '#2f9e6e',
    audience: 'Fortgeschritten',
    minutes: 20,
    summary:
      'Naturschutz-Fraktion rund um Cenarion Refuge in Zangarmarsh. Liefert den Schlüssel für alle Coilfang-Reservoir-Heroics und solide Heiler-/Tank-Ausrüstung für die frühe Levelphase 60-64.',
    startRequirement: 'Ab Stufe 60, Einstieg am Cenarion Refuge in Zangarmarsh',
    grindLength: '1-2 Wochen',
    estimatedTime: '1-2 Wochen bei regelmäßigem Zonen-Leveln und Coilfang-Runs bis Respektvoll',
    howTo: [
      'Die Zangarmarsh-Questreihe rund um Cenarion Refuge abschließen',
      'Wiederholbare Turn-ins von Bog-Lord- und Sporebat-Beute beim Quartiermeister abgeben',
      'The-Slave-Pens-, Underbog- und Steamvault-Bosskills geben zusätzlichen Ruf'
    ],
    grindTargets: [
      'Bog Lords in Zangarmarsh für wiederholbare Turn-ins',
      'The-Slave-Pens-, Underbog- und Steamvault-Bosskills'
    ],
    keyQuests: [
      'Einführungskette am Cenarion Refuge',
      'Zonenabschluss-Questreihe rund um die Coilfang-Vorbereitung'
    ],
    standings: [
      { rank: 'Freundlich', rewards: ['Grundhändler-Zugang und Reagenzien'] },
      { rank: 'Wohlwollend', rewards: ['Naturschutz-Ringe mit Ausdauer- und Zaubermacht-Boni'] },
      { rank: 'Respektvoll', rewards: ['Reservoir Key für alle drei Coilfang-Heroics (The Slave Pens, Underbog, Steamvault)', 'Verbesserte Heiler- und Tank-Trinkets'] },
      { rank: 'Ehrfürchtig', rewards: ['Starke Zwischenausrüstung für die Karazhan-Vorbereitung', 'Voller Zugang zu allen Fraktionsrezepten'] }
    ],
    tips: [
      'Der Reservoir Key ist Pflicht für Coilfang-Heroics – vor dem ersten Heroic-Run auf Respektvoll zielen',
      'Zangarmarsh-Leveling und Coilfang-Runs kombinieren, um den Grind nebenbei zu erledigen'
    ]
  },
  {
    id: 'sporeggar',
    name: 'Sporeggar',
    side: 'Beide Fraktionen',
    type: 'Neben-Fraktion (Zangarmarsh)',
    zone: 'Zangarmarsh',
    theme: '#a569bd',
    audience: 'Einsteiger',
    minutes: 14,
    summary:
      'Kleine, freundliche Pilzwesen-Siedlung in Zangarmarsh. Ruf kommt aus dem Sammeln von Zangarmarsh-Sporen und liefert frühe Levelausrüstung sowie einen Flugpunkt mitten in der Zone.',
    startRequirement: 'Ab Stufe 60, Einstieg am Sporeggar-Lager in Zangarmarsh',
    grindLength: 'Wenige Tage',
    estimatedTime: 'Wenige Tage bei regelmäßigem Sporen-Sammeln bis Respektvoll',
    howTo: [
      'Die Einführungsquest bei Sporeggar annehmen',
      'Zangarmarsh-Sporen von Pilzwesen und Sporebats einsammeln und abgeben',
      'Gelegentliche Zusatzquests rund um Sporeggar abschließen'
    ],
    grindTargets: [
      'Sporebats und andere Pilzwesen in Zangarmarsh für Sporen-Drops'
    ],
    keyQuests: [
      'Einführungsquest am Sporeggar-Lager'
    ],
    standings: [
      { rank: 'Freundlich', rewards: ['Flugpunkt-Zugang bei Sporeggar', 'Grundausrüstung'] },
      { rank: 'Wohlwollend', rewards: ['Frühe Levelringe mit Ausdauer'] },
      { rank: 'Respektvoll', rewards: ['Verbesserte Trinkets und Waffen für die Levelphase'] },
      { rank: 'Ehrfürchtig', rewards: ['Bestes Sporeggar-Zubehör inklusive seltener Sammlerbelohnung'] }
    ],
    tips: [
      'Guter Nebeneffekt-Ruf beim normalen Zangarmarsh-Leveling',
      'Für Twinks und Sammler nett, aber kein Pflichtziel für den Endgame-Progress'
    ]
  },
  {
    id: 'sha-tar',
    name: 'The Sha’tar',
    side: 'Beide Fraktionen',
    type: 'Zugangs-Fraktion (Auchindoun & Tempest Keep)',
    zone: 'Shattrath City',
    theme: '#e8c547',
    audience: 'Fortgeschritten',
    minutes: 22,
    summary:
      'Zentrale Naaru-Fraktion in Shattrath City. Steuert den Zugang zu allen Auchindoun- und Tempest-Keep-Heroics und liefert wichtige Zwischenausrüstung vor Karazhan.',
    startRequirement: 'Ab Stufe 64, Einstieg über die Shattrath-Questreihe in Terokkar Forest',
    grindLength: '2-3 Wochen',
    estimatedTime: '2-3 Wochen bei regelmäßigen Auchindoun- und Tempest-Keep-Runs bis Respektvoll',
    howTo: [
      'Die Einführungs-Questreihe nach Shattrath City abschließen',
      'Mana-Tombs-, Auchenai-Crypts-, Sethekk-Halls- und Shadow-Labyrinth-Bosskills geben Ruf',
      'The-Mechanar-, The-Botanica- und The-Arcatraz-Bosskills in Tempest Keep geben ebenfalls Ruf',
      'The-Eye-Raidbosse in Tempest Keep liefern zusätzlichen Ruf im Endgame'
    ],
    grindTargets: [
      'Auchindoun-Dungeons: Mana-Tombs, Auchenai Crypts, Sethekk Halls, Shadow Labyrinth',
      'Tempest-Keep-Dungeons: The Mechanar, The Botanica, The Arcatraz'
    ],
    keyQuests: [
      'Einführungskette zur Entdeckung von Shattrath City',
      'Vorquests für den Zugang zu Auchindoun und Tempest Keep'
    ],
    standings: [
      { rank: 'Freundlich', rewards: ['Zugang zu Shattrath-Flugpunkt und Grundhändlern'] },
      { rank: 'Wohlwollend', rewards: ['Zwischenringe und Trinkets für alle Rollen'] },
      { rank: 'Respektvoll', rewards: ['Auchenai Key für alle Auchindoun-Heroics', 'Warpforged Key für alle Tempest-Keep-Heroics'] },
      { rank: 'Ehrfürchtig', rewards: ['Starke Vorbereitungsausrüstung für Karazhan und Tempest Keep', 'Voller Zugang zum kompletten Rezeptkatalog'] }
    ],
    tips: [
      'Beide Schlüssel ab Respektvoll sind Pflicht für alle acht zugehörigen Heroics',
      'Auchindoun- und Tempest-Keep-Runs so früh wie möglich in die wöchentliche Routine einbauen'
    ]
  },
  {
    id: 'aldor',
    name: 'The Aldor',
    side: 'Beide Fraktionen',
    type: 'Schulterverzauberungs-Fraktion (Shattrath City)',
    zone: 'Shattrath City',
    theme: '#3a6ea5',
    audience: 'Fortgeschritten',
    minutes: 18,
    summary:
      'Naaru-treue Fraktion auf der Terrace of Light in Shattrath City. Steht in direkter Konkurrenz zu den Scryers – Ruf bei den Aldor senkt automatisch den Ruf bei den Scryers und umgekehrt.',
    startRequirement: 'Ab Stufe 64, Entscheidung fällt mit der ersten angenommenen Aldor- oder Scryer-Quest in Shattrath City',
    grindLength: '1-2 Wochen',
    estimatedTime: '1-2 Wochen bei regelmäßigem Turn-in-Farmen bis Respektvoll, Ehrfürchtig ist ein Langzeitziel',
    howTo: [
      'Die Aldor-Einführungsquest auf der Terrace of Light annehmen',
      'Gesammelte Beutestücke gefallener Dämonen und Fel-Orcs beim Aldor-Questgeber abgeben',
      'Aldor-Tagesquests rund um Shattrath und Shadowmoon Valley abschließen, sobald verfügbar'
    ],
    grindTargets: [
      'Dämonische und Fel-Orc-Gegner in Hellfire Peninsula, Zangarmarsh und Shadowmoon Valley für Trophäen-Turn-ins'
    ],
    keyQuests: [
      'Aldor-Einführungskette auf der Terrace of Light'
    ],
    standings: [
      { rank: 'Freundlich', rewards: ['Erste Schulterverzauberung mit Grundwert'] },
      { rank: 'Wohlwollend', rewards: ['Verbesserte Schulterverzauberung', 'Grundhändler-Zugang'] },
      { rank: 'Respektvoll', rewards: ['Starke Schulterverzauberung für die jeweilige Rolle'] },
      { rank: 'Ehrfürchtig', rewards: ['Beste verfügbare Schulterverzauberung der Fraktion', 'Zugang zu allen Aldor-Reagenzien und Trinkets'] }
    ],
    tips: [
      'Die Entscheidung Aldor vs. Scryers ist nicht endgültig, aber ein Wechsel kostet viel Zeit – vorher Gilde/Rollenbedarf abklären',
      'Schulterverzauberungen bleiben bis weit in Tier-5-Content hinein relevant'
    ]
  },
  {
    id: 'scryers',
    name: 'The Scryers',
    side: 'Beide Fraktionen',
    type: 'Schulterverzauberungs-Fraktion (Shattrath City)',
    zone: 'Shattrath City',
    theme: '#f1c40f',
    audience: 'Fortgeschritten',
    minutes: 18,
    summary:
      'Blutelfen-nahe Fraktion auf der Scryers’ Tier in Shattrath City. Gegenspieler der Aldor, ebenfalls über Schulterverzauberungen für alle Rollen relevant.',
    startRequirement: 'Ab Stufe 64, Entscheidung fällt mit der ersten angenommenen Aldor- oder Scryer-Quest in Shattrath City',
    grindLength: '1-2 Wochen',
    estimatedTime: '1-2 Wochen bei regelmäßigem Turn-in-Farmen bis Respektvoll, Ehrfürchtig ist ein Langzeitziel',
    howTo: [
      'Die Scryer-Einführungsquest auf der Scryers’ Tier annehmen',
      'Gesammelte arkane Trophäen von Ethereals und Blutelfen-Abtrünnigen beim Scryer-Questgeber abgeben',
      'Scryer-Tagesquests rund um Shattrath und Shadowmoon Valley abschließen, sobald verfügbar'
    ],
    grindTargets: [
      'Ethereal- und Blutelfen-Gegner in Netherstorm und Terokkar Forest für Trophäen-Turn-ins'
    ],
    keyQuests: [
      'Scryer-Einführungskette auf der Scryers’ Tier'
    ],
    standings: [
      { rank: 'Freundlich', rewards: ['Erste Schulterverzauberung mit Grundwert'] },
      { rank: 'Wohlwollend', rewards: ['Verbesserte Schulterverzauberung', 'Grundhändler-Zugang'] },
      { rank: 'Respektvoll', rewards: ['Starke Schulterverzauberung für die jeweilige Rolle'] },
      { rank: 'Ehrfürchtig', rewards: ['Beste verfügbare Schulterverzauberung der Fraktion', 'Zugang zu allen Scryer-Reagenzien und Trinkets'] }
    ],
    tips: [
      'Die Schulterverzauberungen von Aldor und Scryers unterscheiden sich optisch, sind vom Effekt her aber meist gleichwertig',
      'Rufgewinn bei den Scryers senkt automatisch den Ruf bei den Aldor – nicht parallel farmen'
    ]
  },
  {
    id: 'lower-city',
    name: 'Lower City',
    side: 'Beide Fraktionen',
    type: 'Umhangverzauberungs-Fraktion (Shattrath City)',
    zone: 'Shattrath City',
    theme: '#16a085',
    audience: 'Fortgeschritten',
    minutes: 16,
    summary:
      'Fraktion der Flüchtlinge im ärmeren Stadtteil von Shattrath City. Liefert Umhangverzauberungen für alle Rollen und ist eng mit den Auchindoun-Dungeons verbunden.',
    startRequirement: 'Ab Stufe 64, Einstieg über die Shattrath-Questreihe im unteren Stadtviertel',
    grindLength: '1-2 Wochen',
    estimatedTime: '1-2 Wochen bei regelmäßigen Auchindoun-Runs und Turn-ins bis Respektvoll',
    howTo: [
      'Die Einführungs-Questreihe im unteren Stadtviertel von Shattrath City abschließen',
      'Bonusquests bei Auchindoun-Bossen (Mana-Tombs, Auchenai Crypts, Sethekk Halls, Shadow Labyrinth) abgeben',
      'Wiederholbare Sammelquests rund um Terokkar Forest erledigen'
    ],
    grindTargets: [
      'Auchindoun-Bosskills für Bonus-Ruf-Quests',
      'Wiederholbare Sammelziele in Terokkar Forest'
    ],
    keyQuests: [
      'Einführungskette im unteren Stadtviertel von Shattrath City'
    ],
    standings: [
      { rank: 'Freundlich', rewards: ['Erste Umhangverzauberung mit Grundwert'] },
      { rank: 'Wohlwollend', rewards: ['Verbesserte Umhangverzauberung'] },
      { rank: 'Respektvoll', rewards: ['Starke Umhangverzauberung für die jeweilige Rolle'] },
      { rank: 'Ehrfürchtig', rewards: ['Beste verfügbare Umhangverzauberung der Fraktion', 'Zugang zu seltenen Reagenzien und einem starken Trinket'] }
    ],
    tips: [
      'Lässt sich hervorragend mit dem Sha’tar-Ruf kombinieren, da beide über Auchindoun laufen',
      'Umhangverzauberungen bleiben bis weit ins Endgame hinein konkurrenzfähig'
    ]
  },
  {
    id: 'keepers-of-time',
    name: 'Keepers of Time',
    side: 'Beide Fraktionen',
    type: 'Raid-Ruf (Caverns of Time)',
    zone: 'Caverns of Time (Tanaris)',
    theme: '#cd7f32',
    audience: 'Fortgeschritten',
    minutes: 18,
    summary:
      'Zeitwächter-Fraktion in den Caverns of Time. Ruf kommt aus Old Hillsbrad Foothills und The Black Morass und liefert solide Zwischenausrüstung mit Fokus auf die Verteidigung des Dark Portals.',
    startRequirement: 'Ab Stufe 66, Einstieg über die Questreihe in den Caverns of Time in Tanaris',
    grindLength: '1-2 Wochen',
    estimatedTime: '1-2 Wochen bei regelmäßigen Old-Hillsbrad- und Black-Morass-Runs bis Respektvoll',
    howTo: [
      'Die Einführungs-Questreihe in den Caverns of Time abschließen',
      'Old-Hillsbrad-Foothills-Bosskills geben Ruf',
      'The-Black-Morass-Läufe (Verteidigung des Dark Portals gegen Aeonus’ Wellen) geben zusätzlichen Ruf'
    ],
    grindTargets: [
      'Old-Hillsbrad-Foothills-Bosskills',
      'The-Black-Morass-Portalverteidigung bis Aeonus'
    ],
    keyQuests: [
      'Einführungskette in den Caverns of Time'
    ],
    standings: [
      { rank: 'Freundlich', rewards: ['Grundhändler-Zugang'] },
      { rank: 'Wohlwollend', rewards: ['Zwischenringe mit Ausdauer- und Angriffswert'] },
      { rank: 'Respektvoll', rewards: ['Verbesserte Trinkets für Tank und DPS'] },
      { rank: 'Ehrfürchtig', rewards: ['Starke Vorbereitungsausrüstung für Karazhan', 'Zugang zum kompletten Fraktionsrezeptkatalog'] }
    ],
    tips: [
      'The Black Morass ist zeitkritisch – eine geübte Gruppe beschleunigt sowohl den Run als auch den Ruf-Ertrag',
      'Guter Nebenschauplatz für Spieler, die ohnehin Heroic-Erfahrung gegen Aeonus sammeln'
    ]
  },
  {
    id: 'violet-eye',
    name: 'The Violet Eye',
    side: 'Beide Fraktionen',
    type: 'Raid-Ruf (Karazhan)',
    zone: 'Deadwind Pass (Karazhan)',
    theme: '#8e44ad',
    audience: 'Experte',
    minutes: 18,
    summary:
      'Kirin-Tor-Wächter-Fraktion rund um Karazhan. Ruf kommt ausschließlich aus Trash- und Bosskills im Turm und schaltet am Ende einen Trash-Skip-Schlüssel frei.',
    startRequirement: 'Stufe 70, Karazhan-Attunement erforderlich',
    grindLength: 'Mehrere Karazhan-Wochen',
    estimatedTime: 'Mehrere Wochen wöchentlicher Karazhan-Clears bis Respektvoll, Ehrfürchtig erfordert deutlich mehr Runs',
    howTo: [
      'Karazhan-Trash und -Bosse regelmäßig im wöchentlichen Reset clearen',
      'Jeder Bosskill von Attumen the Huntsman bis Prince Malchezaar gibt spürbaren Ruf'
    ],
    grindTargets: [
      'Wöchentliche Karazhan-Clears (Trash und alle regulären Bosse)'
    ],
    keyQuests: [
      'Keine klassische Questreihe – reiner Raid-Trash- und Bosskill-Ruf'
    ],
    standings: [
      { rank: 'Freundlich', rewards: ['Grundzugang zum Fraktionshändler'] },
      { rank: 'Wohlwollend', rewards: ['Erste epische Ringe und Trinkets'] },
      { rank: 'Respektvoll', rewards: ['Verbesserte Karazhan-Vorbereitungsausrüstung'] },
      { rank: 'Ehrfürchtig', rewards: ['Master’s Key zum Überspringen von Trash-Abschnitten in Karazhan', 'Bestes verfügbares Fraktionszubehör'] }
    ],
    tips: [
      'Der Master’s Key ab Ehrfürchtig spart wöchentlich viel Zeit auf dem Weg zu Curator und Prince Malchezaar',
      'Ruf steigt automatisch mit jedem regulären Raidabend – kein separater Grind nötig'
    ]
  },
  {
    id: 'kurenai-maghar',
    name: 'Kurenai & The Mag’har',
    side: 'Beide Fraktionen',
    type: 'Hub-Fraktion (Nagrand)',
    zone: 'Nagrand',
    theme: '#e67e22',
    audience: 'Einsteiger',
    minutes: 18,
    summary:
      'Nagrand-Hub-Fraktionen: Kurenai für die Allianz (versprengte Draenei), The Mag’har für die Horde (unverdorbene Orcs). Ruf füllt sich größtenteils automatisch beim Durchleveln der Zone.',
    startRequirement: 'Ab Stufe 64, Einstieg über die Nagrand-Questreihe',
    grindLength: '1 Levelphase',
    estimatedTime: 'Läuft meist automatisch während des Levelns von 64-67 in Nagrand mit',
    howTo: [
      'Die komplette Nagrand-Questreihe rund um Telaar bzw. Garadar abschließen',
      'Wiederholbare Jagd- und Sammelquests im jeweiligen Fraktionslager erledigen'
    ],
    grindTargets: [
      'Standard-Levelquests und wiederholbare Turn-ins rund um Telaar (Allianz) bzw. Garadar (Horde)'
    ],
    keyQuests: [
      'Einführungskette am jeweiligen Fraktionslager in Nagrand'
    ],
    standings: [
      { rank: 'Freundlich', rewards: ['Grundausrüstung beim Fraktionshändler'] },
      { rank: 'Wohlwollend', rewards: ['Zwischenringe mit Ausdauer'] },
      { rank: 'Respektvoll', rewards: ['Verbesserte Waffen und Trinkets für die Levelphase'] },
      { rank: 'Ehrfürchtig', rewards: ['Bestes verfügbares Zwischenzubehör vor Stufe 70', 'Voller Fraktionshändlerzugang'] }
    ],
    tips: [
      'Wird meist automatisch beim normalen Nagrand-Leveln erreicht',
      'Für Ehrfürchtig lohnt sich gezieltes Wiederholen der Lager-Turn-ins nach Zonenabschluss'
    ]
  },
  {
    id: 'ogrila',
    name: 'Ogri’la',
    side: 'Beide Fraktionen',
    type: 'Tagesquest-Fraktion (Blade’s Edge Mountains)',
    zone: 'Blade’s Edge Mountains',
    theme: '#8b5a2b',
    audience: 'Experte',
    minutes: 16,
    summary:
      'Arakkoa-Fraktion auf dem schwebenden Felsen Ogri’la in den Blade’s Edge Mountains. Tagesquests liefern Ruf und Apexis Shards für epische Zwischenbelohnungen.',
    startRequirement: 'Stufe 70, Zugang über eine Vorquestreihe in den Blade’s Edge Mountains',
    grindLength: 'Mehrere Wochen',
    estimatedTime: 'Mehrere Wochen bei täglichem Tagesquest-Zyklus bis Respektvoll, Ehrfürchtig ist ein Langzeitziel',
    howTo: [
      'Die Vorquestreihe abschließen, um Ogri’la freizuschalten',
      'Täglich verfügbare Ogri’la-Tagesquests in den Blade’s Edge Mountains abschließen',
      'Apexis Shards aus den Tagesquests sammeln und bei Bedarf gegen Zwischenausrüstung eintauschen'
    ],
    grindTargets: [
      'Tägliche Ogri’la-Quests (Bombenläufe, Ei-Sammeln, Elementar- und Netherdrachen-Ziele)'
    ],
    keyQuests: [
      'Freischalt-Questreihe für Ogri’la in den Blade’s Edge Mountains'
    ],
    standings: [
      { rank: 'Freundlich', rewards: ['Zugang zum Ogri’la-Händler'] },
      { rank: 'Wohlwollend', rewards: ['Epische Bündel-Rezepte gegen Apexis Shards'] },
      { rank: 'Respektvoll', rewards: ['Epische Armschienen (BoE) beim Fraktionshändler'] },
      { rank: 'Ehrfürchtig', rewards: ['Volles Ogri’la-Rezept- und Ausrüstungssortiment', 'Bestes verfügbares Apexis-Zubehör'] }
    ],
    tips: [
      'Apexis Shards lassen sich am selben Tag mit den Sha’tari-Skyguard-Tagesquests kombinieren',
      'Tagesquests sind zeitlich limitiert – regelmäßige tägliche Logins beschleunigen den Grind erheblich'
    ]
  },
  {
    id: 'shatari-skyguard',
    name: 'Sha’tari Skyguard',
    side: 'Beide Fraktionen',
    type: 'Tagesquest-Fraktion (Skettis)',
    zone: 'Blade’s Edge Mountains (Skettis)',
    theme: '#3498db',
    audience: 'Experte',
    minutes: 16,
    summary:
      'Luftwacht-Fraktion, die gegen die Arakkoa von Skettis kämpft. Tagesquests rund um Skettis liefern Ruf, Apexis Shards und starkes Zwischen-Zubehör.',
    startRequirement: 'Stufe 70, Zugang über eine Vorquestreihe bei Skettis',
    grindLength: 'Mehrere Wochen',
    estimatedTime: 'Mehrere Wochen bei täglichem Tagesquest-Zyklus bis Respektvoll, Ehrfürchtig ist ein Langzeitziel',
    howTo: [
      'Die Vorquestreihe abschließen, um die Sha’tari-Skyguard-Tagesquests freizuschalten',
      'Täglich verfügbare Skettis-Tagesquests (Arakkoa bekämpfen, Käfige befreien, Eier zerstören) abschließen',
      'Apexis Shards aus den Tagesquests sammeln und bei Bedarf gegen Ausrüstung eintauschen'
    ],
    grindTargets: [
      'Tägliche Skettis-Quests rund um Arakkoa-Ziele und Gefangenenbefreiung'
    ],
    keyQuests: [
      'Freischalt-Questreihe für die Sha’tari-Skyguard-Tagesquests bei Skettis'
    ],
    standings: [
      { rank: 'Freundlich', rewards: ['Zugang zum Skyguard-Händler'] },
      { rank: 'Wohlwollend', rewards: ['Zwischenschmuck gegen Apexis Shards'] },
      { rank: 'Respektvoll', rewards: ['Starke Umhänge und Halsketten beim Fraktionshändler'] },
      { rank: 'Ehrfürchtig', rewards: ['Volles Skyguard-Rezept- und Ausrüstungssortiment', 'Bestes verfügbares Apexis-Zubehör'] }
    ],
    tips: [
      'Lässt sich effizient mit den Ogri’la-Tagesquests am selben Tag kombinieren',
      'Käfig- und Ei-Quests sind meist am schnellsten erledigt – zuerst einplanen'
    ]
  },
  {
    id: 'netherwing',
    name: 'Netherwing',
    side: 'Beide Fraktionen',
    type: 'Tagesquest- & Reittier-Fraktion (Shadowmoon Valley)',
    zone: 'Shadowmoon Valley',
    theme: '#6c3483',
    audience: 'Experte',
    minutes: 20,
    summary:
      'Berühmter Drachen-Grind am Netherwing Ledge in Shadowmoon Valley. Tägliche Quests füllen den Ruf und schalten am Ende die zehn Netherwing-Drachen-Reittiere zum Kauf frei.',
    startRequirement: 'Stufe 70, Zugang über eine Vorquestreihe inklusive Verkleidung als Fel Orc',
    grindLength: 'Mehrere Wochen',
    estimatedTime: 'Mehrere Wochen bei täglichem Tagesquest-Zyklus, meist 3-4 Wochen bis Ehrfürchtig',
    howTo: [
      'Die Vorquestreihe inklusive Fel-Orc-Verkleidung am Netherwing Ledge abschließen',
      'Täglich verfügbare Netherwing-Tagesquests abschließen, unter anderem das Aufziehen eines eigenen Netherdrachen-Eis',
      'Gelegentliche Zusatzquests rund um Shadowmoon Valley für Bonus-Ruf mitnehmen'
    ],
    grindTargets: [
      'Tägliche Netherwing-Quests am Netherwing Ledge (Ei-Aufzucht, Patrouillen, Sammelziele)'
    ],
    keyQuests: [
      'Freischalt-Questreihe mit Fel-Orc-Verkleidung für den Zugang zum Netherwing Ledge'
    ],
    standings: [
      { rank: 'Freundlich', rewards: ['Zugang zum Netherwing-Händler'] },
      { rank: 'Wohlwollend', rewards: ['Zwischenschmuck und Reagenzien'] },
      { rank: 'Respektvoll', rewards: ['Starke Umhänge und Halsketten mit Fel-Thema'] },
      { rank: 'Ehrfürchtig', rewards: ['Alle zehn Netherwing-Drachen-Reittiere käuflich', 'Volles Netherwing-Rezeptsortiment'] }
    ],
    tips: [
      'Für die Drachen-Reittiere ist Ehrfürchtig zwingend nötig – tägliches Einloggen beschleunigt den Grind erheblich',
      'Die Ei-Aufzuchtquest ist an einen festen täglichen Rhythmus gebunden und lässt sich nicht vorziehen'
    ]
  },
  {
    id: 'scale-of-the-sands',
    name: 'The Scale of the Sands',
    side: 'Beide Fraktionen',
    type: 'Raid-Ruf (Caverns of Time)',
    zone: 'Caverns of Time (Tanaris)',
    theme: '#d2b48c',
    audience: 'Experte',
    minutes: 16,
    summary:
      'Bronzedrachen-Fraktion rund um The Black Morass. Ruf kommt aus wiederholbaren Turn-ins nach erfolgreicher Portalverteidigung und liefert klassenspezifische Trinkets.',
    startRequirement: 'Stufe 70, Zugang über abgeschlossene The-Black-Morass-Läufe',
    grindLength: 'Mehrere Wochen',
    estimatedTime: 'Mehrere Wochen bei regelmäßigen Black-Morass-Runs und Turn-ins bis Ehrfürchtig',
    howTo: [
      'The Black Morass erfolgreich abschließen (Aeonus besiegen)',
      'Erhaltene Insignien beim Questgeber der Caverns of Time gegen Ruf eintauschen',
      'Runs regelmäßig wiederholen, um den Ruf-Turn-in erneut freizuschalten'
    ],
    grindTargets: [
      'Wiederholte The-Black-Morass-Läufe (normal oder heroisch) für Insignien-Turn-ins'
    ],
    keyQuests: [
      'Keine klassische Questreihe – reiner Turn-in-basierter Ruf nach Black-Morass-Clears'
    ],
    standings: [
      { rank: 'Freundlich', rewards: ['Grundzugang zum Fraktionshändler'] },
      { rank: 'Wohlwollend', rewards: ['Zwischenschmuck mit Klassenattributen'] },
      { rank: 'Respektvoll', rewards: ['Verbesserte klassenspezifische Trinkets'] },
      { rank: 'Ehrfürchtig', rewards: ['Starke klassenspezifische Trinkets für Tank, Heiler, Melee- und Caster-DPS'] }
    ],
    tips: [
      'Gut mit dem Keepers-of-Time-Ruf kombinierbar, da beide über die Caverns of Time laufen',
      'Heroische Black-Morass-Läufe sind zeitkritisch, geben aber denselben Ruf-Turn-in wie der normale Modus'
    ]
  },
  {
    id: 'ashtongue-deathsworn',
    name: 'Ashtongue Deathsworn',
    side: 'Beide Fraktionen',
    type: 'Raid-Vorbereitungs-Fraktion (Black Temple)',
    zone: 'Shadowmoon Valley (Bash’ir Landing)',
    theme: '#7a1f1f',
    audience: 'Experte',
    minutes: 18,
    summary:
      'Ehemalige Illidari-Elite unter Akama, die sich gegen Illidan gewandt hat. Ruf kommt aus wiederholbaren Turn-ins bei Bash’ir Landing und ist zentrale Vorbereitung für die Black-Temple-Attunement-Kette.',
    startRequirement: 'Stufe 70, Zugang über die Akama-Questreihe in Shadowmoon Valley',
    grindLength: 'Mehrere Wochen',
    estimatedTime: 'Mehrere Wochen bei regelmäßigem Turn-in-Farmen bis Ehrfürchtig',
    howTo: [
      'Die Akama-Questreihe in Shadowmoon Valley bis Bash’ir Landing abschließen',
      'Ashtongue Corpse Dust von Illidari- und Shadow-Council-Gegnern in Shadowmoon Valley sammeln und abgeben',
      'Fortlaufende Turn-in-Runde bei Bash’ir Landing regelmäßig wiederholen'
    ],
    grindTargets: [
      'Illidari- und Shadow-Council-Gegner in Shadowmoon Valley für Ashtongue-Corpse-Dust-Drops'
    ],
    keyQuests: [
      'Akama-Questreihe in Shadowmoon Valley als Vorbereitung auf Black Temple'
    ],
    standings: [
      { rank: 'Freundlich', rewards: ['Zugang zum Ashtongue-Händler'] },
      { rank: 'Wohlwollend', rewards: ['Erste Ashtongue-Talisman-Trinkets mit Grundwert'] },
      { rank: 'Respektvoll', rewards: ['Verbesserte klassenspezifische Ashtongue-Talismane'] },
      { rank: 'Ehrfürchtig', rewards: ['Beste verfügbare Ashtongue-Talisman-Trinkets für die jeweilige Rolle', 'Voraussetzung für den weiteren Verlauf der Black-Temple-Attunement-Kette'] }
    ],
    tips: [
      'Die Ashtongue-Talismane zählen bis weit in Black Temple hinein zu den stärksten verfügbaren Trinkets',
      'Corpse-Dust-Turn-ins lassen sich gut mit normalem Dailies-Farmen in Shadowmoon Valley kombinieren'
    ]
  }
];

const wrathReputationGuides = [
  {
    id: 'the-kalu-ak',
    name: "The Kalu'ak",
    side: 'Beide Fraktionen',
    type: 'Fischer-Fraktion (Howling Fjord & Dragonblight)',
    zone: 'Howling Fjord, Dragonblight, Borean Tundra',
    theme: '#2f6f8f',
    audience: 'Einsteiger',
    minutes: 18,
    summary:
      "Freundliche Tuskarr-Fraktion entlang der Nordend-Küsten. Ruf kommt größtenteils automatisch beim Leveln durch Howling Fjord und Dragonblight, für Exaltiert sind tägliche Angelaufträge nötig. Bekannt für das teuerste Reittier der Erweiterung.",
    startRequirement: 'Ab Stufe 68, Kontakt über die Questreihen in Howling Fjord und Dragonblight',
    grindLength: 'Mehrere Wochen',
    estimatedTime:
      'Läuft größtenteils automatisch beim Leveln durch Howling Fjord und Dragonblight mit, für Exaltiert sind gezielte tägliche Angelaufträge über mehrere Wochen nötig',
    howTo: [
      "Die Kalu'ak-Questreihen rund um Kamagua und Moa'ki Harbor in Howling Fjord abschließen",
      "Die Kalu'ak-Questreihen rund um Iskaara in Dragonblight abschließen",
      "Tägliche Angelaufträge bei Old Man Barlo in Moa'ki Harbor bzw. bei Kaskala in Iskaara erledigen"
    ],
    grindTargets: [
      "Tägliche Fischerei-Aufträge bei Moa'ki Harbor und Iskaara",
      "Gelegentliche Sammelquests rund um die Kalu'ak-Dörfer in Borean Tundra"
    ],
    keyQuests: [
      "Questreihen rund um Kamagua und Moa'ki Harbor in Howling Fjord",
      "Questreihen rund um Iskaara in Dragonblight"
    ],
    standings: [
      { rank: 'Freundlich', rewards: ['Grundhändler-Zugang', 'Erste Angelausrüstung'] },
      { rank: 'Wohlwollend', rewards: ['Verbesserte Angelausrüstung und Köder'] },
      { rank: 'Respektvoll', rewards: ['Starke Fischerei- und Kochrezepte'] },
      { rank: 'Ehrfürchtig', rewards: ['Kaufbare Traveler\'s Tundra Mammoth (zweisitziges Reittier)', "Volles Kalu'ak-Rezeptsortiment"] }
    ],
    tips: [
      'Tägliche Angelaufträge sind der zuverlässigste Weg zu Exaltiert, sobald die Questreihen abgeschlossen sind',
      'Die Traveler\'s Tundra Mammoth ist eines der teuersten Reittiere im Spiel – zusätzlich zum Ruf wird sehr viel Gold benötigt'
    ]
  },
  {
    id: 'wyrmrest-accord',
    name: 'The Wyrmrest Accord',
    side: 'Beide Fraktionen',
    type: 'Drachen-Hub-Fraktion (Dragonblight)',
    zone: 'Dragonblight',
    theme: '#5b3fa8',
    audience: 'Fortgeschritten',
    minutes: 20,
    summary:
      'Zentrale Fraktion am Wyrmrest Temple, in der sich die aufrechten Drachenschwärme gegen die Geißel und Deathwings Einfluss verbünden. Liefert solide Zwischenausrüstung und eines der beliebtesten Sammlerreittiere der Erweiterung.',
    startRequirement: 'Ab Stufe 71, Einstieg über die Hauptquestreihe am Wyrmrest Temple in Dragonblight',
    grindLength: '2-3 Wochen',
    estimatedTime: '2-3 Wochen bei regelmäßigen The-Culling-of-Stratholme- und The-Oculus-Runs bis Respektvoll',
    howTo: [
      'Die Dragonblight-Hauptquestreihe rund um den Wyrmrest Temple abschließen',
      'The-Culling-of-Stratholme-Bosskills geben zusätzlichen Ruf',
      'The-Oculus-Bosskills geben zusätzlichen Ruf'
    ],
    grindTargets: [
      'The-Culling-of-Stratholme-Bosskills',
      'The-Oculus-Bosskills'
    ],
    keyQuests: [
      'Hauptquestreihe am Wyrmrest Temple in Dragonblight'
    ],
    standings: [
      { rank: 'Freundlich', rewards: ['Grundhändler-Zugang'] },
      { rank: 'Wohlwollend', rewards: ['Zwischenringe und Halsketten'] },
      { rank: 'Respektvoll', rewards: ['Verbesserte Trinkets für Tank, Heiler und DD'] },
      { rank: 'Ehrfürchtig', rewards: ['Kaufbare Reins of the Blue Drake', 'Volles Fraktionsrezeptsortiment'] }
    ],
    tips: [
      'Reins of the Blue Drake ist eines der beliebtesten Sammlerreittiere der Erweiterung',
      'The Oculus wird von vielen Gruppen gemieden – The Culling of Stratholme ist der entspanntere Weg zu Ruf'
    ]
  },
  {
    id: 'argent-crusade',
    name: 'The Argent Crusade',
    side: 'Beide Fraktionen',
    type: 'Endgame-Kriegsfraktion (Icecrown)',
    zone: 'Icecrown',
    theme: '#c9a13b',
    audience: 'Fortgeschritten',
    minutes: 22,
    summary:
      "Nachfolgefraktion der Argent Dawn und zentrale Endgame-Fraktion vor Icecrown Citadel. Ruf kommt aus der Icecrown-Questreihe, täglichen Turnierquests am Argent Tournament und Icecrown-Citadel-Trash sowie -Bossen.",
    startRequirement: "Ab Stufe 77, Einstieg über die Icecrown-Questreihe am Argent Vanguard (Allianz) bzw. Death's Breach (Horde)",
    grindLength: 'Mehrere Wochen',
    estimatedTime: 'Mehrere Wochen bei täglichen Turnierquests bis Respektvoll, Ehrfürchtig ist ein Langzeitziel',
    howTo: [
      "Die Icecrown-Einführungsquestreihe am Argent Vanguard bzw. Death's Breach abschließen",
      'Tägliche Turnierquests am Argent Tournament in Icecrown abschließen',
      'Icecrown-Citadel-Trash und -Bosse geben zusätzlichen Ruf'
    ],
    grindTargets: [
      'Tägliche Argent-Tournament-Turnierquests',
      'Icecrown-Citadel-Trash und -Bosskills'
    ],
    keyQuests: [
      "Einführungskette am Argent Vanguard bzw. Death's Breach",
      'Freischaltquestreihe für das Argent Tournament'
    ],
    standings: [
      { rank: 'Freundlich', rewards: ['Grundhändler-Zugang', 'Tabard of the Argent Crusade'] },
      { rank: 'Wohlwollend', rewards: ['Zwischenausrüstung mit Ausdauer'] },
      { rank: 'Respektvoll', rewards: ['Verbesserte Trinkets und Schmuck'] },
      { rank: 'Ehrfürchtig', rewards: ['Starkes Fraktionszubehör', 'Voraussetzung für die Ashen-Verdict-Freischaltquestreihe'] }
    ],
    tips: [
      'Das Tabard of the Argent Crusade tragen, um zusätzlichen Bonus-Loot-Wurf in Icecrown Citadel zu erhalten',
      'Turnierquests am Argent Tournament liefern gleichzeitig Ruf für die eigene Dalaran-Botschaft (Silver Covenant bzw. Sunreavers)'
    ]
  },
  {
    id: 'knights-of-the-ebon-blade',
    name: 'The Knights of the Ebon Blade',
    side: 'Beide Fraktionen',
    type: 'Todesritter-Fraktion (Icecrown)',
    zone: 'Icecrown (Ebon Hold)',
    theme: '#4a4a52',
    audience: 'Fortgeschritten',
    minutes: 18,
    summary:
      'Abtrünnige Todesritter unter Highlord Darion Mograine, die sich gegen den Lichkönig gewandt haben. Ruf kommt aus täglichen Quests am Ebon Hold in Icecrown und ist wie die Argent Crusade Voraussetzung für die Ashen Verdict.',
    startRequirement: 'Stufe 77, Todesritter starten bereits während der Einführungsquestreihe mit Grundruf, Einstieg am Ebon Hold in Icecrown',
    grindLength: 'Mehrere Wochen',
    estimatedTime: 'Mehrere Wochen bei täglichem Ebon-Hold-Questzyklus bis Respektvoll, Ehrfürchtig ist ein Langzeitziel',
    howTo: [
      'Die Einführungsquestreihe am Ebon Hold in Icecrown abschließen',
      'Tägliche Ebon-Hold-Quests gegen die Geißel in Icecrown abschließen',
      'Icecrown-Citadel-Trash und -Bosse geben zusätzlichen Ruf'
    ],
    grindTargets: [
      'Tägliche Ebon-Hold-Quests rund um Icecrown',
      'Icecrown-Citadel-Trash und -Bosskills'
    ],
    keyQuests: [
      'Einführungskette am Ebon Hold in Icecrown'
    ],
    standings: [
      { rank: 'Freundlich', rewards: ['Grundhändler-Zugang', 'Tabard of the Ebon Blade'] },
      { rank: 'Wohlwollend', rewards: ['Zwischenausrüstung mit Ausdauer'] },
      { rank: 'Respektvoll', rewards: ['Verbesserte Trinkets und Schmuck'] },
      { rank: 'Ehrfürchtig', rewards: ['Starkes Fraktionszubehör', 'Voraussetzung für die Ashen-Verdict-Freischaltquestreihe'] }
    ],
    tips: [
      'Todesritter starten mit einem Rufvorsprung aus der Einführungsquestreihe des Starterlebnisses',
      'Wie die Argent Crusade eine Pflichtvoraussetzung für die Ashen Verdict'
    ]
  },
  {
    id: 'ashen-verdict',
    name: 'The Ashen Verdict',
    side: 'Beide Fraktionen',
    type: 'Raid-Ruf (Icecrown Citadel)',
    zone: 'Icecrown Citadel',
    theme: '#8f8f8f',
    audience: 'Experte',
    minutes: 20,
    summary:
      'Vereinte Fraktion aus Argent Crusade und Knights of the Ebon Blade rund um Icecrown Citadel. Liefert am Ende die begehrten Exaltiert-Fraktionswaffen, die lange zu den stärksten verfügbaren Waffen der Erweiterung zählen.',
    startRequirement: 'Stufe 80, Ehrfürchtig bei Argent Crusade und Knights of the Ebon Blade als Voraussetzung',
    grindLength: 'Mehrere Wochen',
    estimatedTime: 'Mehrere Wochen bei täglichen Ashen-Verdict-Quests und regelmäßigen Icecrown-Citadel-Clears bis Ehrfürchtig',
    howTo: [
      'Ehrfürchtig bei Argent Crusade und Knights of the Ebon Blade erreichen',
      'Die Ashen-Verdict-Freischaltquestreihe in Icecrown abschließen',
      'Tägliche Ashen-Verdict-Quests rund um Icecrown Citadel abschließen',
      'Icecrown-Citadel-Bosskills geben zusätzlichen Ruf'
    ],
    grindTargets: [
      'Tägliche Ashen-Verdict-Quests bei Icecrown Citadel',
      'Icecrown-Citadel-Bosskills'
    ],
    keyQuests: [
      'Freischaltquestreihe für die Ashen Verdict'
    ],
    standings: [
      { rank: 'Freundlich', rewards: ['Grundhändler-Zugang'] },
      { rank: 'Wohlwollend', rewards: ['Epische Zwischenausrüstung'] },
      { rank: 'Respektvoll', rewards: ['Verbesserte epische Ausrüstung'] },
      { rank: 'Ehrfürchtig', rewards: ['Kaufbares episches Waffenset der Fraktion (Einhand- und Zweihandwaffen)', 'Bestes verfügbares Fraktionszubehör'] }
    ],
    tips: [
      'Ohne Ehrfürchtig bei Argent Crusade und Ebon Blade lässt sich die Freischaltquestreihe nicht abschließen',
      'Die Exaltiert-Waffen zählen bis zu den ersten Icecrown-Citadel-Hardmodes zu den stärksten verfügbaren Waffen'
    ]
  },
  {
    id: 'sons-of-hodir',
    name: 'The Sons of Hodir',
    side: 'Beide Fraktionen',
    type: 'Schulterverzauberungs-Fraktion (Storm Peaks)',
    zone: 'Storm Peaks',
    theme: '#3f6f9f',
    audience: 'Fortgeschritten',
    minutes: 18,
    summary:
      'Fraktion der Frostriesen-Nachkommen in den Storm Peaks. Liefert wie Aldor/Scryers in TBC gestaffelte Schulterverzauberungen für alle Rollen, dazu ab Ehrfürchtig eine zusätzliche Helmverzauberung.',
    startRequirement: 'Ab Stufe 77, Einstieg über die Storm-Peaks-Questreihe bei Brunnhildar Village',
    grindLength: '2-3 Wochen',
    estimatedTime: '2-3 Wochen bei täglichem Questzyklus bis Respektvoll, Ehrfürchtig ist ein Langzeitziel',
    howTo: [
      'Die Storm-Peaks-Questreihe abschließen, um die täglichen Sons-of-Hodir-Quests freizuschalten',
      'Tägliche Quests bei Brunnhildar Village und dem Sons-of-Hodir-Lager abschließen'
    ],
    grindTargets: [
      'Tägliche Sons-of-Hodir-Quests rund um Brunnhildar Village'
    ],
    keyQuests: [
      'Freischaltquestreihe für die täglichen Sons-of-Hodir-Quests'
    ],
    standings: [
      { rank: 'Freundlich', rewards: ['Grundschulterverzauberung (Rang 1)'] },
      { rank: 'Wohlwollend', rewards: ['Verbesserte Schulterverzauberung (Rang 2)'] },
      { rank: 'Respektvoll', rewards: ['Starke Schulterverzauberung (Rang 3)'] },
      { rank: 'Ehrfürchtig', rewards: ['Beste verfügbare Schulterverzauberung', 'Zusätzliches Helmverzauberungsrezept'] }
    ],
    tips: [
      'Die tägliche Questanzahl ist begrenzt – regelmäßiges tägliches Einloggen beschleunigt den Grind erheblich',
      'Die Helmverzauberung ist erst ab Ehrfürchtig verfügbar und erfordert zusätzliche Materialien'
    ]
  },
  {
    id: 'frenzyheart-tribe',
    name: 'The Frenzyheart Tribe',
    side: 'Beide Fraktionen',
    type: 'Konkurrenz-Fraktion (Sholazar Basin)',
    zone: 'Sholazar Basin',
    theme: '#6e8f3f',
    audience: 'Fortgeschritten',
    minutes: 16,
    summary:
      'Wilde Trollstamm-Fraktion in Sholazar Basin, Gegenspieler der Oracles. Ruf kommt aus täglichen Quests am Frenzyheart-Lager und schaltet am Ende ein eigenes Reittier frei.',
    startRequirement: 'Ab Stufe 77, Entscheidung fällt mit der ersten angenommenen Frenzyheart- oder Oracle-Quest in Sholazar Basin',
    grindLength: '1-2 Wochen',
    estimatedTime: '1-2 Wochen bei täglichem Questzyklus bis Respektvoll, Ehrfürchtig ist ein Langzeitziel',
    howTo: [
      'Die Frenzyheart-Einführungsquestreihe in Sholazar Basin annehmen',
      'Tägliche Frenzyheart-Quests rund um das Lager abschließen'
    ],
    grindTargets: [
      'Tägliche Frenzyheart-Quests in Sholazar Basin'
    ],
    keyQuests: [
      'Frenzyheart-Einführungskette in Sholazar Basin'
    ],
    standings: [
      { rank: 'Freundlich', rewards: ['Grundhändler-Zugang'] },
      { rank: 'Wohlwollend', rewards: ['Zwischenausrüstung'] },
      { rank: 'Respektvoll', rewards: ['Verbesserte Trinkets und Schmuck'] },
      { rank: 'Ehrfürchtig', rewards: ['Kaufbares Hyänen-Reittier', 'Volles Frenzyheart-Rezeptsortiment'] }
    ],
    tips: [
      'Ruf bei den Frenzyheart senkt gleichzeitig den Ruf bei den Oracles – nicht parallel farmen',
      'Beide Sholazar-Fraktionen bieten unterschiedliche, aber gleichwertige Belohnungen – Entscheidung nach gewünschter Optik treffen'
    ]
  },
  {
    id: 'the-oracles',
    name: 'The Oracles',
    side: 'Beide Fraktionen',
    type: 'Konkurrenz-Fraktion (Sholazar Basin)',
    zone: 'Sholazar Basin',
    theme: '#3f9f8f',
    audience: 'Fortgeschritten',
    minutes: 16,
    summary:
      "Rätselhafte Fraktion rund um das Sonnenaltar-Lager in Sholazar Basin, Gegenspieler der Frenzyheart Tribe. Bekannt für Mysterious Eggs, die bei jedem Rufrang gegen zufällige Begleiter und Reittiere eingetauscht werden können.",
    startRequirement: 'Ab Stufe 77, Entscheidung fällt mit der ersten angenommenen Frenzyheart- oder Oracle-Quest in Sholazar Basin',
    grindLength: '1-2 Wochen',
    estimatedTime: '1-2 Wochen bei täglichem Questzyklus bis Respektvoll, Ehrfürchtig ist ein Langzeitziel',
    howTo: [
      'Die Oracle-Einführungsquestreihe in Sholazar Basin annehmen',
      'Tägliche Oracle-Quests rund um das Lager abschließen',
      'Gesammelte Ruf-Tokens gegen Mysterious Eggs beim Oracle-Händler eintauschen'
    ],
    grindTargets: [
      'Tägliche Oracle-Quests in Sholazar Basin'
    ],
    keyQuests: [
      'Oracle-Einführungskette in Sholazar Basin'
    ],
    standings: [
      { rank: 'Freundlich', rewards: ['Grundhändler-Zugang'] },
      { rank: 'Wohlwollend', rewards: ['Zwischenausrüstung'] },
      { rank: 'Respektvoll', rewards: ['Verbesserte Trinkets und Schmuck'] },
      { rank: 'Ehrfürchtig', rewards: ['Zugang zu Mysterious Eggs mit Chance auf seltene Begleiter und Reittiere', 'Volles Oracle-Rezeptsortiment'] }
    ],
    tips: [
      'Mysterious Eggs lassen sich bei jedem Rufrang einmalig kaufen – seltene Begleiter und Reittiere sind reiner Zufall',
      'Ruf bei den Oracles senkt gleichzeitig den Ruf bei der Frenzyheart Tribe – nicht parallel farmen'
    ]
  },
  {
    id: 'kirin-tor',
    name: 'Kirin Tor',
    side: 'Beide Fraktionen',
    type: 'Hauptstadt-Fraktion (Dalaran)',
    zone: 'Dalaran',
    theme: '#7f3fa0',
    audience: 'Einsteiger',
    minutes: 16,
    summary:
      'Zauberkundige Hauptstadt-Fraktion von Dalaran. Ruf kommt hauptsächlich aus täglichen Koch- und Angelquests sowie aus Dungeon-Bossen in The Violet Hold.',
    startRequirement: 'Ab Stufe 71, Ruf startet automatisch bei der Ankunft in Dalaran',
    grindLength: 'Mehrere Wochen',
    estimatedTime: 'Mehrere Wochen bei täglichem Koch- und Angelquestzyklus bis Ehrfürchtig',
    howTo: [
      'Tägliche Koch- und Angelquests in Dalaran abschließen',
      'The-Violet-Hold-Bosskills geben zusätzlichen Ruf',
      'Dalaran-bezogene Questreihen im Verlauf des Levelns abschließen'
    ],
    grindTargets: [
      'Tägliche Dalaran-Koch- und Angelquests',
      'The-Violet-Hold-Bosskills'
    ],
    keyQuests: [
      'Dalaran-Questreihen im Verlauf des Levelns'
    ],
    standings: [
      { rank: 'Freundlich', rewards: ['Grundhändler-Zugang'] },
      { rank: 'Wohlwollend', rewards: ['Zwischenschmuck'] },
      { rank: 'Respektvoll', rewards: ['Verbesserte Ringe und Trinkets'] },
      { rank: 'Ehrfürchtig', rewards: ['Ring of the Kirin Tor (Teleport-Ring)', 'Volles Fraktionsrezeptsortiment'] }
    ],
    tips: [
      'Tägliche Koch- und Angelquests in Dalaran sind der zuverlässigste Weg zu Exaltiert',
      'Läuft gut nebenbei mit dem Ruf für die eigene Dalaran-Botschaft (Silver Covenant bzw. Sunreavers)'
    ]
  },
  {
    id: 'silver-covenant-sunreavers',
    name: 'The Silver Covenant & The Sunreavers',
    side: 'Fraktionsabhängig (Allianz/Horde)',
    type: 'Dalaran-Botschaftsfraktionen',
    zone: 'Dalaran',
    theme: '#4f7fbf',
    audience: 'Fortgeschritten',
    minutes: 18,
    summary:
      "Sammel-Guide für die beiden an die Charakterfraktion gebundenen Dalaran-Botschaften: Silver Covenant für die Allianz im Silver Enclave, The Sunreavers für die Horde in der Sunreaver's Sanctuary. Beide schalten Bank, Klassentrainer und Portalraum der jeweiligen Botschaft frei.",
    startRequirement: 'Ab Stufe 71, automatisch je nach Charakterfraktion beim Erreichen von Dalaran',
    grindLength: 'Mehrere Wochen',
    estimatedTime: 'Mehrere Wochen bei täglichen Argent-Tournament-Turnierquests bis Ehrfürchtig',
    howTo: [
      "Die Botschafts-Einführungsquestreihe im Silver Enclave (Allianz) bzw. in der Sunreaver's Sanctuary (Horde) abschließen",
      'Tägliche Turnierquests am Argent Tournament geben zusätzlichen Ruf zur jeweiligen Botschaft',
      'Klassentrainer- und Bankquests in der jeweiligen Botschaft nutzen'
    ],
    grindTargets: [
      'Tägliche Argent-Tournament-Turnierquests'
    ],
    keyQuests: [
      "Botschafts-Einführungsquests im Silver Enclave bzw. der Sunreaver's Sanctuary"
    ],
    standings: [
      { rank: 'Freundlich', rewards: ['Zugang zur jeweiligen Botschaft mit Bank und Klassentrainern'] },
      { rank: 'Wohlwollend', rewards: ['Zwischenausrüstung'] },
      { rank: 'Respektvoll', rewards: ['Verbesserte Trinkets und Schmuck'] },
      { rank: 'Ehrfürchtig', rewards: ['Bestes verfügbares Botschaftszubehör', 'Volles Rezeptsortiment'] }
    ],
    tips: [
      'Beide Botschaften sind strikt an die Charakterfraktion gebunden, ein Seitenwechsel ist nicht möglich',
      'Turnierquests am Argent Tournament liefern gleichzeitig Ruf für die Argent Crusade und die jeweilige Botschaft'
    ]
  },
  {
    id: 'northrend-vanguard-factions',
    name: 'Nordend-Vorhut-Fraktionen',
    side: 'Beide Fraktionen',
    type: 'Hub-Fraktionen (Borean Tundra & Howling Fjord)',
    zone: 'Borean Tundra, Howling Fjord',
    theme: '#c9a86a',
    audience: 'Einsteiger',
    minutes: 14,
    summary:
      "Sammel-Guide für die Nordend-Einstiegsfraktionen: Valiance Expedition (Allianz) und Warsong Offensive (Horde) in Borean Tundra, Explorers' League (Allianz) und The Hand of Vengeance (Horde) in Howling Fjord, sowie die übergeordnete Alliance Vanguard bzw. Horde Expedition. Ruf steigt fast ausschließlich nebenbei beim normalen Leveln.",
    startRequirement: 'Ab Stufe 68, automatisch beim Betreten von Borean Tundra bzw. Howling Fjord',
    grindLength: 'Nebenbei',
    estimatedTime: 'Läuft praktisch vollständig beim normalen Durchleveln von Borean Tundra und Howling Fjord mit',
    howTo: [
      'Die Questreihen rund um Valiance Keep (Allianz) bzw. Warsong Hold (Horde) in Borean Tundra abschließen',
      'Die Questreihen rund um Valgarde (Allianz) bzw. Vengeance Landing (Horde) in Howling Fjord abschließen',
      'Fraktionsübergreifende Nordend-Quests erhöhen zusätzlich den Ruf bei Alliance Vanguard bzw. Horde Expedition'
    ],
    grindTargets: [
      'Kein dedizierter Grind nötig, normale Levelquests reichen für Respektvoll bzw. Ehrfürchtig bei den meisten dieser Fraktionen'
    ],
    keyQuests: [
      'Questreihen rund um Valiance Keep bzw. Warsong Hold in Borean Tundra',
      'Questreihen rund um Valgarde bzw. Vengeance Landing in Howling Fjord'
    ],
    standings: [
      { rank: 'Freundlich', rewards: ['Grundhändler-Zugang in den jeweiligen Vorposten'] },
      { rank: 'Wohlwollend', rewards: ['Rabatte bei Händlern'] },
      { rank: 'Respektvoll', rewards: ['Zwischenausrüstung und Verzauberungen'] },
      { rank: 'Ehrfürchtig', rewards: ['Episches Fraktionszubehör bei Alliance Vanguard bzw. Horde Expedition'] }
    ],
    tips: [
      'Wird praktisch automatisch beim normalen Durchleveln von Borean Tundra und Howling Fjord erreicht',
      'Für Ehrfürchtig bei Alliance Vanguard bzw. Horde Expedition lohnt sich gezieltes Nacharbeiten übrig gebliebener Questreihen'
    ]
  }
];

export const reputationGuides = {
  classic: classicReputationGuides,
  'the-burning-crusade': tbcReputationGuides,
  'wrath-of-the-lich-king': wrathReputationGuides
};
