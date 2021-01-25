<template>
  <div id="profile-edit-container">
    <h3>Edit {{ filteredFields.title }} related data</h3>
    <div class="completion">
      <p>
        {{ filteredFields.answered }} /
        {{ filteredFields.totalQuestions }} completed
      </p>
    </div>
    <h4>Category specific questions will come here</h4>
    <app-button
      type="button"
      btn-style="approve"
      style="height: 50px; width: 150px"
      @click="$router.go(-1)"
    >
      Back to Profiling
    </app-button>
  </div>
</template>

<script>
export default {
  props: {
    filteredFields: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
#profile-edit-container {
  padding-top: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
}
.completion {
  font-size: x-large;
  color: black;
}
h4 {
  margin: 30px 0;
  background-color: aqua;
}
</style>
