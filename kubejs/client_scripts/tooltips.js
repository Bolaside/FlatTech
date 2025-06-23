ItemEvents.tooltip(event => {
  const basicText = text => Text.of(`§7${text}`).italic(false)
  
  event.add("kubejs:cobble", basicText("Just one cobble. Found in dirt"))
  event.add("kubejs:bedrock_ore_extractor", basicText("Extracts basic metals from the indestructible rock layer"))
  
  event.add("kubejs:empty_squeezer_mold", basicText("Raw plate to make squeezer molds"))
  event.add("kubejs:sieve_squeezer_mold", basicText("Squeezer shape for sieving blocks (no, not the Ex-Nihilo way)"))
  event.add("kubejs:plank_squeezer_mold", basicText("Squeezer shape for making planks"))
})
