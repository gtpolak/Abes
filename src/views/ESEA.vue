<template>
  <div>
    <section>
      <main-navbar></main-navbar>
    </section>
    <section class="section">
        What is ESEA? I have no idea
    </section>
    <section class="section">
      <div class="container">
        <div class="columns">
          <div class="column is-offset-1 is-10">
            <b-tabs type="is-boxed" position="is-centered" expanded>
              <b-tab-item label="ESEA Rank Boosting">
                  <esea-rank-form></esea-rank-form>
              </b-tab-item>
              <b-tab-item label="ESEA Placement Matches">
                <esea-placement-form></esea-placement-form>
              </b-tab-item>
              <b-tab-item label="ESEA Test Game">
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