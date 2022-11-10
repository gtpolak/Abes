<template>
  <div>
    <section>
      <main-navbar></main-navbar>
    </section>
    <section class="section has-background-black has-text-white has-text-center has-border-top-white is-size-4">
      <div class="columns py-4">
        <div class="column is-8 is-offset-2 has-text-left-mobile">
          <p class="is-size-3-desktop is-size-4-mobile">
            Esportal is a web-based competitive platform for the major esport titles, currently focusing on CS:GO.
            It aims to make gaming in a Matchmaking and tournament environment a more engaging experience, removing disruptive influences such
            as disconnects, cheaters and trolls. Esportal is the place where you can play great matches with the right type of opponents and teammates.
          </p>
          <div class="block"></div>
        </div>
      </div>
        
    </section>
    <section class="section has-background-black has-text-white">
      <div class="container">
        <div class="columns">
          <div class="column is-offset-2-desktop is-8-desktop is-12-mobile gradient-border-esportal">
            <b-tabs position="is-centered" expanded>
              <b-tab-item label="Esportal Rank Boosting" icon="chevron-triple-up">
                  <esportal-rank-form></esportal-rank-form>
              </b-tab-item>
              <b-tab-item label="Esportal Placement Matches" icon="handshake-outline">
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

<style>
.has-border-top-white {
  border-top: solid white 1px;
}

.gradient-border-esportal {
  border-width: 5px;
  border-style: solid;
  border-image: linear-gradient(to right, rgba(70, 245, 56, 1), rgba(224, 231, 49, 1)) 1;
}
</style>