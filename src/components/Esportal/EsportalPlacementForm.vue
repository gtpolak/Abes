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
          class="gradient-background"
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
      totalCost: 20,
      soloDuoType: "solo",
      formToCheckout: {
        boostName: "Esportal",
        boostOption: "Placement Matches",
        boostType: "solo",
        cost: 20
      }
    };
  },

  methods: {
    setCheckoutVisible() {
      if (this.soloDuoType !== "solo") {
        this.$buefy.toast.open({
          duration: 5000,
          message: "Form not filled",
          type: "is-warning",
          position: "is-bottom",
        });
        this.isCheckoutModalVisible = false;
        return;
      }

      if (this.startLevel >= this.targetLevel) {
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
      this.formToCheckout.startLevel = this.levels[this.startLevel].name;
      this.formToCheckout.targetLevel = this.levels[this.targetLevel].name;
      this.formToCheckout.cost = this.totalCost;

      this.isCheckoutModalVisible = true;
    },
  }
};
</script>
<style scoped>
.gradient-background {
  background: linear-gradient(135deg, rgba(70, 245, 56, 1) 0%, rgba(224, 231, 49, 1) 100%);
}
</style>