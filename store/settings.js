export default {
  state() {
    return {
      personalSettings: {
        firstName: 'John',
        lastName: 'Doe',
        birthDate: new Date().toISOString().substr(0, 10)
      },
      contactSettings: {
        phoneNumber: '06301234567',
        email: 'email@email.com'
      },
      notificationsSettings: {
        newSurvey: true,
        surveyStatus: true,
        creditReceived: true,
        creditSpent: true
      }
    }
  },
  getters: {
    personalSettings(state) {
      return state.personalSettings
    },
    contactSettings(state) {
      return state.contactSettings
    },
    notificationsSettings(state) {
      return state.notificationsSettings
    }
  },
  mutations: {
    updatePersonal(state, data) {
      state.personalSettings.firstName = data[0]
      state.personalSettings.lastName = data[1]
      state.personalSettings.birthDate = data[2]
    },
    updateContact(state, data) {
      state.contactSettings.phoneNumber = data[0]
      state.contactSettings.email = data[1]
    },
    updateNotifications(state, data) {
      state.notificationsSettings.newSurvey = data[0]
      state.notificationsSettings.surveyStatus = data[1]
      state.notificationsSettings.creditReceived = data[2]
      state.notificationsSettings.creditSpent = data[3]
    }
  },
  actions: {
    updatePersonal(context, payload) {
      context.commit('updatePersonal', payload)
    },
    updateContact(context, payload) {
      context.commit('updateContact', payload)
    },
    updateNotifications(context, payload) {
      context.commit('updateNotifications', payload)
    }
  }
}
