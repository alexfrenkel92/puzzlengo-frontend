<template>
  <div class="settings-container">
    <v-tabs background-color="transparent" grow>
      <v-tabs-slider color="#7abe8f" />
      <v-tab>Health</v-tab>
      <v-tab>Activity</v-tab>
      <v-tab-item>
        <Health />
      </v-tab-item>
      <v-tab-item>
        <Activity />
      </v-tab-item>
    </v-tabs>
  </div>
</template>

<script>
import Health from '@/components/HealthChart/Health'
import Activity from '@/components/HealthChart/Activity'

export default {
  components: {
    Health,
    Activity
  },
  data() {
    return {
    }
  }
}
</script>

<style lang="scss">
.v-slide-group__prev {
  display: none !important;
}
</style>

<style scoped lang="scss">
.v-tab {
  color: black;
  font-weight: 550;
}
.v-tab--active {
  @include primary-text-color;
}
.v-window-item {
  @include whitish-background-color;
  // background-color: rgb(199, 255, 192);
  padding-top: .5rem;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
}
</style>
