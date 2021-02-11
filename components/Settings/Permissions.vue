<template>
  <div class="permissions-main-container">
    <h3>Notification settings (receiving e-mails)</h3>
    <div class="permission-containers-wrapper">
      <div class="permission">
        <p>New survey</p>
        <v-switch v-model="newSurvey" hide-details color="#7abe8f" />
      </div>
      <div class="permission">
        <p>Survey status change</p>
        <v-switch v-model="surveyStatusChange" hide-details color="#7abe8f" />
      </div>
      <div class="permission">
        <p>Credit received</p>
        <v-switch v-model="creditReceived" hide-details color="#7abe8f" />
      </div>
    </div>
    <h3>Manage your activity tracking permissions</h3>
    <div class="permission-containers-wrapper">
      <div class="permission">
        <p>Steps</p>
        <v-switch v-model="heartRate" hide-details color="#7abe8f" />
      </div>
      <div class="permission">
        <p>Sleep</p>
        <v-switch v-model="sleep" hide-details color="#7abe8f" />
      </div>
      <div class="permission">
        <p>Floors climbed</p>
        <v-switch v-model="floorsClimbed" hide-details color="#7abe8f" />
      </div>
      <div class="permission">
        <p>Active time</p>
        <v-switch v-model="activeTime" hide-details color="#7abe8f" />
      </div>
    </div>
    <h3>Manage your Apple Health data tracking permissions</h3>
    <div class="permission-containers-wrapper">
      <div class="permission">
        <p>Heart rate</p>
        <v-switch v-model="heartRate" hide-details color="#7abe8f" />
      </div>
      <div class="permission">
        <p>Blood presure</p>
        <v-switch v-model="bloodPresure" hide-details color="#7abe8f" />
      </div>
      <div class="permission">
        <p>Blood exygen level</p>
        <v-switch v-model="bloodOxygen" hide-details color="#7abe8f" />
      </div>
      <div class="permission">
        <p>Weight</p>
        <v-switch v-model="weigth" hide-details color="#7abe8f" />
      </div>
    </div>
    <h3>Location settings</h3>
    <div class="permission-containers-wrapper">
      <div class="permission">
        <p>Location tracking</p>
        <v-switch v-model="location" hide-details color="#7abe8f" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newSurvey: true,
      surveyStatusChange: true,
      creditReceived: true,
      heartRate: true,
      sleep: true,
      floorsClimbed: true,
      activeTime: true,
      bloodPresure: true,
      bloodOxygen: true,
      weigth: true,
      location: true
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
