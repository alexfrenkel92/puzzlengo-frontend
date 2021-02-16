export default {
  state() {
    return {
      personalData: {
        userId: 7,
        firstName: 'Karesz Jr.',
        lastName: 'Pálinkás',
        email: 'detoxforlife_karcsi@gmail.com',
        phoneNr: '06969696969',
        birthDate: '1970-12-24',
        sex: 'Male',
        password: 'cefre',
        emailVerified: false,
        phoneVerified: false,
        profileCompletion: 100
      },
      notificationSettings: {
        newSurvey: true,
        surveyStatus: true,
        creditReceived: true
      },
      activityPermissions: {
        steps: true,
        sleep: false,
        floorsClimbed: true,
        activeTime: false
      },
      healthPermissions: {
        heartRate: true,
        bloodPressure: false,
        bloodOxygen: false,
        weight: true
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
    getActivityPermissions(state) {
      return state.activityPermissions
    },
    getHealthPermissions(state) {
      return state.healthPermissions
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
    updateNewSurvey(state, data) {
      state.notificationSettings.newSurvey = data
    },
    updateSurveyStatus(state, data) {
      state.notificationSettings.surveyStatus = data
    },
    updateCreditsReceived(state, data) {
      state.notificationSettings.creditReceived = data
    },
    // ACTIVITIES /////////////////////////////
    updateSteps(state, data) {
      state.activityPermissions.steps = data
    },
    updateSleep(state, data) {
      state.activityPermissions.sleep = data
    },
    updateFloorsClimbed(state, data) {
      state.activityPermissions.floorsClimbed = data
    },
    updateActiveTime(state, data) {
      state.activityPermissions.activeTime = data
    },
    // HEALTH ////////////////////////////////
    updateHeartRate(state, data) {
      state.healthPermissions.heartRate = data
    },
    updateBloodPresure(state, data) {
      state.healthPermissions.bloodPressure = data
    },
    updateBloodOxygen(state, data) {
      state.healthPermissions.bloodOxygen = data
    },
    updateWeightValue(state, data) {
      state.healthPermissions.weight = data
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
    updateNewSurvey(context, payload) {
      context.commit('updateNewSurvey', payload)
    },
    updateSurveyStatus(context, payload) {
      context.commit('updateSurveyStatus', payload)
    },
    updateCreditsReceived(context, payload) {
      context.commit('updateCreditsReceived', payload)
    },
    // ACTIVITIES /////////////////////////////
    updateSteps(context, payload) {
      context.commit('updateSteps', payload)
    },
    updateSleep(context, payload) {
      context.commit('updateSleep', payload)
    },
    updateFloorsClimbed(context, payload) {
      context.commit('updateFloorsClimbed', payload)
    },
    updateActiveTime(context, payload) {
      context.commit('updateActiveTime', payload)
    },
    // HEALTH ////////////////////////////////
    updateHeartRate(context, payload) {
      context.commit('updateHeartRate', payload)
    },
    updateBloodPresure(context, payload) {
      context.commit('updateBloodPresure', payload)
    },
    updateBloodOxygen(context, payload) {
      context.commit('updateBloodOxygen', payload)
    },
    updateWeightValue(context, payload) {
      context.commit('updateWeightValue', payload)
    },

    updateLocationPermission(context, payload) {
      context.commit('updateLocationPermission', payload)
    }
  }
}
