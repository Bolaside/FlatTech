// priority: 20

const Materials = Object.freeze({
    // shorthands for code consistency purposes
    get: ChemicalHelper["get(com.gregtechceu.gtceu.api.data.tag.TagPrefix,com.gregtechceu.gtceu.api.data.chemical.material.Material)"],

    /**
     * @param {Material} material
     */
    getDust: material => Materials.get(TagPrefix.dust, material),

    /**
     * @param {Material} material
     * @param {number?} amount
     */
    getIngot: (material, amount) => ChemicalHelper.getIngot(material, (amount || 1) * GTValues.M),

    /**
     * @param {Material} material
     * @param {number?} amount
     */
    getIngotOrDust: (material, amount) => ChemicalHelper.getIngotOrDust(
        material, (amount ?? 1) * GTValues.M
    ),

    /**
     * @param {number} worstFluidAmount
     */
    getEtchingFluids: worstFluidAmount => [
        Fluid.of("gtceu:sodium_persulfate", worstFluidAmount),
        Fluid.of("gtceu:iron_iii_chloride", worstFluidAmount / 2),
    ],
});
