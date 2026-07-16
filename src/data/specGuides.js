const classicSpecGuides = {
  druid: [
    {
      id: 'druid-feral-tank',
      name: 'Feral Tank / Bär',
      role: 'Tank',
      summary: 'Feral Tank setzt auf Rüstung, Ausdauer, hohe Bedrohung über Maul/Swipe und situative Cooldowns. Ideal für Dungeons und als flexibler Offtank.',
      statPriority: ['Rüstung', 'Ausdauer', 'Beweglichkeit', 'Trefferchance', 'Stärke', 'Verteidigung situativ'],
      rotation: ['Mark of the Wild aktiv halten', 'Pull mit Faerie Fire', 'Bärform vor Kontakt', 'Maul als Rage-Dump queueen', 'Demoralizing Roar bei großen Pulls', 'Swipe bei Mehrziel-Pulls', 'Frenzied Regeneration/Barkskin defensiv planen'],
      talents: ['Feral Kernpunkte für Thick Hide, Feral Instinct und Heart of the Wild', 'Restoration-Punkte für Furor', 'Omen of Clarity wenn Hybrid-Farm wichtig ist'],
      gear: ['Warden Staff', 'Smoking Heart of the Mountain', 'Mark of Tyranny', 'Devilsaur für Threat-Set', 'hohe Rüstungsteile für Mitigation'],
      consumables: ['Elixir of Fortitude', 'Elixir of Superior Defense', 'Rumsey Rum', 'Health Potions', 'Stoneshield Potion für harte Bosse']
    },
    {
      id: 'druid-feral-cat',
      name: 'Feral Katze DPS',
      role: 'Melee DPS',
      summary: 'Feral Katze maximiert Energy-Ticks, Powershifting und Bleeds. Der Spec ist anspruchsvoll, aber stark für Spieler mit sauberem Timing.',
      statPriority: ['Trefferchance', 'Beweglichkeit', 'Stärke', 'Kritische Treffer', 'Ausdauer'],
      rotation: ['Faerie Fire halten', 'Powershift mit Wolfshead Helm', 'Claw/Shred je nach Position', 'Rip bei langen Kämpfen', 'Ferocious Bite bei kurzen Kämpfen', 'Energy nicht cappen lassen'],
      talents: ['Feral Damage Kern', 'Furor im Restoration-Baum', 'Natural Weapons/Omen je nach Build'],
      gear: ['Wolfshead Helm', 'Manual Crowd Pummeler', 'Devilsaur Set', 'Blackstone Ring', 'Mark of Fordring'],
      consumables: ['Elixir of the Mongoose', 'Juju Power', 'Winterfall Firewater', 'Dense Sharpening Stone', 'Major Mana Potion für Powershifts']
    },
    {
      id: 'druid-restoration',
      name: 'Restoration Heiler',
      role: 'Heiler',
      summary: 'Restoration spielt Mana-effiziente Healing Touch Ränge, Rejuvenation/Regrowth gezielt und bringt Innervate sowie Battle-Rez als Raid-Utility.',
      statPriority: ['Heilung', 'Intelligenz', 'Willenskraft', 'Mana pro 5', 'Kritische Heilung'],
      rotation: ['Rejuvenation nur bei sicherem HoT-Wert', 'Healing Touch downranken', 'Regrowth für Spike-Fenster', 'Innervate früh genug planen', 'Remove Curse/Poison nach Assignment', 'Battle-Rez für Schlüsselspieler'],
      talents: ['Moonglow oder Deep Restoration', 'Improved Rejuvenation', 'Nature’s Swiftness für Notfälle'],
      gear: ['Hide of the Wild', 'Cenarion Set', 'Royal Seal of Eldre’Thalas', 'Mindtap Talisman', 'healing + spirit Items'],
      consumables: ['Major Mana Potion', 'Dark Rune', 'Mageblood Potion', 'Brilliant Mana Oil', 'Nightfin Soup']
    },
    {
      id: 'druid-balance',
      name: 'Balance / Moonkin',
      role: 'Caster DPS',
      summary: 'Balance ist in Classic mana-intensiv und eher Nische. Der Spec funktioniert mit gutem Mana-Plan, Crit-Support und klarem Debuff-Management.',
      statPriority: ['Zauberschaden', 'Zaubertreffer', 'Intelligenz', 'Zauberkrit', 'Mana pro 5'],
      rotation: ['Faerie Fire wenn zugewiesen', 'Moonfire nur bei Debuff-Freigabe', 'Starfire als Hauptzauber', 'Wrath bei Movement/kurzen Fenstern', 'Innervate meist für Heiler reservieren', 'Mana-Pots aggressiv nutzen'],
      talents: ['Moonkin Form', 'Vengeance', 'Moonglow für Effizienz', 'Nature’s Grace für Crit-Fenster'],
      gear: ['Robe of the Archmage', 'Briarwood Reed', 'Azuresong Mageblade', 'Cenarion/Cloth Spellpower Mix', 'Spell Hit Items'],
      consumables: ['Flask of Supreme Power', 'Greater Arcane Elixir', 'Brilliant Wizard Oil', 'Major Mana Potion', 'Dark Rune']
    }
  ],
  hunter: [
    {
      id: 'hunter-beast-mastery',
      name: 'Beast Mastery',
      role: 'Leveling / Solo',
      summary: 'BM ist der komfortabelste Leveling-Spec: Pet tankt, Spieler hält Distanz und minimiert Downtime.',
      statPriority: ['Beweglichkeit', 'Ausdauer', 'Intelligenz', 'Trefferchance', 'Angriffskraft'],
      rotation: ['Pet vorpullt', 'Hunter’s Mark', 'Serpent Sting bei langen Kämpfen', 'Auto Shot Timer respektieren', 'Arcane Shot als Dump', 'Mend Pet zwischen Pulls'],
      talents: ['Endurance Training', 'Unleashed Fury', 'Bestial Swiftness', 'Intimidation', 'Frenzy/Bestial Wrath'],
      gear: ['Schnelle Quest-Bögen/Guns', 'Agility Mail/Leather', 'Blackhand’s Breadth später', 'Devilsaur Übergangsset'],
      consumables: ['Pet Food', 'Munition', 'Elixir of Agility', 'Healing/Mana Potions']
    },
    {
      id: 'hunter-marksmanship',
      name: 'Marksmanship',
      role: 'Raid DPS',
      summary: 'Marksmanship skaliert stark mit Waffen, Crit und sauberem Auto-Shot-Weaving. Trueshot Aura bringt Gruppennutzen.',
      statPriority: ['Trefferchance bis Cap', 'Beweglichkeit', 'Kritische Treffer', 'Angriffskraft', 'Ausdauer'],
      rotation: ['Auto Shot nicht clippen', 'Aimed Shot zwischen Auto Shots', 'Multi-Shot wenn sicher', 'Serpent Sting nur falls Debuffs frei', 'Feign Death für Threat Reset', 'Tranquilizing Shot bei Assignment'],
      talents: ['Aimed Shot', 'Mortal Shots', 'Scatter Shot optional', 'Trueshot Aura', 'Ranged Weapon Specialization'],
      gear: ['Rhok’delar', 'Giantstalker/Dragonstalker', 'Blackhand’s Breadth', 'Royal Seal', 'Hit/Agility Ringe'],
      consumables: ['Elixir of the Mongoose', 'Juju Might', 'Grilled Squid', 'Dense Sharpening Stone für Melee irrelevant', 'Mana Potions']
    },
    {
      id: 'hunter-survival',
      name: 'Survival',
      role: 'PvP / Utility',
      summary: 'Survival bietet Kontrolle, Fallen-Value und defensive Werkzeuge. In PvE eher Nische, in PvP sehr flexibel.',
      statPriority: ['Beweglichkeit', 'Ausdauer', 'Kritische Treffer', 'Trefferchance', 'Intelligenz'],
      rotation: ['Trap vorbereiten', 'Wing Clip/Kiting', 'Scatter Shot Setups', 'Aimed/Multi nach Distanz', 'Feign Death Trap Reset', 'Deterrence defensiv'],
      talents: ['Deterrence', 'Improved Wing Clip', 'Surefooted', 'Trap Mastery', 'Lightning Reflexes'],
      gear: ['Agility/Stamina PvP Gear', 'Hit für PvE-Hybrid', 'schnelle Ranged Weapon', 'Engineering Trinkets'],
      consumables: ['Free Action Potion', 'Swiftness Potion', 'Restorative Potion', 'Bandages']
    }
  ],
  mage: [
    {
      id: 'mage-frost',
      name: 'Frost',
      role: 'Leveling / Kontrolle',
      summary: 'Frost ist sicher, mana-effizient und dominiert AoE-Leveling über Kontrolle und Kiting.',
      statPriority: ['Zauberschaden', 'Intelligenz', 'Zaubertreffer', 'Zauberkrit', 'Willenskraft'],
      rotation: ['Frostbolt Pull', 'Frost Nova bei Kontakt', 'Abstand neu aufbauen', 'Cone of Cold bei Kiting', 'Blizzard für AoE', 'Evocation nach Manafenster'],
      talents: ['Improved Frostbolt', 'Frostbite', 'Shatter', 'Ice Block', 'Ice Barrier'],
      gear: ['Spellpower Cloth', 'Freezing Band', 'Robe of the Archmage', 'Briarwood Reed'],
      consumables: ['Wizard Oil', 'Greater Arcane Elixir', 'Major Mana Potion', 'Nightfin Soup']
    },
    {
      id: 'mage-fire',
      name: 'Fire',
      role: 'Raid DPS nach Resist-Phasen',
      summary: 'Fire skaliert mit Crit und Ignite, wird aber in frühen Fire-resistenten Raids eingeschränkt.',
      statPriority: ['Zaubertreffer', 'Zauberschaden', 'Zauberkrit', 'Intelligenz', 'Mana pro 5'],
      rotation: ['Scorch Stack koordinieren', 'Fireball als Hauptzauber', 'Fire Blast bei Movement', 'Combustion mit Trinkets', 'Decurse trotz DPS-Priorität'],
      talents: ['Ignite', 'Improved Scorch', 'Blast Wave optional', 'Combustion', 'Critical Mass'],
      gear: ['Netherwind/Spellpower Mix', 'Choker of the Fire Lord', 'Talisman of Ephemeral Power', 'Mageblade'],
      consumables: ['Flask of Supreme Power', 'Greater Firepower', 'Brilliant Wizard Oil', 'Major Mana Potion']
    },
    {
      id: 'mage-arcane',
      name: 'Arcane Support',
      role: 'Support / Hybrid',
      summary: 'Arcane liefert starke Utility-Talente und Burst-Fenster, wird meist mit Frost oder Fire kombiniert.',
      statPriority: ['Zauberschaden', 'Intelligenz', 'Zaubertreffer', 'Zauberkrit', 'Mana'],
      rotation: ['Arcane Power nur mit Burn-Fenster', 'Hauptzauber je nach Hybridbaum', 'Presence of Mind für Burst/Utility', 'Mana Gem früh nutzen', 'Evocation mit Arcane Power nicht verschwenden'],
      talents: ['Arcane Concentration', 'Presence of Mind', 'Arcane Power', 'Improved Arcane Explosion'],
      gear: ['Spellpower Gear', 'Briarwood Reed', 'Mana/Int Items', 'Hit Gear'],
      consumables: ['Mana Potions', 'Dark Rune', 'Wizard Oil', 'Arcane Elixir']
    }
  ],
  paladin: [
    {
      id: 'paladin-holy',
      name: 'Holy',
      role: 'Heiler',
      summary: 'Holy ist der zentrale Paladin-Raid-Spec: effizienter Single-Target-Heal, starke Segen und Cleanse-Spam.',
      statPriority: ['Heilung', 'Intelligenz', 'Zauberkrit', 'Mana pro 5', 'Willenskraft'],
      rotation: ['Blessings aktiv halten', 'Flash of Light downranken', 'Holy Light bei Spikes', 'Cleanse nach Assignment', 'Divine Favor für Notfallcrit', 'Lay on Hands als letzter Notfall'],
      talents: ['Illumination', 'Divine Favor', 'Holy Power', 'Improved Blessings je nach Raid'],
      gear: ['Lawbringer/Judgement Heal Pieces', 'Hide of the Wild', 'Briarwood Reed', 'healing plate/cloth Mix'],
      consumables: ['Major Mana Potion', 'Dark Rune', 'Mageblood Potion', 'Brilliant Mana Oil']
    },
    {
      id: 'paladin-protection',
      name: 'Protection',
      role: 'Dungeon Tank / AoE Farm',
      summary: 'Protection tankt Dungeons über Consecration und reflektiven Heiligschaden. Raid-Tanking ist wegen fehlendem Taunt eingeschränkt.',
      statPriority: ['Ausdauer', 'Rüstung', 'Intelligenz', 'Zauberschaden', 'Blockwertung'],
      rotation: ['Righteous Fury aktiv', 'Consecration für AoE-Threat', 'Holy Shield falls geskillt', 'Judgement nach Seal', 'Blessing of Sanctuary', 'Mana über Pullgröße kontrollieren'],
      talents: ['Improved Righteous Fury', 'Blessing of Sanctuary', 'Holy Shield', 'Redoubt'],
      gear: ['Spellpower Tank Mix', 'Force Reactive Disk', 'Drillborer Disk', 'Mitigation Plate'],
      consumables: ['Stoneshield Potion', 'Mana Potion', 'Wizard Oil für Threat', 'Rumsey Rum']
    },
    {
      id: 'paladin-retribution',
      name: 'Retribution',
      role: 'Leveling / Support DPS',
      summary: 'Retribution levelt sicher und bringt Utility, ist im Raid aber stärker support- als damageorientiert.',
      statPriority: ['Stärke', 'Kritische Treffer', 'Beweglichkeit', 'Trefferchance', 'Ausdauer'],
      rotation: ['Seal of Command', 'Judgement auf Cooldown', 'Auto-Attacks nicht unterbrechen', 'Hammer of Justice gegen Caster', 'Exorcism gegen Untote/Dämonen', 'Heals defensiv'],
      talents: ['Seal of Command', 'Conviction', 'Vengeance', 'Two-Handed Weapon Specialization'],
      gear: ['The Unstoppable Force', 'Hand of Justice', 'Blackhand’s Breadth', 'Strength/Crit Plate'],
      consumables: ['Elixir of Giants', 'Mongoose', 'Winterfall Firewater', 'Sharpening/Weight Stones']
    }
  ],
  priest: [
    {
      id: 'priest-holy',
      name: 'Holy',
      role: 'Raid Heiler',
      summary: 'Holy bringt starke direkte Heilung und Gruppenheilung. Downranking und Mana-Disziplin entscheiden die Leistung.',
      statPriority: ['Heilung', 'Willenskraft', 'Intelligenz', 'Mana pro 5', 'Zauberkrit'],
      rotation: ['Renew gezielt', 'Heal/Greater Heal downranken', 'Flash Heal nur bei Spikes', 'Prayer of Healing bei Gruppenschaden', 'Dispel sofort', 'Inner Focus mit teuren Heals'],
      talents: ['Spiritual Healing', 'Improved Renew', 'Holy Specialization', 'Spirit of Redemption optional'],
      gear: ['Truefaith Vestments', 'Benediction', 'Prophecy/Transcendence', 'Hide of the Wild'],
      consumables: ['Major Mana Potion', 'Dark Rune', 'Mageblood', 'Brilliant Mana Oil']
    },
    {
      id: 'priest-discipline',
      name: 'Discipline',
      role: 'Support Heiler',
      summary: 'Discipline liefert starke Utility wie Power Infusion und bessere Mana-Werkzeuge, oft als Hybrid-Heal gespielt.',
      statPriority: ['Heilung', 'Intelligenz', 'Willenskraft', 'Mana pro 5', 'Zauberkrit'],
      rotation: ['Power Infusion zuweisen', 'Shield nur bei Notfällen', 'Heal downranken', 'Dispel priorisieren', 'Inner Focus für Greater Heal/Prayer', 'Mana Burn im PvP'],
      talents: ['Meditation', 'Inner Focus', 'Mental Agility', 'Power Infusion'],
      gear: ['Healing/Int Mix', 'Benediction', 'Mindtap Talisman', 'Royal Seal'],
      consumables: ['Major Mana Potion', 'Nightfin Soup', 'Dark Rune', 'Mageblood']
    },
    {
      id: 'priest-shadow',
      name: 'Shadow',
      role: 'Leveling / Shadow Weaving',
      summary: 'Shadow levelt effizient und kann im Raid Shadow Weaving liefern, kämpft aber mit Mana und Debuff-Slots.',
      statPriority: ['Zauberschaden', 'Zaubertreffer', 'Intelligenz', 'Willenskraft', 'Zauberkrit'],
      rotation: ['Shadow Word: Pain', 'Mind Blast', 'Mind Flay', 'Wand bei Spirit Tap', 'Vampiric Embrace nur wenn erlaubt', 'Fade bei Threat'],
      talents: ['Spirit Tap', 'Mind Flay', 'Shadow Weaving', 'Vampiric Embrace', 'Shadowform'],
      gear: ['Shadoweave Set', 'Anathema', 'Briarwood Reed', 'Spell Hit Gear'],
      consumables: ['Shadow Power Elixir', 'Flask of Supreme Power', 'Wizard Oil', 'Mana Potions']
    }
  ],
  rogue: [
    {
      id: 'rogue-combat',
      name: 'Combat',
      role: 'Raid / Leveling DPS',
      summary: 'Combat ist der Standard für Leveling und Raid-DPS mit starken Waffen-Synergien und zuverlässigem Sustained Damage.',
      statPriority: ['Trefferchance', 'Waffenschaden', 'Beweglichkeit', 'Angriffskraft', 'Kritische Treffer'],
      rotation: ['Slice and Dice aktiv halten', 'Sinister Strike CP bauen', 'Eviscerate nur bei SnD Laufzeit', 'Blade Flurry/Adrenaline Rush mit Trinkets', 'Kick Caster', 'Feint/Vanish bei Threat'],
      talents: ['Precision', 'Dual Wield Specialization', 'Blade Flurry', 'Weapon Specialization', 'Adrenaline Rush'],
      gear: ['Dal’Rend Set', 'Devilsaur Set', 'Hand of Justice', 'Blackhand’s Breadth'],
      consumables: ['Mongoose', 'Juju Power', 'Instant/Deadly Poison', 'Thistle Tea']
    },
    {
      id: 'rogue-assassination',
      name: 'Assassination',
      role: 'Crit / Hybrid',
      summary: 'Assassination liefert starke Crit- und Combo-Point-Talente, wird oft mit Combat kombiniert.',
      statPriority: ['Kritische Treffer', 'Trefferchance', 'Beweglichkeit', 'Angriffskraft', 'Waffenschaden'],
      rotation: ['Opener nach Situation', 'Slice and Dice nicht fallen lassen', 'Backstab/Mutilate existiert nicht in Classic: Backstab bei Dagger', 'Eviscerate bei CP Überschuss', 'Cold Blood für Burst'],
      talents: ['Malice', 'Lethality', 'Relentless Strikes', 'Cold Blood', 'Improved Poisons optional'],
      gear: ['Dagger/Crit Gear', 'Perdition’s Blade', 'Nightslayer', 'Blackhand’s Breadth'],
      consumables: ['Mongoose', 'Thistle Tea', 'Poisons', 'Free Action Potion für PvP']
    },
    {
      id: 'rogue-subtlety',
      name: 'Subtlety',
      role: 'PvP / Kontrolle',
      summary: 'Subtlety maximiert Kontrolle, Stealth-Setups und Überleben. In PvE meist Nische.',
      statPriority: ['Beweglichkeit', 'Kritische Treffer', 'Ausdauer', 'Angriffskraft', 'Trefferchance'],
      rotation: ['Cheap Shot/Kidney Shot Kette', 'Ghostly Strike als Energie-Dump', 'Vanish für Reset', 'Blind/Sap CC-Kette', 'Preparation für zweiten Cooldown-Zyklus'],
      talents: ['Camouflage', 'Initiative', 'Preparation', 'Ghostly Strike', 'Improved Sap'],
      gear: ['PvP Agility/Stamina', 'Engineering Trinkets', 'Dagger/Burst Waffen', 'Shadowcraft Mix'],
      consumables: ['Free Action Potion', 'Thistle Tea', 'Swiftness Potion', 'Blind Powder']
    }
  ],
  shaman: [
    {
      id: 'shaman-restoration',
      name: 'Restoration',
      role: 'Raid Heiler',
      summary: 'Restoration ist der starke Horde-Raid-Heiler mit Chain Heal, Totem-Support und Mana Tide.',
      statPriority: ['Heilung', 'Intelligenz', 'Mana pro 5', 'Willenskraft', 'Zauberkrit'],
      rotation: ['Totem-Auftrag setzen', 'Chain Heal bei Gruppenschaden', 'Lesser Healing Wave bei Spikes', 'Healing Wave downranken', 'Purge/Cure situativ', 'Mana Tide timen'],
      talents: ['Tidal Focus', 'Totemic Mastery', 'Nature’s Swiftness', 'Mana Tide'],
      gear: ['Earthfury/Ten Storms', 'Hide of the Wild', 'Briarwood Reed', 'Healing Mail/Cloth Mix'],
      consumables: ['Major Mana Potion', 'Mageblood', 'Brilliant Mana Oil', 'Dark Rune']
    },
    {
      id: 'shaman-enhancement',
      name: 'Enhancement',
      role: 'Leveling / Melee Support',
      summary: 'Enhancement levelt über starke Waffen, Windfury-Procs und günstige Schocks, im Raid hauptsächlich Support/Nische.',
      statPriority: ['Waffenschaden', 'Stärke', 'Beweglichkeit', 'Trefferchance', 'Kritische Treffer'],
      rotation: ['Windfury Weapon', 'Strength/Windfury Totems', 'Flame Shock bei langen Kämpfen', 'Earth Shock als Interrupt/Burst', 'Auto-Attacks respektieren', 'Healing Wave defensiv'],
      talents: ['Ancestral Knowledge', 'Thundering Strikes', 'Flurry', 'Elemental Weapons'],
      gear: ['The Unstoppable Force', 'Hand of Justice', 'Blackhand’s Breadth', 'Strength/Crit Mail'],
      consumables: ['Mongoose', 'Juju Power', 'Winterfall Firewater', 'Mana Potions']
    },
    {
      id: 'shaman-elemental',
      name: 'Elemental',
      role: 'Caster Burst / PvP',
      summary: 'Elemental bringt starken Burst über Lightning Bolt, Chain Lightning und Schock-Fenster, braucht aber gutes Mana-Management.',
      statPriority: ['Zauberschaden', 'Zauberkrit', 'Zaubertreffer', 'Intelligenz', 'Mana pro 5'],
      rotation: ['Lightning Bolt Filler', 'Chain Lightning für Burst', 'Flame Shock vor Burst falls sinnvoll', 'Earth Shock als Finisher/Interrupt', 'Elemental Mastery mit Trinkets', 'Mana-Pots früh'],
      talents: ['Convection', 'Concussion', 'Elemental Fury', 'Elemental Mastery', 'Lightning Mastery'],
      gear: ['Spellpower Mail/Cloth Mix', 'Briarwood Reed', 'Azuresong Mageblade', 'Hit/Crit Gear'],
      consumables: ['Flask of Supreme Power', 'Greater Arcane Elixir', 'Wizard Oil', 'Major Mana Potion']
    }
  ],
  warlock: [
    {
      id: 'warlock-affliction',
      name: 'Affliction',
      role: 'Leveling / DoT',
      summary: 'Affliction ist effizient fürs Leveling und Multi-DoT-Farming, im Raid durch Debuff-Limit eingeschränkt.',
      statPriority: ['Zauberschaden', 'Zaubertreffer', 'Ausdauer', 'Intelligenz', 'Schattenzauberschaden'],
      rotation: ['Curse setzen', 'Corruption', 'Siphon Life falls geskillt', 'Life Tap kontrolliert', 'Drain Life/Drain Soul', 'Fear nur sicher'],
      talents: ['Improved Corruption', 'Suppression', 'Siphon Life', 'Shadow Mastery', 'Dark Pact optional'],
      gear: ['Shadoweave', 'Felheart/Nemesis Mix', 'Briarwood Reed', 'Shadow Spellpower Gear'],
      consumables: ['Shadow Power Elixir', 'Flask of Supreme Power', 'Wizard Oil', 'Dark Rune']
    },
    {
      id: 'warlock-demonology',
      name: 'Demonology',
      role: 'Solo / Sicherheit',
      summary: 'Demonology erhöht Überleben und Pet-Value. Stark für Solo-Elites, Farming und PvP-Defensive.',
      statPriority: ['Zauberschaden', 'Ausdauer', 'Intelligenz', 'Zaubertreffer', 'Resistenzen situativ'],
      rotation: ['Passendes Pet wählen', 'DoTs setzen', 'Pet defensiv nutzen', 'Soul Link falls geskillt', 'Health Funnel/Master Healthstone', 'Banish/Fear Utility'],
      talents: ['Demonic Embrace', 'Fel Domination', 'Master Summoner', 'Soul Link', 'Demonic Sacrifice Hybrid möglich'],
      gear: ['Stamina/Spellpower Mix', 'Felheart', 'PvP Trinkets', 'Resist Gear situativ'],
      consumables: ['Healthstone', 'Limited Invulnerability Potion', 'Shadow Protection', 'Mana Potions']
    },
    {
      id: 'warlock-destruction',
      name: 'Destruction',
      role: 'Raid Shadow Bolt / Burst',
      summary: 'Destruction fokussiert Shadow Bolt/Fire Burst und skaliert stark mit Crit, Hit und Shadow Vulnerability Setups.',
      statPriority: ['Zaubertreffer', 'Zauberschaden', 'Zauberkrit', 'Intelligenz', 'Ausdauer'],
      rotation: ['Curse Assignment', 'Shadow Bolt als Hauptzauber', 'Immolate/Searing Pain nur situativ', 'Life Tap zwischen Cast-Fenstern', 'Soulstone/Healthstones vorbereiten'],
      talents: ['Bane', 'Devastation', 'Ruin', 'Shadowburn optional', 'Demonic Sacrifice Hybrid'],
      gear: ['Robe of the Void', 'Nemesis', 'Staff of Dominance', 'Azuresong Mageblade', 'Hit Gear'],
      consumables: ['Flask of Supreme Power', 'Shadow Power Elixir', 'Wizard Oil', 'Major Mana Potion']
    }
  ],
  warrior: [
    {
      id: 'warrior-arms',
      name: 'Arms',
      role: 'Leveling / PvP',
      summary: 'Arms ist der beste Leveling- und PvP-Baum mit starken Waffen-Talenten, Sweeping Strikes und Mortal Strike.',
      statPriority: ['Waffenschaden', 'Stärke', 'Kritische Treffer', 'Trefferchance', 'Ausdauer'],
      rotation: ['Charge', 'Rend bei langen Kämpfen', 'Overpower proccen', 'Sweeping Strikes für Multi-Pulls', 'Mortal Strike auf Cooldown', 'Execute Finish'],
      talents: ['Tactical Mastery', 'Deep Wounds', 'Impale', 'Sweeping Strikes', 'Mortal Strike'],
      gear: ['Whirlwind Axe', 'Ravager', 'The Unstoppable Force', 'Crit/Strength Plate'],
      consumables: ['Elixir of Giants', 'Mongoose', 'Juju Power', 'Healing Potions']
    },
    {
      id: 'warrior-fury',
      name: 'Fury',
      role: 'Raid DPS',
      summary: 'Fury ist der dominante Raid-DPS-Spec mit hoher Skalierung, World Buffs und präzisem Rage-Management.',
      statPriority: ['Trefferchance bis Softcap', 'Waffenschaden', 'Stärke/Angriffskraft', 'Kritische Treffer', 'Agility'],
      rotation: ['Whirlwind auf Cooldown', 'Heroic Strike/Cleave bei Rage-Überschuss', 'Execute Phase aggressiv', 'Death Wish/Recklessness mit Burn', 'Threat beobachten'],
      talents: ['Cruelty', 'Enrage', 'Death Wish', 'Flurry', 'Dual Wield Specialization'],
      gear: ['Lionheart Helm', 'Savage Gladiator Chain', 'Dal’Rend/Pre-Raid Weapons', 'Hand of Justice', 'Blackhand’s Breadth'],
      consumables: ['Mongoose', 'Juju Power', 'Winterfall Firewater', 'Elemental Sharpening Stone', 'Mighty Rage Potion']
    },
    {
      id: 'warrior-protection',
      name: 'Protection',
      role: 'Main Tank',
      summary: 'Protection fokussiert kontrollierte Threat, Shield Block Uptime und defensive Cooldowns. Gearsets für Threat und Mitigation sind Pflicht.',
      statPriority: ['Verteidigung bis Zielwert', 'Ausdauer', 'Rüstung', 'Trefferchance/Expertise gibt es nicht in Classic', 'Block/Parry/Dodge', 'Stärke für Threat'],
      rotation: ['Defensive Stance', 'Shield Block gegen Crushing', 'Sunder Armor stapeln', 'Revenge bei Proc', 'Heroic Strike bei Rage-Überschuss', 'Taunt/Mocking Blow Notfall'],
      talents: ['Anticipation', 'Defiance', 'Last Stand', 'Improved Shield Block', 'Improved Sunder Armor'],
      gear: ['Quel’Serrar', 'Draconian Deflector', 'Force of Will', 'Might/Wrath Set', 'Threat Trinkets situativ'],
      consumables: ['Stoneshield Potion', 'Flask of the Titans', 'Elixir of Superior Defense', 'Mighty Rage Potion']
    }
  ]
};

