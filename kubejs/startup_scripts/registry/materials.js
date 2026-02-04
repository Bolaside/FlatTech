/**
 * GTM's general formatting:
 *  .ingot().fluid().ore() <--- types
 *  .color().iconSet() <--- appearance
 *  .flags() <--- special generation
 *  .element() / .components() <--- composition
 *  .toolStats() <---
 *  .oreByProducts() | additional properties
 *  ... <---
 *  .blastTemp() <--- blast temperature
 *
 * some of the defaults:
 * - iconSet: `GTMaterialIconSet.DULL`
 * - color: 0xFFFFFF
 */
GTCEuStartupEvents.registry("gtceu:material", event => {
    event.create("redstone_glowstone_mixture")
        .liquid(new GTFluidBuilder().temperature(850))
        .color(0xD9783F).iconSet(GTMaterialIconSet.SHINY)
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION)
        .components("1x redstone", "1x glowstone");
});
