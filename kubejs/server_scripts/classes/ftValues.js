// priority: 10

/**
 * @param {Material} material
 * @param {ItemStack} lens
 * @param {string} processorId `mod:processorName`, e.g. `ae2:logic`
 * @param {VoltageName} circuitVoltage
 * @returns {AEProcessorData}
 */
let makeProcessorData = (material, lens, processorId, circuitVoltage) => {
    const [mod, processorName] = processorId.split(":");

    return {
        material: material,
        pressLens: lens,
        inscriberPress: Item.of(`${processorId}_processor_press`),
        printedProcessor: Item.of(`${mod}:printed_${processorName}_processor`),
        processor: Item.of(`${processorId}_processor`),
        circuitVoltage: circuitVoltage,
    };
};

const FTValues = Object.freeze({
    /**
     * @type {VoltageName[]}
     */
    VoltageNames: ["ULV", "LV", "MV", "HV", "EV", "IV", "LuV", "ZPM", "UV", "UHV"],

    /**
     * @type {CableType[]}
     */
    MECableTypes: ["glass", "covered", "covered_dense", "smart", "smart_dense"],

    /**
     * @type {Record<string, ItemStack>}
     */
    ULVComponents: {
        MOTOR: Item.of("ulvcovm:ulv_electric_motor"),
        PISTON: Item.of("ulvcovm:ulv_electric_piston"),
        CONVEYOR: Item.of("ulvcovm:ulv_conveyor_module"),
        PUMP: Item.of("ulvcovm:ulv_electric_pump"),
        ROBOT_ARM: Item.of("ulvcovm:ulv_robot_arm"),
        FIELD_GENERATOR: Item.of("kubejs:ulv_field_generator"),

        HULL: Item.of("gtceu:ulv_machine_hull"),
        CIRCUIT: Ingredient.of("#gtceu:circuits/ulv"),
        CABLE: Item.of("gtceu:lead_single_cable"),
        WIRE_ELECTRIC: Item.of("gtceu:copper_single_wire"),
        ROTOR: Item.of("gtceu:copper_rotor"),
    },

    /**
     * @type {FluidStack[]}
     */
    CableInsulation: [
        Fluid.of("gtceu:rubber", GTValues.L),
        Fluid.of("gtceu:silicone_rubber", GTValues.L / 2),
        Fluid.of("gtceu:styrene_butadiene_rubber", GTValues.L / 4),
    ],

    /**
     * @type {Record<AEProcessor, AEProcessorData>}
     */
    AEProcessors: {
        "calculation": makeProcessorData(
            GTMaterials.CertusQuartz,
            Ingredient.of("#forge:lenses/blue"),
            "ae2:calculation",
            "LV"
        ),
        "engineering": makeProcessorData(
            GTMaterials.Diamond,
            Ingredient.of("#forge:lenses/light_blue"),
            "ae2:engineering",
            "LV"
        ),
        "logic": makeProcessorData(
            GTMaterials.Gold,
            Ingredient.of("#forge:lenses/yellow"),
            "ae2:logic",
            "LV"
        ),
        "accumulation": makeProcessorData(
            GTMaterials.BlackSteel,
            Ingredient.of("#forge:lenses/black"),
            "megacells:accumulation",
            "HV"
        ),
    },
});
