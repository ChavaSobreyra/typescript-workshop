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
 * The call to order pizza below is wrong. Your IDE gives you instand feedback about
 * that, and also gives you useful contextual information as you fix the problem
 */

const pizzaReceipt = orderPizza({
  topppings: ['pepperoni'],
  size: 16
})
