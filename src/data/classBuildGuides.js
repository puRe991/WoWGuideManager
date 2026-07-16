const classicClassBuildGuides = {
  druid: {
    rotations: {
      leveling: ['Pre-HoT bei schweren Pulls', 'Katzengestalt eröffnen', 'Faerie Fire gegen harte Ziele', 'Klaue bis 4-5 Combo-Punkte', 'Wilder Biss oder Rip bei langen Kämpfen', 'Powershift nur mit Manareserve'],
      dungeon: ['Als Feral: Mark of the Wild aktiv halten', 'Faerie Fire auf Fokusziel', 'Mangle gibt es in Classic nicht: Klaue/Shred nach Position', 'Bärform für Notfall-Taunt', 'Innervate für Heiler-Timing sparen'],
      raid: ['Feral: Energy-Ticks planen', 'Faerie Fire dauerhaft halten', 'Powershifting mit Wolfshead Helm', 'Heiler: Rejuvenation/Regrowth gezielt, Healing Touch downranken', 'Battle-Rez für kritische Ziele']
    },
    bestInSlot: ['Wolfshead Helm', 'Manual Crowd Pummeler', 'Devilsaur Set', 'Blackstone Ring', 'Mark of Fordring', 'Hide of the Wild für Heiler-Set']
  },
  hunter: {
    rotations: {
      leveling: ['Pet auf Defensive/Attack schicken', 'Hunter’s Mark vor Elite', 'Serpent Sting nur bei ausreichend langer TTK', 'Auto Shot nicht clippen', 'Arcane Shot als Fokusdump', 'Feign Death bei Aggro'],
      dungeon: ['Pet-Taunt bei Gruppen deaktivieren', 'Trap vor Pull mit Tank abstimmen', 'Multi-Shot nur ohne CC-Bruch', 'Tranq Shot sobald verfügbar einplanen', 'Aspect passend wechseln'],
      raid: ['Auto-Shot-Timer halten', 'Aimed Shot/Multi-Shot zwischen Auto Shots', 'Serpent Sting vermeiden wenn Debuff-Limit kritisch ist', 'Trueshot Aura Position halten', 'Feign Death für Threat-Reset']
    },
    bestInSlot: ['Rhok’delar', 'Lok’delar', 'Giantstalker Set', 'Blackhand’s Breadth', 'Devilsaur Set vor Raid', 'Royal Seal of Eldre’Thalas']
  },
  mage: {
    rotations: {
      leveling: ['Frostbolt pullen', 'Abstand halten', 'Frost Nova bei Nahkampfkontakt', 'Cone of Cold zum Kiten', 'Blizzard für sichere AoE-Pulls', 'Evocation nur nach großem Manafenster'],
      dungeon: ['Sheep-Ziel markieren', 'Frostbolt Fokusziel', 'Counterspell Caster', 'Blizzard nur bei Tank-Aggro', 'Decurse priorisieren'],
      raid: ['Frostbolt/Fireball je nach Phase und Resistenz', 'Scorch-Stapel bei Fire-Spec koordinieren', 'Cooldowns mit Trinkets', 'Remove Curse sofort', 'Mana Gems und Evocation timen']
    },
    bestInSlot: ['Robe of the Archmage', 'Freezing Band', 'Briarwood Reed', 'Choker of the Fire Lord', 'Arcanist/Netherwind Set', 'Azuresong Mageblade']
  },
  paladin: {
    rotations: {
      leveling: ['Passende Aura aktivieren', 'Seal of Command oder Righteousness', 'Judgement bei Cooldown', 'Auto-Attacks tragen Schaden', 'Hammer of Justice gegen gefährliche Caster', 'Flash of Light/Holy Light defensiv'],
      dungeon: ['Segen pro Rolle verteilen', 'Heiler: Flash of Light downranken', 'Cleanse sofort', 'Protection: Consecration für AoE-Threat', 'BoP/Bubble als Notfalltools'],
      raid: ['Blessing-Zuweisungen strikt halten', 'Holy Light/Flash of Light nach Schadenstyp', 'Cleanse-Assignments', 'Divine Intervention als Wipe-Schutz', 'Judgement nur wenn zugewiesen']
    },
    bestInSlot: ['Lawbringer/Judgement Set', 'Hide of the Wild', 'Briarwood Reed', 'Royal Seal of Eldre’Thalas', 'The Unstoppable Force für Ret', 'Hand of Edward the Odd']
  },
  priest: {
    rotations: {
      leveling: ['Power Word: Shield nur wenn nötig', 'Shadow Word: Pain', 'Mind Blast sparsam', 'Wand bis Spirit Tap', 'Renew/Heal außerhalb der 5-Sekunden-Regel', 'Psychic Scream als Notfall'],
      dungeon: ['Renew auf Tank bei konstantem Schaden', 'Flash Heal nur bei Spike', 'Greater Heal/Heal downranken', 'Dispel Magic priorisieren', 'Power Word: Shield für Notfälle statt Dauerbetrieb'],
      raid: ['Healing Assignments einhalten', 'Greater Heal downranken', 'Prayer of Healing gruppenweise', 'Dispel/Remove Disease sofort', 'Power Infusion/Fear Ward wenn vorhanden planen']
    },
    bestInSlot: ['Truefaith Vestments', 'Benediction/Anathema', 'Hide of the Wild', 'Royal Seal of Eldre’Thalas', 'Devout/Prophecy Set', 'Mindtap Talisman']
  },
  rogue: {
    rotations: {
      leveling: ['Stealth nur bei Value-Openers', 'Sinister Strike Combo-Punkte', 'Slice and Dice früh aktivieren', 'Eviscerate als Finisher', 'Kick gegen Caster', 'Gouge/Bandage bei Notfall'],
      dungeon: ['Sap vor Pull falls markiert', 'Slice and Dice dauerhaft halten', 'Expose Armor nur wenn abgesprochen', 'Kick Caster', 'Vanish bei Threat-Spikes'],
      raid: ['Slice and Dice niemals fallen lassen', 'Sinister Strike Backstab je nach Build', 'Adrenaline Rush/Blade Flurry mit Trinkets', 'Feint/Vanish für Threat', 'Poisons nach Boss/Resistenz']
    },
    bestInSlot: ['Dal’Rend Waffen', 'Devilsaur Set', 'Blackhand’s Breadth', 'Hand of Justice', 'Shadowcraft/Nightslayer Set', 'Perdition’s Blade']
  },
  shaman: {
    rotations: {
      leveling: ['Lightning Bolt Pull', 'Waffenbuff aktiv', 'Totems nur bei langen Kämpfen', 'Flame Shock oder Earth Shock', 'Auto-Attacks nutzen', 'Healing Wave defensiv'],
      dungeon: ['Windfury/Strength of Earth für Melees', 'Tremor/Grounding situativ', 'Chain Heal bei Gruppenschaden', 'Purge gefährliche Buffs', 'Mana-Totem nach Pull-Tempo'],
      raid: ['Totem-Gruppenauftrag halten', 'Chain Heal als Kernheilung', 'Lesser Healing Wave bei Spike', 'Mana Tide/Tranquil Air falls geskillt', 'Reincarnation-Cooldown kommunizieren']
    },
    bestInSlot: ['The Unstoppable Force für Enhancement', 'Hide of the Wild', 'Earthfury/Ten Storms Set', 'Briarwood Reed', 'Royal Seal of Eldre’Thalas', 'Hand of Justice']
  },
  warlock: {
    rotations: {
      leveling: ['Pet tanken lassen', 'Corruption/Curse setzen', 'Life Tap kontrolliert', 'Drain Life bei Druck', 'Drain Soul für Shards', 'Fear nur mit sicherem Raum'],
      dungeon: ['Imp/Blood Pact oder Succubus CC wählen', 'Curse nach Raidlead/Dungeonbedarf', 'DoTs ohne CC-Bruch', 'Healthstone/Soulstone verteilen', 'Banish bei Elementaren/Dämonen'],
      raid: ['Curse-Zuweisung einhalten', 'Shadow Bolt als Hauptzauber', 'Corruption nur wenn Debuff-Slots frei', 'Life Tap zwischen Damage-Fenstern', 'Soulstone auf zugewiesenes Ziel']
    },
    bestInSlot: ['Robe of the Void', 'Felheart/Nemesis Set', 'Briarwood Reed', 'Staff of Dominance', 'Ban’thok Sash', 'Azuresong Mageblade']
  },
  warrior: {
    rotations: {
      leveling: ['Charge eröffnen', 'Battle Shout aktiv', 'Rend bei langen Kämpfen', 'Overpower nach Dodge', 'Hamstring gegen Runner', 'Execute zum Finish'],
      dungeon: ['Defensive Stance beim Tanken', 'Sunder Armor stapeln', 'Revenge bei Proc', 'Taunt nur bei Aggroverlust', 'Berserker Rage/Fear Break vorbereiten'],
      raid: ['Fury: Whirlwind auf Cooldown, Heroic Strike/Cleave als Rage-Dump', 'Heroic Strike nur bei Rage-Überschuss', 'Death Wish/Recklessness mit Cooldown-Plan', 'Tank: Shield Block vor Crush-Spikes', 'Sunder Armor/Threat vor DPS-Burst']
    },
    bestInSlot: ['Lionheart Helm', 'Savage Gladiator Chain', 'Dal’Rend Set', 'Hand of Justice', 'Blackhand’s Breadth', 'Quel’Serrar für Tank']
  }
};

