ServerEvents.recipes(event => {
  const recipeBuilder = RecipeBuilder(event)

  event.shaped("minecraft:cobblestone", ["XX ", "XX "], {
    "X": "kubejs:cobble"
  })

  event.remove({ id: /gtceu:compressor\/compress_plate_dust/ })
  event.shaped("gtceu:wood_plate", ["PPP", "RRR", "PPP"], {
    "P": "#minecraft:planks",
    "R": "gtceu:sticky_resin"
  })

  recipeBuilder.tooledCrafting("kubejs:empty_squeezer_mold", ["MF ", "SS ", "SS "], {
    "S": "gtceu:wood_plate"
  })

  /**
   * @param {string} name 
   * @param {Array<string>} positions 
   */
  const squeezerMoldRecipe = (name, positions) => {
    recipeBuilder.tooledCrafting(`kubejs:${name}_squeezer_mold`, positions, {
      "M": "kubejs:empty_squeezer_mold"
    }).noMirror().noShrink()
  }
 
  squeezerMoldRecipe("plank", ["   ", "FM ", "   "])
  squeezerMoldRecipe("sieve", [" F ", " M ", "   "])

  recipeBuilder.tooledCrafting("gtceu:wood_spring", [" S ", "FRM", " R "], {
    "R": "gtceu:long_wood_rod",
  })

  event.recipes.gtceu.bender("bend_long_stick_to_spring")
    .itemInputs(Item.of("gtceu:long_wood_rod"))
    .itemOutputs(Item.of("gtceu:wood_spring"))
    .circuit(1)
    .duration(20 * 10)
    .EUt(GTValues.VH[GTValues.LV])

  recipeBuilder.tooledCrafting("gtceu:small_wood_spring", [" S ", "FsM"], {
    "s": "minecraft:stick",
  })

  event.recipes.gtceu.bender("bend_stick_to_small_spring")
    .itemInputs(Item.of("minecraft:stick"))
    .itemOutputs(Item.of("gtceu:small_wood_spring", 2))
    .circuit(1)
    .duration(Math.round(GTMaterials.Wood.getMass() / 2))
    .EUt(GTValues.VA[GTValues.ULV])

  recipeBuilder.tooledCrafting("gtceu:stone_ingot", ["F ", "s "], {
    "s": "minecraft:stone"
  })

  recipeBuilder.tooledCrafting("gtceu:stone_plate", ["H  ", "i  ", "i  "], {
    "i": "gtceu:stone_ingot"
  })

  recipeBuilder.tooledCrafting("gtceu:stone_drill_head", ["sws", "sws", "wHw"], {
    "s": "gtceu:stone_plate",
    "w": "gtceu:wood_plate"
  }).id("gtceu:shaped/drill_head_stone")

  event.shaped("kubejs:bedrock_ore_extractor", ["HG ", "GTL", " Ls"], {
    "G": "gtceu:stone_gear",
    "H": "gtceu:stone_drill_head",
    "L": "gtceu:stripped_rubber_log",
    "T": "quark:sturdy_stone",
    "s": "gtceu:small_wood_spring"
  })
  
  event.shaped("kubejs:ulv_field_generator", ["WPW", "CBC", "WPW"], {
    "W": "gtceu:red_brass_quadruple_wire",
    "P": "gtceu:copper_plate",
    "C": "#gtceu:circuits/ulv",
    "B": "minecraft:redstone_block"
  })

  event.shaped("kubejs:wooden_shears", [" P", "P "], {
    "P": "#minecraft:planks"
  })

  recipeBuilder.tooledCrafting("gtceu:wood_wrench", ["PMP", " P ", " P "], {
    "P": "gtceu:wood_plate"
  }).id("gtceu:shaped/wrench_wood")

  recipeBuilder.tooledCrafting("gtceu:wood_saw", ["PPs", "FMs"], {
    "P": "gtceu:wood_plate",
    "s": "minecraft:stick",
  }).id("gtceu:shaped/saw_wood")

  event.recipes.gtceu.assembler("coil_tin_alloy")
    .itemInputs([Item.of("gtceu:tin_alloy_double_wire", 8), Item.of("gtceu:tin_foil", 8)])
    .inputFluids(Fluid.of("gtceu:lead", GTValues.L))
    .itemOutputs(Item.of("kubejs:tin_alloy_coil_block"))
    .duration(20 * 5)
    .EUt(GTValues.VA[GTValues.ULV])

  event.replaceInput(
    { id: "gtceu:shaped/vacuum_tube" },
    "gtceu:steel_bolt",
    "gtceu:wrought_iron_bolt"
  )
})
