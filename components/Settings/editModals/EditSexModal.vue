<template>
  <div class="text-center">
    <v-row justify="center">
      <v-dialog v-model="showSexModal" persistent min-width="300" max-width="400">
        <v-card>
          <h3 class="headline">
            Select your sex below.
          </h3>
          <form @submit.prevent>
            <div class="form-control" :class="{ invalid: !sex.isValid }">
              <div class="checkbox-container">
                <input
                  id="male"
                  v-model.trim="sex.val"
                  type="radio"
                  value="Male"
                  @blur="clearValidity('sex')"
                >
                <label for="male">Male</label>
              </div>
              <div class="checkbox-container">
                <input
                  id="female"
                  v-model.trim="sex.val"
                  type="radio"
                  value="Female"
                  @blur="clearValidity('sex')"
                >
                <label for="female">Female</label>
              </div>
              <div class="checkbox-container">
                <input
                  id="other"
                  v-model.trim="sex.val"
                  type="radio"
                  value="Other"
                  @blur="clearValidity('sex')"
                >
                <label for="other">Other</label>
              </div>
              <p v-if="!sex.isValid">Please select one category</p>
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
    showSexModal: {
      type: Boolean,
      required: true
    }
  },
  data() {
    return {
      userData: [],
      formIsValid: true,
      sex: {
        val: '',
        isValid: true
      }
    }
  },
  created() {
    this.userData = this.$store.getters.getUserInformation
    // this.sex.val = this.userData.sex
  },
  methods: {
    clearValidity(input) {
      this[input].isValid = true
    },
    validateForm() {
      this.formIsValid = true
      if (this.sex.val.length === 0) {
        this.sex.isValid = false
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
        sex: this.sex.val
      }
      this.$store.dispatch('updateUserSex', userData)
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
.checkbox-container {
  padding: 5px;
}
label {
  font-weight: 500;
  padding-left: 10px;
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
