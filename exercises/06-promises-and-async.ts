/**
 * Why is the return type of the function below complaining?
 *
 * Because async function return promises!
 *
 * So technically, this function does not return a string -- it returns a promise which resolves a string
 * Update getOrderStatus's return type -- Promise<string>
 */

async function getOrderStatus(id: number): string {
  return fakeDb.get(id)
}

// Setup the fake DB
const fakeDb = new Map()
fakeDb.set(508, 'out for delivery')
fakeDb.set(509, 'in the oven')
