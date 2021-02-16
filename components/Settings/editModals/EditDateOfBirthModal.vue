<template>
  <div class="text-center">
    <v-row justify="center">
      <v-dialog
        v-model="showDateOfBirthModal"
        persistent
        min-width="300"
        max-width="400"
      >
        <v-card>
          <h3 class="headline">Update your date of birth below</h3>
          <v-menu
            ref="menu"
            v-model="menu"
            :close-on-content-click="false"
            transition="scale-transition"
            offset-y
            min-width="auto"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-text-field
                v-model="date"
                label="Birthday date"
                prepend-icon="mdi-calendar"
                readonly
                v-bind="attrs"
                v-on="on"
              />
            </template>
            <v-date-picker
              ref="picker"
              v-model="date"
              color="#7abe8f"
              header-color="#7abe8f"
              :max="new Date().toISOString().substr(0, 10)"
              min="1525-01-17"
              @change="saveDate"
            />
          </v-menu>
          <v-card-actions>
            <v-spacer />
            <v-btn color="green darken-1" text @click="cancel">Cancel</v-btn>
            <v-btn color="green darken-1" text @click="saveUserData">Save</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-row>
  </div>
</template>

<script>
export default {
  props: {
    showDateOfBirthModal: {
      type: Boolean,
      required: true
    }
  },
  data() {
    return {
      userData: [],
      date: null,
      menu: false
    }
  },
  watch: {
    menu(val) {
      val && setTimeout(() => (this.$refs.picker.activePicker = 'YEAR'))
    }
  },
  created() {
    this.userData = this.$store.getters.getUserInformation
    this.date = this.userData.birthDate
  },
  methods: {
    saveDate(date) {
      this.$refs.menu.save(date)
    },
    saveUserData() {
      this.$store.dispatch('updateDateOfBirth', this.date)
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
  padding: 0.5rem 1rem;
  font-weight: 650;
}
form {
  padding: 0 1rem;
}
.form-control {
  margin-bottom: 0.5rem !important;
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
  border-color: #00633b;
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
.v-input {
  width: 250px !important;
  margin: auto;
  padding-top: 30px;
}
</style>
