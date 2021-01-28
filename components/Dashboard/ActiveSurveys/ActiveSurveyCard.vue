<template>
  <div v-if="!isEnrolled" id="card-container">
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
      <button class="btn-enroll" @click="enroll">Enroll</button>
    </div>
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
    isEnrolled: {
      type: Boolean,
      required: true
    }
  },
  methods: {
    enroll() {
      this.$emit('enroll', this.id, this.type)
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '../card-style.scss';
</style>
