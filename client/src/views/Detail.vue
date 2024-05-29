<template>
    <!DOCTYPE html>
    <html lang="en">
        <Loader v-if="isLoading"/>
    <body v-else>
        <!-- Product section-->
        <section class="py-5">
            <div class="container px-4 px-lg-5 my-5">
                <div class="row gx-4 gx-lg-5 align-items-center">
                    <div class="col-md-6"><img class="card-img-top mb-5 mb-md-0 rounded"
                            :src="detail.image" alt="..." /></div>
                    <div class="col-md-6">
                        <div class="small mb-1">SKU: BST-498</div>
                        <h1 class="display-5 fw-bolder">{{detail.name}}</h1>
                        <div class="fs-5 mb-5">
                            <span class="text-decoration-line-through">RP 10.000.000</span>
                            <span> RP {{ getPrice }}</span>
                        </div>
                        <p class="lead">{{ detail.description }}</p>
                        <div class="d-flex">
                            <button class="btn btn-outline-dark flex-shrink-0" type="button" @click.prevent="handleAdd(detail.id)">
                                <i class="bi-cart-fill me-1"></i>
                                Add to cart
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- Related items section-->
        <section class="py-5 bg-light">
            <div class="container px-4 px-lg-5 mt-5">
                <h2 class="fw-bolder mb-4">Popular products</h2> <hr> <br>
                <div class="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                    <Card v-for="product in related" :key="product.id" :product="product"/>
                </div>
            </div>
        </section>
        <!-- Footer-->

</body>

</html></template>

<script>
import Card from '../components/Card.vue';
import Loader from '../components/Loader.vue';
import { useProductStore } from '../stores/product';
import { mapActions, mapState } from 'pinia';
import { useCartStore } from '../stores/cart';
export default {
components: {
    Card,
    Loader
},
computed: {
    ...mapState(useProductStore, ["detail", "related", "isLoading"]),
    getPrice() {
            return this.detail.price.toLocaleString('id-ID');
        }
},
methods: {
    ...mapActions(useProductStore, ["getDetail", "getRelated"]),
    ...mapActions(useCartStore, ["addToCart"]),
    async handleAdd(id) {
        this.addToCart(id)
    }
},
created() {
    this.getDetail(this.$route.params.id)
    this.getRelated()
}
} 
</script>

<style></style>