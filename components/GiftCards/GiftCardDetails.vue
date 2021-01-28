<template>
  <div class="card-details-wrapper">
    <div class="image-container">
      <img :src="imgUrl" :alt="brand.brandName + ' logo'">
      <p class="item-value">{{ rewardName }}</p>
    </div>
    <div class="details-container">
      <p class="brand-name">{{ brand.brandName }} eGift Card</p>
      <div class="divider-horizontal" />
      <div class="form-container">
        <form @submit.prevent="sendOrder">
          <div class="form-control">
            <p class="amount">Amount</p>
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
            <div v-else class="form-control">
              <input v-model.trim="amount" type="text" :placeholder="minMaxValues" class="usd-input-field">
              <p class="usd-sign">$</p>
            </div>
          </div>
          <div class="form-control">
            <label for="email">E-mail:</label>
            <input id="email" v-model.trim="email.val" type="text">
          </div>
          <div class="form-control">
            <label for="firstName">First Name:</label>
            <input id="firstName" v-model.trim="firstName.val" type="text">
          </div>
          <div class="form-control">
            <label for="lastName">Last Name:</label>
            <input id="lastName" v-model.trim="lastName.val" type="text">
          </div>
        </form>
        <div class="buttons-wrapper">
          <app-button
            type="button"
            btn-style="approve"
            @click="sendOrder"
          >
            Buy
          </app-button>
          <app-button
            type="button"
            btn-style="approve"
            @click="$router.go(-1)"
          >
            Back to Cards
          </app-button>
        </div>
        <v-btn @click="log">log stuff</v-btn>
      </div>
    </div>
    <div class="brand-details-container">
      <p class="details-title">Description:</p>
      <!-- eslint-disable-next-line vue/no-v-html -->
      <div class="details-content" v-html="brand.description" />
      <p class="details-title">Disclaimer:</p>
      <!-- eslint-disable-next-line vue/no-v-html -->
      <div class="details-content" v-html="brand.disclaimer" />
    </div>
    <PurchaseConfirmModal :show-modal="tooglePurchaseConfirmModal" @closeModal="closeModal" />
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
      tooglePurchaseConfirmModal: false
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
      // console.log(formData)
    },
    closeModal() {
      this.tooglePurchaseConfirmModal = false
    },
    log() {
      console.log(this.brand)
    }
  }
}
</script>

<style lang="css" scoped>
.form-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.button {
  margin: 10px;
  height: 50px;
  width: 120px;
}
.card-details-wrapper {
  width: 100%;
  padding-top: 20px;
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-template-rows: 1fr auto;
}
.image-container {
  grid-column: 1 / 2;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: fit-content;
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
p {
  margin: 0;
}
.item-value {
  margin-top: 10px;
}
.brand-name {
  font-size: 1.3rem;
}
.divider-horizontal {
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

/* FORM STYLING */
form {
  width: 350px;
}
.form-control {
  display: flex;
  flex-direction: row;
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
  margin: 20px 10px 10px 10px;
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
