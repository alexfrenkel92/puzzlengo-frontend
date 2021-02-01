<template>
  <div id="tango-card-details-container">
    <GiftCardDetails :brand="brand" />
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

<style scoped>
#tango-card-details-container {
  padding-top: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
}
</style>
