<template>
  <div v-if="isEnrolled && !isCompleted" id="card-container">
    <h1>
      Survey name: {{ title }}
    </h1>
    <div class="description">
      <p class="description-title">
        Description:
      </p>
      <p class="description-content">
        {{ description }}
      </p>
    </div>
    <div class="payment">
      <p class="payment-value">Payment: {{ payment }}$</p>
    </div>
    <div class="btn-wrapper">
      <button class="btn-withdraw" @click="withdraw">Withdraw</button>
      <button class="btn-resume" @click="proceed">{{ btnText }}</button>
    </div>
    <!-- CheatButton to complete a personel survey -->
    <div v-if="type === 'personel'" class="completion-btn" title="cheatBtn for hackers, press to detonate" @click="hackerStyle" />
    <footer>
      <div class="duration">
        <p>Duration</p>
        <p>{{ duration }} minutes</p>
      </div>
      <div class="quota">
        <p>Quota</p>
        <p>{{ enrolled }}/{{ quota }}</p>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  props: {
    id: {
      type: Number,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    duration: {
      type: Number,
      required: true
    },
    quota: {
      type: Number,
      required: true
    },
    enrolled: {
      type: Number,
      required: true
    },
    payment: {
      type: Number,
      required: true
    },
    type: {
      type: String,
      required: true
    },
    isPostponed: {
      type: undefined,
      required: true
    },
    isEnrolled: {
      type: Boolean,
      required: true
    },
    isCompleted: {
      type: Boolean,
      required: true
    }
  },
  data() {
    return {
      btnText: null
    }
  },
  created() {
    this.toogleBtnText()
  },
  methods: {
    withdraw() {
      this.$emit('withdraw', this.id)
    },
    proceed() {
      this.$emit('proceed', this.id, this.type)
    },
    toogleBtnText() {
      if (this.type === 'online') {
        this.btnText = 'Resume'
      } else if (this.type === 'personel') {
        this.btnText = 'Reschedule'
      }
    },
    hackerStyle() {
      this.$store.dispatch('toogleCompletion', this.id)
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '../card-style.scss';
</style>
