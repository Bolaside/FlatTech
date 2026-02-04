ServerEvents.recipes(event => {
    const recipeBuilder = RecipeBuilder(event);

    event.remove({ id: "minecraft:furnace" });
    event.recipes.gtceu.assembler("furnace")
        .itemInputs(Ingredient.of("#minecraft:stone_tool_materials", 4))
        .itemOutputs(Item.of("minecraft:furnace"))
        .circuit(8)
        .duration(20 * 5)
        .EUt(GTValues.VA[GTValues.ULV]);

    recipeBuilder.tooledCrafting("minecraft:furnace", ["CCC", "WSM", "ccc"], {
        "C": "minecraft:cobblestone",
        "S": "gtceu:sticky_resin",
        "c": "minecraft:cobblestone_slab"
    }).id("minecraft:shaped/furnace");

    event.shaped("gtceu:ulv_squeezer", ["CRC", "PHP", "pCp"], {
        "C": Components.get("CABLE", GTValues.ULV),
        "R": Components.get("ROTOR", GTValues.ULV),
        "H": Components.get("HULL", GTValues.ULV),
        "P": Components.get("PISTON", GTValues.ULV),
        "p": Components.get("PUMP", GTValues.ULV)
    });

    event.shaped("gtceu:ulv_mixer", ["GRG", "GMG", "CHC"], {
        "G": "#forge:glass",
        "R": Components.get("ROTOR", GTValues.ULV),
        "M": Components.get("MOTOR", GTValues.ULV),
        "C": Components.get("CIRCUIT", GTValues.ULV),
        "H": Components.get("HULL", GTValues.ULV)
    }).id("gtceu:shaped/ulv_mixer");

    event.shaped("gtceu:ulv_ore_separator", ["PSF", "WsW", "CCC"], {
        "P": "minecraft:stone_pickaxe",
        "S": "minecraft:cobblestone_slab",
        "F": "gtceu:stone_file",
        "W": "minecraft:cobblestone_wall",
        "s": "quark:sturdy_stone",
        "C": "minecraft:cobblestone"
    });

    event.shaped("gtceu:ulv_assembler", ["RCO", "CHC", "cCc"], {
        "R": Components.get("ROBOT_ARM", GTValues.ULV),
        "O": Components.get("CONVEYOR", GTValues.ULV),
        "C": Components.get("CIRCUIT", GTValues.ULV),
        "H": Components.get("HULL", GTValues.ULV),
        "c": Components.get("CABLE", GTValues.ULV)
    });

    event.shaped("gtceu:ulv_bender", ["PpP", "CHC", "McM"], {
        "P": Components.get("PISTON", GTValues.ULV),
        "p": "gtceu:wrought_iron_plate",
        "C": Components.get("CIRCUIT", GTValues.ULV),
        "H": Components.get("HULL", GTValues.ULV),
        "M": Components.get("MOTOR", GTValues.ULV),
        "c": Components.get("CABLE", GTValues.ULV)
    });

    event.shaped("gtceu:ulv_wiremill", ["McM", "CHC", "McM"], {
        "M": Components.get("MOTOR", GTValues.ULV),
        "c": Components.get("CABLE", GTValues.ULV),
        "C": Components.get("CIRCUIT", GTValues.ULV),
        "H": Components.get("HULL", GTValues.ULV)
    });

    event.shaped("gtceu:ulv_alloy_smelter", ["CWC", "WHW", "cWc"], {
        "C": Components.get("CIRCUIT", GTValues.ULV),
        "W": "gtceu:tin_quadruple_wire",
        "H": Components.get("HULL", GTValues.ULV),
        "c": Components.get("CABLE", GTValues.ULV)
    });

    event.shaped("gtceu:ulv_forge_hammer", ["cPc", "CHC", "cAc"], {
        "c": Components.get("CABLE", GTValues.ULV),
        "P": Components.get("PISTON", GTValues.ULV),
        "C": Components.get("CIRCUIT", GTValues.ULV),
        "H": Components.get("HULL", GTValues.ULV),
        "A": "minecraft:anvil" // cool
    });

    event.shaped("gtceu:ulv_extractor", ["GCG", "PHp", "cCc"], {
        "G": "#forge:glass",
        "C": Components.get("CIRCUIT", GTValues.ULV),
        "P": Components.get("PISTON", GTValues.ULV),
        "H": Components.get("HULL", GTValues.ULV),
        "p": Components.get("PUMP", GTValues.ULV),
        "c": Components.get("CABLE", GTValues.ULV)
    });

    event.replaceInput(
        { output: "gtceu:maintenance_hatch" },
        "gtceu:lv_machine_hull",
        "gtceu:ulv_machine_hull"
    );

    event.shaped("gtceu:lv_muffler_hatch", ["HM", "PR"], {
        "H": Components.get("HULL", GTValues.ULV),
        "M": Components.get("MOTOR", GTValues.ULV),
        "P": "gtceu:copper_normal_fluid_pipe",
        "R": Components.get("ROTOR", GTValues.ULV)
    }).id("gtceu:shaped/lv_muffler_hatch");

    event.shaped("gtceu:ulv_electrolyzer", ["WGW", "WHW", "CcC"], {
        "W": Components.get("WIRE_ELECTRIC", GTValues.ULV),
        "G": "#forge:glass",
        "H": Components.get("HULL", GTValues.ULV),
        "C": Components.get("CIRCUIT", GTValues.ULV),
        "c": Components.get("CABLE", GTValues.ULV)
    });

    event.replaceInput(
        { output: "gtceu:electric_blast_furnace" },
        "#gtceu:circuits/lv",
        "#gtceu:circuits/ulv"
    );

    event.shaped("gtceu:ulv_chemical_bath", ["CGl", "PGC", "cHc"], {
        "C": Components.get("CONVEYOR", GTValues.ULV),
        "G": "#forge:glass",
        "l": Components.get("CABLE", GTValues.ULV),
        "P": Components.get("PUMP", GTValues.ULV),
        "c": Components.get("CIRCUIT", GTValues.ULV),
        "H": Components.get("HULL", GTValues.ULV)
    });
});
