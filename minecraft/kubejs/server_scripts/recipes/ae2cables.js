ServerEvents.recipes(event => {
  const insulation = [
    Fluid.of("gtceu:rubber", GTValues.L),
    Fluid.of("gtceu:silicone_rubber", GTValues.L/2),
    Fluid.of("gtceu:styrene_butadiene_rubber", GTValues.L/4)
  ]

  event.remove({ id: /ae2:network\/cables/ })
  event.recipes.gtceu.wiremill("fluix_glass_cable")
    .itemInputs(Item.of("ae2:fluix_crystal"))
    .itemOutputs(Item.of("ae2:fluix_glass_cable", 4))
    .duration(20 * 5)
    .EUt(GTValues.VH[GTValues.ULV])

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
      .duration(20 * 5)
      .EUt(GTValues.VA[GTValues.ULV])
  })
 
  event.recipes.gtceu.mixer("redstone_glowstone_mixture")
    .inputFluids([
      Fluid.of("gtceu:glowstone", GTValues.L),
      Fluid.of("gtceu:redstone", GTValues.L)
    ])
    .outputFluids(Fluid.of("gtceu:redstone_glowstone_mixture", 288))
    .duration(20 * 4)
    .EUt(GTValues.VH[GTValues.LV])

  event.recipes.gtceu.assembler("cover_fluix_covered_cable")
    .itemInputs(Item.of("ae2:fluix_covered_cable"))
    .inputFluids(Fluid.of("gtceu:redstone_glowstone_mixture", GTValues.L/2))
    .itemOutputs(Item.of("ae2:fluix_smart_cable"))
    .duration(20 * 3)
    .EUt(GTValues.VA[GTValues.LV])

  /**
   * @param {CableType} cableType
   */
  const getAllColoredCableIds = cableType => {
    const cables = Ingredient.of(`#ae2:${cableType}_cable`).itemIds
    cables.remove(`ae2:fluix_${cableType}_cable`)

    return cables
  }

  /**
   * @param {string} cableId
   */
  const getCableColor = cableId => {
    const start = cableId.indexOf(":") + 1
    const end = cableId.indexOf("_")
    
    return cableId.substring(start, end)
  }

  /**
   * makes chemical bath dyeing recipes, they
   * use 2x less dyes than crafting
   * @param {CableType} cableType
   */
  const makeDyeRecipes = cableType => {
    const cableIds = getAllColoredCableIds(cableType)
    const dyeAmount = cableType.endsWith("dense") ? GTValues.L/4 : GTValues.L/16

    cableIds.forEach(cable => {
      const cableColor = getCableColor(cable)
      const cableName = cable.split(":")[1]

      event.recipes.gtceu.chemical_bath(cableName)
        .category(GTRecipeCategories.CHEM_DYES)
        .itemInputs(Ingredient.of(`#ae2:${cableType}_cable`))
        .inputFluids(Fluid.of(`gtceu:${cableColor}_dye`, dyeAmount))
        .itemOutputs(Item.of(cable))
        .duration(20)
        .EUt(GTValues.VA[GTValues.ULV])
    })
  }

  /**
   * @param {CableType} cableType
   */
  const makeUndyeRecipe = cableType => {
    event.recipes.gtceu.chemical_bath(`decolor_${cableType}_cable`)
      .category(GTRecipeCategories.CHEM_DYES)
      .itemInputs(Ingredient.of(`#ae2:${cableType}_cable`))
      .inputFluids(Fluid.of("gtceu:chlorine", 50))
      .itemOutputs(Item.of(`ae2:fluix_${cableType}_cable`))
      .duration(20 * 20)
      .EUt(2)
  }

  FTValues.ME_CABLE_TYPES.forEach(cableType => makeDyeRecipes(cableType))
  FTValues.ME_CABLE_TYPES.forEach(cableType => makeUndyeRecipe(cableType))
})
