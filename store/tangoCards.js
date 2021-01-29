const url = 'https://integration-api.tangocard.com/raas/v2/'
const key = 'UUFQbGF0Zm9ybTI6YXBZUGZUNkhOT05wRFJVajNDTEdXWXQ3Z3ZJSE9OcERSVVlQZlQ2SGo='

export default {
  state() {
    return {
      loadedTangoCards: [],
      orderResponseData: '',
      orderIsLoading: false
    }
  },
  getters: {
    getTangoCards(state) {
      return state.loadedTangoCards
    },
    getOrderResponseData(state) {
      return state.orderResponseData
    },
    getOrderIsLoading(state) {
      return state.orderIsLoading
    }
  },
  actions: {
    nuxtServerInit(vuexContext, context) {
      return context.app.$axios
        .$get(url + 'catalogs?verbose=true', {
          headers: {
            Authorization: `Basic ${key}`
          }
        })
        .then((data) => {
          vuexContext.commit('setTangoCards', data)
        })
        .catch(error => context.error(error))
    },
    postOrders(vuexContext, order) {
      vuexContext.commit('setOrderIsLoading')
      return this.$axios
        .$post('http://localhost:8080/api/postorder', order)
      // .$post(url + 'orders', order, {
        //   headers: {
      //     Authorization: `Basic ${key}`
      //   }
      // })
        .then((data) => {
          console.log(order)
          console.log('STORE DATA BELOW')
          if (data.status === 'COMPLETE') {
            console.log('successss')
            console.log(data)
            vuexContext.commit('setOrderResponseData', data)
          }
          if (data.name === 'Error') {
            console.log('faiiiiiiil')
            console.log(data)
            vuexContext.commit('setOrderResponseData', data)
          }
          vuexContext.commit('setOrderIsLoading')
        })
        .catch(error => vuexContext.commit('setError', error))
    }
  },
  mutations: {
    setTangoCards(state, payload) {
      state.loadedTangoCards = payload
    },
    setOrderResponseData(state, payload) {
      state.orderResponseData = payload
    },
    setOrderIsLoading(state) {
      state.orderIsLoading = !state.orderIsLoading
    }
  }
}
