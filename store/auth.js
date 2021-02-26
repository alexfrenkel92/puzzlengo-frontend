export default {
  state() {
    return {
      isLoggedIn: true,
      email: null,
      password: null
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
