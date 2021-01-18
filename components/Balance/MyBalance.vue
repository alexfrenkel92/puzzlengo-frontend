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
        <div class="image">
          <img :src="coin" alt="balance-picture">
        </div>
      </v-list-item>

      <v-card-actions>
        <v-btn @click="getMore"> Get more points </v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/require-prop-types
  props: ['title', 'total'],
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

<style scoped>
.image {
  margin: 10px 0 10px 10px;
}
img {
  width: 100px;
  height: 100px;
}
</style>
