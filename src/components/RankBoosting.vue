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
        <b-field
          type="is-primary"
          label="Current Level"
          custom-class="has-text-white"
        >
          <b-select @input="calculateCost" v-model="currentLevel" expanded>
            <option
              v-for="(level, index) in levels"
              :key="`index-${index}`"
              :value="index"
            >
              {{ level.name }}
            </option>
          </b-select>
        </b-field>
      </div>
      <div class="column is-6 is-offset-3">
        <b-field
          type="is-primary"
          label="Number of wins"
          custom-class="has-text-white"
        >
          <b-numberinput
            :min="1"
            :max="5"
            v-model="numberOfMatches"
            @input="calculateCost"
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
          class="gradient-border-rank-button"
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
      typeNotSelectedError: false,
      soloDuoType: "",
      currentLevel: 0,
      numberOfMatches: 1,
      isCheckoutModalVisible: false,
      totalCost: 0,
      levels: [
        {
          name: "Silver I",
          price: {
            solo: 4,
            duo: 6,
          },
        },
        {
          name: "Silver II",
          price: {
            solo: 4,
            duo: 6,
          },
        },
        {
          name: "Silver III",
          price: {
            solo: 4,
            duo: 6,
          },
        },
        {
          name: "Silver IV",
          price: {
            solo: 4,
            duo: 6,
          },
        },
        {
          name: "Silver Elite",
          price: {
            solo: 4,
            duo: 6,
          },
        },
        {
          name: "Silver Elite Master",
          price: {
            solo: 4,
            duo: 6,
          },
        },
        {
          name: "Gold Nova I",
          price: {
            solo: 4,
            duo: 6,
          },
        },
        {
          name: "Gold Nova II",
          price: {
            solo: 4,
            duo: 6,
          },
        },
        {
          name: "Gold Nova III",
          price: {
            solo: 4,
            duo: 6,
          },
        },
        {
          name: "Gold Nova Master",
          price: {
            solo: 4,
            duo: 6,
          },
        },
        {
          name: "Master Guardian I",
          price: {
            solo: 5,
            duo: 8,
          },
        },
        {
          name: "Master Guardian II",
          price: {
            solo: 5,
            duo: 8,
          },
        },
        {
          name: "Master Guardian Elite",
          price: {
            solo: 5,
            duo: 8,
          },
        },
        {
          name: "Distinguished Master Guardian",
          price: {
            solo: 5,
            duo: 8,
          },
        },
        {
          name: "Legendary Eagle",
          price: {
            solo: 6,
            duo: 10,
          },
        },
        {
          name: "Legendary Eagle Master",
          price: {
            solo: 6,
            duo: 10,
          },
        },
        {
          name: "Supreme Master First Class",
          price: {
            solo: 10,
            duo: 16,
          },
        },
        {
          name: "The Global Elite",
          price: {
            solo: 20,
            duo: 30,
          },
        },
      ],
      formToCheckout: {
        boostName: "Rank",
        boostOption: "Rank Boosting",
        boostType: this.soloDuoType,
        currentLevel: this.currentLevel,
        winsNumber: this.numberOfMatches,
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

      if (this.numberOfMatches > 5) {
        this.numberOfMatches = 5;
      } else if (this.numberOfMatches < 1) {
        this.numberOfMatches = 1;
      }

      this.formToCheckout.boostType = this.soloDuoType;
      this.formToCheckout.currentLevel = this.levels[this.currentLevel].name;
      this.formToCheckout.winsNumber = this.numberOfMatches;
      this.formToCheckout.cost = this.totalCost;

      this.isCheckoutModalVisible = true;
    },

    onTypeSelectChange() {
      this.typeNotSelectedError = false;
      this.calculateCost();
    },

    calculateCost() {
      if (this.soloDuoType !== "solo" && this.soloDuoType !== "duo") {
        this.typeNotSelectedError = true;
        this.totalCost = 0;
        return;
      }

      this.totalCost =
        this.levels[this.currentLevel].price[this.soloDuoType] *
        this.numberOfMatches;
    },
  },
};
</script>

<style>
.has-border-top-white {
  border-top: solid white 1px;
}

.gradient-border-rank-button {
  background: linear-gradient(
    135deg,
    rgba(22, 117, 166, 1) 0%,
    rgba(70, 245, 56, 1) 100%
  );
}
</style>