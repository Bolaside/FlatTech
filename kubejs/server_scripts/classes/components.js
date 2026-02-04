// priority: 10

const Components = Object.freeze({
    /**
     * @param {ComponentName | "HERMETIC_CASING"} componentName
     * @param {Voltage} voltage
     * @returns {ItemStack?}
     */
    get: (componentName, voltage) => {
        if (voltage === GTValues.ULV) return FTValues.ULVComponents[componentName];
        if (componentName === "HERMETIC_CASING") {
            return Item.of(`gtceu:${GTValues.VN[voltage].toLowerCase()}_hermetic_casing`);
        }

        /**
         * @type {ItemStack | MaterialEntry_} can also be a tagkey but idk the type for that
         */
        const component = GTCraftingComponents[componentName].get(voltage);

        return component instanceof MaterialEntry
            ? Materials.get(component.tagPrefix(), component.material())
            : component;
    }
});
