export default interface Offer {
    apr: number
    date: string
    estimatedPayment: number
    fees: Fee[]
    advertiser: Advertiser
    lockDays: number
    id: string // offerId
    rate: number
    isPaid: boolean
    product: {
      isJumbo: boolean
      isFHA: boolean
      isVA: boolean
      isInterestOnly: boolean
      id: number
      loanType: string // purchase
      name: string // 30 yr fixed
      type: string // fixed
      term: number // 30 year
      points: number,
    }
    tracking: {
      link: string // what is today called 'cpc' or 'ep' link
      pixel: string, // comes back from v4, used in front end
    }
    meta: {
      source: Source
      sortIndex: number,
    }
  }

export enum ProductType {
    FIXED = 'fixed',
    ADJUSTIBLE = 'adjustible',
  }
export enum LoanType {
    PURCHASE = 'purchase',
    REFINANCE = 'refinance',
  }

export interface Advertiser {
    name: string
    id: number
    city: string
    reviews:
      | object
      | {
          averageRating: number
          count: number,
        }
    email: string
    features: Feature[]
    hoursOfOperation: string
    lenderCredit?: number
    logo: {
      small?: string
      medium?: string
      large?: string,
    }
    nmlsLicense: string
    note: {
      isHyperLinkable: boolean
      text: string,
    }
phone: string
seoName: string
stateLicense: string
specials: string[]
state: string
description: string // was statement
surveyInstitutionId: number
  }

export interface Fee {
    description?: string
    amount: number
  }

export enum Feature {
    THREE_YEARS = '3+ Years on Bankrate',
    FIVE_YEARS = '5+ Years on Bankrate',
    TEN_YEARS = '10+ Years on Bankrate',
    FIFTEEN_YEARS = '15+ Years on Bankrate',
    BBB = 'Better Business Bureau Accredited',
    EXTENDED_HOURS = 'Extended Support Hours',
    RATE_LOCK = 'Immediate Rate Lock',
    LOW_FEES = 'Low Fees',
    LOCAL_LENDER = 'Local Lender',
    NATIONAL_LENDER = 'National Lender',
    GOVERNMENT_LOANS = 'Government Loans Available',
    FHA_APPROVED = 'FHA Approved Lender',
    VA_APPROVED = 'VA Approved Lender',
    REFINANCE_PROGRAM = 'Home Affordable Refinance Program',
    EQUAL_HOUSING = 'Equal Housing Lender',
  }

export enum Source {
    V4 = 'v4',
    LOANTEK = 'loantek',
  }

