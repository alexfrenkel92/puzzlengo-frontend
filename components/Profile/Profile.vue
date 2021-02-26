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
            :img="cat.img"
            :type="cat.type"
            :url="cat.url"
            :is-completed="cat.isCompleted"
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
            :img="cat.img"
            :type="cat.type"
            :url="cat.url"
            :is-completed="cat.isCompleted"
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

<style scoped lang="scss">
.profile-wrapper {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  width: 100%;
  background-color: inherit;
  padding-bottom: 30px;
}
.v-tab {
  color: black;
  font-weight: 600;
}
.v-tab--active {
  @include primary-text-color;
}
.v-window-item {
  @include whitish-background-color;
}
</style>
