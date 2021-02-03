<template>
  <div>
<<<<<<< HEAD
    <v-switch
      v-for="item in notifications"
      :key="item.title"
      v-model="item.value"
      inset
      :label="item.title"
    />
=======
    <v-container>
      <v-switch
        v-for="item in localNotifications"
        :key="item.title"
        v-model="item.value"
        inset
        :label="item.title"
      />
      <v-btn @click="refreshNotifications">Cancel</v-btn>
      <v-btn @click="updateNotifications">Save</v-btn>
    </v-container>

>>>>>>> 049e03b3a894b7cb8c63af7328b71173cc711d95
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
