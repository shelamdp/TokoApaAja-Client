<template>
    <div class="col-sm-3 mb-5">
        <div class="card">
            <img :src="product.image" class="card-img-top" style="width: 300px; height: 250px;">
            <div class="card-body pt-0 px-0">
                <div class="d-flex flex-row justify-content-between mb-0 px-3">
                    <small class="text-muted mt-1">BUY NOW ONLY</small>
                    <h6>RP {{ getPrice }}</h6>
                </div>
                <hr class="mt-2 mx-3">
                <div class="d-flex flex-row justify-content-between px-3 pb-4">
                    <div class="d-flex flex-column"><span class="text-muted card-title">{{ product.title }}</span></div>
                    <div class="d-flex flex-column">
                    </div>
                </div>
                <div class="d-flex flex-row justify-content-between p-3 mid">
                    <div class="d-flex flex-column"><small class="text-muted mb-1">CLICK HERE</small>
                        <div class="d-flex flex-row"><button type="button" class="btn btn-dark btn-block"
                                @click.prevent="handleAdd(product.id)"><small>ADD TO CART</small></button>
                        </div>
                    </div>
                </div>
                <small @click.prevent="handleDetail(product.id)" class="d-flex justify-content-center mt-2 ml-1">FOR MORE
                    INFORMATION</small>
            </div>
        </div>
    </div>
</template>

<script>
import { useCartStore } from '../stores/cart';
import { mapActions } from 'pinia';
export default {
    props: ["product"],
    methods: {
        ...mapActions(useCartStore, ["addToCart"]),
        async handleDetail(id) {
            this.$router.push(`/detail/${id}`)
        },
        async handleAdd(id) {
            this.addToCart(id)
        },
        adjustCardHeight() {
            const cardTitles = document.getElementsByClassName('card-title');
            for (let i = 0; i < cardTitles.length; i++) {
                const cardTitle = cardTitles[i];
                const cardBody = cardTitle.parentElement.parentElement.parentElement;
                const cardHeight = cardBody.clientHeight;
                const titleHeight = cardTitle.clientHeight;
                if (titleHeight > cardHeight) {
                    cardTitle.style.height = `${cardHeight}px`;
                }
            }
        },
    },
    computed: {
        getPrice() {
            return this.product.price.toLocaleString('id-ID');
        }
    },
    created() {
        this.adjustCardHeight()
    }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@500&display=swap');

body {
    background: #F5F1EE;
    font-family: 'Roboto', sans-serif;
}

.card {
    width: 250px;
    border-radius: 10px;
}

.card-title {
    height: 50px;
    overflow: hidden;
}

.card-img-top {
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
}

span.text-muted {
    font-size: 18px;
}

small.text-muted {
    font-size: 11px;
}

h5.mb-0 {
    font-size: 2rem;
}

small.ghj {
    font-size: 10px;
}

.mid {
    background: #ECEDF1;
}

h6.ml-1 {
    font-size: 15px;
}

small.key {
    text-decoration: underline;
    font-size: 10px;
    cursor: pointer;
}

.btn-primary {
    color: white;
}

.btn-primary:focus {
    box-shadow: none;
}

small.justify-content-center {
    font-size: 10px;
    cursor: pointer;
    text-decoration: underline;
}

@media screen and (max-width:600px) {
    .col-sm-4 {
        margin-bottom: 50px;
    }
}
</style>