const tbcSpecGuides = {
  druid: [
    {
      id: 'tbc-druid-restoration',
      name: 'Restoration',
      role: 'Heiler',
      summary: 'Restoration ist dank Tree of Life Form und effizientem Lifebloom-Stacking einer der stärksten Raidheiler der Erweiterung.',
      statPriority: ['Heilung', 'Intelligenz', 'Mp5', 'Kritische Heilung', 'Haste'],
      rotation: ['Tree of Life Form aktivieren', 'Lifebloom stacken und halten', 'Rejuvenation flächig verteilen', 'Regrowth bei Spike-Schaden', 'Nourish als Mana-Filler', 'Swiftmend als Notfall-Cooldown'],
      talents: ['Empowered Rejuvenation', 'Tree of Life', 'Improved Regrowth', 'Nature’s Splendor', 'Gift of Nature'],
      gear: ['Hide of the Wild', 'Vestments of the Sea-Witch', 'Idol of the Emerald Queen', 'Cyclone Staff', 'Mark of the Fallen Champion'],
      consumables: ['Flask of Mighty Restoration', 'Golden Fish Sticks', 'Mana Oil', 'Dark Rune']
    },
    {
      id: 'tbc-druid-feral-tank',
      name: 'Feral (Bär)',
      role: 'Tank',
      summary: 'Feral Bär liefert solide AoE-Threat über Swipe/Maul und wird durch Mangle zu einem zuverlässigen Dungeon- und Raid-Tank.',
      statPriority: ['Verteidigungswertung', 'Ausdauer', 'Rüstung', 'Agility', 'Trefferchance'],
      rotation: ['Mangle als Bedrohungs- und Bleed-Opener', 'Maul als Rage-Dump queuen', 'Demoralizing Roar bei großen Pulls', 'Swipe bei Mehrziel-Pulls', 'Enrage für zusätzliche Rage', 'Frenzied Regeneration/Barkskin defensiv planen'],
      talents: ['Thick Hide', 'Feral Instinct', 'Improved Mangle', 'Survival of the Fittest', 'Heart of the Wild'],
      gear: ['Vestments of the Sea-Witch (Tank-Reforge)', 'Idol of Brutal Mending', 'Cyclone Straps'],
      consumables: ['Elixir of Major Fortitude', 'Warp Burger', 'Stoneshield Potion']
    },
    {
      id: 'tbc-druid-feral-cat',
      name: 'Feral (Cat)',
      role: 'Melee DPS',
      summary: 'Feral Katze liefert solide Melee-DPS mit Mangle-Unterstützung und guter Mobilität für Movement-Fights.',
      statPriority: ['Trefferchance', 'Agility', 'Stärke', 'Kritische Trefferwertung', 'Angriffskraft'],
      rotation: ['Mangle als Bleed-Verstärker', 'Rake setzen', 'Rip bei 5 Combo-Punkten', 'Shred aus dem Rücken', 'Ferocious Bite bei Energie-Überschuss', 'Tiger’s Fury auf Cooldown'],
      talents: ['Predatory Strikes', 'Savage Fury', 'Sharpened Claws', 'Predatory Instincts', 'Primal Fury'],
      gear: ['Gladiator’s Wildhide', 'Terokk’s Quill', 'Idol of Ferocity', 'Cyclone Straps', 'Mark of the Fallen Champion'],
      consumables: ['Elixir of Major Agility', 'Warp Burger', 'Adamantite Sharpening Stone', 'Haste Potion']
    },
    {
      id: 'tbc-druid-balance',
      name: 'Balance',
      role: 'Caster DPS',
      summary: 'Balance bleibt Nische, liefert aber mit Moonkin Form und Insect Swarm/Moonfire-Kombo respektablen Caster-Schaden bei gutem Mana-Plan.',
      statPriority: ['Zauberschaden', 'Trefferchance', 'Kritische Trefferwertung', 'Intelligenz', 'Haste'],
      rotation: ['Moonkin Form aktivieren', 'Insect Swarm setzen', 'Moonfire aufrechterhalten', 'Starfire als Hauptzauber', 'Wrath bei Movement', 'Innervate meist für Heiler reservieren'],
      talents: ['Vengeance', 'Moonglow', 'Improved Faerie Fire', 'Moonkin Form', 'Nature’s Grace'],
      gear: ['Wrath of Spellfire', 'Boots of Blasting', 'Idol of the Raven Goddess', 'Cyclone Staff', 'Mark of the Fallen Champion'],
      consumables: ['Flask of Blinding Light', 'Skullfish Soup', 'Mana Oil', 'Dark Rune']
    }
  ],
  hunter: [
    {
      id: 'tbc-hunter-survival',
      name: 'Survival',
      role: 'Raid DPS',
      summary: 'Survival mit Expose Weakness ist der bekannteste Top-Parse-Spec der Erweiterung, weil er den ganzen Raid mit Angriffskraft aus Agility versorgt.',
      statPriority: ['Agility', 'Trefferchance (Hit Cap)', 'Kritische Trefferwertung', 'Angriffskraft', 'Ausdauer'],
      rotation: ['Hunter’s Mark aufrechterhalten', 'Serpent Sting setzen', 'Steady Shot zwischen Auto Shots weben', 'Kill Command auf Cooldown', 'Multi-Shot bei mehreren Zielen', 'Rapid Fire mit Trinkets synchronisieren'],
      talents: ['Lightning Reflexes', 'Expose Weakness', 'Mortal Shots', 'Surefooted', 'Trap Mastery'],
      gear: ['Rift Stalker Armor', 'Ashjre’thul, Crossbow of Smiting', 'Talon of Azshara', 'Gladiator’s Pursuit', 'Devilsaur-Übergangsteile'],
      consumables: ['Flask of Relentless Assault', 'Roasted Clefthoof', 'Adamantite Sharpening Stone', 'Haste Potion']
    },
    {
      id: 'tbc-hunter-marksmanship',
      name: 'Marksmanship',
      role: 'Raid DPS',
      summary: 'Marksmanship liefert starke Burst-Fenster über Careful Aim und Trueshot Aura und bleibt eine kompetitive Alternative zu Survival.',
      statPriority: ['Agility', 'Trefferchance (Hit Cap)', 'Kritische Trefferwertung', 'Angriffskraft', 'Intelligenz'],
      rotation: ['Hunter’s Mark aufrechterhalten', 'Aimed Shot zwischen Auto Shots', 'Multi-Shot wenn sicher', 'Steady Shot als Filler', 'Rapid Fire auf Cooldown', 'Trueshot Aura konstant aktiv'],
      talents: ['Careful Aim', 'Trueshot Aura', 'Improved Hunter’s Mark', 'Rapid Killing', 'Barrage'],
      gear: ['Black Bow of the Betrayer', 'Rift Stalker Armor', 'Talon of Azshara', 'Gladiator’s Pursuit', 'Devilsaur-Übergangsteile'],
      consumables: ['Flask of Relentless Assault', 'Roasted Clefthoof', 'Adamantite Sharpening Stone', 'Haste Potion']
    },
    {
      id: 'tbc-hunter-beast-mastery',
      name: 'Beast Mastery',
      role: 'Leveling / Solo',
      summary: 'Beast Mastery bleibt der komfortabelste Leveling- und Solo-Spec dank starkem Pet-Schaden und hoher Autonomie.',
      statPriority: ['Agility', 'Ausdauer', 'Trefferchance', 'Angriffskraft', 'Intelligenz'],
      rotation: ['Pet vorpullen lassen', 'Hunter’s Mark setzen', 'Serpent Sting bei langer TTK', 'Auto Shot nicht clippen', 'Bestial Wrath für Burst', 'Mend Pet zwischen Pulls'],
      talents: ['Ferocity', 'Bestial Discipline', 'Frenzy', 'Bestial Wrath', 'Intimidation'],
      gear: ['Schnelle Quest-Bögen/Guns', 'Agility Mail/Leather', 'Rift Stalker-Übergangsteile', 'Talon of Azshara'],
      consumables: ['Elixir of Major Agility', 'Roasted Clefthoof', 'Adamantite Sharpening Stone']
    }
  ],
  mage: [
    {
      id: 'tbc-mage-fire',
      name: 'Fire',
      role: 'Raid DPS',
      summary: 'Fire dominiert mit Combustion und hoher Crit-Skalierung die Raid-DPS-Ranglisten der Erweiterung.',
      statPriority: ['Zauberschaden', 'Trefferchance (Hit Cap)', 'Kritische Trefferwertung', 'Intelligenz', 'Haste'],
      rotation: ['Scorch-Stapel aufbauen', 'Fireball als Hauptzauber', 'Combustion mit Crit-Cooldowns synchronisieren', 'Fire Blast als Instant-Filler', 'Mana Gems/Evocation timen', 'Counterspell bei Bedarf'],
      talents: ['Improved Scorch', 'Critical Mass', 'Combustion', 'Firepower', 'Pyroblast'],
      gear: ['Sunfire Robe', 'Frostfire Robe', 'Wand of the Tides', 'Bloodmage Signet', 'Gladiator’s Felweave'],
      consumables: ['Flask of Supreme Power', 'Skullfish Soup', 'Brilliant Wizard Oil', 'Mana Oil']
    },
    {
      id: 'tbc-mage-frost',
      name: 'Frost',
      role: 'Leveling / PvP / Kontrolle',
      summary: 'Frost bleibt die sichere Wahl für Leveling, Crowd Control und PvP dank Kontrolle und hoher Überlebensfähigkeit.',
      statPriority: ['Zauberschaden', 'Trefferchance', 'Intelligenz', 'Kritische Trefferwertung', 'Ausdauer'],
      rotation: ['Frostbolt als Standard', 'Frost Nova für Abstand', 'Cone of Cold beim Kiten', 'Blizzard für AoE-Pulls', 'Ice Barrier defensiv', 'Evocation für Manafenster'],
      talents: ['Ice Barrier', 'Winter’s Chill', 'Piercing Ice', 'Shatter', 'Ice Block'],
      gear: ['Robe of the Archmage', 'Wand of the Tides', 'Bloodmage Signet', 'Gladiator’s Felweave'],
      consumables: ['Flask of Supreme Power', 'Skullfish Soup', 'Brilliant Wizard Oil', 'Mana Oil']
    },
    {
      id: 'tbc-mage-arcane',
      name: 'Arcane',
      role: 'Burst DPS / PvP',
      summary: 'Arcane bleibt eher Nische, liefert aber mit Arcane Instability starke Burst-Fenster für PvP und einzelne Encounter.',
      statPriority: ['Zauberschaden', 'Trefferchance', 'Kritische Trefferwertung', 'Intelligenz', 'Haste'],
      rotation: ['Arcane Blast/Missiles als Hauptschaden', 'Presence of Mind für Instant-Burst', 'Arcane Power auf Cooldown', 'Evocation für Manafenster', 'Counterspell bei Bedarf'],
      talents: ['Arcane Instability', 'Arcane Potency', 'Presence of Mind', 'Arcane Power', 'Slow'],
      gear: ['Sunfire Robe', 'Wand of the Tides', 'Bloodmage Signet', 'Gladiator’s Felweave'],
      consumables: ['Flask of Supreme Power', 'Skullfish Soup', 'Brilliant Wizard Oil']
    }
  ],
  paladin: [
    {
      id: 'tbc-paladin-holy',
      name: 'Holy',
      role: 'Heiler',
      summary: 'Holy ist dank Holy Shock und starkem Single-Target-Heal der zentrale Tank-Heiler der Erweiterung.',
      statPriority: ['Heilung', 'Intelligenz', 'Mp5', 'Kritische Heilung', 'Haste'],
      rotation: ['Blessing zuweisen und aktiv halten', 'Holy Shock als Haupt-Cooldown', 'Flash of Light auf Tank-Ziel', 'Holy Light bei sicherem Cast-Fenster', 'Cleanse bei Dispel-Bedarf', 'Divine Favor für Notfälle'],
      talents: ['Holy Shock', 'Illumination', 'Sacred Cleansing', 'Improved Blessing of Wisdom', 'Divine Favor'],
      gear: ['Vestments of Faith', 'Redemption Set', 'Libram of Avengement', 'Aldori Legacy Defender', 'Gladiator’s Salvation'],
      consumables: ['Flask of Mighty Restoration', 'Golden Fish Sticks', 'Mana Oil', 'Dark Rune']
    },
    {
      id: 'tbc-paladin-protection',
      name: 'Protection',
      role: 'Tank',
      summary: 'Protection etabliert sich mit Holy Shield und Redoubt als starker AoE-Tank für Dungeons und Trash-Pulls.',
      statPriority: ['Verteidigungswertung', 'Ausdauer', 'Blockwertung', 'Rüstung', 'Stärke für Threat'],
      rotation: ['Consecration für AoE-Threat', 'Holy Shield aktiv halten', 'Judgement of Righteousness/Wisdom', 'Avenger’s Shield als Opener', 'Righteous Fury permanent aktiv', 'Hammer of Justice gegen Caster'],
      talents: ['Redoubt', 'Holy Shield', 'Improved Righteous Fury', 'Reckoning', 'Anticipation'],
      gear: ['Redemption Set (Tank-Reforge)', 'Aldori Legacy Defender', 'Libram of Repentance', 'Gladiator’s Refuge'],
      consumables: ['Flask of the Titans', 'Elixir of Major Fortitude', 'Stoneshield Potion']
    },
    {
      id: 'tbc-paladin-retribution',
      name: 'Retribution',
      role: 'Leveling / PvP',
      summary: 'Retribution bleibt fürs Leveling und PvP relevant, ist aber im TBC-Raid-Content noch keine Top-DPS-Spec.',
      statPriority: ['Trefferchance', 'Stärke', 'Kritische Trefferwertung', 'Angriffskraft', 'Ausdauer'],
      rotation: ['Seal of Command aktiv halten', 'Judgement auf Cooldown', 'Crusader Strike als Filler', 'Auto-Attacks tragen Schaden', 'Consecration situativ', 'Avenging Wrath für Burst'],
      talents: ['Vengeance', 'Sanctified Judgement', 'Crusade', 'The Art of War', 'Repentance'],
      gear: ['Ashbringer-Reihe', 'Gladiator’s Salvation', 'Libram of Avengement'],
      consumables: ['Flask of Relentless Assault', 'Roasted Clefthoof', 'Adamantite Sharpening Stone']
    }
  ],
  priest: [
    {
      id: 'tbc-priest-shadow',
      name: 'Shadow',
      role: 'Raid DPS',
      summary: 'Shadow liefert konstanten Raid-DPS und versorgt Caster über Vampiric Touch mit Mana – ein Pflicht-Slot in jedem Raid.',
      statPriority: ['Schattenzauberschaden', 'Trefferchance (Hit Cap)', 'Kritische Trefferwertung', 'Intelligenz', 'Haste'],
      rotation: ['Vampiric Touch für Mana-Regeneration setzen', 'Shadow Word: Pain aufrechterhalten', 'Devouring Plague einplanen', 'Mind Flay als Hauptfiller', 'Mind Blast auf Cooldown', 'Shadowform permanent aktiv'],
      talents: ['Shadow Weaving', 'Vampiric Embrace', 'Vampiric Touch', 'Misery', 'Twisted Faith'],
      gear: ['Voidheart Raiment', 'Corruptor Raiment', 'Wand of the Cosmos', 'Sunflare', 'Gladiator’s Dreadgear'],
      consumables: ['Flask of Supreme Power', 'Skullfish Soup', 'Brilliant Wizard Oil']
    },
    {
      id: 'tbc-priest-discipline',
      name: 'Discipline',
      role: 'Heiler',
      summary: 'Discipline etabliert sich mit dem neuen Penance-Zauber als starker Cooldown-Heiler und Raid-Support-Spec.',
      statPriority: ['Heilung', 'Intelligenz', 'Mp5', 'Kritische Heilung', 'Haste'],
      rotation: ['Power Word: Shield taktisch einsetzen', 'Penance auf Cooldown', 'Renew flächig verteilen', 'Flash Heal bei Spike-Schaden', 'Power Infusion für DPS-Cooldowns', 'Pain Suppression als Notfall'],
      talents: ['Penance', 'Improved Power Word: Shield', 'Reflective Shield', 'Power Infusion', 'Focused Power'],
      gear: ['Vestments of Absolution', 'Vestments of Transcendence', 'Silver Crescent Idol', 'Robes of Faith'],
      consumables: ['Flask of Mighty Restoration', 'Golden Fish Sticks', 'Mana Oil']
    },
    {
      id: 'tbc-priest-holy',
      name: 'Holy',
      role: 'Heiler',
      summary: 'Holy liefert mit Circle of Healing starke Flächenheilung und ist die bevorzugte Wahl für schadensintensive Raid-Phasen.',
      statPriority: ['Heilung', 'Intelligenz', 'Mp5', 'Kritische Heilung', 'Haste'],
      rotation: ['Circle of Healing bei Gruppenschaden', 'Renew flächig verteilen', 'Greater Heal downranken', 'Prayer of Healing gruppenweise', 'Guardian Spirit als Notfall', 'Dispel Magic sofort'],
      talents: ['Circle of Healing', 'Empowered Healing', 'Spirit of Redemption', 'Spirit Tap', 'Divine Fury'],
      gear: ['Vestments of Absolution', 'Vestments of Transcendence', 'Silver Crescent Idol', 'Robes of Faith'],
      consumables: ['Flask of Mighty Restoration', 'Golden Fish Sticks', 'Mana Oil']
    }
  ],
  rogue: [
    {
      id: 'tbc-rogue-combat',
      name: 'Combat',
      role: 'Raid DPS',
      summary: 'Combat bleibt dank Blade Flurry und stabiler Waffenspezialisierung der verlässlichste Raid-DPS-Spec.',
      statPriority: ['Trefferchance (Hit Cap)', 'Agility', 'Kritische Trefferwertung', 'Angriffskraft', 'Expertise'],
      rotation: ['Slice and Dice permanent aktiv halten', 'Sinister Strike für Combo-Punkte', 'Eviscerate als Finisher', 'Kick gegen Caster', 'Adrenaline Rush/Blade Flurry auf Cooldown', 'Poisons je nach Ziel wählen'],
      talents: ['Weapon Expertise', 'Aggression', 'Blade Flurry', 'Adrenaline Rush', 'Dual Wield Specialization'],
      gear: ['Slayer’s Armor', 'Bonescythe Armor', 'Warp Slicer', 'Shadowblade', 'Dragonspine Trophy'],
      consumables: ['Flask of Relentless Assault', 'Roasted Clefthoof', 'Adamantite Sharpening Stone']
    },
    {
      id: 'tbc-rogue-assassination',
      name: 'Assassination (Mutilate)',
      role: 'Raid DPS',
      summary: 'Mutilate mit zwei Daggern liefert starken Burst und Cleave über Envenom-Prozs, technisch anspruchsvoller als Combat.',
      statPriority: ['Trefferchance (Hit Cap)', 'Agility', 'Kritische Trefferwertung', 'Angriffskraft', 'Expertise'],
      rotation: ['Slice and Dice aktiv halten', 'Mutilate für Combo-Punkte', 'Envenom als Finisher', 'Kick gegen Caster', 'Cold Blood für garantierten Crit', 'Poisons (Instant/Deadly) synchronisieren'],
      talents: ['Improved Mutilate', 'Cold Blood', 'Seal Fate', 'Improved Poisons', 'Vile Poisons'],
      gear: ['Slayer’s Armor', 'Bonescythe Armor', 'Warp Slicer', 'Dragonspine Trophy'],
      consumables: ['Flask of Relentless Assault', 'Roasted Clefthoof', 'Adamantite Sharpening Stone']
    },
    {
      id: 'tbc-rogue-subtlety',
      name: 'Subtlety',
      role: 'PvP / Kontrolle',
      summary: 'Subtlety bleibt primär eine PvP- und Kontroll-Spec mit starkem Opener-Burst über Premeditation und Hemorrhage.',
      statPriority: ['Trefferchance', 'Agility', 'Kritische Trefferwertung', 'Angriffskraft', 'Ausdauer'],
      rotation: ['Stealth-Opener mit Ambush/Cheap Shot', 'Hemorrhage als Bleed-Verstärker', 'Slice and Dice aktiv halten', 'Eviscerate als Finisher', 'Vanish für Reposition', 'Kick gegen Caster'],
      talents: ['Premeditation', 'Hemorrhage', 'Initiative', 'Sinister Calling', 'Elusiveness'],
      gear: ['Slayer’s Armor', 'Warp Slicer', 'Dragonspine Trophy'],
      consumables: ['Flask of Relentless Assault', 'Roasted Clefthoof']
    }
  ],
  shaman: [
    {
      id: 'tbc-shaman-restoration',
      name: 'Restoration',
      role: 'Heiler',
      summary: 'Restoration ist dank Chain Heal der beste AoE-Raidheiler der Erweiterung und Kernbestandteil jeder Raidzusammensetzung.',
      statPriority: ['Heilung', 'Intelligenz', 'Mp5', 'Kritische Trefferwertung', 'Haste'],
      rotation: ['Chain Heal auf gruppierte Ziele', 'Lesser Healing Wave bei Spike-Schaden', 'Riptide-Vorläufer über Earth Shield', 'Mana Tide Totem auf Cooldown', 'Nature’s Swiftness als Notfall', 'Totems je nach Encounter setzen'],
      talents: ['Totemic Focus', 'Nature’s Swiftness', 'Mana Tide Totem', 'Improved Chain Heal', 'Healing Way'],
      gear: ['Cyclone Regalia', 'Skyshatter Regalia', 'Eternium Rune Blade', 'Totem of the Void'],
      consumables: ['Flask of Mighty Restoration', 'Golden Fish Sticks', 'Mana Oil']
    },
    {
      id: 'tbc-shaman-elemental',
      name: 'Elemental',
      role: 'Caster DPS',
      summary: 'Elemental liefert starke Burst-Caster-DPS über Totem-Twisting und Elemental Mastery, besonders effektiv in Fenstern mit Bloodlust.',
      statPriority: ['Zauberschaden', 'Trefferchance', 'Kritische Trefferwertung', 'Intelligenz', 'Haste'],
      rotation: ['Flame Shock setzen', 'Lightning Bolt als Hauptzauber', 'Chain Lightning bei mehreren Zielen', 'Elemental Mastery für Burst', 'Totem-Twisting für zusätzliche Buffs', 'Earth Shock als Filler'],
      talents: ['Elemental Mastery', 'Totem of Wrath', 'Lightning Overload', 'Call of Thunder', 'Elemental Fury'],
      gear: ['Cyclone Regalia', 'Nathrezim Mindblade', 'Eternium Rune Blade', 'Totem of the Void'],
      consumables: ['Flask of Supreme Power', 'Skullfish Soup', 'Brilliant Wizard Oil']
    },
    {
      id: 'tbc-shaman-enhancement',
      name: 'Enhancement',
      role: 'Melee DPS',
      summary: 'Enhancement wird durch Dual-Wield und Stormstrike zur ernstzunehmenden Melee-DPS-Option mit starkem Gruppenbuff über Windfury Weapon.',
      statPriority: ['Trefferchance', 'Agility/Stärke', 'Kritische Trefferwertung', 'Angriffskraft', 'Haste'],
      rotation: ['Windfury Weapon aktiv halten', 'Stormstrike auf Cooldown', 'Earth Shock als Filler', 'Flame Shock/Fire Nova situativ', 'Auto-Attacks priorisieren', 'Feral Spirit für Burst-Fenster'],
      talents: ['Dual Wield Specialization', 'Stormstrike', 'Unleashed Rage', 'Flurry', 'Shamanistic Rage'],
      gear: ['Cyclone Regalia (Melee-Reforge)', 'Nathrezim Mindblade', 'Eternium Rune Blade'],
      consumables: ['Flask of Relentless Assault', 'Roasted Clefthoof', 'Adamantite Sharpening Stone']
    }
  ],
  warlock: [
    {
      id: 'tbc-warlock-affliction',
      name: 'Affliction',
      role: 'Raid DPS',
      summary: 'Affliction liefert die konstanteste Raid-DPS über DoTs und Shadow-Bolt-Weaving und bleibt über die ganze Erweiterung stark.',
      statPriority: ['Schattenzauberschaden', 'Trefferchance (Hit Cap)', 'Kritische Trefferwertung', 'Intelligenz', 'Haste'],
      rotation: ['Curse of Agony/Doom setzen', 'Corruption aufrechterhalten', 'Siphon Life bei Bedarf', 'Shadow Bolt als Hauptfiller', 'Life Tap zwischen Damage-Fenstern', 'Drain Soul für Shards nach Kill'],
      talents: ['Suppression', 'Shadow Mastery', 'Siphon Life', 'Improved Corruption', 'Nightfall'],
      gear: ['Voidheart Raiment', 'Corruptor Raiment', 'Wand of the Cosmos', 'Sunflare'],
      consumables: ['Flask of Supreme Power', 'Skullfish Soup', 'Brilliant Wizard Oil']
    },
    {
      id: 'tbc-warlock-destruction',
      name: 'Destruction',
      role: 'Burst DPS',
      summary: 'Destruction punktet mit Conflagrate und Shadowfury-Burst besonders auf Add-Phasen und kurzen Encountern.',
      statPriority: ['Schattenzauberschaden', 'Trefferchance (Hit Cap)', 'Kritische Trefferwertung', 'Intelligenz', 'Haste'],
      rotation: ['Immolate setzen', 'Conflagrate auf Cooldown', 'Incinerate/Shadow Bolt als Filler', 'Shadowfury als Burst-Opener', 'Life Tap zwischen Fenstern', 'Shadowburn als Execute'],
      talents: ['Devastation', 'Conflagrate', 'Shadowburn', 'Emberstorm', 'Backlash'],
      gear: ['Voidheart Raiment', 'Wand of the Cosmos', 'Sunflare'],
      consumables: ['Flask of Supreme Power', 'Skullfish Soup', 'Brilliant Wizard Oil']
    },
    {
      id: 'tbc-warlock-demonology',
      name: 'Demonology',
      role: 'Nischen-DPS / Utility',
      summary: 'Demonology bringt starke Pet-Skalierung über den Felguard und ist ein solider Kompromiss aus Schaden und Utility.',
      statPriority: ['Schattenzauberschaden', 'Trefferchance', 'Kritische Trefferwertung', 'Intelligenz', 'Ausdauer'],
      rotation: ['Felguard/Pet tanken lassen', 'Corruption/Immolate pflegen', 'Shadow Bolt als Hauptfiller', 'Life Tap zwischen Fenstern', 'Demonic Sacrifice situativ abwägen', 'Fear als Notfall-Kontrolle'],
      talents: ['Master Demonologist', 'Demonic Knowledge', 'Unholy Power', 'Soul Link', 'Demonic Tactics'],
      gear: ['Corruptor Raiment', 'Wand of the Cosmos', 'Sunflare'],
      consumables: ['Flask of Supreme Power', 'Skullfish Soup']
    }
  ],
  warrior: [
    {
      id: 'tbc-warrior-fury',
      name: 'Fury',
      role: 'Raid DPS',
      summary: 'Fury mit Dual-Wield und Whirlwind ist der bekannteste Raid-DPS-Spec der Erweiterung.',
      statPriority: ['Trefferchance (Hit Cap)', 'Stärke', 'Kritische Trefferwertung', 'Angriffskraft', 'Expertise'],
      rotation: ['Battle Shout aktiv halten', 'Bloodrage/Rage-Management planen', 'Whirlwind auf Cooldown', 'Heroic Strike bei Rage-Überschuss', 'Execute bei niedrigem Ziel-HP', 'Death Wish/Recklessness mit Trinkets synchronisieren'],
      talents: ['Flurry', 'Dual Wield Specialization', 'Death Wish', 'Bloodthirst', 'Improved Berserker Rage'],
      gear: ['Warbringer Armor', 'Destroyer Armor', 'Warglaive of Azzinoth', 'The Sun Eater'],
      consumables: ['Flask of Relentless Assault', 'Roasted Clefthoof', 'Adamantite Sharpening Stone']
    },
    {
      id: 'tbc-warrior-protection',
      name: 'Protection',
      role: 'Tank',
      summary: 'Protection etabliert sich mit hoher AoE-Threat über Sunder Armor/Shield Slam als robuster Haupttank.',
      statPriority: ['Verteidigungswertung', 'Ausdauer', 'Blockwertung', 'Rüstung', 'Stärke für Threat'],
      rotation: ['Sunder Armor stapeln', 'Shield Slam auf Cooldown', 'Revenge bei Proc', 'Shield Block vor Crush-Spikes', 'Thunder Clap für AoE-Threat', 'Taunt bei Aggroverlust'],
      talents: ['Shield Specialization', 'Improved Shield Block', 'One-Handed Weapon Specialization', 'Improved Revenge', 'Devastate'],
      gear: ['Destroyer Armor (Tank-Reforge)', 'Bulwark of Azzinoth', 'Quel’Serrar'],
      consumables: ['Flask of the Titans', 'Elixir of Major Fortitude', 'Stoneshield Potion']
    },
    {
      id: 'tbc-warrior-arms',
      name: 'Arms',
      role: 'Leveling / PvP',
      summary: 'Arms bleibt für Leveling und PvP relevant, mit Mortal Strike als starkem Healing-Debuff und Sweeping Strikes für Multi-Target.',
      statPriority: ['Trefferchance', 'Stärke', 'Kritische Trefferwertung', 'Angriffskraft', 'Expertise'],
      rotation: ['Rend bei langen Kämpfen', 'Mortal Strike auf Cooldown', 'Overpower nach Dodge', 'Sweeping Strikes für Multi-Pulls', 'Execute bei niedrigem Ziel-HP', 'Battle Shout aktiv halten'],
      talents: ['Impale', 'Sweeping Strikes', 'Mortal Strike', 'Tactical Mastery', 'Deep Wounds'],
      gear: ['Warbringer Armor', 'Warglaive of Azzinoth', 'The Sun Eater'],
      consumables: ['Flask of Relentless Assault', 'Roasted Clefthoof']
    }
  ]
};

