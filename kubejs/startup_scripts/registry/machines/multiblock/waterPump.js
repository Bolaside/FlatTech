GTCEuStartupEvents.registry("gtceu:recipe_type", event => {
    event.create("water_pump")
        .category(GTRecipeTypes.MULTIBLOCK)
        .setEUIO("in")
        .setMaxIOSize(1, 0, 0, 1)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        // .setSound(GTSoundEntries.CHEMICAL)
        .setMaxTooltips(1);
});

GTCEuStartupEvents.registry("gtceu:machine", event => {
    event.create("water_pump", "multiblock")
        .recipeTypes("water_pump")
        .rotationState(RotationState.NON_Y_AXIS)
        .appearanceBlock(GTBlocks.STEEL_HULL)
        .pattern(definition => FactoryBlockPattern.start()
            .aisle("SooooS", "F  F  ", "SGGS  ", "      ")
            .aisle("ooPPoo", "SGGS p", "sppppp", "SGGS  ")
            .aisle("!ooooS", "F  F  ", "SGGS  ", "      ")
            .where("!", Predicates.controller(Predicates.blocks(definition.get())))
            .where("o", Predicates.blocks(GTBlocks.CASING_STEEL_SOLID.get()).setMinGlobalLimited(8)
                .or(Predicates.ability(PartAbility.EXPORT_FLUIDS).setMinGlobalLimited(1))
                .or(Predicates.ability(PartAbility.IMPORT_ITEMS)))
            .where("S", Predicates.blocks(GTBlocks.STEEL_HULL.get()))
            .where("P", Predicates.blocks("quark:iron_plate"))
            .where("s", Predicates.blocks(GTBlocks.CASING_STEEL_SOLID.get()))
            .where("p", Predicates.blocks(GTBlocks.CASING_STEEL_PIPE.get()))
            .where("F", Predicates.blocks("gtceu:steel_frame"))
            .where("G", Predicates.blocks(GTBlocks.CASING_GRATE.get()))
            .where(" ", Predicates.any())
            .build())
        .workableCasingModel(
            "gtceu:block/casings/solid/machine_casing_solid_steel",
            "gtceu:block/multiblock/primitive_pump"
        );
});
