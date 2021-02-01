<template>
  <div class="settingsContainer">
    <SettingsNav :progress="progressBar" />
    <div class="settingsChild">
      <NuxtChild />
    </div>
  </div>
</template>

<script>
import SettingsNav from '@/components/Settings/SettingsNav'
export default {
  components: {
    SettingsNav
  },
  data() {
    return {
    }
  },
  computed: {
    progressBar() {
      return this.$store.getters.getProfileCompletion
    }
  }
}
</script>

<style scoped>
  .settingsContainer{
    display: flex;
  }
  .settingsChild{
    padding: 50px;
  }
</style>
