StartupEvents.registry("block", event => {
  event.create("tin_alloy_coil_block", "gtceu:coil")
    .temperature(1300)
    .level(0)
    .energyDiscount(1)
    .tier(1)
    .coilMaterial(() => GTMaterials.TinAlloy)
    .texture("kubejs:block/casings/coils/machine_coil_tin_alloy")
})
