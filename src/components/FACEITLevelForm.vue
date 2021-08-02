<template>
    <div class="container">
        <b-field position="is-centered">
            <b-radio-button v-model="soloDuoType" native-value="solo" size="is-medium">
                <b-icon icon="account"></b-icon> 
                Solo
            </b-radio-button>
            <b-radio-button v-model="soloDuoType" native-value="duo" size="is-medium">
                <b-icon icon="account-multiple"></b-icon>     
                Duo
            </b-radio-button>
        </b-field>
    </div>
</template>

<script>
export default {
    data() {
        return {
            soloDuoType: ''
        }
    }
}
</script>