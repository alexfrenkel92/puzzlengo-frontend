<template>
  <v-footer padless color="#E0F2F1">
    <v-col
      class="text-center"
      cols="12"
    >
      <span>&copy; {{ new Date().getFullYear() }}</span>
      <nuxt-link to="/privacy">Privacy Policy</nuxt-link>
      <nuxt-link to="/terms">Terms of Service</nuxt-link>
    </v-col>
  </v-footer>
</template>

<script>
export default {

}
</script>

<style>
a {
  text-decoration: none;
  color: black !important;
  margin: 0 10px;
}
.v-footer {
  height: 100px;
  background-color: #E0F2F1;
}
</style>
