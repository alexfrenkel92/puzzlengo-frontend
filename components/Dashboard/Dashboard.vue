<template>
  <div class="dashboard-wrapper">
    <div class="active-enrolled-container">
      <active-surveys class="active-container" @openModal="openModal" />
      <div class="divider-vertical" />
      <enrolled-surveys class="enrolled-container" @openModal="openModal" />
    </div>
    <div class="divider-horizontal" />
    <completed-surveys />
    <online-survey-modal
      :show-modal="onlineSurveyModal"
      @confirm="confirmEnrollment"
      @withdraw="closeOnlineModal"
    />
    <personel-survey-modal
      :id="surveyId"
      :show-modal="personalSurveyModal"
      @confirm="confirmEnrollment"
      @withdraw="closePersonelModal"
    />
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

<style lang="css" scoped>
@import "./dashboard-style.css";
</style>
