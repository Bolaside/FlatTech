ServerEvents.recipes(event => {
    event.remove({ id: /gtceu:assembler\/(item|fluid)_(import_|export_)(hatch|bus).*/ });
    event.remove({ id: /gtceu:assembler\/fluid_hatch.*/ });

    GTValues.VN.slice(GTValues.ULV, GTValues.UHV + 1).forEach(voltage => {
        const voltageIndex = GTValues[voltage];
        const ingredients = {
            "hatch": GTCraftingComponents.DRUM.get(voltageIndex),
            "bus": GTCraftingComponents.CRATE.get(voltageIndex),
            "hull": GTCraftingComponents.HULL.get(voltageIndex)
        };

        for (const inputType of ["input", "output"]) {
            for (const hatchType of ["hatch", "bus"]) {
                let hatchId = `gtceu:${voltage.toLowerCase()}_${inputType}_${hatchType}`;
                let pattern = inputType === "input"
                    ? [" C ", " H ", "   "]
                    : ["   ", " H ", " C "];
                let itemMap = { "C": ingredients[hatchType], "H": ingredients.hull };

                event.shaped(hatchId, pattern, itemMap);
            }
        }
    });
});
