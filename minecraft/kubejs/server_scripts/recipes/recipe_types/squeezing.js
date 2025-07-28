ServerEvents.recipes(event => {
  const MOLD_CONSUME_CHANCE = 0.25 * Chance.GT_CHANCE_MULTI

  event.recipes.gtceu.squeezing("squeeze_rubber_leaves")
    .itemInputs(Item.of("gtceu:rubber_leaves", 4))
    .chancedInput("kubejs:sieve_squeezer_mold", MOLD_CONSUME_CHANCE, 0)
    .chancedOutput(Item.of("gtceu:wood_dust"), 3000, 0)
    .outputFluids(Fluid.of("minecraft:water", 250))
    .EUt(GTValues.VH[GTValues.ULV])
    .duration(20 * 3)

  event.recipes.gtceu.squeezing("squeeze_wood_plate")
    .itemInputs(Ingredient.of("#minecraft:planks"))
    .chancedInput("kubejs:plank_squeezer_mold", MOLD_CONSUME_CHANCE, 0)
    .itemOutputs(Item.of("gtceu:wood_plate"))
    .EUt(GTValues.VH[GTValues.ULV])
    .duration(20 * 8)

  event.recipes.gtceu.squeezing("squeeze_treated_wood_plate")
    .itemInputs(Item.of("gtceu:treated_wood_planks"))
    .chancedInput("kubejs:plank_squeezer_mold", MOLD_CONSUME_CHANCE, 0)
    .itemOutputs(Item.of("gtceu:treated_wood_plate"))
    .EUt(GTValues.VH[GTValues.ULV])
    .duration(20 * 8)
})
