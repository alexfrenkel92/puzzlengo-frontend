<template>
  <div class="text-center">
    <v-row justify="center">
      <v-dialog v-model="showEmailVerModal" persistent min-width="300" max-width="400">
        <v-card>
          <h3 class="headline">
            Verify your e-mail below.
          </h3>
          <form @submit.prevent>
            <div class="form-control" :class="{ invalid: !email.isValid }">
              <label for="email">E-mail address</label>
              <input
                id="email"
                v-model.trim="email.val"
                type="text"
                @blur="clearValidity('email')"
              >
              <p v-if="!email.isValid">E-mail address must not be empty</p>
            </div>
          </form>
          <v-card-actions>
            <v-spacer />
            <v-btn color="green darken-1" text @click="cancel">
              Cancel
            </v-btn>
            <v-btn color="green darken-1" text @click="sendVerification">
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
    showEmailVerModal: {
      type: Boolean,
      required: true
    }
  },
  data() {
    return {
      userData: [],
      formIsValid: true,
      email: {
        val: '',
        isValid: true
      }
    }
  },
  methods: {
    clearValidity(input) {
      this[input].isValid = true
    },
    validateForm() {
      this.formIsValid = true
      if (this.email.val === '') {
        this.email.isValid = false
        this.formIsValid = false
      }
    },
    sendVerification() {
      this.validateForm()
      if (!this.formIsValid) {
        // eslint-disable-next-line no-useless-return
        return
      }
      const email = {
        email: this.email.val
      }
      // console.log(email)
      this.$store.dispatch('verifyEmail', email)
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
h4 {
  padding: 0 1rem .5rem 1rem;
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
