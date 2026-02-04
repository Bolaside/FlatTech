BlockEvents.rightClicked("minecraft:dirt", event => {
    const { block, player } = event;
    if (!player.crouching || player.mainHandItem !== Item.empty) return;
    if (!Chance.oneIn(10)) return;

    const dropAmount = Chance.randomInt(1, 4);
    block.popItemFromFace(Item.of("kubejs:cobble", dropAmount), Direction.UP);

    if (Chance.oneIn(2000)) {
        block.popItemFromFace(Item.of("minecraft:coarse_dirt"), Direction.UP);
        block.set("minecraft:air");
    }
});
