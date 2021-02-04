<template>
  <div>
    <div class="active component-title">Active surveys to enroll</div>
    <div v-if="activeSurveysLength === 0" class="error-case">
      <h3>There are no surveys available, check back later</h3>
    </div>
    <div v-else class="survey-card-wrapper">
      <v-expansion-panels>
        <v-expansion-panel
          v-for="survey in activeSurveys"
          id="card-container"
          :key="survey.id"
        >
          <v-expansion-panel-header>
            <client-only>
              <div class="card-details-wrapper">
                <h1>Survey name: {{ survey.title }}</h1>
                <div class="payment">
                  <p class="payment-value">Payment: {{ survey.payment }}$</p>
                </div>
                <div v-if="survey.isEnrolled === false" class="btn-wrapper">
                  <v-btn class="btn-enroll" @click="toogleEnrollment(survey.id, survey.type)" @click.native.stop>
                    Enroll
                  </v-btn>
                </div>
                <div v-if="survey.isEnrolled === true && survey.isCompleted === false" class="btn-wrapper">
                  <v-btn class="btn-withdraw" @click="withdraw(survey.id)" @click.native.stop>
                    Withdraw
                  </v-btn>
                  <v-btn class="btn-resume" @click="toogleCompletion(survey.id, survey.type)" @click.native.stop>
                    {{ btnText }}
                  </v-btn>
                  <div v-if="survey.type === 'personel'" class="completion-btn" title="cheatBtn for hackers, press to detonate" @click="hackerStyle(survey.id)" />
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
            </client-only>
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
  data() {
    return {
      btnText: 'RESUME'
    }
  },
  computed: {
    activeSurveys() {
      return this.$store.getters.getActiveSurveys.filter(
        survey => survey.isCompleted === false
      )
    },
    activeSurveysLength() {
      return this.activeSurveys.length
    }
  },
  methods: {
    toogleEnrollment(surveyId, surveyType) {
      if (surveyType === 'online') {
        this.btnText = 'Resume'
      } else if (surveyType === 'personel') {
        this.btnText = 'Reschedule'
      }
      this.$emit('openModal', surveyId, surveyType)
    },
    withdraw(surveyId) {
      this.$store.dispatch('toogleWithdrawal', surveyId)
    },
    toogleCompletion(surveyId, surveyType) {
      if (surveyType === 'online') {
        this.$store.dispatch('toogleCompletion', surveyId)
      } else if (surveyType === 'personel') {
        this.$emit('openModal', surveyId, surveyType)
      }
    },
    hackerStyle(id) {
      this.$store.dispatch('toogleCompletion', id)
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
