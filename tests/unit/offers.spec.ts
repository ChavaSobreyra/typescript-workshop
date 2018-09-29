import store from '@/store'

describe('store', () => {
  it('gets offers from the api and saves them in state', async () => {
    await store.dispatch('getOffers')

    expect(store.getters.offers.length).toBeGreaterThan(0)
  })
})

