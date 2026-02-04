ServerEvents.recipes(event => {
    const recipeBuilder = RecipeBuilder(event);

    event.recipes.gtceu.chemical_reactor("stone_ore_mass")
        .itemInputs([
            Item.of("gtceu:stone_dust", 4),
            Item.of("gtceu:calcium_dust", 1)
        ])
        .inputFluids(Fluid.of("minecraft:water", 1000))
        .outputFluids(Fluid.of("flatcore:stone_ore_mass", 1000))
        .EUt(GTValues.VA[GTValues.LV])
        .duration(20 * 30);

    event.recipes.gtceu.compressor("diamond")
        .itemInputs(Item.of("gtceu:charcoal_block", 4))
        .itemOutputs(Item.of("minecraft:diamond"))
        .EUt(GTValues.VH[GTValues.LV])
        .duration(20 * 60 * 2.5);

    event.recipes.gtceu.mixer("azuron")
        .itemInputs([
            Item.of("gtceu:lead_dust", 2),
            Item.of("gtceu:copper_dust", 2),
            Item.of("gtceu:silicon_dust", 2),
            Item.of("gtceu:cobalt_dust")
        ])
        .inputFluids(Fluid.of("gtceu:oxygen", 1000 * 9))
        .itemOutputs(Item.of("flatcore:azuron_dust", 2 + 2 + 1 + 2))
        .EUt(GTValues.VA[GTValues.LV])
        .duration(20 * 50);

    event.recipes.gtceu.electrolyzer("decomposition_electrolyzing_clay")
        .itemInputs(Item.of("gtceu:clay_dust", 13))
        .itemOutputs([
            Item.of("gtceu:sodium_dust", 3),
            Item.of("gtceu:silicon_dust", 2),
            Item.of("gtceu:lithium_dust"),
            Item.of("gtceu:aluminium_dust", 2)
        ])
        .outputFluids(Fluid.of("minecraft:water", 6000))
        .EUt(60 / 4)
        .duration(20 * 9.1);

    recipeBuilder.setRecipeDuration(/gtceu:compressor\/plant_ball_from_.*/, 20 * 2.5);

    // halve the duration for "plant ball -> bio chaff"
    // and "bio chaff -> dirt" recipes
    recipeBuilder.multiplyRecipeDuration(/gtceu:macerator\/(dirt_from_)?bio_chaff/, 0.5);

    event.recipes.gtceu.macerator("macerate_fish")
        .itemInputs(Ingredient.of("#minecraft:fishes"))
        .itemOutputs(Item.of("gtceu:meat_dust"))
        .chancedOutput(Item.of("gtceu:meat_dust"), Chance.toGT(0.5), 0)
        .chancedOutput(Item.of("minecraft:bone"), Chance.toGT(0.1), 0)
        .EUt(2)
        .duration(20 * 5.1);

    event.recipes.gtceu.mixer("monel_400")
        .itemInputs([
            Item.of("gtceu:nickel_dust", 6),
            Item.of("gtceu:copper_dust", 3),
            Item.of("gtceu:iron_dust")
        ])
        .itemOutputs(Item.of("flatcore:monel_400_dust", 6 + 3 + 1))
        .EUt(GTValues.VA[GTValues.LV])
        .duration(20 * 30);
});
