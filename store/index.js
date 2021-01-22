import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: {
      isLoggedIn: false,
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
          title: 'PERSONAL1',
          description:
            'Lorem ipsum dolor ',
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
          allTime: [{ id: 1, date: '2021-01-08T11:00:00', address: 'Street1' }, { id: 2, date: '2021-01-08T14:00:00', address: 'Street 2' }, { id: 3, date: '2021-01-08T22:00:00', address: 'Street 1' }]
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
          isCompleted: false
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
          type: 'personel',
          postponable: null,
          isPostponed: null,
          isEnrolled: false,
          isCompleted: false,
          myTime: null,
          allTime: [{ id: 1, date: '2021-01-08T12:00:00', address: 'Street1' }, { id: 2, date: '2021-06-08T14:00:00', address: 'Street 2' }, { id: 3, date: '2021-06-08T22:00:00', address: 'Street 1' }]
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
      demographicProfiling: [
        {
          id: 1,
          title: 'Basic info',
          totalQuestions: 9,
          answered: 9,
          img: 'basics',
          type: 'dem'
        },
        {
          id: 2,
          title: 'Education',
          totalQuestions: 5,
          answered: 0,
          img: 'education',
          type: 'dem'
        },
        {
          id: 3,
          title: 'Work',
          totalQuestions: 10,
          answered: 0,
          img: 'work',
          type: 'dem'
        },
        {
          id: 4,
          title: 'Relationship',
          totalQuestions: 6,
          answered: 3,
          img: 'relationship',
          type: 'dem'
        },
        {
          id: 5,
          title: 'Health',
          totalQuestions: 10,
          answered: 0,
          img: 'health',
          type: 'dem'
        },
        {
          id: 6,
          title: 'Hobbies',
          totalQuestions: 10,
          answered: 0,
          img: 'hobbies',
          type: 'dem'
        }
      ],
      psychologicalProfiling: [
        {
          id: 1,
          title: 'Mental Health',
          totalQuestions: 15,
          answered: 7,
          img: 'basics',
          type: 'psy'
        },
        {
          id: 2,
          title: 'Behavioral Patterns',
          totalQuestions: 5,
          answered: 0,
          img: 'education',
          type: 'psy'
        },
        {
          id: 3,
          title: 'Cognitive skills',
          totalQuestions: 10,
          answered: 0,
          img: 'work',
          type: 'psy'
        },
        {
          id: 4,
          title: 'Educational patterns',
          totalQuestions: 10,
          answered: 0,
          img: 'work',
          type: 'psy'
        },
        {
          id: 5,
          title: 'Other',
          totalQuestions: 6,
          answered: 3,
          img: 'relationship',
          type: 'psy'
        }
      ],
      torolj: ''
    },
    getters: {
      isLoggedIn(state) {
        return state.isLoggedIn
      },
      getActiveSurveys(state) {
        return state.activeSurveys
      },
      getDemographicProfiling(state) {
        return state.demographicProfiling
      },
      getPsychologicalProfiling(state) {
        return state.psychologicalProfiling
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
        surveyToEnroll.myTime = null
      },
      toogleCompletion(state, surveyId) {
        const surveyToComplete = state.activeSurveys.find(survey => survey.id === surveyId)
        surveyToComplete.isCompleted = true
      },
      toogleAppointment(state, [surveyId, timeId]) {
        const surveyToBook = state.activeSurveys.find(survey => survey.id === surveyId)
        surveyToBook.myTime = timeId
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
      },
      toogleAppointment(context, playload) {
        context.commit('toogleAppointment', playload)
      }
    }
  })
}

export default createStore
