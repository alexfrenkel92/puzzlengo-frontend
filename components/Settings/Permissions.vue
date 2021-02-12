<template>
  <div class="permissions-main-container">
    <h3>Notification settings (receiving e-mails)</h3>
    <div class="permission-containers-wrapper">
      <div class="permission">
        <p>New survey</p>
        <v-switch v-model="newSurvey" hide-details color="#7abe8f" @change="postNewSurveyChange" />
      </div>
      <div class="permission">
        <p>Survey status change</p>
        <v-switch v-model="surveyStatusChange" hide-details color="#7abe8f" @change="postSurveyStatusChange" />
      </div>
      <div class="permission">
        <p>Credit received</p>
        <v-switch v-model="creditReceived" hide-details color="#7abe8f" @change="postCreditReceivedChange" />
      </div>
    </div>
    <h3>Manage your activity tracking permissions</h3>
    <div class="permission-containers-wrapper">
      <div class="permission">
        <p>Steps</p>
        <v-switch v-model="steps" hide-details color="#7abe8f" @change="postStepsValue" />
      </div>
      <div class="permission">
        <p>Sleep</p>
        <v-switch v-model="sleep" hide-details color="#7abe8f" @change="postSleepValue" />
      </div>
      <div class="permission">
        <p>Floors climbed</p>
        <v-switch v-model="floorsClimbed" hide-details color="#7abe8f" @change="postFloorsClimbedValue" />
      </div>
      <div class="permission">
        <p>Active time</p>
        <v-switch v-model="activeTime" hide-details color="#7abe8f" @change="postActiveTimeValue" />
      </div>
    </div>
    <h3>Manage your Apple Health data tracking permissions</h3>
    <div class="permission-containers-wrapper">
      <div class="permission">
        <p>Heart rate</p>
        <v-switch v-model="heartRate" hide-details color="#7abe8f" @change="postHeartRateValue" />
      </div>
      <div class="permission">
        <p>Blood presure</p>
        <v-switch v-model="bloodPresure" hide-details color="#7abe8f" @change="postBloodPresureValue" />
      </div>
      <div class="permission">
        <p>Blood oxygen level</p>
        <v-switch v-model="bloodOxygen" hide-details color="#7abe8f" @change="postBloodOxygenValue" />
      </div>
      <div class="permission">
        <p>Weight</p>
        <v-switch v-model="weight" hide-details color="#7abe8f" @change="postWeightValue" />
      </div>
    </div>
    <h3>Location settings</h3>
    <div class="permission-containers-wrapper">
      <div class="permission">
        <p>Location tracking</p>
        <v-switch v-model="location" hide-details color="#7abe8f" @change="postLocationChange" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newSurvey: this.newSurveyValue,
      surveyStatusChange: this.surveyStatusChangeValue,
      creditReceived: this.creditReceivedValue,
      steps: this.stepsValue,
      sleep: this.sleepValue,
      floorsClimbed: this.floorsClimbed,
      activeTime: this.activeTimeValue,
      heartRate: this.heartRateValue,
      bloodPresure: this.bloodPresureValue,
      bloodOxygen: this.bloodOxygenValue,
      weight: this.weightValue,
      location: this.locationValue
    }
  },
  computed: {
    newSurveyValue() {
      return this.$store.getters.getNotificationSettings.newSurvey
    },
    surveyStatusChangeValue() {
      return this.$store.getters.getNotificationSettings.surveyStatus
    },
    creditReceivedValue() {
      return this.$store.getters.getNotificationSettings.creditReceived
    },
    stepsValue() {
      return this.$store.getters.getActivityPermissions.steps
    },
    sleepValue() {
      return this.$store.getters.getActivityPermissions.sleep
    },
    floorClimbedValue() {
      return this.$store.getters.getActivityPermissions.floorsClimbed
    },
    activeTimeValue() {
      return this.$store.getters.getActivityPermissions.activeTime
    },
    heartRateValue() {
      return this.$store.getters.getHealthPermissions.heartRate
    },
    bloodPresureValue() {
      return this.$store.getters.getHealthPermissions.bloodPresure
    },
    bloodOxygenValue() {
      return this.$store.getters.getHealthPermissions.bloodOxygen
    },
    weightValue() {
      return this.$store.getters.getHealthPermissions.weight
    },
    locationValue() {
      return this.$store.getters.getLocationPermission.location
    }
  },
  created() {
    this.newSurvey = this.$store.getters.getNotificationSettings.newSurvey
    this.surveyStatusChange = this.$store.getters.getNotificationSettings.surveyStatus
    this.creditReceived = this.$store.getters.getNotificationSettings.creditReceived
    this.steps = this.$store.getters.getActivityPermissions.steps
    this.sleep = this.$store.getters.getActivityPermissions.sleep
    this.floorsClimbed = this.$store.getters.getActivityPermissions.floorsClimbed
    this.activeTime = this.$store.getters.getActivityPermissions.activeTime
    this.heartRate = this.$store.getters.getHealthPermissions.heartRate
    this.bloodPresure = this.$store.getters.getHealthPermissions.bloodPresureValue
    this.bloodOxygen = this.$store.getters.getHealthPermissions.bloodOxygen
    this.weight = this.$store.getters.getHealthPermissions.weight
    this.location = this.$store.getters.getLocationPermission.location
  },
  methods: {
    postNewSurveyChange(value) {
      this.$store.dispatch('updateNewSurvey', value)
    },
    postSurveyStatusChange(value) {
      this.$store.dispatch('updateSurveyStatus', value)
    },
    postCreditReceivedChange(value) {
      this.$store.dispatch('updateCreditsReceived', value)
    },
    postLocationChange(value) {
      this.$store.dispatch('updateLocationPermission', value)
    },
    postStepsValue(value) {
      this.$store.dispatch('updateSteps', value)
    },
    postSleepValue(value) {
      this.$store.dispatch('updateSleep', value)
    },
    postFloorsClimbedValue(value) {
      this.$store.dispatch('updateFloorsClimbed', value)
    },
    postActiveTimeValue(value) {
      this.$store.dispatch('updateActiveTime', value)
    },
    postHeartRateValue(value) {
      this.$store.dispatch('updateHeartRate', value)
    },
    postBloodPresureValue(value) {
      this.$store.dispatch('updateBloodPresure', value)
    },
    postBloodOxygenValue(value) {
      this.$store.dispatch('updateBloodOxygen', value)
    },
    postWeightValue(value) {
      this.$store.dispatch('updateWeightValue', value)
    }
  }
}
</script>

<style scoped lang="scss">
.permissions-main-container {
  min-width: 300px;
  width: 500px;
  margin-bottom: 20px;
  padding: 0 1rem;
}
h3 {
  padding-left: 10px;
  margin: 15px 0 7px 0;
}
.permission-containers-wrapper {
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.219);
  border-radius: 3px;
  padding-bottom: 10px;
}
.permission {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px 5px 0 5px;
}
p {
  margin: 0 0 0 10px;
  font-weight: 550;
}
.v-input {
  margin: 0 !important;
}
</style>
