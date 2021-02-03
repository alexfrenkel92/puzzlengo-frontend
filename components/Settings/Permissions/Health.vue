<template>
  <div>
    <v-container>
      <v-switch
        v-for="item in localHealth"
        :key="item.title"
        v-model="item.value"
        inset
        :label="item.title"
      />
      <v-btn text @click="refreshHealth"><v-icon>mdi-alpha-x-circle</v-icon> Cancel</v-btn>
      <v-btn text @click="updateHealth"><v-icon>mdi-check-circle</v-icon> Save</v-btn>
    </v-container>

  </div>
</template>
<script>
export default {
  data() {
    return {
      health: {},
      localHealth: {
        heartRate: { title: 'Heart rate', value: null },
        bloodPressure: { title: 'Blood pressure', value: null },
        bloodOxygen: { title: 'Blood oxygen level', value: null },
        weight: { title: 'Weight', value: null }
      }
    }
  },
  created() {
    this.health = this.$store.getters.healthPermissions
    this.refreshHealth()
  },
  methods: {
    refreshHealth() {
      this.localHealth.heartRate.value = this.health.heartRate
      this.localHealth.bloodPressure.value = this.health.bloodPressure
      this.localHealth.bloodOxygen.value = this.health.bloodOxygen
      this.localHealth.weight.value = this.health.weight
    },
    updateHealth() {
      this.$store.dispatch('updateHealth', [this.localHealth.heartRate.value, this.localHealth.bloodPressure.value, this.localHealth.bloodOxygen.value, this.localHealth.weight.value])
    }
  }
}
</script>
