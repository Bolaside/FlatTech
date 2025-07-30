// priority: 10

const TOOL_MAP = {
  "W": "#forge:tools/wrenches",
  "M": "#forge:tools/mallets",
  "F": "#forge:tools/files",
  "S": "#forge:tools/saws",
  "H": "#forge:tools/hammers"
}

/**
 * @param {Internal.RecipesEventJS_} event
 */
const RecipeBuilder = event => {
  return {
    /**
     * creates a shaped crafting recipe with tools. used keys are W, M, F, S, H
     * for wrenches, mallets, files, saws and hammers respectively
     * @author vomiter, KonSola5, Bolaside
     * @param {OutputItem_} output 
     * @param {Array<string>} pattern 
     * @param {ItemMap} itemMap 
    */
    tooledCrafting: (output, pattern, itemMap) => {
      return event.shaped(output, pattern, RecipeUtils.addDefaultKeys(
        pattern, TOOL_MAP, itemMap
      ))
    },
  }
}
