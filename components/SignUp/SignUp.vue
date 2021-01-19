<template>
  <v-row justify="center">
    <v-dialog
      v-model="showModal"
      fullscreen
      persistent
      hide-overlay
      transition="dialog-bottom-transition"
    >
      <v-card color="#f7f0ec">
        <v-toolbar dark color="#7abe8f">
          <v-btn icon dark @click="closeModal">
            <v-icon>mdi-close</v-icon>
          </v-btn>
          <v-toolbar-title>Sign Up form</v-toolbar-title>
          <v-spacer />
          <v-toolbar-items>
            <v-btn dark text @click="closeModal"> Save </v-btn>
          </v-toolbar-items>
        </v-toolbar>
        <div v-if="basicUserInfo.firstName == ''" class="sigup-questions-wrapper">
          <v-form ref="form" v-model="valid" @submit.prevent>
            <v-text-field
              v-model="formInput.firstName"
              solo
              :rules="nameRules"
              label="First Name"
              clearable
            />
          </v-form>
          <AppButton class="continue-btn" btn-style="approve" @click="saveUserInfo">
            Continue
          </AppButton>
        </div>
        <div v-show="basicUserInfo.firstName !== '' && basicUserInfo.lastName == ''" class="sigup-questions-wrapper">
          <v-form ref="form" v-model="valid" @submit.prevent>
            <v-text-field
              v-model="formInput.lastName"
              solo
              :rules="nameRules"
              label="Last Name"
              clearable
            />
          </v-form>
          <AppButton class="continue-btn" btn-style="approve" @click="saveUserInfo">
            Continue
          </AppButton>
        </div>
        <div v-if="basicUserInfo.lastName !== ''" class="sigup-questions-wrapper">
          <v-form ref="form" v-model="valid" @submit.prevent>
            <v-text-field
              v-model="formInput.age"
              solo
              :rules="ageRules"
              label="Age"
              clearable
            />
          </v-form>
          <AppButton class="continue-btn" btn-style="approve" @click="saveForm">
            Continue
          </AppButton>
        </div>
        <div class="progressBar">
          <v-progress-linear :value="progressBar" height="20" color="#7abe8f">
            <strong>{{ Math.floor(progressBar) }}%</strong>
          </v-progress-linear>
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
        v => !!v || 'Input is required',
        v => (v && v.length >= 2) || 'Input must be at least 2 characters'
      ],
      ageRules: [
        v => !!v || 'Input is required',
        v => (v && v.length >= 2) || 'Input must be at least 2 characters'
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
      this.basicUserInfo.firstName = this.formInput.firstName
      this.basicUserInfo.lastName = this.formInput.lastName
      this.basicUserInfo.age = this.formInput.age
      this.getProgress()
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

<style scoped>
.sigup-questions-wrapper {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  padding: 70px 20px;
}
.continue-btn {
  font-size: 2rem !important;
  margin: 0 10px;
  padding: 0 5px 5px 5px;
  width: 160px !important;
  height: 48px;
}
.v-text-field__details {
  display: none;
}
.progressBar {
  margin: 0 10%;
}
</style>
