const url = 'https://integration-api.tangocard.com/raas/v2/'
const key = 'UUFQbGF0Zm9ybTI6YXBZUGZUNkhOT05wRFJVajNDTEdXWXQ3Z3ZJSE9OcERSVVlQZlQ2SGo='

export default {
  state() {
    return {
      loadedTangoCards: [],
      orderResponseData: null
    }
  },
  getters: {
    getTangoCards(state) {
      return state.loadedTangoCards
    },
    getOrderResponseData(state) {
      return state.postedOrder
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
      return this.$axios
        .$post('http://localhost:8080/api/postorder', order)
      // .$post(url + 'orders', order, {
        //   headers: {
      //     Authorization: `Basic ${key}`
      //   }
      // })
        .then((data) => {
          vuexContext.commit('setOrderResponseData', data)
          console.log(order)
          console.log('RESPONSE DATA BELOW')
          if (data.status === 'COMPLETE') {
            console.log(data)
            console.log('successss')
          } else if (data.name === 'Error') {
            console.log(data)
            console.log('faiiiiiiil')
          }
        })
        .catch(error => console.log(error))
    }
  },
  mutations: {
    setTangoCards(state, payload) {
      state.loadedTangoCards = payload
    },
    setOrderResponseData(state, payload) {
      state.postedOrder = payload
    }
  }
}
