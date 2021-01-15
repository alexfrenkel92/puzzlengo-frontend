<template>
  <div>
    <v-card
      class="mx-auto"
      max-width="344"
      outlined
    >
      <v-list-item three-line>
        <v-list-item-content>
          <div class="overline mb-4">
            {{ title }}
          </div>
          <v-list-item-title class="headline mb-1">
            {{ total }} points
          </v-list-item-title>
        </v-list-item-content>

        <v-list-item-avatar
          tile
          size="80"
          color="#7ABE8F"
        >
          <v-icon x-large>
            {{ icon }}
          </v-icon>
        </v-list-item-avatar>
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
  props: ['title', 'total', 'icon'],
  data() {
    return {
      show: false
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
