ServerEvents.recipes(event => {
    event.recipes.gtceu.mixer("red_brass")
        .itemInputs([
            Item.of("gtceu:copper_dust", 6),
            Item.of("gtceu:tin_dust", 2),
            Item.of("gtceu:zinc_dust")
        ])
        .itemOutputs(Item.of("flatcore:red_brass_dust", 9))
        .EUt(GTValues.VA[GTValues.ULV])
        .duration(20 * 20);

    event.remove({ id: "gtceu:smelting/wrought_iron_nugget" });
    event.smelting("gtceu:wrought_iron_ingot", "minecraft:iron_ingot");

    event.shapeless("gtceu:red_alloy_dust", ["gtceu:copper_dust", "6x minecraft:redstone"]);

    event.recipes.gtceu.mixer("steel_dust")
        .itemInputs([
            Item.of("gtceu:wrought_iron_dust"),
            Item.of("gtceu:carbon_dust", 1)
        ])
        .itemOutputs(Item.of("gtceu:steel_dust", 2))
        .EUt(GTValues.VA[GTValues.ULV])
        .duration(20 * 50);

    event.recipes.gtceu.electrolyzer("decomposition_electrolyzing_charcoal")
        .itemInputs(Item.of("gtceu:charcoal_dust"))
        .itemOutputs(Item.of("gtceu:carbon_dust"))
        .EUt(GTValues.VA[GTValues.ULV])
        // decomposition by electrolyzing duration formula
        .duration(GTMaterials.Charcoal.getProtons() * 1 * 2);

    const ulvAlloySmelterMaterials = [
        [GTMaterials.Copper, 3, GTMaterials.Tin, 1, GTMaterials.Bronze, 4],
        [GTMaterials.AnnealedCopper, 3, GTMaterials.Tin, 1, GTMaterials.Bronze, 4],
        [GTMaterials.Copper, 1, GTMaterials.Redstone, 4, GTMaterials.RedAlloy, 1],
        [GTMaterials.AnnealedCopper, 1, GTMaterials.Redstone, 4, GTMaterials.RedAlloy, 1],
        [GTMaterials.Iron, 1, GTMaterials.Tin, 1, GTMaterials.TinAlloy, 2],
        [GTMaterials.WroughtIron, 1, GTMaterials.Tin, 1, GTMaterials.TinAlloy, 2],
        [GTMaterials.Iron, 2, GTMaterials.Nickel, 1, GTMaterials.Invar, 3],
        [GTMaterials.WroughtIron, 2, GTMaterials.Nickel, 1, GTMaterials.Invar, 3],
    ];

    ulvAlloySmelterMaterials.forEach(([material0, amount0, material1, amount1, outputMaterial, outputAmount]) => {
        const materialNames = [material0.getName(), material1.getName(), outputMaterial.getName()];
        /**
         * @param {AlloySmelterForm} form0
         * @param {AlloySmelterForm} form1
         */
        const makeRecipeId = (form0, form1) =>
            `${materialNames[0]}_${form0}_and_${materialNames[1]}_${form1}_into_${materialNames[2]}`;

        /**
         * @param {AlloySmelterForm} form0
         * @param {AlloySmelterForm} form1
         */
        const makeRecipe = (form0, form1) => {
            event.recipes.gtceu.alloy_smelter(makeRecipeId(form0, form1))
                .itemInputs([
                    ChemicalHelper.get(TagPrefix[form0], material0, amount0),
                    ChemicalHelper.get(TagPrefix[form1], material1, amount1)
                ])
                .itemOutputs(Materials.getIngot(outputMaterial, outputAmount))
                .EUt(GTValues.VA[GTValues.ULV])
                .duration(outputAmount * 2.5 * 20);
        };

        makeRecipe("dust", "dust");
        if (material0.hasProperty(PropertyKey.INGOT)) makeRecipe("ingot", "dust");
        if (material1.hasProperty(PropertyKey.INGOT)) makeRecipe("dust", "ingot");
        if (material0.hasProperty(PropertyKey.INGOT) && material1.hasProperty(PropertyKey.INGOT))
            makeRecipe("ingot", "ingot");
    });

    const forgeHammerChain = ["cobblestone", "gravel", "sand"];

    for (let i = 0; i < forgeHammerChain.length - 1; i++) {
        event.recipes.gtceu.forge_hammer(`${forgeHammerChain[i]}_to_${forgeHammerChain[i + 1]}`)
            .itemInputs(Item.of(`minecraft:${forgeHammerChain[i]}`))
            .itemOutputs(Item.of(`minecraft:${forgeHammerChain[i + 1]}`))
            .EUt(GTValues.VH[GTValues.ULV])
            .duration(20 * 0.5);
    }

    event.recipes.gtceu.wiremill("string_from_saplings")
        .itemInputs(Ingredient.of("#minecraft:saplings"))
        .itemOutputs(Item.of("minecraft:string"))
        .EUt(2)
        .duration(20 * 5);
});
