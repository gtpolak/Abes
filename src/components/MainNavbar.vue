<template>
  <b-navbar centered class="has-background-black">
    <template #brand>
      <b-navbar-item
        class="has-text-white"
        tag="router-link"
        :to="{ name: 'Home' }"
      >
        AbesBooster
      </b-navbar-item>
    </template>
    <template #start>
      <b-navbar-item tag="router-link" :to="{name: 'FaceIt'}" class="has-text-white">
        FACEIT BOOST
      </b-navbar-item>
      <b-navbar-item href="#" class="has-text-white">
        RANK BOOST
      </b-navbar-item>
      <b-navbar-dropdown class="has-text-white" label="OTHER BOOSTS">
        <b-navbar-item>ESPORTAL BOOST</b-navbar-item>
        <b-navbar-item>ESEA BOOST</b-navbar-item>
      </b-navbar-dropdown>
    </template>
    <template #end>
      <b-navbar-dropdown class="has-text-white" label="Our Team" right>
        <b-navbar-item>
          <figure class="image is-64x64">
              <img src="https://www.steamsignature.com/status/default/76561198193456817.png" alt=""/>
          </figure>
        </b-navbar-item>
        <b-navbar-item>
          <a href="http://www.steamsignature.com/%22%3E">Steam signature</a>
        </b-navbar-item>
        <b-navbar-item>
          <a href="steam://friends/add/76561198193456817%22%3E">
            <img src="http://www.steamsignature.com/AddFriend.png" alt="Add Friend"/>
          </a>
        </b-navbar-item>
      </b-navbar-dropdown>
    </template>
  </b-navbar>
</template>

<style scoped>
.navbar-start > .navbar-item > a.navbar-link, .navbar-end > .navbar-item > a.navbar-link {
    color: white;
}   
</style>