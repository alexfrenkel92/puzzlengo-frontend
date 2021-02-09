<template>
  <v-dialog
    v-model="showModal"
    fullscreen
    persistent
    hide-overlay
    transition="dialog-bottom-transition"
  >
    <v-card>
      <v-toolbar dark flat color="transparent">
        <v-btn icon dark @click="closeModal">
          <v-icon color="#3a3939">mdi-close</v-icon>
        </v-btn>
      </v-toolbar>
      <div class="main-wrapper">
        <div class="form-container">
          <h1>Sign in with</h1>
          <div class="social-container">
            <nuxt-link to=""><v-icon large>mdi-facebook</v-icon></nuxt-link>
            <nuxt-link to=""><v-icon large>mdi-google</v-icon></nuxt-link>
            <nuxt-link to=""><v-icon large>mdi-linkedin</v-icon></nuxt-link>
          </div>
          <span>or use your account</span>
          <v-form ref="form" v-model="valid" lazy-validation @submit.prevent>
            <v-text-field
              v-model="user.loginEmail"
              solo
              :rules="loginEmailRules"
              label="E-mail"
              clearable
              required
            />
            <v-text-field
              v-model="user.loginPassword"
              solo
              :rules="loginPasswordRules"
              label="Password"
              clearable
              required
            />
          </v-form>
          <AppButton class="continue-btn" btn-style="approve-dark" @click="login">
            Sign In
          </AppButton>
          <nuxt-link to="" class="password-reset">Forgot your password?</nuxt-link>
        </div>
      </div>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: {
    showModal: {
      type: Boolean,
      required: true
    }
  },
  data() {
    return {
      valid: true,
      user: {
        loginEmail: '',
        loginPassword: ''
      },
      loginEmailRules: [
        v => !!v || 'E-mail is required'
        // v => /.+@.+/.test(v) || 'E-mail must be valid'
      ],
      loginPasswordRules: [
        v => !!v || 'Password is required'
        // v => /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/.test(v) || 'Password must contain at least lowercase letter, one number, a special character and one uppercase letter'
      ]
    }
  },
  methods: {
    closeModal() {
      this.$emit('closeModal')
    },
    validate() {
      this.$refs.form.validate()
    },
    login() {
      this.validate()
      if (this.valid) {
        this.$store.dispatch('setAuth')
        this.$router.push('/dashboard')
      } else {
        alert('Bad credentials')
      }
    }
  }
}
</script>

<style scoped lang='scss'>
.v-card {
  @include background-color-gradient;
}
h1 {
  font-weight: bold;
  margin: 0;
}
span {
  font-size: 12px;
  margin-bottom: 10px;
}
a {
  color: #333;
  font-size: 14px;
  text-decoration: none;
  margin: 15px 0;
}
form {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  padding: 10px 0 0 0;
  margin: 0;
  width: 100%;
}
.v-input {
  border: none;
  padding: 0 10px;
  width: 85%;
}
.main-wrapper {
  margin: auto;
  // background-color: #fcf5ea;
  @include creamy-white-color;
  border-radius: 10px;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  position: relative;
  overflow: hidden;
  width: 350px;
  min-height: 480px;
}
.form-container {
  position: absolute;
  top: 0;
  height: 100%;
  width: 100%;
  transition: all 0.6s ease-in-out;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.social-container {
  margin: 20px 0 10px 0;
}
.social-container a {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  margin: 0 5px;
  height: 40px;
  width: 40px;
}
.form-wrapper {
  margin-top: 10%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.continue-btn {
  font-size: 2rem !important;
  margin: 0 10px;
  padding: 0 5px 5px 5px;
  width: 160px !important;
  height: 48px;
}
.password-reset {
  margin: 30px 0 0 0;
}
</style>
