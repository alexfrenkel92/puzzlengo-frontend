export default {
  state() {
    return {
      personalData: {
        userId: 7,
        firstName: 'Karesz',
        lastName: 'Pálinkás',
        email: 'detoxforlife@gmail.com',
        phoneNr: '06969696969',
        birthDate: '1970-12-24',
        sex: 'Male',
        password: 'cefre'
      }
      // notificationsSettings: {
      //   newSurvey: true,
      //   surveyStatus: true,
      //   creditReceived: true,
      //   creditSpent: true
      // },
      // healthPermissions: {
      //   heartRate: true,
      //   bloodPressure: false,
      //   bloodOxygen: false,
      //   weight: true
      // },
      // activityPermissions: {
      //   steps: true,
      //   sleep: true,
      //   floors: true,
      //   activeTime: false
      // },
      // locationPermissions: {
      //   location: true
      // }
    }
  },
  getters: {
    getUserInformation(state) {
      return state.personalData
    }
    // notificationsSettings(state) {
    //   return state.notificationsSettings
    // },
    // healthPermissions(state) {
    //   return state.healthPermissions
    // },
    // activityPermissions(state) {
    //   return state.activityPermissions
    // },
    // locationPermissions(state) {
    //   return state.locationPermissions
    // }
  },
  mutations: {
    updateUserName(state, data) {
      state.personalData.firstName = data.firstName
      state.personalData.lastName = data.lastName
    },
    updateUserEmail(state, data) {
      state.personalData.email = data.email
    },
    updateUserPhoneNumber(state, data) {
      state.personalData.phoneNr = data.phoneNr
    },
    updateDateOfBirth(state, data) {
      state.personalData.birthDate = data
    },
    updateUserSex(state, data) {
      state.personalData.sex = data.sex
    },
    updatePassword(state, data) {
      state.personalData.password = data.password
    }
    // updateNotifications(state, data) {
    //   state.notificationsSettings.newSurvey = data[0]
    //   state.notificationsSettings.surveyStatus = data[1]
    //   state.notificationsSettings.creditReceived = data[2]
    //   state.notificationsSettings.creditSpent = data[3]
    // },
    // updateHealth(state, data) {
    //   state.healthPermissions.heartRate = data[0]
    //   state.healthPermissions.bloodPressure = data[1]
    //   state.healthPermissions.bloodOxygen = data[2]
    //   state.healthPermissions.weight = data[3]
    // },
    // updateActivity(state, data) {
    //   state.activityPermissions.steps = data[0]
    //   state.activityPermissions.sleep = data[1]
    //   state.activityPermissions.floors = data[2]
    //   state.activityPermissions.activeTime = data[3]
    // },
    // updateLocation(state, data) {
    //   state.locationPermissions.location = data[0]
    // }
  },
  actions: {
    updateUserName(context, payload) {
      context.commit('updateUserName', payload)
    },
    updateUserEmail(context, payload) {
      context.commit('updateUserEmail', payload)
    },
    updateUserPhoneNumber(context, payload) {
      context.commit('updateUserPhoneNumber', payload)
    },
    updateDateOfBirth(context, payload) {
      context.commit('updateDateOfBirth', payload)
    },
    updateUserSex(context, payload) {
      context.commit('updateUserSex', payload)
    },
    updatePassword(context, payload) {
      context.commit('updatePassword', payload)
    }
    // updateContact(context, payload) {
    //   context.commit('updateContact', payload)
    // },
    // updateNotifications(context, payload) {
    //   context.commit('updateNotifications', payload)
    // },
    // updateHealth(context, payload) {
    //   context.commit('updateHealth', payload)
    // },
    // updateActivity(context, payload) {
    //   context.commit('updateActivity', payload)
    // },
    // updateLocation(context, payload) {
    //   context.commit('updateLocation', payload)
    // }
  }
}
