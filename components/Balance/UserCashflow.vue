<template>
  <!-- <div class="user-cashflow-container">
    <v-card>
      <v-card-title>
        Earnings
        <v-spacer />
        <v-text-field
          v-model="search"
          append-icon="mdi-magnify"
          label="Search"
          single-line
          hide-details
        />
      </v-card-title>
      <v-data-table :headers="headers1" :items="completedSurveys" :search="search" />
    </v-card>
    <v-card>
      <v-card-title>
        Spendings
        <v-spacer />
        <v-text-field
          v-model="search"
          append-icon="mdi-magnify"
          label="Search"
          single-line
          hide-details
        />
      </v-card-title>
      <v-data-table class="spendings" :headers="headers2" :items="giftCard" :search="search" />
    </v-card>
    <v-btn @click="logHistory">Fetch Orders</v-btn>
  </div> -->
  <div class="user-cashflow-container">
    <v-btn @click="logHistory">Fetch Orders</v-btn>
    <v-data-table
      :headers="headers1"
      :items="completedSurveys"
      :items-per-page="5"
      :single-expand="singleExpand1"
      :expanded.sync="expanded1"
      :search="search1"
      item-key="id"
      show-expand
      class="completed-surveys-container"
    >
      <template v-slot:top>
        <v-toolbar flat>
          <v-toolbar-title>Earnings</v-toolbar-title>
          <v-spacer />
          <v-text-field
            v-model="search1"
            append-icon="mdi-magnify"
            label="Search"
            single-line
            hide-details
          />
        </v-toolbar>
      </template>
      <template v-slot:expanded-item="{ headers, item }">
        <td :colspan="headers.length" class="expanded-content">
          More info about {{ item.title }}
        </td>
      </template>
    </v-data-table>
    <v-data-table
      :headers="headers2"
      :items="giftCards"
      :items-per-page="5"
      :single-expand="singleExpand2"
      :expanded.sync="expanded2"
      :search="search2"
      item-key="referenceOrderID"
      show-expand
      class="past-orders-container"
    >
      <template v-slot:top>
        <v-toolbar flat>
          <v-toolbar-title>Spendings</v-toolbar-title>
          <v-spacer />
          <v-text-field
            v-model="search2"
            append-icon="mdi-magnify"
            label="Search"
            single-line
            hide-details
          />
        </v-toolbar>
      </template>
      <template v-slot:expanded-item="{ headers, item }">
        <td :colspan="headers.length" class="expanded-content">
          {{ item.message }}
        </td>
      </template>
    </v-data-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      search1: '',
      search2: '',
      expanded1: [],
      singleExpand1: false,
      expanded2: [],
      singleExpand2: false,
      headers1: [
        {
          text: 'Survey Name',
          align: 'start',
          sortable: false,
          value: 'title'
        },
        { text: 'Completed', value: 'completedOn' },
        { text: 'Payment ($)', value: 'payment' }
      ],
      headers2: [
        {
          text: 'Card Name',
          align: 'start',
          sortable: false,
          value: 'rewardName'
        },
        { text: 'Purchased on', value: 'createdAt' },
        { text: 'Value ($)', value: 'amountCharged.total' },
        { text: 'Status', value: 'status' }
      ],
      completedSurveys: null,
      giftCards: null
    }
  },
  created() {
    this.completedSurveys = this.$store.getters.getCompletedSurveys
    this.giftCards = this.$store.getters.getPastOrders.orders
    for (let i = 0; i < this.giftCards.length; i++) {
      const formatedDate = this.giftCards[i].createdAt.substring(0, 10)
      this.giftCards[i].createdAt = formatedDate
      // const formatedAmountCharged = this.giftCards[i].amountCharged['total'] + this.giftCards[i].amountCharged['currencyCode']
      // console.log(this.giftCards[i].amountCharged.total)
    }
    // console.log(this.giftCards)
  },
  methods: {
    logHistory() {
      console.log(this.$store.getters.getPastOrders)
      console.log(this.$store.getters.getPastOrders.orders[0])
    }
  }
}
</script>

<style scoped>
.user-cashflow-container {
    margin: 20px;
    width: 700px;
    max-width: fit-content;
}
.completed-surveys-container {
    margin-bottom: 20px;
    border: 1px solid #7abe8f;
    border-radius: 5px;
}
.past-orders-container {
    border: 1px solid #7abe8f;
    border-radius: 5px;
    width: 800px;
}
@media only screen and (max-width: 700px) {
    .past-orders-container {
        width: fit-content;
    }
}
.v-data-table >>> tbody tr:hover {
    background-color: #7abe8f !important;
}
.v-data-table >>> tbody tr.v-data-table__expanded__row {
    background-color: #7abe8f !important;
}
.expanded-content {
    padding: 10px !important;
    background-color: ivory;
}
</style>
