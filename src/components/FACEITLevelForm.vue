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
            Current Level:
          </div>
          <div class="column is-6">
            <b-field
              :type="targetLowerThanStartError ? 'is-danger' : 'is-primary'"
            >
              <b-select @input="onLevelChange" v-model="startLevel" expanded>
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
          <div class="column is-3 is-offset-3 has-text-left">Target Level:</div>
          <div class="column is-6">
            <b-field
              :type="targetLowerThanStartError ? 'is-danger' : 'is-primary'"
            >
              <b-select @input="onLevelChange" v-model="targetLevel" expanded>
                <option
                  v-for="(level, index) in levels"
                  :key="`index-${index}-1`"
                  :value="index"
                >
                  {{ level.name }}
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
          Target level has to be higher than current level.
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
      typeNotSelectedError: false,
      targetLowerThanStartError: false,
      totalCost: 0,
      soloDuoType: "",
      startLevel: 0,
      targetLevel: 1,
      // Price to next level (1 -> 2, 3 -> 4 etc)
      levels: [
        {
          name: "Level 1",
          price: {
            solo: 12,
            duo: 18,
          },
        },
        {
          name: "Level 2",
          price: {
            solo: 15,
            duo: 19,
          },
        },
        {
          name: "Level 3",
          price: {
            solo: 16,
            duo: 20,
          },
        },
        {
          name: "Level 4",
          price: {
            solo: 20,
            duo: 25,
          },
        },
        {
          name: "Level 5",
          price: {
            solo: 25,
            duo: 30,
          },
        },
        {
          name: "Level 6",
          price: {
            solo: 28,
            duo: 32,
          },
        },
        {
          name: "Level 7",
          price: {
            solo: 35,
            duo: 40,
          },
        },
        {
          name: "Level 8",
          price: {
            solo: 45,
            duo: 50,
          },
        },
        {
          name: "Level 9",
          price: {
            solo: 55,
            duo: 65,
          },
        },
        {
          name: "Level 10 (Elo 2001)",
          price: {
            solo: 120,
            duo: 140,
          },
        },
        {
          name: "Level 10 (Elo 2001 - 2200)",
          price: {
            solo: 140,
            duo: 165,
          },
        },
        {
          name: "Level 10 (Elo 2201 - 2400)",
          price: {
            solo: 250,
            duo: 300,
          },
        },
        {
          name: "Level 10 (Elo 2401 - 2700)",
          price: {
            solo: 350,
            duo: 300,
          },
        },
        {
          name: "Level 10 (Elo 2701 - 3000)",
          price: {
            solo: 12,
            duo: 18,
          },
        },
      ],
    };
  },

  methods: {
    onTypeSelectChange() {
      this.typeNotSelectedError = false;
      this.calculateCost();
    },

    onLevelChange() {
      this.targetLowerThanStartError = this.startLevel >= this.targetLevel;

      if (this.startLevel && this.targetLevel) {
        this.calculateCost();
      }
    },

    calculateCost() {
      if (this.soloDuoType !== "solo" && this.soloDuoType !== "duo") {
        this.typeNotSelectedError = true;
        this.totalCost = 0;
        return;
      }

      if (this.startLevel >= this.targetLevel) {
        this.totalCost = 0;
        return;
      }

      let price = 0;

      for (let index = this.startLevel; index < this.targetLevel; index++) {
        price += this.levels[index].price[this.soloDuoType];
      }

      this.totalCost = price;
    },
  },
};
</script>