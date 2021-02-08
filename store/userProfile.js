export default {
  state() {
    return {
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
      profileCompletion: 100,
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
    getProfileCompletion(state) {
      return state.profileCompletion
    },
    getBalanceNr(state) {
      return state.balanceNr
    }
  },
  mutations: {
    calculateBalance(state, balanceNr) {
      state.balanceNr += balanceNr
    }
  },
  actions: {
    calculateBalance(context, payload) {
      context.commit('calculateBalance', payload)
    }
  }
}
