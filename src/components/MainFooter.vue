<template>
    <footer class="section pb-0 has-background-black">
        <div class="columns">
            <div class="column is-4 has-text-white has-text-left">
                <div class="block">
                    <span class="is-size-3 gradient-text">
                        Pixel Boost
                    </span>
                </div>
                <div></div>
            </div>
            <div class="column is-2 has-text-left has-text-white">
                <div class="columns is-multiline">
                    <div class="column is-12 pb-0">
                        <h3 class="is-size-4 gradient-text">Boosters</h3> 
                    </div>
                    <div class="column is-12 py-1 pl-4">
                        <router-link class="has-text-white" :to="{name: 'FaceIt'}">Face It</router-link>
                    </div>
                    <div class="column is-12 py-1 pl-4">
                        <router-link class="has-text-white" :to="{name: 'Rank'}">Rank</router-link>
                    </div>
                    <div class="column is-12 py-1 pl-4">
                        <router-link class="has-text-white" :to="{name: 'Esportal'}">Esportal</router-link>
                    </div>
                    <div class="column is-12 py-1 pl-4">
                        <router-link class="has-text-white" :to="{name: 'ESEA'}">ESEA</router-link>
                    </div>
                </div>
            </div>
            <div class="column is-2 has-text-left has-text-white">
                <div class="columns is-multiline">
                    <div class="column is-12 pb-0">
                        <h3 class="is-size-4 gradient-text">Social</h3> 
                    </div>
                    <div class="column is-12 py-1 pl-4">
                        <a href="https://steamcommunity.com/id/plk2k/" class="has-text-white">Steam</a>
                    </div>
                    <div class="column is-12 py-1 pl-4">
                            <a href="https://discordapp.com/users/439923268905074699/" class="has-text-white">Discord</a>
                    </div>
                </div>
            </div>
            <div class="column has-text-left has-text-white">
                <div class="columns is-multiline">
                    <div class="column is-12 pb-0">
                        <h3 class="is-size-4 gradient-text">Contact</h3> 
                    </div>
                    <div class="column py-1 pl-4">
                        support@pixel-boost.com
                    </div>
                </div>
                <div class="pl-1">
                </div>
            </div>
        </div>
        <div class="columns">
            
        </div>
        <div class="columns gradient-text">
            <div class="column is-12">
                &copy; {{ year.toString() }} Pixel Boost 
            </div>
        </div>
    </footer>
</template>

<script>
export default {
    data() {
        return {
            year: "",
            discordLogo: require('@/assets/discord-mark-blue.png')
        }
    },
    
    created() {
        this.year = new Date().getFullYear();
    },
}
</script>

<style>
.gradient-text {
  background: linear-gradient(135deg, rgb(174, 42, 211), rgb(178, 78, 255), rgb(78, 22, 166));
  background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>