import {Pizza, Pizzeria} from '../index.types'

class Dominos implements Pizzeria {
  private readonly name = 'Domino\'s'
  private readonly price: number = 12.55
  private readonly driver: string = 'Jorge Bike Vera'

  public placeOrder(pizza: Pizza) {
    const estimatedWait = pizza.size >= 14 ? 45 : 30
    return {
      name: this.name,
      price: this.price,
      driver: this.driver,
      estimatedWait
    }
  }
}

export default Dominos
