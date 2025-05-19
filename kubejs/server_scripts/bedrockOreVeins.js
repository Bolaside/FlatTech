GTCEuServerEvents.bedrockOreVeins(event => {
  function addOreVein(veinId, weight, size, oreYield, materials) {
    event.add(`kubejs:overworld_bedrock_ore_vein_${veinId}`, vein => {
      vein.weight(weight)
        .size(size)
        .yield(oreYield[0], oreYield[1])
        .dimensions("minecraft:overworld")

      materials.forEach(([material, amount]) => {
        vein.material(material, amount)
      })

      vein.register()
    })
  }

  addOreVein("magnetite", 10, 3, [1, 3], [
    [GTMaterials.Magnetite, 5],
    [GTMaterials.VanadiumMagnetite, 2],
    [GTMaterials.Gold, 2],
    [GTMaterials.Chromium, 1]
  ])
  addOreVein("redstone", 10, 2, [2, 4], [
    [GTMaterials.Redstone, 3],
    [GTMaterials.Ruby, 2],
    [GTMaterials.Cinnabar, 1]
  ])
})
