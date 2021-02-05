<template>
  <div>
    <div class="enrolled component-title">Completed surveys</div>
    <div v-if="completedSurveysLength === 0" class="error-case">
      <h3>No completed surveys yet</h3>
    </div>
    <div v-else class="survey-card-wrapper">
      <v-expansion-panels>
        <v-expansion-panel
          v-for="survey in completedSurveys"
          id="card-container"
          :key="survey.id"
        >
          <v-expansion-panel-header>
            <div class="card-details-wrapper">
              <h1>Survey name: {{ survey.title }}</h1>
              <div class="completion-details">
                <p class="payment-value">Payment: {{ survey.payment }}$</p>
                <p class="completed-on">Completed on: {{ survey.completedOn }}</p>
              </div>
              <footer>
                <div class="duration">
                  <p>Duration</p>
                  <p>{{ survey.duration }} minutes</p>
                </div>
                <div class="quota">
                  <p>Quota</p>
                  <p>{{ survey.enrolled }}/{{ survey.quota }}</p>
                </div>
              </footer>
            </div>
          </v-expansion-panel-header>
          <v-expansion-panel-content>
            <div class="description">
              <p class="description-title">Description:</p>
              <p class="description-content">
                {{ survey.description }}
              </p>
            </div>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    completedSurveys() {
      return this.$store.getters.getActiveSurveys.filter(survey => survey.isCompleted === true)
    },
    completedSurveysLength() {
      return this.completedSurveys.length
    }
  }
}
</script>

<style lang="scss" scoped>
@import "./card-style.scss";
</style>

<style scoped>
.component-title {
  text-align: center;
  font-size: 1.7rem;
  padding: 0 0 15px 0;
  padding: 0 10px;
  margin-bottom: 10px;
}
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
  .component-title {
    font-size: 1.5rem;
  }
}
@media screen and (min-width: 750px) {
  .divider {
    display: none;
  }
}
.v-expansion-panels {
  width: 90%;
}
.v-expansion-panel {
  margin: 5px 0;
  /* box-shadow: 5px 5px 10px rgba(0,0,0,0.5); */
}
.v-expansion-panel-header {
  padding: 0;
}
.v-expansion-panel-content >>> .v-expansion-panel-content__wrap {
  padding: 5px 10px !important;
}
</style>
