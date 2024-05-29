<template>
    <div class="row mb-4 d-flex justify-content-between align-items-center">
        <div class="col-md-2 col-lg-2 col-xl-2">
            <img :src="item.productImg" class="img-fluid rounded-3" alt="Cotton T-shirt">
        </div>
        <div class="col-md-3 col-lg-3 col-xl-3">
            <h6 class="text-black mb-0">{{ item.productName }}</h6>
        </div>
        <div class="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
            <div class="price-container">
                <span class="currency">RP </span>
                <span class="price">{{ getPrice }}</span>
            </div>
        </div>
        <div class="col-md-1 col-lg-1 col-xl-1 text-end">
            <a href="#!" class="text-muted" @click.prevent="handleDestroy(item.id)">
                X<i class="fas fa-times"></i>
            </a>
        </div>
    </div>
</template>


<script>
import { useCartStore } from '../stores/cart'
import { mapActions } from 'pinia';
export default {
    props: ["item"],
    methods: {
        ...mapActions(useCartStore, ["destroy", "getAll"]),
        async handleDestroy(id) {
            this.destroy(id)
        }
    },
    computed: {
        getPrice() {
            return this.item.productPrice.toLocaleString('id-ID');
        }
    },
}
</script>

<style>
.price-container {
    display: flex;
    align-items: baseline;
}

.currency {
    margin-right: 2px;
}

.price {
    font-size: 18px;
}
</style>
