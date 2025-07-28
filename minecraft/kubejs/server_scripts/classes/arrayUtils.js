// priority: 10

const ArrayUtils = {
  /**
   * flattens an array cause apparently `Array.flat()` is too hard
   * to add support for in kubejs :/
   * @template T
   * @param {NestedArray<T>} array
   * @returns {Array<T>}
   */
  flatten: array => {
    return array.reduce((result, item) => {
      return result.concat(Array.isArray(item) ? ArrayUtils.flatten(item) : item)
    }, [])
  }
}
