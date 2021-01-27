<template>
  <div class="card-container">
    <div class="card-title">{{ brandName }}</div>
    <nuxt-link class="card" :to="openCard">
      <img :src="imgUrl" :alt="brandName + ' logo'">
    </nuxt-link>
  </div>
</template>

<script>
export default {
  props: {
    brandKey: {
      type: String,
      required: true
    },
    brandName: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    disclaimer: {
      type: String,
      required: true
    },
    image: {
      type: Object,
      required: true
    },
    items: {
      type: Array,
      required: true
    },
    terms: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      imgUrl: ''
    }
  },
  computed: {
    openCard() {
      return this.$route.path + '/' + this.brandKey
    }
  },
  created() {
    this.imgUrl = this.image['1200w-326ppi']
  }
}
</script>

<style scoped>
.card-container {
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.card-title {
  text-align: center;
  font-size: 1.2rem;
  padding: 0;
  margin: 10px 0 0 0;
}
img {
  width: 350px;
}
@media screen and (max-width: 320px) {
  img {
    width: 300px;
  }
}
@media screen and (max-width: 280px) {
  img {
    width: 260px;
  }
}
.card {
  height: fit-content;
  width: fit-content;
  margin: 10px 20px 20px 20px;
  border-radius: 5px;
  /* background: #fffffb; */
  position: relative;
  transition: all 0.2s ease-in-out;
}
.card:hover {
  transform: scale(1.05);
  cursor: pointer;
}
.card:active {
  transform: translateY(4px);
}
</style>
