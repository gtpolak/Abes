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
                  <esportal-rank-form></esportal-rank-form>
              </b-tab-item>
              <b-tab-item label="Esportal Placement Matches">
                <esportal-placement-form></esportal-placement-form>
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
import EsportalRankForm from "@/components/Esportal/EsportalRankForm"
import EsportalPlacementForm from "@/components/Esportal/EsportalPlacementForm"

export default {
  components: {
    "main-navbar": MainNavbar,
    "main-footer": MainFooter,
    "esportal-rank-form": EsportalRankForm,
    "esportal-placement-form": EsportalPlacementForm
  },
};
</script>