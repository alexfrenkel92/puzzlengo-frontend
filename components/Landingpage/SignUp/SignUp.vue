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
          <div class="form-container">
            <h1>{{ $t('form.start') }}</h1>
            <h4>{{ $t('form.sign_up_with') }}</h4>
            <div class="social-container">
              <nuxt-link to=""><v-icon large>mdi-facebook</v-icon></nuxt-link>
              <nuxt-link to=""><v-icon large>mdi-google</v-icon></nuxt-link>
              <nuxt-link to=""><v-icon large>mdi-linkedin</v-icon></nuxt-link>
            </div>
            <h4 class="alternate-signup">{{ $t('form.fill_form') }}</h4>
            <div class="sign-up-form">
              <v-form ref="form" v-model="valid" lazy-validation @submit.prevent>
                <div v-if="basicUserInfo.firstName == ''">
                  <v-text-field
                    v-model="formInput.firstName"
                    class="centered-input"
                    solo
                    :rules="nameRules"
                    :label="$t('form.first_name')"
                    clearable
                  />
                </div>
                <div v-show="basicUserInfo.firstName !== '' && basicUserInfo.lastName == ''">
                  <v-text-field
                    v-model="formInput.lastName"
                    class="centered-input"
                    solo
                    :rules="nameRules"
                    :label="$t('form.last_name')"
                    clearable
                  />
                </div>
                <div v-if="basicUserInfo.lastName !== ''">
                  <v-text-field
                    v-model="formInput.age"
                    class="centered-input"
                    solo
                    :rules="ageRules"
                    :label="$t('form.age')"
                    clearable
                  />
                </div>
              </v-form>
              <AppButton class="continue-btn" btn-style="approve-dark" @click="saveUserInfo">
                {{ $t('form.continue') }}
              </AppButton>
            </div>
            <!-- <div class="progressBar" /> -->
            <v-progress-linear :value="progressBar" height="20" color="#7abe8f">
              <strong>{{ Math.floor(progressBar) }}%</strong>
            </v-progress-linear>
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
    }
  },
  data() {
    return {
      progress: 0,
      valid: true,
      formInput: {
        firstName: '',
        lastName: '',
        age: ''
      },
      basicUserInfo: {
        firstName: '',
        lastName: '',
        age: ''
      },
      nameRules: [
        v => !!v || 'Input is required'
        // v => (v && v.length >= 2) || 'Input must be at least 2 characters'
      ],
      ageRules: [
        v => !!v || 'Input is required'
        // v => (v && v.length >= 2) || 'Input must be at least 2 characters'
      ]
    }
  },
  computed: {
    progressBar() {
      return (this.progress / 3) * 100
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
      this.basicUserInfo.firstName = this.formInput.firstName
      this.basicUserInfo.lastName = this.formInput.lastName
      this.basicUserInfo.age = this.formInput.age
      this.getProgress()
      if (this.progress === 3) {
        this.$store.dispatch('setAuth')
        this.$router.push('/dashboard')
      }
    },
    saveForm() {
      this.$store.dispatch('setAuth')
      this.$router.push('/dashboard')
    },
    getProgress() {
      const progress = Object.keys(this.basicUserInfo).filter(x => this.basicUserInfo[x] !== '').length
      this.progress = progress
    }
  }
}
</script>

<style scoped lang='scss'>
.v-card {
  @include background-color-gradient;
  // background: linear-gradient(110deg, #FEE181 60%, #95E38E 60%);

}
.centered-input >>> input {
  text-align: center
}
h1 {
  font-weight: bold;
  margin: 10px 0;
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
  height: 100%;
  width: 100%;
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
