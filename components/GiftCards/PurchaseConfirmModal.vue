<template>
  <v-dialog
    v-model="showModal"
    fullscreen
    persistent
    hide-overlay
    transition="dialog-bottom-transition"
  >
    <v-card color="rgba(224, 242, 241, 0.562)">
      <v-toolbar dark flat color="transparent">
        <v-btn icon dark @click="closeModal">
          <v-icon color="black">mdi-close</v-icon>
        </v-btn>
      </v-toolbar>
      <div class="main-wrapper">
        <div class="form-container">
          <h1>Thank you for your purchase</h1>
          <div class="social-container">
            <nuxt-link to=""><v-icon large>mdi-facebook</v-icon></nuxt-link>
            <nuxt-link to=""><v-icon large>mdi-google</v-icon></nuxt-link>
            <nuxt-link to=""><v-icon large>mdi-linkedin</v-icon></nuxt-link>
          </div>
          <span>or use your account</span>
          <AppButton class="continue-btn" btn-style="approve" @click="closeModal">
            Close
          </AppButton>
        </div>
      </div>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: {
    showModal: {
      type: Boolean,
      required: true
    }
  },
  data() {
    return {
    }
  },
  methods: {
    closeModal() {
      this.$emit('closeModal')
    }
  }
}
</script>

<style scoped>
h1 {
  font-weight: bold;
  margin: 0;
}
span {
  font-size: 12px;
  margin-bottom: 10px;
}
a {
  color: #333;
  font-size: 14px;
  text-decoration: none;
  margin: 15px 0;
}
form {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  padding: 10px 0 0 0;
  margin: 0;
  width: 100%;
  background-color: rgba(224, 242, 241, 0.562);
}
.v-input {
  border: none;
  padding: 0 10px;
  width: 85%;
}
.main-wrapper {
  margin: auto;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  position: relative;
  overflow: hidden;
  width: 350px;
  min-height: 480px;
}
.form-container {
  position: absolute;
  top: 0;
  height: 100%;
  width: 100%;
  transition: all 0.6s ease-in-out;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.social-container {
  margin: 20px 0 10px 0;
}
.social-container a {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  margin: 0 5px;
  height: 40px;
  width: 40px;
}
.form-wrapper {
  margin-top: 10%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.continue-btn {
  font-size: 2rem !important;
  margin: 0 10px;
  padding: 0 5px 5px 5px;
  width: 160px !important;
  height: 48px;
}
.password-reset {
  margin: 30px 0 0 0;
}
</style>
