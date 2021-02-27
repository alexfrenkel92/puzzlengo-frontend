export default {
  state() {
    return {
      personalData: {
        userId: 7,
        firstName: 'Karesz Jr.',
        lastName: 'Pálinkás',
        email: 'detoxforlife_karcsi@gmail.com',
        phoneNr: '06703639098',
        birthDate: '1970-12-24',
        sex: 'Male',
        password: 'cefre',
        emailVerified: false,
        phoneVerified: false,
        profileCompletion: 100
      },
      notificationSettings: {
        newGame: true,
        gameInvitation: false,
        creditReceived: true,
        emailNotification: true,
        pushNotification: false
      },
      locationPermissions: {
        location: false
      }
    }
  },
  getters: {
    getUserInformation(state) {
      return state.personalData
    },
    getNotificationSettings(state) {
      return state.notificationSettings
    },
    getLocationPermission(state) {
      return state.locationPermissions
    }
  },
  mutations: {
    updateUserName(state, data) {
      state.personalData.firstName = data.firstName
      state.personalData.lastName = data.lastName
    },
    updateUserEmail(state, data) {
      state.personalData.email = data.email
    },
    verifyEmail(state) {
      state.personalData.emailVerified = true
    },
    updateUserPhoneNumber(state, data) {
      state.personalData.phoneNr = data.phoneNr
    },
    verifyPhoneNumber(state) {
      state.personalData.phoneVerified = true
    },
    updateDateOfBirth(state, data) {
      state.personalData.birthDate = data
    },
    updateUserSex(state, data) {
      state.personalData.sex = data.sex
    },
    completeProfile(state, data) {
      state.personalData.profileCompletion = 100
    },

    // NOTIFICATIONS ////////////////////////////////
    updateNewGame(state, data) {
      state.notificationSettings.newGame = data
    },
    updateGameInvitation(state, data) {
      state.notificationSettings.gameInvitation = data
    },
    updateCreditsReceived(state, data) {
      state.notificationSettings.creditReceived = data
    },
    updateEmailNotification(state, data) {
      state.notificationSettings.emailNotification = data
    },
    updatePushNotification(state, data) {
      state.notificationSettings.pushNotification = data
    },
    // LOCATION ////////////////////////////////
    updateLocationPermission(state, data) {
      state.locationPermissions.location = data
    }
  },
  actions: {
    completeProfile(context, payload) {
      context.commit('completeProfile', payload)
    },
    updateUserName(context, payload) {
      context.commit('updateUserName', payload)
    },
    updateUserEmail(context, payload) {
      context.commit('updateUserEmail', payload)
    },
    verifyEmail(context, payload) {
      context.commit('verifyEmail', payload)
    },
    updateUserPhoneNumber(context, payload) {
      context.commit('updateUserPhoneNumber', payload)
    },
    verifyPhoneNumber(context, payload) {
      context.commit('verifyPhoneNumber', payload)
    },
    updateDateOfBirth(context, payload) {
      context.commit('updateDateOfBirth', payload)
    },
    updateUserSex(context, payload) {
      context.commit('updateUserSex', payload)
    },
    updatePassword(context, payload) {
      context.commit('updatePassword', payload)
    },
    updateNewGame(context, payload) {
      context.commit('updateNewGame', payload)
    },
    updateGameInvitation(context, payload) {
      context.commit('updateGameInvitation', payload)
    },
    updateCreditsReceived(context, payload) {
      context.commit('updateCreditsReceived', payload)
    },
    updateEmailNotification(context, payload) {
      context.commit('updateEmailNotification', payload)
    },
    updatePushNotification(context, payload) {
      context.commit('updatePushNotification', payload)
    },
    // LOCATION ////////////////////////////////
    updateLocationPermission(context, payload) {
      context.commit('updateLocationPermission', payload)
    }
  }
}
