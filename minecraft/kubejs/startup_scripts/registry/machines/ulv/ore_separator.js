GTCEuStartupEvents.registry("gtceu:recipe_type", event => {
  event.create("ore_separating")
    .category("ore_separating")
    .setEUIO("in")
    .setMaxIOSize(1, 4, 0, 0)
    .setProgressBar(GuiTextures.PROGRESS_BAR_EXTRACT, FillDirection.LEFT_TO_RIGHT)
    .setSound(GTSoundEntries.CENTRIFUGE)
    .setMaxTooltips(1)
})

GTCEuStartupEvents.registry("gtceu:machine", event => {
  event.create("ore_separator", "simple")
    .tiers(GTValues.ULV)
    .definition((_, builder) => {
      builder
        .langValue("Ore Separator")
        .recipeType("ore_separating")
        .workableCasingModel("minecraft:block/furnace_top", "gtceu:block/machines/centrifuge")
    })
})
