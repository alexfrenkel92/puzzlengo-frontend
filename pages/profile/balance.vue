<template>
  <div>
    <div class="offerContainer">
      <v-switch
        v-model="showAllCharity"
        class="all-offers-switcher"
        :label="'Show all offers'"
        color="#7ABE8F"
      />
      <SpendBalance :coupons="charityShow" :total="total" @getMore="getMore" />
    </div>
    <div class="balanceContainer">
      <MyBalance :icon="'mdi-currency-usd-circle-outline'" :title="'My balance'" :total="total" :details="details" @getMore="getMore" />
    </div>
    <div class="offerContainer">
      <v-switch
        v-model="showAllCoupon"
        class="all-offers-switcher"
        :label="'Show all offers'"
        color="#7ABE8F"
      />
      <SpendBalance :coupons="couponsShow" :total="total" @getMore="getMore" />
    </div>
  </div>
</template>

<script>
import MyBalance from '@/components/Balance/MyBalance'
import SpendBalance from '@/components/Balance/SpendBalance'
export default {
  components: {
    MyBalance,
    SpendBalance
  },
  data() {
    return {
      details: [{ value: 10, date: '01.03.', description: 'Survey 1' }, { value: 340, date: '01.23.', description: 'Survey 3' }, { value: -150, date: '02.03.', description: 'Amazon' }, { value: 60, date: '02.20.', description: 'Survey 12' }, { value: -20, date: '03.30.', description: 'Nike' }],
      total: 0,
      showAllCoupon: false,
      showAllCharity: false,
      coupons: [
        { company: 'Amazon', value: 30, info: 'Free delivery', type: 'coupon' },
        { company: 'Amazon', value: 120, info: '5% off', type: 'coupon' },
        { company: 'Nike', value: 300, info: '20% off', type: 'coupon' },
        { company: 'Amazon', value: 30, info: 'Free delivery', type: 'coupon' },
        { company: 'Amazon', value: 120, info: '5% off', type: 'coupon' },
        { company: 'Nike', value: 300, info: '20% off', type: 'coupon' },
        { company: 'Amazon', value: 30, info: 'Free delivery', type: 'coupon' },
        { company: 'Amazon', value: 120, info: '5% off', type: 'coupon' },
        { company: 'Nike', value: 300, info: '20% off', type: 'coupon' },
        { company: 'Amazon', value: 30, info: 'Free delivery', type: 'coupon' },
        { company: 'Amazon', value: 120, info: '5% off', type: 'coupon' },
        { company: 'Nike', value: 300, info: '20% off', type: 'coupon' },
        { company: 'Charity 1', value: 120, info: '20$', type: 'charity' },
        { company: 'Charity 2', value: 300, info: '60$', type: 'charity' },
        { company: 'Charity 1', value: 30, info: '5$', type: 'charity' },
        { company: 'Charity 1', value: 1200, info: '2200$', type: 'charity' },
        { company: 'Charity 3', value: 300, info: '60$', type: 'charity' }
      ]
    }
  },
  computed: {
    couponsShow() {
      if (!this.showAllCoupon) {
        return this.coupons.filter((d) => {
          return (d.value <= this.total && d.type === 'coupon')
        })
      } else {
        return this.coupons.filter((d) => {
          return d.type === 'coupon'
        })
      }
    },
    charityShow() {
      if (!this.showAllCharity) {
        return this.coupons.filter((d) => {
          return (d.value <= this.total && d.type === 'charity')
        })
      } else {
        return this.coupons.filter((d) => {
          return d.type === 'charity'
        })
      }
    }
  },
  created() {
    this.details.forEach((element) => {
      this.total += element.value
      /* if (element.value > 0) {
        this.totalEarned += element.value
      } else {
        this.totalSpent += element.value
      } */
    })
  },
  methods: {
    getMore() {
      this.$router.push('/dashboard')
    }
  }
}
</script>

<style scoped>
  .balanceContainer{
    margin-top: 50px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
  }
  .offerContainer{
    padding: 0;
  }
  .all-offers-switcher {
    padding-left: 20px;
  }
</style>
