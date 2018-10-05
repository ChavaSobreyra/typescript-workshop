export enum Toppings {ham, peperoni, sausage, pineapple}

export interface Pizza {
  size: number,
  toppings: Toppings[],
  stuffedCrust: boolean,
}

export interface DeliveryInstructions {
  address: string,
  deliveryTo: string,
  notes: string
}

export interface Receipt {
  price: number,
  driver: string,
  estimatedWait: number,
  orderSummary: {
    pizza: Pizza,
    deliveryInstructions: DeliveryInstructions,
  }
}

export interface Pizzeria {
  placeOrder(pizza: Pizza): {
    name: string,
    price: number,
    driver: string,
    estimatedWait: number
  }
}
