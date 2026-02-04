ServerEvents.recipes(event => {
    event.recipes.gtceu.polarizer("polarize_certus_quartz")
        .itemInputs(Item.of("ae2:certus_quartz_crystal"))
        .itemOutputs(Item.of("ae2:charged_certus_quartz_crystal"))
        .EUt(GTValues.VH[GTValues.LV])
        .duration(20 * 2);

    event.recipes.gtceu.mixer("fluix_dust")
        .itemInputs([
            Item.of("ae2:certus_quartz_dust"),
            Item.of("minecraft:redstone"),
            Item.of("gtceu:nether_quartz_dust")
        ])
        .inputFluids(Fluid.of("minecraft:water", 250))
        .itemOutputs(Item.of("ae2:fluix_dust", 3))
        .EUt(GTValues.VA[GTValues.LV])
        .duration(20 * 10);

    event.recipes.gtceu.mixer("sky_dust")
        .itemInputs([
            Item.of("gtceu:obsidian_dust", 4),
            Item.of("ae2:certus_quartz_dust")
        ])
        .itemOutputs(Item.of("ae2:sky_dust", 5))
        .EUt(GTValues.VH[GTValues.LV])
        .duration(20 * 30);
});
