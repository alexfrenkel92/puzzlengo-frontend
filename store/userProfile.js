export default {
  state() {
    return {
      demographicProfiling: [
        {
          id: 1,
          title: 'Basic info',
          img: 'basics',
          type: 'dem',
          isCompleted: false
        },
        {
          id: 2,
          title: 'Education',
          img: 'education',
          type: 'dem',
          isCompleted: false
        },
        {
          id: 3,
          title: 'Work',
          totalQuestions: 10,
          img: 'work',
          type: 'dem',
          isCompleted: false
        },
        {
          id: 4,
          title: 'Relationship',
          img: 'relationship',
          type: 'dem',
          isCompleted: true
        },
        {
          id: 5,
          title: 'Health',
          img: 'health',
          type: 'dem',
          isCompleted: false
        },
        {
          id: 6,
          title: 'Hobbies',
          img: 'hobbies',
          type: 'dem',
          isCompleted: true
        }
      ],
      psychologicalProfiling: [
        {
          id: 1,
          title: 'Mental Health',
          img: 'basics',
          type: 'psy',
          isCompleted: true
        },
        {
          id: 2,
          title: 'Behavioral Patterns',
          img: 'education',
          type: 'psy',
          isCompleted: false
        },
        {
          id: 3,
          title: 'Cognitive skills',
          img: 'work',
          type: 'psy',
          isCompleted: true
        },
        {
          id: 4,
          title: 'Educational patterns',
          img: 'work',
          type: 'psy',
          isCompleted: false
        },
        {
          id: 5,
          title: 'Other',
          img: 'relationship',
          type: 'psy',
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
    }
  },
  actions: {
    calculateBalance(context, payload) {
      context.commit('calculateBalance', payload)
    }
  }
}
