<template>
  <div>
    <v-container>
      <v-switch
        v-for="item in localActivity"
        :key="item.title"
        v-model="item.value"
        inset
        :label="item.title"
      />
      <v-btn text @click="refreshActivity"><v-icon>mdi-alpha-x-circle</v-icon> Cancel</v-btn>
      <v-btn text @click="updateActivity"><v-icon>mdi-check-circle</v-icon> Save</v-btn>
    </v-container>

  </div>
</template>
<script>
export default {
  data() {
    return {
      activity: {},
      localActivity: {
        steps: { title: 'Steps', value: null },
        sleep: { title: 'Sleep data', value: null },
        floors: { title: 'Floors', value: null },
        activeTime: { title: 'Active time', value: null }
      }
    }
  },
  created() {
    this.activity = this.$store.getters.activityPermissions
    this.refreshActivity()
  },
  methods: {
    refreshActivity() {
      this.localActivity.steps.value = this.activity.steps
      this.localActivity.sleep.value = this.activity.sleep
      this.localActivity.floors.value = this.activity.floors
      this.localActivity.activeTime.value = this.activity.activeTime
    },
    updateActivity() {
      this.$store.dispatch('updateActivity', [this.localActivity.steps.value, this.localActivity.sleep.value, this.localActivity.floors.value, this.localActivity.activeTime.value])
    }
  }
}
</script>
