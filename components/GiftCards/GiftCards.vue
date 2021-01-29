<template>
  <div>
    <v-tabs v-model="tab" background-color="transparent" grow>
      <v-tabs-slider color="#7abe8f" />
      <v-tab>Tango Cards</v-tab>
      <v-tab>Charity</v-tab>
    </v-tabs>
    <v-tabs-items v-model="tab">
      <v-tab-item>
        <div class="title">Chose your reward below.</div>
        <div class="tango-cards-wrapper">
          <GiftCard
            v-for="brand in giftCards.slice(0, 30)"
            :key="brand.brandKey"
            :brand-key="brand.brandKey"
            :brand-name="brand.brandName"
            :image="brand.imageUrls"
          />
        </div>
      </v-tab-item>
      <v-tab-item>
        <div class="tango-cards-wrapper">
          <GiftCard
            v-for="brand in donationCards.slice(0, 30)"
            :key="brand.brandKey"
            :brand-key="brand.brandKey"
            :brand-name="brand.brandName"
            :image="brand.imageUrls"
          />
        </div>
      </v-tab-item>
    </v-tabs-items>
    <!-- <v-btn @click="log">log stuff</v-btn> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      loadedTangoCards: [],
      giftCards: [],
      donationCards: [],
      tab: null
    }
  },
  created() {
    this.loadedTangoCards = this.$store.getters.getTangoCards.brands
    this.giftCards = this.loadedTangoCards.filter(card => card.items[0].rewardType === 'gift card')
    this.donationCards = this.loadedTangoCards.filter(card => card.items[0].rewardType === 'donation')
  },
  methods: {
    log() {
    }
  }
}
</script>

<style scoped>
.title {
  text-align: center;
  font-size: 1.7rem;
  padding: 0;
  margin: 10px;
}
.tango-cards-wrapper {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}
.v-tab {
  color: black;
  font-weight: 550;
}
.v-tab--active {
  color: black !important;
}
</style>
