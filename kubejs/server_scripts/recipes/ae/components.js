ServerEvents.recipes(event => {
    /**
     * @param {ItemStack} press
     * @param {ItemStack} lens
     */
    const makeEngraverPressRecipe = (press, lens) => {
        const pressName = press.idLocation.path;

        event.recipes.gtceu.laser_engraver(`engrave_${pressName}`)
            .itemInputs(Item.of("kubejs:blank_press"))
            .notConsumable(lens)
            .itemOutputs(press)
            .EUt(GTValues.VA[GTValues.MV])
            .duration(20 * 25);
    };

    /**
     * @param {ItemStack} printedProcessor
     * @param {ItemStack} inputItem
     * @param {ItemStack} press
     */
    const makePrintedProcessorRecipe = (printedProcessor, inputItem, press) => {
        const printedProcessorName = printedProcessor.idLocation.path;

        event.recipes.gtceu.forming_press(`print_${printedProcessorName}`)
            .notConsumable(press)
            .itemInputs(inputItem)
            .itemOutputs(printedProcessor)
            .EUt(GTValues.VA[GTValues.LV])
            .duration(20 * 12);
    };

    /**
     * @param {ItemStack} processor
     * @param {ItemStack} printedProcessor
     * @param {string} circuitVoltage
     */
    const makeProcessorRecipe = (processor, printedProcessor, circuitVoltage) => {
        const processorName = processor.idLocation.path;
        const solderFluid = Fluid.of("gtceu:soldering_alloy", GTValues.L / 2);
        const commonInputs = resistor => [
            printedProcessor,
            Item.of("ae2:printed_silicon"),
            Ingredient.of(`#gtceu:circuits/${circuitVoltage.toLowerCase()}`),
            resistor,
            Item.of("gtceu:fine_red_alloy_wire", 4),
        ];

        event.recipes.gtceu.circuit_assembler(processorName)
            .itemInputs(commonInputs(Ingredient.of("#gtceu:resistors")))
            .inputFluids(solderFluid)
            .itemOutputs(processor.withCount(4))
            .EUt(GTValues.VA[GTValues[circuitVoltage]])
            .duration(20 * 20);

        event.recipes.gtceu.circuit_assembler(`${processorName}_advanced`)
            .itemInputs(commonInputs(Item.of("gtceu:advanced_smd_resistor")))
            .inputFluids(solderFluid)
            .itemOutputs(processor.withCount(16))
            .EUt(GTValues.VA[GTValues[circuitVoltage]])
            .duration(20 * 10);
    };

    for (let processorName in FTValues.AEProcessors) {
        let {
            circuitVoltage,
            inscriberPress,
            material,
            pressLens,
            printedProcessor,
            processor
        } = FTValues.AEProcessors[processorName];

        makeEngraverPressRecipe(inscriberPress, pressLens);
        makePrintedProcessorRecipe(
            printedProcessor,
            Materials.get(TagPrefix.plate, material),
            inscriberPress
        );
        makeProcessorRecipe(processor, printedProcessor, circuitVoltage);
    }

    // don't think it's necessary to add silicon to `FTValues.AEProcessors`
    /** @type {AEProcessorData} */
    const siliconData = {
        material: GTMaterials.Silicon,
        inscriberPress: Item.of("ae2:silicon_press"),
        pressLens: Item.of("gtceu:glass_lens"),
        printedProcessor: Item.of("ae2:printed_silicon"),
    };

    makeEngraverPressRecipe(siliconData.inscriberPress, siliconData.pressLens);
    makePrintedProcessorRecipe(
        siliconData.printedProcessor,
        Materials.get(TagPrefix.plate, siliconData.material),
        siliconData.inscriberPress
    );

    // make the mysterious cube, which drops the AE2 inscriber presses, craftable
    // before lenses are obtainable
    event.recipes.gtceu.bender("blank_press")
        .itemInputs(Item.of("gtceu:tin_alloy_plate", 4))
        .itemOutputs(Item.of("kubejs:blank_press"))
        .circuit(4)
        .EUt(GTValues.VA[GTValues.ULV])
        .duration(20 * 30);

    event.recipes.gtceu.assembler("mysterious_cube")
        .itemInputs([
            Item.of("ae2:smooth_sky_stone_chest"),
            Item.of("gtceu:certus_quartz_plate", 4),
            Item.of("kubejs:blank_press", 4),
            Ingredient.of("#gtceu:circuits/lv", 4),
        ])
        .itemOutputs(Item.of("ae2:mysterious_cube"))
        .EUt(GTValues.VA[GTValues.LV])
        .duration(20 * 60);

    const cardMaterials = {
        "ae2:basic_card": [
            Item.of("gtceu:fine_electrum_wire"),
            Item.of("ae2:calculation_processor"),
        ],
        "ae2:advanced_card": [
            Item.of("gtceu:fine_aluminium_wire"),
            Item.of("ae2:calculation_processor"),
        ],
        "kubejs:complex_card": [
            Item.of("gtceu:fine_titanium_wire"),
            Item.of("megacells:accumulation_processor"),
        ],
    };

    for (let card in cardMaterials) {
        let [wire, processor] = cardMaterials[card];

        event.shaped(card, ["WP ", "WpP", "WP "], {
            "W": wire,
            "P": Item.of("gtceu:tin_alloy_plate"),
            "p": processor,
        });
    }

    event.shapeless(Item.of("ae2:crafting_card"), [
        Ingredient.of("#gtceu:circuits/ev"),
        Item.of("kubejs:complex_card")
    ]).id("ae2:materials/cardcrafting");

    const blankPatternMaterials = [
        GTMaterials.Polyethylene,
        GTMaterials.PolyvinylChloride,
        GTMaterials.Polytetrafluoroethylene,
        GTMaterials.Polybenzimidazole,
    ];

    blankPatternMaterials.forEach((material, tier) => {
        const amount = 4 ** tier;
        const recipeTier = tier < 2 ? GTValues.MV : GTValues.HV;

        event.recipes.gtceu.assembler(`blank_pattern_${material.name}`)
            .itemInputs([
                Item.of("gtceu:stainless_steel_plate", 2),
                Materials.get(TagPrefix.plate, material).withCount(2),
                Item.of("gtceu:fine_aluminium_wire", 4),
                Ingredient.of("#gtceu:circuits/lv"),
            ])
            .itemOutputs(Item.of("ae2:blank_pattern", amount))
            .EUt(GTValues.VA[recipeTier])
            .duration(20 * 20);
    });
});
