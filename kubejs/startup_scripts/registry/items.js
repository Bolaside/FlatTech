// tooltips are done in client_scripts/tooltips.js
StartupEvents.registry("item", event => {
    /**
     * shorthand to group stuff
     * @param {string | string[]} items
     * @returns {Internal.BasicItemJS$Builder | Internal.BasicItemJS$Builder[]}
     */
    const create = items => {
        return Array.isArray(items)
            ? items.map(item => event.create(item))
            : event.create(items);
    };

    // cobble (cobble)
    create("cobble"); // <- cobble

    create("bedrock_ore_extractor").unstackable();

    create(["empty", "sieve", "plank"].map(id => `${id}_squeezer_mold`));
    create("ulv_field_generator");

    create("blank_press");

    // bedrock ore drops
    create([
        "ferrous_mineral", "hematite_redstone_mix", "galena_sphalerite_blend",
        "cupriferous_aggregate", "cassiterite_impurities"
    ]);

    // circuits
    create(["redstone_circuit_board", "redstone_printed_circuit_board", "redstone_circuit"]);

    // ae2
    create("complex_card");
});
