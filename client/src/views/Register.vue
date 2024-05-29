<template>
    <section id="section-register">
        <div class="container-md w-75 mt-5">
            <form @submit.prevent="register">
                <br />
                <h1
                    style="font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif">
                    Register</h1>
                <hr />
                <br />
                <!-- Username input -->
                <div class="form-outline mb-4">
                    <label class="form-label">Name</label>
                    <input type="text" class="form-control" placeholder="enter your username . . . " v-model="dataRegister.name"/>
                </div>

                <!-- Email input -->
                <div class="form-outline mb-4">
                    <label class="form-label">Email</label>
                    <input type="email" class="form-control" placeholder="enter your email address . . . "  v-model="dataRegister.email"/>
                </div>

                <!-- Password input -->
                <div class="form-outline mb-4">
                    <label class="form-label">Password</label>
                    <input type="password" class="form-control" placeholder="enter your password . . ."  v-model="dataRegister.password"/>
                </div>

                <!-- Phonenumber input -->
                <div class="form-outline mb-4">
                    <label class="form-label">Phone Number</label>
                    <input type="text" class="form-control" placeholder="enter your phone number(optional)"  v-model="dataRegister.phoneNumber"/>
                </div>

                <!-- Address input -->
                <div class="form-outline mb-4">
                    <label class="form-label">Address</label>
                    <input type="text" class="form-control" placeholder="enter your address(optional)"  v-model="dataRegister.address"/>
                </div>

                <!-- Submit button -->
                <button type="submit" class="btn btn-dark btn-block mb-4">Sign in</button>

                <!-- Register buttons -->
                <div class="text-center">
                    <p>Already have an account?<router-link  to="/login">Login</router-link> </p>
                    <p>or sign up with:</p>
                    <ButtonGoogleVue/>
                </div>
            </form>
        </div>
    </section>
</template>

<script>
import { mapWritableState, mapActions } from 'pinia';
import { useCustomerStore } from '../stores/customer';
import ButtonGoogleVue from '../components/ButtonGoogle.vue';
export default {
    components: {
        ButtonGoogleVue
    },
    computed: {
        ...mapWritableState(useCustomerStore, ["dataRegister"])
    },
    methods: {
        ...mapActions(useCustomerStore, ["register"])
    }
}
</script>

<style></style>