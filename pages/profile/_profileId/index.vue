<template>
  <div>
    <ProfileEdit :filtered-fields="filteredFields" :profile-id="profileId" :profile-type="profileType" />
  </div>
</template>

<script>

export default {
  data() {
    return {
      profileId: parseInt(this.$route.params.profileId.slice(0, 1)),
      profileType: this.$route.params.profileId.slice(2, 5),
      demographicProfiling: null,
      psychologicalProfiling: null,
      filteredFields: null
    }
  },
  created() {
    this.demographicProfiling = this.$store.getters.getDemographicProfiling
    this.psychologicalProfiling = this.$store.getters.getPsychologicalProfiling
    if (this.profileType === 'dem') {
      this.filteredFields = this.demographicProfiling.find(field => field.id === this.profileId)
    } else if (this.profileType === 'psy') {
      this.filteredFields = this.psychologicalProfiling.find(field => field.id === this.profileId)
    }
  }
}
</script>
