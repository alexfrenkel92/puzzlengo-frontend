<template>
  <div class="description-wrapper">
    <DescriptionCard
      v-for="desc in description"
      :id="desc.id"
      :key="desc.id"
      :title="desc.title"
      :description="desc.description"
      :img="desc.img"
    />
  </div>
</template>

<script>

export default {
  data() {
    return {
      description: [
        {
          id: 1,
          title: 'What is Lorem Ipsum?',
          // eslint-disable-next-line quotes
          description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s when an unknown printer created it.`,
          img: 'improve'
        },
        {
          id: 2,
          title: 'Why do we use it?',
          // eslint-disable-next-line quotes
          description: `It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a normal distribution of letters.`,
          img: 'paid'
        },
        {
          id: 3,
          title: 'Where does it come from?',
          // eslint-disable-next-line quotes
          description: `Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.`,
          img: 'opinion'
        }
      ]
    }
  }
}
</script>

<style scoped>
.description-wrapper {
  padding-top: 30px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  width: 100%;
}
@media screen and (max-width: 380px) {
  .description-wrapper {
    padding-top: 0;
  }
}
</style>
