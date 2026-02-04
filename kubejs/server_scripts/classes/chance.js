// priority: 10

// now i don't need all these methods, i just wrote them
// for fun and in case i'll need it later =)

const Chance = Object.freeze({
    random: Utils.newRandom(Date.now()),
    /**
     * the normalized percentage multiplier for GregTech chances
     */
    GT_CHANCE_MULTI: 10000,

    /**
     * returns `true` with the given probability
     * @param {number} probability n ∈ [0; 1]
     * @returns {boolean}
     */
    roll: probability => Chance.random.nextFloat() < probability,

    /**
     * just wraps `Utils.nextInt` so i don't need to create a
     * `Internal.Random` every time i need a number
     * @param {number} min
     * @param {number} max
     * @returns {number} x ∈ [min; max]
     */
    randomInt: (min, max) => Chance.random.nextInt(min, max + 1),

    /**
     * returns a random element from an array
     * @template T
     * @param {T[]} array
     * @returns {T}
     */
    pick: array => array[Chance.randomInt(0, array.length - 1)],

    /**
     * returns `true` with a 1 in n chance
     * @param {number} n
     * @returns {boolean}
     */
    oneIn: n => Chance.randomInt(1, n) === 1,

    /**
     * returns an array of n random `boolean`s, each with the given probability
     * i hate kubejs
     * @param {number} probability
     * @param {number} n
     * @returns {boolean[]}
     */
    rolls: (probability, n) => {
        const rolls = [];

        for (let _ = 1; _ < n; _++) {
            rolls.push(Chance.roll(probability));
        }

        return rolls;
    },

    /**
     * returns a weighted random element from an array of weight objects
     * @template T
     * @param {WeightedObject<T>[]} weightedArray
     * @returns {T?}
     */
    weightedPick: weightedArray => {
        const totalWeight = weightedArray.reduce((sum, obj) => sum + obj.weight, 0);
        let r = Math.random() * totalWeight;

        for (const obj of weightedArray) {
            if (r < obj.weight) return obj.item;
            r -= obj.weight;
        }

        return null;
    },

    /**
     * convert a normalized probability number to a GT chance number
     * @param {number} chance
     */
    toGT: chance => chance * Chance.GT_CHANCE_MULTI
});
