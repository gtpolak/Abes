<template>
  <div>
    <section class="has-background-black has-border-top-white">
      <main-navbar></main-navbar>
    </section>
    <section
      class="
        section
        is-flex
        has-text-white has-background-dark has-border-top-white
        top-min-height top-bg-image
      "
    >
      <div class="block"></div>
      <div class="columns is-multiline py-4 is-vcentered">
        <div
          class="
            column
            is-5 is-offset-1 is-size-2-desktop
            has-text-left
            is-size-3-mobile
            has-text-justified-mobile
            is-size-2-tablet
          "
        >
          Pixel Boost is a team of experienced players who provide the best
          services to raise your ratings in CS:GO.
        </div>
      </div>
      <div class="block"></div>
    </section>
    <section class="section has-text-white has-background-black">
      <div class="block"></div>

      <h1 class="title is-3 has-text-white">Our offer</h1>

      <div class="columns mt-1 is-multiline">
        <div class="column is-3">
          <div class="card gradient-bg-1 card-height">
            <div class="card-content has-text-white has-text-left">
              <p class="is-size-3">FACE IT Boost</p>
              <div class="block"></div>
              <div class="is-size-5">
                We offer Level and ELO boosting, up to 3000 ELO points (Level
                10) in both Solo and Duo mode.
              </div>
              <div class="has-text-centered mt-4">
                <!-- <b-button type="is-primary">Check FACE IT</b-button> -->
              </div>
            </div>
          </div>
        </div>
        <div class="column is-3">
          <div class="card gradient-bg-2 card-height">
            <div class="card-content has-text-white has-text-left">
              <p class="is-size-3">Rank Boost</p>
              <div class="block"></div>
              <div class="is-size-5">
                We offer Level and ELO boosting, up to 3000 ELO points (Level
                10) in both Solo and Duo mode.
              </div>
              <div class="has-text-centered mt-4">
                <!-- <b-button type="is-primary">Check FACE IT</b-button> -->
              </div>
            </div>
          </div>
        </div>
        <div class="column is-3">
          <div class="card gradient-bg-3 card-height">
            <div class="card-content has-text-white has-text-left">
              <p class="is-size-3">ESEA Boost</p>
              <div class="block"></div>
              <div class="is-size-5">
                ESEA Boosting is focused on leveling up your rank up to rank A
                in Solo or Duo mode.
              </div>
              <div class="has-text-centered mt-4">
                <!-- <b-button type="is-primary">Check ESEA</b-button> -->
              </div>
            </div>
          </div>
        </div>
        <div class="column is-3">
          <div class="card gradient-bg-4 card-height">
            <div class="card-content has-text-white has-text-left">
              <p class="is-size-3">ESPORTAL Boost</p>
              <div class="block"></div>
              <div class="is-size-5">
                In ESPORTAL Rank Boosting, we can upgrade your rank from Silver
                up to Pro in Solo or Duo mode. Additionaly, we offer placement
                matches (only Solo).
              </div>
              <div class="has-text-centered mt-4">
                <!-- <b-button type="is-primary">Check ESPORTAL</b-button> -->
              </div>
            </div>
          </div>
        </div>
        <div class="column is-1"></div>
      </div>
      <div class="block"></div>
    </section>
    <section class="section has-text-white has-background-black">
      <h1 class="title is-3 has-text-white">
        Why you should choose our services
      </h1>
      <hr />
      <div class="py-5"></div>
      <div class="columns is-multiline has-text-center is-mobile">
        <div class="column is-1-desktop is-2-mobile has-text-right">
          <b-icon size="is-medium" icon="flash"></b-icon>
        </div>
        <div class="column is-3-desktop is-10-mobile has-text-left">
          <h4 class="is-size-4">Fast delivery</h4>
          <div class="block"></div>
          <div class="block">
            We are gonna do the service as soon as possible.
          </div>
        </div>
        <div class="column is-1-desktop is-2-mobile has-text-right">
          <b-icon size="is-medium" icon="check-circle"></b-icon>
        </div>
        <div class="column is-3-desktop is-10-mobile has-text-left">
          <h4 class="is-size-4">Rank guaranteed</h4>
          <div class="block"></div>
          <div class="block">You are assured of getting the target rank.</div>
        </div>
        <div class="column is-1-desktop is-2-mobile has-text-right">
          <b-icon size="is-medium" icon="shield"></b-icon>
        </div>
        <div class="column is-3-desktop is-10-mobile has-text-left">
          <h4 class="is-size-4">No cheats</h4>
          <div class="block"></div>
          <div class="block">
            We do not use cheats, so you can be sure that you will not be
            banned.
          </div>
        </div>
      </div>
      <div class="block"></div>
    </section>
    <section class="section has-text-white has-background-black">
      <div class="block"></div>

      <h1 class="title is-3 has-text-white">Our skills</h1>

      <div class="block"></div>

      <div>
        <b-carousel
        :arrow="true"
        :autoplay="false"
        indicator-position="is-top"
        indicator-style="is-boxes"
        :overlay="galleryOverlay"
        @click="switchGallery"
      >
        <b-carousel-item v-for="(img, index) in galleryImages" :key="index">
          <div class="columns">
            <div class="column is-6 is-offset-3">
              <b-image :src="img.imgSrc" :alt="img.imgAlt" style="object-fit: cover;"></b-image>
            </div>
          </div>
        </b-carousel-item>
      </b-carousel>
      </div>
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
      galleryOverlay: false,
      galleryImages: [
        {
        
          imgSrc: require("@/assets/gallery_new_1.jpg"),
          imgAlt: "CS:GO player statistics - image 1"
        },
        {
          imgSrc: require("@/assets/gallery_new_2.jpg"),
          imgAlt: "CS:GO player statistics - image 2"
        },
        {
          imgSrc: require("@/assets/gallery_new_3.jpg"),
          imgAlt: "CS:GO player statistics - image 3"
        }
      ],
    };
  },

  methods: {
    switchGallery() {
            this.galleryOverlay = !this.galleryOverlay
            if (this.galleryOverlay) {
                document.documentElement.classList.add('is-clipped')
            } else {
                document.documentElement.classList.remove('is-clipped')
            }
        }
  }
};
</script>
<style>
.has-border-top-white {
  border-top: solid white 1px;
}

.top-min-height {
  min-height: 100px;
}

.top-bg-image {
  /* background: url("../assets/rain_background.jpg"); */
  /* background: url("../assets/split_background.jpg"); */
  background: url("../assets/wallpaper.jpg");
  /* background: url("../assets/wallpaper_orange.jpg"); */
  /* background: url("../assets/wallpaper_guys.png"); */
  background-size: cover;
  background-position: 50% 20%;
}

.gradient-bg-1 {
  background: rgb(211, 103, 246);
  background: linear-gradient(
    135deg,
    rgba(211, 103, 246, 1) 0%,
    rgba(22, 117, 166, 1) 100%
  );
}

.gradient-bg-2 {
  background: rgb(22, 117, 166);
  background: linear-gradient(
    135deg,
    rgba(22, 117, 166, 1) 0%,
    rgba(70, 245, 56, 1) 100%
  );
}

.gradient-bg-3 {
  background: rgb(70, 245, 56);
  background: linear-gradient(
    135deg,
    rgba(70, 245, 56, 1) 0%,
    rgba(224, 231, 49, 1) 100%
  );
}

.gradient-bg-4 {
  background: rgb(224, 231, 49);
  background: linear-gradient(
    135deg,
    rgba(224, 231, 49, 1) 0%,
    rgba(209, 112, 0, 1) 100%
  );
}

.card-height {
  min-height: 300px;
}
</style>
