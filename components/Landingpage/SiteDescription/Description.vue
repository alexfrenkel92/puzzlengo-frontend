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
          title: 'Join us on our mission to improve human knowledge.',
          description: 'Researchers want to understand how people feel, think and behave. On Prolific, you get paid cash for taking part in engaging research (no silly points or prize draws). No PhDs required!',
          img: 'improve'
        },
        {
          id: 2,
          title: 'Get paid for your participation',
          description: 'Got some time to kill? Close the YouTube cat videos. dozens of market research companies recruiting new members from around the world to fill out surveys for money.',
          img: 'paid'
        },
        {
          id: 3,
          title: 'Your opinion matters',
          description: 'Complete surveys and give yout honest feedback to market research companies. Your opinion helps companies and brands create better, new products and services.',
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
</style>
