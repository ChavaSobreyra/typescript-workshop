'use strict'

const aFieldIWantToBePrivate = Symbol('aFieldIWantToBePrivate')
const aMethodIWantToBePrivate = Symbol('aMethodIWantToBePrivate')
const anotherMethodIWantToBePrivate = Symbol('anotherMethodIWantToBePrivate')

class TurboEncabulator {
  constructor(properties) {
    this[aFieldIWantToBePrivate] = properties
  }

  [aMethodIWantToBePrivate](a, b) {
    return a / b
  }

  [anotherMethodIWantToBePrivate](a, b) {
    return a + b
  }
}
