ServerEvents.recipes(event => {
  event.remove({ output: "minecraft:furnace" })
  event.shaped("minecraft:furnace", ["PSP", "CcC", "PSP"], {
    "P": "#minecraft:planks",
    "S": "gtceu:sticky_resin",
    "C": "minecraft:cobblestone",
    "c": "minecraft:cobblestone_slab"
  })
})
