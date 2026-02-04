GTCEuStartupEvents.registry("gtceu:machine", event => {
    /**
     * @param {string} id
     * @param {string} name
     * @param {GTRecipeTypes_} recipeType
     */
    const addULVMachine = (id, recipeType) => {
        const name = id.split("_")
            .map(word => `${word.charAt(0).toUpperCase()}${word.slice(1)}`)
            .join(" ");

        event.create(id, "simple")
            .tiers(GTValues.ULV)
            .definition((tier, builder) => {
                builder
                    .langValue(`${GTValues.VLVH[tier]} ${name}`)
                    .recipeType(recipeType)
                    .workableTieredHullModel(`gtceu:block/machines/${id}`);
            });
    };

    addULVMachine("mixer", GTRecipeTypes.MIXER_RECIPES);
    addULVMachine("assembler", GTRecipeTypes.ASSEMBLER_RECIPES);
    addULVMachine("alloy_smelter", GTRecipeTypes.ALLOY_SMELTER_RECIPES);
    addULVMachine("forge_hammer", GTRecipeTypes.FORGE_HAMMER_RECIPES);
    addULVMachine("wiremill", GTRecipeTypes.WIREMILL_RECIPES);
    addULVMachine("bender", GTRecipeTypes.BENDER_RECIPES);
    addULVMachine("extractor", GTRecipeTypes.EXTRACTOR_RECIPES);
    addULVMachine("electrolyzer", GTRecipeTypes.ELECTROLYZER_RECIPES);
    addULVMachine("chemical_bath", GTRecipeTypes.CHEMICAL_BATH_RECIPES);
});
