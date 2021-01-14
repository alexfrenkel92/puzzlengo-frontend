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
        <v-btn @click="show = !show"> Details </v-btn>
        <v-spacer />
        <v-btn icon @click="show = !show">
          <v-icon>{{ show ? "mdi-chevron-up" : "mdi-chevron-down" }}</v-icon>
        </v-btn>
      </v-card-actions>
      <v-expand-transition>
        <div v-show="show">
          <v-divider />
          <v-card-text>
            <v-data-table
              :headers="headers"
              :items="details"
              hide-default-footer
              class="elevation-1"
            />
          </v-card-text>
        </div>
      </v-expand-transition>
    </v-card>
  </div>
</template>

<script>
export default {
  props: ['title', 'total', 'details', 'icon'],
  data() {
    return {
      show: false,
      headers: [{ text: 'Value', value: 'value' }, { text: 'Date', value: 'date' }, { text: 'Info', value: 'description' }]
    }
  },
  methods: {
    getMore() {
      this.$router.push('/dashboard')
    },
    spend() {
      console.log('spending money')
    }
  }
}
</script>
