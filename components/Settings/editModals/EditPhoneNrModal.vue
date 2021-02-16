<template>
  <div class="text-center">
    <v-row justify="center">
      <v-dialog v-model="showPhoneNrModal" persistent min-width="300" max-width="400">
        <v-card>
          <h3 class="headline">
            Update your phone number below
          </h3>
          <form @submit.prevent>
            <div class="form-control" :class="{ invalid: !phoneNr.isValid }">
              <label for="phoneNr">Phone number</label>
              <input
                id="phoneNr"
                v-model.trim="phoneNr.val"
                type="text"
                @blur="clearValidity('phoneNr')"
              >
              <p v-if="!phoneNr.isValid">Phone number must not be empty</p>
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
    showPhoneNrModal: {
      type: Boolean,
      required: true
    }
  },
  data() {
    return {
      userData: [],
      formIsValid: true,
      phoneNr: {
        val: '',
        isValid: true
      }
    }
  },
  created() {
    this.userData = this.$store.getters.getUserInformation
    this.phoneNr.val = this.userData.phoneNr
  },
  methods: {
    clearValidity(input) {
      this[input].isValid = true
    },
    validateForm() {
      this.formIsValid = true
      if (this.phoneNr.val === '') {
        this.phoneNr.isValid = false
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
        phoneNr: this.phoneNr.val
      }
      this.$store.dispatch('updateUserPhoneNumber', userData)
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
