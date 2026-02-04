ServerEvents.recipes(event => {
    const BASE_LOG_COUNT = 16;
    const BASE_DURATION = 20 * 32;
    const MIN_FERTILIZER_LOG_BOOST = 2;

    /**
     * @param {GreenhouseWood} wood
     */
    const makeGreenhouseRecipe = wood => {
        const { sapling, log } = wood;
        let { sizeMultiplier, extraDrops } = wood;
        if (sizeMultiplier === undefined) sizeMultiplier = 1;
        if (extraDrops === undefined) extraDrops = [];

        const saplingName = sapling.id.split(":")[1];
        const water = Fluid.of("minecraft:water", 1500 * sizeMultiplier);
        const duration = BASE_DURATION * sizeMultiplier / 2;

        log.count *= BASE_LOG_COUNT * sizeMultiplier;
        const logs = RecipeUtils.splitToStacks(log);

        event.recipes.gtceu.greenhouse(saplingName)
            .notConsumable(sapling)
            .inputFluids(water)
            .itemOutputs(logs)
            .circuit(1)
            .EUt(GTValues.VHA[GTValues.MV])
            .duration(duration);

        log.count *= Math.max(sizeMultiplier * 1.5, MIN_FERTILIZER_LOG_BOOST);
        const boostedDrops = RecipeUtils.splitToStacks(log).concat(extraDrops);

        event.recipes.gtceu.greenhouse(`${saplingName}_boosted`)
            .notConsumable(sapling)
            .itemInputs(Item.of("gtceu:fertilizer", sizeMultiplier))
            .inputFluids(water)
            .itemOutputs(boostedDrops)
            .circuit(2)
            .EUt(GTValues.VA[GTValues.MV])
            .duration(duration * 1.5);
    };

    // wood types that don't have any special drops
    const baseWoods = [
        ["minecraft:spruce", 2],
        ["minecraft:birch", 1],
        ["minecraft:acacia", 1],
        ["minecraft:cherry", 1.5],
        ["quark:ancient", 1]
    ];
    baseWoods.forEach(([prefix, sizeMultiplier]) => makeGreenhouseRecipe({
        log: Item.of(`${prefix}_log`),
        sapling: Item.of(`${prefix}_sapling`),
        sizeMultiplier: sizeMultiplier
    }));

    const quarkBlossoms = ["blue", "lavender", "orange", "yellow", "red"]
        .map(color => Item.of(`quark:${color}_blossom_sapling`));
    quarkBlossoms.forEach(sapling => makeGreenhouseRecipe({
        log: Item.of("quark:blossom_log"),
        sapling: sapling,
        sizeMultiplier: 2
    }));

    const normalExtraDropWoods = [
        ["minecraft:oak", 1.5, [Item.of("minecraft:apple")]],
        ["minecraft:dark_oak", 2, [Item.of("minecraft:apple")]],
        ["minecraft:jungle", 2, [
            Item.of("minecraft:vine", 4), Item.of("minecraft:cocoa_beans", 2)
        ]],
        ["gtceu:rubber", 1, [Item.of("gtceu:sticky_resin", 8)]]
    ];
    normalExtraDropWoods.forEach(([prefix, sizeMultiplier, extraDrops]) => makeGreenhouseRecipe({
        log: Item.of(`${prefix}_log`),
        sapling: Item.of(`${prefix}_sapling`),
        sizeMultiplier: sizeMultiplier,
        extraDrops: extraDrops
    }));

    makeGreenhouseRecipe({
        log: Item.of("minecraft:mangrove_log"),
        sapling: Item.of("minecraft:mangrove_propagule"),
        extraDrops: [Item.of("minecraft:moss_carpet", 2)]
    });
});
