ServerEvents.recipes(event => {
  event.recipes.gtceu.ore_separating("ferrous_mineral")
    .itemInputs(Item.of("kubejs:ferrous_mineral"))
    .itemOutputsRanged(Item.of("gtceu:raw_magnetite"), 1, 4)
    .itemOutputsRanged(Item.of("minecraft:raw_copper"), 0, 2)
    .itemOutputs(Item.of("gtceu:stone_dust"))
    .duration(20 * 5)
})
