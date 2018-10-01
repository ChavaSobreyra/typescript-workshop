<template lang="pug">
  div
    div(v-for='offer in offers')
      Offer(:offer='offer')
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import Offer from '@/components/Offer.vue'
import OfferInterface from '@/interfaces/Offer'

@Component({
  components: {
    Offer,
  },
})
export default class Home extends Vue {
    public offers: OfferInterface[]

    @Prop()
    public msg!: string

    constructor() {
        super()
        this.offers = JSON.parse(OffersStub)
    }
}

// tslint:disable-next-line:max-line-length
const OffersStub = '[{"fees":[{"amount":0}],"apr":3.875,"date":"2018-09-28T04:00:00.000Z","estimatedPayment":1444,"advertiser":{"features":[],"specials":[],"name":"Infinity Mortgage Group","id":10443,"city":"Seattle","reviews":{},"email":"","hoursOfOperation":"","logo":{"small":"https://www.brimg.net/system/img/inst/10443_logo.gif","medium":"https://www.brimg.net/system/img/inst/10443_hires_logo.png","large":"https://www.brimg.net/system/img/inst/10443_hires_logo_2x.png"},"nmlsLicense":"35972","note":{"isHyperLinkable":false,"text":""},"phone":"","seoName":"","stateLicense":"MB-35972","state":"WA","description":"","surveyInstitutionId":23574},"lockDays":30,"id":"f3f338c6-570d-4178-977c-5024c6ddb1f3","rate":3.875,"isPaid":true,"product":{"isJumbo":false,"isFHA":false,"isVA":false,"isInterestOnly":false,"id":170,"name":"15 year fixed","loanType":"purchase","type":"fixed","points":0,"term":15},"tracking":{"link":"http://ep.bankrate.com/hlink_redirects/brm_cpc.aspx?e=DG%2Bz7T9Zk6qBMpuG7tFWJa38l90FfygEwj1wZbxzWUfa6Km%2B1ggo4EDM6KesC5mKxPeitfDMOOXU1HwCZSErks9VwSOWknxxFEbMNOlmDvNeRgSidiuSBPCTmjwohaag%2Bti66MIQgMkFDFuZvxk1qf8iCycSz3mRJJG45SvqLcrNyJNtIx4S%2BLi4LlJ7lkPxV4kXnuLL%2Bc7Krti5gXErE3DIOBOg%2BhvWaQfnVCxwRdtNe9uHR5mRi6zb6K8DcIrdZOFYsqRVP8PZHekQyKf4svhwEvvDtbG%2FZSMb5Bm7xDyDaakaziBSLwnPbZxlN7L0T0%2B2xrw%2BctcRRBO2KJrSW2Q1X8WWUTPw%2BubbOoNd%2FVxcYhnGqu1MTHtM%2FIlXFW1lrzcJw%2BWvmZogYrjgVhvV%2FsiThvd0gwvkUnveHnHbfpOCOmgoACZ8d3Ta22mDqQnfzyWX8yoyNQnA%2BiangH3rdIX57Xb%2F9j3Rojm6FQOvHlCVKAdoUNDIGNhfgfKHfmaz8YBANWDh4lIwZeUs5MfDCZ3RiOwo39Hveo4O58vGGS1sz8%2FF2ZaK4RBXifEb5lpdgz9bLrlYftxMCfdizO6ZveCgxXR%2BUuTlwglJuDUDEQQHdKgHv%2BU7qjhqRVu7r7FY70iumB9WCPtRGSZ6mr3prg%3D%3D&lead=1&adsetid=13316&pl=14&ul=14&cs=0&reqid=57919986-2554-40e1-97a8-2046b328ebe7","pixel":null},"meta":{"sortIndex":0,"source":"v4"}},{"fees":[{"amount":675}],"apr":4.176,"date":"2018-09-28T04:00:00.000Z","estimatedPayment":1469,"advertiser":{"features":["Better Business Bureau Accredited","National Lender","Government Loans Available"],"specials":[],"name":"ConsumerDirect Mortgage, a division of First Bank","id":8087,"city":"Seattle","reviews":{"averageRating":4.8,"count":876},"email":"","hoursOfOperation":"","logo":{"small":"https://www.brimg.net/system/img/inst/8087_logo.gif","medium":"https://www.brimg.net/system/img/inst/8087_hires_logo.png","large":"https://www.brimg.net/system/img/inst/8087_hires_logo_2x.png"},"nmlsLicense":"472433","note":{"isHyperLinkable":true,"text":"No Points No Games No Surprises! No Closing Cost Options!"},"phone":"","seoName":"ConsumerDirect Mortgage","stateLicense":"","state":"WA","description":"","surveyInstitutionId":18345},"lockDays":30,"id":"efa7623e-8bab-4924-bf9d-65c875f6dece","rate":4.125,"isPaid":true,"product":{"isJumbo":false,"isFHA":false,"isVA":false,"isInterestOnly":false,"id":170,"name":"15 year fixed","loanType":"purchase","type":"fixed","points":0,"term":15},"tracking":{"link":"http://ep.bankrate.com/hlink_redirects/brm_cpc.aspx?e=DG%2Bz7T9Zk6qBMpuG7tFWJa38l90FfygEwj1wZbxzWUfa6Km%2B1ggo4EDM6KesC5mKxPeitfDMOOXU1HwCZSErklmXJB7QcAn44Dnqh211pCZduH8RlXaIMVeGA60qAx2yyilHzFbWaR0nGwgpzkKj6eoiemxk%2Bv3TI4ZehK1L2K2fDt8dpgEmsU7Prvi3OBR%2BsFKSikhyhhoXTWHHkRZJBBWDRst01x%2FlSIR9ufSnPpjYIZOdew5D4NMzsNwLmMX%2FW8lV00YykXWPlsVQOl5o1My6JHkulGaoIa5kOKsljD4FeFnq11vXH%2Fu0pLarPafDOf%2F2cM2z5QdVUJt9CH%2FjoZ4mfSuJ5S5h3F5eJzf99x5xbNZH2%2FPt9nqfoXQdnMbkH3eepbodLL%2FDmxaRht4XS%2BS41AOFkINyIoCqL8BYtGdaYTac0gOHcN6viwsziQBVdZK1tK28YTJZnZmb4iVDRLw1rbK8Ba8vDnMvtPvxJCLFXeiHyA8YsBmOtavh6uhzFF5AeeGdtgxfIs1bz%2B%2BiSluFL%2BFmtm8IsaRfIPbZZRAwW1MjRREFFocNUhtYuUKrVpGQSLS0Bpcg6W18l1jQHdCjiouKySEwQn7fEWN2LmTS%2FRwtHBE8YsvtYJ8ctkOQZzzNwIUeUDYmLN18YXCRSw%3D%3D&lead=1&adsetid=4767&pl=14&ul=14&cs=0&reqid=57919986-2554-40e1-97a8-2046b328ebe7","pixel":null},"meta":{"sortIndex":7,"source":"v4"}}]'

</script>