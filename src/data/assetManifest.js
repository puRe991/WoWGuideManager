// Class and profession icons are hotlinked from Wowhead's public icon CDN (wow.zamimg.com),
// the same static hosting fan sites and addons have used for years to embed Blizzard icon
// textures without redistributing the files themselves. Every URL below was verified to
// resolve to the correct icon (checked against Wowhead's own profession/class pages) before
// being added here. Dungeon and expansion artwork still needs licensed local files (see
// docs/assets.md) because no verified per-dungeon icon/screenshot source was confirmed.
export const assetManifest = {
  expansions: {
    classic: {
      hero: './assets/wow/expansions/classic-hero.jpg',
      map: './assets/wow/maps/classic-azeroth.jpg'
    },
    'the-burning-crusade': {
      hero: './assets/wow/expansions/the-burning-crusade-hero.jpg',
      map: './assets/wow/maps/outland.jpg'
    },
    'wrath-of-the-lich-king': {
      hero: './assets/wow/expansions/wrath-of-the-lich-king-hero.jpg',
      map: './assets/wow/maps/northrend.jpg'
    },
    future: {
      hero: './assets/wow/expansions/future-content-pack-hero.jpg',
      map: './assets/wow/maps/future-content-pack.jpg'
    }
  },
  professions: {
    alchemy: 'https://wow.zamimg.com/images/wow/icons/large/trade_alchemy.jpg',
    blacksmithing: 'https://wow.zamimg.com/images/wow/icons/large/trade_blacksmithing.jpg',
    leatherworking: 'https://wow.zamimg.com/images/wow/icons/large/trade_leatherworking.jpg',
    tailoring: 'https://wow.zamimg.com/images/wow/icons/large/trade_tailoring.jpg',
    engineering: 'https://wow.zamimg.com/images/wow/icons/large/trade_engineering.jpg',
    enchanting: 'https://wow.zamimg.com/images/wow/icons/large/trade_engraving.jpg',
    herbalism: 'https://wow.zamimg.com/images/wow/icons/large/spell_nature_naturetouchgrow.jpg',
    mining: 'https://wow.zamimg.com/images/wow/icons/large/trade_mining.jpg',
    fishing: 'https://wow.zamimg.com/images/wow/icons/large/trade_fishing.jpg',
    cooking: 'https://wow.zamimg.com/images/wow/icons/large/inv_misc_food_15.jpg',
    'first-aid': 'https://wow.zamimg.com/images/wow/icons/large/inv_misc_bandage_08.jpg',
    skinning: 'https://wow.zamimg.com/images/wow/icons/large/inv_misc_pelt_wolf_01.jpg',
    jewelcrafting: 'https://wow.zamimg.com/images/wow/icons/large/inv_misc_gem_01.jpg'
  },
  classes: {
    druid: 'https://wow.zamimg.com/images/wow/icons/large/classicon_druid.jpg',
    hunter: 'https://wow.zamimg.com/images/wow/icons/large/classicon_hunter.jpg',
    mage: 'https://wow.zamimg.com/images/wow/icons/large/classicon_mage.jpg',
    paladin: 'https://wow.zamimg.com/images/wow/icons/large/classicon_paladin.jpg',
    priest: 'https://wow.zamimg.com/images/wow/icons/large/classicon_priest.jpg',
    rogue: 'https://wow.zamimg.com/images/wow/icons/large/classicon_rogue.jpg',
    shaman: 'https://wow.zamimg.com/images/wow/icons/large/classicon_shaman.jpg',
    warlock: 'https://wow.zamimg.com/images/wow/icons/large/classicon_warlock.jpg',
    warrior: 'https://wow.zamimg.com/images/wow/icons/large/classicon_warrior.jpg'
  },
  dungeons: {
    'ragefire-chasm': './assets/wow/icons/dungeons/ragefire-chasm.png',
    deadmines: './assets/wow/icons/dungeons/deadmines.png',
    'wailing-caverns': './assets/wow/icons/dungeons/wailing-caverns.png',
    'shadowfang-keep': './assets/wow/icons/dungeons/shadowfang-keep.png',
    'blackfathom-deeps': './assets/wow/icons/dungeons/blackfathom-deeps.png',
    stockade: './assets/wow/icons/dungeons/stockade.png',
    gnomeregan: './assets/wow/icons/dungeons/gnomeregan.png',
    'scarlet-monastery': './assets/wow/icons/dungeons/scarlet-monastery.png',
    'razorfen-kraul': './assets/wow/icons/dungeons/razorfen-kraul.png',
    'razorfen-downs': './assets/wow/icons/dungeons/razorfen-downs.png',
    uldaman: './assets/wow/icons/dungeons/uldaman.png',
    zulfarrak: './assets/wow/icons/dungeons/zulfarrak.png',
    maraudon: './assets/wow/icons/dungeons/maraudon.png',
    'sunken-temple': './assets/wow/icons/dungeons/sunken-temple.png',
    'blackrock-depths': './assets/wow/icons/dungeons/blackrock-depths.png',
    'dire-maul': './assets/wow/icons/dungeons/dire-maul.png',
    stratholme: './assets/wow/icons/dungeons/stratholme.png',
    scholomance: './assets/wow/icons/dungeons/scholomance.png',
    'lower-blackrock-spire': './assets/wow/icons/dungeons/lower-blackrock-spire.png',
    'upper-blackrock-spire': './assets/wow/icons/dungeons/upper-blackrock-spire.png',
    'hellfire-ramparts': './assets/wow/icons/dungeons/hellfire-ramparts.png',
    'the-blood-furnace': './assets/wow/icons/dungeons/the-blood-furnace.png',
    'the-shattered-halls': './assets/wow/icons/dungeons/the-shattered-halls.png',
    'the-slave-pens': './assets/wow/icons/dungeons/the-slave-pens.png',
    'the-underbog': './assets/wow/icons/dungeons/the-underbog.png',
    'the-steamvault': './assets/wow/icons/dungeons/the-steamvault.png',
    'mana-tombs': './assets/wow/icons/dungeons/mana-tombs.png',
    'auchenai-crypts': './assets/wow/icons/dungeons/auchenai-crypts.png',
    'sethekk-halls': './assets/wow/icons/dungeons/sethekk-halls.png',
    'shadow-labyrinth': './assets/wow/icons/dungeons/shadow-labyrinth.png',
    'the-mechanar': './assets/wow/icons/dungeons/the-mechanar.png',
    'the-botanica': './assets/wow/icons/dungeons/the-botanica.png',
    'the-arcatraz': './assets/wow/icons/dungeons/the-arcatraz.png',
    'old-hillsbrad-foothills': './assets/wow/icons/dungeons/old-hillsbrad-foothills.png',
    'the-black-morass': './assets/wow/icons/dungeons/the-black-morass.png',
    'magisters-terrace': './assets/wow/icons/dungeons/magisters-terrace.png'
  },
  dungeonMaps: {
    'ragefire-chasm': './assets/wow/maps/ragefire-chasm.jpg',
    deadmines: './assets/wow/maps/deadmines.jpg',
    'wailing-caverns': './assets/wow/maps/wailing-caverns.jpg',
    'shadowfang-keep': './assets/wow/maps/shadowfang-keep.jpg',
    'blackfathom-deeps': './assets/wow/maps/blackfathom-deeps.jpg',
    stockade: './assets/wow/maps/stockade.jpg',
    gnomeregan: './assets/wow/maps/gnomeregan.jpg',
    'scarlet-monastery': './assets/wow/maps/scarlet-monastery.jpg',
    'razorfen-kraul': './assets/wow/maps/razorfen-kraul.jpg',
    'razorfen-downs': './assets/wow/maps/razorfen-downs.jpg',
    uldaman: './assets/wow/maps/uldaman.jpg',
    zulfarrak: './assets/wow/maps/zulfarrak.jpg',
    maraudon: './assets/wow/maps/maraudon.jpg',
    'sunken-temple': './assets/wow/maps/sunken-temple.jpg',
    'blackrock-depths': './assets/wow/maps/blackrock-depths.jpg',
    'dire-maul': './assets/wow/maps/dire-maul.jpg',
    stratholme: './assets/wow/maps/stratholme.jpg',
    scholomance: './assets/wow/maps/scholomance.jpg',
    'lower-blackrock-spire': './assets/wow/maps/lower-blackrock-spire.jpg',
    'upper-blackrock-spire': './assets/wow/maps/upper-blackrock-spire.jpg',
    'hellfire-ramparts': './assets/wow/maps/hellfire-ramparts.jpg',
    'the-blood-furnace': './assets/wow/maps/the-blood-furnace.jpg',
    'the-shattered-halls': './assets/wow/maps/the-shattered-halls.jpg',
    'the-slave-pens': './assets/wow/maps/the-slave-pens.jpg',
    'the-underbog': './assets/wow/maps/the-underbog.jpg',
    'the-steamvault': './assets/wow/maps/the-steamvault.jpg',
    'mana-tombs': './assets/wow/maps/mana-tombs.jpg',
    'auchenai-crypts': './assets/wow/maps/auchenai-crypts.jpg',
    'sethekk-halls': './assets/wow/maps/sethekk-halls.jpg',
    'shadow-labyrinth': './assets/wow/maps/shadow-labyrinth.jpg',
    'the-mechanar': './assets/wow/maps/the-mechanar.jpg',
    'the-botanica': './assets/wow/maps/the-botanica.jpg',
    'the-arcatraz': './assets/wow/maps/the-arcatraz.jpg',
    'old-hillsbrad-foothills': './assets/wow/maps/old-hillsbrad-foothills.jpg',
    'the-black-morass': './assets/wow/maps/the-black-morass.jpg',
    'magisters-terrace': './assets/wow/maps/magisters-terrace.jpg'
  }
};
