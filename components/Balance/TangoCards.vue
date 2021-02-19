<template>
  <div>
    <p class="title" v-html="$t('balance.title')" />
    <div class="info-container">
      <div class="e-gift-card-container">
        <v-expansion-panels>
          <v-expansion-panel>
            <v-expansion-panel-header>
              {{ $t('balance.eGift.title') }}
              <template v-slot:actions>
                <v-icon> mdi-information </v-icon>
              </template>
            </v-expansion-panel-header>
            <v-expansion-panel-content>
              <ul v-html="$t('balance.eGift.description')" />
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
        <app-button
          type="button"
          btn-style="approve"
          style="height: 50px; width: 160px"
          @click="navigate(0)"
        >
          {{ $t('balance.eGift.goto') }}
        </app-button>
      </div>
      <div class="charity-container">
        <v-expansion-panels>
          <v-expansion-panel>
            <v-expansion-panel-header>
              {{ $t('balance.charity.title') }}
              <template v-slot:actions>
                <v-icon> mdi-information </v-icon>
              </template>
            </v-expansion-panel-header>
            <v-expansion-panel-content>
              <ul v-html="$t('balance.charity.description')" />
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
        <app-button
          type="button"
          btn-style="approve"
          style="height: 50px; width: 160px"
          @click="navigate(1)"
        >
          {{ $t('balance.charity.goto') }}
        </app-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    navigate(tabNr) {
      this.$router.push(this.$route.path + '/giftcards')
      this.$store.dispatch('setActiveTabNr', tabNr)
    }
  }
}
</script>

<style scoped lang="scss">
.title {
  font-size: 1.5rem;
  text-align: center;
  margin: 0 15px 15px 15px;
}
.info-container {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
}
.e-gift-card-container,
.charity-container {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: fit-content;
  width: 85%;
  max-width: 500px;
  padding: 0 10px;
}
.v-expansion-panel-header {
  padding: 15px 20px;
  line-height: 1.2rem;
  @include whitish-background-color;
}
li {
  list-style: none;
  padding-bottom: 5px;
  margin-left: -15px;
}
.button {
  margin: 15px 0;
}
</style>
