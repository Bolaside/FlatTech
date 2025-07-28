ServerEvents.recipes(event => {
  event.remove({ id: /gtceu:assembler\/fluid_(export_)?hatch.*/ })
  event.remove({ id: /gtceu:assembler\/item_(import_export)_bus.*/ })

  GTValues.VN.slice(GTValues.ULV, GTValues.UHV + 1).forEach(voltage => {
    const ingredients = {
      "hatch": RecipeBuilder.getComponent(GTValues[voltage], GTCraftingComponents.DRUM),
      "bus": RecipeBuilder.getComponent(GTValues[voltage], GTCraftingComponents.CRATE),
      "hull": RecipeBuilder.getComponent(GTValues[voltage], GTCraftingComponents.HULL)
    }
    voltage = voltage.toLowerCase()

    for (const inputType of ["input", "output"]) {
      for (const hatchType of ["hatch", "bus"]) {
        let hatchId = `gtceu:${voltage}_${inputType}_${hatchType}`
        let pattern = inputType === "input" ? [" C ", " H ", "   "] : ["   ", " H ", " C "]
        let itemMap = { "C": ingredients[hatchType], "H": ingredients.hull }

        event.shaped(hatchId, pattern, itemMap)
      }
    }
  })
})
