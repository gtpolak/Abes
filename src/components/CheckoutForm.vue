<template>
  <div class="card has-text-left">
    <div class="card-header has-background-primary">
      <div class="card-header-title has-text-white">Checkout</div>
    </div>
    <div class="card-content">
      <b-field label="Contact method">
        <b-select expanded placeholder="How do we contact you?">
            <option v-for="method in contactMethods" :key="method" :value="method">
                {{ method }}
            </option>
        </b-select>
      </b-field>
      <b-field label="Email">
        <b-input placeholder="Type your email address"></b-input>
      </b-field>
      <b-field label="Steam link">
        <b-input placeholder="Paste here your steam account link"></b-input>
      </b-field>
      <b-field label="Skype, Discord or Steam username">
        <b-input placeholder="Type your username"></b-input>
      </b-field>
      <b-field>
        <b-checkbox>I accept Rules and Terms of Service</b-checkbox>
      </b-field>
      <div class="has-text-right">
          <b-button type="is-success">Send</b-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            contactMethods: [
                "Skype",
                "Discord",
                "Email"
            ]
        }
    }
}
</script>