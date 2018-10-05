interface Pizza {
  size: number
  toppings: string[]
  stuffedCrust: boolean
}

function orderPizza(pizza, deliveryAddress: string) {
  /**
   * At runtime, the code below would cause a
   * "Cannot read property 'pepperoni' of undefined" error
   * Try assigning the Pizza type to the pizza argument
   */
  if (pizza.options.toppings) {
    // add pepperoni
  }
}

/**
 * TODO: required args and feedback
 */

const pizzaReceipt = orderPizza({
  topppings: ['pepperoni'],
  size: 16
})
