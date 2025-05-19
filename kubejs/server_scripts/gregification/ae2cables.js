ServerEvents.recipes(event => {
  // rubber covered cables

  // 4x cheaper smart cables
  event.remove({ id: "ae2:network/cables/smart_fluix" })
  event.shapeless("ae2:fluix_smart_cable", [
    "ae2:fluix_covered_cable", "gtceu:small_redstone_dust", "gtceu:small_glowstone_dust"
  ])

  // chemical bath dyeing recipes
  // i'll add more later h
  const smartCables = Ingredient.of("#ae2:smart_cables").itemIds
  smartCables.remove("ae2:fluix_smart_cable")
  smartCables.forEach(cable => {
    const color = cable.match(/ae2:(\w+)_fluix_cable/)[1]
    const cableName = cable.split(":")[1]
    console.log(cable, color, cableName)
  
    event.recipes.gtceu.chemical_bath(cableName)
      .itemInputs(Item.of("ae2:fluix_smart_cable", 8))
      .inputFluids(Fluid.of(`gtceu:${color}_dye`, 144/4))
      .itemOutputs(Item.of(cable, 4))
      .duration(20*3)
      .EUt(96)
  })
})