const wrathSpecGuides = {
  'death-knight': [
    {
      id: 'wrath-death-knight-unholy',
      name: 'Unholy',
      role: 'Raid DPS',
      summary: 'Unholy dominiert mit Scourge Strike, Diseases und einem starken Ghoul-Pet die Death-Knight-DPS-Ranglisten über weite Teile der Erweiterung.',
      statPriority: ['Trefferchance (Hit Cap)', 'Expertise', 'Stärke', 'Kritische Trefferwertung', 'Haste'],
      rotation: ['Icy Touch/Plague Strike für Diseases setzen', 'Diseases konsequent aufrechterhalten', 'Scourge Strike als Hauptfiller', 'Death Coil als Runic-Power-Dump', 'Summon Gargoyle auf Cooldown', 'Army of the Dead vor Pull einplanen'],
      talents: ['Reaping', 'Night of the Dead', 'Summon Gargoyle', 'Ebon Plague', 'Unholy Blight'],
      gear: ['Scourgeborne Battlegear (T9)', 'Thassarian’s Battlegear (T10)', 'Shadowmourne', 'Bryntroll, the Bone Arbiter'],
      consumables: ['Flask of Endless Rage', 'Fish Feast', 'Elemental Sharpening Stone']
    },
    {
      id: 'wrath-death-knight-blood',
      name: 'Blood',
      role: 'Tank',
      summary: 'Blood ist nach den Frost/Unholy-Tank-Nerfs der etablierte Haupttank-Spec mit hoher Selbstheilung über Death Strike.',
      statPriority: ['Verteidigungswertung', 'Ausdauer', 'Vermeidungswertung', 'Rüstung', 'Stärke für Threat'],
      rotation: ['Diseases aufrechterhalten', 'Death Strike für Selbstheilung', 'Heart Strike/Blood Boil für AoE-Threat', 'Icebound Fortitude als Notfall-Cooldown', 'Rune Strike bei Parry-Prozs', 'Death Grip für Adds'],
      talents: ['Blade Barrier', 'Vampiric Blood', 'Bone Shield', 'Will of the Necropolis', 'Mark of Blood'],
      gear: ['Scourgeborne Battleplate (Tank-Reforge)', 'Deathbringer’s Will', 'Corpse Tongue Coil'],
      consumables: ['Flask of Stoneblood', 'Fish Feast', 'Elixir of Mighty Defense']
    },
    {
      id: 'wrath-death-knight-frost',
      name: 'Frost',
      role: 'Alternative Raid DPS',
      summary: 'Frost mit zweihändigen Waffen und Killing Machine bleibt eine starke DPS-Alternative zu Unholy, besonders bei Burst-Fenstern.',
      statPriority: ['Trefferchance (Hit Cap)', 'Expertise', 'Stärke', 'Kritische Trefferwertung', 'Haste'],
      rotation: ['Diseases aufrechterhalten', 'Obliterate als Hauptfiller', 'Killing Machine-Prozs sofort nutzen', 'Frost Strike als Runic-Power-Dump', 'Pillar of Frost auf Cooldown', 'Empower Rune Weapon für Burst'],
      talents: ['Killing Machine', 'Icy Talons', 'Rime', 'Might of Mograine', 'Threat of Thassarian'],
      gear: ['Thassarian’s Battlegear (T10)', 'Shadowmourne', 'Bryntroll, the Bone Arbiter'],
      consumables: ['Flask of Endless Rage', 'Fish Feast', 'Elemental Sharpening Stone']
    }
  ],
  druid: [
    {
      id: 'wrath-druid-restoration',
      name: 'Restoration',
      role: 'Heiler',
      summary: 'Restoration bleibt mit Wild Growth und Nourish der stärkste AoE-Raidheiler der Erweiterung.',
      statPriority: ['Heilung', 'Intelligenz', 'Haste', 'Mp5', 'Kritische Trefferwertung'],
      rotation: ['Lifebloom-Stack aufrechterhalten', 'Rejuvenation flächig verteilen', 'Wild Growth auf Cooldown', 'Nourish als Mana-Filler', 'Swiftmend für Notfälle', 'Tree of Life Form für AoE-Phasen'],
      talents: ['Empowered Rejuvenation', 'Living Seed', 'Gift of Nature', 'Improved Tree of Life', 'Revitalize'],
      gear: ['Dreamwalker Raiment (T9)', 'Nightsong Raiment (T10)', 'Val’anyr, Hammer of Ancient Kings', 'Rhok Talisman'],
      consumables: ['Flask of the Frost Wyrm', 'Fish Feast', 'Mana Oil']
    },
    {
      id: 'wrath-druid-balance',
      name: 'Balance',
      role: 'Caster DPS',
      summary: 'Balance wird durch Starfall und Eclipse-Vorläufer-Mechaniken zur Top-Caster-DPS-Spec der Erweiterung.',
      statPriority: ['Zauberschaden', 'Trefferchance (Hit Cap)', 'Kritische Trefferwertung', 'Haste', 'Intelligenz'],
      rotation: ['Moonfire/Insect Swarm aufrechterhalten', 'Starfire als Hauptzauber', 'Starfall vor AoE-Phasen einplanen', 'Wrath bei Movement', 'Typhoon/Force of Nature situativ', 'Innervate für Manafenster'],
      talents: ['Eclipse (Vorläufer)', 'Moonkin Form', 'Nature’s Grace', 'Improved Insect Swarm', 'Wrath of Cenarius'],
      gear: ['Dreamwalker Raiment (Caster-Reforge)', 'Val’anyr, Hammer of Ancient Kings', 'Rhok Talisman'],
      consumables: ['Flask of the Frost Wyrm', 'Fish Feast', 'Mana Oil']
    },
    {
      id: 'wrath-druid-feral-cat',
      name: 'Feral (Cat)',
      role: 'Melee DPS',
      summary: 'Feral Katze profitiert von Mangle-Synergie und starkem Bleed-Schaden für eine solide Melee-DPS-Rolle.',
      statPriority: ['Trefferchance (Hit Cap)', 'Agility', 'Kritische Trefferwertung', 'Angriffskraft', 'Ausdauer'],
      rotation: ['Mangle aufrechterhalten', 'Rake setzen', 'Rip bei 5 Combo-Punkten', 'Shred aus dem Rücken', 'Ferocious Bite bei Energie-Überschuss', 'Tiger’s Fury auf Cooldown'],
      talents: ['Predatory Strikes', 'King of the Jungle', 'Primal Fury', 'Berserk', 'Improved Mangle'],
      gear: ['Nightsong Raiment (Feral-Reforge)', 'Val’anyr, Hammer of Ancient Kings', 'Rhok Talisman'],
      consumables: ['Flask of Endless Rage', 'Fish Feast', 'Elemental Sharpening Stone']
    },
    {
      id: 'wrath-druid-feral-tank',
      name: 'Feral (Bär)',
      role: 'Tank',
      summary: 'Feral Bär bleibt mit Mangle-Bedrohung und starker Selbstheilung über Frenzied Regeneration ein zuverlässiger Raid-Tank.',
      statPriority: ['Verteidigungswertung', 'Ausdauer', 'Vermeidungswertung', 'Agility', 'Rüstung'],
      rotation: ['Mangle als Bedrohungs-Opener', 'Lacerate stapeln', 'Maul/Swipe für AoE-Threat', 'Demoralizing Roar bei großen Pulls', 'Survival Instincts als Notfall-Cooldown', 'Frenzied Regeneration für Selbstheilung'],
      talents: ['Thick Hide', 'Improved Mangle', 'Survival Instincts', 'Protector of the Pack', 'Master Shapeshifter'],
      gear: ['Nightsong Raiment (Tank-Reforge)', 'Val’anyr, Hammer of Ancient Kings (Off-Spec)'],
      consumables: ['Flask of Stoneblood', 'Fish Feast', 'Elixir of Mighty Defense']
    }
  ],
  hunter: [
    {
      id: 'wrath-hunter-survival',
      name: 'Survival',
      role: 'Raid DPS',
      summary: 'Survival mit Explosive Shot ist über weite Teile der Erweiterung die Top-DPS-Spec für Hunter.',
      statPriority: ['Agility', 'Trefferchance (Hit Cap)', 'Kritische Trefferwertung', 'Angriffskraft', 'Haste'],
      rotation: ['Serpent Sting aufrechterhalten', 'Explosive Shot auf Cooldown', 'Steady Shot zwischen Cooldowns weben', 'Kill Command bei Pet-Cooldown', 'Black Arrow einplanen', 'Rapid Fire mit Bloodlust/Heroism synchronisieren'],
      talents: ['Lock and Load', 'Explosive Shot', 'Black Arrow', 'Improved Tracking', 'T.N.T.'],
      gear: ['Rift Stalker Armor (T9)', 'Scourgestalker Battlegear (T10)', 'Thori’dal, the Stars’ Fury', 'Longview'],
      consumables: ['Flask of the Winds', 'Fish Feast', 'Elemental Sharpening Stone']
    },
    {
      id: 'wrath-hunter-marksmanship',
      name: 'Marksmanship',
      role: 'Raid DPS',
      summary: 'Marksmanship liefert starke Burst-Fenster über Chimera Shot und bleibt eine kompetitive Alternative zu Survival.',
      statPriority: ['Agility', 'Trefferchance (Hit Cap)', 'Kritische Trefferwertung', 'Angriffskraft', 'Haste'],
      rotation: ['Serpent Sting/Chimera Shot aufrechterhalten', 'Aimed Shot zwischen Cooldowns', 'Steady Shot als Filler', 'Silencing Shot gegen Caster', 'Rapid Fire auf Cooldown', 'Kill Shot bei niedrigem Ziel-HP'],
      talents: ['Careful Aim', 'Chimera Shot', 'Silencing Shot', 'Piercing Shots', 'Wild Quiver'],
      gear: ['Rift Stalker Armor (T9)', 'Scourgestalker Battlegear (T10)', 'Thori’dal, the Stars’ Fury'],
      consumables: ['Flask of the Winds', 'Fish Feast', 'Elemental Sharpening Stone']
    },
    {
      id: 'wrath-hunter-beast-mastery',
      name: 'Beast Mastery',
      role: 'Leveling / Solo',
      summary: 'Beast Mastery bleibt der komfortabelste Leveling-Spec dank starker Pet-Skalierung über Kindred Spirits und Bestial Wrath.',
      statPriority: ['Agility', 'Ausdauer', 'Trefferchance', 'Angriffskraft', 'Haste'],
      rotation: ['Pet vorpullen lassen', 'Serpent Sting früh setzen', 'Steady Shot zwischen Auto Shots', 'Bestial Wrath für Burst', 'Kill Command auf Cooldown', 'Mend Pet zwischen Pulls'],
      talents: ['Kindred Spirits', 'Bestial Wrath', 'Ferocity', 'Frenzy', 'The Beast Within'],
      gear: ['Rift Stalker Armor (T9)', 'Thori’dal, the Stars’ Fury'],
      consumables: ['Flask of the Winds', 'Fish Feast']
    }
  ],
  mage: [
    {
      id: 'wrath-mage-fire',
      name: 'Fire',
      role: 'Raid DPS',
      summary: 'Fire bleibt mit Hot Streak und Living Bomb die verlässlichste Top-DPS-Spec der Erweiterung.',
      statPriority: ['Zauberschaden', 'Trefferchance (Hit Cap)', 'Kritische Trefferwertung', 'Haste', 'Intelligenz'],
      rotation: ['Living Bomb aufrechterhalten', 'Fireball als Hauptzauber', 'Hot-Streak-Procs sofort mit Pyroblast nutzen', 'Fire Blast als Instant-Filler', 'Combustion mit Crit-Cooldowns kombinieren', 'Mana Gems/Evocation timen'],
      talents: ['Ignite', 'Hot Streak', 'Living Bomb', 'Improved Scorch', 'Firestarter'],
      gear: ['Kirin Tor Robes (T9)', 'Zabra’jin Robes (T10)', 'Fal’inrush, Defender of Quel’thalas'],
      consumables: ['Flask of the Frost Wyrm', 'Fish Feast', 'Mana Oil']
    },
    {
      id: 'wrath-mage-frostfire',
      name: 'Frostfire (Frost-Hybrid)',
      role: 'Raid DPS',
      summary: 'Frostfire-Hybridbuilds verstärken das späte Erweiterungs-Meta mit Brain Freeze- und Fingers-of-Frost-Prozs.',
      statPriority: ['Zauberschaden', 'Trefferchance (Hit Cap)', 'Kritische Trefferwertung', 'Haste', 'Intelligenz'],
      rotation: ['Frostfire Bolt als Hauptzauber', 'Brain-Freeze-Prozs sofort nutzen', 'Fingers of Frost für garantierte Crits', 'Living Bomb aufrechterhalten', 'Deep Freeze als Burst-Cooldown', 'Mana Gems/Evocation timen'],
      talents: ['Fingers of Frost', 'Brain Freeze', 'Empowered Frostbolt', 'Improved Scorch', 'Ignite'],
      gear: ['Zabra’jin Robes (T10)', 'Fal’inrush, Defender of Quel’thalas'],
      consumables: ['Flask of the Frost Wyrm', 'Fish Feast']
    },
    {
      id: 'wrath-mage-arcane',
      name: 'Arcane',
      role: 'Burst DPS',
      summary: 'Arcane liefert über Arcane Potency und Arcane Blast-Stacking starke, planbare Burst-Fenster.',
      statPriority: ['Zauberschaden', 'Trefferchance (Hit Cap)', 'Haste', 'Kritische Trefferwertung', 'Intelligenz'],
      rotation: ['Arcane Blast stacken', 'Arcane Missiles bei Procs', 'Arcane Power auf Cooldown', 'Presence of Mind für Instant-Burst', 'Evocation für Manafenster', 'Mana Gems einplanen'],
      talents: ['Arcane Potency', 'Missile Barrage', 'Arcane Power', 'Torment the Weak', 'Slow'],
      gear: ['Kirin Tor Robes (T9)', 'Fal’inrush, Defender of Quel’thalas'],
      consumables: ['Flask of the Frost Wyrm', 'Fish Feast']
    }
  ],
  paladin: [
    {
      id: 'wrath-paladin-retribution',
      name: 'Retribution',
      role: 'Raid DPS',
      summary: 'Retribution wird in Wrath erstmals zu einer echten Top-Tier-Raid-DPS-Spec dank Divine Storm und Seal of Command.',
      statPriority: ['Trefferchance (Hit Cap)', 'Expertise', 'Stärke', 'Kritische Trefferwertung', 'Haste'],
      rotation: ['Seal of Command/Vengeance aktiv halten', 'Crusader Strike auf Cooldown', 'Divine Storm bei mehreren Zielen', 'Judgement zwischen Cooldowns', 'Exorcism als Instant-Filler', 'Avenging Wrath mit Trinkets synchronisieren'],
      talents: ['Sanctified Retribution', 'Divine Storm', 'The Art of War', 'Repentance', 'Sheath of Light'],
      gear: ['Lightsworn Battlegear (T9)', 'Liadrin’s Battlegear (T10)', 'Shadowmourne', 'Deathbringer’s Will'],
      consumables: ['Flask of Endless Rage', 'Fish Feast', 'Elemental Sharpening Stone']
    },
    {
      id: 'wrath-paladin-holy',
      name: 'Holy',
      role: 'Heiler',
      summary: 'Holy bleibt mit Beacon of Light und Holy Radiance der bevorzugte Tank-Heiler-Spec der Erweiterung.',
      statPriority: ['Heilung', 'Intelligenz', 'Haste', 'Kritische Heilung', 'Mp5'],
      rotation: ['Beacon of Light auf den Tank legen', 'Holy Shock auf Cooldown', 'Flash of Light/Holy Light je nach Schadenstyp', 'Divine Favor/Illumination für Manafenster', 'Holy Radiance für Flächenheilung', 'Cleanse bei Dispel-Bedarf'],
      talents: ['Beacon of Light', 'Infusion of Light', 'Holy Shock', 'Judgements of the Pure', 'Sacred Cleansing'],
      gear: ['Lightsworn Battlegear (Heiler-Reforge)', 'Val’anyr, Hammer of Ancient Kings', 'Sundial of the Exiled'],
      consumables: ['Flask of the Frost Wyrm', 'Fish Feast', 'Mana Oil']
    },
    {
      id: 'wrath-paladin-protection',
      name: 'Protection',
      role: 'Tank',
      summary: 'Protection etabliert sich mit Judgements of the Just und Hammer of the Righteous als starker AoE-Tank.',
      statPriority: ['Verteidigungswertung', 'Ausdauer', 'Vermeidungswertung', 'Rüstung', 'Stärke für Threat'],
      rotation: ['Consecration für AoE-Threat', 'Avenger’s Shield als Opener', 'Hammer of the Righteous für AoE', 'Shield of Righteousness auf Cooldown', 'Judgement zwischen Cooldowns', 'Holy Shield aktiv halten'],
      talents: ['Judgements of the Just', 'Hammer of the Righteous', 'Sacred Shield', 'Ardent Defender', 'Redoubt'],
      gear: ['Liadrin’s Battlegear (Tank-Reforge)', 'Shadowmourne (Off-Spec)', 'Deathbringer’s Will'],
      consumables: ['Flask of Stoneblood', 'Fish Feast', 'Elixir of Mighty Defense']
    }
  ],
  priest: [
    {
      id: 'wrath-priest-discipline',
      name: 'Discipline',
      role: 'Heiler',
      summary: 'Discipline wird durch Rapture und Penance zum bevorzugten Tank-Heiler-Spec der Erweiterung.',
      statPriority: ['Heilung', 'Intelligenz', 'Haste', 'Kritische Trefferwertung', 'Mp5'],
      rotation: ['Power Word: Shield taktisch einsetzen', 'Penance auf Cooldown', 'Rapture-Timing maximieren', 'Renew flächig verteilen', 'Pain Suppression für Cooldown-Fenster', 'Prayer of Mending einplanen'],
      talents: ['Rapture', 'Penance', 'Pain Suppression', 'Soul Warding', 'Borrowed Time'],
      gear: ['Vestments of Dying Light (T9)', 'Crimson Acolyte Raiment (T10)', 'Val’anyr, Hammer of Ancient Kings'],
      consumables: ['Flask of the Frost Wyrm', 'Fish Feast', 'Mana Oil']
    },
    {
      id: 'wrath-priest-shadow',
      name: 'Shadow',
      role: 'Raid DPS',
      summary: 'Shadow liefert weiterhin Top-Tier-Raid-DPS mit Mana-Support über Vampiric Touch und starkem DoT-Management.',
      statPriority: ['Schattenzauberschaden', 'Trefferchance (Hit Cap)', 'Haste', 'Kritische Trefferwertung', 'Intelligenz'],
      rotation: ['Vampiric Touch aufrechterhalten', 'Shadow Word: Pain/Devouring Plague pflegen', 'Mind Flay als Hauptfiller', 'Mind Blast auf Cooldown', 'Shadowfiend für Burst und Mana', 'Dispersion als Notfall'],
      talents: ['Twisted Faith', 'Dark Evangelism', 'Shadowform', 'Pain and Suffering', 'Improved Devouring Plague'],
      gear: ['Vestments of Dying Light (T9)', 'Crimson Acolyte Raiment (T10)', 'Val’anyr, Hammer of Ancient Kings'],
      consumables: ['Flask of the Frost Wyrm', 'Fish Feast']
    },
    {
      id: 'wrath-priest-holy',
      name: 'Holy',
      role: 'Heiler',
      summary: 'Holy bleibt mit Circle of Healing und Serendipity ein starker AoE-Heiler-Spec für schadensintensive Phasen.',
      statPriority: ['Heilung', 'Intelligenz', 'Haste', 'Kritische Heilung', 'Mp5'],
      rotation: ['Circle of Healing bei Gruppenschaden', 'Renew flächig verteilen', 'Serendipity-Stacks für Prayer of Healing', 'Guardian Spirit als Notfall-Cooldown', 'Flash Heal bei Spike-Schaden', 'Dispel Magic sofort'],
      talents: ['Circle of Healing', 'Serendipity', 'Guardian Spirit', 'Empowered Healing', 'Test of Faith'],
      gear: ['Vestments of Dying Light (T9)', 'Crimson Acolyte Raiment (T10)', 'Val’anyr, Hammer of Ancient Kings'],
      consumables: ['Flask of the Frost Wyrm', 'Fish Feast']
    }
  ],
  rogue: [
    {
      id: 'wrath-rogue-combat',
      name: 'Combat',
      role: 'Raid DPS',
      summary: 'Combat bleibt durch Haste-Skalierung und Killing Spree über weite Teile der Erweiterung die Top-DPS-Spec.',
      statPriority: ['Trefferchance (Hit Cap)', 'Agility', 'Haste', 'Kritische Trefferwertung', 'Expertise'],
      rotation: ['Slice and Dice permanent aktiv halten', 'Sinister Strike für Combo-Punkte', 'Eviscerate als Finisher', 'Killing Spree auf Cooldown', 'Kick gegen Caster', 'Poisons je nach Encounter wählen'],
      talents: ['Combat Potency', 'Blade Twisting', 'Killing Spree', 'Savage Combat', 'Adrenaline Rush'],
      gear: ['Nightstalker Battlegear (T9)', 'Vancleef Battlegear (T10)', 'Shadowmourne (Off-Spec)'],
      consumables: ['Flask of Endless Rage', 'Fish Feast', 'Elemental Sharpening Stone']
    },
    {
      id: 'wrath-rogue-assassination',
      name: 'Assassination (Mutilate)',
      role: 'Raid DPS',
      summary: 'Mutilate mit Cut to the Chase liefert starken, technisch anspruchsvollen Burst-Schaden mit Daggern.',
      statPriority: ['Trefferchance (Hit Cap)', 'Agility', 'Haste', 'Kritische Trefferwertung', 'Expertise'],
      rotation: ['Slice and Dice aktiv halten', 'Mutilate für Combo-Punkte', 'Envenom als Finisher', 'Cut to the Chase für Slice-and-Dice-Refresh', 'Kick gegen Caster', 'Poisons (Instant/Deadly) synchronisieren'],
      talents: ['Improved Mutilate', 'Cut to the Chase', 'Seal Fate', 'Hunger for Blood', 'Venomous Wounds'],
      gear: ['Nightstalker Battlegear (T9)', 'Vancleef Battlegear (T10)', 'Rathrak, the Poisonous Mind'],
      consumables: ['Flask of Endless Rage', 'Fish Feast']
    },
    {
      id: 'wrath-rogue-subtlety',
      name: 'Subtlety',
      role: 'Burst DPS / PvP',
      summary: 'Subtlety liefert mit Shadowstep und Premeditation starke Burst-Öffnungen für PvP und einzelne Encounter.',
      statPriority: ['Trefferchance', 'Agility', 'Haste', 'Kritische Trefferwertung', 'Expertise'],
      rotation: ['Stealth-Opener mit Ambush/Cheap Shot', 'Hemorrhage als Bleed-Verstärker', 'Slice and Dice aktiv halten', 'Eviscerate als Finisher', 'Shadowstep für Reposition', 'Kick gegen Caster'],
      talents: ['Premeditation', 'Shadowstep', 'Initiative', 'Sinister Calling', 'Waylay'],
      gear: ['Nightstalker Battlegear (T9)', 'Vancleef Battlegear (T10)'],
      consumables: ['Flask of Endless Rage', 'Fish Feast']
    }
  ],
  shaman: [
    {
      id: 'wrath-shaman-elemental',
      name: 'Elemental',
      role: 'Caster DPS',
      summary: 'Elemental wird durch den neuen Lava Burst zu einer Top-Caster-DPS-Spec mit garantierten Crits nach Flame Shock.',
      statPriority: ['Zauberschaden', 'Trefferchance (Hit Cap)', 'Haste', 'Kritische Trefferwertung', 'Intelligenz'],
      rotation: ['Flame Shock aufrechterhalten', 'Lava Burst auf Cooldown', 'Chain Lightning bei mehreren Zielen', 'Lightning Bolt als Filler', 'Thunderstorm situativ', 'Bloodlust/Heroism synchronisieren'],
      talents: ['Lava Flows', 'Elemental Oath', 'Totem of Wrath', 'Lightning Overload', 'Elemental Precision'],
      gear: ['Worldbreaker’s Battlegear (T9)', 'Nobundo’s Battlegear (T10)', 'Val’anyr, Hammer of Ancient Kings'],
      consumables: ['Flask of the Frost Wyrm', 'Fish Feast', 'Mana Oil']
    },
    {
      id: 'wrath-shaman-restoration',
      name: 'Restoration',
      role: 'Heiler',
      summary: 'Restoration bleibt mit Riptide und Chain Heal ein Spitzen-Raidheiler mit hoher Flächen- und Einzelzielheilung.',
      statPriority: ['Heilung', 'Intelligenz', 'Haste', 'Kritische Trefferwertung', 'Mp5'],
      rotation: ['Riptide vor Heal-Rotation setzen', 'Chain Heal auf gruppierte Ziele', 'Lesser Healing Wave bei Spike-Schaden', 'Mana Tide Totem auf Cooldown', 'Nature’s Swiftness als Notfall', 'Earth Shield auf Tank halten'],
      talents: ['Riptide', 'Improved Chain Heal', 'Nature’s Swiftness', 'Tidal Waves', 'Improved Reincarnation'],
      gear: ['Worldbreaker’s Battlegear (Heiler-Reforge)', 'Val’anyr, Hammer of Ancient Kings', 'Sundial of the Exiled'],
      consumables: ['Flask of the Frost Wyrm', 'Fish Feast', 'Mana Oil']
    },
    {
      id: 'wrath-shaman-enhancement',
      name: 'Enhancement',
      role: 'Melee DPS',
      summary: 'Enhancement etabliert sich dank Dual-Wield-Windfury und Maelstrom Weapon als vollwertige Melee-DPS-Option.',
      statPriority: ['Trefferchance (Hit Cap)', 'Expertise', 'Agility', 'Haste', 'Kritische Trefferwertung'],
      rotation: ['Windfury Weapon aktiv halten', 'Stormstrike auf Cooldown', 'Lava Lash einplanen', 'Earth Shock als Filler', 'Maelstrom-Weapon-Stacks für Bursts sammeln', 'Feral Spirit für Burst-Fenster'],
      talents: ['Static Shock', 'Maelstrom Weapon', 'Stormstrike', 'Dual Wield Specialization', 'Improved Stormstrike'],
      gear: ['Worldbreaker’s Battlegear (T9)', 'Nobundo’s Battlegear (T10)'],
      consumables: ['Flask of Endless Rage', 'Fish Feast']
    }
  ],
  warlock: [
    {
      id: 'wrath-warlock-affliction',
      name: 'Affliction',
      role: 'Raid DPS',
      summary: 'Affliction wird durch Haunt und Unstable Affliction zur führenden Raid-DPS-Spec der Erweiterung.',
      statPriority: ['Schattenzauberschaden', 'Trefferchance (Hit Cap)', 'Haste', 'Kritische Trefferwertung', 'Intelligenz'],
      rotation: ['Haunt vor dem DoT-Refresh casten', 'Unstable Affliction aufrechterhalten', 'Corruption/Curse of Agony pflegen', 'Shadow Bolt als Filler', 'Life Tap zwischen Damage-Fenstern', 'Soulshatter bei Bedarf'],
      talents: ['Haunt', 'Everlasting Affliction', 'Malediction', 'Pandemic', 'Nightfall'],
      gear: ['Plagueheart Raiment (T9)', 'Ahn’Kahar Blood Hunter’s Battlegear (T10)', 'Val’anyr, Hammer of Ancient Kings (Off-Spec)'],
      consumables: ['Flask of the Frost Wyrm', 'Fish Feast']
    },
    {
      id: 'wrath-warlock-demonology',
      name: 'Demonology',
      role: 'Burst DPS',
      summary: 'Demonology mit dauerhafter Metamorphosis-Fensterrotation liefert starken Burst-Schaden und gute Selbstheilung.',
      statPriority: ['Schattenzauberschaden', 'Trefferchance (Hit Cap)', 'Haste', 'Kritische Trefferwertung', 'Intelligenz'],
      rotation: ['Corruption/Immolate aufrechterhalten', 'Metamorphosis für Burst-Phasen', 'Shadow Bolt als Hauptfiller', 'Life Tap/Dark Pact zwischen Fenstern', 'Decimation-Prozs sofort nutzen', 'Demonic Empowerment für Pet-Burst'],
      talents: ['Metamorphosis', 'Demonic Empowerment', 'Decimation', 'Master Demonologist', 'Demonic Pact'],
      gear: ['Plagueheart Raiment (T9)', 'Ahn’Kahar Blood Hunter’s Battlegear (T10)'],
      consumables: ['Flask of the Frost Wyrm', 'Fish Feast']
    },
    {
      id: 'wrath-warlock-destruction',
      name: 'Destruction',
      role: 'Nischen-DPS',
      summary: 'Destruction bleibt eher Nische, liefert aber mit Chaos Bolt und Conflagrate solide Burst-Fenster.',
      statPriority: ['Schattenzauberschaden', 'Trefferchance (Hit Cap)', 'Haste', 'Kritische Trefferwertung', 'Intelligenz'],
      rotation: ['Immolate setzen', 'Conflagrate auf Cooldown', 'Chaos Bolt als Burst-Zauber', 'Incinerate als Filler', 'Life Tap zwischen Fenstern', 'Shadowburn als Execute'],
      talents: ['Backdraft', 'Chaos Bolt', 'Emberstorm', 'Bane', 'Shadow and Flame'],
      gear: ['Plagueheart Raiment (T9)', 'Sundial of the Exiled'],
      consumables: ['Flask of the Frost Wyrm', 'Fish Feast']
    }
  ],
  warrior: [
    {
      id: 'wrath-warrior-fury',
      name: 'Fury (Titan’s Grip)',
      role: 'Raid DPS',
      summary: 'Fury mit Titan’s Grip (zwei Zweihandwaffen) wird zur Top-DPS-Spec in Icecrown Citadel.',
      statPriority: ['Trefferchance (Hit Cap)', 'Expertise', 'Stärke', 'Kritische Trefferwertung', 'Angriffskraft'],
      rotation: ['Battle Shout aktiv halten', 'Bloodthirst auf Cooldown', 'Whirlwind bei mehreren Zielen', 'Heroic Strike bei Rage-Überschuss', 'Execute bei niedrigem Ziel-HP', 'Recklessness/Death Wish mit Trinkets synchronisieren'],
      talents: ['Titan’s Grip', 'Rampage', 'Bloodsurge', 'Single-Minded Fury (Alternativbuild)', 'Improved Berserker Stance'],
      gear: ['Siegebreaker Battlegear (T9)', 'Wrynn’s Battlegear/Bloodfang (T10)', 'Shadowmourne'],
      consumables: ['Flask of Endless Rage', 'Fish Feast', 'Elemental Sharpening Stone']
    },
    {
      id: 'wrath-warrior-protection',
      name: 'Protection',
      role: 'Tank',
      summary: 'Protection etabliert sich mit Shockwave/Concussion Blow als Top-Tank mit starker Cooldown-Rotation.',
      statPriority: ['Verteidigungswertung', 'Ausdauer', 'Vermeidungswertung', 'Rüstung', 'Stärke für Threat'],
      rotation: ['Devastate/Sunder Armor stapeln', 'Shield Slam auf Cooldown', 'Revenge bei Proc', 'Shockwave für AoE-Threat und Stun', 'Thunder Clap für AoE-Threat', 'Shield Block vor Crush-Spikes'],
      talents: ['Shockwave', 'Concussion Blow', 'Devastate', 'Vigilance', 'Unwavering Sentinel'],
      gear: ['Siegebreaker Battleplate (Tank-Reforge)', 'Shadowmourne (Off-Spec)'],
      consumables: ['Flask of Stoneblood', 'Fish Feast', 'Elixir of Mighty Defense']
    },
    {
      id: 'wrath-warrior-arms',
      name: 'Arms',
      role: 'Alternative Raid DPS',
      summary: 'Arms mit Sudden Death und Mortal Strike bleibt bis Ulduar eine starke DPS-Alternative zu Fury.',
      statPriority: ['Trefferchance (Hit Cap)', 'Expertise', 'Stärke', 'Kritische Trefferwertung', 'Angriffskraft'],
      rotation: ['Rend/Mortal Strike aufrechterhalten', 'Overpower nach Dodge', 'Sudden-Death-Prozs sofort nutzen', 'Sweeping Strikes für Multi-Target', 'Execute bei niedrigem Ziel-HP', 'Battle Shout aktiv halten'],
      talents: ['Sudden Death', 'Wrecking Crew', 'Impale', 'Sweeping Strikes', 'Deep Wounds'],
      gear: ['Siegebreaker Battlegear (T9)', 'Wrynn’s Battlegear/Bloodfang (T10)'],
      consumables: ['Flask of Endless Rage', 'Fish Feast']
    }
  ]
};

