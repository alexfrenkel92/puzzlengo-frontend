<template>
  <div class="profile-wrapper">
    <profile-card
      v-for="cat in profilingCatsDemo"
      :id="cat.id"
      :key="cat.id"
      :title="cat.title"
      :total-questions="cat.totalQuestions"
      :answered="cat.answered"
      :img="cat.img"
    />
  </div>
</template>

<script>

export default {
  data() {
    return {
      profilingCatsDemo: []
    }
  },
  created() {
    this.profilingCatsDemo = this.$store.getters.getProfilingCats
  }
}
</script>

<style scoped>
.profile-wrapper {
  padding-top: 30px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  width: 100%;
}
</style>
