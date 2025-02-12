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
          <v-icon :class="{ invert: invert, active: open }" class="icon">
            settings
          </v-icon>
        </v-btn>
      </div>
    </template>
    <div class="popover fresh-var">
      <v-list class="mode-menu">
        <v-list-item>
          <v-list-item-content>
            <nuxt-link class="menu-nuxtlink" to="/profile">{{ $t('menu.profiling') }}</nuxt-link>
            <nuxt-link class="menu-nuxtlink" to="/balance">{{ $t('menu.balance') }}</nuxt-link>
            <nuxt-link class="menu-nuxtlink" to="/settings">{{ $t('menu.settings') }}</nuxt-link>
            <button class="menu-btn" @click="logout">
              {{ $t('menu.logout') }}
            </button>
          </v-list-item-content>
        </v-list-item>
        <!-- <v-subheader>{{ $t("menu.header_theme") }}</v-subheader> -->
        <v-list-item class="switcher-wrapper">
          <div>
            <div class="flex-menu">
              <label>
                {{ $t("menu.header_light") }}
              </label>
              <v-switch
                v-model="dark"
                label=""
                class="switch-toggle"
                color="primary"
                @change="1"
              />
              <label>
                {{ $t("menu.header_dark") }}
              </label>
            </div>
          </div>
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
            <img :src="require('~/static/images/flags/' + locale.code + '.png')" alt="language-flag">
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title class="lang-opt">
              {{ $t("common." + locale.code) }}
            </v-list-item-title>
          </v-list-item-content>
          <v-list-item-action>
            <v-icon v-if="locale.code === $i18n.locale" color="#7abe8f" class="selected-language-icon">
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
    ...mapGetters(['getDir', 'isAuthenticated']),
    languageFLag() {
      return require('~/static/images/flags/en.png')
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
    async logout() {
      await this.$auth.logout()
    }
  }
}
</script>

<style scoped lang="scss">
.menu-nuxtlink {
  text-decoration: none !important;
  @include primary-text-color;
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
  @include primary-text-color;
  padding: 10px 16px;
  margin: 0;
}
.v-btn {
  margin: 0 !important;
}
.v-icon{
  @include primary-text-color;
}
</style>
