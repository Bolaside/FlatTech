BlockEvents.rightClicked(event => {
  const { player, block } = event
  if (!player.isCrouching()) return

  if (block.hasTag("minecraft:saplings")) {
    const { x, y, z } = block.pos
    const pos = [x, y, z].join(" ")

    block.blockState.block.advanceTree(event.level, block.pos, block.blockState, event.level.random)
    // summon 32 composter particles at the block in a 1.6^3 cube
    // cause apparently the radius is multiplied by 8
    event.server.runCommandSilent(`particle composter ${pos} 0.2 0.2 0.2 0.5 32 normal @a`)
  }
})
