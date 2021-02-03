<template>
  <div>
    <h1>Account settings</h1>
    <div class="divider-horizontal" />
    <h3>Personal information</h3>
    <Personal />
    <div class="divider-horizontal" />
    <h3>Contact information</h3>
    <Contact />
    <div class="divider-horizontal" />
    <h3>Notifications</h3>
    <Notifications />
  </div>
</template>

<script>
import Personal from '@/components/Settings/Account/Personal'
import Contact from '@/components/Settings/Account/Contact'
import Notifications from '@/components/Settings/Account/Notifications'
export default {
  components: {
    Personal,
    Contact,
    Notifications
  },
  data() {
    return {

    }
  }
}
</script>

<style scoped>
.divider-horizontal {
  position: relative;
  margin: 0 0 20px 0;
  height: 1px;
  background-image: linear-gradient(
    to right,
    transparent,
    rgb(51, 50, 48),
    transparent
  );
}
</style>
