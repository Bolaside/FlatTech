ServerEvents.recipes(event => {
  const getComponent = (component, voltageIndex) => component.getIngredient(voltageIndex)
  const tooledMap = itemMap => new Map(Object.assign(itemMap, {
    "W": "#forge:tools/wrenches",
    "M": "#forge:tools/mallets",
    "F": "#forge:tools/files",
    "S": "#forge:tools/saws",
    "H": "#forge:tools/hammers"
  }))

  event.shaped("minecraft:cobblestone", ["XX ", "XX "], {
    "X": "kubejs:cobble"
  })

  event.remove({ mod: "quark", output: "minecraft:furnace" })
  event.recipes.gtceu.assembler("furnace")
    .itemInputs(Ingredient.of("#minecraft:stone_tool_materials", 4))
    .itemOutputs(Item.of("minecraft:furnace"))
    .circuit(8)
    .duration(20 * 5)
    .EUt(7)

  event.shaped("minecraft:furnace", ["CCC", "WSM", "ccc"], tooledMap({
    "C": "minecraft:cobblestone",
    "S": "gtceu:sticky_resin",
    "c": "minecraft:cobblestone_slab"
  })).id("minecraft:shaped/furnace")

  event.shaped(`gtceu:ulv_squeezer`, ["CRC", "PHP", "pCp"], {
    "C": getComponent(CraftingComponent.CABLE, GTValues.ULV),
    "R": getComponent(CraftingComponent.ROTOR, GTValues.ULV),
    "H": getComponent(CraftingComponent.HULL, GTValues.ULV),
    "P": getComponent(CraftingComponent.PISTON, GTValues.ULV),
    "p": getComponent(CraftingComponent.PUMP, GTValues.ULV)
  })

  event.shaped("gtceu:ulv_mixer", ["GRG", "GMG", "CHC"], {
    "G": getComponent(CraftingComponent.GLASS, GTValues.ULV),
    "R": getComponent(CraftingComponent.ROTOR, GTValues.ULV),
    "M": getComponent(CraftingComponent.MOTOR, GTValues.ULV),
    "C": "#gtceu:circuits/ulv",
    "H": getComponent(CraftingComponent.HULL, GTValues.ULV)
  }).id("gtceu:shaped/ulv_mixer")

  event.remove({ id: /gtceu:compressor\/compress_plate_dust/ })
  event.shaped("gtceu:wood_plate", ["PPP", "RRR", "PPP"], {
    "P": "#minecraft:planks",
    "R": "gtceu:sticky_resin"
  })

  event.shaped("kubejs:empty_squeezer_mold", ["MF ", "SS ", "SS "], tooledMap({
    "S": "gtceu:wood_plate"
  }))

  const squeezerMoldRecipe = (name, positions) => {
    event.shaped(`kubejs:${name}_squeezer_mold`, positions, tooledMap({
      "M": "kubejs:empty_squeezer_mold"
    })).noMirror().noShrink()
  }
 
  squeezerMoldRecipe("plank", ["   ", "FM ", "   "])
  squeezerMoldRecipe("sieve", [" F ", " M ", "   "])

  event.shaped("gtceu:wood_spring", [" S ", "FRM", " R "], tooledMap({
    "R": "gtceu:long_wood_rod",
  }))

  event.recipes.gtceu.bender("bend_long_stick_to_spring")
    .itemInputs(Item.of("gtceu:long_wood_rod"))
    .itemOutputs(Item.of("gtceu:wood_spring"))
    .circuit(1)
    .duration(20 * 10)
    .EUt(GTValues.VH[GTValues.LV])

  event.shaped("gtceu:small_wood_spring", [" S ", "FsM"], tooledMap({
    "s": "minecraft:stick",
  }))

  event.recipes.gtceu.bender("bend_stick_to_small_spring")
    .itemInputs(Item.of("minecraft:stick"))
    .itemOutputs(Item.of("gtceu:small_wood_spring", 2))
    .circuit(1)
    .duration(Math.round(GTMaterials.Wood.getMass() / 2))
    .EUt(GTValues.VA[GTValues.ULV])

  event.shaped("gtceu:stone_ingot", ["F ", "s "], tooledMap({
    "s": "minecraft:stone"
  }))

  event.shaped("gtceu:stone_plate", ["H  ", "i  ", "i  "], tooledMap({
    "i": "gtceu:stone_ingot"
  }))

  event.shaped("gtceu:stone_drill_head", ["sws", "sws", "wHw"], tooledMap({
    "s": "gtceu:stone_plate",
    "w": "gtceu:wood_plate"
  })).id("gtceu:shaped/drill_head_stone")

  event.shaped("kubejs:bedrock_ore_extractor", ["HG ", "GTL", " Ls"], {
    "G": "gtceu:stone_gear",
    "H": "gtceu:stone_drill_head",
    "L": "gtceu:stripped_rubber_log",
    "T": "quark:sturdy_stone",
    "s": "gtceu:small_wood_spring"
  })

  event.recipes.gtceu.mixer("red_brass")
    .itemInputs(
      Item.of("gtceu:copper_dust", 6),
      Item.of("gtceu:tin_dust", 2),
      Item.of("gtceu:zinc_dust")
    )
    .itemOutputs(Item.of("gtceu:red_brass_dust", 9))
    .EUt(GTValues.VA[GTValues.ULV])
    .duration(20 * 20)
  
  event.shaped("kubejs:ulv_field_generator", ["WPW", "CBC", "WPW"], {
    "W": "gtceu:red_brass_quadruple_wire",
    "P": "gtceu:copper_plate",
    "C": "#gtceu:circuits/ulv",
    "B": "minecraft:redstone_block"
  })

  event.shaped("kubejs:wooden_shears", [" P", "P "], {
    "P": "#minecraft:planks"
  })

  event.shaped("gtceu:wood_wrench", ["PMP", " P ", " P "], tooledMap({
    "P": "gtceu:wood_plate"
  })).id("gtceu:shaped/wrench_wood")

  event.shaped("gtceu:wood_saw", ["PPs", "FMs"], tooledMap({
    "P": "gtceu:wood_plate",
    "s": "minecraft:stick",
  })).id("gtceu:shaped/saw_wood")
})
