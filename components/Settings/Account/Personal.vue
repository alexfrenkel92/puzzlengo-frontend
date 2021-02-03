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
          <v-dialog
            ref="dialog"
            v-model="menu"
            :return-value.sync="birthDate"
            persistent
            width="300px"
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
              <v-btn text color="primary" @click="menu = false">
                Cancel
              </v-btn>
              <v-btn
                text
                color="primary"
                @click="$refs.dialog.save(birthDate)"
              >
                OK
              </v-btn>
            </v-date-picker>
          </v-dialog>
        </v-col>
      </v-row>
      <v-btn text @click="refreshPersonal"><v-icon>mdi-alpha-x-circle</v-icon> Cancel</v-btn>
      <v-btn text @click="updatePersonal"><v-icon>mdi-check-circle</v-icon> Save</v-btn>
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

<style scoped>
  .v-dialog{
    margin: 0 !important;
  }
</style>
