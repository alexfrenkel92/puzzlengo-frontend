<template>
  <client-only>
    <VueApexCharts height="400" width="290" type="bar" :options="options" :series="series" />
  </client-only>
</template>

<script>
// import VueApexCharts from 'vue-apexcharts'

export default {
  components: {
    VueApexCharts: () => process.browser ? import('vue-apexcharts') : null
  },
  // eslint-disable-next-line vue/require-prop-types
  props: ['data', 'color', 'name'],
  data() {
    return {
      options: {
        chart: {
          id: this.name
        },
        xaxis: {
          categories: this.data.map(function(item) {
            return item[0]
          })
        },
        dataLabels: {
          enabled: false
        },
        colors: this.color
      },
      series: [{
        name: this.name,
        data: this.data.map(function(item) {
          return item[1]
        })
      }]
    }
  }
}
</script>

<style lang='scss'>
.apexcharts-tooltip {
    color: $light-text-primary !important
  }
</style>
