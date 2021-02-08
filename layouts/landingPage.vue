<template>
  <v-app>
    <v-main>
      <nuxt />
    </v-main>
    <FooterLandingPage />
  </v-app>
</template>

<style scoped lang='scss'>
body {
  margin: 0;
  font-family: 'Open Sans', sans-serif;
}
.v-main {
  @include background-color-gradient;
}

</style>
