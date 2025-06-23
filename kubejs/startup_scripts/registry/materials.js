// not sure if i wanna have all materials here but i'll sort it later ig
const $ToolProperty = Java.loadClass("com.gregtechceu.gtceu.api.data.chemical.material.properties.ToolProperty")

GTCEuStartupEvents.registry("gtceu:material", event => {
  const newTools = [
    GTToolType.SAW,
    GTToolType.FILE,
    GTToolType.WRENCH
  ]
  const drills = [
    GTToolType.DRILL_LV,
    GTToolType.DRILL_MV,
    GTToolType.DRILL_HV,
    GTToolType.DRILL_EV,
    GTToolType.DRILL_IV
  ]

  GTMaterials.Wood.addFlags(GTMaterialFlags.GENERATE_SPRING, GTMaterialFlags.GENERATE_SPRING_SMALL)
  GTMaterials.Stone.addFlags(GTMaterialFlags.GENERATE_SPRING, GTMaterialFlags.GENERATE_GEAR)

  if (GTMaterials.Wood.hasProperty(PropertyKey.TOOL)) {
    GTMaterials.Wood.getProperties().removeProperty(PropertyKey.TOOL)
  }

  GTMaterials.Wood.setProperty(
    PropertyKey.TOOL,
    new $ToolProperty(1, 1, 128, 1, newTools.concat(GTToolType.SOFT_MALLET))
  )
  GTMaterials.Stone.setProperty(
    PropertyKey.TOOL,
    new $ToolProperty(1.5, 2, 192, 1, newTools.concat(drills, GTToolType.HARD_HAMMER))
  )

  event.create("redstone_glowstone_mixture")
    .liquid(new GTFluidBuilder().temperature(850))
    .color(0xD9783F)
    .iconSet(GTMaterialIconSet.SHINY)
    .flags(GTMaterialFlags.DISABLE_DECOMPOSITION)
    .components("1x redstone", "1x glowstone")

  event.create("red_brass")
    .dust()
    .ingot()
    .liquid(new GTFluidBuilder().temperature(1025))
    .components("6x copper", "2x tin", "1x zinc")
    .color(0xC45649)
    .iconSet(GTMaterialIconSet.METALLIC)
    .flags(GTMaterialFlags.GENERATE_PLATE)
    .cableProperties(GTValues.V[GTValues.ULV], 1, 0, true)
})

GTCEuStartupEvents.materialModification(() => {
  // monifactory (monifactory)
  GTMaterials.Glowstone.setComponents("gold", "tricalcium_phosphate")
  GTMaterials.Glowstone.setFormula("AuCa3(PO4)2")
})
