import Vuex from 'vuex'

import puzzleModule from './puzzle.js'
import userProfileModule from './userProfile.js'
import tangoCardModule from './tangoCards.js'
import activeTabNrModule from './activeTabNr'
import brakePointsModule from './breakPoints'
import settingsModule from './settings.js'

const createStore = () => {
  return new Vuex.Store({
    modules: {
      puzzles: puzzleModule,
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
    getters: {
      isAuthenticated(state) {
        return state.auth.loggedIn
      },
      loggedInUser(state) {
        return state.auth.user
      }
    }
  })
}

export default createStore
