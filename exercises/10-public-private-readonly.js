'use strict'

const rollup = require('../rollup')
const { getLoantekProductDimensions } = require('./loantek-product')
const { first } = require('lodash')

const aFieldIWantToBePrivate = Symbol('aFieldIWantToBePrivate')
const aMethodIWantToBePrivate = Symbol('aMethodIWantToBePrivate')

class TurboEncabulator {
  constructor(properties) {
    const points = (properties.points)
  }

  public [getLoanPurposeType](productId) {
    return rollup.getProductTypeById(productId) === 'purchase' ? 'Purchase' : 'Refinance'
  }

  public [generateDimensionsForProducts](products) {
    let productFamilyTypes = []
    let productTermTypes = []
    let includeInterestOnly = false

    products.forEach(produid => {
      const info = rollup.getProductById(produid)
      if (info) {
        productFamilyTypes.push(this[getProductFamilyType](info))
        productTermTypes = productTermTypes.concat(this[getProductTermTypes](info))
        includeInterestOnly = includeInterestOnly || Number(info.isInterestOnly) === 1
      }
    })

    productFamilyTypes = [...new Set(productFamilyTypes)]
    productTermTypes = [...new Set(productTermTypes)]

    return { productFamilyTypes, includeInterestOnly, productTermTypes }
  }

  public [getProductFamilyType]({ IsFHA, IsVA }) {
    if (Number(IsFHA) === 1) return 'FHA'
    if (Number(IsVA) === 1) return 'VA'

    return 'CONVENTIONAL'
  }

  public [mapPoints](points) {
    switch (points) {
      case 'Zero':
        return 0 // ClosestToZeroWithFee
      case 'ZeroToOne':
        return 1 // ClosestTo01
      case 'OneToTwo':
        return 2 // ClosestTo02
      case 'All':
      default:
        return null // NotSet
    }
  }

  public [getProductTermTypes]({ Prod_uid }) {
    return getLoantekProductDimensions(Prod_uid).map(p => p.ProductTermType)
  }
}

const veteranTypeMap = new Map([
  ['NoMilitaryService', 'NotApplicable'],
  ['RegularMilitary', 'RegularMilitary'],
  ['Reserves', 'Reserves'],
  ['NationalGuard', 'NationalGuard'],
  ['MilitarySpouse', 'SpouseOfRegularMilitary'],
  ['ReserveSpouse', 'SpouseOfReserveMilitary']
])

module.exports = LoantekForm
