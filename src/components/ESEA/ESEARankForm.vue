<template>
  <div class="container mt-5">
    <div class="columns">
      <div class="column is-6 is-offset-3">
        <b-field position="is-centered" label="Type" custom-class="has-text-white"
        :message="typeNotSelectedError ? 'Type not selected' : ''"
        :type="{'is-danger' : typeNotSelectedError}">
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
        label="Current Level"
          custom-class="has-text-white"
              :type="targetLowerThanStartError ? 'is-danger' : 'is-primary'"
          :message="targetLowerThanStartError ? 'Target level has to be higher than current level' : ''"
            >
              <b-select @input="onLevelChange" v-model="startRank" expanded>
                <option
                  v-for="(rank, index) in selection_ranks"
                  :key="`index-${index}`"
                  :value="index"
                >
                  {{ rank.name }}
                </option>
              </b-select>
            </b-field>
      </div>
      <div class="column is-6 is-offset-3">
        <b-field
              label="Target Level"
              custom-class="has-text-white"
              :type="targetLowerThanStartError ? 'is-danger' : 'is-primary'"
          :message="targetLowerThanStartError ? 'Target level has to be higher than current level' : ''"
            >
              <b-select @input="onLevelChange" v-model="targetRank" expanded>
                <option
                  v-for="(rank, index) in selection_ranks"
                  :key="`index-${index}-1`"
                  :value="index"
                >
                  {{ rank.name }}
                </option>
              </b-select>
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
          type="is-success"
          expanded
          class="gradient-background-esea-button"
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
      startRank: 0,
      targetRank: 1,
      // Price to next level (1 -> 2, 3 -> 4 etc)
      // trueName data is send to server on form submit, name is only for display purposes
      ranks: [
        {
          name: "D-",
          trueName: "D Minus",
          price: {
            solo: 12,
            duo: 18,
          },
        },
        {
          name: "D",
          trueName: "D",
          price: {
            solo: 15,
            duo: 19,
          },
        },
        {
          name: "D+",
          trueName: "D Plus",
          price: {
            solo: 16,
            duo: 20,
          },
        },
        {
          name: "C-",
          trueName: "C Minus",
          price: {
            solo: 20,
            duo: 25,
          },
        },
        {
          name: "C",
          trueName: "C",
          price: {
            solo: 20,
            duo: 25,
          },
        },
        {
          name: "C+",
          trueName: "C Plus",
          price: {
            solo: 23,
            duo: 32,
          },
        },
        {
          name: "B-",
          trueName: "B Minus",
          price: {
            solo: 25,
            duo: 35,
          },
        },
        {
          name: "B",
          trueName: "B",
          price: {
            solo: 35,
            duo: 50,
          },
        },
        {
          name: "B+",
          trueName: "B Plus",
          price: {
            solo: 55,
            duo: 80,
          },
        },
        {
          name: "A-",
          trueName: "A Minus",
          price: {
            solo: 80,
            duo: 0,
          },
        },
        {
          name: "A",
          trueName: "A",
          price: {
            solo: 140,
            duo: null,
          },
        },
      ],
      formToCheckout: {
        boostName: "ESEA",
        boostOption: "Rank Boost",
        boostType: this.soloDuoType,
        startLevel: this.startLevel,
        targetLevel: this.targetLevel,
        cost: this.totalCost
      }
    };
  },

  methods: {
    setCheckoutVisible() {
      if (this.soloDuoType !== "solo" && this.soloDuoType !== "duo") {
        this.$buefy.toast.open({
          duration: 5000,
          message: "Form not filled",
          type: "is-warning",
          position: "is-bottom"
        });
        this.isCheckoutModalVisible = false;
        return;
      }

      if (this.startRank >= this.targetRank) {
        this.isCheckoutModalVisible = false;
        this.$buefy.toast.open({
          duration: 5000,
          message: "Form not filled",
          type: "is-warning",
          position: "is-bottom"
        });
        return;
      }

      this.formToCheckout.boostType = this.soloDuoType;
      this.formToCheckout.startLevel = this.ranks[this.startRank].trueName;
      this.formToCheckout.targetLevel = this.ranks[this.targetRank].trueName;
      this.formToCheckout.cost = this.totalCost;

      this.isCheckoutModalVisible = true
    },

    onTypeSelectChange() {
      this.typeNotSelectedError = false;
      
      // rank A is no available for duo, so if targetRank equals A rank, then on
      // switching to duo targetRank is lowered to A-
      if (this.soloDuoType === "duo") {
        if (this.targetRank === (this.ranks.length - 1)) {
          this.targetRank--
        }
      }

      this.calculateCost();
    },

    onLevelChange() {
      this.targetLowerThanStartError = this.startRank >= this.targetRank;
      this.calculateCost();
    },

    calculateCost() {
      if (this.soloDuoType !== "solo" && this.soloDuoType !== "duo") {
        this.typeNotSelectedError = true;
        this.totalCost = 0;
        return;
      }

      if (this.startRank >= this.targetRank) {
        this.totalCost = 0;
        return;
      }

      let price = 0;

      for (let index = this.startRank; index < this.targetRank; index++) {
        price += this.ranks[index].price[this.soloDuoType];
      }

      this.totalCost = price;
    },
  },

  computed: {
    selection_ranks() {
      if (this.soloDuoType === "duo") {
        return this.ranks.filter((rank) => {
          return rank.price.duo !== null;
        });
      }

      return this.ranks;
    },
  },
};
</script>

<style>
.gradient-background-esea-button {
  background: linear-gradient(135deg, rgba(224, 231, 49, 1) 0%, rgba(209, 112, 0, 1) 100%);
}
</style>