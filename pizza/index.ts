import {Pizza, DeliveryInstructions, Receipt, Pizzeria} from './index.types'

abstract class Pizzeriaa {
  private name: string
  private phoneNumber: number
  private offersDelivery: boolean
  private readonly price: number
  private readonly driver: string

  protected constructor(name: string, phoneNumber: number, offersDelivery: boolean, price: number, driver: string) {
    this.name = name
    this.phoneNumber = phoneNumber
    this.offersDelivery = offersDelivery
    this.price = price
    this.driver = driver
  }

  abstract placeOrder(pizza: Pizza): {
    price: number,
    driver: string
  }
}

function orderPizza(pizza: Pizza, provider: Pizzeria, deliveryInstructions: DeliveryInstructions): Receipt {
  const placeOrderSummary = provider.placeOrder(pizza)

  return {
    price: placeOrderSummary.price,
    driver: placeOrderSummary.driver,
    estimatedWait: 32,
    orderSummary: {
      pizza,
      deliveryInstructions,
    }
  }
}

export default orderPizza
