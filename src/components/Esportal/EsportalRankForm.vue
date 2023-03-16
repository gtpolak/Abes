<template>
  <div class="container mt-5">
    <div class="columns">
      <div class="column is-6 is-offset-3">
        <b-field position="is-centered" label="Type" custom-class="has-text-white"
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
        label="Current Rank"
        custom-class="has-text-white"
              :type="targetLowerThanStartError ? 'is-danger' : 'is-primary'"
              :message="targetLowerThanStartError ? 'Target rank has to be higher than current rank' : ''"
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
        label="Target Rank"
        custom-class="has-text-white"
              :type="targetLowerThanStartError ? 'is-danger' : 'is-primary'"
              :message="targetLowerThanStartError ? 'Target rank has to be higher than current rank' : ''"
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
      typeNotSelectedError: false,
      targetLowerThanStartError: false,
      totalCost: 0,
      soloDuoType: "",
      startRank: 0,
      targetRank: 1,
      // Price to next level (1 -> 2, 3 -> 4 etc)
      ranks: [
        {
          name: "Silver",
          price: {
            solo: 55,
            duo: 80,
          },
        },
        {
          name: "Gold",
          price: {
            solo: 65,
            duo: 90,
          },
        },
        {
          name: "Veteran",
          price: {
            solo: 75,
            duo: 105,
          },
        },
        {
          name: "Master",
          price: {
            solo: 90,
            duo: 135,
          },
        },
        {
          name: "Elite",
          price: {
            solo: 120,
            duo: 180,
          },
        },
        {
          name: "Pro",
          price: {
            solo: 0,
            duo: 0,
          },
        }
      ],
      formToCheckout: {
        boostName: "Esportal",
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
      this.formToCheckout.startLevel = this.ranks[this.startRank].name;
      this.formToCheckout.targetLevel = this.ranks[this.targetRank].name;
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

<style scoped>
.gradient-background {
  background: linear-gradient(135deg, rgba(70, 245, 56, 1) 0%, rgba(224, 231, 49, 1) 100%);
}
</style>