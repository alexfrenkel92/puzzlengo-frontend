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
              <nuxt-link to="/dashboard">
                <img
                  :src="logo"
                  alt="logo"
                >
                <!-- header-style.scss 188-as sor palette-text-primary-t irja felul...az szurke szint ad neki, de hunnét -->
                <span class="logo-title">Play'n Go</span>
              </nuxt-link>
            </div>
          </div>
          <nuxt-link v-if="!invert" class="nav-btn" to="/dashboard">{{ $t('menu.dashboard') }}</nuxt-link>
          <div v-if="!invert" class="notification-btn-wrapper">
            <nuxt-link class="nav-btn" to="/notifications">{{ $t('menu.notifications') }}</nuxt-link>
            <div v-if="notificationNumber > 0" class="notification-nr">{{ notificationNumber }}</div>
          </div>
          <nuxt-link v-if="!invert" class="nav-btn" to="/balance">{{ $t('menu.balance') }}</nuxt-link>
        </nav>
        <nav :class="{ invert: invert }">
          <p class="user-name">Welcome {{ loggedInUser.username }}</p>
          <nuxt-link class="balance-button" to="/balance">
            <p class="balance-text">{{ balanceNr }}</p>
            <img :src="usd" alt="balance-button">
          </nuxt-link>
          <SettingsGear v-if="isAuthenticated && isDesktop" :invert="invert" />
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
import { mapGetters } from 'vuex'
import SettingsGear from './SettingsGear'
import MobileMenu from './MobileMenu'
import logo from '~/static/images/puzzle.png'

export default {
  components: {
    SettingsGear,
    MobileMenu
  },
  props: {
  },
  data() {
    return {
      logo,
      loaded: true,
      section: 0,
      fixed: false,
      openDrawer: false,
      navOffset: 20
    }
  },
  computed: {
    ...mapGetters(['isAuthenticated', 'loggedInUser']),
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
    }
  }
}
</script>

<style scoped lang="scss">
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
  @include primary-text-color;
}
.user-name {
  padding: 2px 5px 0 ;
  margin: 0;
  font-size: 1rem !important;
  /* font-weight: 450; */
  color: rgb(116, 113, 113);
}
@media screen and (max-width: 450px) {
  .user-name {
    display: none;
  }
}
img {
  width: 30px;
  height: 30px;
}
</style>
