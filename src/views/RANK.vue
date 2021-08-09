<template>
  <div>
    <section>
      <main-navbar></main-navbar>
    </section>
    <section class="section">
        What is RANK Boosting? I have no idea
    </section>
    <section class="section">
      <div class="container">
        <div class="columns">
          <div class="column is-offset-1 is-10">
            <b-tabs type="is-boxed" position="is-centered" expanded>
              <b-tab-item label="CSGO Rank Boosting">
                  <rank-boosting></rank-boosting>
              </b-tab-item>
              <b-tab-item label="CSGO Placement Matches">
                  <placement-matches></placement-matches>
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
import RankBoosting from "@/components/RankBoosting"
import PlacementMatches from "@/components/PlacementMatches"

export default {
  components: {
    "main-navbar": MainNavbar,
    "main-footer": MainFooter,
    "rank-boosting": RankBoosting,
    "placement-matches": PlacementMatches
  },
};
</script>