const tbcClassBuildGuides = {
  druid: {
    rotations: {
      leveling: ['Mangle für Bär/Katze pullen', 'Faerie Fire gegen harte Ziele', 'Rip/Ferocious Bite als Katze', 'Regrowth für Solo-Sustain', 'Innervate für Manafenster'],
      dungeon: ['Restoration: Rejuvenation flächig verteilen', 'Lifebloom auf Tank halten', 'Swiftmend bei Spike-Schaden', 'Nourish als Mana-Filler', 'Innervate für Heiler-Timing sparen'],
      raid: ['Tree of Life Form permanent aktiv', 'Lifebloom-Stack nie auslaufen lassen', 'Rejuvenation auf Raid-Cooldown-Ziele', 'Swiftmend nur mit aktivem HoT', 'Battle-Rez für kritische Ziele']
    },
    bestInSlot: ['Idol of the Emerald Queen', 'Vestments of the Sea-Witch', 'Gladiator’s Wildhide', 'Tree of Life Set (T5/T6)', 'Cyclone Staff', 'Mark of the Fallen Champion']
  },
  hunter: {
    rotations: {
      leveling: ['Pet vorpullen lassen', 'Hunter’s Mark auf Elite', 'Steady Shot zwischen Auto Shots', 'Serpent Sting bei langer TTK', 'Mend Pet zwischen Kämpfen'],
      dungeon: ['Trap-Rotation mit Tank abstimmen', 'Multi-Shot nur ohne CC-Bruch', 'Kill Command auf Cooldown', 'Feign Death für Threat-Reset', 'Aspect passend wechseln'],
      raid: ['Expose Weakness konstant halten (Survival)', 'Steady-Shot-Weaving zwischen Auto Shots', 'Kill Command/Trinkets synchronisieren', 'Serpent Sting nur bei freiem Debuff-Slot', 'Rapid Fire mit Bloodlust-Äquivalent timen']
    },
    bestInSlot: ['Gladiator’s Pursuit', 'Black Bow of the Betrayer', 'Rift Stalker Armor', 'Gronnstalker’s Armor (T6)', 'Ashjre’thul, Crossbow of Smiting', 'Talon of Azshara']
  },
  mage: {
    rotations: {
      leveling: ['Frostbolt pullen', 'Frost Nova bei Nahkampfkontakt', 'Cone of Cold zum Kiten', 'Blizzard für AoE-Pulls', 'Evocation nach großem Manafenster'],
      dungeon: ['Sheep-Ziel markieren', 'Fireball/Frostbolt Fokusziel', 'Counterspell gegen Caster', 'Decurse priorisieren', 'Blizzard nur bei Tank-Aggro'],
      raid: ['Scorch-Stapel aufbauen und halten', 'Fireball als Hauptzauber', 'Combustion auf garantierte Crits legen', 'Fire Blast als Instant-Filler', 'Mana Gems/Evocation timen']
    },
    bestInSlot: ['Gladiator’s Felweave', 'Ashkandi, Greatsword of the Brotherhood (Off-Spec)', 'Sunfire Robe (T5)', 'Frostfire Robe (T6)', 'Wand of the Tides', 'Bloodmage Signet']
  },
  paladin: {
    rotations: {
      leveling: ['Passende Aura aktivieren', 'Seal of Command/Righteousness', 'Judgement bei Cooldown', 'Auto-Attacks tragen Schaden', 'Flash of Light defensiv'],
      dungeon: ['Blessing pro Rolle verteilen', 'Holy Shock priorisieren', 'Cleanse sofort', 'Consecration für AoE-Threat (Protection)', 'BoP/Bubble als Notfalltools'],
      raid: ['Blessing-Zuweisungen strikt halten', 'Holy Shock auf Cooldown', 'Flash of Light/Holy Light nach Schadenstyp', 'Cleanse-Assignments einhalten', 'Divine Favor/Illumination für Manafenster']
    },
    bestInSlot: ['Vestments of Faith (T5)', 'Redemption Set (T6)', 'Gladiator’s Salvation', 'Ashbringer-Reihe (Retribution)', 'Libram of Avengement', 'Aldori Legacy Defender']
  },
  priest: {
    rotations: {
      leveling: ['Power Word: Shield situativ', 'Shadow Word: Pain früh setzen', 'Mind Blast sparsam', 'Wand-Schaden ausnutzen (Shadow)', 'Renew/Heal außerhalb der 5-Sekunden-Regel'],
      dungeon: ['Renew auf Tank bei konstantem Schaden', 'Flash Heal nur bei Spike', 'Dispel Magic priorisieren', 'Power Word: Shield für Notfälle', 'Greater Heal downranken'],
      raid: ['Vampiric Touch niemals auslaufen lassen', 'Shadow Word: Pain/Devouring Plague pflegen', 'Mind Flay als Hauptfiller', 'Power Infusion für Cooldown-Fenster', 'Circle of Healing bei Gruppenschaden']
    },
    bestInSlot: ['Vestments of Absolution (T5)', 'Vestments of Transcendence (T6)', 'Gladiator’s Investiture', 'Cataclysm’s Edge', 'Silver Crescent Idol', 'Robes of Faith']
  },
  rogue: {
    rotations: {
      leveling: ['Stealth nur bei Value-Openern', 'Sinister Strike Combo-Punkte', 'Slice and Dice früh aktivieren', 'Eviscerate als Finisher', 'Kick gegen Caster'],
      dungeon: ['Sap vor Pull falls markiert', 'Slice and Dice dauerhaft halten', 'Kick Caster', 'Expose Armor nur wenn abgesprochen', 'Vanish bei Threat-Spikes'],
      raid: ['Slice and Dice niemals fallen lassen', 'Sinister Strike/Mutilate je nach Build', 'Adrenaline Rush/Blade Flurry mit Trinkets', 'Kick-Assignments einhalten', 'Poisons nach Boss/Resistenz wählen']
    },
    bestInSlot: ['Gladiator’s Vestments (Leder)', 'Blinkstrike', 'Slayer’s Armor (T5)', 'Bonescythe Armor (T6)', 'Warp Slicer/Shadowblade', 'Dragonspine Trophy']
  },
  shaman: {
    rotations: {
      leveling: ['Lightning Bolt pullen', 'Waffenbuff aktiv halten', 'Totems nur bei langen Kämpfen', 'Flame Shock/Earth Shock situativ', 'Healing Wave defensiv'],
      dungeon: ['Windfury/Strength of Earth für Melees', 'Chain Heal bei Gruppenschaden', 'Purge gefährliche Buffs', 'Tremor/Grounding situativ', 'Mana-Totem nach Pull-Tempo'],
      raid: ['Chain Heal auf gruppierte Ziele', 'Lesser Healing Wave bei Spike', 'Totem-Twisting für Elemental-Burst', 'Mana Tide Totem auf Cooldown', 'Earth Shock/Flame Shock im Elemental-Spec']
    },
    bestInSlot: ['Cyclone Regalia (T5)', 'Skyshatter Regalia (T6)', 'Gladiator’s Wartide', 'Nathrezim Mindblade', 'Eternium Rune Blade', 'Totem of the Void']
  },
  warlock: {
    rotations: {
      leveling: ['Pet tanken lassen', 'Curse/Corruption setzen', 'Life Tap kontrolliert', 'Drain Life bei Druck', 'Fear nur mit sicherem Raum'],
      dungeon: ['Pet nach CC-Bedarf wählen', 'Curse nach Raidlead/Dungeonbedarf', 'DoTs ohne CC-Bruch', 'Healthstone/Soulstone verteilen', 'Banish bei Elementaren/Dämonen'],
      raid: ['Curse-Zuweisung einhalten', 'DoTs (Corruption/Siphon Life/Curse of Agony) pflegen', 'Shadow Bolt als Hauptfiller', 'Life Tap zwischen Damage-Fenstern', 'Soulstone auf zugewiesenes Ziel']
    },
    bestInSlot: ['Voidheart Raiment (T5)', 'Corruptor Raiment (T6)', 'Gladiator’s Dreadgear', 'Warp Slicer (Off-Spec)', 'Wand of the Cosmos', 'Sunflare']
  },
  warrior: {
    rotations: {
      leveling: ['Charge eröffnen', 'Battle Shout aktiv', 'Rend bei langen Kämpfen', 'Overpower nach Dodge', 'Execute zum Finish'],
      dungeon: ['Defensive Stance beim Tanken', 'Sunder Armor stapeln', 'Revenge bei Proc', 'Taunt nur bei Aggroverlust', 'Berserker Rage/Fear Break vorbereiten'],
      raid: ['Fury: Whirlwind auf Cooldown, Heroic Strike als Rage-Dump', 'Death Wish/Recklessness mit Cooldown-Plan', 'Tank: Shield Block vor Crush-Spikes', 'Sunder Armor stapeln', 'Bloodrage/Rage-Management planen']
    },
    bestInSlot: ['Warbringer Armor (T5)', 'Destroyer Armor (T6)', 'Gladiator’s Battlegear', 'Warglaive of Azzinoth (Fury)', 'Bulwark of Azzinoth (Protection)', 'The Sun Eater']
  }
};

