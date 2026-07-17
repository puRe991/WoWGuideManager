/**
 * Shared JSDoc typedefs for the content data layer (src/data/*.js).
 * Consumed via `tsc --checkJs` (see tsconfig.json / `npm run typecheck`) to catch
 * structural drift between guide entries without adopting TypeScript source files.
 */

/**
 * @typedef {'classic'|'the-burning-crusade'|'wrath-of-the-lich-king'|'mists-of-pandaria'|'future'} ExpansionKey
 */

/**
 * @typedef {Object} Expansion
 * @property {ExpansionKey} key
 * @property {string} name
 * @property {string} status
 * @property {string} launchFocus
 * @property {string[]} modules
 */

/**
 * @typedef {Object} ZoneRouteEntry
 * @property {string} id
 * @property {string} name
 * @property {string} levelRange
 * @property {string} note
 */

/**
 * @typedef {Object} FactionEntry
 * @property {string} glyph
 * @property {string} name
 * @property {string} region
 * @property {string} reward
 * @property {string} bar
 * @property {string} standing
 */

/**
 * @typedef {Object} MedalEntry
 * @property {string} icon
 * @property {string} name
 * @property {string} desc
 * @property {string} color
 */

/**
 * @typedef {Object} Guide
 * @property {string} id
 * @property {string} title
 * @property {string} category
 * @property {ExpansionKey} expansion
 * @property {string} audience
 * @property {number} minutes
 * @property {string} summary
 * @property {string[]} checklist
 * @property {boolean} premium
 * @property {string[]} tags
 * @property {ZoneRouteEntry[]} [zones]
 * @property {FactionEntry[]} [factions]
 * @property {MedalEntry[]} [medals]
 * @property {string[]} [challengeRewards]
 */

/**
 * @typedef {Object} ClassGuide
 * @property {string} id
 * @property {string} name
 * @property {string} color
 * @property {string[]} roles
 * @property {string} levelingSpec
 * @property {string} [metaSpec]
 * @property {string} difficulty
 * @property {string} summary
 * @property {string[]} statPriority
 * @property {string[]} rotation
 * @property {string[]} talents
 * @property {string[]} professions
 * @property {string[]} powerTips
 * @property {string} [talentPlannerUrl]
 */

/**
 * @typedef {Object} ClassRotations
 * @property {string[]} leveling
 * @property {string[]} dungeon
 * @property {string[]} raid
 */

/**
 * @typedef {Object} ClassBuildGuide
 * @property {ClassRotations} rotations
 * @property {string[]} bestInSlot
 */

/**
 * @typedef {Object} SpecGuide
 * @property {string} id
 * @property {string} name
 * @property {string} role
 * @property {string} summary
 * @property {string[]} statPriority
 * @property {string[]} rotation
 * @property {string[]} talents
 * @property {string[]} gear
 * @property {string[]} consumables
 */

/**
 * @typedef {Object} DungeonBossCard
 * @property {string} name
 * @property {string} role
 * @property {string} note
 */

/**
 * @typedef {Object} DungeonGuide
 * @property {string} id
 * @property {string} name
 * @property {string} faction
 * @property {string} levelRange
 * @property {string} zone
 * @property {string} wing
 * @property {string} theme
 * @property {string} summary
 * @property {string[]} route
 * @property {string[]|DungeonBossCard[]} bosses
 * @property {string[]} loot
 * @property {string[]} tips
 * @property {string[]} composition
 * @property {string[]} quests
 * @property {string} time
 * @property {string[]} [subDungeons]
 */

/**
 * @typedef {Object} RaidBoss
 * @property {string} name
 * @property {string[]} mechanics
 * @property {string[]} [loot]
 */

/**
 * @typedef {Object} RaidGuide
 * @property {string} id
 * @property {string} name
 * @property {string} size
 * @property {string} tier
 * @property {string} levelReq
 * @property {string} zone
 * @property {string} wing
 * @property {string} theme
 * @property {string} summary
 * @property {string[]} [attunement]
 * @property {string[]} route
 * @property {string[]} loot
 * @property {string[]} tips
 * @property {string[]} composition
 * @property {RaidBoss[]} bosses
 * @property {string[]} [subDungeons]
 */

/**
 * @typedef {Object} ProfessionTrainer
 * @property {string} rank
 * @property {string} range
 * @property {string} requirement
 * @property {string[]} alliance
 * @property {string[]} horde
 */

/**
 * @typedef {Object} ProfessionStep
 * @property {string} range
 * @property {string} craft
 * @property {string} materials
 * @property {string} [note]
 */

/**
 * @typedef {Object} ProfessionGuide
 * @property {string} id
 * @property {string} name
 * @property {string} icon
 * @property {ExpansionKey} expansion
 * @property {string} category
 * @property {string} skillRange
 * @property {string} audience
 * @property {number} minutes
 * @property {string} theme
 * @property {string} summary
 * @property {string[]} intro
 * @property {ProfessionTrainer[]} trainers
 * @property {string[]} shoppingList
 * @property {string[]} recipes
 * @property {string[]} tips
 * @property {ProfessionStep[]} steps
 */

/**
 * @typedef {Object} FarmingItem
 * @property {string} id
 * @property {string} name
 * @property {string} icon
 * @property {string} skill
 * @property {string} levelRange
 * @property {string[]} zones
 * @property {string} respawn
 * @property {string} summary
 * @property {string[]} tips
 */

/**
 * @typedef {Object} FarmingGroup
 * @property {string} id
 * @property {string} title
 * @property {string} tierLabel
 * @property {string} profession
 * @property {string} theme
 * @property {FarmingItem[]} items
 */

/**
 * @typedef {Object} ReputationStanding
 * @property {string} rank
 * @property {string[]} rewards
 */

/**
 * @typedef {Object} ReputationGuide
 * @property {string} id
 * @property {string} name
 * @property {string} side
 * @property {string} type
 * @property {string} zone
 * @property {string} theme
 * @property {string} audience
 * @property {number} minutes
 * @property {string} summary
 * @property {string} startRequirement
 * @property {string} grindLength
 * @property {string} estimatedTime
 * @property {string[]} howTo
 * @property {string[]} grindTargets
 * @property {string[]} keyQuests
 * @property {ReputationStanding[]} standings
 * @property {string[]} tips
 */

/**
 * @typedef {Object} SubscriptionTier
 * @property {string} id
 * @property {string} name
 * @property {string} price
 * @property {string} description
 * @property {string} cta
 * @property {boolean} [highlighted]
 * @property {string[]} features
 */

/**
 * @typedef {Object} AppState
 * @property {string} search
 * @property {string} category
 * @property {'all'|ExpansionKey} expansion
 * @property {boolean} showPremiumOnly
 * @property {ExpansionKey} selectedExpansion
 */

export {};
