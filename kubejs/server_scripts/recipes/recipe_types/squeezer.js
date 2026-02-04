ServerEvents.recipes(event => {
    const MOLDS = {
        Sieve: Item.of("kubejs:sieve_squeezer_mold"),
        Plank: Item.of("kubejs:plank_squeezer_mold")
    };

    /**
     * @param {MOLDS[keyof MOLDS]} mold
     * @param {string} outputName
     */
    const getSqueezerRecipe = (mold, outputName) => {
        return event.recipes.gtceu.squeezer(`squeezer_${outputName}`)
            .chancedInput(mold, Chance.toGT(0.05), 0)
            .EUt(GTValues.VH[GTValues.ULV])
            .duration(20 * 3);
    };

    getSqueezerRecipe(MOLDS.Sieve, "water")
        .itemInputs(Item.of("gtceu:rubber_leaves", 4))
        .chancedOutput(Item.of("gtceu:wood_dust"), 3000, 0)
        .outputFluids(Fluid.of("minecraft:water", 250));

    getSqueezerRecipe(MOLDS.Plank, "wood_plate")
        .itemInputs(Ingredient.of("#minecraft:planks"))
        .itemOutputs(Item.of("gtceu:wood_plate"));

    getSqueezerRecipe(MOLDS.Plank, "treated_wood_plate")
        .itemInputs(Item.of("gtceu:treated_wood_planks"))
        .itemOutputs(Item.of("gtceu:treated_wood_plate"));
});
