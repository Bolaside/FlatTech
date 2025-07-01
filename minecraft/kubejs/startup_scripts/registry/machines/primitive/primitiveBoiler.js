GTCEuStartupEvents.registry("gtceu:machine", event => {
  event.create("primitive_boiler", "generator")
    .tiers(GTValues.ULV)
    .definition((tier, builder) => {
      builder
        .langValue(`${GTValues.VLVH[tier]} Boiler`)
        .recipeType(GTRecipeTypes.STEAM_BOILER_RECIPES)
        .workableTieredHullRenderer(`gtceu:block/generators/boiler/lava`)
    })
})
