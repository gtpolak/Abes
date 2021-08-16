<template>
  <div class="container mt-5">
    <div class="columns">
      <div class="column is-6 is-offset-3">
        <b-field position="is-centered">
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
        <div class="columns is-multiline is-vcentered">
          <div class="column is-3 is-offset-3 has-text-left">
            Current rank:
          </div>
          <div class="column is-6">
            <b-field
              :type="targetLowerThanStartError ? 'is-danger' : 'is-primary'"
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
          <div class="column is-3 is-offset-3 has-text-left">Target rank:</div>
          <div class="column is-6">
            <b-field
              :type="targetLowerThanStartError ? 'is-danger' : 'is-primary'"
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
      </div>
      <div class="column is-3">
        <b-message
          v-model="targetLowerThanStartError"
          type="is-danger"
          class="has-text-left"
        >
          Target rank has to be higher than current rank.
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
    };
  },

  methods: {
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