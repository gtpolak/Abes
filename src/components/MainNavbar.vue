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
          <div class="media">
            <figure class="media-left">
              <p class="image is-64x64">
                <img
                  src="https://bulma.io/images/placeholders/128x128.png"
                  alt=""
                />
              </p>
            </figure>
            <div class="media-content">
              <div class="content">
                <p>gtpolak</p>
              </div>
            </div>
          </div>
        </b-navbar-item>
        <b-navbar-item>
          <div class="media">
            <figure class="media-left">
              <p class="image is-64x64">
                <img
                  src="https://bulma.io/images/placeholders/128x128.png"
                  alt=""
                />
              </p>
            </figure>
            <div class="media-content">
              <div class="content">
                <p>gtpolak2</p>
              </div>
            </div>
          </div>
        </b-navbar-item>
        <b-navbar-item>
          <div class="media">
            <figure class="media-left">
              <p class="image is-64x64">
                <img
                  src="https://bulma.io/images/placeholders/128x128.png"
                  alt=""
                />
              </p>
            </figure>
            <div class="media-content">
              <div class="content">
                <p>gtpolak3</p>
              </div>
            </div>
          </div>
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