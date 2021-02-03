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
          <v-expansion-panel v-for="(item, i) in props.items" :key="i">
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
      itemsPerPage: 10,
      notifications: null
    }
  },
  computed: {
    numberOfPages() {
      return Math.ceil(this.notifications.length / this.itemsPerPage)
    }
  },
  created() {
    this.notifications = this.$store.getters.getNotifications
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
    }
  }
}
</script>

<style scoped>
.notifications {
  flex: 1 1 0;
  margin: 10px;
}
.notifList {
  width: 100%;
}
.page-controller {
  padding: 14px;
}
.v-expansion-panel-header--active {
  background-color:  #7abe8f !important;
}
</style>
