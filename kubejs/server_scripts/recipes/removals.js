// priority: 100
// recipe removals that don't belong in a certain category

ServerEvents.recipes(event => {
    event.remove({ output: /gtceu:.*solar_panel/ });
    event.remove({ output: "expatternprovider:silicon_block" });
    event.remove({ not: { type: "gtceu:chemical_bath" }, output: "minecraft:paper" });

    event.remove({ type: "ae2:inscriber" });
    event.remove({ type: "ae2:charger" });
    event.remove({ type: "expatternprovider:circuit_cutter" });
    event.remove({ type: "gtceu:chemical_bath", output: "gtceu:silicon_ingot" });

    event.remove({ id: /ae2:network\/(cells|parts|crafting|blocks)\/.*/ });
    event.remove({ id: /ae2.*:.*glass/ });
    event.remove({ id: /expatternprovider:(?!.*(_part|_pat)$)/ });
    event.remove({ id: /ftb(quests|filtersystem):.*/ });
    event.remove({ id: /tempad:.*/ });
});

ServerEvents.tags("item", event => {
    event.removeAllTagsFrom("expatternprovider:silicon_block");
});
