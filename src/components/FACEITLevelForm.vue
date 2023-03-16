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
          label="Current Level"
          custom-class="has-text-white"
          :type="targetLowerThanStartError ? 'is-danger' : 'is-primary'"
          :message="targetLowerThanStartError ? 'Target level has to be higher than current level' : ''"
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
      <div class="column is-6 is-offset-3">
        <b-field
              label="Target Level"
              custom-class="has-text-white"
              :type="targetLowerThanStartError ? 'is-danger' : 'is-primary'"
              :message="targetLowerThanStartError ? 'Target level has to be higher than current level' : ''"
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
            duo: 400,
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
      formToCheckout: {
        boostName: "Faceit",
        boostOption: "Level Boost",
        boostType: "",
        startLevel: "",
        targetLevel:"",
        cost: "",
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

    onTypeSelectChange() {
      this.typeNotSelectedError = false;
      this.calculateCost();
    },

    onLevelChange() {
      this.targetLowerThanStartError = this.startLevel >= this.targetLevel;

      if (this.targetLowerThanStartError) {
        return;
      }

      this.calculateCost();
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
        console.log(this.levels[index].price[this.soloDuoType]);
        price += this.levels[index].price[this.soloDuoType];
      }

      this.totalCost = price;
    },
  },
};
</script>

<style>
.gradient-background-faceit-button {
  background: linear-gradient(
    135deg,
    rgba(211, 103, 246, 1) 0%,
    rgba(113, 190, 255, 1) 50%,
    rgba(75, 208, 246, 1) 100%
  );
}
</style>