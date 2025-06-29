GTCEuStartupEvents.registry("gtceu:recipe_type", event => {
  event.create("squeezing")
    .category("squeezing")
    .setEUIO("in")
    .setMaxIOSize(2, 1, 0, 1)
    .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
    .setSound(GTSoundEntries.CENTRIFUGE)
})

GTCEuStartupEvents.registry("gtceu:machine", event => {
  event.create("squeezer", "simple")
    .tiers(GTValues.ULV)
    .definition((tier, builder) => {
      builder
        .langValue(`${GTValues.VLVH[tier]} Squeezer`)
        .recipeType("squeezing")
        .workableTieredHullRenderer(`gtceu:block/machines/squeezer`)
    })
})
