<template>
    <div class="not-found-container has-background-black">
        <main-navbar></main-navbar>
        <div class="not-found-wrapper has-background-black">
            <div class="columns is-vcentered full-height">
                <div class="column">
                    <h1 class="title is-1 has-text-white">Not found 404</h1>
                </div>
            </div>
        </div>
        <main-footer></main-footer>
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

}
</script>

<style>
.not-found-container {
    height: 100vh;
}

.not-found-wrapper {
    height: 60vh;
}

.full-height {
    height: 100%;
}
</style>