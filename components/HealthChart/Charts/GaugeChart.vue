<template>
  <client-only>
    <VueApexCharts height="400" width="310" :options="options" :series="series" />
  </client-only>
</template>

<script>
// import VueApexCharts from 'vue-apexcharts'

export default {
  components: {
    VueApexCharts: () => process.browser ? import('vue-apexcharts') : null
  },
  // eslint-disable-next-line vue/require-prop-types
  props: ['max', 'current', 'color', 'title', 'date'],
  data() {
    return {
      series: [(this.current / this.max) * 100],
      options: {
        chart: {
          type: 'radialBar',
          offsetY: -20,
          sparkline: {
            enabled: true
          }
        },
        plotOptions: {
          radialBar: {
            startAngle: -135,
            endAngle: 135,
            dataLabels: {
              value: {
                show: false
              }
            }
          }
        },
        labels: [this.current + ' / ' + this.max + ' steps'],
        fill: {
          colors: [function({ value }) {
            if (value < 50) {
              return '#f54242'
            } else if (value < 100) {
              return '#f5ef42'
            } else {
              return '#90f542'
            }
          }]
        }
      }
    }
  }
}

</script>
<style scoped>
  .echarts{
    width: 100% !important;
  }
</style>
