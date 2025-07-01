GTCEuStartupEvents.registry("gtceu:recipe_type", event => {
  event.create("condensing")
    .category("condensing")
    .setEUIO("in")
    .setMaxIOSize(0, 1, 0, 1)
    .setProgressBar(GuiTextures.PROGRESS_BAR_COMPRESS, FillDirection.LEFT_TO_RIGHT)
    .setSound(GTSoundEntries.CHEMICAL)
})

GTCEuStartupEvents.registry("gtceu:machine", event => {
  event.create("condenser", "simple")
    .tiers(GTValues.ULV)
    .definition((tier, builder) => {
      builder
        .langValue(`${GTValues.VLVH[tier]} Condenser`)
        .recipeType("condensing")
        // juhmop please save us 🙏🙏🙏🙏🙏🙏🙏🙏 pleas
        .workableTieredHullRenderer(`gtceu:block/machines/compressor`)
    })
})
