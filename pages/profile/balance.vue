<template>
  <div>
    <div class="balanceContainer">
      <Balance @getMore="getMore" :icon="'mdi-currency-usd-circle-outline'" :title="'My balance'" :total="total" :details="details" />
      <BalanceTable :details="details" />
    </div>
    <div class="offerContainer">
      <v-switch
        v-model="showAll"
        :label="'Show all offers'"
      />
      <SpendBalance :coupons="couponsShow" :total="total" @getMore="getMore" />
    </div>
  </div>
</template>

<script>
import Balance from '@/components/Balance/BalanceCard'
import BalanceTable from '@/components/Balance/BalanceTable'
import SpendBalance from '@/components/Balance/SpendBalance'
export default {
  components: {
    Balance,
    SpendBalance,
    BalanceTable
  },
  data() {
    return {
      details: [{ value: 10, date: '01.03.', description: 'Survey 1' }, { value: 340, date: '01.23.', description: 'Survey 3' }, { value: -150, date: '02.03.', description: 'Amazon' }, { value: 60, date: '02.20.', description: 'Survey 12' }, { value: -20, date: '03.30.', description: 'Nike' }],
      total: 0,
      showAll: false,
      coupons: [
        { company: 'Amazon', value: 30, info: 'Free delivery' },
        { company: 'Amazon', value: 120, info: '5% off' },
        { company: 'Nike', value: 300, info: '20% off' },
        { company: 'Amazon', value: 30, info: 'Free delivery' },
        { company: 'Amazon', value: 120, info: '5% off' },
        { company: 'Nike', value: 300, info: '20% off' },
        { company: 'Amazon', value: 30, info: 'Free delivery' },
        { company: 'Amazon', value: 120, info: '5% off' },
        { company: 'Nike', value: 300, info: '20% off' },
        { company: 'Amazon', value: 30, info: 'Free delivery' },
        { company: 'Amazon', value: 120, info: '5% off' },
        { company: 'Nike', value: 300, info: '20% off' }
      ]
    }
  },
  computed: {
    couponsShow() {
      if (!this.showAll) {
        return this.coupons.filter((d) => {
          return d.value <= this.total
        })
      } else {
        return this.coupons
      }
    }
  },
  /* computed: {
    earn() {
      return this.details.filter((d) => {
        return d.value > 0
      })
    },
    spend() {
      return this.details.filter((d) => {
        return d.value < 0
      })
    }
  }, */
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
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
  }
  .offerContainer{
    margin-top: 60px;
  }
</style>
