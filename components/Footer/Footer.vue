<template>
  <v-footer absolute inset app>
    <div class="image">
      <img :src="logo" :alt="logo" width="80px" height="80px">
      <span class="motto">Some motto xyz</span>
      <span class="motto">&copy; {{ new Date().getFullYear() }}</span>
    </div>
    <div class="column1">
      <ul>
        <li>
          <nuxt-link to="/ak/aboutus">About Us</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/ak/terms">Terms of Service</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/ak/privacy">Privacy Policy</nuxt-link>
        </li>
      </ul>
    </div>
    <div class="column2">
      <ul>
        <li>
          <nuxt-link to="/ak/faq">FAQ</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/ak/gdpr">GDPR</nuxt-link>
        </li>
      </ul>
    </div>
  </v-footer>
</template>

<script>
export default {
  computed: {
    logo() {
      return require('~/static/images/de_emblema_RGB.png')
    }
  }
}
</script>

<style lang='scss' scoped>
@import "~/assets/styles";
.v-footer {
  height: fit-content;
  // @include background-color-gradient;
  background: linear-gradient(110deg, #FEE181 60%, #95E38E 60%);
  // background-color: #AFCC8C;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: flex-start;
  padding: 30px 5px 20px 5px;
}
ul {
  list-style-type: none;
}
li {
  padding-bottom: 10px;
}
a {
  text-decoration: none;
  font-weight: 500;
  color: $light-text-primary !important
}
a:focus, a:active {
  text-decoration: none !important;
  outline: none !important;
  border: none !important;
}
.image,
.column1,
.column2 {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 5px 10px 5px;
}
img {
  margin-bottom: 10px;
}
.motto {
  font-weight: 500;
  color: $light-text-primary
  //@include primary-text-color;
}

@media screen and (max-width: 369px) {
  .v-footer {
    padding: 15px 0;
  }
  img {
    width: 50px !important;
    height: 50px !important
  }
  ul, li {
    padding: 0;
    margin: 0;
    margin: auto;
  }
  a,
  span {
    font-size: .7rem !important;
  }
  .image,
  .column1,
  .column2 {
    padding: 0;
}
}

</style>
