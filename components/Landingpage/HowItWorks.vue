<template>
  <div class="wrapper">
    <h1
      id="howItWorks"
      class="text-center display-1"
    >
      How It Works
    </h1>
    <v-timeline align-top :dense="$vuetify.breakpoint.smAndDown">
      <v-timeline-item
        v-for="(item, i) in items"
        :key="i"
        :icon="item.icon"
        fill-dot
        color="#00633B"
      >
        <v-card color="#faf9f8">
          <v-card-title>
            {{ item.title }}
          </v-card-title>
          <v-card-text>
            <p>{{ item.text }}</p>
          </v-card-text>
        </v-card>
      </v-timeline-item>
    </v-timeline>
  </div>
</template>

<script>
export default {
  data: () => ({
    items: [
      {
        icon: 'mdi-star',
        title: 'Register',
        text:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vestibulum a ligula a lacinia. Aenean vitae nulla scelerisque, eleifend urna non, porttitor orci. '
      },
      {
        icon: 'mdi-book-variant',
        title: 'Complete your profile',
        text:
          'Aliquam erat volutpat. Cras a velit a urna rutrum auctor. Aliquam vitae sollicitudin nulla. Aliquam erat volutpat. Duis nec purus a est pharetra lacinia eget quis mauris.'
      },
      {
        icon: 'mdi-airballoon',
        title: 'Participate in online or personal surveys',
        text:
          'Ut fermentum leo sit amet sapien pharetra, non facilisis mauris lacinia. Suspendisse in odio in urna cursus dictum a id ex.'
      },
      {
        icon: 'mdi-buffer',
        title: 'Get paid',
        text:
          'Pellentesque feugiat bibendum luctus. Etiam sollicitudin leo leo, ac fringilla felis ultricies sollicitudin. Aliquam blandit ex quis dui tincidunt sagittis. Praesent fermentum lobortis consectetur. Proin volutpat nec nibh vel cursus. Sed iaculis rutrum aliquam. Vestibulum rhoncus velit id maximus efficitur.'
      }
    ]
  })
}
</script>

<style scoped lang="scss">
.wrapper {
  padding: 20px 80px 0 80px;
  max-width: 1100px;
  margin: auto;
}
@media screen and (max-width: 800px) {
  .wrapper {
    padding: 20px 15px 0 0;
  }
}
@media screen and (max-width: 350px) {
  .wrapper {
    padding: 20px 15px 0 0;
  }
}
#howItWorks {
  @include primary-text-color;
}
.v-card__title {
  @include primary-text-color;
  font-weight: 600;
}
.v-card__text {
  @include primary-text-color;
  font-weight: 500;
}
</style>
