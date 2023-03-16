<template>
  <div>
    <section>
      <main-navbar></main-navbar>
    </section>
    <section class="section has-background-black has-text-white has-text-center-desktop  has-border-top-white is-size-4">
      <div class="columns py-4">
        <div class="column is-8 is-offset-2 has-text-left-mobile is-mobile">
          <p class="is-size-3">
            FACEIT is the leading independent competitive gaming platform for online multiplayer PvP gamers with more than twenty million users.
          </p>
          <div class="block"></div>
        </div>
      </div>
    </section>
    <section class="section has-background-black has-text-white">
      <div class="container">
        <div class="columns">
          <div class="column is-offset-2-desktop is-8-desktop is-12-mobile gradient-border-faceit">
            <b-tabs position="is-centered" expanded>
              <b-tab-item label="FACEIT Level Boost" icon="chevron-triple-up">
                <faceit-level-form></faceit-level-form>
              </b-tab-item>
              <b-tab-item label="FACEIT ELO Boost (Soon)" icon="numeric" disabled>
                <faceit-elo-form></faceit-elo-form>
              </b-tab-item>
              <b-tab-item label="FACEIT Test Game" icon="handshake-outline">
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
  }
};
</script>

<style>
.has-border-top-white {
  border-top: solid white 1px;
}

.gradient-border-faceit {
  border-width: 5px;
  border-style: solid;
  border-image: linear-gradient(to right, rgba(211,103,246,1), rgba(22, 117, 166, 1)) 1;
}
</style>