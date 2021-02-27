export default {
  state() {
    return {
      demographicProfiling: [
        {
          id: 1,
          title: 'Basic info',
          img: 'basics',
          type: 'dem',
          url: 'http://localhost/LimeSurvey/index.php/759823?lang=en',
          isCompleted: false
        },
        {
          id: 2,
          title: 'Education',
          img: 'education',
          type: 'dem',
          url: 'http://localhost/LimeSurvey/index.php/111897?lang=en',
          isCompleted: false
        },
        {
          id: 3,
          title: 'Work',
          totalQuestions: 10,
          img: 'work',
          type: 'dem',
          url: '',
          isCompleted: false
        },
        {
          id: 4,
          title: 'Relationship',
          img: 'relationship',
          type: 'dem',
          url: '',
          isCompleted: true
        },
        {
          id: 5,
          title: 'Health',
          img: 'health',
          type: 'dem',
          url: '',
          isCompleted: false
        },
        {
          id: 6,
          title: 'Hobbies',
          img: 'hobbies',
          type: 'dem',
          url: '',
          isCompleted: true
        }
      ],
      psychologicalProfiling: [
        {
          id: 1,
          title: 'Mental Health',
          img: 'basics',
          type: 'psy',
          url: '',
          isCompleted: true
        },
        {
          id: 2,
          title: 'Behavioral Patterns',
          img: 'education',
          type: 'psy',
          url: '',
          isCompleted: false
        },
        {
          id: 3,
          title: 'Cognitive skills',
          img: 'work',
          type: 'psy',
          url: '',
          isCompleted: true
        },
        {
          id: 4,
          title: 'Educational patterns',
          img: 'work',
          type: 'psy',
          url: '',
          isCompleted: false
        },
        {
          id: 5,
          title: 'Other',
          img: 'relationship',
          type: 'psy',
          url: '',
          isCompleted: false
        }
      ],
      balanceNr: 75
    }
  },
  getters: {
    getDemographicProfiling(state) {
      return state.demographicProfiling
    },
    getPsychologicalProfiling(state) {
      return state.psychologicalProfiling
    },
    getBalanceNr(state) {
      return state.balanceNr
    }
  },
  mutations: {
    calculateBalance(state, balanceNr) {
      state.balanceNr += balanceNr
    },
    toogleSurveyCompletion(state, payload) {
      const surveyId = payload[0]
      const type = payload[1]
      if (type === 'dem') {
        const surveyToComplete = state.demographicProfiling.find(survey => survey.id === surveyId)
        surveyToComplete.isCompleted = true
      } else if (type === 'psy') {
        const surveyToComplete = state.psychologicalProfiling.find(survey => survey.id === surveyId)
        surveyToComplete.isCompleted = true
      }
    }
  },
  actions: {
    calculateBalance(context, payload) {
      context.commit('calculateBalance', payload)
    },
    toogleSurveyCompletion(context, payload) {
      context.commit('toogleSurveyCompletion', payload)
    }
  }
}
