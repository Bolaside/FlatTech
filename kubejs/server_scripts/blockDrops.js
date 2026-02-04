LootJS.modifiers(event => {
    event.addBlockLootModifier("minecraft:grass_block")
        .not(action => action.matchMainHand(Ingredient.of("#forge:tools")))
        .randomChance(0.2)
        .removeLoot(Ingredient.all)
        .addLoot(Item.of("gtceu:rubber_sapling"))
        .randomChance(0.5)
        .addLoot(Item.of("minecraft:dirt"));

    // thanks gtceu
    event.addBlockLootModifier("gtceu:rubber_leaves")
        .matchMainHand(Ingredient.of("#forge:shears"))
        .removeLoot(Ingredient.all)
        .addLoot(Item.of("gtceu:rubber_leaves"));
});
