ServerEvents.recipes(event => {
    event.recipes.gtceu.water_pump("water")
        .outputFluids(Fluid.of("minecraft:water", 150))
        .circuit(1)
        .duration(20 * 0.05);

    event.recipes.gtceu.water_pump("water_large")
        .outputFluids(Fluid.of("minecraft:water", 8000))
        .circuit(2)
        .duration(20 * 2);
});
