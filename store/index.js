import Vuex from 'vuex'

import authModule from './auth.js'
import surveysModule from './surveys.js'
import profilingModule from './profiling.js'
import tangoCardModule from './tangoCards.js'
import activeTabNrModule from './activeTabNr'
import brakePointsModule from './breakPoints'

const createStore = () => {
  return new Vuex.Store({
    modules: {
      auth: authModule,
      surveys: surveysModule,
      profiling: profilingModule,
      tangoCards: tangoCardModule,
      activeTabNr: activeTabNrModule,
      brakePoints: brakePointsModule
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
    }
  })
}

export default createStore
