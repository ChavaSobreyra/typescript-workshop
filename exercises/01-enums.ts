const grossPizza = {
  toppings: ['peppers', 'onions', 'pepperoni', 'pineapple']
}

/**
 * I want to make sure the only possible toppings are
 * - peppers
 * - onions
 * - pepperoni
 *
 * But NEVER pineapple
 */

interface GoodPizza {
  toppings: Toppings[]
}

/**
 * We can accomplish this using enums!
 */

enum Toppings {
  pepperoni,
  peppers,
  onions
}

const pizza: GoodPizza = {
  toppings: [Toppings.pepperoni, Toppings.peppers, Toppings.onions, Toppings.pineapple]
}
