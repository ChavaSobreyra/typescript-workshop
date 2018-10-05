import {Pizza, Pizzeria} from '../index.types'

class Dominos implements Pizzeria {
  private readonly name = `Domino's`
  private readonly phoneNumber = 561738191
  private readonly offersDelivery = true
  private readonly price: number
  private readonly driver: string

  constructor(price: number, driver: string) {
    this.price = price
    this.driver = driver
  }

  public placeOrder(pizza: Pizza) {
    return {
      price: this.price,
      driver: this.driver
    }
  }
}

export default Dominos
