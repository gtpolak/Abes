<template>
  <div>
    <section>
      <main-navbar></main-navbar>
    </section>
    <section class="section has-background-black has-text-white has-text-center has-border-top-white is-size-4">
      <div class="columns py-4">
        <div class="column is-8 is-offset-2 has-text-left-mobile">
          <p class="is-size-3-desktop is-size-4-mobile">
            Like an Elo rating in Chess, CS:GO competitive skill groups predict how well players will perform when playing against other players.
            The skill groups are arranged in ascending order from Silver I to The Global Elite.
          </p>
          <div class="block"></div>
          </div>
      </div>
    </section>
    <section class="section has-background-black has-text-white">
      <div class="container">
        <div class="columns">
          <div class="column is-offset-2-desktop is-8-desktop is-12-mobile gradient-border-rank">
            <b-tabs position="is-centered" expanded>
              <b-tab-item label="CSGO Rank Boosting" icon="chevron-triple-up">
                  <rank-boosting></rank-boosting>
              </b-tab-item>
              <b-tab-item label="CSGO Placement Matches" icon="handshake-outline">
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

<style>
.has-border-top-white {
  border-top: solid white 1px;
}

.gradient-border-rank {
  border-width: 5px;
  border-style: solid;
  border-image: linear-gradient(to right, rgba(22, 117, 166, 1), rgba(70, 245, 56, 1)) 1;
}
</style>