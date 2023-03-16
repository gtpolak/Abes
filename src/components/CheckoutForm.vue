<template>
  <div>
    <!-- Show loading screen -->
    <div v-if="isLoading">
      <b-loading v-model="isLoading" :can-cancel="true"></b-loading>
    </div>
    <!-- Show response message -->
    <div v-else-if="showResponseMessage">
      <div class="card">
        <div class="card-header has-background-primary has-text-white">
          <div class="card-header-title has-text-white">
            <div v-if="isSuccess">
              Success
            </div>
            <div v-else>
              Warning
            </div>
          </div>
        </div>
        <div class="card-content has-background-grey-darker has-text-white">
          <p class="is-size-4">
            {{ responseMessage }}
          </p>
        </div>
      </div>
    </div>
    <!-- Show checkout form -->
    <div v-else>
      <div class="card has-text-left">
        <div class="card-header has-background-primary">
          <div class="card-header-title has-text-white">Checkout</div>
        </div>
        <div class="card-content has-background-grey-darker">
          <b-field label="Email" custom-class="has-text-white">
            <b-input
              placeholder="Type your email address"
              v-model="email"
            ></b-input>
          </b-field>

          <b-field label="Steam link" custom-class="has-text-white">
            <b-input
              placeholder="Paste here your steam account link"
              v-model="steamLink"
            ></b-input>
          </b-field>

          <b-field
            label="Discord username"
            custom-class="has-text-white"
          >
            <template #label>
              <div>
                Discord Name
                <b-tooltip position="is-right" label="Username in format Username#0000">
                  <b-icon icon="help-circle" size="is-small"></b-icon>
                </b-tooltip>
              </div>
            </template>
            <b-input
              placeholder="Type your username"
              v-model="discordName"
            ></b-input>
          </b-field>

          <div class="block"></div>

          <b-field>
            <b-checkbox v-model="termsAccepted">
              <span class="has-text-white"
                >I accept Rules and Terms of Service</span
              >
            </b-checkbox>
          </b-field>

          <div class="has-text-right">
            <!-- <b-button type="is-primary" @click="sendMail">Send</b-button> -->
            <b-button type="is-primary" @click="testPostMail">Send</b-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: [
    "serviceConfig", // service config: boost name, boost type, solo/duo, league, elo etc.
  ],
  data() {
    return {
      isLoading: false,
      showResponseMessage: false,
      isSuccess: false,
      responseMessage: "",
      // test data
      email: "",
      steamLink: "",
      discordName: "",
      termsAccepted: false,
    };
  },

  methods: {
    sendMail() {
      console.log("Dane boostingu: ", this.serviceConfig);
      console.log("Wysylam maila");
      console.log(Object.keys(this.serviceConfig));

      const keys = Object.keys(this.serviceConfig);

      const payloadData = {
        email: this.email,
        steamLink: this.steamLink,
        discordName: this.discordName,
        ...this.serviceConfig,
      };

      payloadData["boostKeys"] = keys;

      // Send GET Request
      console.log(payloadData["email"]);
      let getParams =
        `email=${payloadData["email"]}&` +
        `steamLink=${payloadData["steamLink"]}&` +
        `discordName=${payloadData["discordName"]}`;

      for (let key in payloadData) {
        getParams += `${key}=${payloadData[key]}&`;
        // console.log(`${key} = ${payloadData[key]}`)
      }
      // Same tab
      // window.location.assign(`http://localhost:80/mailer.php?${getParams}`)
      // New tab
      window
        .open(`http://localhost:80/mailer.php?${getParams}`, "_blank")
        .focus();
    },

    async testPostMail() {
      this.isLoading = true;

      const keys = Object.keys(this.serviceConfig);

      const payloadData = {
        email: this.email,
        steamLink: this.steamLink,
        discordName: this.discordName,
        ...this.serviceConfig,
      };

      payloadData["boostKeys"] = keys;
      const formData = this.createFormDataFromObject(payloadData);
      console.log(payloadData);
      // Send async request with Fetch
      try {
        const endpoint = "https://www.pixel-boost.com/mailer.php";
        // const endpoint = "http://localhost:80/mailer.php";
        
        const response = await fetch(endpoint, {
          method: "post",
          body: formData,
        });
        console.log(response);
        try {
          const jsonData = await response.json();
          console.log(jsonData);
          if (jsonData.status === 200) {
            this.responseMessage = `Your request has been sent successfully. 
            Our team will contact you as soon as possible. 
            The payment details will be provided in the message. Thank you.`;
            this.isSuccess = true;
          } else {
            this.responseMessage = "Oops! Something went wrong. Try again later."
            this.isSuccess = false;
          }
        } catch (errorData) {
          console.log(errorData);
          this.responseMessage = "Oops! Something went wrong. Try again later."
          this.isSuccess = false;
        }
      } catch (error) {
        console.log(error);
        this.responseMessage = "Oops! Something went wrong. Try again later."
        this.isSuccess = false;
      }

      setTimeout(() => {
        this.isLoading = false;
        this.showResponseMessage = true;
      }, 2000)
    },

    createFormDataFromObject(payloadData) {
      const formData = new FormData();

      for (let key in payloadData) {
        formData.append(key, payloadData[key]);
      }

      return formData;
    },
  },
};
</script>