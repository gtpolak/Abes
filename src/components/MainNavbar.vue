<template>
  <b-navbar type="is-black" centered spaced>
    <template #brand>
      <b-navbar-item
        tag="router-link"
        :to="{ name: 'Home' }"
      >
        AbesBooster
      </b-navbar-item>
    </template>
    <template #start>
      <b-navbar-item tag="router-link" :to="{name: 'FaceIt'}">
        FACEIT BOOST
      </b-navbar-item>
      <b-navbar-item tag="router-link" :to="{name: 'Rank'}">
        RANK BOOST
      </b-navbar-item>
      <b-navbar-dropdown label="OTHER BOOSTS" hoverable>
        <b-navbar-item>ESPORTAL BOOST</b-navbar-item>
        <b-navbar-item>ESEA BOOST</b-navbar-item>
      </b-navbar-dropdown>
    </template>
    <template #end>
      <b-navbar-item>
        <figure class="image is-32x32">
              <img src="https://www.steamsignature.com/status/default/76561198193456817.png" alt=""/>
        </figure>
      </b-navbar-item>
    </template>
  </b-navbar>
</template>