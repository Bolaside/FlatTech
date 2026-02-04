ServerEvents.recipes(event => {
    event.shaped("ae2:energy_acceptor", ["CFC", "FHF", "CFC"], {
        "C": Components.get("VOLTAGE_COIL", GTValues.LV),
        "F": Item.of("flatcore:azuron_single_wire"),
        "H": Components.get("HULL", GTValues.LV),
    }).id("ae2:network/blocks/energy_energy_acceptor");

    event.remove({ id: "ae2:network/blocks/controller" });
    event.recipes.gtceu.assembler("me_controller")
        .itemInputs([
            Components.get("HULL", GTValues.LV),
            Item.of("ae2:engineering_processor", 4),
            Item.of("ae2:fluix_crystal", 4),
            Components.get("CABLE", GTValues.LV).withCount(4),
        ])
        .inputFluids(Fluid.of("gtceu:glass", GTValues.L * 2))
        .itemOutputs(Item.of("ae2:controller"))
        .EUt(GTValues.VA[GTValues.LV])
        .duration(20 * 60);

    event.shaped(Item.of("ae2:cell_workbench"), ["CPC", "ScS", "SSS"], {
        "C": Item.of("ae2:certus_quartz_crystal"),
        "P": Item.of("ae2:calculation_processor"),
        "S": Item.of("gtceu:steel_plate"),
        "c": Item.of("minecraft:chest"),
    });

    FTValues.VoltageNames.slice(GTValues.LV, GTValues.IV + 1).forEach(voltage => {
        const tier = GTValues[voltage];
        const craftAmount = 2 ** tier - 1;

        // it's only used for recipe IDs after this line, so might as well
        voltage = voltage.toLowerCase();

        /**
         * @type {string} machineName
         * @type {ComponentName} topComponent
         */
        const aeMachineRecipe = (machineName, topComponent) => {
            event.shaped(Item.of(`ae2:${machineName}`, craftAmount), ["PCP", "FGA", "PPP"], {
                "P": Components.get("PLATE", tier),
                "C": Components.get(topComponent, tier),
                "F": Item.of("ae2:formation_core"),
                "G": Components.get("GLASS", tier),
                "A": Item.of("ae2:annihilation_core"),
            }).id(`kubejs:ae2/${machineName}_${voltage}`);
        };

        aeMachineRecipe("interface", "CONVEYOR");
        aeMachineRecipe("pattern_provider", "ROBOT_ARM");

        event.shaped(Item.of("ae2:molecular_assembler", craftAmount), ["PCP", "FcA", "PpP"], {
            "P": Components.get("PLATE", tier),
            "C": Components.get("CONVEYOR", tier),
            "F": Item.of("ae2:formation_core"),
            "c": Item.of("minecraft:crafting_table"),
            "A": Item.of("ae2:annihilation_core"),
            "p": Components.get("PUMP", tier),
        }).id(`kubejs:ae2/molecular_assembler_${voltage}`);
    });

    event.shapeless(Item.of("ae2:storage_bus"), [
        Item.of("gtceu:cable_interface"),
        Item.of("gtceu:lv_electric_piston"),
        Item.of("ae2:fluix_glass_cable"),
    ]);

    const storageBusUpgrades = {
        "tag": Item.of("gtceu:item_tag_filter"),
        "mod": Item.of("ae2:logic_processor"),
        "precise": Item.of("gtceu:lv_robot_arm"),
    };

    for (let busType in storageBusUpgrades) {
        event.shapeless(Item.of(`expatternprovider:${busType}_storage_bus`), [
            Item.of("ae2:storage_bus"),
            storageBusUpgrades[busType],
        ]);
    }
});
