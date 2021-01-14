<template>
  <div>
    <h1 id="benefits" class="text-center display-1 font-weight-thin mb-4 mt-4">Benefits</h1>
    <v-row
      no-gutters
      align="center"
      justify="center"
    >
      <v-col
        v-for="benefit in benefits"
        :key="benefit.id"
      >
        <ExpandCard
          :image="benefit.image"
          :title="benefit.title"
          :subtitle="benefit.subtitle"
          :text="benefit.text"
          :show="benefit.show"
        />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import ExpandCard from './ExpandCard'
export default {
  components: {
    ExpandCard
  },
  data() {
    return {
      benefits: [
        {
          id: 1,
          image: 'https://cdn.vuetifyjs.com/images/cards/sunshine.jpg',
          title: 'Benefit1',
          subtitle: 'Subtitle1',
          text: "I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape.",
          show: false
        },
        {
          id: 2,
          image: 'https://cdn.vuetifyjs.com/images/cards/cooking.png',
          title: 'Benefit2',
          subtitle: 'Subtitle2',
          text: "I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape.",
          show: false
        },
        {
          id: 3,
          image: 'https://cdn.pixabay.com/photo/2020/07/12/07/47/bee-5396362_1280.jpg',
          title: 'Benefit3',
          subtitle: 'Subtitle4',
          text: "I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape.",
          show: false
        }
      ]
    }
  }
}
</script>
