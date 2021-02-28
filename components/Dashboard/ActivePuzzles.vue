<template>
  <div>
    <div class="active component-title">{{ $t('dashboard.available_title') }}</div>
    <div v-if="activePuzzlesLength === 0" class="error-case">
      <h3>{{ $t('dashboard.no_available') }}</h3>
    </div>
    <div v-else class="puzzle-card-wrapper">
      <v-expansion-panels>
        <v-expansion-panel
          v-for="puzzle in activePuzzles"
          id="card-container"
          :key="puzzle.id"
        >
          <v-expansion-panel-header>
            <client-only>
              <div class="card-details-wrapper">
                <h1>{{ $t('dashboard.puzzle_name') }} {{ puzzle.title }}</h1>
                <div class="btn-wrapper">
                  <v-btn btn-style="approve" class="btn-enroll" @click="toogleEnrollment(puzzle)" @click.native.stop>
                    {{ $t('common.enroll') }}
                  </v-btn>
                </div>
                <footer>
                  <div class="duration">
                    <p>{{ $t('common.duration') }}</p>
                    <p>{{ puzzle.duration }} {{ $t('dashboard.minutes') }}</p>
                  </div>
                  <div class="quota">
                    <p>{{ $t('common.payment') }}</p>
                    <p>{{ puzzle.payment }}$</p>
                  </div>
                </footer>
              </div>
            </client-only>
          </v-expansion-panel-header>
          <v-expansion-panel-content>
            <div class="description">
              <p class="description-title">{{ $t('common.description') }}</p>
              <p class="description-content">
                {{ puzzle.description }}
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
    activePuzzles() {
      return this.$store.getters.getActivePuzzles.filter(
        puzzle => puzzle.isCompleted === false
      )
    },
    activePuzzlesLength() {
      return this.activePuzzles.length
    }
  },
  methods: {
    toogleEnrollment(puzzle) {
      this.$emit('openModal', puzzle)
    },
    hackerStyle(puzzle) {
      this.$store.dispatch('toogleCompletion', puzzle.id)
      this.$store.dispatch('calculateBalance', puzzle.payment)
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
.puzzle-card-wrapper {
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
