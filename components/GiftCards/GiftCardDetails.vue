<template>
  <div class="card-details-wrapper">
    <div class="image-container">
      <p class="item-value-mobile">{{ rewardName }}</p>
      <img :src="imgUrl" :alt="brand.brandName + ' logo'">
      <p class="item-value-desktop">{{ rewardName }}</p>
    </div>
    <div class="details-container">
      <div class="divider-horizontal-mobile" />
      <p class="brand-name">{{ brand.brandName }} {{ $t('giftcards.egift') }}</p>
      <div class="divider-horizontal-desktop" />
      <div class="form-container">
        <form @submit.prevent="sendOrder">
          <div class="form-control">
            <p class="amount">{{ $t('giftcards.amount') }}</p>
            <div v-if="faceValueExist !== 0" class="face-values">
              <div v-for="item in brand.items" :key="item.utid">
                <button
                  class="btn-amount"
                  :class="{active: active == item.faceValue}"
                  @click.prevent="saveAmount(item)"
                >
                  ${{ item.faceValue }}
                </button>
              </div>
            </div>
            <div v-else class="usd-input-field-wrapper">
              <div class="amount-wrapper">
                <input v-model.trim="amount" type="text" :placeholder="minMaxValues" class="usd-input-field">
                <p class="usd-sign">$</p>
              </div>
            </div>
          </div>
          <div class="form-control">
            <label for="email">{{ $t('form.email') }}</label>
            <input id="email" v-model.trim="email.val" type="text">
          </div>
          <div class="form-control">
            <label for="firstName">{{ $t('form.first_name') }}</label>
            <input id="firstName" v-model.trim="firstName.val" type="text">
          </div>
          <div class="form-control">
            <label for="lastName">{{ $t('form.last_name') }}</label>
            <input id="lastName" v-model.trim="lastName.val" type="text">
          </div>
        </form>
        <div class="buttons-wrapper">
          <app-button
            type="button"
            btn-style="approve"
            @click="sendOrder"
          >
            <span v-if="brand.items[0].rewardType === 'donation'">{{ $t('giftcards.donate') }}</span>
            <span v-else>{{ $t('giftcards.buy') }}</span>
          </app-button>
          <app-button
            type="button"
            btn-style="approve"
            @click="$router.go(-1)"
          >
            {{ $t('giftcards.back') }}
          </app-button>
        </div>
      </div>
    </div>
    <div class="brand-details-container">
      <p class="details-title">{{ $t('common.description') }}:</p>
      <!-- eslint-disable-next-line vue/no-v-html -->
      <div class="details-content" v-html="brand.description" />
      <p class="details-title">{{ $t('giftcards.disclaimer') }}:</p>
      <!-- eslint-disable-next-line vue/no-v-html -->
      <div class="details-content" v-html="brand.disclaimer" />
    </div>
    <div>
      <PurchaseConfirmModal :show-modal="tooglePurchaseConfirmModal" @closeModal="closeModal" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    brand: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      imgUrl: '',
      utid: null,
      active: null,
      email: {
        val: '',
        isValid: true
      },
      firstName: {
        val: '',
        isValid: true
      },
      lastName: {
        val: '',
        isValid: true
      },
      amount: {
        val: [],
        isValid: true
      },
      formIsValid: true,
      itemRewardName: '',
      faceValueExist: null,
      tooglePurchaseConfirmModal: false,
      buyMoreBtn: false
    }
  },
  computed: {
    rewardName() {
      return this.itemRewardName
    },
    minMaxValues() {
      return this.brand.items[0].minValue + ' - ' + this.brand.items[0].maxValue + ' ' + this.brand.items[0].currencyCode
    }
  },
  created() {
    this.imgUrl = this.brand.imageUrls['1200w-326ppi']
    this.faceValueExist = this.brand.items.filter(item => item.faceValue).length
    // Item's reward name is rendered on Page load >>> always the first item [0]
    this.itemRewardName = this.brand.items[0].rewardName
    // first Amount box active on page load && sets amount as well, first element of array
    this.active = this.brand.items[0].faceValue
    this.amount = this.brand.items[0].faceValue
    this.utid = this.brand.items[0].utid
  },
  methods: {
    saveAmount(item) {
      this.amount = item.faceValue
      this.itemRewardName = item.rewardName
      this.active = item.faceValue
      this.utid = item.utid
    },
    sendOrder() {
      const formData = {
        accountIdentifier: 'aaron',
        amount: this.amount,
        campaign: 'string',
        customerIdentifier: 'aaron',
        emailSubject: 'string',
        etid: 'E000000',
        externalRefID: 'string',
        message: 'string',
        notes: 'string',
        recipient: {
          email: 'aaron.zide@tangocard.com',
          firstName: 'Arthur',
          lastName: 'Dent'
        },
        sendEmail: true,
        sender: {
          email: '',
          firstName: '',
          lastName: ''
        },
        utid: this.utid
      }
      this.$store.dispatch('postOrders', formData)
      this.tooglePurchaseConfirmModal = !this.tooglePurchaseConfirmModal
    },
    closeModal() {
      this.tooglePurchaseConfirmModal = false
    },
    log() {
    }
  }
}
</script>

