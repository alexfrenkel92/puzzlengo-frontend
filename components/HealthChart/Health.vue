<template>
  <div class="health-container">
    <v-card
      class="mx-auto"
      width="300"
    >
      <v-card-title>
        {{ $t('charts.weight') }}
      </v-card-title>
      <line-chart
        :format-date="'MMM d.'"
        :data="weight.data"
        :colormax="weight.colorMax"
        :colormin="weight.colorMin"
        :name="$t('charts.weight')"
      />
    </v-card>
    <v-card
      class="mx-auto"
      width="300"
    >
      <v-card-title>
        {{ $t('charts.heart_rate') }}
      </v-card-title>
      <line-chart
        :format-date="'HH:mm'"
        :data="heartRateToday.data"
        :colormax="heartRateToday.colorMax"
        :colormin="heartRateToday.colorMin"
        :name="$t('charts.heart_rate')"
      />
    </v-card>
    <v-card
      class="mx-auto"
      width="300"
      height="500"
    >
      <v-card-title>
        {{ $t('charts.sleep') }}
      </v-card-title>
      <bar-chart :name="$t('charts.sleep')" :data="weeklySleep.data" :color="weeklySleep.color" />
    </v-card>
  </div>
</template>

<script>
import LineChart from '@/components/HealthChart/Charts/LineChart'
import BarChart from '@/components/HealthChart/Charts/BarChart'

export default {
  components: {
    LineChart,
    BarChart

  },
  data() {
    return {
      weight: { data: [['2021-01-08T08:11:00', 58], ['2021-01-18T08:21:00', 56], ['2021-01-28T08:31:00', 55], ['2021-02-05T08:41:00', 56]], colorMax: '#7abe8f', colorMin: '#7abe8f' },
      heartRateToday: { data: [['2021-01-08T08:11:00', 78], ['2021-01-08T08:21:00', 82], ['2021-01-08T08:31:00', 78], ['2021-01-08T08:41:00', 92], ['2021-01-08T08:51:00', 72], ['2021-01-08T09:01:00', 78], ['2021-01-08T09:11:00', 81], ['2021-01-08T09:21:00', 110], ['2021-01-08T09:31:00', 145], ['2021-01-08T09:41:00', 90], ['2021-01-08T09:51:00', 87], ['2021-01-08T10:01:00', 79], ['2021-01-08T10:11:00', 68], ['2021-01-08T10:21:00', 83], ['2021-01-08T10:31:00', 88], ['2021-01-08T10:41:00', 78], ['2021-01-08T10:51:00', 82], ['2021-01-08T11:01:00', 78], ['2021-01-08T11:11:00', 92], ['2021-01-08T11:21:00', 72], ['2021-01-08T11:31:00', 78], ['2021-01-08T11:41:00', 81], ['2021-01-08T11:51:00', 110], ['2021-01-08T12:01:00', 145], ['2021-01-08T12:11:00', 90], ['2021-01-08T12:21:00', 87], ['2021-01-08T12:31:00', 79], ['2021-01-08T12:41:00', 68], ['2021-01-08T12:51:00', 83], ['2021-01-08T13:01:00', 88]], colorMax: '#ff0000', colorMin: '#ffff00' },
      weeklySleep: { data: [['Monday', 7.15], ['Tuesday', 8], ['Wednesday', 7.5], ['Thursday', 9.1], ['Friday', 6.43], ['Saturday', 0], ['Sunday', 0]], color: '#7abe8f' }
    }
  }
}
</script>

<style lang='scss' scoped>
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
