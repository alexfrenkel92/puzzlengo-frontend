<template>
  <div class="container">
    <div class="box email">
      <div class="title-logo">
        <v-icon>email</v-icon>
        <h3>Verify your e-mail</h3>
      </div>
      <div class="content">
        <p>Please check your inbox to verify your email. If you have trouble finding it, please check your spam folder.</p>
      </div>
      <div class="status">
        <app-button
          v-if="!emailVerified"
          type="button"
          btn-style="approve"
          @click="verifyEmail"
        >
          Verify my e-mail
        </app-button>
        <div v-else class="verified">
          <span>Verified</span>
        </div>
      </div>
    </div>
    <div class="box phone">
      <div class="title-logo">
        <v-icon>phone</v-icon>
        <h3>Verify your phone number</h3>
      </div>
      <div class="content">
        <p>We need you to verify your phone number. We do this via a text message with a code.</p>
      </div>
      <div class="status">
        <app-button
          v-if="!phoneVerified"
          type="button"
          btn-style="approve"
          @click="verifyPhoneNr"
        >
          Verify my phone number
        </app-button>
        <div v-else class="verified">
          <span>Verified</span>
        </div>
      </div>
    </div>
    <div class="box profiling">
      <div class="title-logo">
        <v-icon>mdi-account-question</v-icon>
        <h3>Complete your profile</h3>
      </div>
      <div class="content">
        <p style="margin-bottom: 0">In order to get the most surveys, please complete your profile.</p>
        <p style="font-weight: 600; color: red"><span>Current completion: </span>{{ profileCompletion }}/100%</p>
      </div>
      <div class="status">
        <app-button
          v-if="profileCompletion !== 100"
          type="button"
          btn-style="approve"
          @click="$router.push('/profile')"
        >
          Complete my profling
        </app-button>
        <div v-else class="verified">
          <span>Verified</span>
        </div>
      </div>
      <div class="hackBtn" @click="comleteProfileHack" />
    </div>
    <div>
      <VerificationPhone :show-phone-ver-modal="showPhoneVerModal" @save="showPhoneVerModal = !showPhoneVerModal" @close="showPhoneVerModal = !showPhoneVerModal" />
      <VerificationEmail :show-email-ver-modal="showEmailVerModal" @save="showEmailVerModal = !showEmailVerModal" @close="showEmailVerModal = !showEmailVerModal" /></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showPhoneVerModal: false,
      showEmailVerModal: false
    }
  },
  computed: {
    emailVerified() {
      return this.$store.getters.getUserInformation.emailVerified
    },
    phoneVerified() {
      return this.$store.getters.getUserInformation.phoneVerified
    },
    profileCompletion() {
      return this.$store.getters.getUserInformation.profileCompletion
    }
  },
  methods: {
    verifyPhoneNr() {
      this.showPhoneVerModal = !this.showPhoneVerModal
    },
    verifyEmail() {
      this.showEmailVerModal = !this.showEmailVerModal
    },
    comleteProfileHack() {
      this.$store.dispatch('completeProfile')
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  background-color: #f8ababb9;
  border-radius: 3px;
}
.box {
  height: fit-content;
  width: 320px;
  padding: 15px;
  margin: 10px;
  border-radius: 3px;
  position: relative;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.5);
  display: grid;
  @include whitish-background-color;
  display: flex;
  flex-direction: column;
}
.title-logo {
  display: flex;
  flex-direction: row;
  margin-bottom: 10px;
}
h3 {
  margin-left: 15px;
  line-height: 1.5rem;
}
.content {
  text-align: justify;
}
.status {
  margin: auto;
  display: flex;
  flex-direction: row;
}
.verified {
  @include ligth-green-color;
  border-radius: 3px;
  color: white;
  padding: 5px 8px;
}
.verified span {
  font-size: 1rem;
  height: 34px;
  // font-weight: 600;
}
.button {
  box-shadow: none !important;
  height: 34px;
}
.v-icon {
 margin-left: 2px;
}
.v-btn {
  color: white;
}
.hackBtn {
  width: 10px;
  height: 10px;
  background-color: red;
  position: absolute;
  bottom: 0;
}
</style>
