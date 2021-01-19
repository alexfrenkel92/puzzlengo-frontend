<template>
  <v-app>
    <div>
      <nuxt />
    </div>
    <v-footer padless app>
      <v-col
        class="text-center"
        cols="12"
      >
        <span>&copy; {{ new Date().getFullYear() }}</span>
        <nuxt-link to="/privacy">Privacy Policy</nuxt-link>
        <nuxt-link to="/terms">Terms of Service</nuxt-link>
      </v-col>
    </v-footer>
  </v-app>
</template>

<style>
body {
  margin: 0;
  /* background-color: rgb(116, 84, 61); */
  /* background-color: rgb(205, 138, 86) !important; */
  /* background-color: rgb(186, 155, 160); */
  background-color: rgb(243, 237, 238);
  font-family: 'Open Sans', sans-serif;
}
a {
  text-decoration: none;
  color: black !important;
  margin: 0 10px;
}
</style>
