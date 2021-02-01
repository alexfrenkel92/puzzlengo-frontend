<template>
  <div class="profile-wrapper">
    <v-tabs v-model="activeTab" background-color="transparent" grow>
      <v-tabs-slider color="#7abe8f" />
      <v-tab>Demographic</v-tab>
      <v-tab>Psychological</v-tab>
    </v-tabs>
    <v-tabs-items v-model="activeTab">
      <v-tab-item>
        <div class="profile-wrapper">
          <profile-card
            v-for="cat in demographicProfiling"
            :id="cat.id"
            :key="cat.id"
            :title="cat.title"
            :total-questions="cat.totalQuestions"
            :answered="cat.answered"
            :img="cat.img"
            :type="cat.type"
            :tab-nr="activeTab"
          />
        </div>
      </v-tab-item>
      <v-tab-item>
        <div class="profile-wrapper">
          <profile-card
            v-for="cat in psychologicalProfiling"
            :id="cat.id"
            :key="cat.id"
            :title="cat.title"
            :total-questions="cat.totalQuestions"
            :answered="cat.answered"
            :img="cat.img"
            :type="cat.type"
            :tab-nr="activeTab"
          />
        </div>
      </v-tab-item>
    </v-tabs-items>
  </div>
</template>

<script>
export default {
  data() {
    return {
      demographicProfiling: [],
      psychologicalProfiling: [],
      activeTab: 0
    }
  },
  created() {
    this.activeTab = this.$store.getters.getActiveTabNr
    this.demographicProfiling = this.$store.getters.getDemographicProfiling
    this.psychologicalProfiling = this.$store.getters.getPsychologicalProfiling
  }
}
</script>

<style scoped>
.profile-wrapper {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  width: 100%;
}
.v-tab {
  color: black;
  font-weight: 600;
}
.v-tab--active {
  color: black !important;
}
</style>
