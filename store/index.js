import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: {
      isLoggedIn: true,
      breakpoints: {
        smUp: ['smDown', 'mdDown', 'lgDown', 'xl'],
        mdUp: ['mdDown', 'lgDown', 'xl'],
        lgUp: ['lgDown', 'xl'],
        xlUp: ['xl'],
        xsDown: ['xsDown'],
        smDown: ['smDown', 'xsDown'],
        mdDown: ['mdDown', 'smDown', 'xsDown'],
        lgDown: ['lgDown', 'mdDown', 'smDown', 'xsDown']
      },
      activeSurveys: [
        {
          id: 1,
          title: 'PERSONEL1',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla fringilla, tellus at finibus interdum, dui tortor suscipit nisi, et tempor nunc nisl nec diam.',
          duration: 5,
          quota: 250,
          enrolled: 198,
          payment: 1,
          type: 'personel',
          postponable: null,
          isPostponed: null,
          isEnrolled: false,
          isCompleted: false,
          myTime: null,
          allTime: ['2021-01-08T11:00:00', '2021-01-08T14:00:00', '2021-01-08T22:00:00']
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
          isPostponed: true,
          isEnrolled: false,
          isCompleted: false,
          myTime: null,
          allTime: ['2021-01-08T11:00:00', '2021-01-08T14:00:00', '2021-01-08T22:00:00']
        },
        {
          id: 3,
          title: 'PERSONEL3',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla fringilla, tellus at finibus interdum, dui tortor suscipit nisi, et tempor nunc nisl nec diam.',
          duration: 25,
          quota: 100,
          enrolled: 79,
          payment: 4,
          type: 'personel',
          postponable: null,
          isPostponed: null,
          isEnrolled: false,
          isCompleted: false,
          myTime: null,
          allTime: ['2021-01-08T11:00:00', '2021-01-08T14:00:00', '2021-01-08T22:00:00']
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
          isCompleted: false
        }
      ],
      profilingCats: [
        {
          id: 1,
          title: 'Basic info',
          totalQuestions: 9,
          answered: 9,
          img: 'basics'
        },
        {
          id: 2,
          title: 'Education',
          totalQuestions: 5,
          answered: 0,
          img: 'education'
        },
        {
          id: 3,
          title: 'Work',
          totalQuestions: 10,
          answered: 0,
          img: 'work'
        },
        {
          id: 4,
          title: 'Relationship',
          totalQuestions: 6,
          answered: 3,
          img: 'relationship'
        },
        {
          id: 5,
          title: 'Health',
          totalQuestions: 10,
          answered: 0,
          img: 'health'
        },
        {
          id: 6,
          title: 'Hobbies',
          totalQuestions: 10,
          answered: 0,
          img: 'hobbies'
        }
      ]
    },
    getters: {
      isLoggedIn(state) {
        return state.isLoggedIn
      },
      getActiveSurveys(state) {
        return state.activeSurveys
      },
      getProfilingCats(state) {
        return state.profilingCats
      }
    },
    mutations: {
      setAuth(state) {
        state.isLoggedIn = !state.isLoggedIn
      },
      toogleEnrollment(state, surveyId) {
        const surveyToEnroll = state.activeSurveys.find(survey => survey.id === surveyId)
        if (surveyToEnroll.postponable === false) {
          surveyToEnroll.isEnrolled = true
          surveyToEnroll.isCompleted = true
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
      },
      toogleCompletion(state, surveyId) {
        const surveyToComplete = state.activeSurveys.find(survey => survey.id === surveyId)
        surveyToComplete.isCompleted = true
      }
    },
    actions: {
      setAuth(context, payload) {
        context.commit('setAuth', payload)
      },
      toogleEnrollment(context, payload) {
        context.commit('toogleEnrollment', payload)
      },
      toogleWithdrawal(context, payload) {
        context.commit('toogleWithdrawal', payload)
      },
      toogleCompletion(context, payload) {
        context.commit('toogleCompletion', payload)
      }
    }
  })
}

export default createStore
