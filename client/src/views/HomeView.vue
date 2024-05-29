<template>
  <div class="container d-flex justify-content-center">

    <div class="row mt-5">
      <div class="input-group mb-5">
        <input type="search" class="form-control rounded" placeholder="Search Product . . ." aria-label="Search"
          aria-describedby="search-addon" v-model="searchKeyword" />
      </div>
      <CardVue v-for="product in filteredProducts" :key="product.id" :product="product" />
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'pinia';
import { useProductStore } from '../stores/product';
import CardVue from '../components/Card.vue';
export default {
  data() {
    return {
      searchKeyword: ''
    };
  },
  methods: {
    ...mapActions(useProductStore, ["getProduct"])
  },
  computed: {
    ...mapState(useProductStore, ["products"]),
    filteredProducts() {
      if (!this.searchKeyword) {
        return this.products
      }
      const keyword = this.searchKeyword.toLowerCase()
      return this.products.filter(product =>
        product.title.toLowerCase().includes(keyword)
      );
    }
  },
  created() {
    this.getProduct()
  },
  components: {
    CardVue
  }
}
</script>

<style></style>