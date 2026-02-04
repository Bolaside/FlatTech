// priority: -10

const $ToolProperty = Java.loadClass("com.gregtechceu.gtceu.api.data.chemical.material.properties.ToolProperty");
const $WireProperties = Java.loadClass("com.gregtechceu.gtceu.api.data.chemical.material.properties.WireProperties");
const $BlastProperty = Java.loadClass("com.gregtechceu.gtceu.api.data.chemical.material.properties.BlastProperty");

GTCEuStartupEvents.registry("gtceu:material", () => {
    const newTools = [
        GTToolType.SAW,
        GTToolType.FILE,
        GTToolType.WRENCH
    ];

    GTMaterials.Wood.addFlags(
        GTMaterialFlags.GENERATE_SPRING,
        GTMaterialFlags.GENERATE_SPRING_SMALL
    );
    GTMaterials.Stone.addFlags(GTMaterialFlags.GENERATE_SPRING, GTMaterialFlags.GENERATE_GEAR);
    GTMaterials.Carbon.addFlags(GTMaterialFlags.GENERATE_PLATE);
    GTMaterials.Titanium.addFlags(GTMaterialFlags.GENERATE_FINE_WIRE);

    if (GTMaterials.Wood.hasProperty(PropertyKey.TOOL)) {
        GTMaterials.Wood.getProperties().removeProperty(PropertyKey.TOOL);
    }

    GTMaterials.Wood.setProperty(PropertyKey.TOOL, new $ToolProperty(
        1, 1, 128, 1, newTools.concat(GTToolType.SOFT_MALLET)
    ));
    GTMaterials.Stone.setProperty(PropertyKey.TOOL, new $ToolProperty(
        1.5, 2, 192, 1, newTools.concat(GTToolType.DRILL_LV, GTToolType.HARD_HAMMER)
    ));
    GTMaterials.TinAlloy.setProperty(PropertyKey.WIRE, new $WireProperties(
        GTValues.V[GTValues.ULV], 1, 4
    ));
    GTMaterials.Steel.getProperty(PropertyKey.BLAST).setEUtOverride(GTValues.VA[GTValues.LV]);
});
