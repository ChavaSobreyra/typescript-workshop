import orderPizza from './index'
import {Toppings, Pizza, DeliveryInstructions} from './index.types'
import Dominos from './pizzeria/dominos'
import PizzaHut from './pizzeria/pizza-hut'

const pizza: Pizza = {
  size: 16,
  toppings: [Toppings.ham, Toppings.peperoni],
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
