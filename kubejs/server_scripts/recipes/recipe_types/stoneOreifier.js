ServerEvents.recipes(event => {
    /**
     * @type {Array<{id: string, drops: Array<[Material, number]>, voltage: Voltage?}>}
     */
    const recipes = [
        {
            "id": "iron_ores",
            "drops": [
                [GTMaterials.Magnetite, Chance.toGT(0.6)],
                [GTMaterials.VanadiumMagnetite, Chance.toGT(0.45)],
                [GTMaterials.Chromite, Chance.toGT(0.3)],
                [GTMaterials.Lapis, Chance.toGT(0.2)]
            ]
        },
        {
            "id": "copper_ores",
            "drops": [
                [GTMaterials.Tetrahedrite, Chance.toGT(0.5)],
                [GTMaterials.Copper, Chance.toGT(0.35)],
                [GTMaterials.Stibnite, Chance.toGT(0.3)],
                [GTMaterials.Chalcocite, Chance.toGT(0.1)]
            ]
        },
        {
            "id": "carbon_ores",
            "drops": [
                [GTMaterials.Coal, Chance.toGT(0.65)],
                [GTMaterials.Graphite, Chance.toGT(0.45)],
                [GTMaterials.Diamond, Chance.toGT(0.2)]
            ]
        },
        {
            "id": "silica_ores",
            "voltage": GTValues.MV,
            "drops": [
                [GTMaterials.NetherQuartz, Chance.toGT(0.65)],
                [GTMaterials.Quartzite, Chance.toGT(0.55)],
                [GTMaterials.CertusQuartz, Chance.toGT(0.35)],
                [GTMaterials.Barite, Chance.toGT(0.1)]
            ]
        },
        {
            "id": "nickel_ores",
            "voltage": GTValues.MV,
            "drops": [
                [GTMaterials.Nickel, Chance.toGT(0.5)],
                [GTMaterials.Garnierite, Chance.toGT(0.45)],
                [GTMaterials.Cobaltite, Chance.toGT(0.3)],
                [GTMaterials.Pentlandite, Chance.toGT(0.1)]
            ]
        },
        {
            "id": "salt_ores",
            "voltage": GTValues.MV,
            "drops": [
                [GTMaterials.RockSalt, Chance.toGT(0.75)],
                [GTMaterials.Salt, Chance.toGT(0.25)],
                [GTMaterials.Lepidolite, Chance.toGT(0.25)],
                [GTMaterials.Spodumene, Chance.toGT(0.15)]
            ]
        },
        {
            "id": "manganese_ores",
            "voltage": GTValues.HV,
            "drops": [
                [GTMaterials.Grossular, Chance.toGT(0.8)],
                [GTMaterials.Spessartine, Chance.toGT(0.6)],
                [GTMaterials.Pyrolusite, Chance.toGT(0.55)],
                [GTMaterials.Tantalite, Chance.toGT(0.1)]
            ]
        }
    ];

    recipes.forEach((recipe, index) => {
        const totalMaterialMass = recipe.drops.reduce(
            (total, drop) => total + drop[0].getMass(), 0
        );
        const voltage = recipe.voltage ?? GTValues.LV;
        /**
         * LV = `100`, MV = `200`, HV = `400`, EV = `800`, ...
         */
        const fluidAmount = 100 * Math.floor(2 ** (voltage - 1));

        const oreifierRecipeBuilder = event.recipes.gtceu.stone_oreifier(recipe.id)
            .inputFluids(Fluid.of("flatcore:stone_ore_mass", fluidAmount))
            .itemInputs(Item.of("minecraft:stone"))
            .chancedItemOutputLogic(ChanceLogic.XOR)
            .circuit(index)
            .EUt(GTValues.VA[voltage])
            .duration(Math.trunc(totalMaterialMass));

        recipe.drops.forEach(([material, chance]) => {
            oreifierRecipeBuilder.chancedOutput(
                Materials.get(TagPrefix.ore, material),
                chance,
                0
            );
        });
    });
});
