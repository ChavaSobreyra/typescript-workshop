interface Pizza {
  size: number
  toppings: Toppings[]
  stuffedCrust: boolean
}

function orderPizza(pizza, deliveryAddress: string) {
  /**
   * At runtime, the code below would cause a
   * "Cannot read property 'pepperoni' of undefined" error
   * Try assigning the Pizza type to the pizza argument
   */
  if (pizza.options.pepperoni) {
    // add pepperoni
  }
}

/**
 * Without typescript, all arguments are assumed options
 * and so the function below would not be complaining about the missing argument.
 * Fix the problem below.
 */

const pizzaReceipt = orderPizza({
  topppings: ['pepperoni'],
  size: 16
})
