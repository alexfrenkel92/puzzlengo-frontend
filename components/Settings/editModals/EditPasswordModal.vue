<template>
  <div class="text-center">
    <v-row justify="center">
      <v-dialog v-model="showPasswordModal" persistent min-width="300" max-width="400">
        <v-card>
          <h3 class="headline">
            Update your password below.
          </h3>
          <form @submit.prevent>
            <div class="form-control" :class="{ invalid: !password0.isValid || !password1.isValid || !password2.isValid }">
              <label for="password">Current password</label>
              <input
                id="password"
                v-model.trim="password0.val"
                type="text"
                @blur="clearValidity('password0')"
              >
              <p v-if="!password0.isValid">{{ currentPasswordErrorMsg }}</p>
              <div v-else-if="!currentPasswordIsCorrect">
                <p>{{ currentPasswordErrorMsg }}</p>
                <p>Attempt: {{ attempt }}/3</p>
              </div>
              <label for="password">New password</label>
              <input
                id="password"
                v-model.trim="password1.val"
                type="text"
                @blur="clearValidity('password1')"
              >
              <p v-if="!password1.isValid">Set a new password to save</p>
              <label for="password">Retype new password</label>
              <input
                id="password"
                v-model.trim="password2.val"
                type="text"
                @blur="clearValidity('password2')"
              >
              <p v-if="!password2.isValid">Retype new password</p>
            </div>
            <p v-if="!passwordsAreMatching">Passwords do not match</p>
          </form>
          <v-card-actions>
            <v-spacer />
            <v-btn color="green darken-1" text @click="cancel">
              Cancel
            </v-btn>
            <v-btn color="green darken-1" text @click="saveUserData">
              Save
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-row>
  </div>
</template>

<script>
export default {
  props: {
    showPasswordModal: {
      type: Boolean,
      required: true
    }
  },
  data() {
    return {
      userData: [],
      formIsValid: true,
      password0: {
        val: '',
        isValid: true
      },
      password1: {
        val: '',
        isValid: true
      },
      password2: {
        val: '',
        isValid: true
      },
      currentPassword: '',
      currentPasswordIsCorrect: true,
      currentPasswordErrorMsg: '',
      disabled: false,
      attempt: '',
      passwordsAreMatching: true
    }
  },
  created() {
    this.userData = this.$store.getters.getUserInformation
    this.currentPassword = this.userData.password
  },
  methods: {
    clearValidity(input) {
      this[input].isValid = true
      this.passwordsAreMatching = true
      this.currentPasswordIsCorrect = true
    },
    validateForm() {
      this.formIsValid = true
      if (this.password0.val === '') {
        this.currentPasswordErrorMsg = 'Password provided is incorrect'
        this.password0.isValid = false
        this.formIsValid = false
      }
      if (this.password0.val !== '' && this.password0.val !== this.currentPassword) {
        this.currentPasswordIsCorrect = false
        this.attempt++
        if (this.attempt > 3) {
          this.attempt = 3
          this.currentPasswordErrorMsg = 'Sorry, you are banned forever'
          this.$emit('cancel')
        }
      }
      if (this.password1.val === '') {
        this.password1.isValid = false
        this.formIsValid = false
      }
      if (this.password2.val === '') {
        this.password2.isValid = false
        this.formIsValid = false
      }
      if (this.password1.val !== this.password2.val) {
        this.passwordsAreMatching = false
      }
    },
    saveUserData() {
      this.validateForm()
      if (!this.formIsValid || !this.passwordsAreMatching || !this.currentPasswordIsCorrect) {
        // eslint-disable-next-line no-useless-return
        return
      }
      const userData = {
        password: this.password1.val
      }
      this.$store.dispatch('updatePassword', userData)
      this.$emit('save')
    },
    cancel() {
      this.$emit('cancel')
    }
  }
}
</script>

<style lang="scss" scoped>
.v-card {
  border-radius: 3px !important;
  // width: fit-content;
  @include whitish-background-color;
}
h3 {
  padding: .5rem 1rem;
  font-weight: 650;
}
form {
  padding: 0 1rem;
}
.form-control {
  margin-bottom: .5rem !important;
}
label {
  font-weight: 500;
}
input {
  display: block;
  width: 100%;
  border: 1px solid #ccc;
  padding-left: 5px;
  font: inherit;
  border-radius: 3px;
}
input:focus {
  background-color: #fcf5ea;
  outline: none;
  border-color: #00633B;
}
.invalid label {
  color: red;
}
.invalid input {
  border: 1px solid;
  border-color: red;
}
p {
  color: red;
}
</style>
