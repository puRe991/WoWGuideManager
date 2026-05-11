export const specGuides = {
  druid: [
    {
      id: 'druid-feral-tank',
      name: 'Feral Tank / Bär',
      role: 'Tank',
      summary: 'Feral Tank setzt auf Rüstung, Ausdauer, hohe Bedrohung über Maul/Swipe und situative Cooldowns. Ideal für Dungeons und als flexibler Offtank.',
      statPriority: ['Rüstung', 'Ausdauer', 'Beweglichkeit', 'Trefferchance', 'Stärke', 'Verteidigung situativ'],
      rotation: ['Mark of the Wild aktiv halten', 'Pull mit Faerie Fire', 'Bärform vor Kontakt', 'Maul als Rage-Dump queueen', 'Demoralizing Roar bei großen Pulls', 'Swipe bei Mehrziel-Pulls', 'Frenzied Regeneration/Barkskin defensiv planen'],
      talents: ['Feral Kernpunkte für Thick Hide, Feral Charge und Heart of the Wild', 'Restoration-Punkte für Furor', 'Omen of Clarity wenn Hybrid-Farm wichtig ist'],
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
      rotation: ['Cheap Shot/Kidney Shot Kette', 'Hemorrhage falls geskillt', 'Vanish für Reset', 'Blind/Sap CC-Kette', 'Preparation für zweiten Cooldown-Zyklus'],
      talents: ['Camouflage', 'Initiative', 'Preparation', 'Hemorrhage', 'Improved Sap'],
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
      talents: ['Ancestral Knowledge', 'Thundering Strikes', 'Flurry', 'Stormstrike'],
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
      rotation: ['Bloodthirst priorisieren', 'Whirlwind auf Cooldown', 'Heroic Strike bei Rage-Überschuss', 'Execute Phase aggressiv', 'Death Wish/Recklessness mit Burn', 'Threat beobachten'],
      talents: ['Cruelty', 'Enrage', 'Death Wish', 'Flurry', 'Bloodthirst'],
      gear: ['Lionheart Helm', 'Savage Gladiator Chain', 'Dal’Rend/Pre-Raid Weapons', 'Hand of Justice', 'Blackhand’s Breadth'],
      consumables: ['Mongoose', 'Juju Power', 'Winterfall Firewater', 'Elemental Sharpening Stone', 'Mighty Rage Potion']
    },
    {
      id: 'warrior-protection',
      name: 'Protection',
      role: 'Main Tank',
      summary: 'Protection fokussiert kontrollierte Threat, Shield Block Uptime und defensive Cooldowns. Gearsets für Threat und Mitigation sind Pflicht.',
      statPriority: ['Verteidigung bis Zielwert', 'Ausdauer', 'Rüstung', 'Trefferchance/Expertise gibt es nicht in Classic', 'Block/Parry/Dodge', 'Stärke für Threat'],
      rotation: ['Defensive Stance', 'Shield Block gegen Crushing', 'Sunder Armor/Shield Slam', 'Revenge bei Proc', 'Heroic Strike bei Rage-Überschuss', 'Taunt/Mocking Blow Notfall'],
      talents: ['Shield Slam', 'Defiance', 'Last Stand', 'Improved Shield Block', 'Tactical Mastery optional'],
      gear: ['Quel’Serrar', 'Draconian Deflector', 'Force of Will', 'Might/Wrath Set', 'Threat Trinkets situativ'],
      consumables: ['Stoneshield Potion', 'Flask of the Titans', 'Elixir of Superior Defense', 'Mighty Rage Potion']
    }
  ]
};
