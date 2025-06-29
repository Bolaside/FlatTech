GTCEuStartupEvents.registry("gtceu:machine", event => {
  // just adds the ULV tier to the mixer
  event.create("mixer", "simple")
    .tiers(GTValues.ULV)
    .definition((tier, builder) => {
      builder
        .langValue(`${GTValues.VLVH[tier]} Mixer`)
        .recipeType(GTRecipeTypes.MIXER_RECIPES)
        .workableTieredHullRenderer(`gtceu:block/machines/mixer`)
    })
})
