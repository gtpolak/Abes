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
            <b-tabs type="is-boxed" position="is-centered" expanded>
              <b-tab-item label="FACEIT Level Boost">
                <faceit-level-form></faceit-level-form>
              </b-tab-item>
              <b-tab-item label="FACEIT ELO Boost">
                <faceit-elo-form></faceit-elo-form>
              </b-tab-item>
              <b-tab-item label="FACEIT Test Game">
                <faceit-test-game></faceit-test-game>
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
import FACEITLevelForm from "@/components/FACEITLevelForm";
import FACEITEloForm from "@/components/FACEITEloForm";
import FACEITTestGame from "@/components/FACEITTestGame";

export default {
  components: {
    "main-navbar": MainNavbar,
    "faceit-level-form": FACEITLevelForm,
    "faceit-elo-form": FACEITEloForm,
    "faceit-test-game": FACEITTestGame,
    "main-footer": MainFooter
  },
};
</script>