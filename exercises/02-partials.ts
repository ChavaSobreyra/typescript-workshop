interface Advertiser {
  // Comes from advertiser service
  id: number
  name: string
  logo: string

  // Comes from budget service
  hasBudget: boolean
}

/**
 * Sometimes in the process of building an object, we have parts of an object but are missing others.
 * fix the code below by indicating that partialAdvertiser is a Partial<Advertiser>
 */

const partialAdvertiser: Advertiser = {
  id: 1,
  name: 'Chava Dynamics Mortgage Ltd.',
  logo: 'http://bitly.com/98K8eH'
}
