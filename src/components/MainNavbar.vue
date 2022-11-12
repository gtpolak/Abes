<template>
  <b-navbar type="is-black" centered spaced>
    <template #brand>
      <b-navbar-item
        tag="router-link"
        :to="{ name: 'Home' }"
      >
        <!-- <b-image :src="require('@/assets/pixel_boost.png')"></b-image> -->
        <span class="gradient-text is-size-4">PixelBoost</span>
      </b-navbar-item>
    </template>
    <template #start>
      <b-navbar-item tag="router-link" :to="{name: 'FaceIt'}">
        FACEIT Boost
      </b-navbar-item>
      <b-navbar-item tag="router-link" :to="{name: 'Rank'}">
        Rank Boost
      </b-navbar-item>
      <b-navbar-item tag="router-link" :to="{name: 'Esportal'}">
        Esportal Boost
      </b-navbar-item>
      <b-navbar-item tag="router-link" :to="{name: 'ESEA'}">
        ESEA Boost
      </b-navbar-item>
      <!-- <b-navbar-dropdown label="Other Boosts" hoverable>
        <b-navbar-item tag="router-link" :to="{name: 'Esportal'}">Esportal Boost</b-navbar-item>
        <b-navbar-item tag="router-link" :to="{name: 'ESEA'}">ESEA Boost</b-navbar-item>
      </b-navbar-dropdown> -->
    </template>
    <!-- <template #end>
      <b-navbar-item>
        <figure class="image is-32x32">
              <img src="https://www.steamsignature.com/status/default/76561198193456817.png" alt=""/>
        </figure>
      </b-navbar-item>
    </template> -->
  </b-navbar>
</template>

<style>
.gradient-text {
  background: linear-gradient(135deg, rgb(174, 42, 211), rgb(178, 78, 255), rgb(78, 22, 166));
  background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>