<template>
  <div class="container mt-5">
    <div class="columns">
      <div class="column is-6 is-offset-3">
        <b-field
          position="is-centered"
          label="Type"
          custom-class="has-text-white"
          :message="typeNotSelectedError ? 'Type not selected' : ''"
          :type="{'is-danger' : typeNotSelectedError}"
        >
          <b-radio-button
            v-model="soloDuoType"
            native-value="solo"
            @input="onTypeSelectChange"
            expanded
          >
            <b-icon icon="account"></b-icon>
            Solo
          </b-radio-button>
          <b-radio-button
            v-model="soloDuoType"
            native-value="duo"
            @input="onTypeSelectChange"
            expanded
          >
            <b-icon icon="account-multiple"></b-icon>
            Duo
          </b-radio-button>
        </b-field>
      </div>
    </div>

    <div class="columns is-multiline">
      <div class="column is-6 is-offset-3">
        <b-field label="Current ELO" custom-class="has-text-white">
          <b-numberinput
            :min="1"
            :max="2999"
            @input="onEloChange"
            v-model="startElo"
          ></b-numberinput>
        </b-field>
      </div>
      <div class="column is-6 is-offset-3">
        <b-field label="Target ELO" custom-class="has-text-white">
          <b-numberinput
            :min="1"
            :max="3000"
            @input="onEloChange"
            v-model="targetElo"
          ></b-numberinput>
        </b-field>
      </div>
    </div>

    <div class="columns mt-3 is-multiline is-vcentered is-mobile">
      <div class="column is-2-desktop is-offset-3-desktop is-6-mobile has-text-left">
        <p class="is-size-5">Total Cost:</p>
      </div>
      <div class="column is-2-desktop is-offset-2-desktop is-6-mobile has-text-right">
        <b-tag size="is-medium" type="is-primary">
          {{ totalCost }}
          <b-icon icon="currency-eur" size="is-small" class="ml-1"></b-icon>
        </b-tag>
      </div>

      <div class="column is-12-mobile is-6-desktop is-offset-3-desktop">
        <b-button
          class="gradient-background-faceit-button"
          type="is-success"
          expanded
          @click="setCheckoutVisible"
          >Checkout</b-button
        >
      </div>
    </div>

    <b-modal v-model="isCheckoutModalVisible" :width="640">
      <checkout-form :service-config="formToCheckout"></checkout-form>
    </b-modal>
  </div>
</template>

<script>
import CheckoutForm from "@/components/CheckoutForm";

export default {
  components: {
    "checkout-form": CheckoutForm,
  },

  data() {
    return {
      isCheckoutModalVisible: false,
      typeNotSelectedError: false,
      targetLowerThanStartError: false,
      totalCost: 0,
      soloDuoType: "",
      startElo: 1,
      targetElo: 2,
      formToCheckout: {
        boostName: "Faceit",
        boostOption: "ELO Boost",
        boostType: this.soloDuoType,
        startLevel: this.startElo,
        targetLevel: this.targetElo,
        cost: this.totalCost,
      },
    };
  },

  methods: {
    setCheckoutVisible() {
      if (this.soloDuoType !== "solo" && this.soloDuoType !== "duo") {
        this.$buefy.toast.open({
          duration: 5000,
          message: "Form not filled",
          type: "is-warning",
          position: "is-bottom",
        });
        this.isCheckoutModalVisible = false;
        return;
      }

      if (this.startElo >= this.targetElo) {
        this.isCheckoutModalVisible = false;
        this.$buefy.toast.open({
          duration: 5000,
          message: "Form not filled",
          type: "is-warning",
          position: "is-bottom",
        });
        return;
      }

      this.formToCheckout.boostType = this.soloDuoType;
      this.formToCheckout.startLevel = this.startElo;
      this.formToCheckout.targetLevel = this.targetElo;
      this.formToCheckout.cost = this.totalCost;

      this.isCheckoutModalVisible = true;
    },

    onTypeSelectChange() {
      this.typeNotSelectedError = false;
      this.calculateCost();
    },

    onEloChange() {
      this.targetLowerThanStartError = this.startElo >= this.targetElo;

      if (this.startElo && this.targetElo) {
        this.calculateCost();
      }
    },

    calculateCost() {
      if (this.soloDuoType !== "solo" && this.soloDuoType !== "duo") {
        this.typeNotSelectedError = true;
        this.totalCost = 0;
        return;
      }

      if (this.startElo >= this.targetElo) {
        this.totalCost = 0;
        return;
      }

      let price = 0;

      for (let index = this.startElo; index < this.targetElo; index++) {
        // price += this.levels[index].price[this.soloDuoType];
      }

      this.totalCost = price;
    },
  },
};
</script>
<style>
.gradient-background-faceit-button {
  background: linear-gradient(
    135deg,
    rgba(211, 103, 246, 1) 0%,
    rgba(113, 190, 255, 1) 50%,
    rgba(75, 208, 246, 1) 100%
  );
}
</style>