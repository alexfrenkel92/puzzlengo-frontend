<template>
  <div id="profile-edit-container">
    <h3>Edit {{ filteredFields.title }} related data</h3>
    <div class="completion">
      <p>
        {{ filteredFields.answered }} /
        {{ filteredFields.totalQuestions }} completed
      </p>
    </div>
    <h4>Category specific questions will come here</h4>
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
  margin: 5px 5px 20px 5px;
}
.v-btn {
  margin: 15px 15px 30px 15px;
  color: #9c27b0 !important;
  animation: pulse 0.1s infinite !important;
}
@keyframes pulse {
  0% {
    background-color: #aeea00;
  }
  100% {
    background-color: #9c27b0;
  }
}
</style>
