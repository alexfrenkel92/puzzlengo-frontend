<template>
  <div id="profile-edit-container">
    <!-- <h1>Edit {{ title }} related data</h1> -->
    dummy data incoming
    <v-btn @click="getProfilingFields">get data</v-btn>
  </div>
</template>

<script>
export default {
  data() {
    return {
      profileId: this.$route.params.profileId,
      profilingFields: []
    }
  },
  created() {
    console.log(this.profileId)
  },
  methods: {
    getProfilingFields() {
      this.$store.dispatch('getSpecificProfile', this.profileId)
        .then((response) => {
          console.log(response)
        })
    }
  }
}
</script>

<style scoped>
#profile-edit-container {
  padding-top: 30px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  width: 100%;
}
</style>
