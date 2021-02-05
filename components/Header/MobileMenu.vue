<template>
  <div class="mobile-nav">
    <div class="menu">
      <div v-if="isLoggedIn">
        <!-- <v-list-item
          v-for="(item, index) in navMenu"
          :key="index"
          link
          :style="{ animationDuration: index * 0.15 + 's' }"
          @click="closeMenu"
        >
          <nuxt-link class="menu-list" :to="item.url">
            {{ item.title }}
          </nuxt-link>
        </v-list-item> -->
        <nuxt-link v-if="!invert" class="menu-list" to="/dashboard">Dashboard</nuxt-link>
        <div v-if="!invert" class="notification-btn-wrapper-mobile">
          <nuxt-link class="menu-list" to="/notifications">
            Notifications
            <div v-if="notificationNumber > 0" class="notification-nr-mobile">{{ notificationNumber }}</div>
          </nuxt-link>
        </div>
        <nuxt-link v-if="!invert" class="menu-list" to="/health">My Health</nuxt-link>
        <Settings v-if="isLoggedIn" class="setting-btn" :invert="invert" />
      </div>
      <!-- <v-list tag="nav" class="auth-section">
        <v-list-item :style="{ animationDuration: 1 * 0.15 + 's' }">
          <v-list-item-content v-if="!isLoggedIn">
            <v-list-item-title class="auth-btns" @click="signUp">Sign Up</v-list-item-title>
            <v-list-item-title class="auth-btns" @click="handleAuth">Login</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list> -->
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
    },
    notificationNumber() {
      return this.$store.getters.getNotificationNr
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
