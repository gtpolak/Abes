<template>
  <div class="container mt-5">
    <div class="columns is-vcentered is-mobile">
      <div class="column is-4-desktop is-offset-4-desktop is-10-mobile">
        <b-field position="is-centered">
          <b-radio-button
            v-model="soloDuoType"
            native-value="solo"
            expanded
          >
            <b-icon icon="account"></b-icon>
            Solo
          </b-radio-button>
        </b-field>
      </div>
      <div class="column is-1">
        <b-tooltip position="is-left" multilined>
          <b-icon icon="information"></b-icon>
          <template v-slot:content>
            <div>
              Only solo placement matches available.
            </div>
          </template>
        </b-tooltip>
      </div>
    </div>

    <div class="columns mt-3 is-multiline is-vcentered is-mobile">
      <div class="column is-2-desktop is-offset-4-desktop is-6-mobile has-text-left">
        <p class="is-size-5">
          Total Cost:
        </p>
      </div>
      <div class="column is-2-desktop is-6-mobile has-text-right">
        <b-tag size="is-medium" type="is-primary">
          {{ totalCost }}
          <b-icon icon="currency-eur" size="is-small" class="ml-1"></b-icon>
        </b-tag>
      </div>
      
      <div class="column is-4-desktop is-offset-4-desktop is-12-mobile">
        <b-button
          type="is-success"
          expanded
          class="gradient-background-esea-button"
          @click="isCheckoutModalVisible = true"
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
      totalCost: 5,
      soloDuoType: "solo",
      formToCheckout: {
        boostName: "ESEA",
        boostOption: "Test Game",
        boostType: "solo",
        cost: 5
      }
    };
  },
};
</script>

<style>
.gradient-background-esea-button {
  background: linear-gradient(135deg, rgba(224, 231, 49, 1) 0%, rgba(209, 112, 0, 1) 100%);
}
</style>