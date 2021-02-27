<template>
  <div>
    <VueApexCharts height="400" width="290" type="line" :options="options" :series="series" />
  </div>
</template>

<script>

export default {
  components: {
    VueApexCharts: () => process.browser ? import('vue-apexcharts') : null
  },
  // eslint-disable-next-line vue/require-prop-types
  props: ['data', 'mindata', 'maxdata', 'colormax', 'colormin', 'name', 'formatDate'],
  data() {
    return {
      series: [{
        name: this.name,
        data: this.data.map(function(item) {
          return item[1]
        })
      }],
      options: {
        dataLabels: {
          // enabled: false
        },
        stroke: {
          curve: 'straight'
        },
        tooltip: {
          x: {
            show: true,
            format: 'MMM d. HH:mm'
          }
        },
        xaxis: {
          type: 'datetime',
          categories: this.data.map(function(item) {
            return new Date(item[0]).getTime()
          }),
          labels: {
            // hideOverlappingLabels: true,
            format: this.formatDate
          }
        },
        colors: [this.colormin],
        fill: {
          type: 'gradient',
          gradient: {
            gradientToColors: [this.colormax],
            type: 'vertical'
          }
        }
      }
    }
  }
}
</script>
