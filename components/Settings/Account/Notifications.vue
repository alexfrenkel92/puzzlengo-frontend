<template>
  <div>
    <v-container>
      <v-switch
        v-for="item in localNotifications"
        :key="item.title"
        v-model="item.value"
        inset
        :label="item.title"
      />
      <v-btn text @click="refreshNotifications"><v-icon>mdi-alpha-x-circle</v-icon> Cancel</v-btn>
      <v-btn text @click="updateNotifications"><v-icon>mdi-check-circle</v-icon> Save</v-btn>
    </v-container>

  </div>
</template>
<script>
export default {
  data() {
    return {
      notifications: {},
      localNotifications: {
        newSurvey: { title: 'New survey', value: null },
        surveyStatus: { title: 'Survey status change', value: null },
        creditReceived: { title: 'Credits received', value: null },
        creditSpent: { title: 'Credits spent', value: null }
      }
    }
  },
  created() {
    this.notifications = this.$store.getters.notificationsSettings
    this.refreshNotifications()
  },
  methods: {
    refreshNotifications() {
      this.localNotifications.newSurvey.value = this.notifications.newSurvey
      this.localNotifications.surveyStatus.value = this.notifications.surveyStatus
      this.localNotifications.creditReceived.value = this.notifications.creditReceived
      this.localNotifications.creditSpent.value = this.notifications.creditSpent
    },
    updateNotifications() {
      this.$store.dispatch('updateNotifications', [this.localNotifications.newSurvey.value, this.localNotifications.surveyStatus.value, this.localNotifications.creditReceived.value, this.localNotifications.creditSpent.value])
    }
  }
}
</script>
