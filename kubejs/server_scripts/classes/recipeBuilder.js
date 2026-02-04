// priority: 10

const TOOL_MAP = {
    "W": "#forge:tools/wrenches",
    "M": "#forge:tools/mallets",
    "F": "#forge:tools/files",
    "S": "#forge:tools/saws",
    "H": "#forge:tools/hammers"
};

/**
 * @param {Internal.RecipesEventJS_} event
 */
const RecipeBuilder = event => {
    return Object.freeze({
        /**
         * creates a shaped crafting recipe with tools. used keys are W, M, F, S, H
         * for wrenches, mallets, files, saws and hammers respectively
         * @author vomiter, KonSola5, Bolaside
         * @param {OutputItem_} result
         * @param {string[]} pattern
         * @param {ItemMap} key
        */
        tooledCrafting: (result, pattern, key) => {
            return event.shaped(
                result,
                pattern,
                RecipeUtils.addDefaultKeys(pattern, TOOL_MAP, key)
            );
        },

        /**
         * @param {string | RegExp} id
         * @param {number} multiplier
         */
        setRecipeDuration: (id, duration) => {
            event.forEachRecipe({ id: id }, recipe => recipe.set("duration", duration));
        },

        /**
         * @param {string | RegExp} id
         * @param {number} multiplier
         */
        multiplyRecipeDuration: (id, multiplier) => {
            event.forEachRecipe({ id: id }, recipe => {
                recipe.set("duration", recipe.get("duration") * multiplier);
            });
        }
    });
};
