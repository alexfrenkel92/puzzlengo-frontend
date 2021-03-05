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
        <div v-if="!isLoading" class="form-container">
          <h1>{{ $t('form.sign_in_with') }}</h1>
          <div class="social-container">
            <nuxt-link to=""><v-icon large>mdi-facebook</v-icon></nuxt-link>
            <nuxt-link to=""><v-icon large>mdi-google</v-icon></nuxt-link>
            <nuxt-link to=""><v-icon large>mdi-linkedin</v-icon></nuxt-link>
          </div>
          <span>{{ $t('form.use_account') }}</span>
          <v-form ref="form" v-model="valid" @submit.prevent>
            <v-text-field
              v-model="user.loginEmail"
              solo
              :rules="loginEmailRules"
              :label="$t('form.email')"
              clearable
              required
            />
            <v-text-field
              v-model="user.loginPassword"
              solo
              :rules="loginPasswordRules"
              :label="$t('form.password')"
              clearable
              required
            />
          </v-form>
          <AppButton class="continue-btn" btn-style="approve-dark" @click="login">
            {{ $t('form.sign_in') }}
          </AppButton>
          <nuxt-link to="" class="password-reset">{{ $t('form.pswd_forget') }}</nuxt-link>
          <v-alert v-if="error" color="red lighten-2" border="top" dark>
            {{ error }}
          </v-alert>
        </div>
        <div v-if="isLoading" class="loader-container">
          <div class="lds-ring">
            <div />
            <div />
            <div />
            <div />
          </div>
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
      isLoading: false,
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
      ],
      error: ''
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
        this.loginAuth()
      }
    },
    async loginAuth() {
      this.isLoading = true
      try {
        await this.$auth.loginWith('local', {
          data: {
            email: this.user.loginEmail,
            password: this.user.loginPassword
          }
        })
        this.$router.push('/dashboard')
        this.isLoading = false
      } catch (error) {
        this.error = error.response.data.message
        this.isLoading = false
      }
    }
  }
}
</script>

<style lang="css" scoped>
@import '../css-loader.css';
</style>

<style scoped lang='scss'>
.v-card {
  @include background-color-gradient;
}
h1 {
  font-weight: bold;
  margin: 20px 0 0 0;
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
  height: fit-content;
  width: 100%;
  transition: all 0.6s ease-in-out;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.loader-container {
  margin-top: 50%;
  transition: all 0.6s ease-in-out;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

@media screen and (max-width: 700px) {
  .main-wrapper {
    width: 400px !important
  }
  .form-container {
    padding: 5px 15px;
  }
}
@media screen and (max-width: 450px) {
  .main-wrapper {
    width: 330px !important
  }
}
@media screen and (max-width: 400px) {
  .main-wrapper {
    width: 290px !important
  }
}
@media screen and (max-width: 300px) {
  .main-wrapper {
    width: 260px !important
  }
  .form-container {
    padding: 5px;
  }
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
