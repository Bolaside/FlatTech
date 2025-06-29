LootJS.modifiers(event => {
  const usingTool = action => action.matchMainHand(Ingredient.of("#forge:tools"))

  event.addBlockLootModifier("minecraft:grass_block")
    .not(usingTool)
    .randomChance(0.2)
    .removeLoot(Ingredient.all)
    .addLoot(Item.of("gtceu:rubber_sapling"))
    .randomChance(0.5)
    .addLoot(Item.of("minecraft:dirt"))
    
  event.addBlockLootModifier("minecraft:dirt")
    .not(usingTool)
    .randomChance(0.8)
    .removeLoot(Ingredient.all)
    .addLoot(Item.of("kubejs:cobble"))
    .randomChance(0.5)
    .addLoot(Item.of("minecraft:dirt"))

  // thanks gtceu
  event.addBlockLootModifier("gtceu:rubber_leaves")
    .matchMainHand(Ingredient.of("#forge:shears"))
    .removeLoot(Ingredient.all)
    .addLoot(Item.of("gtceu:rubber_leaves"))
})
