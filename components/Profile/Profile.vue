<template>
  <div class="profile-wrapper">
    <ProfileCard
      v-for="cat in profilingCats"
      :id="cat.id"
      :key="cat.id"
      class="profile-card"
      :title="cat.title"
      :total-questions="cat.totalQuestions"
      :answered="cat.answered"
      :img="cat.img"
    />
  </div>
</template>

<script>
import profilingCats from './profiling-demo'
import educationPng from '~/static/images/education.png'

export default {
  data() {
    return {
      educationPng,
      profilingCats
    }
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
