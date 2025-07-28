ServerEvents.recipes(event => {
  const recipeBuilder = RecipeBuilder(event)

  recipeBuilder.componentCrafting({
    voltages: ["MV"],
    baseId: "gtceu:%s_super_chest",
    pattern: ["CPC", "PcP", "CFC"],
    itemMap: {
      "C": GTCraftingComponents.CIRCUIT,
      "P": GTCraftingComponents.PLATE,
      "c": GTCraftingComponents.CRATE,
      "F": GTCraftingComponents.FIELD_GENERATOR
    },
    recipeBaseId: "gtceu:shaped/super_chest_%s"
  })

  recipeBuilder.componentCrafting({
    voltages: ["MV"],
    baseId: "gtceu:%s_super_tank",
    pattern: ["CFC", "PcP", "CpC"],
    itemMap: {
      "C": GTCraftingComponents.CIRCUIT,
      "F": GTCraftingComponents.FIELD_GENERATOR,
      "P": GTCraftingComponents.PLATE,
      "c": "gtceu:%s_hermetic_casing",
      "p": GTCraftingComponents.PUMP
    },
    recipeBaseId: "gtceu:shaped/super_tank_%s"
  })
})
