<template>
  <div class="text-center">
    <v-row justify="center">
      <v-dialog v-model="showUserNameModal" persistent min-width="300" max-width="400">
        <v-card>
          <h3 class="headline">
            Update your name below
          </h3>
          <form @submit.prevent>
            <div class="form-control" :class="{ invalid: !firstName.isValid }">
              <label for="firstName">Firstname</label>
              <input
                id="firstName"
                v-model.trim="firstName.val"
                type="text"
                @blur="clearValidity('firstName')"
              >
              <p v-if="!firstName.isValid">Firstname must not be empty</p>
            </div>
            <div class="form-control" :class="{ invalid: !lastName.isValid }">
              <label for="lastName">Lastname</label>
              <input
                id="lastName"
                v-model.trim="lastName.val"
                type="text"
                @blur="clearValidity('lastName')"
              >
              <p v-if="!lastName.isValid">Lastname must not be empty</p>
            </div>
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
    showUserNameModal: {
      type: Boolean,
      required: true
    }
  },
  data() {
    return {
      userData: [],
      formIsValid: true,
      firstName: {
        val: '',
        isValid: true
      },
      lastName: {
        val: '',
        isValid: true
      }
    }
  },
  created() {
    this.userData = this.$store.getters.getUserInformation
    this.firstName.val = this.userData.firstName
    this.lastName.val = this.userData.lastName
  },
  methods: {
    clearValidity(input) {
      this[input].isValid = true
    },
    validateForm() {
      this.formIsValid = true
      if (this.firstName.val === '') {
        this.firstName.isValid = false
        this.formIsValid = false
      }
      if (this.lastName.val === '') {
        this.lastName.isValid = false
        this.formIsValid = false
      }
    },
    saveUserData() {
      this.validateForm()
      if (!this.formIsValid) {
        // eslint-disable-next-line no-useless-return
        return
      }
      const userData = {
        firstName: this.firstName.val,
        lastName: this.lastName.val
      }
      this.$store.dispatch('updateUserName', userData)
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
