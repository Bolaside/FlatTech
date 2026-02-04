JEIEvents.hideItems(event => {
  const hiddenItems = [
    "gtceu:pump_hatch",
    "gtceu:pump_deck",
    "gtceu:primitive_blast_furnace",
    "gtceu:primitive_pump",
    /gtceu:(?!lv).*_muffler_hatch/, // every non-LV muffler

    /gtmthings:.*wireless.*/,

    /ae2:facade/
  ]

  hiddenItems.forEach(item => event.hide(item))
})
