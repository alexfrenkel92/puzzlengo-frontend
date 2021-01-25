<template>
  <v-app dark>
    <div class="main-wrap">
      <main-header />
      <v-main>
        <div v-if="progressBar !== 100 && showCompletionWarning == true" class="progress-bar">
          <v-progress-linear :value="progressBar" height="15" color="#7abe8f">
            <strong>{{ progressBar }}%</strong>
          </v-progress-linear>
          <v-btn icon dark @click="closeCompletionWarning">
            <v-icon color="black">mdi-close</v-icon>
          </v-btn>
          <div class="progress-text">
            <span>Please complete your profile in the
              <nuxt-link to="/profile">My Profiling</nuxt-link>
              page to get the most surveys
            </span>
          </div>
        </div>
        <v-container>
          <nuxt />
        </v-container>
      </v-main>
      <v-footer padless app>
        <v-col class="text-center" cols="12">
          <span>&copy; {{ new Date().getFullYear() }}</span>
        </v-col>
      </v-footer>
    </div>
  </v-app>
</template>

<script>
import Header from '~/components/Header'

export default {
  components: {
    'main-header': Header
  },
  data() {
    return {
      showCompletionWarning: true
    }
  },
  computed: {
    isMobile() {
      const smDown = this.$store.state.breakpoints.smDown
      return smDown.includes(this.$mq)
    },
    margintop() {
      if (this.isMobile) {
        return '70px'
      } else {
        return '80px'
      }
    },
    progressBar() {
      return this.$store.getters.getProfileCompletion
    }
  },
  methods: {
    closeCompletionWarning() {
      this.showCompletionWarning = false
    }
  }
}
</script>
<style scoped>
.text-center {
    padding: 4px;
}
.v-main {
    padding-top: 100px;
    /* background-color: red !important; */
}
.container {
    margin: auto;
    padding: 30px 0 0 0;
}
.progress-bar {
  margin-top: 5px;
}
.v-progress-linear {
  height: 10px;
}
.progress-text {
  background-color:#FF4081;
  text-align: center;
  font-style: italic;
}
.progress-text a {
  margin: 0 5px;
  font-style: normal;
  font-weight: 700;
}
.v-btn {
  position: absolute;
  right: 0;
  height: 20px;
  width: 20px;
  margin-top: 2px;
}
</style>
