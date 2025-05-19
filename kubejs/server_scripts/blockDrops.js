const usingShovel = action => action.matchMainHand(ItemFilter.SHOVEL)

LootJS.modifiers(event => {
  event.addBlockLootModifier("minecraft:grass_block")
    .not(usingShovel)
    .randomChance(0.2)
    .addLoot(Item.of("gtceu:rubber_sapling"))
  
  event.addBlockLootModifier("minecraft:dirt")
    .not(usingShovel)
    .randomChance(0.2)
    .addLoot(Item.of("minecraft:cobblestone"))
})
