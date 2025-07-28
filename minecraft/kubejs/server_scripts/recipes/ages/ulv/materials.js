ServerEvents.recipes(event => {
  event.recipes.gtceu.mixer("red_brass")
    .itemInputs([
      Item.of("gtceu:copper_dust", 6),
      Item.of("gtceu:tin_dust", 2),
      Item.of("gtceu:zinc_dust")
    ])
    .itemOutputs(Item.of("gtceu:red_brass_dust", 9))
    .EUt(GTValues.VA[GTValues.ULV])
    .duration(20 * 20)
  
  event.remove({ id: "gtceu:smelting/wrought_iron_nugget" })
  event.smelting("gtceu:wrought_iron_ingot", "minecraft:iron_ingot")
})
