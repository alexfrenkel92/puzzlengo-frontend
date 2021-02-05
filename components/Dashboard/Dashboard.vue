<template>
  <div class="dashboard-wrapper">
    <div class="active-completed-container">
      <active-surveys class="active-container" @openModal="openModal" />
      <div class="divider-vertical" />
      <completed-surveys class="completed-container" @openModal="openModal" />
    </div>
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
      } else if (surveyType === 'personal') {
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
      } else if (this.surveyType === 'personal') {
        this.closePersonelModal()
      }
    }
  }
}
</script>

<style scoped>
/* Dashboard.vue styling */
.active-completed-container {
  content: "";
  height: fit-content;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;
  position: relative;
}
.active-container,
.completed-container {
  width: 49%;
  float: left;
  margin-bottom: 20px;
}
.dashboard-wrapper {
  width: 100%;
}
@media screen and (max-width: 750px) {
  .active-container,
  .completed-container {
    width: 100%;
    float: inherit;
  }
  .divider-vertical {
    display: none;
  }
}
.divider-vertical {
  width: 1px;
  height: 100vh;
  position: absolute;
  background: linear-gradient(transparent, rgb(51, 50, 48));
}

/* Dashboard.vue's components styling */
h3 {
  margin: 0 10px;
}
.survey-card-wrapper {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}
.error-case {
  text-align: center;
}

@media screen and (max-width: 320px) {
  .surveys-title {
    font-size: 1.5rem;
  }
}
@media screen and (min-width: 750px) {
  .divider {
    display: none
  }
}

</style>
