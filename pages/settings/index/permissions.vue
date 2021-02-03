<template>
  <div>
    <h1>Permissions settings</h1>
    <div class="divider-horizontal" />
    <h3>Health information</h3>
    <Health />
    <div class="divider-horizontal" />
    <h3>Activity information</h3>
    <Activity />
    <div class="divider-horizontal" />
    <h3>Location information</h3>
    <Location />
  </div>
</template>

<script>
import Health from '@/components/Settings/Permissions/Health'
import Activity from '@/components/Settings/Permissions/Activity'
import Location from '@/components/Settings/Permissions/Location'

export default {
  components: {
    Health,
    Activity,
    Location
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
