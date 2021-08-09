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
            <b-field type="is-primary">
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
          <div class="column is-3 is-offset-3 has-text-left">
            Number of wins
          </div>
          <div class="column is-6">
            <b-field type="is-primary">
              <b-numberinput
                :min="1"
                :max="5"
                v-model="numberOfMatches"
                @input="calculateCost"
              ></b-numberinput>
            </b-field>
          </div>
        </div>
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
    };
  },

  methods: {
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

      this.totalCost = this.levels[this.currentLevel].price[this.soloDuoType] * this.numberOfMatches

    },
  },
};
</script>