<template>
  <div class="wrapper">
    <LandingPage />
    <Description />
    <HowItWorks />
  </div>
</template>

<script>
export default {
  middleware: 'guest',
  layout: 'landingPage'
}
</script>

<style scopped>
.wrapper {
  padding: 0;
}
</style>
