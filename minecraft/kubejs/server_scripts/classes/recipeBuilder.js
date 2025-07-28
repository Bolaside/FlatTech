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
    
    /**
     * creates a crafting recipe for every (or one) voltage provided
     * using `GTCraftingComponent`s and `string`s
     * @param {ComponentRecipe} componentRecipe
     */
    componentCrafting: componentRecipe => {
      componentRecipe.voltages.forEach(voltage => {
        const itemMap = {}

        for (let key in componentRecipe.itemMap) {
          let value = componentRecipe.itemMap[key]

          // if it's not a string then it's a `GTCraftingComponent`,
          // so get the item id based on the voltage
          itemMap[key] = typeof value === "string"
            ? RecipeUtils.voltageId(value, voltage)
            : RecipeBuilder.getComponent(GTValues[voltage], value)
        }

        const recipe = event.shaped(
          RecipeUtils.voltageId(componentRecipe.baseId, voltage),
          componentRecipe.pattern,
          itemMap
        )

        if (componentRecipe.recipeBaseId) {
          recipe.id(RecipeUtils.voltageId(componentRecipe.recipeBaseId, voltage))
        }
      })
    }
  }
}

/**
 * returns a component based on tier
 * @param {number} voltageIndex 
 * @param {GTCraftingComponents_} component 
 */
RecipeBuilder.getComponent = (voltageIndex, component) => {
  return component.get(voltageIndex)
}

/**
 * maps every component in the map to a voltage tier
 * i hate kubejs for not supporting `Object.entries`
 * @param {number} voltageIndex 
 * @param {ItemMap} itemMap 
*/
RecipeBuilder.componentMap = (voltageIndex, itemMap) => {
  const newMap = {}
 
  for (const key in itemMap) {
    if (Object.prototype.hasOwnProperty.call(itemMap, key)) {
       newMap[key] = RecipeBuilder.getComponent(voltageIndex, itemMap[key])
    }
  }
  
  return newMap
}
