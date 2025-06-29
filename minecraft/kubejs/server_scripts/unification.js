const MOD_PRIORITIES = ["minecraft", "kubejs", "gtceu", "create", "createaddition"]
const TAG_PREFIXES = [
  "forge:nuggets/", "forge:dusts/", "forge:gears/", "forge:gems/", "forge:ingots/",
  "forge:raw_materials/", "forge:ores/", "forge:plates/", "forge:rods/", "forge:wires/",
  "forge:storage_blocks/", "forge:storage_blocks/raw_"
]
const UNIFIED_MATERIALS = [
  "aluminum", "apatite", "brass", "bronze", "charcoal", "cinnabar", "coal", "coal_coke",
  "cobalt", "copper", "diamond", "electrum", "emerald", "gold", "graphite", "invar", "iridium",
  "iron", "lapis", "lead", "netherite", "nickel", "obsidian", "osmium", "platinum",
  "potassium_nitrate", "ruby", "sapphire", "silver", "steel", "sulfur", "tin", "tungsten",
  "uranium", "zinc"
]

ServerEvents.recipes(event => {
  const preferredItemsForTags = new Map()
  const itemToPreferredOutputMap = new Map()

  const getPreferredItemFromTag = tag => {
    let currentPriority = Infinity
    let preferredItem = null

    const itemsInTag = Ingredient.of(tag).itemIds
    if (itemsInTag.empty) {
      return null
    }

    itemsInTag.forEach(id => {
      const modId = id.split(":")[0]
      const modIndex = MOD_PRIORITIES.indexOf(modId)

      if (modIndex >= 0 && modIndex < currentPriority) {
        currentPriority = modIndex
        preferredItem = id
      }
    })

    if (preferredItem === null) {
      preferredItem = itemsInTag[0]
    }

    return preferredItem
  }

  if (preferredItemsForTags.size === 0) {
    // wtf?
    TAG_PREFIXES.forEach(prefix => UNIFIED_MATERIALS.forEach(material => {
      const tag = `#${prefix}${material}`
      const preferredItem = getPreferredItemFromTag(tag)
      if (!preferredItem) return

      preferredItemsForTags.set(tag, preferredItem)

      Ingredient.of(tag).itemIds.forEach(id => {
        if (id === preferredItem) return
        itemToPreferredOutputMap.set(id, preferredItem)
      })
    }))
  }

  preferredItemsForTags.forEach((preferredItem, tag) => {
    event.replaceInput({ input: tag }, tag, preferredItem)
  })

  itemToPreferredOutputMap.forEach((preferredItem, tag) => {
    event.replaceOutput({ output: tag }, tag, preferredItem)
  })
})

ServerEvents.loaded(event => {
  // temporary (?) workaround
  event.server.runCommandSilent("/reload")
})
