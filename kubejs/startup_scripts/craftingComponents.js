GTCEuStartupEvents.craftingComponents(event => {
  const setUlvComponent = (component, item) => event.modifyItem(component, GTValues.ULV, item)

  setUlvComponent(CraftingComponent.CABLE, Item.of("gtceu:lead_single_cable"))
  setUlvComponent(CraftingComponent.CABLE_DOUBLE, Item.of("gtceu:lead_double_cable"))
  setUlvComponent(CraftingComponent.CABLE_QUAD, Item.of("gtceu:lead_quadruple_cable"))
  setUlvComponent(CraftingComponent.CABLE_OCT, Item.of("gtceu:lead_octal_cable"))
  setUlvComponent(CraftingComponent.CABLE_HEX, Item.of("gtceu:lead_hex_cable"))

  setUlvComponent(CraftingComponent.MOTOR, Item.of("ulvcovm:ulv_electric_motor"))
  setUlvComponent(CraftingComponent.PISTON, Item.of("ulvcovm:ulv_electric_piston"))
  setUlvComponent(CraftingComponent.PUMP, Item.of("ulvcovm:ulv_electric_pump"))
  setUlvComponent(CraftingComponent.CONVEYOR, Item.of("ulvcovm:ulv_conveyor_module"))
  setUlvComponent(CraftingComponent.ROBOT_ARM, Item.of("ulvcovm:ulv_robot_arm"))

  setUlvComponent(CraftingComponent.ROTOR, Item.of("gtceu:copper_rotor"))
})
