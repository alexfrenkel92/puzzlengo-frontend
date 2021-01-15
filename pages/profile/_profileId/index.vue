<template>
  <ProfileEdit :filtered-fields="filteredFields" />
</template>

<script>
export default {
  data() {
    return {
      profileId: parseInt(this.$route.params.profileId),
      profilingFields: null,
      filteredFields: null
    }
  },
  created() {
    this.profilingFields = this.$store.getters.getProfilingCats
    this.filteredFields = this.profilingFields.find(field => field.id === this.profileId)
  }
}
</script>
