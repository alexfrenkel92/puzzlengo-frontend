<template>
  <div class="landing-wrapper">
    <div class="image">
      <img :src="logo" :alt="logo" width="80px" height="80px">
    </div>
    <div class="title">Rx Community Site Demo</div>
    <div class="description">
      Take part in engaging research, earn cash, and help improve human
      knowledge
    </div>
    <div class="signup-container">
      <v-text-field
        v-model="eMail"
        solo
        label="Your E-mail Address"
        clearable
      />
      <AppButton class="signup-btn" btn-style="approve" @click="handleSignUp">
        Sign Up
      </AppButton>
    </div>
    <div class="already-registered">Already registered?</div>
    <AppButton class="login-btn" btn-style="approve" @click="handleLogin">
      Login
    </AppButton>
    <div class="big-image-container">
      <img :src="bigpic" alt="people's opinion" height="400px">
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: ''
    }
  },
  computed: {
    isLoggedIn() {
      return this.$store.getters.isLoggedIn
    },
    logo() {
      return require('~/static/images/de_emblema_RGB.png')
    },
    bigpic() {
      return require('~/static/images/survey1.png')
    }
  },
  methods: {
    handleLogin() {
      this.$store.dispatch('setAuth')
      if (this.isLoggedIn) {
        this.$router.push('/dashboard')
      }
    },
    handleSignUp() {
      console.log(this.eMail)
    }
  }
}
</script>

<style scoped>
.landing-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 25px;
  margin-bottom: 30px;
  background-color: #f3eae5;
}
.title {
  font-size: 2.5rem;
  padding: 10px;
}
.description {
  font-size: 1.5rem;
  padding: 10px 10px 20px 10px;
}
.signup-container {
  display: flex;
  flex-direction: row;
  margin: 10px 0;
}
/* Some stuff coming with vuetify text-field...not needed */
.v-text-field__details {
  display: none;
}
.signup-btn {
  font-size: 2rem !important;
  margin: 0 10px;
  padding: 0 5px 5px 5px;
  width: 160px !important;
  height: 48px;
}
.already-registered {
  font-size: 1rem;
  padding: 10px 0 0 0;
}
.login-btn {
  font-size: 2rem !important;
  margin: 10px;
  padding: 0 5px 5px 5px;
  width: 160px;
  height: 48px;
}
.big-image-container {
  padding: 10px;
  background: transparent;
}
</style>
