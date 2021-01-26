<template>
  <v-footer absolute inset app>
    <div class="image">
      <img :src="logo" :alt="logo" width="80px" height="80px">
      <span>Some motto xyz</span>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </div>
    <div class="column1">
      <ul>
        <li>
          <nuxt-link to="">About Us</nuxt-link>
        </li>
        <li>
          <nuxt-link to="">Terms of Service</nuxt-link>
        </li>
        <li>
          <nuxt-link to="">Privacy Policy</nuxt-link>
        </li>
      </ul>
    </div>
    <div class="column2">
      <ul>
        <li>
          <nuxt-link to="">FAQ</nuxt-link>
        </li>
        <li>
          <nuxt-link to="">GDPR</nuxt-link>
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

<style scoped>
.v-footer {
  height: fit-content;
  background-color: #cfd1d1 !important;
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
  color: black !important;
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
</style>
