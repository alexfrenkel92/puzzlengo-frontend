const url = 'https://integration-api.tangocard.com/raas/v2/'
const key = 'UUFQbGF0Zm9ybTI6YXBZUGZUNkhOT05wRFJVajNDTEdXWXQ3Z3ZJSE9OcERSVVlQZlQ2SGo='

export default {
  state() {
    return {
      loadedTangoCards: [],
      orderResponseData: '',
      orderIsLoading: false,
      pastOrders: ''
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
    },
    getPastOrders(state) {
      return state.pastOrders
    }
  },
  actions: {
    async nuxtServerInit({ commit }, { app }) {
      const tangoCards = await app.$axios.get(url + 'catalogs?verbose=true', {
        headers: {
          Authorization: `Basic ${key}`
        }
      })
      commit('setTangoCards', tangoCards.data)
      const pastOrders = await app.$axios.get(url + 'orders', {
        headers: {
          Authorization: `Basic ${key}`
        }
      })
      commit('setPastOders', pastOrders.data)
    },
    // nuxtServerInit(context, context) {
    //   return context.app.$axios
    //     .$get(url + 'catalogs?verbose=true', {
    //       headers: {
    //         Authorization: `Basic ${key}`
    //       }
    //     })
    //     .then((data) => {
    //       context.commit('setTangoCards', data)
    //     })
    //     .catch(error => context.error(error))
    // },
    postOrders(context, order) {
      context.commit('setOrderIsLoading')
      return this.$axios
        .$post('http://localhost:8080/api/postorder', order)
        .then((data) => {
          // console.log(order)
          // console.log('STORE DATA BELOW')
          if (data.status === 'COMPLETE') {
            // console.log('successss')
            // console.log(data)
            context.commit('setOrderResponseData', data)
          }
          if (data.name === 'Error') {
            // console.log('faiiiiiiil')
            // console.log(data)
            context.commit('setOrderResponseData', data)
          }
          context.commit('setOrderIsLoading')
        })
        .catch(error => context.commit('setError', error))
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
    },
    setPastOders(state, payload) {
      state.pastOrders = payload
    }
  }
}
