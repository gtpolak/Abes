<template>
  <div class="container mt-5">
    <div class="columns is-vcentered">
      <div class="column is-4 is-offset-4">
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
        <b-tooltip position="is-right" multilined>
          <b-icon icon="information"></b-icon>
          <template v-slot:content>
            <div>
              Only solo placement matches available.
            </div>
          </template>
        </b-tooltip>
      </div>
    </div>

    <!-- Level selection form  -->
    <div class="columns mt-3 is-multiline">
      <div class="column is-12">
        Total Cost:
        <b-tag size="is-medium" type="is-primary">
          {{ totalCost }}
          <b-icon icon="currency-eur" size="is-small" class="ml-1"></b-icon>
        </b-tag>
      </div>
      <div class="column is-4 is-offset-4">
        <b-button
          type="is-success"
          expanded
          @click="isCheckoutModalVisible = true"
          >Checkout</b-button
        >
      </div>
    </div>

    <b-modal v-model="isCheckoutModalVisible" :width="640">
      <checkout-form></checkout-form>
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
    };
  },
};
</script>