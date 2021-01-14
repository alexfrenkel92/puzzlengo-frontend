<template>
  <v-card>
    <v-system-bar color="blue darken-4" dark>
      <v-spacer />
    </v-system-bar>
    <v-toolbar color="blue accent-4" cards dark flat>
      <v-card-title class="title font-weight-regular">
        Contact Us
      </v-card-title>
      <v-spacer />
    </v-toolbar>
    <v-form ref="form" v-model="form" class="pa-4 pt-6">
      <v-text-field
        v-model="name"
        filled
        required
        color="blue"
        label="Name"
        style="min-height: 96px"
      />
      <v-text-field
        v-model="email"
        :rules="[rules.email]"
        filled
        required
        color="blue"
        label="Email address"
        type="email"
      />
      <v-textarea
        v-model="message"
        auto-grow
        filled
        required
        color="blue"
        label="Message"
        rows="3"
      />
    </v-form>
    <v-divider />
    <v-card-actions>
      <v-btn text @click="$refs.form.reset()"> Clear </v-btn>
      <v-spacer />
      <v-btn
        :disabled="!form"
        class="white--text"
        color="blue accent-4"
        depressed
      >
        Send
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    email: undefined,
    form: false,
    name: undefined,
    message: undefined,
    rules: {
      email: v => !!(v || '').match(/@/) || 'Please enter a valid email'
    }
  })
}
</script>
