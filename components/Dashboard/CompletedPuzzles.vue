<template>
  <div>
    <div class="enrolled component-title">{{ $t('dashboard.completed_title') }}</div>
    <div v-if="completedPuzzlesLength === 0" class="error-case">
      <h3>{{ $t('dashboard.no_completed') }}</h3>
    </div>
    <div v-else class="puzzle-card-wrapper">
      <v-expansion-panels>
        <v-expansion-panel
          v-for="puzzle in completedPuzzles"
          id="card-container"
          :key="puzzle.id"
        >
          <v-expansion-panel-header>
            <div class="card-details-wrapper">
              <h1>{{ $t('dashboard.puzzle_name') }} {{ puzzle.title }}</h1>
              <div class="completion-details">
                <p class="completed-on">{{ $t('dashboard.complete_time') }} {{ puzzle.completedOn }}</p>
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
          </v-expansion-panel-header>
          <v-expansion-panel-content>
            <div class="description">
              <p class="description-title">{{ $t('common.description') }}:</p>
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
    completedPuzzles() {
      return this.$store.getters.getActivePuzzles.filter(puzzle => puzzle.isCompleted === true)
    },
    completedPuzzlesLength() {
      return this.completedPuzzles.length
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
