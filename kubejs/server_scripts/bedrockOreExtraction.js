const playerLastClickedPosition = {};
const playerLastClickedTime = {};

const BEDROCK_ORE_DROPS = [
    "kubejs:ferrous_mineral",
    "kubejs:cupriferous_aggregate",
    "kubejs:galena_sphalerite_blend",
    "kubejs:hematite_redstone_mix",
    "kubejs:cassiterite_impurities"
];
const EXTRACTING_INTERVAL = 20 * 2;
const MAX_ORE_DROP_MULTI = 4;
const MAX_ORE_DROPS = 2;

BlockEvents.leftClicked(event => {
    const { block, player, server } = event;
    if (player.creative || block.id !== "minecraft:bedrock") return;
    if (player.mainHandItem.id !== "kubejs:bedrock_ore_extractor") return;

    const playerHash = player.uuid.hashCode();
    const blockPositionHash = block.pos.hashCode();

    const popRandomBedrockOre = () => {
        const items = [
            Item.of(Chance.pick(BEDROCK_ORE_DROPS), Chance.randomInt(1, MAX_ORE_DROP_MULTI)),
            Item.of("kubejs:cobble", Chance.randomInt(1, MAX_ORE_DROP_MULTI * 2))
        ];

        for (let item of items) {
            block.popItemFromFace(item, Direction.UP);
        }
    };

    if (playerLastClickedPosition[playerHash] == blockPositionHash) {
        delete playerLastClickedPosition[playerHash];
    } else {
        playerLastClickedPosition[playerHash] = blockPositionHash;
    }

    if (isNaN(playerLastClickedPosition[playerHash])) return;

    const checkExtractingEvent = server.scheduleRepeatingInTicks(EXTRACTING_INTERVAL, () => {
        const lastClickedHashChanged = playerLastClickedPosition[playerHash] !== blockPositionHash;
        const holdingOreExtractor = player.mainHandItem.id === "kubejs:bedrock_ore_extractor";

        if (lastClickedHashChanged || !holdingOreExtractor || !player.isMiningBlock()) {
            checkExtractingEvent.clear();
            delete checkExtractingEvent;
            return;
        }
        if (server.tickCount - playerLastClickedTime[playerHash] < EXTRACTING_INTERVAL) return;

        // underscore yay
        for (let _ = 0; _ <= Chance.randomInt(1, MAX_ORE_DROPS); _++) {
            popRandomBedrockOre();
        }

        playerLastClickedTime[playerHash] = server.tickCount;
    });
});
