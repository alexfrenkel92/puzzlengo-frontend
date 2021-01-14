<template>
  <Echarts :options="option" />
</template>

<script>
import 'echarts/lib/chart/gauge'
import Echarts from 'vue-echarts'

export default {
  components: {
    Echarts
  },
  // eslint-disable-next-line vue/require-prop-types
  props: ['max', 'current', 'color', 'title', 'date'],
  data() {
    return {
      show: false,
      option: {
        title: {
          top: '80%',
          left: 'center',
          textStyle: {
            fontSize: 16
          },
          text: this.current + ' steps. ' + Math.floor(this.current / this.max * 100) + '% of target reached.'
        },
        series: [{
          type: 'gauge',
          grid: {
            top: 'top'
          },
          center: ['50%', '60%'],
          startAngle: 200,
          endAngle: -20,
          min: 0,
          max: this.max,
          splitNumber: 10,
          itemStyle: {
            color: this.color
          },
          progress: {
            show: true,
            width: 50
          },

          pointer: {
            show: false
          },
          axisLine: {
            lineStyle: {
              width: 50
            }
          },
          axisTick: {
            show: false
          },
          splitLine: {
            show: false
          },
          axisLabel: {
            show: false
          },
          anchor: {
            show: false
          },
          title: {
            show: false
          },
          detail: {
            valueAnimation: true,
            width: '60%',
            lineHeight: 40,
            height: '15%',
            borderRadius: 8,
            offsetCenter: [0, '-15%'],
            fontSize: 20,
            fontWeight: 'bolder',
            formatter: '{value}/' + this.max,
            color: this.color
          },
          data: [{
            value: this.current
          }]
        }
        ]
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
