<template>
  <div class="container mt-5">
    <div class="columns is-vcentered is-mobile">
      <div class="column is-4-desktop is-offset-4-desktop is-10-mobile">
        <b-field position="is-centered">
          <b-radio-button
            v-model="soloDuoType"
            native-value="duo"
            expanded
          >
            <b-icon icon="account-multiple"></b-icon>
            Duo
          </b-radio-button>
        </b-field>
      </div>
      <div class="column is-1">
        <b-tooltip position="is-left" multilined>
          <b-icon icon="information"></b-icon>
          <template v-slot:content>
            <div>
              Only duo test games available.
            </div>
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

      <div class="column is-12-mobile is-4-desktop is-offset-4-desktop">
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
import CheckoutForm from "@/components/CheckoutForm"

export default {
    components: {
        "checkout-form": CheckoutForm
    },

  data() {
    return {
        isCheckoutModalVisible: false,
        soloDuoType: "duo",
        totalCost: 6,
        formToCheckout: {
          boostName: "Faceit",
          boostOption: "Test Game",
          boostType: this.soloDuoType,
          cost: this.totalCost
        }
    };
  },

  methods: {
    setCheckoutVisible() {
      if (this.soloDuoType !== "duo") {
        this.$buefy.toast.open({
          duration: 5000,
          message: "Form not filled",
          type: "is-warning",
          position: "is-bottom"
        });
        
        this.isCheckoutModalVisible = false;
        return;
      }

      this.formToCheckout.boostType = this.soloDuoType;
      this.formToCheckout.cost = this.totalCost;
      this.isCheckoutModalVisible = true
    },
  }
};
</script>
<style>
.gradient-background-faceit-button {
  background: linear-gradient(135deg, rgba(211,103,246,1) 0%, rgba(113,190,255,1) 50%, rgba(75,208,246,1) 100%);
}
</style>