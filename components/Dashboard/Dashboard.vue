<template>
  <div class="dashboard-wrapper">
    <div class="active-enrolled-container">
      <active-surveys class="active-container" @openModal="openModal" />
      <enrolled-surveys class="enrolled-container" @openModal="openModal" />
    </div>
    <div class="divider div-transparent" />
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

<style scoped>
.active-container,
.enrolled-container {
  width: 50%;
  float: left;
}
/* .active-container {
  background-color: sandybrown;
}
.enrolled-container {
  background-color: salmon;
} */
.active-enrolled-container {
  content: "";
  display: table;
  clear: both;
}
.dashboard-wrapper {
  width: 100%;
}
.divider {
  position: relative;
  margin: 10px 0 20px 0;
  height: 1px;
}

.div-transparent:before {
  content: "";
  position: absolute;
  top: 0;
  left: 5%;
  right: 5%;
  width: 90%;
  height: 1px;
  background-image: linear-gradient(
    to right,
    transparent,
    rgb(48, 49, 51),
    transparent
  );
}
</style>
