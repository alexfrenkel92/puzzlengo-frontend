<template>
  <div id="tango-card-details-container">
    <TangoCardDetails :brand="brand" />
    <app-button
      type="button"
      btn-style="approve"
      style="height: 50px; width: 150px"
      @click="$router.go(-1)"
    >
      Back to Cards
    </app-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      brandKey: this.$route.params.brandKey,
      brands: this.$store.getters.getTangoCards.brands,
      brand: null
    }
  },
  created() {
    this.brand = this.brands.find(brand => brand.brandKey === this.brandKey)
  }
}
</script>

<style>
#tango-card-details-container {
  padding-top: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
}
</style>
