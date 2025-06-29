// things that i'll sort later:tm:
ServerEvents.recipes(event => {
  event.shaped("gtceu:mv_super_chest", ["CPC", "PcP", "CFC"], {
    "C": "#gtceu:circuits/mv",
    "P": "gtceu:aluminium_plate",
    "c": "gtceu:aluminium_crate",
    "F": "kubejs:ulv_field_generator"
  }).id("gtceu:shaped/super_chest_mv")

  event.shaped("gtceu:mv_super_tank", ["CFC", "PcP", "CpC"], {
    "C": "#gtceu:circuits/mv",
    "F": "kubejs:ulv_field_generator",
    "P": "gtceu:aluminium_plate",
    "c": "gtceu:mv_hermetic_casing",
    "p": "gtceu:mv_electric_pump"
  }).id("gtceu:shaped/super_tank_mv")
})
