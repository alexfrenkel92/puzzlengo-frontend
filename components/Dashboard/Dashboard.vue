<template>
  <div class="dashboard-wrapper">
    <div class="active-completed-container">
      <active-puzzles class="active-container" @openModal="openModal" />
      <div class="divider-vertical" />
      <completed-puzzles class="completed-container" @openModal="openModal" />
    </div>
    <puzzle-modal
      :id="puzzleId"
      :puzzle="puzzle"
      :show-modal="puzzleModal"
      @confirm="confirmEnrollment"
      @withdraw="closeModal"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      puzzleModal: false,
      puzzleId: null,
      puzzle: null,
      puzzleToEnrollDetails: null
    }
  },
  methods: {
    openModal(puzzle) {
      this.puzzleId = puzzle.id
      this.puzzle = puzzle
      this.puzzleModal = !this.puzzleModal
    },
    closeModal() {
      this.puzzleModal = !this.puzzleModal
    },
    confirmEnrollment() {
      const puzzle = this.$store.getters.getActivePuzzles.find(puzzle => puzzle.id === this.puzzleId)
      this.$store.dispatch('calculateBalance', puzzle.payment)
      this.$store.dispatch('toogleEnrollment', this.puzzleId)
      this.closeModal()
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
  .puzzle-title {
    font-size: 1.5rem;
  }
}
@media screen and (min-width: 750px) {
  .divider {
    display: none
  }
}

</style>
