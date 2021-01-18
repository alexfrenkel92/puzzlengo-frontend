<template>
  <div class="container">
    <div class="active surveys-title">Active surveys to enroll</div>
    <div v-if="activeSurveysLength === 0" class="error-case">
      <h3>There are no surveys available, check back later</h3>
    </div>
    <div v-else class="survey-card-wrapper">
      <active-survey-card
        v-for="survey in activeSurveys"
        :id="survey.id"
        :key="survey.id"
        :title="survey.title"
        :description="survey.description"
        :duration="survey.duration"
        :quota="survey.quota"
        :enrolled="survey.enrolled"
        :payment="survey.payment"
        :type="survey.type"
        :is-enrolled="survey.isEnrolled"
        @enroll="toogleEnrollment"
      />
    </div>
    <div class="divider div-transparent" />
  </div>
</template>

<script>
import ActiveSurveyCard from './ActiveSurveyCard'

export default {
  components: {
    ActiveSurveyCard
  },
  data() {
    return {
      activeSurveys: []
    }
  },
  computed: {
    activeSurveysLength() {
      const activeSurveys = this.activeSurveys.filter(
        item => item.isEnrolled === false
      )
      return activeSurveys.length
    }
  },
  created() {
    this.activeSurveys = this.$store.getters.getActiveSurveys
  },
  methods: {
    toogleEnrollment(surveyId, surveyType) {
      this.$emit('openModal', surveyId, surveyType)
    }
  }
}
</script>

<style lang="css" scoped>
@import "../dashboard-style.css";
</style>
