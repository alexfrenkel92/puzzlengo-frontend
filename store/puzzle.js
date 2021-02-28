export default {
  state() {
    return {
      activePuzzles: [
        {
          id: 1,
          title: 'Dog on board',
          description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla fringilla, tellus at finibus interdum, dui tortor suscipit nisi, et tempor nunc nisl nec diam and again dui tortor suscipit nisi, et tempor nunc nisl nec diam.',
          duration: '~5',
          payment: 1,
          isEnrolled: true,
          isCompleted: true,
          completedOn: '2021-02-15'
        },
        {
          id: 2,
          title: 'Turtles',
          description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla fringilla, tellus at finibus interdum, dui tortor suscipit nisi, et tempor nunc nisl nec diam and again dui tortor suscipit nisi, et tempor nunc nisl nec diam.',
          duration: '~10',
          payment: 2,
          isEnrolled: true,
          isCompleted: true,
          completedOn: '2021-02-24'
        },
        {
          id: 3,
          title: 'Cat in the Air',
          description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla fringilla, tellus at finibus interdum, dui tortor suscipit nisi, et tempor nunc nisl nec diam and again dui tortor suscipit nisi, et tempor nunc nisl nec diam.',
          duration: '~5',
          payment: 1,
          isEnrolled: true,
          isCompleted: true,
          completedOn: '2021-02-25'
        },
        {
          id: 4,
          title: 'Surfing dog',
          description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla fringilla, tellus at finibus interdum, dui tortor suscipit nisi, et tempor nunc nisl nec diam and again dui tortor suscipit nisi, et tempor nunc nisl nec diam.',
          duration: '~1',
          payment: 1.5,
          img: 'dog',
          isEnrolled: false,
          isCompleted: false,
          completedOn: null
        },
        {
          id: 5,
          title: 'Surfing cat',
          description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla fringilla, tellus at finibus interdum, dui tortor suscipit nisi, et tempor nunc nisl nec diam and again dui tortor suscipit nisi, et tempor nunc nisl nec diam.',
          duration: '~1',
          payment: 2.5,
          img: 'cat',
          isEnrolled: false,
          isCompleted: false,
          completedOn: null
        },
        {
          id: 6,
          title: 'Monkey on board',
          description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla fringilla, tellus at finibus interdum, dui tortor suscipit nisi, et tempor nunc nisl nec diam and again dui tortor suscipit nisi, et tempor nunc nisl nec diam.',
          duration: '~1',
          payment: 1.5,
          img: 'monkey',
          isEnrolled: false,
          isCompleted: false,
          completedOn: null
        },
        {
          id: 7,
          title: 'Hamster',
          description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla fringilla, tellus at finibus interdum, dui tortor suscipit nisi, et tempor nunc nisl nec diam and again dui tortor suscipit nisi, et tempor nunc nisl nec diam.',
          duration: '~1',
          payment: 1,
          img: 'hamster',
          isEnrolled: false,
          isCompleted: false,
          completedOn: null
        }
      ],
      notifications: [
        {
          id: 11,
          status: 'approved',
          title: 'Puzzle completed',
          puzzleTitle: 'Dog on board',
          description:
            'Thank you for completing our puzzle, your credits have been approved',
          payment: 3,
          duration: 5,
          completedOn: '2021-02-15',
          notificationChecked: true
        },
        {
          id: 22,
          status: 'approved',
          title: 'Puzzle completed',
          puzzleTitle: 'Turtles',
          description:
            'Thank you for completing our puzzle, your credits have been approved.',
          payment: 2,
          duration: 15,
          completedOn: '2021-02-24',
          notificationChecked: true
        },
        {
          id: 33,
          status: 'approved',
          title: 'Puzzle completed',
          puzzleTitle: 'Cat in the air',
          description:
          'Thank you for completing our puzzle, your credits have been approved.',
          payment: 8,
          duration: 20,
          completedOn: '2021-02-25',
          notificationChecked: false
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
      puzzleToEnroll.completedOn = new Date().toISOString().split('T')[0]
      state.notifications.push({
        id: puzzleToEnroll.id,
        status: 'approved',
        title: 'Puzzle completed',
        puzzleTitle: puzzleToEnroll.title,
        description:
          'Thank you for completing our puzzle, your credits have been approved.',
        payment: puzzleToEnroll.payment,
        duration: puzzleToEnroll.duration,
        completedOn: puzzleToEnroll.completedOn,
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
