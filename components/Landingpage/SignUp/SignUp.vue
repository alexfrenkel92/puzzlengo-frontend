<template>
  <v-row justify="center">
    <v-dialog
      v-model="showModal"
      fullscreen
      persistent
      hide-overlay
      transition="dialog-bottom-transition"
    >
      <v-card color="#E0F2F1">
        <v-toolbar dark flat color="transparent">
          <v-toolbar-title class="black--text">Sign Up form</v-toolbar-title>
          <v-spacer />
          <v-btn icon dark @click="closeModal">
            <v-icon color="black">mdi-close</v-icon>
          </v-btn>
        </v-toolbar>
        <div class="form-wrapper">
          <v-form ref="form" v-model="valid" lazy-validation @submit.prevent>
            <div v-if="basicUserInfo.firstName == ''">
              <v-text-field
                v-model="formInput.firstName"
                solo
                :rules="nameRules"
                label="First Name"
                clearable
              />
            </div>
            <div v-show="basicUserInfo.firstName !== '' && basicUserInfo.lastName == ''">
              <v-text-field
                v-model="formInput.lastName"
                solo
                :rules="nameRules"
                label="Last Name"
                clearable
              />
            </div>
            <div v-if="basicUserInfo.lastName !== ''">
              <v-text-field
                v-model="formInput.age"
                solo
                :rules="ageRules"
                label="Age"
                clearable
              />
            </div>
          </v-form>
          <AppButton class="continue-btn" btn-style="approve" @click="saveUserInfo">
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

<style scoped>
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
.v-text-field__details {
  display: none;
}
.progressBar {
  margin: 30px 10%;
}
</style>
