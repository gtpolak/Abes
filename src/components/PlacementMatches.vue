<template>
  <div class="container mt-5">
    <div class="columns is-vcentered is-mobile">
      <div class="column is-4-desktop is-offset-4-desktop is-10-mobile">
        <b-field position="is-centered">
          <b-radio-button v-model="soloDuoType" native-value="solo" expanded>
            <b-icon icon="account"></b-icon>
            Solo
          </b-radio-button>
        </b-field>
      </div>
      <div class="column is-1">
        <b-tooltip position="is-left" multilined>
          <b-icon icon="information"></b-icon>
          <template v-slot:content>
            <div>Only solo placement matches available.</div>
          </template>
        </b-tooltip>
      </div>
    </div>

    <div class="columns mt-3 is-multiline is-vcentered is-mobile">
      <div class="column is-2-desktop is-offset-4-desktop is-6-mobile has-text-left">
        <p class="is-size-5">Total Cost:</p>
      </div>
      <div class="column is-2-desktop is-6-mobile has-text-right">
        <b-tag size="is-medium" type="is-primary">
          {{ totalCost }}
          <b-icon icon="currency-eur" size="is-small" class="ml-1"></b-icon>
        </b-tag>
      </div>

      <div class="column is-4-desktop is-offset-4-desktop is-12-mobile">
        <b-button
          class="gradient-border-rank-button"
          type="is-success"
          expanded
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
      soloDuoType: "solo",
      totalCost: 30,
      formToCheckout: {
        boostName: "Rank",
        boostOption: "Placement Matches",
        boostType: "solo",
        cost: 30,
      },
    };
  },
};
</script>
<style>
.gradient-border-rank-button {
  background: linear-gradient(
    135deg,
    rgba(22, 117, 166, 1) 0%,
    rgba(70, 245, 56, 1) 100%
  );
}
</style>