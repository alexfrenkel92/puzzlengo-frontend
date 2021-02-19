<template>
  <div class="calendar">
    <v-row class="fill-height">
      <v-col>
        <v-sheet height="64">
          <v-toolbar flat class="toolbar">
            <v-btn
              outlined
              class="mr-4"
              color="grey darken-2"
              @click="setToday"
            >
              Today
            </v-btn>
            <v-btn fab text small color="grey darken-2" @click="prev">
              <v-icon small> mdi-chevron-left </v-icon>
            </v-btn>
            <v-btn fab text small color="grey darken-2" @click="next">
              <v-icon small>mdi-chevron-right</v-icon>
            </v-btn>
            <v-toolbar-title v-if="$refs.calendar">
              {{ $refs.calendar.title }}
            </v-toolbar-title>
            <v-spacer />
            <v-menu bottom right>
              <template v-slot:activator="{ on, attrs }">
                <v-btn outlined color="grey darken-2" v-bind="attrs" v-on="on">
                  <span>{{ typeToLabel[type] }}</span>
                  <v-icon right> mdi-menu-down </v-icon>
                </v-btn>
              </template>
              <v-list>
                <v-list-item @click="type = 'week'">
                  <v-list-item-title>Week</v-list-item-title>
                </v-list-item>
                <v-list-item @click="type = 'month'">
                  <v-list-item-title>Month</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>
          </v-toolbar>
        </v-sheet>
        <v-sheet height="600">
          <v-calendar
            ref="calendar"
            v-model="focus"
            color="#7abe8f"
            :events="eventList"
            :type="type"
            @click:event="showEvent"
          />
          <div>
            <PersonelSurveyModal
              :id="selectedEvent.id"
              :show-modal="selectedOpen"
              :selected-time="selectedEvent"
              @confirm="confirm"
              @withdraw="withdraw"
            />
          </div>
        </v-sheet>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  data: () => ({
    focus: '',
    type: 'month',
    typeToLabel: {
      month: 'Month',
      week: 'Week'
    },
    selectedEvent: {},
    selectedElement: null,
    selectedOpen: false,
    enrolledSurveys: null,
    eventList: []
  }),
  mounted() {
    this.$refs.calendar.checkChange()
  },
  created() {
    const _this = this
    _this.enrolledSurveys = _this.$store.getters.getActiveSurveys.filter(
      item => item.isEnrolled === true && item.isCompleted === false
    )
    _this.enrolledSurveys.forEach((element) => {
      const id = element.id
      const name = element.title
      const start = element.allTime.filter(
        item => item.id === element.myTime
      )[0].date
      _this.eventList.push({ id, name, start, color: '#7abe8f' })
    })
  },
  methods: {
    updateData(id) {
      const newDate = this.enrolledSurveys
        .filter(item => item.id === this.selectedEvent.id)[0]
        .allTime.filter(item => item.id === id)[0].date
      this.eventList.find(
        event => event.id === this.selectedEvent.id
      ).start = newDate
    },
    setToday() {
      this.focus = ''
    },
    showEvent({ nativeEvent, event }) {
      const open = () => {
        this.selectedEvent = event
        this.selectedElement = nativeEvent.target
        setTimeout(() => {
          this.selectedOpen = true
        }, 10)
      }
      if (this.selectedOpen) {
        this.selectedOpen = false
        setTimeout(open, 10)
      } else {
        open()
      }

      nativeEvent.stopPropagation()
    },
    withdraw() {
      this.selectedOpen = false
    },
    confirm(id) {
      this.updateData(id)
      this.selectedOpen = false
    },
    prev() {
      this.$refs.calendar.prev()
    },
    next() {
      this.$refs.calendar.next()
    }
  }
}
</script>

<style scoped lang="scss">
.calendar {
  flex: 1 1 0;
  margin: 10px;
}
.col {
  padding: 0 12px;
}
@media screen and (max-width: 330px) {
  .col {
    width: 300px !important;
  }
}
@media screen and (max-width: 300px) {
  .col {
    width: 270px !important;
  }
}
.toolbar {
  @include whitish-background-color;
}
.v-calendar-monthly {
  @include whitish-background-color;
}
</style>
