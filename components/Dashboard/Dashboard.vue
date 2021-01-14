<template>
  <div class="dashboard-wrapper">
    <ActiveSurveys @openModal="openModal" />
    <EnrolledSurveys @openModal="openModal" />
    <CompletedSurveys />
    <OnlineSurveyModal :show-modal="onlineSurveyModal" @confirm="confirmEnrollment" @withdraw="closeOnlineModal" />
    <PersonelSurveyModal :id="surveyId" :show-modal="personalSurveyModal" @confirm="confirmEnrollment" @withdraw="closePersonelModal" />
  </div>
</template>

<script>

export default {
  data() {
    return {
      onlineSurveyModal: false,
      personalSurveyModal: false,
      surveyId: null,
      surveyType: null
    }
  },
  methods: {
    openModal(surveyId, surveyType) {
      this.surveyId = surveyId
      this.surveyType = surveyType
      if (surveyType === 'online') {
        this.onlineSurveyModal = !this.onlineSurveyModal
      } else if (surveyType === 'personel') {
        this.personalSurveyModal = !this.personalSurveyModal
      }
    },
    closeOnlineModal() {
      this.onlineSurveyModal = !this.onlineSurveyModal
    },
    closePersonelModal() {
      this.personalSurveyModal = !this.personalSurveyModal
    },
    confirmEnrollment() {
      this.$store.dispatch('toogleEnrollment', this.surveyId)
      if (this.surveyType === 'online') {
        this.closeOnlineModal()
      } else if (this.surveyType === 'personel') {
        this.closePersonelModal()
      }
    }
  }
}
</script>

<style scoped>
.dashboard-wrapper {
  width: 100%;
}
</style>
