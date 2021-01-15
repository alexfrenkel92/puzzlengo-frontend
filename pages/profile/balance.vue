<template>
  <div class="balanceContainer">
    <balance :icon="'mdi-currency-usd-circle-outline'" :title="'My balance'" :total="total" :details="details" />
    <balance :icon="'mdi-chevron-up-circle-outline'" :title="'Total credits earned'" :total="totalEarned" :details="earn" />
    <balance :icon="'mdi-chevron-down-circle-outline'" :title="'Total credits spent'" :total="totalSpent" :details="spend" />

  </div>
</template>

<script>
import Balance from '@/components/Balance/BalanceCard'
export default {
  components: {
    Balance
  },
  data() {
    return {
      details: [{ value: 100, date: '01.03.' }, { value: -150, date: '01.03.' }, { value: 60, date: '01.03.' }, { value: -20, date: '01.03.' }],
      total: 0,
      totalEarned: 0,
      totalSpent: 0
    }
  },
  computed: {
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
  },
  created() {
    this.details.forEach((element) => {
      this.total += element.value
      if (element.value > 0) {
        this.totalEarned += element.value
      } else {
        this.totalSpent += element.value
      }
    })
  }
}
</script>

<style scoped>
  .balanceContainer{
    margin-top: 30px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around
  }
</style>
