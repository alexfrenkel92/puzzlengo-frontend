<template>
  <div class="profile-date-container">
    <h3>Personal information</h3>
    <div class="profile-data-forms">
      <form @submit.prevent="saveUserData">
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
        <div class="form-control" :class="{ invalid: !email.isValid }">
          <label for="email">E-mail</label>
          <input
            id="email"
            v-model.trim="email.val"
            type="text"
            @blur="clearValidity('email')"
          >
          <p v-if="!email.isValid">E-mail must not be empty</p>
        </div>
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
        <div class="form-control" :class="{ invalid: !birthdate.isValid }">
          <label for="birthdate">Date of birth</label>
          <input
            id="birthdate"
            v-model.trim="birthdate.val"
            type="text"
            @blur="clearValidity('birthdate')"
          >
          <p v-if="!birthdate.isValid">Date of birth must not be empty</p>
        </div>
        <AppButton class="save-user-data-button" btn-style="approve">Save data</AppButton></form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      firstName: {
        val: '',
        isValid: true
      },
      lastName: {
        val: '',
        isValid: true
      },
      email: {
        val: '',
        isValid: true
      },
      phoneNr: {
        val: '',
        isValid: true
      },
      birthdate: {
        val: '',
        isValid: true
      },
      formIsValid: true
    }
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
      if (this.email.val === '') {
        this.email.isValid = false
        this.formIsValid = false
      }
      if (this.phoneNr.val === '') {
        this.phoneNr.isValid = false
        this.formIsValid = false
      }
      if (this.birthdate.val === '') {
        this.birthdate.isValid = false
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
        lastName: this.lastName.val,
        email: this.email.val,
        phoneNr: this.phoneNr.val,
        birthdate: this.birthdate.val
      }
      console.log(userData)
    }
  }
}
</script>

<style scoped lang="scss">
.profile-date-container {
  width: 350px;
}
.profile-data-forms {
  border: 1px solid red;
  padding: .5rem 1rem;
}
label {
  font-weight: 550;
}
h3 {
  margin-bottom: .5rem;
}
.form-control {
  margin-bottom: .5rem !important;
}
input {
  display: block;
  width: 100%;
  border: 1px solid #ccc;
  font: inherit;
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
