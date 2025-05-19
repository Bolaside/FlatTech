// not sure if i wanna have all materials here but i'll sort it later ig
GTCEuStartupEvents.registry("gtceu:material", event => {
  event.create("redstone_glowstone_mixture")
    .liquid(new GTFluidBuilder().temperature(850))
    .color(0xD9783F)
    .iconSet(GTMaterialIconSet.SHINY)
    .flags(GTMaterialFlags.DISABLE_DECOMPOSITION)
    .components("1x redstone", "1x glowstone")
})
