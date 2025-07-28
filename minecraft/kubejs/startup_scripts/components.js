GTCEuStartupEvents.craftingComponents(event => {
  /**
   * @type {Record<VoltageName, ComponentApplierFunction>}
  */
  const componentApplier = {}

  FTValues.VN.forEach(voltage => {
    /**
     * @param {Record<ComponentName, InputItem_>} componentMap
     */
    componentApplier[voltage] = componentMap => {
      for (let component in componentMap) {
        event.setItem(
          CraftingComponent[component],
          GTValues[voltage],
          componentMap[component]
        )
      }
    }
  })

  componentApplier.ULV({
    CABLE: "gtceu:lead_single_cable",
    CABLE_DOUBLE: "gtceu:lead_double_cable",
    CABLE_QUAD: "gtceu:lead_quadruple_cable",
    CABLE_OCT: "gtceu:lead_octal_cable",
    CABLE_HEX: "gtceu:lead_hex_cable",
    MOTOR: "ulvcovm:ulv_electric_motor",
    PISTON: "ulvcovm:ulv_electric_piston",
    PUMP: "ulvcovm:ulv_electric_pump",
    CONVEYOR: "ulvcovm:ulv_conveyor_module",
    ROBOT_ARM: "ulvcovm:ulv_robot_arm",
    ROTOR: "gtceu:copper_rotor"
  })
})
