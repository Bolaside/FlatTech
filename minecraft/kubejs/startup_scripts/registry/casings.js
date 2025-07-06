StartupEvents.registry("block", event => {
  const createCasing = name => event.create(`${name}_casing`)
    .soundType(SoundType.METAL)
    .resistance(6)
    .hardness(5)
    .tagBlock("forge:mineable/wrench")
    .requiresTool(true)
    .textureAll(`kubejs:block/casings/${name}_casing`)
  
  createCasing("ferrolead")
})
