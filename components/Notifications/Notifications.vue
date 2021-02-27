<template>
  <div class="notification-wrapper">
    <v-expansion-panels accordion>
      <v-data-iterator
        class="pagination"
        :items="notifications"
        :page="page"
        :items-per-page.sync="itemsPerPage"
        hide-default-footer
      >
        <template v-slot:header>
          <div class="page-controller" align="center" justify="center">
            <span class="mr-4 black--text">
              Page {{ page }} of {{ numberOfPages }}
            </span>
            <v-btn dark color="#7abe8f" icon @click="formerPage">
              <v-icon>mdi-chevron-left</v-icon>
            </v-btn>
            <v-btn dark color="#7abe8f" icon @click="nextPage">
              <v-icon>mdi-chevron-right</v-icon>
            </v-btn>
          </div>
        </template>
        <template v-slot:default="props">
          <v-expansion-panel
            v-for="notification in props.items"
            :key="notification.id"
          >
            <div v-if="notification.type === 'online'">
              <v-expansion-panel-header :class="{ notified: !notification.notificationChecked }" @click="notified(notification)">
                {{ notification.title }}: {{ notification.surveyTitle }}
              </v-expansion-panel-header>
              <v-expansion-panel-content>
                <div class="completion-details">
                  <p class="completed-on">
                    Description: {{ notification.description }}
                  </p>
                  <p class="payment-value">
                    Payment: {{ notification.payment }}$
                  </p>
                </div>
              </v-expansion-panel-content>
            </div>
            <div v-if="notification.type === 'personal' && notification.status === 'request'">
              <v-expansion-panel-header :class="{ notified: !notification.notificationChecked }" @click="notified(notification)">
                {{ notification.title }} for '{{ notification.surveyTitle }}' has been approved
              </v-expansion-panel-header>
              <v-expansion-panel-content>
                <div class="completion-details">
                  <p class="completed-on">
                    Description: {{ notification.description }}
                  </p>
                  <p class="payment-value">
                    Payment on completion: {{ notification.payment }}$
                  </p>
                  <p class="payment-value">
                    Duration: {{ notification.duration }} min
                  </p>
                </div>
              </v-expansion-panel-content>
            </div>
            <div v-if="notification.type === 'personal' && notification.status === 'approved'">
              <v-expansion-panel-header :class="{ notified: !notification.notificationChecked }" @click="notified(notification)">
                {{ notification.title }}: {{ notification.surveyTitle }}
              </v-expansion-panel-header>
              <v-expansion-panel-content>
                <div class="completion-details">
                  <p class="completed-on">
                    Description: {{ notification.description }}
                  </p>
                  <p class="payment-value">
                    Payment: {{ notification.payment }}$
                  </p>
                </div>
              </v-expansion-panel-content>
            </div>
          </v-expansion-panel>
        </template>
      </v-data-iterator>
    </v-expansion-panels>
  </div>
</template>

<script>
export default {
  data() {
    return {
      page: 1,
      itemsPerPage: 10
    }
  },
  computed: {
    numberOfPages() {
      return Math.ceil(this.notifications.length / this.itemsPerPage)
    },
    notifications() {
      return this.$store.getters.getNotifications
    }
  },
  methods: {
    nextPage() {
      if (this.page + 1 <= this.numberOfPages) {
        this.page += 1
      }
    },
    formerPage() {
      if (this.page - 1 >= 1) {
        this.page -= 1
      }
    },
    notified(notification) {
      if (notification.notificationChecked === false) {
        this.$store.dispatch('toogleNotification', notification.id)
      }
    }
  }
}
</script>

<style scoped>
.notification-wrapper {
  flex: 1 1 0;
  margin: 10px;
}
.pagination {
  width: 100%;
}
.page-controller {
  padding: 14px;
}
.v-expansion-panel-header--active {
  background-color: #7abe8f !important;
  /* background-image: linear-gradient(to left, #5a8254, #629162, #6a9f70, #72af7f, #7abe8f) ; */
}
.notified {
  /* animation: pulse 1s infinite; */
  background-color: #7abe8f !important;
}
@keyframes pulse {
  0% {
    background-color: #AEEA00;
  }
  100% {
    background-color: #9C27B0;
  }
}
.v-expansion-panel--active {
  margin: 0 0 16px 0;
}
.v-expansion-panel-content >>> .v-expansion-panel-content__wrap {
  padding: 5px 10px !important;
}
.v-expansion-panel-header {
  font-weight: 550;
}
.payment-value,
.completed-on {
  margin: 0 0 5px 0;
}
</style>
