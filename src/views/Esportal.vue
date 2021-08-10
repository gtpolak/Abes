<template>
  <div>
    <section>
      <main-navbar></main-navbar>
    </section>
    <section class="section">
        What is Esportal? I have no idea
    </section>
    <section class="section">
      <div class="container">
        <div class="columns">
          <div class="column is-offset-1 is-10">
            <b-tabs type="is-boxed" position="is-centered" expanded>
              <b-tab-item label="Esportal Rank Boosting">
              </b-tab-item>
              <b-tab-item label="Esportal Boost Per Win">
              </b-tab-item>
              <b-tab-item label="Esportal Placement Matches">
              </b-tab-item>
            </b-tabs>
          </div>
        </div>
      </div>
    </section>
    <section>
      <main-footer></main-footer>
    </section>
  </div>
</template>

<script>
import MainNavbar from "@/components/MainNavbar";
import MainFooter from "@/components/MainFooter";

export default {
  components: {
    "main-navbar": MainNavbar,
    "main-footer": MainFooter,
  },
};
</script>