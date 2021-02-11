<template>
  <div class="settings-container">
    <v-tabs v-model="activeTab" background-color="transparent" grow>
      <v-tabs-slider color="#7abe8f" />
      <v-tab>Account Settings</v-tab>
      <v-tab>Permissions</v-tab>
    </v-tabs>
    <v-tabs-items v-model="activeTab">
      <v-tab-item>
        <AccountSettings />
      </v-tab-item>
      <v-tab-item>
        <Permissions />
      </v-tab-item>
    </v-tabs-items>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeTab: ''
    }
  },
  created() {
    this.activeTab = this.$store.getters.getActiveTabNr
  }
}
</script>

<style lang="scss">
.v-slide-group__prev {
  display: none !important;
}
</style>

<style scoped lang="scss">
.v-tab {
  color: black;
  font-weight: 550;
}
.v-tab--active {
  color: black !important;
}
.v-window-item {
  @include whitish-background-color;
  // background-color: rgb(199, 255, 192);
  padding-top: .5rem;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
}
</style>
