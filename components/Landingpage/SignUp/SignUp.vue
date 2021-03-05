<template>
  <v-row justify="center">
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
            <h1>{{ $t('form.start') }}</h1>
            <h4>{{ $t('form.sign_up_with') }}</h4>
            <div class="social-container">
              <nuxt-link to=""><v-icon large>mdi-facebook</v-icon></nuxt-link>
              <nuxt-link to=""><v-icon large>mdi-google</v-icon></nuxt-link>
              <nuxt-link to=""><v-icon large>mdi-linkedin</v-icon></nuxt-link>
            </div>
            <h4 class="alternate-signup">{{ $t('form.fill_form') }}</h4>
            <div class="sign-up-form">
              <v-form ref="form" v-model="valid" @submit.prevent>
                <div v-if="basicUserInfo.name == ''">
                  <v-text-field
                    v-model="formInput.name"
                    class="centered-input"
                    solo
                    :rules="nameRule"
                    label="Name"
                    clearable
                  />
                </div>
                <div
                  v-show="
                    basicUserInfo.name !== '' && basicUserInfo.password == ''
                  "
                >
                  <v-text-field
                    v-model="formInput.password"
                    class="centered-input"
                    solo
                    :rules="passwordRule"
                    label="Password"
                    clearable
                  />
                </div>
                <div v-if="basicUserInfo.password !== ''">
                  <v-text-field
                    v-model="formInput.age"
                    class="centered-input"
                    solo
                    :rules="ageRule"
                    label="Age"
                    clearable
                  />
                </div>
              </v-form>
              <AppButton
                class="continue-btn"
                btn-style="approve-dark"
                @click="saveUserInfo"
              >
                {{ $t('form.continue') }}
              </AppButton>
            </div>
            <!-- <div class="progressBar" /> -->
            <v-progress-linear :value="progressBar" height="20" color="#7abe8f">
              <strong>{{ Math.floor(progressBar) }}%</strong>
            </v-progress-linear>
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
  </v-row>
</template>

<script>
export default {
  props: {
    showModal: {
      type: Boolean,
      required: true
    },
    email: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      isLoading: false,
      progress: 0,
      valid: true,
      formInput: {
        name: '',
        password: '',
        age: ''
      },
      basicUserInfo: {
        email: '',
        name: '',
        password: '',
        age: ''
      },
      nameRule: [
        v => !!v || 'Name is required'
        // v => (v && v.length >= 2) || 'Input must be at least 2 characters'
      ],
      passwordRule: [
        v => !!v || 'Password is required'
        // v => (v && v.length >= 2) || 'Input must be at least 2 characters'
      ],
      ageRule: [
        v => !!v || 'Age is required'
        // v => (v && v.length >= 2) || 'Input must be at least 2 characters'
      ],
      error: ''
    }
  },
  computed: {
    progressBar() {
      return (this.progress / 4) * 100
    }
  },
  methods: {
    closeModal() {
      this.$emit('closeModal')
    },
    validate() {
      this.$refs.form.validate()
    },
    saveUserInfo() {
      this.validate()
      this.basicUserInfo.email = this.email
      this.basicUserInfo.name = this.formInput.name
      this.basicUserInfo.password = this.formInput.password
      this.basicUserInfo.age = this.formInput.age
      this.getProgress()
      if (this.progress === 4) {
        // this.$store.dispatch('setAuth')
        // this.$router.push('/dashboard')
        this.register()
      }
    },
    async register() {
      this.isLoading = true
      try {
        await this.$axios.post('register', {
          username: this.basicUserInfo.name,
          email: this.basicUserInfo.email,
          password: this.basicUserInfo.password
        })

        await this.$auth.loginWith('local', {
          data: {
            email: this.basicUserInfo.email,
            password: this.basicUserInfo.password
          }
        })

        this.$router.push('/dashboard')
        this.isLoading = false
      } catch (error) {
        this.error = error.response.data.message
        this.isLoading = false
      }
    },
    saveForm() {
      this.$store.dispatch('setAuth')
      this.$router.push('/dashboard')
    },
    getProgress() {
      const progress = Object.keys(this.basicUserInfo).filter(
        x => this.basicUserInfo[x] !== ''
      ).length
      this.progress = progress
    }
  }
}
</script>

<style lang="css" scoped>
@import '../css-loader.css';
</style>

<style scoped lang="scss">
.v-card {
  @include background-color-gradient;
}
.centered-input >>> input {
  text-align: center;
}
h1 {
  font-weight: bold;
  margin: 20px 0 0 0;
}
.form-container h4:nth-child(4) {
  font-weight: 400;
}
.alternate-signup {
  margin: 5px 20px;
  text-align: center;
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
.v-input {
  border: none;
  padding: 0 10px;
  width: 85%;
  margin: auto;
}
.v-text-field__details {
  width: 300px;
}
.main-wrapper {
  margin: auto;
  @include creamy-white-color;
  border-radius: 10px;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  position: relative;
  overflow: hidden;
  width: 550px;
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
  margin-top: 30%;
  transition: all 0.6s ease-in-out;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

@media screen and (max-width: 700px) {
  .main-wrapper {
    width: 400px !important;
  }
  .form-container {
    padding: 5px 15px;
  }
}
@media screen and (max-width: 450px) {
  .main-wrapper {
    width: 330px !important;
  }
}
@media screen and (max-width: 400px) {
  .main-wrapper {
    width: 290px !important;
  }
}
@media screen and (max-width: 300px) {
  .main-wrapper {
    width: 260px !important;
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
.sign-up-form {
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 300px;
}
.continue-btn {
  font-size: 2rem !important;
  /* margin: 0 10px;
  padding: 0 5px 5px 5px; */
  width: 160px !important;
  height: 48px;
}
.v-progress-linear {
  width: 80%;
  margin: 25px 0;
}
</style>
