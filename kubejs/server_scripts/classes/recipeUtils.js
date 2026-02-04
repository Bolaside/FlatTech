// priority: 10

const RecipeUtils = Object.freeze({
    /**
     * removes any key from the `record` that is not in any indice
     * of `keys`, because crafting recipes break if there are
     * excess keys... how cool. maybe useful for something else
     * @param {string[]} keys
     * @param {Record<string, any>} record
     */
    removeKeysNotInRecord: (keys, record) => {
        const validKeys = new Set();

        for (const char of keys.join("")) {
            validKeys.add(char);
        }

        for (const key in record) {
            if (Object.prototype.hasOwnProperty.call(record, key) && !validKeys.has(key)) {
                delete record[key];
            }
        }

        return record;
    },

    /**
     * @param {string[]} keys
     * @param {Record<string, any>} defaultRecord
     * @param {Record<string, any>} record
     */
    addDefaultKeys: (keys, defaultRecord, record) => {
        for (const key of keys.join("")) {
            record[key] = record[key] || defaultRecord[key];
        }

        return record;
    },

    /**
     * @param {ItemStack} item
     * @returns {ItemStack[]}
     */
    splitToStacks: item => {
        if (item.count <= 64) return [item];

        const stacks = [];
        let remaining = item.count;

        while (remaining > 0) {
            let stackSize = Math.min(remaining, 64);
            stacks.push(Item.of(item.id, stackSize));
            remaining -= stackSize;
        }

        return stacks;
    },

    /**
     * @param {number} voltage
     * @returns {VoltageName}
     */
    getVoltageName: voltage => {
        const index = GTValues.V.findIndex(v => voltage <= v);

        return index !== -1
            ? GTValues.VN[index]
            : GTValues.VN[GTValues.VN.length - 1];
    },
});
