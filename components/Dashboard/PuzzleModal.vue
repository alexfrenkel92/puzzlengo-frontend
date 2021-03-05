<template>
  <div>
    <v-row justify="center">
      <v-dialog v-model="showModal" persistent max-width="300">
        <v-card>
          <v-card-title class="headline justify-center">
            {{ puzzle.title }}
          </v-card-title>
          <div id="puzzleApp" />
          <v-card-actions class="justify-center">
            <!-- <v-spacer /> -->
            <v-btn v-if="win === false" color="green darken-1" text @click="withdraw">
              {{ $t('common.withdraw') }}
            </v-btn>
            <v-btn v-if="started === false" color="green darken-1" text @click="init">
              Show the puzzle
            </v-btn>
            <v-btn v-if="win === true" color="green darken-1" text @click="toogleModal">
              Finish
            </v-btn>
          </v-card-actions>
          <v-card-text v-if="win === true" class="text-center">
            <p class="end-text">Well done! You have solved this puzzle in {{ timeLimit }} seconds</p>
            <p class="end-text"><b>Credits received: {{ puzzle.payment }}$</b></p>
          </v-card-text>
        </v-card>
      </v-dialog>
    </v-row>
  </div>
</template>

<script>
import puzzle from 'jigsaw-puzzle'

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
      puzzle: [],
      puzzleApp: '',
      started: false,
      win: false,
      timeLimit: ''
    }
  },
  computed: {
    image() {
      return require('~/static/images/puzzles/' + this.puzzle.img + '.jpg')
    }
  },
  watch: {
    showModal() {
      this.puzzle = this.$store.getters.getActivePuzzles.filter(item => item.id === this.id)[0]
    }
  },
  methods: {
    toogleModal() {
      this.$emit('confirm')
      this.destroyCanvas()
    },
    withdraw() {
      this.$emit('withdraw')
      if (this.started === true) {
        this.destroyCanvas()
      }
    },
    init() {
      this.started = true
      puzzle({
        element: '#puzzleApp',
        pieces: { x: 3, y: 3 },
        draggable: true,
        onComplete: (state) => {
          this.win = true
          this.timeLimit = ((Date.now() - state.puzzle.timeStamp) / 1000)
        },
        image: this.image
      })
    },
    destroyCanvas() {
      const canvas = document.querySelector('#puzzleApp')
      canvas.removeChild(canvas.childNodes[0])
      this.started = false
      this.win = false
    }
  }
}
</script>

<style lang="scss" scoped>
.v-card {
  border-radius: 3px !important;
  @include whitish-background-color;
}
#puzzleApp {
  border: 1px solid black;
  width: 275px;
  height: 275px;
  margin: auto;
}
.end-text {
  margin-bottom: 0;
}
</style>
