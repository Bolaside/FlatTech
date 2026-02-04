ServerEvents.recipes(event => {
    event.shaped("gtceu:water_pump", ["PPp", "CHR", "PPp"], {
        "P": Materials.get(TagPrefix.pipeNormalFluid, GTMaterials.Steel),
        "p": Components.get("PUMP", GTValues.LV),
        "C": Components.get("CIRCUIT", GTValues.LV),
        "H": Components.get("HULL", GTValues.LV),
        "R": Materials.get(TagPrefix.ring, GTMaterials.Steel)
    });
});