<style lang="css" scoped>
.card-details-wrapper {
  max-width: 1150px;
  padding-top: 20px;
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-template-rows: 1fr auto;
}
.form-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.amount-wrapper {
  display: flex;
  flex-direction: row;
}
.button {
  margin: 10px;
  height: 50px;
  width: 120px;
}
.image-container {
  grid-column: 1 / 2;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: fit-content;
  margin: 0 10px 0 20px;
}
img {
  width: 350px;
}
.details-container {
  grid-column: 2 / 3;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: fit-content;
}
.buttons-wrapper {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}
p {
  margin: 0;
}
.item-value-desktop {
  margin-top: 10px;
}
.item-value-mobile {
  display: none;
}
.brand-name {
  font-size: 1.3rem;
}
.divider-horizontal-desktop {
  margin: 10px 0 10px 0;
  height: 1px;
  width: 100%;
  background-image: linear-gradient(
    to right,
    transparent,
    rgb(51, 50, 48),
    transparent
  );
}
.divider-horizontal-mobile {
  display: none;
}

@media screen and (max-width: 700px) {
  .card-details-wrapper {
    display: flex;
    flex-direction: column;
  }
  .form-control {
    margin-left: 50px !important;
  }
  .item-value-desktop {
    display: none;
  }
  .item-value-mobile {
    display: flex;
    margin-bottom: 5px;
  }
  .divider-horizontal-desktop {
    display: none;
  }
  .divider-horizontal-mobile {
    display: flex;
    margin: 10px 0 10px 0;
    height: 1px;
    width: 100%;
    background-image: linear-gradient(
      to right,
      transparent,
     rgb(51, 50, 48),
      transparent
  );
  }
}

@media screen and (max-width: 400px) {
  img {
    width: 250px;
  }
  .brand-details-container {
    width: inherit !important;
    margin: 20px 15px 15px 15px !important;
  }
  .brand-name {
    font-size: 1.3rem;
  }
  .usd-input-field,
  input {
    width: 150px !important;
  }
}

@media screen and (max-width: 350px) {
  img {
    width: 250px;
  }
  .brand-details-container {
    width: inherit !important;
    margin-left: 25px !important;
    margin-right: 25px !important;
  }
  .brand-name {
    font-size: 1.1rem;
  }
  .usd-input-field,
  input {
    width: 150px !important;
  }
}

/* FORM STYLING */
form {
  width: 350px;
}
.form-control {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
.face-values {
  width: fit-content;
}
label, .amount {
  width: 100px;
  font-weight: bold;
  /* display: block; */
  margin: 10px 0 10px 0;
}
.usd-sign {
  font-weight: bold;
  margin: 10px 0 10px 5px;
}
.usd-input-field {
  width: 130px;
  float: left;
}
input {
  /* display: block; */
  width: 200px;
  border: 1px solid #ccc;
  font: inherit;
  margin: 10px 0 10px 0;
  padding-left: 5px;
}
input:focus {
  background-color: #f0e6fd;
  outline: none;
  border-color: #3d008d;
}
.face-values {
  display: flex;
  flex-direction: row;
}
.btn-amount {
  width: 50px;
  height: 30px;
  background-color: rgb(228, 222, 222);
  border: 1px solid slategrey;
  margin: 10px 10px 10px 0;
}
.btn-amount:hover {
  background-color: rgb(196, 192, 192);
}
.btn-amount:active {
  transform: translateY(2px);
  background-color: rgb(196, 192, 192);
}
.active {
  background-color: rgb(196, 192, 192);
}

/* DESCRIPTION PART */
.brand-details-container {
  grid-column: 1 / 3;
  grid-row: 2 / 3;
  margin: 20px 30px 10px 30px;
}
.details-title {
  font-weight: bold
}
.description-content >>> p >>> a {
  text-decoration: none !important;
  color: black !important;
  border: 1px solid red;
}
</style>
