const playerLastClickedPosition = {}
const playerLastClickedTime = {}

const BEDROCK_ORE_DROPS = [
  Item.of("gtceu:small_copper_dust", 3),
  Item.of("gtceu:copper_dust"),
  Item.of("gtceu:small_iron_dust", 2),
  Item.of("gtceu:iron_dust"),
  Item.of("gtceu:small_lead_dust"),
  Item.of("gtceu:lead_dust"),
  Item.of("gtceu:small_tin_dust", 2),
  Item.of("gtceu:tin_dust")
]
const EXTRACTING_INTERVAL = 20 * 2
const MAX_ORE_DROP_MULTI = 3

const togglePlayerPosition = (playerHash, blockPositionHash) => {
  if (playerLastClickedPosition[playerHash] == blockPositionHash) {
    delete playerLastClickedPosition[playerHash]
  } else {
    playerLastClickedPosition[playerHash] = blockPositionHash
  }
}

const popRandomBedrockOre = (block, random) => {
  const item = BEDROCK_ORE_DROPS[random.nextInt(BEDROCK_ORE_DROPS.length)].copy()
  item.count *= random.nextInt(1, MAX_ORE_DROP_MULTI)

  block.popItemFromFace(item, Direction.UP)
}

const startExtractingProcess = (event, playerHash, blockPositionHash) => {
  const { player, server, block } = event
  
  const random = Utils.newRandom(playerHash + blockPositionHash + player.age ** 2)
  const checkExtractingEvent = server.scheduleRepeatingInTicks(EXTRACTING_INTERVAL, () => {
    if (playerLastClickedPosition[playerHash] !== blockPositionHash) {
      checkExtractingEvent.clear()
      delete checkExtractingEvent
      return
    }
    if (server.tickCount - playerLastClickedTime[playerHash] < EXTRACTING_INTERVAL) return

    popRandomBedrockOre(block, random)
    playerLastClickedTime[playerHash] = server.tickCount
  })
}

BlockEvents.leftClicked(event => {
  const { block, player } = event
  if (player.creative || block.id !== "minecraft:bedrock") return
  if (player.mainHandItem.id !== "kubejs:bedrock_ore_extractor") return

  const playerHash = player.uuid.hashCode()
  const blockPositionHash = block.pos.hashCode()
  togglePlayerPosition(playerHash, blockPositionHash)

  if (isNaN(playerLastClickedPosition[playerHash])) return
  startExtractingProcess(event, playerHash, blockPositionHash)
})
