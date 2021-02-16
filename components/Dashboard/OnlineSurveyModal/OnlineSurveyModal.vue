<template>
  <div>
    <v-row justify="center">
      <v-dialog v-model="showModal" persistent max-width="300">
        <v-card>
          <v-card-title class="headline">
            {{ survey.title }}
          </v-card-title>
          <v-card-text>{{ survey.description }}</v-card-text>
          <v-card-text>
            Press Confirm to start the survey. You will be navigated to another page. When finished, come back to check your survey's status.
          </v-card-text>
          <v-card-actions>
            <v-spacer />
            <v-btn color="green darken-1" text @click="withdraw">
              Withdraw
            </v-btn>
            <v-btn color="green darken-1" text @click="toogleModal">
              Confirm
            </v-btn>
          </v-card-actions>
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
      required: false,
      default: -1
    }
  },
  data() {
    return {
      survey: []
    }
  },
  watch: {
    showModal() {
      this.survey = this.$store.getters.getActiveSurveys.filter(item => item.id === this.id)[0]
    }
  },
  methods: {
    toogleModal() {
      this.$emit('confirm')
    },
    withdraw() {
      this.$emit('withdraw')
    }
  }
}
</script>

<style lang="scss" scoped>
  .v-card {
    border-radius: 3px !important;
    @include whitish-background-color;
  }
</style>
