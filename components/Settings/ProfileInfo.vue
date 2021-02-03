<template>
  <div id="profileInfo">
    <div class="completeInfo">
      <echarts :options="option" />
      <div class="textContainer">
        <p><b>Profile information</b></p>
        <p>Complete your profiling information to get more surveys</p>
      </div>
    </div>
    <div class="divider-horizontal" />
    <v-btn to="/profile" nuxt>Complete my profiling</v-btn>
  </div>
</template>

<script>
import 'echarts/lib/chart/gauge'
import Echarts from 'vue-echarts'

export default {
  components: {
    Echarts
  },
  // eslint-disable-next-line vue/require-prop-types
  props: ['progress'],
  data() {
    return {
      option: {
        title: {
          top: '0%',
          left: 'center',
          text: this.progress + '%'
        },
        series: [{
          type: 'gauge',
          grid: {
            top: 'top'
          },
          startAngle: 180,
          endAngle: -180,
          min: 0,
          max: 100,
          progress: {
            show: true,
            width: 5,
            itemStyle: {
              color: '#7abe8f'
            }
          },
          pointer: {
            show: false
          },
          axisLine: {
            lineStyle: {
              width: 50,
              color: [[1, '#ffffff']]
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
            offsetCenter: [0, '0%'],
            fontSize: 20,
            fontWeight: 'bolder',
            formatter: '{value}%'
          },
          data: [{
            value: 13 // this.progress
          }]
        }
        ]
      }
    }
  }
}
</script>

<style scoped>
  .completeInfo{
    display: flex;
    width: 100%;
  }
  #profileInfo{
    height: 200px;
    width: 300px;
    padding: 10px;
    border-radius: 5px;
    background: #e4ffe5;
    position: relative;
    text-align: center;
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.5);
  }
  .echarts {
    width: 100%;
    height: 115px;
  }
  .v-btn{
    background-color: #7abe8f !important;
    color: #ffffff !important;
  }
  .divider-horizontal {
  position: relative;
  margin: 0 0 20px 0;
  height: 1px;
  background-image: linear-gradient(
    to right,
    transparent,
    rgb(51, 50, 48),
    transparent
  );
}
.textContainer{
  width: 100%;
  font-size: 15px;
  white-space: normal;
}

p{
  margin-bottom: 2px !important;
}
</style>
