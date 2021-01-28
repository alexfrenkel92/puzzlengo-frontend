export default {
  state() {
    return {
      isLoggedIn: false
    }
  },
  getters: {
    isLoggedIn(state) {
      return state.isLoggedIn
    }
  },
  mutations: {
    setAuth(state) {
      state.isLoggedIn = !state.isLoggedIn
    }
  },
  actions: {
    setAuth(context, payload) {
      context.commit('setAuth', payload)
    }
  }
}
