ServerEvents.recipes(event => {
    event.shaped("4x minecraft:ladder", ["S S", "SPS", "S S"], {
        "S": "#forge:rods/wooden",
        "P": Ingredient.of(["minecraft:oak_planks", "gtceu:rubber_planks"])
    }).id("quark:building/crafting/oak_ladder");

    event.replaceInput(
        { id: "quark:building/crafting/iron_plate" },
        "minecraft:iron_ingot",
        "gtceu:iron_plate"
    );
});
