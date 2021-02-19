<template>
  <nuxt-link id="card-container" :to="openCard">
    <h1>{{ title }}</h1>
    <div class="image">
      <img :src="imageName" :alt="img">
    </div>
    <div class="completion">
      <p>{{ answered }} / {{ totalQuestions }} completed</p>
    </div>
    <footer />
  </nuxt-link>
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
    totalQuestions: {
      type: Number,
      required: true
    },
    answered: {
      type: Number,
      required: true
    },
    img: {
      type: String,
      required: true
    },
    type: {
      type: String,
      required: true
    },
    tabNr: {
      type: Number,
      required: true
    }
  },
  computed: {
    imageName() {
      return require('~/static/images/' + this.img + '.png')
    },
    openCard() {
      return this.$route.path + '/' + this.id + '-' + this.type
    }
  },
  created() {
    this.$store.dispatch('setActiveTabNr', this.tabNr)
  }
}
</script>

<style scoped lang="scss">
#card-container {
  height: 175px;
  width: 350px;
  padding: 15px;
  margin: 20px;
  border-radius: 3px;
  background: #fffffb;
  position: relative;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.5);
  display: grid;
  grid-template-columns: 100px auto;
  grid-template-rows: 1fr 1fr;
  @include whitish-background-color;
}
#card-container:hover {
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.5);
  transform: translateY(2px);
  -webkit-animation: gradientBG 1.5s ease-in-out forwards;
  animation: gradientBG 1.5s ease-in-out forwards;
  cursor: pointer;
}
#card-container:active {
  box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.5);
  transform: translateY(4px);
}
a {
  text-decoration: none;
}
h1 {
  grid-column: 2 / 3;
  grid-row: 1 / 2;
  word-wrap: break-word;
  text-align: end;
  margin: 5px 5px 10px 0;
  font-size: xx-large;
  color: black;
  line-height: 35px;
}
img {
  grid-column: 1 / 2;
  grid-row: 1 / 2;
  width: 100px;
  height: 100px;
}
.completion {
  grid-column: 2 / 3;
  grid-row: 2 / 3;
  text-align: end;
  position: relative;
  bottom: 15px;
  font-size: x-large;
  @include primary-text-color;
}
footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #3f5567;
  color: white;
  width: 100%;
  position: absolute;
  bottom: 0;
  height: 30px;
  padding: 0 15px;
  /* margin-left: -15px; */
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
}
</style>
