ServerEvents.recipes(event => {
    // shoutout to MinerRisko
    event.shaped("gtceu:mv_super_chest", ["CPC", "PcP", "CFC"], {
        "C": Components.get("CIRCUIT", GTValues.MV),
        "P": Components.get("PLATE", GTValues.MV),
        "c": "gtceu:aluminium_crate",
        "F": Components.get("FIELD_GENERATOR", GTValues.ULV)
    }).id("gtceu:shaped/super_chest_mv");

    event.shaped("gtceu:mv_super_tank", ["CFC", "PcP", "CpC"], {
        "C": Components.get("CIRCUIT", GTValues.MV),
        "F": Components.get("FIELD_GENERATOR", GTValues.ULV),
        "P": Components.get("PLATE", GTValues.MV),
        "c": Components.get("HERMETIC_CASING", GTValues.MV),
        "p": Components.get("PUMP", GTValues.MV)
    }).id("gtceu:shaped/super_tank_mv");
});
