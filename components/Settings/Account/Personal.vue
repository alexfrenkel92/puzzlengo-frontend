<template>
  <v-form>
    <v-container>
      <v-row>
        <v-col
          cols="12"
          sm="6"
        >
          <v-text-field
            v-model="firstName"
            label="First Name"
            filled
          />
        </v-col>

        <v-col
          cols="12"
          sm="6"
        >
          <v-text-field
            v-model="lastName"
            label="Last Name"
            filled
          />
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-menu
            ref="menu"
            v-model="menu"
            :close-on-content-click="false"
            :return-value.sync="birthDate"
            transition="scale-transition"
            offset-y
            min-width="auto"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-text-field
                v-model="birthDate"
                label="Date of birth"
                prepend-icon="mdi-calendar"
                readonly
                v-bind="attrs"
                v-on="on"
              />
            </template>
            <v-date-picker
              v-model="birthDate"
              no-title
              scrollable
            >
              <v-spacer />
              <v-btn
                text
                color="primary"
                @click="menu = false"
              >
                Cancel
              </v-btn>
              <v-btn
                text
                color="primary"
                @click="$refs.menu.save(birthDate)"
              >
                OK
              </v-btn>
            </v-date-picker>
          </v-menu>
        </v-col>
      </v-row>
      <v-btn @click="refreshPersonal">Cancel</v-btn>
      <v-btn @click="updatePersonal">Save</v-btn>
    </v-container>
  </v-form>
</template>

<script>
export default {
  data: () => ({
    menu: false,
    personal: {},
    firstName: '',
    lastName: '',
    birthDate: new Date().toISOString().substr(0, 10)
  }),
  created() {
    this.personal = this.$store.getters.personalSettings
    this.refreshPersonal()
  },
  methods: {
    refreshPersonal() {
      this.firstName = this.personal.firstName
      this.lastName = this.personal.lastName
      this.birthDate = this.personal.birthDate
    },
    updatePersonal() {
      this.$store.dispatch('updatePersonal', [this.firstName, this.lastName, this.birthDate])
    }
  }
}
</script>
