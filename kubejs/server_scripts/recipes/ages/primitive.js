
ServerEvents.recipes(event => {
  const getComponent = (component, voltage) => component.getIngredient(GTValues[voltage])

  event.shaped("minecraft:cobblestone", ["XX ", "XX "], {
    "X": "kubejs:cobble"
  })

  event.remove({ output: "minecraft:furnace" })
  event.shaped("minecraft:furnace", ["PSP", "CcC", "PSP"], {
    "P": "#minecraft:planks",
    "S": "gtceu:sticky_resin",
    "C": "minecraft:cobblestone",
    "c": "minecraft:cobblestone_slab"
  })

  event.shaped(`gtceu:ulv_squeezer`, ["CRC", "PHP", "pCp"], {
    "C": getComponent(CraftingComponent.CABLE, "ULV"),
    "R": getComponent(CraftingComponent.ROTOR, "ULV"),
    "H": getComponent(CraftingComponent.HULL, "ULV"),
    "P": getComponent(CraftingComponent.PISTON, "ULV"),
    "p": getComponent(CraftingComponent.PUMP, "ULV")
  })

  event.shaped("gtceu:ulv_mixer", ["GRG", "GMG", "CHC"], {
    "G": "minecraft:glass",
    "R": "gtceu:copper_rotor",
    "M": "ulvcovm:ulv_electric_motor",
    "C": "#gtceu:circuits/ulv",
    "H": "gtceu:ulv_machine_hull"
  }).id("gtceu:shaped/ulv_mixer")

  event.shaped("gtceu:wood_plate", ["PPP", "RRR", "PPP"], {
    "P": "#minecraft:planks",
    "R": "gtceu:sticky_resin"
  })

  event.shaped("kubejs:empty_squeezer_mold", ["MF ", "SS ", "SS "], {
    "M": "#forge:tools/mallets",
    "F": "#forge:tools/files",
    "S": "gtceu:wood_plate"
  })

  const squeezerMoldRecipe = (name, positions) => {
    event.shaped(`kubejs:${name}_squeezer_mold`, positions, {
      "F": "#forge:tools/files",
      "M": "kubejs:empty_squeezer_mold"
    }).noMirror().noShrink()
  }
 
  squeezerMoldRecipe("plank", ["   ", "FM ", "   "])
  squeezerMoldRecipe("sieve", [" F ", " M ", "   "])

  event.shaped("gtceu:wood_spring", [" S ", "FRM", " R "], {
    "S": "#forge:tools/saws",
    "F": "#forge:tools/files",
    "R": "gtceu:long_wood_rod",
    "M": "#forge:tools/mallets",
  })

  event.recipes.gtceu.bender("bend_long_stick_to_spring")
    .itemInputs(Item.of("gtceu:long_wood_rod"))
    .itemOutputs(Item.of("gtceu:wood_spring"))
    .circuit(1)
    .duration(20 * 10)
    .EUt(GTValues.VH[GTValues.LV])

  event.shaped("gtceu:small_wood_spring", [" S ", "FsM"], {
    "S": "#forge:tools/saws",
    "F": "#forge:tools/files",
    "s": "minecraft:stick",
    "M": "#forge:tools/mallets",
  })

  event.recipes.gtceu.bender("bend_stick_to_small_spring")
    .itemInputs(Item.of("minecraft:stick"))
    .itemOutputs(Item.of("gtceu:small_wood_spring", 2))
    .circuit(1)
    .duration(Math.round(GTMaterials.Wood.getMass() / 2))
    .EUt(GTValues.VA[GTValues.ULV])

  event.shaped("gtceu:stone_ingot", ["F ", "S "], {
    "F": "#forge:tools/files",
    "S": "minecraft:stone"
  })

  event.shaped("gtceu:stone_plate", ["H  ", "S  ", "S  "], {
    "H": "#forge:tools/hammers",
    "S": "gtceu:stone_ingot"
  })

  event.shaped("gtceu:stone_drill_head", ["SWS", "SWS", "WHW"], {
    "S": "gtceu:stone_plate",
    "W": "gtceu:wood_plate",
    "H": "#forge:tools/hammers"
  }).id("gtceu:shaped/drill_head_stone")

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
})
