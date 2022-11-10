<template>
  <div>
    <section>
      <main-navbar></main-navbar>
    </section>
    <section class="section has-background-black has-text-white has-text-center has-border-top-white is-size-4">
      <div class="columns py-4">
        <div class="column is-8 is-offset-2 has-text-left-mobile">
          <p class="is-size-3-desktop is-size-4-mobile">
            The ESEA League is one of the biggest open tournament formats for CS:GO with divisions in North America, Europe, Australia, the Middle East, South Africa, Asia and Brazil.
            It has grown to be very popular due to its reliable, regular structure with three seasons of games per year. 
          </p>
          <div class="block"></div>
        </div>
      </div>
    </section>
    <section class="section has-background-black has-text-white">
      <div class="container">
        <div class="columns">
          <div class="column is-offset-2-desktop is-8-desktop is-12-mobile gradient-border-esea">
            <b-tabs position="is-centered" expanded>
              <b-tab-item label="ESEA Rank Boosting" icon="chevron-triple-up">
                  <esea-rank-form></esea-rank-form>
              </b-tab-item>
              <b-tab-item label="ESEA Placement Matches" icon="handshake-outline">
                <esea-placement-form></esea-placement-form>
              </b-tab-item>
              <b-tab-item label="ESEA Test Game" icon="tools">
                <esea-test-game-form></esea-test-game-form>
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
import ESEARankForm from "@/components/ESEA/ESEARankForm"
import ESEAPlacementForm from "@/components/ESEA/ESEAPlacementForm"
import ESEATestGameForm from "@/components/ESEA/ESEATestGameForm"

export default {
  components: {
    "main-navbar": MainNavbar,
    "main-footer": MainFooter,
    "esea-rank-form": ESEARankForm,
    "esea-placement-form": ESEAPlacementForm,
    "esea-test-game-form": ESEATestGameForm,
  },
};
</script>
<style>
.has-border-top-white {
  border-top: solid white 1px;
}

.gradient-border-esea {
  border-width: 5px;
  border-style: solid;
  border-image: linear-gradient(to right, rgba(224, 231, 49, 1) 0%, rgba(209, 112, 0, 1)) 1;
}
</style>