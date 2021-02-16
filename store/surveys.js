export default {
  state() {
    return {
      activeSurveys: [
        {
          id: 1,
          title: 'PERSONAL1',
          description:
            'Lorem ipsum dolor ',
          duration: 5,
          quota: 250,
          enrolled: 198,
          payment: 1,
          type: 'personal',
          postponable: null,
          isPostponed: null,
          isEnrolled: true,
          isCompleted: true,
          completedOn: '31/01/2021',
          myTime: null,
          allTime: [{ id: 1, date: '2021-02-22T11:00:00', address: 'Street 1' }, { id: 2, date: '2021-02-23T14:00:00', address: 'Street 2' }, { id: 3, date: '2021-02-28T22:00:00', address: 'Street 3' }]
        },
        {
          id: 2,
          title: 'ONLINE2',
          description:
          'This survey is postponable. Once started, it can be paused and continued at a later time. It will be found in the \'Enrolled Surveys\' section.',
          duration: 15,
          quota: 100,
          enrolled: 27,
          payment: 1.5,
          type: 'online',
          postponable: true,
          isPostponed: false,
          isEnrolled: true,
          isCompleted: true,
          completedOn: '06/22/2018'
        },
        {
          id: 3,
          title: 'PERSONAL3',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla fringilla, tellus at finibus interdum, dui tortor suscipit nisi, et tempor nunc nisl nec diam and again dui tortor suscipit nisi, et tempor nunc nisl nec diam.',
          duration: 25,
          quota: 100,
          enrolled: 79,
          payment: 4,
          type: 'personal',
          postponable: null,
          isPostponed: null,
          isEnrolled: true,
          isCompleted: true,
          completedOn: '01/03/2010',
          myTime: null,
          allTime: [{ id: 1, date: '2021-02-22T11:00:00', address: 'Street 1' }, { id: 2, date: '2021-02-23T14:00:00', address: 'Street 2' }, { id: 3, date: '2021-02-28T22:00:00', address: 'Street 3' }]
        },
        {
          id: 4,
          title: 'ONLINE4',
          description:
            'This survey is not postponable. Once the modal is confirmed, it moves to the \'Completed Surveys\' section. Has to be finished at once.',
          duration: 15,
          quota: 80,
          enrolled: 33,
          payment: 2,
          type: 'online',
          postponable: false,
          isPostponed: null,
          isEnrolled: false,
          isCompleted: false,
          completedOn: '01/09/2010'
        },
        {
          id: 5,
          title: 'PERSONAL5',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla fringilla, tellus at finibus interdum, dui tortor suscipit nisi, et tempor nunc nisl nec diam and again dui tortor suscipit nisi, et tempor nunc nisl nec diam.',
          duration: 25,
          quota: 100,
          enrolled: 79,
          payment: 4,
          type: 'personal',
          postponable: null,
          isPostponed: null,
          isEnrolled: false,
          isCompleted: false,
          completedOn: '01/03/2010',
          myTime: null,
          allTime: [{ id: 1, date: '2021-02-22T11:00:00', address: 'Street 1' }, { id: 2, date: '2021-02-23T14:00:00', address: 'Street 2' }, { id: 3, date: '2021-02-28T22:00:00', address: 'Street 3' }]
        },
        {
          id: 6,
          title: 'ONLINE6',
          description:
            'This survey is postponable. Once started, it can be paused and continued at a later time. It will be found in the \'Enrolled Surveys\' section.',
          duration: 15,
          quota: 80,
          enrolled: 33,
          payment: 2,
          type: 'online',
          postponable: true,
          isPostponed: null,
          isEnrolled: false,
          isCompleted: false,
          completedOn: '12/15/2013'
        },
        {
          id: 7,
          title: 'PERSONAL7',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla fringilla, tellus at finibus interdum, dui tortor suscipit nisi, et tempor nunc nisl nec diam and again dui tortor suscipit nisi, et tempor nunc nisl nec diam.',
          duration: 25,
          quota: 100,
          enrolled: 79,
          payment: 4,
          type: 'personal',
          postponable: null,
          isPostponed: null,
          isEnrolled: false,
          isCompleted: false,
          completedOn: '02/16/2021',
          myTime: null,
          allTime: [{ id: 1, date: '2021-02-22T11:00:00', address: 'Street 1' }, { id: 2, date: '2021-02-23T14:00:00', address: 'Street 2' }, { id: 3, date: '2021-02-28T22:00:00', address: 'Street 3' }]
        }
      ],
      notifications: [
        {
          id: 11,
          type: 'personal',
          status: 'approved',
          title: 'Survey approved',
          surveyTitle: 'PERSONAL1',
          description:
            'Thank you for completing our survey, your answers have been approved.',
          payment: 3,
          duration: 5,
          approvedOn: '09/27/2018',
          notificationChecked: true
        },
        {
          id: 22,
          type: 'online',
          status: 'declined',
          title: 'Survey declined',
          surveyTitle: 'ONLINE2',
          description:
            'The data provided cannot be validated.',
          payment: 2,
          duration: 15,
          approvedOn: '12/15/2013',
          notificationChecked: false
        },
        {
          id: 33,
          type: 'personal',
          status: 'request',
          title: 'Participation request',
          surveyTitle: 'Work ethics',
          description:
            'Your are invited to a personal survey participation on the selected date in the topic of work ethics.',
          payment: 8,
          duration: 20,
          approvedOn: '12/15/2013',
          notificationChecked: true
        },
        {
          id: 8,
          type: 'personal',
          status: 'approved',
          title: 'Survey approved',
          surveyTitle: 'PERSONAL3',
          description:
            'Thank you for completing our survey, your answers have been approved.',
          payment: 2,
          duration: 25,
          approvedOn: '12/15/2013',
          notificationChecked: true
        }
      ]
    }
  },
  getters: {
    getActiveSurveys(state) {
      return state.activeSurveys
    },
    getNotifications(state) {
      return state.notifications
    }
  },
  mutations: {
    toogleEnrollment(state, surveyId) {
      const surveyToEnroll = state.activeSurveys.find(survey => survey.id === surveyId)
      if (surveyToEnroll.postponable === false) {
        surveyToEnroll.isEnrolled = true
        surveyToEnroll.isCompleted = true
        state.notifications.push({
          id: surveyToEnroll.id,
          type: surveyToEnroll.type,
          status: 'approved',
          title: 'Survey approved',
          surveyTitle: surveyToEnroll.title,
          description:
            'Thank you for completing our survey, your answers have been approved.',
          payment: surveyToEnroll.payment,
          duration: surveyToEnroll.duration,
          approvedOn: surveyToEnroll.completedOn,
          notificationChecked: false
        })
        state.newNotification++
      } else {
        surveyToEnroll.isEnrolled = true
      }
      if (surveyToEnroll.isPostponed === true) {
        surveyToEnroll.isEnrolled = true
      }
    },
    toogleWithdrawal(state, surveyId) {
      const surveyToEnroll = state.activeSurveys.find(survey => survey.id === surveyId)
      surveyToEnroll.isEnrolled = false
      surveyToEnroll.myTime = null
    },
    toogleCompletion(state, surveyId) {
      const surveyToComplete = state.activeSurveys.find(survey => survey.id === surveyId)
      surveyToComplete.isCompleted = true
      state.notifications.push({
        id: surveyToComplete.id,
        type: surveyToComplete.type,
        status: 'approved',
        title: 'Survey approved',
        surveyTitle: surveyToComplete.title,
        description:
          'Thank you for completing our survey, your answers have been approved.',
        payment: surveyToComplete.payment,
        duration: surveyToComplete.duration,
        approvedOn: surveyToComplete.completedOn,
        notificationChecked: false
      })
      state.newNotification++
    },
    toogleAppointment(state, [surveyId, timeId]) {
      const surveyToBook = state.activeSurveys.find(survey => survey.id === surveyId)
      surveyToBook.myTime = timeId
    },
    toogleNotification(state, notificationId) {
      const notification = state.notifications.find(notification => notification.id === notificationId)
      notification.notificationChecked = true
    }
  },
  actions: {
    toogleEnrollment(context, payload) {
      context.commit('toogleEnrollment', payload)
    },
    toogleWithdrawal(context, payload) {
      context.commit('toogleWithdrawal', payload)
    },
    toogleCompletion(context, payload) {
      context.commit('toogleCompletion', payload)
    },
    toogleAppointment(context, playload) {
      context.commit('toogleAppointment', playload)
    },
    toogleNotification(context, payload) {
      context.commit('toogleNotification', payload)
    }
  }
}
