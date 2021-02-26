import Vuex from 'vuex'

import Cookies from 'js-cookie'

// import authModule from './auth.js'
import surveysModule from './surveys.js'
import userProfileModule from './userProfile.js'
import tangoCardModule from './tangoCards.js'
import activeTabNrModule from './activeTabNr'
import brakePointsModule from './breakPoints'
import settingsModule from './settings.js'
import { cookieFromRequest } from '~/utils'

const createStore = () => {
  return new Vuex.Store({
    modules: {
      // auth: authModule,
      surveys: surveysModule,
      userProfile: userProfileModule,
      tangoCards: tangoCardModule,
      activeTabNr: activeTabNrModule,
      brakePoints: brakePointsModule,
      settings: settingsModule
    },
    state: {
      breakpoints: {
        smUp: ['smDown', 'mdDown', 'lgDown', 'xl'],
        mdUp: ['mdDown', 'lgDown', 'xl'],
        lgUp: ['lgDown', 'xl'],
        xlUp: ['xl'],
        xsDown: ['xsDown'],
        smDown: ['smDown', 'xsDown'],
        mdDown: ['mdDown', 'smDown', 'xsDown'],
        lgDown: ['lgDown', 'mdDown', 'smDown', 'xsDown']
      }
    },
    actions: {
      nuxtServerInit({ commit }, { req }) {
        const token = cookieFromRequest(req, 'token')
        if (token) {
          commit('auth/SET_TOKEN', token)
        }

        // const locale = cookieFromRequest(req, 'locale')
        // if (locale) {
        //   commit('lang/SET_LOCALE', { locale })
        // }
      },

      nuxtClientInit({ commit, getters }) {
        const token = Cookies.get('token')
        if (token && !getters['auth/token']) {
          commit('auth/SET_TOKEN', token)
        }

        // const locale = Cookies.get('locale')
        // if (locale && !getters['lang/locale']) {
        //   commit('lang/SET_LOCALE', { locale })
        // }
      }
    }
  })
}

export default createStore
