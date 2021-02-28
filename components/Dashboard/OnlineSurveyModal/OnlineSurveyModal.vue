<template>
  <div>
    <v-row justify="center">
      <v-dialog v-model="showModal" persistent max-width="300">
        <v-card>
          <v-card-title class="headline">
            {{ puzzle.title }}
          </v-card-title>
          <v-card-text>{{ puzzle.description }}</v-card-text>
          <v-card-text>
            {{ $t("dashboard.online_title") }}
          </v-card-text>
          <v-card-actions>
            <v-spacer />
            <v-btn color="green darken-1" text @click="withdraw">
              {{ $t("common.withdraw") }}
            </v-btn>
            <v-btn color="green darken-1" text @click="toogleModal">
              {{ $t("common.confirm") }}
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
      puzzle: []
    }
  },
  watch: {
    showModal() {
      this.puzzle = this.$store.getters.getActivePuzzles.filter(
        item => item.id === this.id
      )[0]
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
