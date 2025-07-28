ServerEvents.recipes(event => {
  const recipeBuilder = RecipeBuilder(event)

  event.remove({ mod: "quark", output: "minecraft:furnace" })
  event.recipes.gtceu.assembler("furnace")
    .itemInputs(Ingredient.of("#minecraft:stone_tool_materials", 4))
    .itemOutputs(Item.of("minecraft:furnace"))
    .circuit(8)
    .duration(20 * 5)
    .EUt(GTValues.VA[GTValues.ULV])

  recipeBuilder.tooledCrafting("minecraft:furnace", ["CCC", "WSM", "ccc"], {
    "C": "minecraft:cobblestone",
    "S": "gtceu:sticky_resin",
    "c": "minecraft:cobblestone_slab"
  }).id("minecraft:shaped/furnace")

  recipeBuilder.componentCrafting({
    voltages: ["ULV"],
    baseId: "gtceu:%s_squeezer",
    pattern: ["CRC", "PHP", "pCp"],
    itemMap: {
      "C": GTCraftingComponents.CABLE,
      "R": GTCraftingComponents.ROTOR,
      "H": GTCraftingComponents.HULL,
      "P": GTCraftingComponents.PISTON,
      "p": GTCraftingComponents.PUMP
    }
  })

  recipeBuilder.componentCrafting({
    voltages: ["ULV"],
    baseId: "gtceu:%s_mixer",
    pattern: ["GRG", "GMG", "CHC"],
    itemMap: {
      "G": GTCraftingComponents.GLASS,
      "R": GTCraftingComponents.ROTOR,
      "M": GTCraftingComponents.MOTOR,
      "C": GTCraftingComponents.CIRCUIT,
      "H": GTCraftingComponents.HULL
    },
    recipeBaseId: "gtceu:shaped/%s_mixer"
  })

  event.remove({ output: /gtceu:.*solar_panel/ })

  event.shaped("gtceu:ulv_ore_separator", ["SsS", "sCs", "SsS"], {
    "S": "minecraft:cobblestone_stairs",
    "s": "minecraft:cobblestone_slab",
    "C": "quark:sturdy_stone"
  })
})
