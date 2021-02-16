<template>
  <div>
    <v-container>
      <v-switch
        v-for="item in localLocation"
        :key="item.title"
        v-model="item.value"
        inset
        :label="item.title"
      />
      <v-btn text @click="refreshLocation"><v-icon>mdi-alpha-x-circle</v-icon> Cancel</v-btn>
      <v-btn text @click="updateLocation"><v-icon>mdi-check-circle</v-icon> Save</v-btn>
    </v-container>

  </div>
</template>
<script>
export default {
  data() {
    return {
      location: {},
      localLocation: {
        location: { title: 'Location', value: null }
      }
    }
  },
  created() {
    this.location = this.$store.getters.locationPermissions
    this.refreshLocation()
  },
  methods: {
    refreshLocation() {
      this.localLocation.location.value = this.location.location
    },
    updateLocation() {
      this.$store.dispatch('updateLocation', [this.localLocation.location.value])
    }
  }
}
</script>
