<template>
  <div class="container mt-5">
    <div class="columns">
      <div class="column is-6 is-offset-3">
        <b-field position="is-centered">
          <b-radio-button
            v-model="soloDuoType"
            native-value="solo"
            size="is-medium"
            @input="onTypeSelectChange"
            expanded
          >
            <b-icon icon="account"></b-icon>
            Solo
          </b-radio-button>
          <b-radio-button
            v-model="soloDuoType"
            native-value="duo"
            size="is-medium"
            @input="onTypeSelectChange"
            expanded
          >
            <b-icon icon="account-multiple"></b-icon>
            Duo
          </b-radio-button>
        </b-field>
      </div>
      <div class="column is-3">
        <b-message
          v-model="typeNotSelectedError"
          type="is-danger"
          class="has-text-left"
        >
          Type not selected.
        </b-message>
      </div>
    </div>

    <!-- Level selection form  -->
    <div class="columns mt-3 py-3">
      <div class="column is-9">
        <div class="columns is-multiline">
          <div class="column is-3 is-offset-3 has-text-left">
            Current ELO:
          </div>
          <div class="column is-6">
              <b-field>
                  <b-numberinput :min="1" :max="2999" @input="onEloChange" v-model="startElo"></b-numberinput>
              </b-field>
          </div>
          <div class="column is-3 is-offset-3 has-text-left">
              Target ELO:
          </div>
          <div class="column is-6">
              <b-field>
                  <b-numberinput :min="1" :max="3000" @input="onEloChange" v-model="targetElo"></b-numberinput>
              </b-field>
          </div>
        </div>
      </div>
      <div class="column is-3">
        <b-message
          v-model="targetLowerThanStartError"
          type="is-danger"
          class="has-text-left"
        >
          Target ELO has to be higher than current ELO.
        </b-message>
      </div>
    </div>
    <div class="columns mt-3 is-multiline">
      <div class="column is-12">
        Total Cost:
        <b-tag size="is-medium" type="is-primary">
          {{ totalCost }}
          <b-icon icon="currency-eur" size="is-small" class="ml-1"></b-icon>
        </b-tag>
      </div>
      <div class="column is-4 is-offset-4">
        <b-button type="is-success" expanded @click="isCheckoutModalVisible = true">Checkout</b-button>
      </div>
    </div>

    <b-modal v-model="isCheckoutModalVisible" :width="640">
        <checkout-form></checkout-form>
    </b-modal>
  </div>
</template>

<script>
import CheckoutForm from "@/components/CheckoutForm"

export default {
  components: {
      "checkout-form": CheckoutForm
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
    };
  },

  methods: {
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