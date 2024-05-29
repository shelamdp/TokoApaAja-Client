<template>
    <section id="section-login">
        <div class="container-md w-75 mt-5">
            <form @submit.prevent="login">
                <br />
                <h1
                    style="font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif">
                    Login</h1>
                <hr />
                <br />
                <!-- Email input -->
                <div class="form-outline mb-4">
                    <label class="form-label">Email address</label>
                    <input type="email" class="form-control" placeholder="enter your email address . . . "   v-model="dataLogin.email" />
                </div>

                <!-- Password input -->
                <div class="form-outline mb-4">
                    <label class="form-label">Password</label>
                    <input type="password" class="form-control" placeholder="enter your password . . ." v-model="dataLogin.password" />
                </div>

                <!-- Submit button -->
                <button type="submit" class="btn btn-dark btn-block mb-4">Sign in</button>

                <!-- Register buttons -->
                <div class="text-center">
                    <p>Not a member? <router-link  to="/register">Register</router-link></p>
                    <p>or sign up with:</p>
                    <ButtonGoogle/>
                </div>
            </form>
        </div>
    </section>
</template>

<script>
import { mapWritableState, mapActions } from 'pinia'
import {useCustomerStore} from "../stores/customer"
import ButtonGoogle from '../components/ButtonGoogle.vue';
export default {
    components: {
        ButtonGoogle
    },
    computed: {
    ...mapWritableState(useCustomerStore, ['dataLogin'])
  },
  methods: {
    ...mapActions(useCustomerStore, ["login"])
  }
}
</script>

<style></style>