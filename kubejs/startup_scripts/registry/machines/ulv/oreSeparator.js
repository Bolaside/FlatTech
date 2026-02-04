GTCEuStartupEvents.registry("gtceu:recipe_type", event => {
    event.create("ore_separator")
        .category(GTRecipeTypes.ELECTRIC) // not really lol
        .setEUIO("in")
        .setMaxIOSize(1, 6, 0, 0)
        .setProgressBar(GuiTextures.PROGRESS_BAR_EXTRACT, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.CENTRIFUGE)
        .setMaxTooltips(1);
});

GTCEuStartupEvents.registry("gtceu:machine", event => {
    event.create("ore_separator", "simple")
        .tiers(GTValues.ULV)
        .definition((_, builder) => {
            builder
                .langValue("Ore Separator")
                .recipeType("ore_separator")
                .workableCasingModel("minecraft:block/furnace_top", "gtceu:block/machines/centrifuge");
        });
});
