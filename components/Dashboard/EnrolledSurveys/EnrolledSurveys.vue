<template>
  <div class="container">
    <div class="enrolled surveys-title">Enrolled Surveys</div>
    <div v-if="enrolledSurveysLength === 0" class="error-case">
      <h3>No enrollments yet</h3>
    </div>
    <div v-else class="survey-card-wrapper">
      <enrolled-survey-card
        v-for="survey in enrolledSurveys"
        :id="survey.id"
        :key="survey.id"
        :title="survey.title"
        :description="survey.description"
        :duration="survey.duration"
        :quota="survey.quota"
        :enrolled="survey.enrolled"
        :payment="survey.payment"
        :type="survey.type"
        :is-postponed="survey.isPostponed"
        :is-enrolled="survey.isEnrolled"
        :is-completed="survey.isCompleted"
        @withdraw="toogleWithdrawal"
        @proceed="toogleCompletion"
      />
    </div>
  </div>
</template>

<script>
import EnrolledSurveyCard from './EnrolledSurveyCard'

export default {
  components: {
    EnrolledSurveyCard
  },
  data() {
    return {
      enrolledSurveys: []
    }
  },
  computed: {
    enrolledSurveysLength() {
      const enrolledSurveys = this.enrolledSurveys.filter(item => item.isEnrolled === true && item.isCompleted === false)
      return enrolledSurveys.length
    }
  },
  created() {
    this.enrolledSurveys = this.$store.getters.getActiveSurveys
  },
  methods: {
    toogleWithdrawal(surveyId) {
      this.$store.dispatch('toogleWithdrawal', surveyId)
    },
    toogleCompletion(surveyId, surveyType) {
      if (surveyType === 'online') {
        this.$store.dispatch('toogleCompletion', surveyId)
      } else if (surveyType === 'personel') {
        this.$emit('openModal', surveyId, surveyType)
      }
    }
  }
}
</script>

<style lang="css" scoped>
@import '../dashboard-style.css'
</style>
