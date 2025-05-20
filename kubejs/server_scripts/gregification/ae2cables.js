ServerEvents.recipes(event => {
  const insulation = [
    Fluid.of("gtceu:rubber", 144),
    Fluid.of("gtceu:silicone_rubber", 144/2),
    Fluid.of("gtceu:styrene_butadiene_rubber", 144/4)
  ]

  event.remove({ id: /ae2:network\/cables/ })
  event.recipes.gtceu.wiremill("fluix_glass_cable")
    .itemInputs(Item.of("ae2:fluix_crystal"))
    .itemOutputs(Item.of("ae2:fluix_glass_cable", 4))
    .duration(20*5)
    .EUt(4)

  insulation.forEach(rubber => {
    const rubberName = rubber.id.split(":")[1]
    const lastUnderscoreIndex = rubberName.lastIndexOf("_")
    const rubberShortName = lastUnderscoreIndex === -1
      ? rubberName
      : rubberName.slice(0, lastUnderscoreIndex)

    event.recipes.gtceu.assembler(`cover_fluix_cable_${rubberShortName}`)
      .itemInputs(Item.of("ae2:fluix_glass_cable"))
      .inputFluids(rubber)
      .itemOutputs(Item.of("ae2:fluix_covered_cable"))
      .duration(20*5)
      .EUt(7)
  })

  event.recipes.gtceu.mixer("redstone_glowstone_mixture")
    .inputFluids([Fluid.of("gtceu:glowstone", 144), Fluid.of("gtceu:redstone", 144)])
    .outputFluids(Fluid.of("gtceu:redstone_glowstone_mixture", 288))
    .duration(20*4)
    .EUt(16)

  event.recipes.gtceu.assembler("cover_fluix_covered_cable")
    .itemInputs(Item.of("ae2:fluix_covered_cable", 1))
    .inputFluids(Fluid.of("gtceu:redstone_glowstone_mixture", 144/2))
    .itemOutputs(Item.of("ae2:fluix_smart_cable", 1))
    .duration(20*3)
    .EUt(24)

  // chemical bath dyeing recipes, they use 2x less dyes than crafting
  const getAllColoredCableIds = cableType => {
    const cables = Ingredient.of(`#ae2:${cableType}_cable`).itemIds
    cables.remove(`ae2:fluix_${cableType}_cable`)

    return cables
  }

  const makeDyeingRecipes = cableType => {
    const cableIds = getAllColoredCableIds(cableType)
    const colorRegex = new RegExp(`ae2:(\\w+)_${cableType}_cable`)
    const dyeAmount = cableType.endsWith("dense") ? 144/4 : 144/16

    cableIds.forEach(cable => {
      const color = cable.match(colorRegex)[1]
      const cableName = cable.split(":")[1]

      event.recipes.gtceu.chemical_bath(cableName)
        .itemInputs(Item.of(`ae2:fluix_${cableType}_cable`))
        .inputFluids(Fluid.of(`gtceu:${color}_dye`, dyeAmount))
        .itemOutputs(Item.of(cable))
        .duration(20)
        .EUt(7)
    })
  }

  const makeUndyeRecipe = cableType => {
    const cableRegex = new RegExp(`ae2:(?!fluix_)(\\w+)_${cableType}_cable`)

    event.recipes.gtceu.chemical_bath(`decolor_${cableType}_cable`)
      .itemInputs(Ingredient.of(cableRegex))
      .inputFluids(Fluid.of("gtceu:chlorine", 50))
      .itemOutputs(Item.of(`ae2:fluix_${cableType}_cable`))
      .duration(20*20)
      .EUt(2)
  }

  const cableTypes = ["glass", "covered", "covered_dense", "smart", "smart_dense"]
  cableTypes.forEach(cableType => makeDyeingRecipes(cableType))
  cableTypes.forEach(cableType => makeUndyeRecipe(cableType))
})
