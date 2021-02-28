export default {
  state() {
    return {
      activePuzzles: [
        {
          id: 1,
          title: 'Puzzle1',
          description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla fringilla, tellus at finibus interdum, dui tortor suscipit nisi, et tempor nunc nisl nec diam and again dui tortor suscipit nisi, et tempor nunc nisl nec diam.',
          duration: '~5',
          payment: 1,
          isEnrolled: true,
          isCompleted: true,
          completedOn: '31/01/2021'
        },
        {
          id: 2,
          title: 'Puzzle2',
          description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla fringilla, tellus at finibus interdum, dui tortor suscipit nisi, et tempor nunc nisl nec diam and again dui tortor suscipit nisi, et tempor nunc nisl nec diam.',
          duration: '~10',
          payment: 2,
          isEnrolled: true,
          isCompleted: true,
          completedOn: '15/02/2021'
        },
        {
          id: 3,
          title: 'Puzzle3',
          description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla fringilla, tellus at finibus interdum, dui tortor suscipit nisi, et tempor nunc nisl nec diam and again dui tortor suscipit nisi, et tempor nunc nisl nec diam.',
          duration: '~5',
          payment: 1,
          isEnrolled: true,
          isCompleted: true,
          completedOn: '20/02/2021'
        },
        {
          id: 4,
          title: 'Puzzle4',
          description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla fringilla, tellus at finibus interdum, dui tortor suscipit nisi, et tempor nunc nisl nec diam and again dui tortor suscipit nisi, et tempor nunc nisl nec diam.',
          duration: '~7',
          payment: 1.5,
          isEnrolled: false,
          isCompleted: false,
          completedOn: '20/02/2021'
        },
        {
          id: 5,
          title: 'Puzzle5',
          description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla fringilla, tellus at finibus interdum, dui tortor suscipit nisi, et tempor nunc nisl nec diam and again dui tortor suscipit nisi, et tempor nunc nisl nec diam.',
          duration: '~15',
          payment: 2.5,
          isEnrolled: false,
          isCompleted: false,
          completedOn: '20/02/2021'
        },
        {
          id: 6,
          title: 'Puzzle6',
          description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla fringilla, tellus at finibus interdum, dui tortor suscipit nisi, et tempor nunc nisl nec diam and again dui tortor suscipit nisi, et tempor nunc nisl nec diam.',
          duration: '~8',
          payment: 1.5,
          isEnrolled: false,
          isCompleted: false,
          completedOn: '20/02/2021'
        },
        {
          id: 7,
          title: 'Puzzle7',
          description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla fringilla, tellus at finibus interdum, dui tortor suscipit nisi, et tempor nunc nisl nec diam and again dui tortor suscipit nisi, et tempor nunc nisl nec diam.',
          duration: '~5',
          payment: 1,
          isEnrolled: false,
          isCompleted: false,
          completedOn: '20/02/2021'
        }
      ],
      notifications: [
        {
          id: 11,
          status: 'approved',
          title: 'Puzzle completed',
          puzzleTitle: 'Puzzle1',
          description:
            'Thank you for completing our survey, your answers have been approved.',
          payment: 3,
          duration: 5,
          approvedOn: '09/27/2018',
          notificationChecked: true
        },
        {
          id: 22,
          status: 'approved',
          title: 'Puzzle completed',
          puzzleTitle: 'Puzzle2',
          description:
            'Thank you for completing our survey, your answers have been approved.',
          payment: 2,
          duration: 15,
          approvedOn: '12/15/2013',
          notificationChecked: false
        },
        {
          id: 33,
          status: 'approved',
          title: 'Puzzle completed',
          puzzleTitle: 'Puzzle3',
          description:
          'Thank you for completing our survey, your answers have been approved.',
          payment: 8,
          duration: 20,
          approvedOn: '12/15/2013',
          notificationChecked: true
        },
        {
          id: 8,
          status: 'approved',
          title: 'Puzzle completed',
          puzzleTitle: 'Puzzle4',
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
    getActivePuzzles(state) {
      return state.activePuzzles
    },
    getNotifications(state) {
      return state.notifications
    }
  },
  mutations: {
    toogleEnrollment(state, puzzleId) {
      const puzzleToEnroll = state.activePuzzles.find(puzzle => puzzle.id === puzzleId)
      puzzleToEnroll.isEnrolled = true
      puzzleToEnroll.isCompleted = true
      state.notifications.push({
        id: puzzleToEnroll.id,
        status: 'approved',
        title: 'Puzzle completed',
        surveyTitle: puzzleToEnroll.title,
        description:
          'Thank you for completing our puzzle.',
        payment: puzzleToEnroll.payment,
        duration: puzzleToEnroll.duration,
        approvedOn: puzzleToEnroll.completedOn,
        notificationChecked: false
      })
      state.newNotification++
    },
    toogleWithdrawal(state, puzzleId) {
      const puzzleToEnroll = state.activePuzzles.find(puzzle => puzzle.id === puzzleId)
      puzzleToEnroll.isEnrolled = false
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
    toogleNotification(context, payload) {
      context.commit('toogleNotification', payload)
    }
  }
}
