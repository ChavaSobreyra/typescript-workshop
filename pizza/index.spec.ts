import orderPizza from './index'
import { Toppings, Pizza, DeliveryInstructions, Pizzeria } from './index.types'
import Dominos from './pizzeria/dominos'

describe('order a pizza', () => {
  it('start ordering a pizza', () => {
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
    const provider = new Dominos(12.55, 'Jorge Vera (The Bike Guy)')

    const receipt = orderPizza(pizza, provider, deliveryInstructions)

    expect(receipt).toEqual({
      price: 12.55,
      driver: 'Jorge Vera (The Bike Guy)',
      estimatedWait: 32,
      orderSummary: {
        pizza,
        deliveryInstructions,
      }
    })
  })
})
