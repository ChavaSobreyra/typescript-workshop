/**
 * As a developer I would like to create an ordering pizza system.
 *
 * To do the ordering pizza system we will create a function that:
 *
 * 1. Accepts:
 *    - A pizza object with the pizza information (size, toppings, stuffedCrust),
 *    - A provider that will be a class instance with a placeOrder method that accept the pizza object as a param;
 *      this provider implements an interface with the placeOrder method
 *    - A delivery instructions object with the information (address, deliveryTo, notes)
 * 2. Returns:
 *    - name, price, driver, estimatedWait (that will be coming from the placeOrder method of the provider)
 *    - orderSummary (pizza, deliveryInstructions)
 *
 * Notes:
 *    The estimatedWait will be calculate like this:
 *        - Domino's: estimatedWait = pizza.size >= 14 ? 45 : 30
 *        - PizzaHut: estimatedWait = pizza.size >= 12 ? 45 : 30
 */

import orderPizza from '../src/index'
import {DeliveryInstructions, Pizza, Toppings} from '../src/interfaces/index.types'
import Dominos from '../src/providers/dominos'
import PizzaHut from '../src/providers/pizza-hut'

const pizza: Pizza = {
  size: 16,
  toppings: [Toppings.ham, Toppings.peperoni, Toppings.sausage, Toppings.pineapple],
  stuffedCrust: false,
}
const deliveryInstructions: DeliveryInstructions = {
  address: '6410 Main St Apt 801, Miami Lakes, 33019',
  deliveryTo: 'Chris Doe',
  notes: 'Gate Code 6822'
}

describe('order a pizza', () => {
  it('place a pizza order from Domino\'s', () => {
    const provider = new Dominos()
    const receipt = orderPizza(pizza, provider, deliveryInstructions)

    expect(receipt).toEqual({
      name: 'Domino\'s',
      price: 12.55,
      driver: 'Jorge Bike Vera',
      estimatedWait: 45,
      orderSummary: {
        pizza,
        deliveryInstructions,
      }
    })
  })

  it('place a pizza order from PizzaHut', () => {
    const provider = new PizzaHut()
    const receipt = orderPizza(pizza, provider, deliveryInstructions)

    expect(receipt).toEqual({
      name: 'PizzaHut',
      price: 11.2,
      driver: 'Christian Subaru Alvarez',
      estimatedWait: 45,
      orderSummary: {
        pizza,
        deliveryInstructions,
      }
    })
  })
})
