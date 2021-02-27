<template>
  <v-footer absolute inset app>
    <div class="image">
      <img :src="logo" :alt="logo" width="80px" height="80px">
      <span class="motto">{{ $t('footer.motto') }}</span>
      <span class="motto">&copy; {{ new Date().getFullYear() }}</span>
    </div>
    <div class="column1">
      <ul>
        <li>
          <nuxt-link to="/ak/aboutus">{{ $t('footer.about') }}</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/ak/terms">{{ $t('footer.terms') }}</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/ak/privacy">{{ $t('footer.privacy') }}</nuxt-link>
        </li>
      </ul>
    </div>
    <div class="column2">
      <ul>
        <li>
          <nuxt-link to="/ak/faq">{{ $t('footer.faq') }}</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/ak/gdpr">{{ $t('footer.gdpr') }}</nuxt-link>
        </li>
      </ul>
    </div>
  </v-footer>
</template>

<script>
export default {
  computed: {
    logo() {
      return require('~/static/images/puzzle.png')
    }
  }
}
</script>

<style lang='scss' scoped>
@import "~/assets/styles";
.v-footer {
  height: fit-content;
  // background-color: #FEE181;
  // border-top: 3px solid #95E38E;
  @include whitish-background-color;
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
  @include primary-text-color;
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
  @include primary-text-color;
}
</style>
