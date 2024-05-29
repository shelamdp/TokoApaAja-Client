<script >
import { mapActions } from 'pinia';
import { useCustomerStore } from '../stores/customer';
export default {
    data() {
        return {
            log: '',
        }
    },
    methods: {
        ...mapActions(useCustomerStore, ["loginGoogle"]),
    callback(response) {
        this.loginGoogle(response)
    },
}

}
</script>

<template>
    <GoogleLogin :callback="callback" class="mt-5 mb-5"/>
</template>