const mopSpecGuides = {
  'death-knight': [
    {
      id: 'mop-death-knight-unholy',
      name: 'Unholy',
      role: 'Raid DPS',
      summary: 'Unholy bleibt mit starkem Pet-Schaden und Disease-Management eine verlässliche Death-Knight-DPS-Spec.',
      statPriority: ['Meisterschaft', 'Kritische Trefferwertung', 'Haste', 'Stärke', 'Trefferchance/Expertise-Cap'],
      rotation: ['Diseases (Blood Plague/Frost Fever) aufrechterhalten', 'Scourge Strike als Hauptfiller', 'Death Coil als Runic-Power-Dump', 'Dark Transformation für Ghoul-Burst', 'Summon Gargoyle auf Cooldown', 'Army of the Dead vor Pull einplanen'],
      talents: ['Roiling Blood/Unholy Blight je nach AoE-Bedarf', 'Gorefiend’s Grasp für Gruppen-Utility', 'Necrotic Strike als defensive Option'],
      gear: ['Battlegear of the Undying Nightmare (T15)', 'Kor’kron Battlegear (T14)', 'Souldrinker'],
      consumables: ['Flask of Winter’s Bite', 'Black Pepper Ribs and Shrimp', 'Windsong']
    },
    {
      id: 'mop-death-knight-blood',
      name: 'Blood',
      role: 'Tank',
      summary: 'Blood bleibt der etablierte Haupttank-Spec mit hoher Selbstheilung über Death Strike und starker Stagger-ähnlicher Mitigation.',
      statPriority: ['Meisterschaft', 'Ausdauer', 'Vermeidungswertung', 'Trefferchance/Expertise-Cap', 'Haste'],
      rotation: ['Diseases aufrechterhalten', 'Death Strike für Selbstheilung', 'Heart Strike/Blood Boil für AoE-Threat', 'Icebound Fortitude als Notfall-Cooldown', 'Rune Strike bei Parry-Prozs', 'Death Grip für Adds'],
      talents: ['Purgatory als Notfall-Cooldown', 'Conversion für Runic-Power-Management', 'Death Pact defensiv'],
      gear: ['Kor’kron Battleplate (Tank-Reforge)', 'Haromm’s Talisman'],
      consumables: ['Flask of Steadfast Resolve', 'Black Pepper Ribs and Shrimp']
    },
    {
      id: 'mop-death-knight-frost',
      name: 'Frost',
      role: 'Alternative Raid DPS',
      summary: 'Frost mit Killing Machine und Obliterate bleibt eine starke Alternative zu Unholy, besonders für Zweihand-Builds.',
      statPriority: ['Meisterschaft', 'Kritische Trefferwertung', 'Haste', 'Stärke', 'Trefferchance/Expertise-Cap'],
      rotation: ['Diseases aufrechterhalten', 'Obliterate als Hauptfiller', 'Killing-Machine-Prozs sofort nutzen', 'Frost Strike als Runic-Power-Dump', 'Pillar of Frost auf Cooldown', 'Empower Rune Weapon für Burst'],
      talents: ['Might of Mograine', 'Icy Talons', 'Runic Empowerment'],
      gear: ['Battlegear of the Undying Nightmare (T15)', 'Souldrinker'],
      consumables: ['Flask of Winter’s Bite', 'Black Pepper Ribs and Shrimp']
    }
  ],
  druid: [
    {
      id: 'mop-druid-restoration',
      name: 'Restoration',
      role: 'Heiler',
      summary: 'Restoration bleibt einer der besten Raidheiler dank Wild Growth und effizienter HoT-Skalierung.',
      statPriority: ['Meisterschaft', 'Haste/Kritische Trefferwertung', 'Intelligenz', 'Trefferchance-Cap', 'Spirit'],
      rotation: ['Lifebloom/Rejuvenation-Flächenabdeckung aufrechterhalten', 'Wild Growth auf Cooldown', 'Healing Touch als Mana-Filler', 'Swiftmend als Notfall-Cooldown', 'Tranquility für große Schadensspitzen', 'Innervate für Manafenster'],
      talents: ['Incarnation: Chosen of Elune (Heiler-Utility)', 'Cenarion Ward für Zusatzheilung', 'Heart of the Wild für Flex-Rollen'],
      gear: ['Vestments of the Eternal Blossom (T15)', 'Windwaker Regalia (T14)', 'Rime of the Time-Lost Mariner'],
      consumables: ['Flask of Spring Blossoms', 'Black Pepper Ribs and Shrimp']
    },
    {
      id: 'mop-druid-balance',
      name: 'Balance',
      role: 'Caster DPS',
      summary: 'Balance wird durch Celestial Alignment zur Top-Caster-DPS-Spec mit klarem Eclipse-Rhythmus.',
      statPriority: ['Meisterschaft', 'Haste', 'Kritische Trefferwertung', 'Intelligenz', 'Trefferchance-Cap'],
      rotation: ['Sunfire/Moonfire aufrechterhalten', 'Starfire/Wrath je nach Eclipse-Ausrichtung', 'Celestial Alignment mit Burst-Fenstern synchronisieren', 'Starsurge auf Cooldown', 'Force of Nature einplanen', 'Innervate für Manafenster'],
      talents: ['Incarnation: Chosen of Elune (DPS-Nutzung)', 'Soul of the Forest', 'Dream of Cenarius'],
      gear: ['Vestments of the Eternal Blossom (Caster-Reforge)', 'Rime of the Time-Lost Mariner'],
      consumables: ['Flask of the Warm Sun', 'Black Pepper Ribs and Shrimp']
    },
    {
      id: 'mop-druid-feral',
      name: 'Feral',
      role: 'Melee DPS',
      summary: 'Feral profitiert von starken Bleed-Mechaniken und dem Legendary-Meta-Gem für konstant hohen Multi-DoT-Schaden.',
      statPriority: ['Agility', 'Meisterschaft', 'Kritische Trefferwertung', 'Haste', 'Trefferchance-Cap'],
      rotation: ['Rake/Rip aufrechterhalten', 'Shred aus dem Rücken', 'Ferocious Bite bei Energie-Überschuss', 'Savage Roar aktiv halten', 'Tiger’s Fury auf Cooldown', 'Berserk für Burst-Fenster'],
      talents: ['Incarnation: King of the Jungle', 'Soul of the Forest', 'Force of Nature'],
      gear: ['Fangs of the Father (Legendary)', 'Windwaker Regalia (Feral-Reforge)'],
      consumables: ['Flask of Winter’s Bite', 'Black Pepper Ribs and Shrimp']
    },
    {
      id: 'mop-druid-guardian',
      name: 'Guardian',
      role: 'Tank',
      summary: 'Guardian ist seit Cataclysm die eigenständige Druiden-Tank-Spec und nutzt Savage Defense sowie hohe Ausweichwerte für Mitigation.',
      statPriority: ['Meisterschaft', 'Ausdauer', 'Agility', 'Vermeidungswertung', 'Trefferchance-Cap'],
      rotation: ['Mangle als Bedrohungs-Opener', 'Thrash für AoE-Threat und Bleed', 'Maul/Lacerate als Rage-Dump', 'Savage Defense aktiv halten', 'Frenzied Regeneration für Selbstheilung', 'Berserk/Survival Instincts als Notfall-Cooldowns'],
      talents: ['Incarnation: Son of Ursoc', 'Soul of the Forest (Tank-Nutzung)', 'Heart of the Wild für Flex-Rollen'],
      gear: ['Vestments of the Eternal Blossom (Tank-Reforge)', 'Haromm’s Talisman'],
      consumables: ['Flask of Steadfast Resolve', 'Black Pepper Ribs and Shrimp']
    }
  ],
  hunter: [
    {
      id: 'mop-hunter-survival',
      name: 'Survival',
      role: 'Raid DPS',
      summary: 'Survival bleibt über weite Teile von Mists of Pandaria die bevorzugte Raid-DPS-Spec dank Lock-and-Load-Prozs.',
      statPriority: ['Agility', 'Meisterschaft', 'Kritische Trefferwertung', 'Haste', 'Trefferchance-Cap'],
      rotation: ['Serpent Sting aufrechterhalten', 'Black Arrow einplanen', 'Explosive Shot bei Lock-and-Load-Prozs sofort nutzen', 'Steady Shot/Cobra Shot als Fokus-Filler', 'Kill Command auf Cooldown', 'Rapid Fire mit Bloodlust/Heroism synchronisieren'],
      talents: ['Dire Beast für zusätzlichen Pet-Schaden', 'Stampede als Raid-Cooldown', 'Powershot für Burst gegen einzelne Ziele'],
      gear: ['Yaungol Slayer Battlegear (T15)', 'Spirit Beast Ambusher’s Battlegear (T14)', 'Rume’s Last Compass'],
      consumables: ['Flask of the Winds', 'Black Pepper Ribs and Shrimp']
    },
    {
      id: 'mop-hunter-marksmanship',
      name: 'Marksmanship',
      role: 'Raid DPS',
      summary: 'Marksmanship liefert starke Burst-Fenster über Chimera Shot und Careful Aim gegen hoch-HP-Ziele.',
      statPriority: ['Agility', 'Meisterschaft', 'Kritische Trefferwertung', 'Haste', 'Trefferchance-Cap'],
      rotation: ['Serpent Sting/Chimera Shot aufrechterhalten', 'Aimed Shot bei hohem Ziel-HP', 'Steady Shot als Fokus-Filler', 'Silencing Shot gegen Caster', 'Rapid Fire auf Cooldown', 'Kill Shot bei niedrigem Ziel-HP'],
      talents: ['Careful Aim', 'Powershot', 'Glaive Toss für AoE'],
      gear: ['Yaungol Slayer Battlegear (T15)', 'Rume’s Last Compass'],
      consumables: ['Flask of the Winds', 'Black Pepper Ribs and Shrimp']
    },
    {
      id: 'mop-hunter-beast-mastery',
      name: 'Beast Mastery',
      role: 'Solo / Alternative DPS',
      summary: 'Beast Mastery bleibt komfortabel für Solo-Content und liefert solide Single-Target-DPS über starken Pet-Schaden.',
      statPriority: ['Agility', 'Meisterschaft', 'Kritische Trefferwertung', 'Haste', 'Trefferchance-Cap'],
      rotation: ['Pet-Fähigkeiten aktiv halten', 'Serpent Sting aufrechterhalten', 'Cobra Shot als Fokus-Filler', 'Kill Command auf Cooldown', 'Bestial Wrath für Burst', 'Stampede für Burst-Fenster'],
      talents: ['Dire Beast', 'Fervor für Fokus-Management', 'Stampede'],
      gear: ['Yaungol Slayer Battlegear (T15)', 'Rume’s Last Compass'],
      consumables: ['Flask of the Winds', 'Black Pepper Ribs and Shrimp']
    }
  ],
  mage: [
    {
      id: 'mop-mage-fire',
      name: 'Fire',
      role: 'Raid DPS',
      summary: 'Fire bleibt mit Combustion und Inferno Blast über weite Teile der Erweiterung die stärkste Raid-DPS-Spec.',
      statPriority: ['Meisterschaft', 'Kritische Trefferwertung', 'Haste', 'Intelligenz', 'Trefferchance-Cap'],
      rotation: ['Pyroblast!-Prozs sofort nutzen', 'Fireball als Hauptzauber', 'Inferno Blast auf Cooldown', 'Combustion nach Ignite-Stack-Aufbau zünden', 'Mirror Image für Burst-Fenster einplanen', 'Mana Gems/Evocation timen'],
      talents: ['Invocation für Mana-Effizienz', 'Prismatic Crystal als Ziel-Cooldown', 'Kindling für zusätzliche Combustion-Prozs'],
      gear: ['Regalia of the Exorcist (T15)', 'Regalia of the Burning Scroll (T14)', 'Wushoolay’s Final Choice'],
      consumables: ['Flask of the Warm Sun', 'Black Pepper Ribs and Shrimp']
    },
    {
      id: 'mop-mage-arcane',
      name: 'Arcane',
      role: 'Burst DPS',
      summary: 'Arcane wird mit Alter Time und Invocation zur starken Burst- und Mana-effizienten Alternative.',
      statPriority: ['Meisterschaft', 'Intelligenz', 'Kritische Trefferwertung', 'Haste', 'Trefferchance-Cap'],
      rotation: ['Arcane Blast stacken', 'Arcane Missiles bei Procs', 'Arcane Power auf Cooldown', 'Alter Time für Burst-Reset', 'Evocation/Invocation für Manafenster', 'Nether Tempest bei mehreren Zielen'],
      talents: ['Invocation', 'Alter Time', 'Nether Tempest'],
      gear: ['Regalia of the Exorcist (T15)', 'Wushoolay’s Final Choice'],
      consumables: ['Flask of the Warm Sun', 'Black Pepper Ribs and Shrimp']
    },
    {
      id: 'mop-mage-frost',
      name: 'Frost',
      role: 'Kontrolle / Alternative DPS',
      summary: 'Frost bleibt mobil und kontrolliert mit Frostbolt-Spam und Wasserelementar-Pet, gut für Movement-lastige Encounter.',
      statPriority: ['Meisterschaft', 'Kritische Trefferwertung', 'Haste', 'Intelligenz', 'Trefferchance-Cap'],
      rotation: ['Frostbolt als Hauptzauber', 'Frozen-Orb auf Cooldown', 'Ice Lance bei Fingers-of-Frost-Prozs', 'Water Elemental aktiv halten', 'Icy Veins für Burst-Fenster', 'Mana Gems einplanen'],
      talents: ['Thermal Void', 'Frostfire Bolt-Hybridnutzung situativ', 'Ice Floes für Mobilität'],
      gear: ['Regalia of the Burning Scroll (T14)', 'Wushoolay’s Final Choice'],
      consumables: ['Flask of the Warm Sun', 'Black Pepper Ribs and Shrimp']
    }
  ],
  monk: [
    {
      id: 'mop-monk-windwalker',
      name: 'Windwalker',
      role: 'Melee DPS',
      summary: 'Windwalker ist die einzige Monk-DPS-Spec und kombiniert Chi-Generierung mit starken Finisher-Fähigkeiten und Xuen-Cooldown.',
      statPriority: ['Agility', 'Meisterschaft', 'Kritische Trefferwertung', 'Haste', 'Trefferchance/Expertise-Cap'],
      rotation: ['Tiger Palm für Chi-Generierung', 'Rising Sun Kick auf Cooldown', 'Blackout Kick als Filler', 'Fists of Fury bei ausreichend Chi', 'Xuen, the White Tiger als Raid-Cooldown', 'Spinning Crane Kick bei mehreren Zielen'],
      talents: ['Energizing Elixir', 'Rushing Jade Wind für AoE-Uptime', 'Xuen, the White Tiger'],
      gear: ['Windwalker Battlegear (T15)', 'Rune of Re-Origination'],
      consumables: ['Flask of Spring Blossoms', 'Black Pepper Ribs and Shrimp']
    },
    {
      id: 'mop-monk-brewmaster',
      name: 'Brewmaster',
      role: 'Tank',
      summary: 'Brewmaster ist die einzige Monk-Tank-Spec und nutzt die einzigartige Stagger-Mechanik, um Schaden über Zeit zu verteilen.',
      statPriority: ['Meisterschaft (Stagger)', 'Ausdauer', 'Vermeidungswertung', 'Agility', 'Trefferchance/Expertise-Cap'],
      rotation: ['Stagger über Purifying Brew aktiv abbauen', 'Keg Smash für AoE-Threat und Debuff', 'Blackout Kick als Filler', 'Guard defensiv einplanen', 'Elusive Brew für Vermeidung', 'Provoke für Aggro-Kontrolle'],
      talents: ['Chi Torpedo für Mobilität', 'Dampen Harm defensiv', 'Diffuse Magic gegen Magieschaden'],
      gear: ['Windwalker Battlegear (Tank-Reforge)', 'Rune of Re-Origination'],
      consumables: ['Flask of Steadfast Resolve', 'Black Pepper Ribs and Shrimp']
    },
    {
      id: 'mop-monk-mistweaver',
      name: 'Mistweaver',
      role: 'Heiler',
      summary: 'Mistweaver ist die einzige Monk-Heiler-Spec und bietet über Fistweaving die einzigartige Möglichkeit, durch Nahkampfschaden zu heilen.',
      statPriority: ['Meisterschaft/Spirit', 'Intelligenz', 'Kritische Trefferwertung', 'Haste', 'Trefferchance-Cap für Fistweaving'],
      rotation: ['Soothing Mist kanalisieren', 'Renewing Mist flächig verteilen', 'Uplift bei Gruppenschaden', 'Thunder Focus Tea vor großen Heilfenstern', 'Fistweaving für Zusatzschaden und Heilung', 'Life Cocoon als Notfall-Cooldown'],
      talents: ['Zen Sphere für Zusatzheilung', 'Chi Torpedo für Mobilität', 'Rushing Jade Wind für Fistweaving-AoE'],
      gear: ['Windwalker Battlegear (Heiler-Reforge)', 'Rune of Re-Origination'],
      consumables: ['Flask of Spring Blossoms', 'Black Pepper Ribs and Shrimp']
    }
  ],
  paladin: [
    {
      id: 'mop-paladin-holy',
      name: 'Holy',
      role: 'Heiler',
      summary: 'Holy bleibt mit Beacon of Light und Holy Radiance der bevorzugte Raid-Heiler-Spec.',
      statPriority: ['Meisterschaft', 'Intelligenz', 'Haste', 'Kritische Trefferwertung', 'Spirit'],
      rotation: ['Beacon of Light auf den Tank legen', 'Holy Radiance für Flächenheilung', 'Holy Shock auf Cooldown', 'Divine Light bei Spike-Schaden', 'Light of Dawn für Flächenheilung', 'Divine Favor/Avenging Wrath synchronisieren'],
      talents: ['Holy Avenger als starker Raid-Cooldown', 'Sacred Shield für konstante Absorption', 'Divine Purpose für Bonus-Holy-Power'],
      gear: ['Judgment Battlegear (T15)', 'Rune of Re-Origination'],
      consumables: ['Flask of Spring Blossoms', 'Black Pepper Ribs and Shrimp']
    },
    {
      id: 'mop-paladin-protection',
      name: 'Protection',
      role: 'Tank',
      summary: 'Protection etabliert sich mit Sacred Shield und Shield Barrier als einer der robustesten Tanks der Erweiterung.',
      statPriority: ['Meisterschaft', 'Ausdauer', 'Vermeidungswertung', 'Agility', 'Trefferchance/Expertise-Cap'],
      rotation: ['Judgement für Selene-Schild-Prozs', 'Avenger’s Shield als Opener', 'Shield of the Righteous für Absorption', 'Consecration für AoE-Threat', 'Holy Shield aktiv halten', 'Hand of Purity defensiv'],
      talents: ['Holy Avenger (Tank-Nutzung)', 'Sacred Shield', 'Unbreakable Spirit für Cooldown-Reduktion'],
      gear: ['Judgment Battleplate (Tank-Reforge)', 'Rune of Re-Origination'],
      consumables: ['Flask of Steadfast Resolve', 'Black Pepper Ribs and Shrimp']
    },
    {
      id: 'mop-paladin-retribution',
      name: 'Retribution',
      role: 'Raid DPS',
      summary: 'Retribution liefert solide, konstante Raid-DPS über Templar’s Verdict und Holy-Power-Management.',
      statPriority: ['Meisterschaft', 'Kritische Trefferwertung', 'Haste', 'Stärke', 'Trefferchance/Expertise-Cap'],
      rotation: ['Crusader Strike/Judgement für Holy Power', 'Templar’s Verdict bei 3+ Holy Power', 'Divine Storm bei mehreren Zielen', 'Exorcism als Instant-Filler', 'Avenging Wrath mit Trinkets synchronisieren', 'Divine Purpose-Prozs sofort nutzen'],
      talents: ['Divine Purpose', 'Holy Avenger (DPS-Nutzung)', 'Sanctified Wrath'],
      gear: ['Judgment Battlegear (T15)', 'Rune of Re-Origination'],
      consumables: ['Flask of Winter’s Bite', 'Black Pepper Ribs and Shrimp']
    }
  ],
  priest: [
    {
      id: 'mop-priest-discipline',
      name: 'Discipline',
      role: 'Heiler',
      summary: 'Discipline wird durch Spirit Shell zum dominierenden Raidheiler in den späteren Tiers der Erweiterung.',
      statPriority: ['Meisterschaft', 'Intelligenz', 'Haste', 'Kritische Trefferwertung', 'Spirit'],
      rotation: ['Power Word: Shield taktisch einsetzen', 'Penance auf Cooldown', 'Spirit Shell vor Schadensspitzen vorcasten', 'Prayer of Healing gruppenweise', 'Divine Aegis-Prozs mitnehmen', 'Pain Suppression für kritische Fenster'],
      talents: ['Cascade/Divine Star für Flächenheilung', 'Mindbender für Zusatzschaden und Mana', 'Angelic Feather für Mobilität'],
      gear: ['Vestments of the Sha-Touched Hero (T15)', 'Rune of Re-Origination'],
      consumables: ['Flask of Spring Blossoms', 'Black Pepper Ribs and Shrimp']
    },
    {
      id: 'mop-priest-shadow',
      name: 'Shadow',
      role: 'Raid DPS',
      summary: 'Shadow bleibt mit Mindbender und Vampiric-Touch-Mana-Support eine Top-DPS-Spec für den Raid.',
      statPriority: ['Meisterschaft', 'Haste', 'Kritische Trefferwertung', 'Intelligenz', 'Trefferchance-Cap'],
      rotation: ['Vampiric Touch aufrechterhalten', 'Shadow Word: Pain/Devouring Plague pflegen', 'Mind Flay als Hauptfiller', 'Mindbender auf Cooldown', 'Shadowfiend/Mindbender für Burst und Mana', 'Dispersion als Notfall'],
      talents: ['Mindbender', 'Twist of Fate für Execute-Phasen', 'Void Tendrils für Kontrolle'],
      gear: ['Vestments of the Sha-Touched Hero (T15)', 'Rune of Re-Origination'],
      consumables: ['Flask of the Warm Sun', 'Black Pepper Ribs and Shrimp']
    },
    {
      id: 'mop-priest-holy',
      name: 'Holy',
      role: 'Heiler',
      summary: 'Holy liefert starke reine Flächenheilung über Circle of Healing und Prayer of Healing für schadensintensive Phasen.',
      statPriority: ['Meisterschaft', 'Intelligenz', 'Haste', 'Kritische Trefferwertung', 'Spirit'],
      rotation: ['Circle of Healing bei Gruppenschaden', 'Renew flächig verteilen', 'Prayer of Healing gruppenweise', 'Guardian Spirit als Notfall-Cooldown', 'Chakra: Sanctuary für AoE-Phasen', 'Divine Hymn für große Schadensspitzen'],
      talents: ['Cascade/Divine Star für Flächenheilung', 'Body and Soul für Mobilität', 'Angelic Bulwark defensiv'],
      gear: ['Vestments of the Sha-Touched Hero (T15)', 'Rune of Re-Origination'],
      consumables: ['Flask of Spring Blossoms', 'Black Pepper Ribs and Shrimp']
    }
  ],
  rogue: [
    {
      id: 'mop-rogue-subtlety',
      name: 'Subtlety',
      role: 'Burst DPS',
      summary: 'Subtlety liefert mit Shadow Blades und Find Weakness starke Burst-Fenster und wird in vielen Kämpfen zur bevorzugten Wahl.',
      statPriority: ['Agility', 'Meisterschaft', 'Kritische Trefferwertung', 'Haste', 'Trefferchance/Expertise-Cap'],
      rotation: ['Slice and Dice aktiv halten', 'Backstab/Hemorrhage für Combo-Punkte', 'Eviscerate als Finisher', 'Shadow Blades auf Cooldown', 'Find-Weakness-Fenster für Finisher nutzen', 'Kick gegen Caster'],
      talents: ['Shadow Blades', 'Anticipation für effizientes Finisher-Timing', 'Shadowstep für Mobilität'],
      gear: ['Vestments of Foreseen Death (T15)', 'Rune of Re-Origination'],
      consumables: ['Flask of Winter’s Bite', 'Black Pepper Ribs and Shrimp']
    },
    {
      id: 'mop-rogue-combat',
      name: 'Combat',
      role: 'Sustained DPS',
      summary: 'Combat bleibt die verlässliche Sustained-DPS-Spec mit Revealing Strike und hoher Waffen-Skalierung.',
      statPriority: ['Agility', 'Meisterschaft', 'Kritische Trefferwertung', 'Haste', 'Trefferchance/Expertise-Cap'],
      rotation: ['Slice and Dice aktiv halten', 'Revealing Strike vor dem Finisher', 'Sinister Strike für Combo-Punkte', 'Eviscerate als Finisher', 'Killing Spree auf Cooldown', 'Kick gegen Caster'],
      talents: ['Anticipation', 'Combat Readiness defensiv', 'Shuriken Toss für Ranged-Optionen'],
      gear: ['Vestments of Foreseen Death (T15)', 'Rune of Re-Origination'],
      consumables: ['Flask of Winter’s Bite', 'Black Pepper Ribs and Shrimp']
    },
    {
      id: 'mop-rogue-assassination',
      name: 'Assassination',
      role: 'Burst DPS',
      summary: 'Assassination punktet mit Envenom-Burst und starkem Gift-Management, besonders effektiv bei Multi-DoT-Zielen.',
      statPriority: ['Agility', 'Meisterschaft', 'Kritische Trefferwertung', 'Haste', 'Trefferchance/Expertise-Cap'],
      rotation: ['Slice and Dice aktiv halten', 'Mutilate für Combo-Punkte', 'Envenom als Finisher', 'Rupture bei Multi-DoT-Bedarf', 'Vendetta auf Cooldown', 'Poisons synchronisieren'],
      talents: ['Venom Rush für Energie-Rückgewinn', 'Elaborate Planning', 'Vendetta'],
      gear: ['Vestments of Foreseen Death (T15)', 'Rune of Re-Origination'],
      consumables: ['Flask of Winter’s Bite', 'Black Pepper Ribs and Shrimp']
    }
  ],
  shaman: [
    {
      id: 'mop-shaman-elemental',
      name: 'Elemental',
      role: 'Caster DPS',
      summary: 'Elemental bleibt mit Lava-Surge-Prozs und Unleash Flame eine Top-Caster-DPS-Spec.',
      statPriority: ['Meisterschaft', 'Haste', 'Kritische Trefferwertung', 'Intelligenz', 'Trefferchance-Cap'],
      rotation: ['Flame Shock aufrechterhalten', 'Lava Burst bei Lava-Surge-Prozs sofort nutzen', 'Chain Lightning bei mehreren Zielen', 'Lightning Bolt/Earth Shock als Filler', 'Ascendance für Burst-Fenster', 'Bloodlust/Heroism mit Raid-Cooldowns synchronisieren'],
      talents: ['Ascendance', 'Elemental Blast für Sekundärstats', 'Primal Elementalist für stärkere Elementare'],
      gear: ['Vestments of the Thunder King Reforged (T15)', 'Rune of Re-Origination'],
      consumables: ['Flask of the Warm Sun', 'Black Pepper Ribs and Shrimp']
    },
    {
      id: 'mop-shaman-restoration',
      name: 'Restoration',
      role: 'Heiler',
      summary: 'Restoration liefert mit Riptide und Healing Rain starke Flächenheilung und bleibt Top-Tier-Raidheiler.',
      statPriority: ['Meisterschaft', 'Intelligenz', 'Haste', 'Kritische Trefferwertung', 'Spirit'],
      rotation: ['Riptide vor Heal-Rotation setzen', 'Healing Rain vor großen Gruppenschadens-Phasen', 'Chain Heal auf gruppierte Ziele', 'Unleash Life für Bonusheilung', 'Ascendance für AoE-Heilfenster', 'Mana Tide Totem auf Cooldown'],
      talents: ['Ascendance (Heiler-Nutzung)', 'Conductivity für Healing-Rain-Synergie', 'Ancestral Swiftness für Instant-Casts'],
      gear: ['Vestments of the Thunder King Reforged (T15)', 'Rune of Re-Origination'],
      consumables: ['Flask of Spring Blossoms', 'Black Pepper Ribs and Shrimp']
    },
    {
      id: 'mop-shaman-enhancement',
      name: 'Enhancement',
      role: 'Melee DPS',
      summary: 'Enhancement etabliert sich mit Echo of the Elements und Unleash Weapon als kompetitive Melee-DPS-Option.',
      statPriority: ['Agility', 'Meisterschaft', 'Kritische Trefferwertung', 'Haste', 'Trefferchance/Expertise-Cap'],
      rotation: ['Flame Shock/Earth Shock einplanen', 'Stormstrike auf Cooldown', 'Lava Lash einplanen', 'Unleash Weapon für Burst', 'Feral Spirit für Burst-Fenster', 'Auto-Attacks priorisieren'],
      talents: ['Ascendance (Melee-Nutzung)', 'Echo of the Elements', 'Primal Elementalist'],
      gear: ['Vestments of the Thunder King Reforged (T15)', 'Rune of Re-Origination'],
      consumables: ['Flask of Winter’s Bite', 'Black Pepper Ribs and Shrimp']
    }
  ],
  warlock: [
    {
      id: 'mop-warlock-affliction',
      name: 'Affliction',
      role: 'Raid DPS',
      summary: 'Affliction bleibt mit Malefic Grasp und Multi-DoT-Management die konstanteste Raid-DPS-Spec.',
      statPriority: ['Meisterschaft', 'Haste', 'Kritische Trefferwertung', 'Intelligenz', 'Trefferchance-Cap'],
      rotation: ['Agony/Corruption/Unstable Affliction aufrechterhalten', 'Malefic Grasp als Kanalisierungsfiller', 'Soul Swap bei Multi-DoT-Zielen', 'Life Tap zwischen Damage-Fenstern', 'Dark Soul: Misery mit Burst-Fenstern synchronisieren', 'Haunt-Vorläufer bei Bedarf'],
      talents: ['Soul Swap', 'Dark Soul: Misery', 'Grimoire of Sacrifice für zusätzlichen Schaden'],
      gear: ['Regalia of Horrific Corruption (T15)', 'Rune of Re-Origination'],
      consumables: ['Flask of the Warm Sun', 'Black Pepper Ribs and Shrimp']
    },
    {
      id: 'mop-warlock-demonology',
      name: 'Demonology',
      role: 'Burst DPS',
      summary: 'Demonology mit dauerhafter Metamorphosis-Form liefert starken Burst-Schaden, besonders effektiv in Add-Phasen.',
      statPriority: ['Meisterschaft', 'Haste', 'Kritische Trefferwertung', 'Intelligenz', 'Trefferchance-Cap'],
      rotation: ['Corruption/Immolate aufrechterhalten', 'Metamorphosis-Rotation nutzen', 'Touch of Chaos als Hauptfiller', 'Doom für DoT-Schaden', 'Dark Soul: Knowledge mit Burst-Fenstern synchronisieren', 'Hand of Gul’dan für Burst'],
      talents: ['Grimoire of Supremacy', 'Dark Soul: Knowledge', 'Archimonde’s Vengeance'],
      gear: ['Regalia of Horrific Corruption (T15)', 'Rune of Re-Origination'],
      consumables: ['Flask of the Warm Sun', 'Black Pepper Ribs and Shrimp']
    },
    {
      id: 'mop-warlock-destruction',
      name: 'Destruction',
      role: 'Nischen-DPS',
      summary: 'Destruction bleibt eher Nische, liefert aber mit Chaos Bolt und Havoc solide Cleave-Fenster.',
      statPriority: ['Meisterschaft', 'Haste', 'Kritische Trefferwertung', 'Intelligenz', 'Trefferchance-Cap'],
      rotation: ['Immolate/Conflagrate aufrechterhalten', 'Chaos Bolt als Burst-Zauber', 'Incinerate als Filler', 'Havoc für Cleave-Ziele', 'Dark Soul: Instability mit Burst-Fenstern', 'Life Tap zwischen Fenstern'],
      talents: ['Grimoire of Supremacy (Destruction-Variante)', 'Dark Soul: Instability', 'Archimonde’s Vengeance'],
      gear: ['Regalia of Horrific Corruption (T15)', 'Rune of Re-Origination'],
      consumables: ['Flask of the Warm Sun', 'Black Pepper Ribs and Shrimp']
    }
  ],
  warrior: [
    {
      id: 'mop-warrior-fury',
      name: 'Fury',
      role: 'Raid DPS',
      summary: 'Fury bleibt mit Single-Minded Fury oder Titan’s Grip eine der stärksten Raid-DPS-Specs.',
      statPriority: ['Meisterschaft', 'Kritische Trefferwertung', 'Haste', 'Stärke', 'Trefferchance/Expertise-Cap'],
      rotation: ['Battle Shout aktiv halten', 'Bloodthirst auf Cooldown', 'Whirlwind bei mehreren Zielen', 'Raging Blow bei Enrage-Prozs', 'Execute bei niedrigem Ziel-HP', 'Recklessness/Avatar mit Trinkets synchronisieren'],
      talents: ['Bloodbath', 'Avatar', 'Bladestorm für AoE-Cooldown'],
      gear: ['Battlegear of Immolation (T15)', 'Rune of Re-Origination'],
      consumables: ['Flask of Winter’s Bite', 'Black Pepper Ribs and Shrimp']
    },
    {
      id: 'mop-warrior-arms',
      name: 'Arms',
      role: 'Alternative Raid DPS',
      summary: 'Arms liefert mit Colossus Smash starken Burst-Schaden gegen einzelne Ziele und bleibt eine kompetitive Alternative zu Fury.',
      statPriority: ['Meisterschaft', 'Kritische Trefferwertung', 'Haste', 'Stärke', 'Trefferchance/Expertise-Cap'],
      rotation: ['Colossus Smash vor dem größten Burst-Fenster zünden', 'Mortal Strike auf Cooldown', 'Overpower nach Dodge', 'Slam als Filler', 'Execute bei niedrigem Ziel-HP', 'Deadly Calm für Rage-freie Fenster'],
      talents: ['Storm Bolt', 'Bladestorm', 'Avatar'],
      gear: ['Battlegear of Immolation (T15)', 'Rune of Re-Origination'],
      consumables: ['Flask of Winter’s Bite', 'Black Pepper Ribs and Shrimp']
    },
    {
      id: 'mop-warrior-protection',
      name: 'Protection',
      role: 'Tank',
      summary: 'Protection etabliert sich mit Shield Barrier als sehr robuster Tank mit hoher Selbstheilung und AoE-Threat.',
      statPriority: ['Meisterschaft', 'Ausdauer', 'Vermeidungswertung', 'Agility', 'Trefferchance/Expertise-Cap'],
      rotation: ['Devastate/Sunder Armor stapeln', 'Shield Slam auf Cooldown', 'Revenge bei Proc', 'Shield Barrier defensiv einplanen', 'Thunder Clap/Shockwave für AoE-Threat', 'Demoralizing Shout bei großen Pulls'],
      talents: ['Safeguard für Gruppen-Utility', 'Vigilance', 'Unwavering Sentinel'],
      gear: ['Battleplate of Immolation (Tank-Reforge)', 'Rune of Re-Origination'],
      consumables: ['Flask of Steadfast Resolve', 'Black Pepper Ribs and Shrimp']
    }
  ]
};

export const specGuides = {
  classic: classicSpecGuides,
  'the-burning-crusade': tbcSpecGuides,
  'wrath-of-the-lich-king': wrathSpecGuides,
  'mists-of-pandaria': mopSpecGuides
};
