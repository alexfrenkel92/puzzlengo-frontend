<template>
  <div>
    <h1 id="howItWorks" class="text-center display-1 font-weight-thin mb-4 mt-4">How It Works</h1>
    <v-timeline align-top :dense="$vuetify.breakpoint.smAndDown">
      <v-timeline-item
        v-for="(item, i) in items"
        :key="i"
        :icon="item.icon"
        fill-dot
      >
        <v-card>
          <v-card-title class="title">
            {{ item.title }}
          </v-card-title>
          <v-card-text class="text--primary">
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
        title: 'It is good',
        text:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vestibulum a ligula a lacinia. Aenean vitae nulla scelerisque, eleifend urna non, porttitor orci. '
      },
      {
        icon: 'mdi-book-variant',
        title: 'It is even better',
        text:
          'Aliquam erat volutpat. Cras a velit a urna rutrum auctor. Aliquam vitae sollicitudin nulla. Aliquam erat volutpat. Duis nec purus a est pharetra lacinia eget quis mauris.'
      },
      {
        icon: 'mdi-airballoon',
        title: 'It is almost the best',
        text:
          'Ut fermentum leo sit amet sapien pharetra, non facilisis mauris lacinia. Suspendisse in odio in urna cursus dictum a id ex.'
      },
      {
        icon: 'mdi-buffer',
        title: 'Ok, it is the best',
        text:
          'Pellentesque feugiat bibendum luctus. Etiam sollicitudin leo leo, ac fringilla felis ultricies sollicitudin. Aliquam blandit ex quis dui tincidunt sagittis. Praesent fermentum lobortis consectetur. Proin volutpat nec nibh vel cursus. Sed iaculis rutrum aliquam. Vestibulum rhoncus velit id maximus efficitur.'
      }
    ]
  })
}
</script>
