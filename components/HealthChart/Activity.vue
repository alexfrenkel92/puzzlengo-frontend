<template>
  <div class="health-container">
    <v-card
      class="mx-auto"
      width="300"
    >
      <v-carousel hide-delimiters light>
        <v-carousel-item
          v-for="(item,i) in steps"
          :key="i"
        >
          <v-card-title>
            Steps {{ item.date }}
          </v-card-title>
          <gauge-chart
            class="gauge"
            :max="item.max"
            :current="item.current"
            :color="item.current < item.max? item.current < item.max/2? 'red': 'orange' :'green'"
            :date="item.date"
            :title="'Steps'"
          />
        </v-carousel-item>
      </v-carousel>
    </v-card>
    <v-card
      class="mx-auto"
      width="300"
    >
      <v-card-title>
        Heart Rate
      </v-card-title>
      <line-chart
        :data="heartRateToday.data"
        :colormax="heartRateToday.colorMax"
        :colormin="heartRateToday.colorMin"
        :name="'Heart Rate'"
      />
    </v-card>
    <v-card
      class="mx-auto"
      width="300"
      height="500"
    >
      <v-card-title>
        Steps this week
      </v-card-title>
      <bar-chart :name="'Steps'" :data="weeklySteps.data" :color="weeklySteps.color" />
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
      heartRateToday: { data: [['2021-01-08T08:11:00', 78], ['2021-01-08T08:21:00', 82], ['2021-01-08T08:31:00', 78], ['2021-01-08T08:41:00', 92], ['2021-01-08T08:51:00', 72], ['2021-01-08T09:01:00', 78], ['2021-01-08T09:11:00', 81], ['2021-01-08T09:21:00', 110], ['2021-01-08T09:31:00', 145], ['2021-01-08T09:41:00', 90], ['2021-01-08T09:51:00', 87], ['2021-01-08T10:01:00', 79], ['2021-01-08T10:11:00', 68], ['2021-01-08T10:21:00', 83], ['2021-01-08T10:31:00', 88], ['2021-01-08T10:41:00', 78], ['2021-01-08T10:51:00', 82], ['2021-01-08T11:01:00', 78], ['2021-01-08T11:11:00', 92], ['2021-01-08T11:21:00', 72], ['2021-01-08T11:31:00', 78], ['2021-01-08T11:41:00', 81], ['2021-01-08T11:51:00', 110], ['2021-01-08T12:01:00', 145], ['2021-01-08T12:11:00', 90], ['2021-01-08T12:21:00', 87], ['2021-01-08T12:31:00', 79], ['2021-01-08T12:41:00', 68], ['2021-01-08T12:51:00', 83], ['2021-01-08T13:01:00', 88]], colorMax: '#ff0000', colorMin: '#ffff00' },
      weeklySteps: { data: [['Monday', 7670], ['Tuesday', 3421], ['Wednesday', 13421], ['Thursday', 6245], ['Friday', 11201], ['Saturday', 0], ['Sunday', 0]], color: 'grey' }
    }
  }
}
</script>

<style scoped>
  .health-container{
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    padding-top: 40px;
  }
  .v-card{
    margin: 10px;
  }
  .gauge{
    display: flex;
    justify-content: center;
  }
</style>
