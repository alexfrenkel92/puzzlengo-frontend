<template>
  <div class="landing-wrapper">
    <div class="image">
      <img :src="logo" :alt="logo" width="80px" height="80px">
    </div>
    <div class="title">Rx Community Site Demo</div>
    <div class="description">
      Take part in engaging research, earn credits, and help improve human
      knowledge
    </div>
    <div class="signup-container">
      <v-form ref="form" v-model="valid" @submit.prevent>
        <v-text-field
          v-model="email"
          class="centered-input"
          solo
          :rules="emailRules"
          required
          label="Your E-mail Address"
          clearable
        />
      </v-form>
      <AppButton class="signup-btn" btn-style="approve" @click="handleSignUp">
        Sign Up
      </AppButton>
    </div>
    <div class="already-registered">Already registered?</div>
    <AppButton class="login-btn" btn-style="approve" @click="handleLogin">
      Sign In
    </AppButton>
    <div class="big-image-container">
      <img
        class="survey-image"
        :src="bigpic"
        alt="survey-image"
        height="400px"
      >
    </div>
    <SignUp :show-modal="toogleSignUpModal" @closeModal="closeModal" />
    <Login :show-modal="toogleLoginModal" @closeModal="closeModal" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      valid: true,
      email: '',
      toogleSignUpModal: false,
      toogleLoginModal: false,
      emailRules: [
        // v => !!v || 'E-mail is required',
        // v => /.+@.+/.test(v) || 'E-mail must be valid'
      ]
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
      // this.$store.dispatch('setAuth')
      // if (this.isLoggedIn) {
      //   this.$router.push('/dashboard')
      // }
      this.toogleLoginModal = !this.toogleLoginModal
    },
    handleSignUp() {
      this.validate()
      if (this.valid) {
        this.toogleSignUpModal = !this.toogleSignUpModal
      }
    },
    validate() {
      this.$refs.form.validate()
    },
    closeModal() {
      this.toogleSignUpModal = false
      this.toogleLoginModal = false
    }
  }
}
</script>

<style scoped>
.centered-input >>> input {
  text-align: center
}
.landing-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 25px;
  margin-bottom: 30px;
}
.title {
  font-size: 2.5rem !important;
  padding: 10px;
  text-align: center;
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
.v-text-field {
  width: 300px;
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
  width: 165px;
  height: 48px;
}
.big-image-container {
  padding: 10px;
  background: transparent;
}
@media screen and (max-width: 500px) {
  .survey-image {
    display: block;
    max-width: 400px;
    width: auto;
    height: auto;
  }
}
@media screen and (max-width: 380px) {
  .landing-wrapper {
    padding-bottom: 0;
    margin-bottom: 15px;
  }
  .title {
    font-size: 2rem !important;
    text-align: center;
  }
  .signup-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 10px 0;
  }
  .survey-image {
    display: block;
    max-width: 280px;
    width: auto;
    height: auto;
  }
}
</style>
