<template>
  <div>
    <section>
      <main-navbar></main-navbar>
    </section>
    <section class="section">
        What is FACEIT? I have no idea
    </section>
    <section class="section">
      <div class="container">
        <div class="columns">
          <div class="column is-offset-1 is-10">
            <b-tabs type="is-toggle" position="is-centered" expanded>
              <b-tab-item label="FACEIT Level Boost">
                <faceit-level-form></faceit-level-form>
              </b-tab-item>
              <b-tab-item label="FACEIT ELO Boost"></b-tab-item>
              <b-tab-item label="FACEIT Test Game"></b-tab-item>
            </b-tabs>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import MainNavbar from "@/components/MainNavbar";
import FACEITLevelForm from "@/components/FACEITLevelForm";

export default {
  components: {
    MainNavbar,
    "faceit-level-form": FACEITLevelForm,
  },
};
</script>