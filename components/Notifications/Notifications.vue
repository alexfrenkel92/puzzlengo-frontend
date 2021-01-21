<template>
  <div class="notifications">
    <v-expansion-panels>
      <v-data-iterator
        class="notifList"
        :items="notifications"
        :page="page"
        :items-per-page.sync="itemsPerPage"
        hide-default-footer
      >
        <template v-slot:header>
          <div
            class="mb-5"
            align="center"
            justify="center"
          >
            <span
              class="mr-4
            grey--text"
            >
              Page {{ page }} of {{ numberOfPages }}
            </span>
            <v-btn
              fab
              dark
              color="#7abe8f"
              class="mr-1"
              @click="formerPage"
            >
              <v-icon>mdi-chevron-left</v-icon>
            </v-btn>
            <v-btn
              fab
              dark
              color="#7abe8f"
              class="ml-1"
              @click="nextPage"
            >
              <v-icon>mdi-chevron-right</v-icon>
            </v-btn>
          </div>
        </template>
        <template v-slot:default="props">
          <v-expansion-panel
            v-for="(item,i) in props.items"
            :key="i"
          >
            <v-expansion-panel-header>
              {{ item.title }}
            </v-expansion-panel-header>
            <v-expansion-panel-content>
              {{ item.description }}
            </v-expansion-panel-content>
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
      itemsPerPage: 5,
      notifications: [
        {
          title: 'Survey approved - 30 credits earned',
          description: 'Thank you for completing our survey, your answers have been approved. Please check your balance to spend your credits.'
        },
        {
          title: 'Survey approved - 15 credits earned',
          description: 'Thank you for completing our survey, your answers have been approved. Please check your balance to spend your credits.'
        },
        {
          title: '35 credits spent',
          description: 'We have successfully sent your credits to Example Charity. Thank you for helping.'
        }, {
          title: 'Survey approved - 30 credits earned',
          description: 'Thank you for completing our survey, your answers have been approved. Please check your balance to spend your credits.'
        },
        {
          title: 'Survey approved - 30 credits earned',
          description: 'Thank you for completing our survey, your answers have been approved. Please check your balance to spend your credits.'
        },
        {
          title: 'Survey approved - 15 credits earned',
          description: 'Thank you for completing our survey, your answers have been approved. Please check your balance to spend your credits.'
        },
        {
          title: '35 credits spent',
          description: 'We have successfully sent your credits to Example Charity. Thank you for helping.'
        }, {
          title: 'Survey approved - 30 credits earned',
          description: 'Thank you for completing our survey, your answers have been approved. Please check your balance to spend your credits.'
        }
      ]
    }
  },
  computed: {
    numberOfPages() {
      return Math.ceil(this.notifications.length / this.itemsPerPage)
    }
  },
  methods: {
    nextPage() {
      if (this.page + 1 <= this.numberOfPages) { this.page += 1 }
    },
    formerPage() {
      if (this.page - 1 >= 1) { this.page -= 1 }
    }
  }
}
</script>

<style scoped>
  .notifications{
    flex: 1 1 0;
    margin: 10px;
  }
  .notifList{
    width: 100%;
  }
</style>
