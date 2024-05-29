<script>
import { RouterLink, RouterView } from 'vue-router'
import NavbarVue from './components/Navbar.vue'
import Footer from './components/Footer.vue';
export default {
  components: {
    NavbarVue,
    Footer
  }
}
</script>

<template>
  <div>
    <NavbarVue/>
      <RouterView />
      <Footer/>
  </div>
</template>

<style>
</style>
