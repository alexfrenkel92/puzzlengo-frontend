<template>
  <div>
    <v-row justify="center">
      <v-dialog v-model="showModal" persistent max-width="300">
        <v-card>
          <v-card-title class="headline">
            Survey title
          </v-card-title>
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

<style >
</style>
