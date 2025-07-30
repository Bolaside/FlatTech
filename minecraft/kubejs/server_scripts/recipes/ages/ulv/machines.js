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

  event.shaped("gtceu:ulv_squeezer", ["CRC", "PHP", "pCp"], {
    "C": "gtceu:lead_single_cable",
    "R": "gtceu:copper_rotor",
    "H": "gtceu:ulv_machine_hull",
    "P": "ulvcovm:ulv_electric_piston",
    "p": "ulvcovm:ulv_electric_pump"
  })

  event.shaped("gtceu:ulv_mixer", ["GRG", "GMG", "CHC"], {
    "G": "minecraft:glass",
    "R": "gtceu:copper_rotor",
    "M": "ulvcovm:ulv_electric_motor",
    "C": "#gtceu:circuits/ulv",
    "H": "gtceu:ulv_machine_hull"
  }).id("gtceu:shaped/ulv_mixer")

  event.remove({ output: /gtceu:.*solar_panel/ })

  event.shaped("gtceu:ulv_ore_separator", ["SsS", "sCs", "SsS"], {
    "S": "minecraft:cobblestone_stairs",
    "s": "minecraft:cobblestone_slab",
    "C": "quark:sturdy_stone"
  })
})