const wrathClassBuildGuides = {
  'death-knight': {
    rotations: {
      leveling: ['Icy Touch/Plague Strike für Diseases', 'Death Coil als Runic-Power-Dump', 'Blood Strike/Scourge Strike als Filler', 'Death Grip für Pulls', 'Anti-Magic Shell defensiv'],
      dungeon: ['Diseases auf Fokusziel halten', 'Death Grip für Adds/Pulls', 'Icebound Fortitude als Notfall-Cooldown (Blood)', 'Strangulate gegen Caster', 'Army of the Dead vor großen Pulls'],
      raid: ['Disease-Uptime konstant halten', 'Scourge Strike als Hauptfiller (Unholy)', 'Summon Gargoyle auf Cooldown', 'Runic Power niemals cappen lassen', 'Vampiric Blood/Icebound Fortitude als Tank-Cooldowns']
    },
    bestInSlot: ['Corpse Tongue Coil', 'Deathbringer’s Will', 'Scourgeborne Battlegear (T9)', 'Thassarian’s Battlegear (T10)', 'Shadowmourne', 'Bryntroll, the Bone Arbiter']
  },
  druid: {
    rotations: {
      leveling: ['Mangle für Bär/Katze pullen', 'Faerie Fire gegen harte Ziele', 'Rip/Ferocious Bite als Katze', 'Regrowth für Solo-Sustain', 'Wild Growth für Gruppenheilung'],
      dungeon: ['Lifebloom auf Tank halten', 'Rejuvenation flächig verteilen', 'Wild Growth auf Cooldown', 'Swiftmend bei Spike-Schaden', 'Nourish als Mana-Filler'],
      raid: ['Lifebloom-Stack nie auslaufen lassen', 'Wild Growth auf dichten Gruppenblock', 'Starfall vor AoE-Phasen (Balance)', 'Swiftmend nur mit aktivem HoT', 'Tree of Life Form für AoE-Heilphasen']
    },
    bestInSlot: ['Idol of Mutilation', 'Dreamwalker Raiment (T9)', 'Nightsong Raiment (T10)', 'Val’anyr, Hammer of Ancient Kings', 'Rhok Talisman', 'Sabatons of Ancient Waters']
  },
  hunter: {
    rotations: {
      leveling: ['Pet vorpullen lassen', 'Serpent Sting früh setzen', 'Steady Shot zwischen Auto Shots', 'Explosive Shot bei Lock and Load', 'Mend Pet zwischen Kämpfen'],
      dungeon: ['Trap-Rotation mit Tank abstimmen', 'Multi-Shot nur ohne CC-Bruch', 'Kill Command auf Cooldown', 'Feign Death für Threat-Reset', 'Aspect passend wechseln'],
      raid: ['Lock-and-Load-Prozs sofort mit Explosive Shot nutzen', 'Serpent-Sting-Uptime halten', 'Black Arrow einplanen', 'Kill Command konsequent auf Cooldown', 'Rapid Fire mit Bloodlust/Heroism synchronisieren']
    },
    bestInSlot: ['Thori’dal, the Stars’ Fury', 'Rift Stalker Armor (T9)', 'Scourgestalker Battlegear (T10)', 'Longview', 'Deathbringer’s Will', 'Talisman of Resurgence']
  },
  mage: {
    rotations: {
      leveling: ['Frostbolt pullen', 'Frost Nova bei Nahkampfkontakt', 'Living Bomb aufrechterhalten', 'Blizzard für AoE-Pulls', 'Evocation nach großem Manafenster'],
      dungeon: ['Fireball/Frostbolt Fokusziel', 'Counterspell gegen Caster', 'Living Bomb bei mehreren Zielen', 'Decurse priorisieren', 'Cone of Cold zum Kiten'],
      raid: ['Living Bomb im AoE-Movement-Fenster einplanen', 'Hot-Streak-Procs sofort mit Pyroblast nutzen', 'Fire Blast als Instant-Filler', 'Combustion mit Crit-Cooldowns kombinieren', 'Mana Gems/Evocation timen']
    },
    bestInSlot: ['Kirin Tor Robes (T9)', 'Zabra’jin Robes (T10)', 'Fal’inrush, Defender of Quel’thalas', 'Deaths Verdict', 'Sundial of the Exiled', 'Shadowfrost Shard']
  },
  paladin: {
    rotations: {
      leveling: ['Passende Aura aktivieren', 'Seal of Command/Righteousness', 'Judgement bei Cooldown', 'Crusader Strike als Filler', 'Flash of Light defensiv'],
      dungeon: ['Beacon of Light auf den Tank', 'Holy Shock priorisieren', 'Consecration für AoE-Threat (Protection)', 'Cleanse sofort', 'BoP/Bubble als Notfalltools'],
      raid: ['Beacon of Light konstant erneuern', 'Divine Storm bei mehreren Zielen priorisieren', 'Holy Shock auf Cooldown', 'Flash of Light/Holy Light nach Schadenstyp', 'Avenging Wrath mit Trinkets synchronisieren']
    },
    bestInSlot: ['Lightsworn Battlegear (T9)', 'Liadrin’s Battlegear (T10)', 'Shadowmourne (Retribution Off-Spec)', 'Deathbringer’s Will', 'Sundial of the Exiled', 'Whispering Fanged Skull']
  },
  priest: {
    rotations: {
      leveling: ['Power Word: Shield situativ', 'Shadow Word: Pain früh setzen', 'Mind Blast sparsam', 'Renew/Heal außerhalb der 5-Sekunden-Regel', 'Devouring Plague einplanen'],
      dungeon: ['Renew auf Tank bei konstantem Schaden', 'Penance/Flash Heal bei Spike', 'Dispel Magic priorisieren', 'Circle of Healing bei Gruppenschaden', 'Power Word: Shield für Notfälle'],
      raid: ['Vampiric Touch niemals auslaufen lassen (Shadow)', 'Rapture-Timing maximieren (Discipline)', 'Mind Flay als Hauptfiller', 'Pain Suppression für kritische Tank-Fenster', 'Power Infusion für DPS-Cooldown-Fenster']
    },
    bestInSlot: ['Vestments of Dying Light (T9)', 'Crimson Acolyte Raiment (T10)', 'Val’anyr, Hammer of Ancient Kings', 'Sundial of the Exiled', 'Rosary of Light', 'Corpse Tongue Coil']
  },
  rogue: {
    rotations: {
      leveling: ['Stealth nur bei Value-Openern', 'Sinister Strike Combo-Punkte', 'Slice and Dice früh aktivieren', 'Eviscerate als Finisher', 'Kick gegen Caster'],
      dungeon: ['Slice and Dice dauerhaft halten', 'Kick Caster', 'Killing Spree situativ', 'Vanish bei Threat-Spikes', 'Poisons nach Ziel wählen'],
      raid: ['Slice and Dice niemals fallen lassen', 'Sinister Strike/Mutilate je nach Build', 'Killing Spree als Burst-Cooldown', 'Kick-Assignments einhalten', 'Poisons nach Boss/Resistenz wählen']
    },
    bestInSlot: ['Garona’s Signet Ring', 'Nightstalker Battlegear (T9)', 'Vancleef Battlegear (T10)', 'Shadowmourne (Off-Spec)', 'Rathrak, the Poisonous Mind', 'Deathbringer’s Will']
  },
  shaman: {
    rotations: {
      leveling: ['Lightning Bolt pullen', 'Waffenbuff aktiv halten', 'Flame Shock/Lava Burst kombinieren', 'Earth Shock situativ', 'Healing Wave/Riptide defensiv'],
      dungeon: ['Windfury/Strength of Earth für Melees', 'Chain Heal bei Gruppenschaden', 'Riptide vor Heal-Rotation setzen', 'Purge gefährliche Buffs', 'Mana-Totem nach Pull-Tempo'],
      raid: ['Lava Burst immer nach frischem Flame Shock', 'Chain Heal auf gruppierte Ziele', 'Riptide-Cooldown niemals brachliegen lassen', 'Mana Tide Totem auf Cooldown', 'Bloodlust/Heroism mit Raid-Cooldowns synchronisieren']
    },
    bestInSlot: ['Worldbreaker’s Battlegear (T9)', 'Nobundo’s Battlegear (T10)', 'Val’anyr, Hammer of Ancient Kings', 'Bryntroll, the Bone Arbiter', 'Sundial of the Exiled', 'Rosary of Light']
  },
  warlock: {
    rotations: {
      leveling: ['Pet tanken lassen', 'Curse/Corruption setzen', 'Life Tap kontrolliert', 'Drain Life bei Druck', 'Fear nur mit sicherem Raum'],
      dungeon: ['Pet nach CC-Bedarf wählen', 'Haunt/Unstable Affliction pflegen', 'DoTs ohne CC-Bruch', 'Healthstone/Soulstone verteilen', 'Banish bei Elementaren/Dämonen'],
      raid: ['Haunt vor DoT-Refresh casten', 'Unstable Affliction aufrechterhalten', 'Shadow Bolt als Filler', 'Metamorphosis-Burst nutzen (Demonology)', 'Life Tap zwischen Damage-Fenstern']
    },
    bestInSlot: ['Plagueheart Raiment (T9)', 'Deathbringer’s Will', 'Ahn’Kahar Blood Hunter’s Battlegear (T10)', 'Val’anyr, Hammer of Ancient Kings (Off-Spec)', 'Sundial of the Exiled', 'Grim Toll']
  },
  warrior: {
    rotations: {
      leveling: ['Charge eröffnen', 'Battle Shout aktiv', 'Bloodthirst auf Cooldown', 'Overpower nach Dodge', 'Execute zum Finish'],
      dungeon: ['Defensive Stance beim Tanken', 'Sunder Armor/Devastate stapeln', 'Revenge bei Proc', 'Shockwave für AoE-Threat', 'Berserker Rage/Fear Break vorbereiten'],
      raid: ['Titan’s Grip: Bloodthirst und Whirlwind auf Cooldown (Fury)', 'Heroic Strike bei Rage-Überschuss', 'Recklessness/Death Wish mit Trinkets synchronisieren', 'Tank: Shockwave/Concussion Blow als Cooldowns', 'Sunder Armor/Devastate stapeln']
    },
    bestInSlot: ['Siegebreaker Battlegear (T9)', 'Wrynn’s Battlegear/Bloodfang (T10)', 'Shadowmourne', 'Deathbringer’s Will', 'Gurthalak, Voice of the Deeps', 'Whispering Fanged Skull']
  }
};

