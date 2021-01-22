<template>
  <div>
    <div class="balanceContainer">
      <MyBalance :icon="'mdi-currency-usd-circle-outline'" :title="'My balance'" :total="total" :details="details" @getMore="getMore" />
    </div>
    <div class="divider-horizontal" />
    <div class="coupons">
      <Cards
        v-for="cat in balanceCards"
        :id="cat.id"
        :key="cat.id"
        :title="cat.title"
        :img="cat.img"
      />
    </div>
  </div>
</template>

<script>
import Cards from '@/components/Balance/Cards'
import MyBalance from '@/components/Balance/MyBalance copy'

export default {
  components: {
    Cards,
    MyBalance
  },
  data() {
    return {
      balanceCards: [
        {
          id: 1,
          title: 'Amazon',
          img: 'basics'
        },
        {
          id: 2,
          title: 'Amazon',
          img: 'basics'
        },
        {
          id: 3,
          title: 'Amazon',
          img: 'basics'
        },
        {
          id: 4,
          title: 'Amazon',
          img: 'basics'
        },
        {
          id: 5,
          title: 'Amazon',
          img: 'basics'
        },
        {
          id: 6,
          title: 'Amazon',
          img: 'basics'
        },
        {
          id: 7,
          title: 'Amazon',
          img: 'basics'
        },
        {
          id: 8,
          title: 'Amazon',
          img: 'basics'
        }
      ],
      details: [{ value: 10, date: '01.03.', description: 'Survey 1' }, { value: 340, date: '01.23.', description: 'Survey 3' }, { value: -150, date: '02.03.', description: 'Amazon' }, { value: 60, date: '02.20.', description: 'Survey 12' }, { value: -20, date: '03.30.', description: 'Nike' }],
      total: 0
    }
  },
  created() {
    this.details.forEach((element) => {
      this.total += element.value
    })
  },
  methods: {
    getMore() {
      this.$router.push('/dashboard')
    }
  }
}
</script>

<style>
  .coupons{
    margin-top: 20px;
    display: flex;
    flex-wrap: wrap;
    margin-top: 50px;
  }
  .balanceContainer{
    margin-bottom: 50px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
  }
  .divider-horizontal {
    position: relative;
    height: 1px;
    background-image: linear-gradient(
      to right,
      transparent,
      rgb(51, 50, 48),
      transparent
    );
}
</style>
