<template>
  <div class="mobile-nav">
    <div class="menu">
      <div v-if="isAuthenticated">
        <nuxt-link v-if="!invert" class="menu-list" to="/dashboard">{{ $t('menu.dashboard') }}</nuxt-link>
        <div v-if="!invert" class="notification-btn-wrapper-mobile">
          <nuxt-link class="menu-list" to="/notifications">
            {{ $t('menu.notifications') }}
            <div v-if="notificationNumber > 0" class="notification-nr-mobile">{{ notificationNumber }}</div>
          </nuxt-link>
        </div>
        <nuxt-link v-if="!invert" class="menu-list" to="/balance">{{ $t('menu.balance') }}</nuxt-link>
        <SettingsGear v-if="isAuthenticated" class="setting-btn" :invert="invert" />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "./header-style";
</style>

<script>
import { mapGetters } from 'vuex'
import SettingsGear from './SettingsGear'
import logo from '~/static/images/puzzle.png'

export default {
  components: {
    SettingsGear
  },
  props: {
    open: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      logo,
      isSideMenuOpen: this.open // closes menu after clicking on it, if already on route
    }
  },
  computed: {
    ...mapGetters(['isAuthenticated', 'loggedInUser']),
    invert() {
      return !!this.isMobile
    },
    notificationNumber() {
      return this.$store.getters.getNotificationNr
    }
  },
  methods: {
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
