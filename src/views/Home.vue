<template>
  <div>
    <section class="has-background-black has-border-top-white">
      <main-navbar></main-navbar>
    </section>
    <section
      class="section has-text-white has-background-dark has-border-top-white"
    >
        <div class="block"></div>
      <div class="columns is-multiline">
        <div class="column is-6 is-offset-3">
          Pixel Boost is a team of experienced players who provide the best
          services for raise your ratings in CS:GO.
        </div>
      </div>
        <div class="block"></div>

    </section>
    <section
      class="section has-text-white has-background-black"
    >
        <div class="block"></div>

      <h1 class="title is-2">Our offers</h1>
      <div class="columns mt-1">
        <div class="column is-1"></div>
        <div class="column">
          <div class="card">
            <header class="card-header">
              <div
                class="
                  card-header-title
                  is-centered
                  has-background-dark has-text-primary
                "
              >
                FACE IT Boost
              </div>
            </header>
            <div class="card-content has-background-dark has-text-white">
              We offer Level and ELO boosting, up to 3000 ELO points (Level 10)
              in both Solo and Duo mode.
              <div class="has-text-centered mt-4">
                <b-button type="is-primary">Check FACE IT</b-button>
              </div>
            </div>
          </div>
        </div>
        <div class="column">
          <div class="card">
            <header class="card-header">
              <p
                class="
                  card-header-title
                  is-centered
                  has-background-dark has-text-primary
                "
              >
                ESEA Boost
              </p>
            </header>
            <div class="card-content has-background-dark has-text-white">
              ESEA Boosting is focused on leveling up your rank up to rank A in
              Solo or Duo mode.
              <div class="has-text-centered mt-4">
                <b-button type="is-primary">Check ESEA</b-button>
              </div>
            </div>
          </div>
        </div>
        <div class="column">
          <div class="card">
            <header class="card-header">
              <p
                class="
                  card-header-title
                  is-centered
                  has-background-dark has-text-primary
                "
              >
                ESPORTAL Boost
              </p>
            </header>
            <div class="card-content has-background-dark has-text-white">
              In ESPORTAL Rank Boosting, we can upgrade your rank from Silver up
              to Pro in Solo or Duo mode. Additionaly, we offer placement
              matches (only Solo).
              <div class="has-text-centered mt-4">
                <b-button type="is-primary">Check ESPORTAL</b-button>
              </div>
            </div>
          </div>
        </div>
        <div class="column is-1"></div>
      </div>
        <div class="block"></div>
    </section>
    <section
      class="section has-text-white has-background-dark"
    >
        <div class="block"></div>

      Why you should choose our services.
        <div class="block"></div>
    </section>
    <section
      class="section has-text-white has-background-black"
    >
        <div class="block"></div>

      Galeria
      <b-carousel :arrow="true" :autoplay="false">
        <b-carousel-item v-for="(img, index) in galleryImages" :key="index">
          {{ img }}
        </b-carousel-item>
      </b-carousel>
        <div class="block"></div>
    </section>
    <section class="has-border-top-white">
      <main-footer></main-footer>
    </section>
  </div>
</template>

<script>
import MainNavbar from "@/components/MainNavbar";
import MainFooter from "@/components/MainFooter";

export default {
  components: {
    MainNavbar,
    MainFooter,
  },

  data() {
    return {
      galleryImages: [1, 2, 3],
    };
  },
};
</script>
<style>
.has-border-top-white {
  border-top: solid white 1px;
}
</style>
