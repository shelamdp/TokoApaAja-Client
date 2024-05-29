<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light shadow" style="background-color: #C2DEDC;">
        <!-- Container wrapper -->
        <div class="container-fluid">
            <!-- Toggle button -->
            <button class="navbar-toggler" type="button" data-mdb-toggle="collapse"
                data-mdb-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
                <i class="fas fa-bars"></i>
            </button>

            <!-- Collapsible wrapper -->
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <!-- Navbar brand -->
                <router-link to="/" class="navbar-brand mt-2 mt-lg-0" href="">
                    <img src="../assets/tokoapaaja-low-resolution-logo-color-on-transparent-background.png" height="30"
                        alt="Toko Apa Aja" loading="lazy" />
                </router-link>
                <!-- Left links -->
                <ul class="navbar-nav me-auto mb-2 mt-2 ms-3 me-2">
                    <router-link to="/cart" class="navbar-brand mt-2 mt-lg-0 mb-2 ms-2 me-2" href=""
                        v-if="currentPage !== 'login' && currentPage !== 'register'">
                        <img src="../assets/cart.png" height="30" alt="Cart" loading="lazy" /> Cart
                    </router-link>
                    <router-link to="/transactions" class="navbar-brand  mt-2 mt-lg-0 mb-2 ms-4 me-2" href=""
                        v-if="currentPage !== 'login' && currentPage !== 'register'">
                        <img src="../assets/transactions.png" height="25" alt="Transactions" loading="lazy" /> Transactions
                    </router-link>
                </ul>
                <!-- Left links -->
            </div>
            <!-- Collapsible wrapper -->

            <!-- Right elements -->
            <div class="d-flex align-items-center" v-if="currentPage !== 'login' && currentPage !== 'register'">
                <div>
                    <a class="nav-link" href="" @click.prevent="logout">
                        <img src="../assets/logout.png" height="30" alt="Logout" loading="lazy" />
                        Logout</a>
                </div>
            </div>
            <!-- Right elements -->
        </div>
        <!-- Container wrapper -->
    </nav>
</template>

<script>
import { mapActions } from 'pinia';
import { useCustomerStore } from "../stores/customer"
export default {
    computed: {
        currentPage() {
            return this.$route.name
        },
    },
    methods: {
        ...mapActions(useCustomerStore, ["logout"]),
    },

}
</script>

<style></style>