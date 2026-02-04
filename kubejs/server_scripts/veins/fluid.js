GTCEuServerEvents.fluidVeins(event => {
    event.remove("gtceu:heavy_oil_deposit");
    event.remove("gtceu:light_oil_deposit");
    event.remove("gtceu:natural_gas_deposit");
    event.remove("gtceu:oil_deposit");
    event.remove("gtceu:raw_oil_deposit");
    event.remove("gtceu:salt_water_deposit");

    event.add("kubejs:oil_deposit", vein => {
        vein.dimensions("minecraft:overworld");
        vein.fluid(() => Fluid.of("gtceu:oil").fluid);
        vein.weight(10000);
        vein.yield(200, 300);
        vein.depletionAmount(0);
        vein.depletionChance(0);
        vein.depletedYield(200);
    });
});
