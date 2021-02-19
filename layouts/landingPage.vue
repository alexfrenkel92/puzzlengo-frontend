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
   @include background-color;
  //background: linear-gradient(110deg, #FEE181 60%, #95E38E 60%);
}

</style>