const mopClassBuildGuides = {
  'death-knight': {
    rotations: {
      leveling: ['Diseases auf Fokusziel bringen', 'Death Coil als Runic-Power-Dump', 'Scourge Strike als Filler', 'Death Grip für Pulls', 'Anti-Magic Shell defensiv'],
      dungeon: ['Diseases konsequent halten', 'Death Grip für Adds/Pulls', 'Dark Transformation für Ghoul-Burst', 'Strangulate gegen Caster', 'Icebound Fortitude als Notfall-Cooldown'],
      raid: ['Disease-Uptime konstant halten', 'Scourge Strike als Hauptfiller (Unholy)', 'Summon Gargoyle auf Cooldown', 'Runic Power niemals cappen lassen', 'Dark Transformation mit Burst-Fenstern synchronisieren']
    },
    bestInSlot: ['Souldrinker', 'Battlegear of the Undying Nightmare (T15)', 'Kor’kron Battlegear (T14)', 'Reforged Fireshard Bracers', 'Thok’s Tail Tip', 'Haromm’s Talisman']
  },
  druid: {
    rotations: {
      leveling: ['Mangle/Shred als Katze', 'Faerie Fire gegen harte Ziele', 'Rip/Ferocious Bite als Katze', 'Regrowth für Solo-Sustain', 'Wild Growth für Gruppenheilung'],
      dungeon: ['Lifebloom auf Tank halten', 'Rejuvenation flächig verteilen', 'Wild Growth auf Cooldown', 'Swiftmend bei Spike-Schaden', 'Sunfire/Moonfire aufrechterhalten (Balance)'],
      raid: ['Eclipse-Balance im Blick behalten (Balance)', 'Wild Growth auf dichten Gruppenblock', 'Celestial Alignment mit Burst-Fenstern synchronisieren', 'Swiftmend nur mit aktivem HoT', 'Lifebloom-Stack nie auslaufen lassen']
    },
    bestInSlot: ['Fangs of the Father (Legendary Feral)', 'Vestments of the Eternal Blossom (T15)', 'Windwaker Regalia (T14)', 'Rime of the Time-Lost Mariner', 'Thok’s Tail Tip', 'Haromm’s Talisman']
  },
  hunter: {
    rotations: {
      leveling: ['Pet vorpullen lassen', 'Serpent Sting früh setzen', 'Cobra Shot/Steady Shot als Fokus-Filler', 'Explosive Shot bei Lock and Load', 'Mend Pet zwischen Kämpfen'],
      dungeon: ['Trap-Rotation mit Tank abstimmen', 'Black Arrow einplanen', 'Kill Command auf Cooldown', 'Feign Death für Threat-Reset', 'Aspect passend wechseln'],
      raid: ['Lock-and-Load-Prozs sofort mit Explosive Shot nutzen', 'Serpent-Sting-Uptime halten', 'Black Arrow einplanen', 'Kill Command konsequent auf Cooldown', 'Rapid Fire mit Bloodlust/Heroism synchronisieren']
    },
    bestInSlot: ['Rume’s Last Compass', 'Yaungol Slayer Battlegear (T15)', 'Spirit Beast Ambusher’s Battlegear (T14)', 'Reforged Fireshard Bracers', 'Rune of Re-Origination', 'Haromm’s Talisman']
  },
  mage: {
    rotations: {
      leveling: ['Frostbolt pullen', 'Frost Nova bei Nahkampfkontakt', 'Fireball/Pyroblast als Filler', 'Inferno Blast auf Cooldown', 'Evocation nach großem Manafenster'],
      dungeon: ['Fireball Fokusziel', 'Counterspell gegen Caster', 'Inferno Blast bei mehreren Zielen', 'Alter Time für Burst-Fenster', 'Mana Gems bei Bedarf'],
      raid: ['Pyroblast!-Prozs sofort nutzen', 'Combustion nach Ignite-Aufbau zünden', 'Inferno Blast auf Cooldown', 'Mirror Image für Burst-Fenster einplanen', 'Mana Gems/Evocation timen']
    },
    bestInSlot: ['Wushoolay’s Final Choice', 'Regalia of the Exorcist (T15)', 'Regalia of the Burning Scroll (T14)', 'Rume’s Last Compass', 'Rune of Re-Origination', 'Haromm’s Talisman']
  },
  monk: {
    rotations: {
      leveling: ['Tiger Palm für Chi-Generierung', 'Rising Sun Kick auf Cooldown', 'Blackout Kick als Filler', 'Roll für Mobilität', 'Chi Wave als Nebenschaden/Heilung'],
      dungeon: ['Stagger über Purifying Brew abbauen (Brewmaster)', 'Soothing Mist/Fistweaving abwägen (Mistweaver)', 'Rising Sun Kick auf Cooldown (Windwalker)', 'Provoke für Aggro-Kontrolle', 'Spinning Crane Kick bei mehreren Zielen'],
      raid: ['Chi niemals cappen lassen', 'Rising Sun Kick/Blackout Kick priorisieren (Windwalker)', 'Xuen, the White Tiger als Raid-Cooldown', 'Purifying Brew konsequent nutzen (Brewmaster)', 'Thunder Focus Tea vor großen Heilfenstern (Mistweaver)']
    },
    bestInSlot: ['Rune of Re-Origination', 'Windwalker Battlegear (T15)', 'Yaungol Slayer-Äquivalent (T14)', 'Reforged Fireshard Bracers', 'Thok’s Tail Tip', 'Haromm’s Talisman']
  },
  paladin: {
    rotations: {
      leveling: ['Passende Aura aktivieren', 'Crusader Strike als Filler', 'Judgement bei Cooldown', 'Templar’s Verdict bei 3+ Holy Power', 'Flash of Light defensiv'],
      dungeon: ['Beacon of Light auf den Tank', 'Holy Radiance für Flächenheilung', 'Sacred Shield/Shield Barrier defensiv (Protection)', 'Cleanse sofort', 'Divine Storm bei mehreren Zielen'],
      raid: ['Beacon of Light konstant erneuern', 'Holy Radiance vor großen Schadensphasen', 'Divine Purpose-Prozs sofort nutzen', 'Holy Shock auf Cooldown', 'Avenging Wrath mit Trinkets synchronisieren']
    },
    bestInSlot: ['Souldrinker (Off-Spec)', 'Judgment Battlegear (T15)', 'Battlegear of the Undying Nightmare-Äquivalent (T14)', 'Rune of Re-Origination', 'Thok’s Tail Tip', 'Haromm’s Talisman']
  },
  priest: {
    rotations: {
      leveling: ['Power Word: Shield situativ', 'Shadow Word: Pain früh setzen', 'Mind Blast sparsam', 'Devouring Plague einplanen', 'Renew/Heal außerhalb der 5-Sekunden-Regel'],
      dungeon: ['Renew auf Tank bei konstantem Schaden', 'Penance/Flash Heal bei Spike', 'Mindbender auf Cooldown', 'Circle of Healing bei Gruppenschaden', 'Power Word: Shield für Notfälle'],
      raid: ['Vampiric Touch niemals auslaufen lassen (Shadow)', 'Spirit Shell vor Schadensspitzen vorcasten (Discipline)', 'Mind Flay als Hauptfiller', 'Mindbender synchronisiert Schaden und Mana', 'Power Infusion für DPS-Cooldown-Fenster']
    },
    bestInSlot: ['Fu Zan, the Wandering Sage (Legendary Staff)', 'Vestments of the Sha-Touched Hero (T15)', 'Regalia of the Haunted Forest (T14)', 'Rune of Re-Origination', 'Thok’s Tail Tip', 'Haromm’s Talisman']
  },
  rogue: {
    rotations: {
      leveling: ['Stealth nur bei Value-Openern', 'Sinister Strike/Backstab Combo-Punkte', 'Slice and Dice früh aktivieren', 'Eviscerate als Finisher', 'Kick gegen Caster'],
      dungeon: ['Slice and Dice dauerhaft halten', 'Kick Caster', 'Shadow Blades situativ (Subtlety)', 'Vanish bei Threat-Spikes', 'Poisons nach Ziel wählen'],
      raid: ['Slice and Dice niemals fallen lassen', 'Find-Weakness-Fenster für Finisher nutzen (Subtlety)', 'Shadow Blades mit Trinket-Cooldowns synchronisieren', 'Kick-Assignments einhalten', 'Poisons nach Boss/Resistenz wählen']
    },
    bestInSlot: ['Fangs of the Father (Legendary Daggers)', 'Vestments of Foreseen Death (T15)', 'Bloodfang-Äquivalent (T14)', 'Rune of Re-Origination', 'Thok’s Tail Tip', 'Haromm’s Talisman']
  },
  shaman: {
    rotations: {
      leveling: ['Lightning Bolt pullen', 'Waffenbuff aktiv halten', 'Flame Shock/Lava Burst kombinieren', 'Earth Shock situativ', 'Healing Rain/Riptide defensiv'],
      dungeon: ['Windfury/Unleash Flame für Melees', 'Riptide vor Heal-Rotation setzen', 'Chain Heal bei Gruppenschaden', 'Purge gefährliche Buffs', 'Healing Rain vor Gruppenschaden'],
      raid: ['Lava-Surge-Prozs sofort mit Lava Burst verwerten', 'Healing Rain vor großen Gruppenschadens-Phasen', 'Riptide-Cooldown niemals brachliegen lassen', 'Chain Heal auf gruppierte Ziele', 'Bloodlust/Heroism mit Raid-Cooldowns synchronisieren']
    },
    bestInSlot: ['Reincarnation of the Elder Bull God-Reihe', 'Vestments of the Thunder King Reforged (T15)', 'Regalia of Elder Wisdom (T14)', 'Rune of Re-Origination', 'Thok’s Tail Tip', 'Haromm’s Talisman']
  },
  warlock: {
    rotations: {
      leveling: ['Pet tanken lassen', 'Corruption/Agony setzen', 'Life Tap kontrolliert', 'Malefic Grasp bei Druck', 'Fear nur mit sicherem Raum'],
      dungeon: ['Pet nach CC-Bedarf wählen', 'Agony/Corruption/Unstable Affliction pflegen', 'Soul Swap bei Add-Phasen', 'Healthstone verteilen', 'Banish bei Elementaren/Dämonen'],
      raid: ['DoT-Uptime auf allen Zielen halten', 'Soul Swap spart bei Add-Phasen enorm Zeit', 'Malefic Grasp als Kanalisierungsfiller', 'Dark Soul auf garantierte Crit-Fenster', 'Metamorphosis-Rotation nutzen (Demonology)']
    },
    bestInSlot: ['Fu Zan-Äquivalent (Off-Spec)', 'Regalia of Horrific Corruption (T15)', 'Regalia of the Nether Prison (T14)', 'Rune of Re-Origination', 'Thok’s Tail Tip', 'Haromm’s Talisman']
  },
  warrior: {
    rotations: {
      leveling: ['Charge eröffnen', 'Battle Shout aktiv', 'Bloodthirst auf Cooldown', 'Raging Blow bei Enrage', 'Execute zum Finish'],
      dungeon: ['Defensive Stance/Shield Barrier beim Tanken', 'Sunder Armor/Devastate stapeln', 'Colossus Smash koordinieren', 'Shockwave für AoE-Threat', 'Berserker Rage/Fear Break vorbereiten'],
      raid: ['Colossus Smash vor größtem Burst-Fenster zünden', 'Bloodthirst/Whirlwind auf Cooldown (Fury)', 'Raging-Blow-Prozs sofort nutzen', 'Recklessness/Avatar mit Trinkets synchronisieren', 'Shield Barrier defensiv vor Tank-Spikes']
    },
    bestInSlot: ['Souldrinker (Off-Spec)', 'Battlegear of Immolation (T15)', 'Kor’kron Battlegear-Äquivalent (T14)', 'Rune of Re-Origination', 'Thok’s Tail Tip', 'Haromm’s Talisman']
  }
};

export const classBuildGuides = {
  classic: classicClassBuildGuides,
  'the-burning-crusade': tbcClassBuildGuides,
  'wrath-of-the-lich-king': wrathClassBuildGuides,
  'mists-of-pandaria': mopClassBuildGuides
};
