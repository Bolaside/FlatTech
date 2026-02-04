StartupEvents.registry("block", event => {
    event.create("tin_alloy_coil_block", "gtceu:coil")
        .texture("kubejs:block/casings/coils/machine_coil_tin_alloy")
        .coilMaterial(() => GTMaterials.TinAlloy)
        .requiresTool(true)
        .tagBlock("minecraft:mineable/pickaxe")
        .tagBlock("forge:mineable/wrench")
        .soundType(SoundType.METAL)
        .temperature(1300)
        .level(0)
        .energyDiscount(1)
        .tier(0);
});
