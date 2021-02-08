<template>
  <div>
    <v-navigation-drawer
      v-if="isMobile"
      v-model="openDrawer"
      fixed
      temporary
      class="mobile-nav"
    >
      <mobile-menu :open="openDrawer" @closeMobileMenu="closeMobileMenu" />
    </v-navigation-drawer>
    <v-app-bar
      id="header"
      v-scroll="handleScroll"
      :class="{ fixed: fixed, 'open-drawer': openDrawer }"
      class="header"
      fixed
      app
    >
      <v-container fluid class="header-content" :class="{ 'fixed-width': mdUp }">
        <nav :class="{ invert: invert }">
          <div class="nav-logo">
            <div class="logo">
              <nuxt-link :to="brand.dex.url">
                <img
                  :src="logo"
                  alt="logo"
                >
                <!-- header-style.scss 188-as sor palette-text-primary-t irja felul...az szurke szint ad neki, de hunnét -->
                <span class="logo-title">{{ brand.dex.name }}</span>
              </nuxt-link>
            </div>
          </div>
          <nuxt-link v-if="!invert" class="nav-btn" to="/dashboard">Dashboard</nuxt-link>
          <div v-if="!invert" class="notification-btn-wrapper">
            <nuxt-link class="nav-btn" to="/notifications">Notifications</nuxt-link>
            <div v-if="notificationNumber > 0" class="notification-nr">{{ notificationNumber }}</div>
          </div>
          <nuxt-link v-if="!invert" class="nav-btn" to="/health">My Health</nuxt-link>
        </nav>
        <nav :class="{ invert: invert }">
          <div v-if="isDesktop">
            <button v-if="!isLoggedIn" @click="handleAuth">Login</button>
          </div>
          <nuxt-link class="balance-button" to="/balance">
            <p class="balance-text">{{ balanceNr }}</p>
            <img :src="usd" alt="balance-button">
          </nuxt-link>
          <setting-menu v-if="isLoggedIn && isDesktop" :invert="invert" />
          <v-btn
            v-if="isMobile"
            :class="{ 'is-active': openDrawer }"
            class="hamburger hamburger--spin mobile-menu"
            text
            icon
            @click.stop="handleToggleOpen"
          >
            <span v-if="isMobile" class="hamburger-box">
              <span class="bar hamburger-inner" />
            </span>
          </v-btn>
        </nav>
      </v-container>
    </v-app-bar>
  </div>
</template>

<style lang="scss" scoped>
@import './header-style.scss';
</style>

<script>
import Settings from './Settings'
import MobileMenu from './MobileMenu'
import logo from '~/static/images/de_emblema_RGB.png'
import brand from '~/static/text/brand'

export default {
  components: {
    'setting-menu': Settings,
    MobileMenu
  },
  props: {
  },
  data() {
    return {
      logo,
      loaded: true,
      brand,
      section: 0,
      fixed: false,
      openDrawer: false,
      navOffset: 20
    }
  },
  computed: {
    isLoggedIn() {
      return this.$store.getters.isLoggedIn
    },
    isMobile() {
      const smDown = this.$store.state.breakpoints.smDown
      return smDown.includes(this.$mq)
    },
    isDesktop() {
      const mdUp = this.$store.state.breakpoints.mdUp
      return mdUp.includes(this.$mq)
    },
    mdUp() {
      return this.$mq === 'md' || this.$mq === 'lg' || this.$mq === 'xl'
    },
    invert() {
      return !!this.isMobile
    },
    usd() {
      return require('~/static/images/usd2.png')
    },
    notificationNumber() {
      const notifications = this.$store.getters.getNotifications
      let notificationNumber = 0
      for (let i = 0; i < notifications.length; i++) {
        if (notifications[i].notificationChecked === false) {
          notificationNumber++
        }
      }
      return notificationNumber
    },
    balanceNr() {
      return this.$store.getters.getBalanceNr
    }
  },
  methods: {
    handleScroll() {
      if (window.scrollY > 80) {
        return (this.fixed = true)
      }
      return (this.fixed = false)
    },
    setOffset(offset) {
      this.navOffset = offset
    },
    handleToggleOpen() {
      this.openDrawer = !this.openDrawer
    },
    closeMobileMenu() {
      this.openDrawer = !this.openDrawer
    },
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
    navigate(item) {
      this.$router.push({ path: item.url })
    }
  }
}
</script>

<style scoped>
.balance-button {
  margin: 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  text-decoration: none;
}
.balance-text {
  padding: 2px 5px 0 ;
  margin: 0;
  font-size: 1rem !important;
  font-weight: 450;
  color: rgb(58, 57, 57);
}
img {
  width: 30px;
  height: 30px;
}
</style>
