ItemEvents.modification(event => {
    event.modify("minecraft:ender_pearl", item => {
        item.setMaxStackSize(64);
    });
});
