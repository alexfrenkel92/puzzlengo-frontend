<template>
  <div>
    <v-dialog v-model="showModal" persistent width="500">

      <v-tabs>
        <v-tab>
          <v-icon left>
            mdi-calendar
          </v-icon>
          Schedule appointment
        </v-tab>
        <v-tab>
          <v-icon left>
            mdi-information-variant
          </v-icon>
          More information
        </v-tab>

        <v-tab-item>
          <v-card>
            <v-card-title class="headline grey lighten-2">
              Pleas select an appointment for <br>{{ survey.title }}
            </v-card-title>
            <v-divider />
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
            >
              <template v-slot:[`item.actions`]="{ item }">
                <v-icon small class="mr-2" @click="book(item)">
                  mdi-calendar-multiple-check
                </v-icon>
              </template>
            </v-data-table>
            <v-btn @click="withdraw">Cancel</v-btn>
            <v-btn v-if="myAppointment!=null" @click="toogleAppointment">Confirm</v-btn>
          </v-card>
        </v-tab-item>
        <v-tab-item>
          <v-card>
            <v-card-title class="headline grey lighten-2">
              {{ survey.title }}
            </v-card-title>
            <v-divider />
            <v-card-subtitle>
              {{ survey.description }}
            </v-card-subtitle>
            <v-card-text>
              Your appointment: <span v-if="selectedTime===null">Please select an appointment</span><span v-else>{{ myAppointment.date }}</span>
              <v-divider />
              Location: <span v-if="selectedTime===null">Please select an appointment</span><span v-else>{{ myAppointment.address }}</span>
            </v-card-text>
            <v-btn @click="withdraw">Cancel</v-btn>
            <v-btn v-if="myAppointment!=null" @click="toogleAppointment">Confirm</v-btn>
          </v-card>
        </v-tab-item>
      </v-tabs></v-dialog>
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
      selectedTimeLocal: null,
      search: '',
      headers: [
        {
          text: 'Date',
          value: 'date'
        },
        { text: 'Address', value: 'address' },
        { text: 'Book appointment', value: 'actions', sortable: false }
      ]
    }
  },
  watch: {
    showModal(val) {
      if (val) {
        this.survey = this.$store.getters.getActiveSurveys.filter(item => item.id === this.id)[0]
      }
      this.myAppointment = this.survey.allTime.filter(item => item.id === this.survey.myTime)[0]
      this.appointments = this.survey.allTime
    }
  },
  methods: {
    book(item) {
      this.myAppointment = item
    },
    toogleAppointment() {
      this.$store.dispatch('toogleAppointment', [this.id, this.myAppointment.id])
      this.$emit('confirm', this.myAppointment.id)
    },
    displaySelected(item) {
      console.log(this.myAppointment)
      return item === this.myAppointment ? 'selected' : ''
    },
    withdraw() {
      this.$emit('withdraw')
    }
  }
}
</script>

<style>
  .v-text-field {
    width: 90%;
    margin: auto;
  }
  .v-data-table{
    margin-bottom: 10px;
  }
  .selected {
     background-color: #7ABE8F
  }
  .selected:hover{
    background-color: #7abe90bb!important
  }
</style>
