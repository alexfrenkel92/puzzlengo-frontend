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
      },
      healthPermissions: {
        heartRate: true,
        bloodPressure: false,
        bloodOxygen: false,
        weight: true
      },
      activityPermissions: {
        steps: true,
        sleep: true,
        floors: true,
        activeTime: false
      },
      locationPermissions: {
        location: true
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
    },
    healthPermissions(state) {
      return state.healthPermissions
    },
    activityPermissions(state) {
      return state.activityPermissions
    },
    locationPermissions(state) {
      return state.locationPermissions
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
    },
    updateHealth(state, data) {
      state.healthPermissions.heartRate = data[0]
      state.healthPermissions.bloodPressure = data[1]
      state.healthPermissions.bloodOxygen = data[2]
      state.healthPermissions.weight = data[3]
    },
    updateActivity(state, data) {
      state.activityPermissions.steps = data[0]
      state.activityPermissions.sleep = data[1]
      state.activityPermissions.floors = data[2]
      state.activityPermissions.activeTime = data[3]
    },
    updateLocation(state, data) {
      state.locationPermissions.location = data[0]
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
    },
    updateHealth(context, payload) {
      context.commit('updateHealth', payload)
    },
    updateActivity(context, payload) {
      context.commit('updateActivity', payload)
    },
    updateLocation(context, payload) {
      context.commit('updateLocation', payload)
    }
  }
}
