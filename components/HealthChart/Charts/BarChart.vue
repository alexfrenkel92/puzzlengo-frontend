<template>
  <div>
    <Echarts :options="option" />
  </div>
</template>

<script>
import 'echarts/lib/chart/bar'
import 'echarts/lib/component/tooltip'
import Echarts from 'vue-echarts'

export default {
  components: {
    Echarts
  },
  // eslint-disable-next-line vue/require-prop-types
  props: ['data', 'color'],
  data() {
    return {
      option: {
        tooltip: {
          trigger: 'axis',
          show: true
        },
        xAxis: {
          type: 'category',
          axisLabel: {
            interval: 0,
            rotate: 30 // If the label names are too long you can manage this by rotating the label.
          },
          data: this.data.map(function(item) {
            return item[0]
          })
        },
        yAxis: {
          type: 'value',
          axisLabel: {
            fontSize: 10,
            padding: 0
          }
        },
        series: [{
          data: this.data.map(function(item) {
            return item[1]
          }),
          type: 'bar',
          color: this.color
        }]
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
