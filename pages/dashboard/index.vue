<template>
  <div>
    <dashboard />
  </div>
</template>

<script>
export default {
  middleware: 'auth'
}
</script>

<style scoped>
  div {
    padding-top: 10px;
    max-width: 1300px;
    margin: auto;
  }
</style>
