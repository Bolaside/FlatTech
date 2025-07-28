// priority: 10

const RecipeUtils = {
  /**
   * removes any key from the `record` that is not in any indice
   * of `keys`, because crafting recipes break if there are
   * excess keys... how cool. maybe useful for something else
   * @param {Array<string>} keys 
   * @param {Record<string, any>} record
   */
  removeKeysNotInRecord: (keys, record) => {
    const validKeys = new Set()

    for (const char of keys.join("")) {
      validKeys.add(char)
    }

    for (const key in record) {
      if (Object.prototype.hasOwnProperty.call(record, key) && !validKeys.has(key)) {
        delete record[key]
      }
    }

    return record
  },

  /**
   * @param {Array<string>} keys
   * @param {Record<string, any>} defaultRecord
   * @param {Record<string, any>} record
   */
  addDefaultKeys: (keys, defaultRecord, record) => {
    for (const key of keys.join("")) {
      record[key] = record[key] || defaultRecord[key]
    }

    return record
  },

  /**
   * shorthand for replacing %s with a lowercase voltage
   * @param {string} id
   * @param {VoltageName} voltage
   */
  voltageId: (id, voltage) => {
    return id.replace("%s", voltage.toLowerCase())
  }
}
