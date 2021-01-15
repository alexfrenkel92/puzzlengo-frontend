<template>
  <div>
    <echarts :options="option" />
  </div>
</template>

<script>
import 'echarts/lib/chart/line'
import 'echarts/lib/coord/cartesian/Grid'
import 'echarts/lib/coord/cartesian/Axis2D'
import 'echarts/lib/component/title'
import 'echarts/lib/component/tooltip'
import Echarts from 'vue-echarts'

export default {
  components: {
    Echarts
  },
  // eslint-disable-next-line vue/require-prop-types
  props: ['data', 'mindata', 'maxdata', 'colormax', 'colormin'],
  data() {
    return {
      option: {
        dataZoom: [
          {
            show: true,
            type: 'slider',
            xAxisIndex: [0],
            filterMode: 'filter',
            start: 0,
            end: 20
          }, {
            show: true,
            type: 'slider',
            xAxisIndex: [1],
            filterMode: 'filter',
            start: 0,
            end: 20
          }],
        color: [{
          type: 'linear',
          x: 0,
          y: 0,
          x2: 0,
          y2: 1,
          colorStops: [{
            offset: 0, color: this.colormax // color at 0% position
          }, {
            offset: 1, color: this.colormin // color at 100% position
          }]
        },
        'green',
        'blue'],
        title: [{
          show: true,
          top: '7.5%',
          left: 'center',
          text: 'Heart rate today',
          textStyle: {
            fontSize: 12
          }
        }, {
          show: true,
          top: '49%',
          left: 'center',
          text: 'Maximum and minimum heart rate this month',
          textStyle: {
            fontSize: 12
          }
        }],
        tooltip: {
          trigger: 'axis',
          show: true
        },
        xAxis: [{
          data: this.data.map(function(item) {
            return item[0]
          })
        }, {
          data: this.mindata.map(function(item) {
            return item[0]
          }),
          gridIndex: 1
        },
        {
          data: this.maxdata.map(function(item) {
            return item[0]
          }),
          gridIndex: 1
        }
        ],
        yAxis: [{
          max: 200
        }, { max: 250, gridIndex: 1 }],
        grid: [{
          bottom: '60%'
        }, {
          top: '60%'
        }],
        series: [{
          type: 'line',
          showSymbol: false,
          data: this.data.map(function(item) {
            return item[1]
          })
        },
        {
          type: 'line',
          showSymbol: false,
          data: this.mindata.map(function(item) {
            return item[1]
          }),
          xAxisIndex: 1,
          yAxisIndex: 1
        },
        {
          type: 'line',
          showSymbol: false,
          data: this.maxdata.map(function(item) {
            return item[1]
          }),
          xAxisIndex: 1,
          yAxisIndex: 1
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
