ServerEvents.recipes(event => {
    /**
     * @type {Record<string, RangedItemTuple[]>}
     */
    const oreMap = {
        "ferrous_mineral": [
            [Item.of("gtceu:raw_magnetite"), 1, 5],
            [Item.of("gtceu:raw_yellow_limonite"), 1, 2],
            [Item.of("gtceu:raw_garnierite"), 0, 4]
        ],
        "cupriferous_aggregate": [
            [Item.of("minecraft:raw_copper"), 3, 6],
            [Item.of("minecraft:raw_iron"), 0, 3]
        ],
        "galena_sphalerite_blend": [
            [Item.of("gtceu:raw_galena"), 2, 3],
            [Item.of("gtceu:raw_sphalerite"), 1, 3],
            [Item.of("gtceu:raw_lead"), 0, 2]
        ],
        "hematite_redstone_mix": [
            [Item.of("gtceu:raw_hematite"), 2, 3],
            [Item.of("gtceu:raw_redstone"), 0, 2]
        ],
        "cassiterite_impurities": [
            [Item.of("gtceu:raw_cassiterite"), 2, 3],
            [Item.of("gtceu:raw_cassiterite_sand"), 1, 3],
            [Item.of("gtceu:raw_chalcopyrite"), 0, 2]
        ]
    };

    for (let oreName in oreMap) {
        let oreDrops = oreMap[oreName];
        let recipe = event.recipes.gtceu.ore_separator(oreName)
            .itemInputs(Item.of(`kubejs:${oreName}`))
            .duration(20 * 2 * oreDrops.length);

        // mid 2025 and still no array spread in kubejs
        oreDrops.forEach(([ore, min, max]) => {
            recipe.itemOutputsRanged(ore, min, max);
        });

        recipe.itemOutputs(Item.of("gtceu:stone_dust", oreDrops.length));
    }
});
