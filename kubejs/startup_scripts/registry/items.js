// tooltips are done in client_scripts/tooltips.js
StartupEvents.registry("item", event => {
  // cobble (cobble)
  event.create("cobble") // <- cobble

  event.create("bedrock_ore_extractor").unstackable()
  event.create("wooden_shears", "shears").maxDamage(32)

  event.create("empty_squeezer_mold")
  event.create("sieve_squeezer_mold")
  event.create("plank_squeezer_mold")

  event.create("ulv_field_generator")
})
