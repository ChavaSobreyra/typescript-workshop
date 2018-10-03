<template>
  <div>
    {{ offer.advertiser.name }}
    <img :src="offer" alt="">
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import Offer from '@/interfaces/Offer'

@Component
export default class Home extends Vue {
  @Prop() public offer!: Offer

  private logo: string | undefined

  constructor() {
    super()
    this.logo = this.offer.advertiser.logo.medium
  }
}
</script>
