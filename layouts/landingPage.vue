<template>
  <v-app>
    <div>
      <nuxt />
    </div>
    <!-- <v-footer color="#E0F2F1">
      <v-col
        class="text-center"
        cols="12"
      >
        <span>&copy; {{ new Date().getFullYear() }}</span>
        <nuxt-link to="/privacy">Privacy Policy</nuxt-link>
        <nuxt-link to="/terms">Terms of Service</nuxt-link>
      </v-col>
    </v-footer> -->
    <Footer />
  </v-app>
</template>

<style scoped>
body {
  margin: 0;
  font-family: 'Open Sans', sans-serif;
}

</style>
