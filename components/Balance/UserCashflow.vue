<template>
  <div class="user-cashflow-container">
    <!-- <v-btn @click="logHistory">Fetch Orders</v-btn> -->
    <v-data-table
      :headers="headerTangoCards"
      :items="modifiedGiftCards"
      :items-per-page="5"
      :single-expand="singleExpand2"
      :expanded.sync="expandedTangoCards"
      :search="searchTangoCards"
      item-key="referenceOrderID"
      show-expand
      class="past-orders-container"
    >
      <template v-slot:top>
        <v-toolbar flat>
          <v-toolbar-title>Spendings</v-toolbar-title>
          <v-spacer />
          <v-text-field
            v-model="searchTangoCards"
            append-icon="mdi-magnify"
            label="Search"
            single-line
            hide-details
            class="search-bar"
          />
        </v-toolbar>
      </template>
      <template v-slot:expanded-item="{ headers, item }">
        <td :colspan="headers.length" class="expanded-content">
          <div>{{ item.message }}</div>
          <div class="recipient">
            <p>
              <span>Recipient's name: </span>{{ item.recipient.firstName }}
              {{ item.recipient.lastName }}
            </p>
            <p>
              <span>Recipient's e-mail: </span>{{ item.recipient.email }}
            </p>
          </div>
        </td>
      </template>
    </v-data-table>
    <v-data-table
      :headers="headerSurveys"
      :items="completedSurveys"
      :items-per-page="5"
      :single-expand="singleExpand1"
      :expanded.sync="expandedSurveys"
      :search="searchSurveys"
      item-key="id"
      show-expand
      class="completed-surveys-container"
    >
      <template v-slot:top>
        <v-toolbar flat>
          <v-toolbar-title>Earnings</v-toolbar-title>
          <v-spacer />
          <v-text-field
            v-model="searchSurveys"
            append-icon="mdi-magnify"
            label="Search"
            single-line
            hide-details
            class="search-bar"
          />
        </v-toolbar>
      </template>
      <template v-slot:expanded-item="{ headers, item }">
        <td :colspan="headers.length" class="expanded-content">
          More info about {{ item.title }}
        </td>
      </template>
    </v-data-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      headerSurveys: [
        {
          text: 'Survey Name',
          align: 'start',
          sortable: false,
          value: 'title'
        },
        { text: 'Completed', value: 'completedOn' },
        { text: 'Payment', value: 'paymentFormatted' }
      ],
      searchSurveys: '',
      expandedSurveys: [],
      singleExpand1: false,
      completedSurveys: null,

      headerTangoCards: [
        {
          text: 'Card Name',
          align: 'start',
          sortable: false,
          value: 'rewardName'
        },
        { text: 'Purchased on', value: 'createdAt' },
        { text: 'Payment', value: 'amountChargedFormatted' },
        { text: 'Status', value: 'status' }
      ],
      searchTangoCards: '',
      expandedTangoCards: [],
      singleExpand2: false,
      tangoCardOrders: null,
      // FETCHED TANGO CARDS FROM STORE ARE MODIFIED AND SAVED IN NEW VARIABLE: FAILED ORDERS ARE DELETED. DATE AND CURRENCY ARE FORMATTED
      modifiedGiftCards: []
    }
  },
  created() {
    this.completedSurveys = this.$store.getters.getActiveSurveys.filter(survey => survey.isCompleted === true)
    for (let i = 0; i < this.completedSurveys.length; i++) {
      const paymentFormatted = this.completedSurveys[i].payment + ' USD'
      this.completedSurveys[i].paymentFormatted = paymentFormatted
    }

    this.tangoCardOrders = this.$store.getters.getPastOrders.orders
    // // FORMAT DATE AND ADD amountCharged.total TO amountCharged.curencyCode
    for (let i = 0; i < this.tangoCardOrders.length; i++) {
      const copiedCard = this.tangoCardOrders[i]
      const formattedDate = copiedCard.createdAt.substring(0, 10)
      copiedCard.createdAt = formattedDate
      if (copiedCard.amountCharged) {
        const amountChargedFormatted =
                    copiedCard.amountCharged.total +
                    ' ' +
                    copiedCard.amountCharged.currencyCode
        copiedCard.amountChargedFormatted = amountChargedFormatted
        this.modifiedGiftCards.push(copiedCard)
      }
    }
  },
  methods: {
    logHistory() {
      // console.log(this.modifiedGiftCards)
    }
  }
}
</script>

<style scoped lang="scss">
.user-cashflow-container {
    margin: 20px;
    width: 700px;
    max-width: fit-content;
}
.v-data-table {
    margin: 20px 5px;
    border: 1px solid #7abe8f;
    border-radius: 5px;
    width: 800px;
    @include whitish-background-color;
}
@media only screen and (max-width: 700px) {
    .v-data-table {
        width: fit-content;
    }
}
.v-data-table >>> thead th.text-start {
    font-size: 0.8rem !important;
}
.v-data-table >>> tbody tr:hover {
    background-color: #7abe8f !important;
}
.v-data-table >>> tbody tr.v-data-table__expanded__row {
    background-color: #7abe8f !important;
}
.v-toolbar {
  @include whitish-background-color;
}
.expanded-content {
    padding: 10px !important;
    @include whitish-background-color;
}
.recipient {
    margin-top: 10px;
}
span {
    font-weight: bold;
}
p {
    margin: 5px 0 0 0;
}
@media only screen and (max-width: 400px) {
    .search-bar {
      width: 90px !important;
    }
}
</style>
