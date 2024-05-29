<template>
    <div>
        <section class="col-md-9 ms-sm-auto col-lg-10 px-md-4" id="product-section">
            <h2 class="mt-5 mb-3">Transactions Histroies</h2>
            <div class="d-flex justify-content-center align-items-center pt-3 pb-2 mb-3">
            </div>
            <div class="row">
                <div class="col-12 table-responsive ">
                    <table class="table align-middle rounded shadow">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Time</th>
                                <th scope="col" width="180px">Total Price</th>
                                <th scope="col" width="180px">Status</th>
                            </tr>
                        </thead>
                        <tbody id="table-product">
                            <TableRowVue v-for="(history, i) in histories" :key="history.id" :history="history" :i="i" />
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
        <section class="py-5 bg-light mt-5">
            <div class="container px-4 px-lg-5 mt-5">
                <h2 class="fw-bolder mb-4">Popular products</h2>
                <hr> <br>
                <div class="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                    <Card v-for="product in related" :key="product.id" :product="product" />
                </div>
            </div>
        </section>
    </div>
</template>

<script>
import TableRowVue from '../components/TableRow.vue'
import Card from '../components/Card.vue';
import { usePaymentStore } from '../stores/transaction'
import { useProductStore } from '../stores/product';
import { mapState, mapActions } from 'pinia';
export default {
    components: {
        TableRowVue,
        Card
    },
    methods: {
        ...mapActions(usePaymentStore, ["getHistory"]),
        ...mapActions(useProductStore, ["getRelated"]),
    },
    computed: {
        ...mapState(usePaymentStore, ["histories"]),
        ...mapState(useProductStore, ["related"])

    },
    created() {
        this.getHistory()
        this.getRelated()
    }

}
</script>

<style>
.table thead th {
    text-align: center;
}

.table td,
.table th {
    text-align: center;
}

.table-responsive {
    display: flex;
    justify-content: center;
    margin-bottom: 60px;
    /* Tinggi footer + margin tambahan */
}
</style>