
<template>
  <form @submit.prevent="submit">
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
  </form>
</template>

<script>

export default {
  data: () => ({
    phoneNumber: '',
    email: ''
  })
}
</script>
