<template>
    <div>
        <section>
            <main-navbar></main-navbar>
        </section>
        <section class="section">
            <b-tabs type="is-toggle" position="is-centered" expanded>
                <b-tab-item label="FACEIT Level Boost">
                    <faceit-level-form></faceit-level-form>
                </b-tab-item>
                <b-tab-item label="FACEIT ELO Boost"></b-tab-item>
                <b-tab-item label="FACEIT Test Game"></b-tab-item>
            </b-tabs>
        </section>
    </div>

</template>

<script>
import MainNavbar from '@/components/MainNavbar'
import FACEITLevelForm from "@/components/FACEITLevelForm"

export default {
    components: {
        MainNavbar,
        "faceit-level-form": FACEITLevelForm
    }    
}
</script>