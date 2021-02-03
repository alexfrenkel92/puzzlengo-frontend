export default {
  state() {
    return {
      tabNumber: null
    }
  },
  getters: {
    getActiveTabNr(state) {
      return state.tabNumber
    }
  },
  actions: {
    setActiveTabNr(context, payload) {
      context.commit('setActiveTabNr', payload)
    }
  },
  mutations: {
    setActiveTabNr(state, payload) {
      state.tabNumber = payload
    }
  }
}
