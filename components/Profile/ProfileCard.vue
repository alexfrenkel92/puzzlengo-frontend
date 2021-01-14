<template>
  <div id="card-container">
    <h1>{{ title }}</h1>
    <div class="content-wrapper">
      <div class="image">
        <img :src="imageName" :alt="img">
      </div>
      <div class="completion">
        <p>{{ answered }} / {{ totalQuestions }} completed</p>
      </div>
    </div>
    <footer />
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
    }
  },
  computed: {
    imageName() {
      return require('~/static/images/' + this.img + '.png')
    }
  }
}
</script>

<style scoped>
#card-container {
  height: 175px;
  width: 350px;
  padding: 15px;
  margin: 20px;
  border-radius: 5px;
  background: #fffffb;
  position: relative;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.5);
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
h1 {
  text-align: end;
  margin: 0 5px 10px 0;
  font-size: xx-large;
  color: black;
}
.content-wrapper {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.image {
  /* border: 2px solid red; */
  position: relative;
  bottom: 35px;
}
img {
  width: 100px;
  height: 100px;
}
.completion {
  font-size: x-large;
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
  margin-left: -15px;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
}
</style>
