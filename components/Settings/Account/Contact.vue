
<template>
  <form @submit.prevent="submit">
<<<<<<< HEAD
    <v-text-field
      v-model="phoneNumber"
      :counter="7"
      :error-messages="errors"
      label="Phone Number"
      required
    />
    <v-text-field
      v-model="email"
      :error-messages="errors"
      label="E-mail"
      required
    />
=======
    <v-container>
      <v-text-field
        v-model="phoneNumber"
        :counter="7"
        label="Phone Number"
        required
      />

      <v-text-field
        v-model="email"
        label="E-mail"
        required
      />
      <v-btn @click="refreshContact">Cancel</v-btn>
      <v-btn @click="updateContact">Save</v-btn>
    </v-container>
>>>>>>> 049e03b3a894b7cb8c63af7328b71173cc711d95
  </form>
</template>

<script>

export default {
  data: () => ({
    phoneNumber: '',
    email: '',
    contact: {}
  }),
  created() {
    this.contact = this.$store.getters.contactSettings
    this.refreshContact()
  },
  methods: {
    refreshContact() {
      this.phoneNumber = this.contact.phoneNumber
      this.email = this.contact.email
    },
    updateContact() {
      this.$store.dispatch('updateContact', [this.phoneNumber, this.email])
    }
  }
}
</script>
