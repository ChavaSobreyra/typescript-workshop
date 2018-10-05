import {Pizza, DeliveryInstructions, Receipt, Pizzeria} from './interfaces/index.types'

function orderPizza(pizza: Pizza, provider: Pizzeria, deliveryInstructions: DeliveryInstructions): Receipt {
  const placeOrderSummary = provider.placeOrder(pizza)

  return {
    ...placeOrderSummary,
    orderSummary: {
      pizza,
      deliveryInstructions,
    }
  }
}

export default orderPizza
