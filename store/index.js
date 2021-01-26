import Vuex from 'vuex'

import authModule from './auth.js'
import surveysModule from './surveys.js'
import profilingModule from './profiling.js'
import tangoCardModule from './tangoCards.js'

const createStore = () => {
  return new Vuex.Store({
    modules: {
      auth: authModule,
      surveys: surveysModule,
      profiling: profilingModule,
      tangoCard: tangoCardModule
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
