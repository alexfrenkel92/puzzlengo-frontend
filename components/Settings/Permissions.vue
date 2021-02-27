<template>
  <div class="permissions-main-container">
    <h3>Notification settings (receiving e-mails)</h3>
    <div class="permission-containers-wrapper">
      <div class="permission">
        <p>New game</p>
        <v-switch v-model="newGame" hide-details color="#7abe8f" @change="postNewGame" />
      </div>
      <div class="permission">
        <p>Game invitation</p>
        <v-switch v-model="gameInvitation" hide-details color="#7abe8f" @change="postGameInvitation" />
      </div>
      <div class="permission">
        <p>Credit received</p>
        <v-switch v-model="creditReceived" hide-details color="#7abe8f" @change="postCreditReceivedChange" />
      </div>
      <div class="permission">
        <p>E-mail notification</p>
        <v-switch v-model="emailNotification" hide-details color="#7abe8f" @change="postEmailNotification" />
      </div>
      <div class="permission">
        <p>Push notification</p>
        <v-switch v-model="pushNotification" hide-details color="#7abe8f" @change="postPushNotification" />
      </div>
    </div>
    <h3>Location settings</h3>
    <div class="permission-containers-wrapper">
      <div class="permission">
        <p>Location tracking</p>
        <v-switch v-model="location" hide-details color="#7abe8f" @change="postLocationChange" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newGame: this.newGameValue,
      gameInvitation: this.gameInvitationValue,
      emailNotification: this.emailNotificationValue,
      creditReceived: this.creditReceivedValue,
      pushNotification: this.pushNotificationValue,
      location: this.locationValue
    }
  },
  computed: {
    newGameValue() {
      return this.$store.getters.getNotificationSettings.newGame
    },
    gameInvitationValue() {
      return this.$store.getters.getNotificationSettings.gameInvitation
    },
    emailNotificationValue() {
      return this.$store.getters.getNotificationSettings.emailNotification
    },
    pushNotificationValue() {
      return this.$store.getters.getNotificationSettings.pushNotification
    },
    locationValue() {
      return this.$store.getters.getLocationPermission.location
    }
  },
  created() {
    this.newGame = this.$store.getters.getNotificationSettings.newGame
    this.gameInvitation = this.$store.getters.getNotificationSettings.gameInvitation
    this.creditReceived = this.$store.getters.getNotificationSettings.creditReceived
    this.emailNotification = this.$store.getters.getNotificationSettings.emailNotification
    this.pushNotification = this.$store.getters.getNotificationSettings.pushNotification
    this.location = this.$store.getters.getLocationPermission.location
  },
  methods: {
    postNewGame(value) {
      this.$store.dispatch('updateNewGame', value)
    },
    postGameInvitation(value) {
      this.$store.dispatch('updateGameInvitation', value)
    },
    postCreditReceivedChange(value) {
      this.$store.dispatch('updateCreditsReceived', value)
    },
    postEmailNotification(value) {
      this.$store.dispatch('updateEmailNotification', value)
    },
    postPushNotification(value) {
      this.$store.dispatch('updatePushNotification', value)
    },
    postLocationChange(value) {
      this.$store.dispatch('updateLocationPermission', value)
    }
  }
}
</script>

<style scoped lang="scss">
.permissions-main-container {
  min-width: 300px;
  width: 500px;
  margin-bottom: 20px;
  padding: 0 1rem;
}
h3 {
  padding-left: 10px;
  margin: 15px 0 7px 0;
}
.permission-containers-wrapper {
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.219);
  border-radius: 3px;
  padding-bottom: 10px;
}
.permission {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px 5px 0 5px;
}
p {
  margin: 0 0 0 10px;
  font-weight: 550;
}
.v-input {
  margin: 0 !important;
}
</style>
