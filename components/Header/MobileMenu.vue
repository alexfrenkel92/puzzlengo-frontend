<template>
  <div class="mobile-nav">
    <div class="menu" :class="{ 'menu-open': open }">
      <v-list v-if="isLoggedIn" dense tag="nav" class="mobile-menu-list">
        <v-list-item
          v-for="(item, index) in navMenu"
          :key="index"
          link
          :style="{ animationDuration: index * 0.15 + 's' }"
          @click="closeMenu"
        >
          <nuxt-link class="menu-list" :to="item.url">
            <!-- {{ $t('menu.header_'+item) }} -->
            {{ item.title }}
          </nuxt-link>
        </v-list-item>
        <Settings v-if="isLoggedIn" :invert="invert" />
        <!-- <v-list-item
          link
          :style="{ animationDuration: navMenu.length * 0.15 + 's' }"
          @click="navigate('contact')"
        >
          <v-list-item-content>
            <v-list-item-title class="menu-list">
              {{ $t('menu.header_static') }}
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item> -->
      </v-list>
      <v-list dense tag="nav" class="auth-section">
        <v-list-item :style="{ animationDuration: 1 * 0.15 + 's' }">
          <v-list-item-content v-if="!isLoggedIn">
            <v-list-item-title class="menu-list" @click="signUp">Sign Up</v-list-item-title>
            <v-list-item-title class="menu-list" @click="handleAuth">Login</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "./header-style";
</style>

<script>
import Settings from './Settings'
import navMenu from '~/components/Header/menu'
import logo from '~/static/images/de_emblema_RGB.png'
// import link from '~/static/text/link'

export default {
  components: {
    Settings
  },
  props: {
    open: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      // link,
      navMenu,
      logo,
      isSideMenuOpen: this.open // closes menu after clicking on it, if already on route
    }
  },
  computed: {
    showMenu() {
      return this.navMenu.filter(
        navItem =>
          navItem.loginShow === this.navItem.isLoggedIn || navItem.alwaysShow
      )
    },
    isLoggedIn() {
      return this.$store.getters.isLoggedIn
    },
    invert() {
      return !!this.isMobile
    }
  },
  methods: {
    handleAuth() {
      this.$store.dispatch('setAuth')
      if (this.isLoggedIn) {
        this.$router.push('/dashboard')
      } else {
        this.$router.push('/')
      }
    },
    signUp() {
      this.$router.push('/auth/signup')
    },
    closeMenu() {
      this.$emit('closeMobileMenu')
    },
    close() {
    }
  }
}
</script>

<style scoped>
  .auth-section {
    display: flex;
    flex-direction: column !important;
  }
</style>
