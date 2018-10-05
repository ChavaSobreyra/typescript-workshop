import {Pizza, DeliveryInstructions, Receipt, Pizzeria} from './index.types'

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
