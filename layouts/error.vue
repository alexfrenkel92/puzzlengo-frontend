<template>
  <!-- <div class="error-container">
    <h1 v-if="error.statusCode === 404">
      {{ pageNotFound }}
    </h1>
    <h1 v-else>
      {{ otherError }}
    </h1>
  </div> -->

  <div id="notfound">
    <div class="notfound">
      <div class="notfound-404">
        <h1>4<span>0</span>4</h1>
      </div>
      <div class="texts">
        <p>There's nothing here</p>
        <p>Find out what you are looking for with our app</p>
      </div>
      <div class="download-buttons">
        <nuxt-link to="">
          <img :src="iosStore" alt="IOS Store">
        </nuxt-link>
        <nuxt-link to="">
          <img :src="androidStore" alt="Android Store">
        </nuxt-link>
      </div>
      <!-- <AppButton
        type="button"
        btn-style="approve"
        style="height: 50px; width: fit-content"
        @click="$router.push('/dashboard')"
      >
        Return to dashboard
      </AppButton> -->
    </div>
  </div>
</template>

<script>
import iosStore from '~/static/images/iosStore.png'
import androidStore from '~/static/images/androidStore.png'

export default {
  data() {
    return {
      iosStore,
      androidStore
    }
  }
}
</script>

<style scoped lang="scss">
#notfound {
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 10%;
  background-color: red;
  // height: calc(100vh - 250px);
}

.notfound {
  height: 100%;
  // max-width: 460px;
  width: fit-content;
  text-align: center;
  line-height: 1.4;
}

.notfound .notfound-404 {
  height: 158px;
  line-height: 153px;
}

.notfound .notfound-404 h1 {
  font-family: 'Josefin Sans', sans-serif;
  color: #3a3939;
  font-size: 220px;
  letter-spacing: 10px;
  margin: 0px;
  font-weight: 700;
  text-shadow: 2px 2px 0px #c9c9c9, -2px -2px 0px #c9c9c9;
}

.notfound .notfound-404 h1>span {
  text-shadow: 2px 2px 0px #7abe8f, -2px -2px 0px #00633B, 0px 0px 8px #ffab00;
}

.texts {
  font-family: 'Josefin Sans', sans-serif;
  color: #777474;
  font-size: 16px;
  font-weight: 400;
  margin: 15px 0 5px 0;
}
.texts p {
  margin: 0;
  padding-bottom: 5px;
}

@media only screen and (max-width: 480px) {
  .notfound .notfound-404 {
    height: 122px;
    line-height: 122px;
  }

  .notfound .notfound-404 h1 {
      font-size: 122px;
  }
}

.download-buttons {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  margin-bottom: 15px;
}

img {
  width: 250px;
}

</style>
