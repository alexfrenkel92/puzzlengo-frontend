<template>
  <div>
    <div class="balanceContainer">
      <Balance :icon="'mdi-currency-usd-circle-outline'" :title="'My balance'" :total="total" :details="details" />
    </div>
    <div>
      <SpendBalance />
    </div>
  </div>
</template>

<script>
import Balance from '@/components/Balance/BalanceCard'
import SpendBalance from '@/components/Balance/SpendBalance'
export default {
  components: {
    Balance,
    SpendBalance
  },
  data() {
    return {
      details: [{ value: 100, date: '01.03.', description: 'Survey 1' }, { value: 340, date: '01.03.', description: 'Survey 3' }, { value: -150, date: '01.03.', description: 'Amazon' }, { value: 60, date: '01.03.', description: 'Survey 12' }, { value: -20, date: '01.03.', description: 'Nike' }],
      total: 0
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
  }
}
</script>

<style scoped>
  .balanceContainer{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around
  }
</style>
