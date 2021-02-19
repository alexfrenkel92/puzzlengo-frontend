<template>
  <div>
    <v-dialog v-model="showModal" persistent width="500">
      <v-tabs>
        <v-tabs-slider color="#7abe8f" />
        <v-tab><v-icon left>mdi-calendar</v-icon>{{ $t('common.date') }}</v-tab>
        <v-tab><v-icon left>mdi-information-variant</v-icon>{{ $t('common.more_info') }}</v-tab>
        <v-tab-item>
          <v-card>
            <v-card-title class="headline">
              <span v-if="selectedTime === null">{{ $t('dashboard.appointment_for') }}<br></span>{{ survey.title }}
            </v-card-title>
            <v-divider />
            <v-card-text>
              <v-text-field
                v-model="search"
                append-icon="mdi-magnify"
                label="Search"
                single-line
                hide-details
              />
              <v-data-table
                :headers="headers"
                :items="appointments"
                :item-class="displaySelected"
                :search="search"
                hide-default-footer
                class="elevation-1"
                @click="book"
              >
                <template v-slot:[`item.actions`]="{ item }" class="book-btn-wrapper">
                  <AppButton class="book-button" btn-style="approve" @click="book(item)">{{ $t('dashboard.book') }}</AppButton>
                </template>
              </v-data-table>
            </v-card-text>
            <v-card-actions>
              <AppButton
                class="action-btn"
                btn-style="cancel"
                @click="withdraw"
              >
                {{ $t('common.cancel') }}
              </AppButton>
              <AppButton
                v-if="myAppointment != null"
                class="action-btn"
                btn-style="approve"
                @click="toogleAppointment"
              >
                {{ $t('common.confirm') }}
              </AppButton>
            </v-card-actions>
          </v-card>
        </v-tab-item>
        <v-tab-item>
          <v-card>
            <v-card-title class="headline">
              {{ survey.title }}
            </v-card-title>
            <v-divider />
            <v-card-subtitle>
              {{ survey.description }}
            </v-card-subtitle>
            <v-card-text>
              {{ $t('dashboard.your_appointment') }}
              <span
                v-if="selectedTime === null"
              >{{ $t('dashboard.appointment') }}</span><span v-else>{{ myAppointment.date }}</span>
              <v-divider />
              {{ $t('dashboard.location') }}
              <span
                v-if="selectedTime === null"
              >{{ $t('dashboard.appointment') }}</span><span v-else>{{ myAppointment.address }}</span>
            </v-card-text>
            <v-card-actions>
              <AppButton
                class="action-btn"
                btn-style="cancel"
                @click="withdraw"
              >
                {{ $t('common.cancel') }}
              </AppButton>
              <AppButton
                v-if="myAppointment != null"
                class="action-btn"
                btn-style="approve"
                @click="toogleAppointment"
              >
                {{ $t('common.confirm') }}
              </AppButton>
            </v-card-actions>
          </v-card>
        </v-tab-item>
      </v-tabs>
    </v-dialog>
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
    },
    selectedTime: {
      type: Object,
      required: false,
      default: null
    }
  },
  data() {
    return {
      survey: [],
      appointments: null,
      myAppointment: { id: Number, date: String, address: String },
      search: '',
      headers: [
        { text: 'Date', value: 'date' },
        { text: 'Address', value: 'address' },
        { text: 'Book appointment', value: 'actions', sortable: false }
      ]
    }
  },
  watch: {
    showModal(val) {
      if (val) {
        this.survey = this.$store.getters.getActiveSurveys.filter(
          item => item.id === this.id
        )[0]
      }
      this.myAppointment = this.survey.allTime.filter(
        item => item.id === this.survey.myTime
      )[0]
      this.appointments = this.survey.allTime
    }
  },
  methods: {
    book(item) {
      this.myAppointment = item
    },
    toogleAppointment() {
      this.$store.dispatch('toogleAppointment', [
        this.id,
        this.myAppointment.id
      ])
      this.$emit('confirm', this.myAppointment.id)
    },
    displaySelected(item) {
      return item === this.myAppointment ? 'selected' : ''
    },
    withdraw() {
      this.$emit('withdraw')
    }
  }
}
</script>

<style scoped>
.footer {
  background-color: red;
  position: relative;
  bottom: 0;
}
.v-card__title {
  word-break: normal;
  /* background-color: #7abe8f !important; */
  background-color: #464444 !important;
  color: white !important;
  border-radius: 0 !important;
}
.v-text-field {
  width: 90%;
  margin: auto;
}
.v-card__text {
  padding: 5px !important;
}
.v-data-table {
  margin-bottom: 10px;
}
.v-tab--active {
  color: black !important;
}
.v-card__actions {
  justify-content: center;
}
.action-btn {
  margin: 0 10px;
  padding: 5px;
  width: 100px !important;
  height: 36px;
  box-shadow: none !important;
}
.book-btn-wrapper {
  background-color: red !important;
}
.book-button {
  box-shadow: none !important;
  margin: auto;
  margin-left: 25px;
}
</style>

<style>
.selected {
  background-color: #7abe8f !important;
}
.selected > .v-data-table__mobile-row{
  background-color: #7abe8f !important;
}
.selected:hover {
  background-color: #7abe90bb !important;
}
</style>
