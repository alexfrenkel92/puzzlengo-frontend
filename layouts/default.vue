<template>
  <v-app dark>
    <div class="main-wrap">
      <main-header />
      <v-main>
        <v-container>
          <nuxt />
        </v-container>
      </v-main>
      <!-- <v-footer
        :absolute="!fixed"
        app
        padless
      >
          <span>&copy; {{ new Date().getFullYear() }}</span>
      </v-footer> -->
      <v-footer padless app>
        <v-col
          class="text-center"
          cols="12"
        >
          <span>&copy; {{ new Date().getFullYear() }}</span>
        </v-col>
      </v-footer>
    </div>
  </v-app>
</template>

<script>
import Header from '~/components/Header'

export default {
  components: {
    'main-header': Header
  },
  // data() {
  //   return {
  //     fixed: false
  //   }
  // },
  computed: {
    isMobile() {
      const smDown = this.$store.state.breakpoints.smDown
      return smDown.includes(this.$mq)
    },
    margintop() {
      if (this.isMobile) {
        return '70px'
      } else {
        return '80px'
      }
    }

  }

}
</script>
<style scopped>
  .text-center {
    padding: 4px;
  }
</style>
