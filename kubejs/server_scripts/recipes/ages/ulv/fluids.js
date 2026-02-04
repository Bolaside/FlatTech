ServerEvents.recipes(event => {
    event.recipes.gtceu.extractor("extract_lead_ingot")
        .category(GTRecipeCategories.EXTRACTOR_RECYCLING)
        .itemInputs(Item.of("gtceu:lead_ingot"))
        .outputFluids(Fluid.of("gtceu:lead", GTValues.L))
        .duration(Math.trunc(GTMaterials.Lead.getMass()))
        .EUt(GTValues.VA[GTValues.ULV]);
});
