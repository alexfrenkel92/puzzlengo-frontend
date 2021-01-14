<template>
  <v-container>
    <form @submit.prevent="submit">
      <v-text-field v-model="name" label="Name" required />
      <v-text-field
        v-model="phoneNumber"
        label="Phone Number"
        required
      />
      <v-text-field v-model="email" label="E-mail" required />
      <v-select
        v-model="select"
        :items="items"
        label="Select"
        data-vv-name="select"
        required
      />
      <v-checkbox
        v-model="checkbox"
        label="Option"
        type="checkbox"
        required
      />
      <v-btn class="mr-4" type="submit"> submit </v-btn>
      <v-btn @click="clear"> clear </v-btn>
    </form>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    name: '',
    phoneNumber: '',
    email: '',
    select: null,
    items: ['Item 1', 'Item 2', 'Item 3', 'Item 4'],
    checkbox: null
  }),
  methods: {
    submit() {
      this.name = ''
      this.phoneNumber = ''
      this.email = ''
      this.select = null
      this.checkbox = null
    },
    clear() {
      this.name = ''
      this.phoneNumber = ''
      this.email = ''
      this.select = null
      this.checkbox = null
    }
  }
}
</script>
