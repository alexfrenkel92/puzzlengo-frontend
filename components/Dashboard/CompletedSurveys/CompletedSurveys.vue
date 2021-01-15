<template>
  <div class="container-completed-surveys">
    <div class="enrolled surveys-title">Completed Surveys</div>
    <div v-if="completedSurveysLength === 0" class="error-case">
      <h3>No completed surveys yet</h3>
    </div>
    <div v-else class="survey-card-wrapper">
      <completed-survey-card
        v-for="survey in completedSurveys"
        :id="survey.id"
        :key="survey.id"
        :title="survey.title"
        :description="survey.description"
        :duration="survey.duration"
        :quota="survey.quota"
        :enrolled="survey.enrolled"
        :is-enrolled="survey.isEnrolled"
        :is-completed="survey.isCompleted"
      />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      completedSurveys: []
    }
  },
  computed: {
    completedSurveysLength() {
      const completedSurveys = this.completedSurveys.filter(item => item.isCompleted === true)
      return completedSurveys.length
    }
  },
  created() {
    this.completedSurveys = this.$store.getters.getActiveSurveys
  }
}
</script>

<style lang="css" scoped>
@import '../dashboard-style.css'
</style>
