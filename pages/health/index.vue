<template>
  <div class="healthContainer">
    <v-card
      class="mx-auto"
      width="320"
    >
      <v-carousel hide-delimiters light>
        <v-carousel-item
          v-for="(item,i) in steps"
          :key="i"
        >
          <v-card-title>
            Steps {{ item.date }}
          </v-card-title>
          <gauge-chart :max="item.max" :current="item.current" :color="item.current < item.max? item.current < item.max/2? 'red': 'orange' :'green'" :date="item.date" :title="'Steps'" />
        </v-carousel-item>
      </v-carousel>
    </v-card>
    <v-card
      class="mx-auto"
      width="320"
    >
      <v-card-title>
        Heart Rate
      </v-card-title>
      <line-chart
        :data="heartRateToday.data"
        :mindata="heartRateMin.data"
        :maxdata="heartRateMax.data"
        :colormax="heartRateToday.colorMax"
        :colormin="heartRateToday.colorMin"
      />
    </v-card>
    <v-card
      class="mx-auto"
      width="320"
    >
      <v-card-title>
        Steps this week
      </v-card-title>
      <bar-chart :data="weeklySteps.data" :color="weeklySteps.color" />
    </v-card>
  </div>
</template>

<script>
import GaugeChart from '@/components/HealthChart/Charts/GaugeChart'
import LineChart from '@/components/HealthChart/Charts/LineChart'
import BarChart from '@/components/HealthChart/Charts/BarChart'

export default {
  components: {
    GaugeChart,
    LineChart,
    BarChart

  },
  data() {
    return {
      steps: [
        { max: 6000, current: 4500, date: 'Today' },
        { max: 6000, current: 8504, date: 'Yesterday' },
        { max: 6000, current: 2569, date: 'Sunday' }
      ],
      heartRateToday: { data: [['08:11', 78], ['08:21', 82], ['08:31', 78], ['08:41', 92], ['08:51', 72], ['09:01', 78], ['09:11', 81], ['09:21', 110], ['09:31', 145], ['09:41', 90], ['09:51', 87], ['10:01', 79], ['10:11', 68], ['10:21', 83], ['10:31', 88], ['08:11', 78], ['08:21', 82], ['08:31', 78], ['08:41', 92], ['08:51', 72], ['09:01', 78], ['09:11', 81], ['09:21', 110], ['09:31', 145], ['09:41', 90], ['09:51', 87], ['10:01', 79], ['10:11', 68], ['10:21', 83], ['10:31', 88]], colorMax: 'red', colorMin: 'yellow' },
      heartRateMin: { data: [['01.01', 66], ['01.02', 60], ['01.03', 68], ['01.04', 77]] },
      heartRateMax: { data: [['01.01', 186], ['01.02', 190], ['01.03', 168], ['01.04', 197]] },

      weeklySteps: { data: [['Monday', 7670], ['Tuesday', 3421], ['Wednesday', 13421], ['Thursday', 6245], ['Friday', 11201], ['Saturday', 0], ['Sunday', 0]], color: 'grey' }
    }
  }
}
</script>

<style scoped>
  .healthContainer{
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    padding-top: 20px;
  }
</style>
