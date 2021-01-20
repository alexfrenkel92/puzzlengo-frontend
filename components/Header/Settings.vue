<template>
  <v-menu
    v-model="closeOnContentClick"
    transition="slide-y-transition"
    offset-y
    nudge-top="-6"
    bottom
    max-width="210"
  >
    <template v-slot:activator="{ on }">
      <div class="setting">
        <v-btn fab text small class="ma-3" v-on="on">
          <v-icon :class="{ invert: invert, active: open }" class="icon" color="#4d4a4a">
            settings
          </v-icon>
        </v-btn>
      </div>
    </template>
    <div class="popover fresh-var">
      <v-list class="mode-menu">
        <v-list-item>
          <v-list-item-content>
            <nuxt-link class="menu-nuxtlink" to="/profile">My Profiling</nuxt-link>
            <nuxt-link class="menu-nuxtlink" to="/profile/balance">Balance</nuxt-link>
            <nuxt-link class="menu-nuxtlink" to="/settings">Settings</nuxt-link>
            <button v-if="isLoggedIn" class="menu-btn" @click="handleAuth">
              Logout
            </button>
          </v-list-item-content>
        </v-list-item>
        <v-subheader>{{ $t("menu.header_theme") }}</v-subheader>
        <v-list-item class="switcher-wrapper">
          <v-list-item-content>
            <div class="flex-menu">
              <label>
                {{ $t("menu.header_light") }}
              </label>
              <v-switch
                v-model="dark"
                label=""
                class="switch-toggle"
                color="primary"
                @change="setDark()"
              />
              <label>
                {{ $t("menu.header_dark") }}
              </label>
            </div>
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <v-divider />
      <v-list class="lang-menu">
        <v-subheader>{{ $t("menu.header_language") }}</v-subheader>
        <v-list-item
          v-for="locale in $i18n.locales"
          :key="locale.code"
          class="lang-list"
          @click="switchLang(locale.code)"
        >
          <v-list-item-avatar class="flag">
            <i :class="locale.code" />
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title class="lang-opt">
              {{ $t("common." + locale.code) }}
            </v-list-item-title>
          </v-list-item-content>
          <v-list-item-action>
            <v-icon v-if="locale.code === $i18n.locale" color="primary">
              mdi-check
            </v-icon>
          </v-list-item-action>
        </v-list-item>
      </v-list>
    </div>
  </v-menu>
</template>

<style lang="scss" scoped>
@import "./header-style.scss";
</style>

<script>
import { mapGetters, mapState } from 'vuex'

let darkMode = false
if (typeof Storage !== 'undefined') {
  // eslint-disable-line
  darkMode = localStorage.getItem('luxiDarkMode') || false
}

export default {
  props: {
    invert: {
      type: Boolean,
      default: false
    }
  },
  data: () => ({
    dark: darkMode === 'true',
    rtl: false,
    open: false,
    closeOnContentClick: false
  }),
  computed: {
    ...mapState(['counter', 'darkMode']),
    ...mapGetters(['getDir']),
    isLoggedIn() {
      return this.$store.getters.isLoggedIn
    }
  },
  methods: {
    switchLang(val) {
      this.$i18n.setLocale(val)
    },
    setDark() {
      localStorage.setItem('luxiDarkMode', this.dark)
      this.$vuetify.theme.dark = this.dark
    },
    setDirection() {
      this.$vuetify.rtl = this.rtl
      document.dir = this.rtl ? 'rtl' : 'ltr'
    },
    handleAuth() {
      this.$store.dispatch('setAuth')
      if (this.isLoggedIn) {
        this.$router.push('/dashboard')
      } else {
        this.$router.push('/')
      }
    }
  }
}
</script>

<style scoped>
.menu-nuxtlink {
  text-decoration: none !important;
  color: black;
  padding: 10px 16px;
  margin: 0;
}
.menu-nuxtlink:hover,
.menu-btn:hover {
  background: #7abe8f;
}
.menu-btn {
  text-align: left;
  text-decoration: none !important;
  box-shadow: none !important;
  border: none !important;
  color: black;
  padding: 10px 16px;
  margin: 0;
}
.v-btn {
  margin: 0 !important;
}
</style>
