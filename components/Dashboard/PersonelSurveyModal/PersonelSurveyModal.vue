<template>
  <v-dialog v-model="showModal" persistent width="500">
    <v-card>
      <v-card-title class="headline grey lighten-2">
        Please select an appointment for {{ title }}
      </v-card-title>
      <v-card-text>
        {{ description }}
      </v-card-text>
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
        :items="times"
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
      <v-divider />
      <v-card-actions>
        <v-btn @click="withdraw">Cancel</v-btn>
        <v-btn v-if="selectedTime != null" @click="toogleModal">Confirm</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: {
    showModal: {
      type: Boolean,
      required: true
    }
  },
  data() {
    return {
      search: '',
      id: 1,
      selectedTime: null,
      title: 'Survey 1',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla fringilla, tellus at finibus interdum, dui tortor suscipit nisi, et tempor nunc nisl nec diam.',
      address: 'Dex street 6',
      headers: [
        {
          text: 'Day',
          value: 'day'
        },
        { text: 'Time', value: 'time' },
        { text: 'Address', value: 'address' },
        { text: 'Book appointment', value: 'actions', sortable: false }
      ],
      times: [
        {
          id: 1,
          day: '2021-01-14',
          time: '14:00:00',
          address: 'steet 7/v'
        },
        {
          id: 2,
          day: '2021-01-14',
          time: '18:00:00',
          address: 'steet 7/v'
        },
        {
          id: 3,
          day: '2021-01-14',
          time: '20:00:00',
          address: 'othersteet 62'
        },
        {
          id: 4,
          day: '2021-01-15',
          time: '10:00:00',
          address: 'steet 7/v'
        },
        {
          id: 5,
          day: '2021-01-15',
          time: '15:00:00',
          address: 'steet 7/v'
        }
      ]
    }
  },
  methods: {
    book(item) {
      if (this.selectedTime === item) {
        this.selectedTime = null
      } else {
        this.selectedTime = item
      }
    },
    toogleModal() {
      this.$emit('confirm')
    },
    displaySelected(item) {
      return item === this.selectedTime ? 'selected' : ''
    },
    withdraw() {
      this.$emit('withdraw')
    }
  }
}
</script>

<style>
.footer {
  background-color: red;
  position: relative;
  bottom: 0;
}
.v-card__title {
  word-break: normal;
}
.v-text-field {
  width: 90%;
  margin: auto;
}
.v-data-table {
  margin-bottom: 10px;
}
.selected {
  background-color: #7abe8f;
}
.selected:hover {
  background-color: #7abe90bb !important;
}
</style>
