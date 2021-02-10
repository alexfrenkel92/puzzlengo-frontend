<template>
  <div>
    <p class="title">
      Spend your earned balance by buying <b>eGift Cards</b> or by
      <b>Donating</b> to charity projects.
    </p>
    <div class="info-container">
      <div class="e-gift-card-container">
        <v-expansion-panels>
          <v-expansion-panel>
            <v-expansion-panel-header>
              eGift cards mean instant delivery, a digital trail, and no need
              for inventory
              <template v-slot:actions>
                <v-icon> mdi-information </v-icon>
              </template>
            </v-expansion-panel-header>
            <v-expansion-panel-content>
              <ul>
                <li>Select a card from a brand</li>
                <li>Select or provide an amount to spend</li>
                <li>
                  Fill in the recipient's name and e-mail address and add a
                  message if you wish
                </li>
                <li>
                  In case you are buying for yourself, press the
                  <b>Buying For Myself</b> button
                </li>
                <li>
                  Review your order then click on the
                  <b>Buy Card</b> button
                </li>
                <li>
                  The recipient receives the Claim Code to active the eGift Card
                  on the brand's page
                </li>
              </ul>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
        <app-button
          type="button"
          btn-style="approve"
          style="height: 50px; width: 160px"
          @click="navigate(0)"
        >
          Go to eGift Cards
        </app-button>
      </div>
      <div class="charity-container">
        <v-expansion-panels>
          <v-expansion-panel>
            <v-expansion-panel-header>
              Charity gift cards allow you, the gift giver to make a charitable
              donation to the gift card provider
              <template v-slot:actions>
                <v-icon> mdi-information </v-icon>
              </template>
            </v-expansion-panel-header>
            <v-expansion-panel-content>
              <ul>
                <li>Select a card from a non-profit card provider</li>
                <li>Select the amount you want to donate to</li>
                <li>Review your order</li>
                <li>Click on the <b>Donate</b> button to finish</li>
              </ul>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
        <app-button
          type="button"
          btn-style="approve"
          style="height: 50px; width: 160px"
          @click="navigate(1)"
        >
          Go to Charity Cards
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
