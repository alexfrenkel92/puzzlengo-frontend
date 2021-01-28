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
        <nav
          :class="{ invert: invert }"
          class="nav-menu"
        >
          <div class="nav-logo">
            <div class="logo">
              <scrollactive
                class="scollactive-logo logo"
              >
                <nuxt-link :to="brand.dex.url" class="anchor-link scrollactive-item">
                  <img
                    :src="logo"
                    alt="logo"
                  >
                  <!-- header-style.scss 188-as sor palette-text-primary-t irja felul...az szurke szint ad neki, de hunnét -->
                  <span class="logo-title">{{ brand.dex.name }}</span>
                </nuxt-link>
              </scrollactive>
            </div>

          </div>
          <div>
            <!-- :class="$route.path === item.url ? 'active anchor-link scrollactive-item':'anchor-link scrollactive-item'" -->
            <ul class="scrollactive-nav">
              <li v-for="(item, index) in showMenus" :key="index">
                <nuxt-link
                  v-if="!invert"
                  class="nav-btn"
                  text
                  :to="item.url"
                >
                  {{ item.title }}
                </nuxt-link>
              </li>
            </ul>
          </div>
        </nav>

        <nav
          :class="{ invert: invert }"
          class="nav-menu"
        >
          <div v-if="isDesktop">
            <ul class="scrollactive-nav">
              <!-- <li v-for="(item, index) in showMenus" :key="index">
                  <v-btn
                    v-if="!invert"
                    :class="$route.path === item.url ? 'active anchor-link scrollactive-item':'anchor-link scrollactive-item'"
                    text
                    @click="$router.push({path:item.url})"
                  >
                    {{ item.title }}
                    {{ $t('menu.header_'+item.title) }}
                  </v-btn>
                </li> -->
              <li>
                <v-btn v-show="!isLoggedIn" @click="signUp">Sign Up</v-btn>
                <v-btn v-if="!isLoggedIn" @click="handleAuth">Login</v-btn>
                <!-- <v-btn v-else @click="handleAuth">Logout</v-btn> -->
              </li>
            </ul>
          </div>
          <nuxt-link class="balance-button" to="/giftcards">
            <p class="balance-text">240 </p>
            <img :src="coin" alt="balance-button">
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
import navMenu from './menu'
import Settings from './Settings'
import MobileMenu from './MobileMenu'
import logo from '~/static/images/de_emblema_RGB.png'
// import link from '~/static/text/link'
import brand from '~/static/text/brand'

// let counter = 0
// function createData(name, url, offset) {
//   counter += 1
//   return {
//     id: counter,
//     name,
//     url,
//     offset
//   }
// }

export default {
  components: {
    'setting-menu': Settings,
    MobileMenu
  },
  props: {
  },
  data() {
    return {
      navMenu,
      logo,
      // link,
      loaded: true,
      brand,
      section: 0,
      fixed: false,
      openDrawer: false,
      navOffset: 20
      // menuList: [
      //   createData(navMenu[0], '/'),
      //   createData(navMenu[1], '/' + navMenu[1]),
      //   createData(navMenu[2], navMenu[2]),
      //   createData(navMenu[2], navMenu[2]),
      //   createData(navMenu[3], navMenu[3], -40)
      // ],
    }
  },
  computed: {
    isLoggedIn() {
      return this.$store.getters.isLoggedIn
    },
    showMenus() {
      return this.navMenu.filter(navItem => navItem.loginShow === this.isLoggedIn || navItem.alwaysShow
      )
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
    coin() {
      return require('~/static/images/coinGold.png')
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
  color: black;
  padding: 2px 5px 0 ;
  margin: 0;
}
/* @media screen and (max-width: 500px) {
  .balance-button {
    display: none;
  }
} */

img {
  width: 20px;
  height: 20px;
}
</style>
