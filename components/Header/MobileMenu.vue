<template>
  <div class="mobile-nav">
    <div class="menu" :class="{ 'menu-open': open }">
      <v-list v-if="isLoggedIn" dense tag="nav" class="mobile-menu-list">
        <v-list-item
          v-for="(item, index) in navMenu"
          :key="index"
          link
          :style="{ animationDuration: index * 0.15 + 's' }"
          @click="navigate(item)"
        >
          <div class="menu-list">
            <!-- {{ $t('menu.header_'+item) }} -->
            {{ item.title }}
          </div>
        </v-list-item>
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
import navMenu from '~/components/Header/menu'
import logo from '~/static/images/de_emblema_RGB.png'
// import link from '~/static/text/link'

export default {
  props: {
    open: {
      type: Boolean,
      default: false
    },
    isDrawerOpen: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      // link,
      navMenu,
      logo,
      isSideMenuOpen: this.isDrawerOpen // closes menu after clicking on it, if already on route
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
    navigate(item) {
      this.$router.push({ path: item.url })
      this.$emit('click', this.isSideMenuOpen)
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
