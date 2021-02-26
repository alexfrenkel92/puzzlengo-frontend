<template>
  <div>
    <v-row justify="center">
      <v-dialog v-model="showModal" fullscreen persistent hide-overlay>
        <v-card>
          <div class="main-wrapper">
            <h1>{{ title }} Survey Questions</h1>
            <div v-if="isCompleted === false" class="not-completed">
              <div class="completion">
                <p>Not completed</p>
              </div>
              <h3>Click on the button below to complete the survey</h3>
              <v-btn @click="executeSurvey">This Button</v-btn>
            </div>
            <div v-else-if="isCompleted === true" class="completed">
              <p>This section has been completed.</p>
            </div>
            <app-button
              type="button"
              btn-style="approve"
              style="height: 50px; width: 150px; margin-bottom: 20px"
              @click="closeModal"
            >
              Back to Profiling
            </app-button>
          </div>
        </v-card>
      </v-dialog>
    </v-row>
  </div>
</template>

<script>
export default {
  props: {
    showModal: {
      type: Boolean,
      required: true
    },
    id: {
      type: Number,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    type: {
      type: String,
      required: true
    },
    url: {
      type: String,
      required: true
    },
    img: {
      type: String,
      required: true
    },
    isCompleted: {
      type: Boolean,
      required: true
    }
  },
  methods: {
    closeModal() {
      this.$emit('closeModal')
    },
    executeSurvey() {
      window.location.href = this.url
      // this.$store.dispatch('toogleSurveyCompletion', [this.id, this.type])
    }
  }
}
</script>

<style lang="scss" scoped>
.v-card {
  border-radius: 3px !important;
  background: rgba(122, 190, 143, 0.25);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(1px);
  -webkit-backdrop-filter: blur(1px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
}
.main-wrapper {
  margin: 10% auto 0 auto;
  padding: 15px 20px;
  @include whitish-background-color;
  // @include creamy-white-color;
  border-radius: 5px !important;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  position: relative;
  overflow: hidden;
  width: 550px;
  min-width: 280px;
  height: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.completed,
.not-completed {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
h1 {
  text-align: center;
}
.completed {
  font-size: large;
  font-weight: 550;
  color: green;
  margin: 1rem;
  text-align: center;
}
.completion {
  font-size: x-large;
  font-weight: 550;
  color: red;
  margin-top: 1rem;
  text-align: center;
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
