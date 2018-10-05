import {Pizza, Pizzeria} from '@/interfaces/index.types'

class PizzaHut implements Pizzeria {
  private readonly name: string = `PizzaHut`
  private readonly price: number = 11.2
  private readonly driver: string = 'Christian Subaru Alvarez'

  public placeOrder(pizza: Pizza) {
    const estimatedWait = pizza.size >= 12 ? 45 : 30
    return {
      name: this.name,
      price: this.price,
      driver: this.driver,
      estimatedWait
    }
  }
}

export default PizzaHut
