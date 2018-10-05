/**
 *  Assign types to the following variables
 */

const name: string = 'Chava'

const age = 30

const playsHockey = true

const getCheckingAccountBalance = () => 1000

const favoriteHockeyTeams = ['tampa bay lightning', 'san jose sharks']

/**
 * Complete the interface using the following types?
 */

const pizza: PizzaOptions = {
  size: 16,
  vendor: 'dominoes',
  stuffedCrust: false,
  preparedDate: 1538695335504
}

export interface PizzaOptions {
  size: number
}
