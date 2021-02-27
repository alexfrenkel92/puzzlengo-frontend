<template>
  <div id="profile-edit-container">
    <h1>{{ filteredFields.title }}</h1>
    <div class="completion">
      <p>Not completed</p>
    </div>
    <!-- <h4>Category specific questions will come here</h4> -->
    <h3>Click on the button below to complete the survey</h3>
    <v-btn @click="executeSurvey">This Button</v-btn>
    <app-button
      type="button"
      btn-style="approve"
      style="height: 50px; width: 150px"
      @click="navigateBack"
    >
      Back to Profiling
    </app-button>
  </div>
</template>

<script>
export default {
  props: {
    filteredFields: {
      type: Object,
      required: true
    }
  },
  methods: {
    navigateBack() {
      this.$router.go(-1)
    },
    executeSurvey() {
      window.location.href = 'http://localhost/LimeSurvey/index.php/759823?lang=en'
    }
  }
}
</script>

<style scoped>
#profile-edit-container {
  padding-top: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
}
.completion {
  font-size: x-large;
  color: red;
}
h4 {
  margin: 30px 5px 0 5px;
  /* background-color: aqua; */
}
.v-btn {
  margin: 15px 15px 30px 15px;
  color: #9C27B0 !important;
  animation: pulse .1s infinite !important;
}
@keyframes pulse {
  0% {
    background-color: #AEEA00;
  }
  100% {
    background-color: #9C27B0;
  }
}
</style>
