<template>
    <div>
        <section class="has-background-black has-border-top-white">
            <main-navbar></main-navbar>
        </section>
        <section class="section has-text-white has-background-black has-border-top-white">
            What we offer and working hours.
        </section>
        <section class="section has-text-white has-background-black has-border-top-white">
            What you get: <br>
            1 - Blah <br>
            2- Blah <br>
            itd
        </section>
        <section class="section has-text-white has-background-black has-border-top-white">
            Why you should choose our services.
        </section>
        <section class="section has-text-white has-background-black has-border-top-white">
            Galeria
            <b-carousel :arrow="true" :autoplay="false">
                <b-carousel-item v-for="(img, index) in galleryImages" :key="index">
                    {{ img }}
                </b-carousel-item>
            </b-carousel>
        </section>
        <section class="section has-text-white has-background-black has-border-top-white">
            <footer>
                Stopka
            </footer>
        </section>
    </div>
</template>

<script>
import MainNavbar from '@/components/MainNavbar'

export default {
    components: {
        MainNavbar
    },

    data() {
        return {
            galleryImages: [1, 2, 3]
        }
    }    
}
</script>
<style>
.has-border-top-white {
    border-top: solid white 1px;
}
</style>
