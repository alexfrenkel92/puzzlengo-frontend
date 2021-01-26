<template>
  <div>
    <v-card class="mx-auto" max-width="344" outlined>
      <v-list-item three-line>
        <v-list-item-content>
          <div class="overline mb-4">
            {{ title }}
          </div>
          <v-list-item-title class="headline mb-1">
            {{ total }} points
          </v-list-item-title>
        </v-list-item-content>
        <div class="coinImage">
          <img :src="coin" alt="balance-picture">
        </div>
      </v-list-item>

      <v-card-actions>
        <AppButton class="action-btn" btn-style="approve" @click="getMore">
          Get more ponts
        </AppButton>
        <v-spacer />
        <v-icon @click="show=true">mdi-information</v-icon>
      </v-card-actions>
    </v-card>
    <v-dialog
      v-model="show"
      max-width="590"
    >
      <BalanceTable :details="details" />
    </v-dialog>
  </div>
</template>

<script>
import BalanceTable from '@/components/Balance/BalanceTable'
export default {
  components: {
    BalanceTable
  },
  // eslint-disable-next-line vue/require-prop-types
  props: ['title', 'total', 'details'],
  data() {
    return {
      show: false
    }
  },
  computed: {
    coin() {
      return require('~/static/images/coinGold.png')
    }
  },
  methods: {
    getMore() {
      this.$emit('getMore')
    },
    spend() {
      /// code comes here
    }
  }
}
</script>

<style>
.coinImage {
  margin: 10px 0 10px 10px;
}
img {
  width: 100px;
  height: 100px;
}
  .action-btn{
    padding: 5px;
    width: 130px !important;
  }
</style>
