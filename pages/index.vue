<template>
  <div>
    <About />
    <div class="divider div-transparent" />
    <HowItWorks />
    <div class="divider div-transparent" />
    <Benefits />
  </div>
</template>

<script>
import About from '@/components/Landingpage/About'
import HowItWorks from '@/components/Landingpage/HowItWorks'
import Benefits from '@/components/Landingpage/Benefits/Benefits'

export default {
  components: {
    About,
    HowItWorks,
    Benefits
  }
}
</script>

<style scoped>
  .divider {
  position: relative;
  margin: 30px 0;
  height: 1px;
}

.div-transparent:before {
  content: "";
  position: absolute;
  top: 0;
  left: 5%;
  right: 5%;
  width: 90%;
  height: 1px;
  background-image: linear-gradient(
    to right,
    transparent,
    rgb(48, 49, 51),
    transparent
  );
}
.div-transparent:before {
  content: "";
  position: absolute;
  top: 0;
  left: 5%;
  right: 5%;
  width: 90%;
  height: 1px;
  background-image: linear-gradient(
    to right,
    transparent,
    rgb(48, 49, 51),
    transparent
  );
}
</style>
