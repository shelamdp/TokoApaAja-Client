<template>
        <section class="h-100 h-custom" style="background-color: #F5F1EE;">
            <div class="container py-5 h-100">
                <div class="row d-flex justify-content-center align-items-center h-100">
                    <div class="col-12">
                        <div class="card card-registration card-registration-2 shadow" style="border-radius: 15px;">
                            <div class="card-body p-0" style="overflow-y: auto;">
                                <div class="row g-0">
                                    <div class="col-lg-8">
                                        <div class="p-5">
                                            <div class="d-flex justify-content-between align-items-center mb-5">
                                                <h1 class="fw-bold mb-0 text-black">Shopping Cart</h1>
                                                <h6 class="mb-0 text-muted">{{cartItems.length}} items</h6>
                                            </div>
                                            <hr class="my-4">

                                            <!-- cart -->
                                            <CartProductVue v-for="item in cartItems" :key="item.id" :item="item"/>

                                            <hr class="my-4">

                                            <div class="pt-5">
                                                <h6 class="mb-0"><router-link to="/" href="#!" class="text-body"><i
                                                            class="fas fa-long-arrow-alt-left me-2"></i>Back to shop</router-link>
                                                </h6>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-4 bg-grey">
                                        <div class="p-5">
                                            <h3 class="fw-bold mb-5 mt-2 pt-1">Summary</h3>
                                            <hr class="my-4">

                                            <div class="d-flex justify-content-between mb-4">
                                                <h5 class="text-uppercase">{{ cartItems.length }} items</h5>
                                                <h5>RP {{getPrice}}</h5>
                                            </div>

                                            <h5 class="text-uppercase mb-3">Shipping</h5>

                                            <div class="mb-4 pb-2">
                                                <select class="select">
                                                    <option value="1">Standard-Delivery- FREE</option>
                                                    <option value="2">Save-On-Delivery -FREE</option>
                                                </select>
                                            </div>

                                            <h5 class="text-uppercase mb-3">Give code</h5>

                                            <div class="mb-5">
                                                <div class="form-outline">
                                                    <input type="text" id="form3Examplea2"
                                                        class="form-control form-control-lg" />
                                                    <label class="form-label" for="form3Examplea2">Enter your code</label>
                                                </div>
                                            </div>

                                            <hr class="my-4">

                                            <div class="d-flex justify-content-between mb-5">
                                                <h5 class="text-uppercase">Total</h5>
                                                <h5>RP {{getPrice}}</h5>
                                            </div>

                                            <button type="button" class="btn btn-dark btn-block btn-lg"
                                                data-mdb-ripple-color="dark" @click.prevent="checkout">Checkout</button>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
</template>

<script>
import CartProductVue from '../components/CartProduct.vue'
import { useCartStore } from '../stores/cart'
import { usePaymentStore } from '../stores/transaction'
import { mapActions, mapState } from 'pinia';
import FooterVue from '../components/Footer.vue';
export default {
    components: {
        CartProductVue,
        FooterVue
    },
    methods: {
        ...mapActions(useCartStore, ["getAll", "totalPrice"]),
        ...mapActions(usePaymentStore, ["checkout"])
    }, 
    computed: {
        ...mapState(useCartStore, ["cartItems", "price"]),
        getPrice() {
            return this.price.toLocaleString('id-ID');
        }
    },
    created() {
        this.getAll()
        this.totalPrice()
    }
}
</script>

<style>

.card {
width: unset;
}

.card-registration .select-input.form-control[readonly]:not([disabled]) {
    font-size: 1rem;
    line-height: 2.15;
    padding-left: .75em;
    padding-right: .75em;
}

.card-registration .select-arrow {
    top: 13px;
}

.col-12 {
    flex: 0 0 auto;
    width: 80%;
}

.bg-grey {
    background-color: #F5F1EE;
}

@media (min-width: 992px) {
    .card-registration-2 .bg-grey {
        border-top-right-radius: 16px;
        border-bottom-right-radius: 16px;
    }
}

@media (max-width: 991px) {
    .card-registration-2 .bg-grey {
        border-bottom-left-radius: 16px;
        border-bottom-right-radius: 16px;
    }
}
</style>