ServerEvents.recipes(event => {
    event.remove({ id: /gtceu:(shaped|assembler)\/electric_motor_lv_iron/ });

    event.recipes.gtceu.compressor("rubber_plate")
        .itemInputs(Item.of("gtceu:sticky_resin"))
        .itemOutputs(Item.of("gtceu:rubber_plate"))
        .EUt(GTValues.VHA[GTValues.ULV])
        .duration(20 * 7.5);

    const plateGems = [
        GTMaterials.Lapis,
        GTMaterials.Sodalite,
        GTMaterials.Lazurite
    ];

    plateGems.forEach(material => {
        const plate = Materials.get(TagPrefix.plate, material);

        event.recipes.gtceu.compressor(plate.id)
            .itemInputs(Materials.getDust(material))
            .itemOutputs(plate)
            .duration(20 * 15)
            .EUt(2);
    });

    event.remove({
        id: /gtceu:circuit_assembler\/(?!neuro_processor$)(?!wetware_board$)(?!.*_soldering_alloy$).+/
    });
    event.remove({ id: "gtceu:shaped/good_circuit_board" });

    event.recipes.gtceu.chemical_reactor("redstone_circuit_board")
        .itemInputs([
            Item.of("gtceu:magnetic_steel_plate"),
            Item.of("gtceu:red_alloy_foil", 2)
        ])
        .inputFluids(Fluid.of("gtceu:redstone", 125))
        .itemOutputs(Item.of("kubejs:redstone_circuit_board"))
        .duration(20 * 15)
        .EUt(10);

    Materials.getEtchingFluids(250).forEach(fluid => {
        event.recipes.gtceu.chemical_reactor(`redstone_circuit_board_${fluid.id.split(":")[1]}`)
            .itemInputs([
                Item.of("kubejs:redstone_circuit_board"),
                Item.of("gtceu:red_alloy_foil", 4)
            ])
            .inputFluids(fluid)
            .itemOutputs(Item.of("kubejs:redstone_printed_circuit_board"))
            .duration(20 * 20)
            .EUt(GTValues.VA[GTValues.ULV]);
    });

    event.recipes.gtceu.circuit_assembler("redstone_circuit")
        .itemInputs([
            Item.of("kubejs:redstone_printed_circuit_board"),
            Components.get("CIRCUIT", GTValues.ULV).withCount(2),
            Item.of("gtceu:resistor", 4),
            Item.of("gtceu:diode", 2),
            Item.of("gtceu:fine_red_alloy_wire", 4),
        ])
        .inputFluids(Fluid.of("gtceu:soldering_alloy", GTValues.L / 2))
        .itemOutputs(Item.of("kubejs:redstone_circuit"))
        .duration(20 * 10)
        .EUt(GTValues.VH[GTValues.LV]);
});
