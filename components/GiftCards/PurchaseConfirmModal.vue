<template>
  <v-dialog
    v-model="showModal"
    fullscreen
    persistent
    hide-overlay
    transition="dialog-bottom-transition"
  >
    <v-card>
      <div class="main-wrapper">
        <div v-if="responseData.status === 'COMPLETE' && !isLoading">
          <h1>{{ $t('giftcards.purchase_confirm') }}</h1>
          <div class="order-details-wrapper">
            <div class="details">
              <p class="response-name">{{ $t('giftcards.purchased_item') }}: </p>
              <p>{{ responseData.rewardName }}</p>
            </div>
            <div class="details">
              <p class="response-name">{{ $t('giftcards.amount_charged') }}: </p>
              <p>{{ responseData.amountCharged.value }} {{ responseData.amountCharged.currencyCode }}</p>
            </div>
            <div class="details">
              <p class="response-name">{{ $t('giftcards.current_balance') }}: </p>
              <p>35 {{ responseData.amountCharged.currencyCode }}</p>
            </div>
            <div class="details">
              <p class="response-name">{{ $t('giftcards.claim_code') }}: </p>
              <p>{{ responseData.reward.credentials["Claim Code"] }}</p>
            </div>
            <div class="redemption">
              <p class="response-name">{{ $t('giftcards.instruction') }}: </p>
              <!-- eslint-disable-next-line vue/no-v-html -->
              <div v-html="responseData.reward.redemptionInstructions" />
            </div>
          </div>
        </div>
        <div
          v-if="responseData.status !== 'COMPLETE' && !isLoading"
          class="error"
        >
          {{ responseData }}
        </div>
        <div v-if="isLoading" class="error">
          <div class="lds-ring">
            <div />
            <div />
            <div />
            <div />
          </div>
        </div>
        <AppButton class="close-btn" btn-style="approve" @click="closeModal">
          Close
        </AppButton>
        <!-- <v-btn @click="log">Log Resonse</v-btn> -->
      </div>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: {
    showModal: {
      type: Boolean,
      required: true
    }
  },
  computed: {
    responseData() {
      return this.$store.getters.getOrderResponseData
    },
    isLoading() {
      return this.$store.getters.getOrderIsLoading
    }
  },
  methods: {
    closeModal() {
      if (this.responseData.status === 'COMPLETE') {
        this.$store.dispatch('clearResponseData')
        this.$router.push('/balance')
      }
      this.$emit('closeModal')
    },
    log() {
      //   console.log('Response below')
      //   console.log(this.responseData)
    }
  }
}
</script>

<style lang="css" scoped>
@import './css-loader.css';
</style>

<style scoped lang="scss">
h1 {
  font-weight: bold;
  text-align: center;
  line-height: 35px;
}
span {
  font-size: 12px;
  margin-bottom: 10px;
}
.main-wrapper {
  margin: auto;
  top: 100px;
  padding: 15px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  position: relative;
  overflow: hidden;
  width: 350px;
  min-height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
}
@media screen and (max-width: 330px) {
  .main-wrapper {
    width: 300px;
    top: 10px;
  }
}
@media screen and (max-width: 300px) {
  .main-wrapper {
    width: 270px;
    top: 10px;
  }
}
.close-btn {
  font-size: 2rem !important;
  padding: 0 5px 5px 5px;
  width: 160px !important;
  height: 48px;
  margin: 0 0 10px 0;
}
button {
  outline-style: none;
  text-decoration: none;
  color: rgb(165, 164, 164);
}
.order-details-wrapper,
.redemption {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
}
.details {
  display: flex;
  flex-direction: row;
}
p {
  margin: 10px 0 0 0;
}
.response-name {
  font-weight: bold;
  margin-right: 10px;
}
.error {
  text-align: center;
  background-color: transparent !important;
  margin: 25px 0;
}
.v-card {
  @include whitish-background-color;
}
</style>
