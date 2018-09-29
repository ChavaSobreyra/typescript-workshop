export interface Offer {
    firstName: string
    lastName: string
    email: string
    phone?: string
}

export interface OffersState {
    offers?: Offer
    error: boolean
}
