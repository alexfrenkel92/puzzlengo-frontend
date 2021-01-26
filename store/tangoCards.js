const url = 'https://integration-api.tangocard.com/raas/v2/catalogs?verbose=true'
const key = 'UUFQbGF0Zm9ybTI6YXBZUGZUNkhOT05wRFJVajNDTEdXWXQ3Z3ZJSE9OcERSVVlQZlQ2SGo='

export default {
  state() {
    return {
      loadedTangoCards: []
    }
  },
  getters: {
    getTangoCards(state) {
      return state.loadedTangoCards
    }
  },
  actions: {
    nuxtServerInit(vuexContext, context) {
      return context.app.$axios
        .$get(url, {
          headers: {
            Authorization: `Basic ${key}`
          }
        })
        .then((data) => {
          vuexContext.commit('setTangoCards', data)
        })
        .catch(error => context.error(error))
    }
  },
  mutations: {
    setTangoCards(state, payload) {
      state.loadedTangoCards = payload
    }
  }
}
