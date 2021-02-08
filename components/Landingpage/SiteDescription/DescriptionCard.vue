<template>
  <div id="card-container">
    <h1>{{ title }}</h1>
    <div class="content-wrapper">
      <div class="image">
        <img :src="imageName" :alt="img">
      </div>
      <div class="description">
        <p>{{ description }}</p>
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
    description: {
      type: String,
      required: true
    },
    img: {
      type: String,
      required: true
    }
  },
  computed: {
    imageName() {
      return require('~/static/images/siteDescription/' + this.img + '.png')
    }
  }
}
</script>

<style scoped lang='scss'>
#card-container {
  height: 290px;
  width: 300px;
  padding: 15px;
  margin: 20px;
  border-radius: 5px;
  background: #fcf5ea;
  // background-color: #f8f4ed;
  position: relative;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.5);
}
h1 {
  text-align: start;
  margin: 0 0 10px 0;
  font-size: 1.2rem;
  @include primary-text-color;
}
.image {
  float: left;
  padding: 10px 10px 0 10px;
}
img {
  width: 100px;
  height: 100px;
}
.description {
  text-align: justify;
  font-size: 1rem;
  @include primary-text-color;
  padding: 10px 0 0 10px;
}
footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  @include dark-green-color;
  width: 100%;
  position: absolute;
  bottom: 0;
  height: 30px;
  padding: 0 15px;
  margin-left: -15px;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
}
@media screen and (max-width: 370px) {
  #card-container {
    height: fit-content;
  }
  h1 {
    margin: 0;
    font-size: 1rem;
  }
  img {
    width: 80px;
    height: 80px;
  }
  .description {
    font-size: 0.9rem;
  }
}
</style>
