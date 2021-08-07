<template>
  <div class="container mt-5">
    <div class="columns">
      <div class="column is-6 is-offset-3">
        <b-field position="is-centered">
          <b-radio-button
            v-model="soloDuoType"
            native-value="solo"
            size="is-medium"
            @input="calculateCost"
            expanded
          >
            <b-icon icon="account"></b-icon>
            Solo
          </b-radio-button>
          <b-radio-button
            v-model="soloDuoType"
            native-value="duo"
            size="is-medium"
            @input="calculateCost"
            expanded
          >
            <b-icon icon="account-multiple"></b-icon>
            Duo
          </b-radio-button>
        </b-field>
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
      soloDuoType: "",
      totalCost: 0
    };
  },

  methods: {
      calculateCost() {
          if (this.soloDuoType === "solo") {
              this.totalCost = 4
          }
          else if (this.soloDuoType === "duo") {
              this.totalCost = 6
          }
          else {
              this.totalCost = 0
          }
      }
  }
};
</script>