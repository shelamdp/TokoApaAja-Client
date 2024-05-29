import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Login from '../views/Login.vue';
import Register from '../views/Register.vue';
import Detail from "../views/Detail.vue"
import Cart from "../views/Cart.vue"
import Transactions from "../views/Transactions.vue"



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/detail/:id',
      name: 'detail',
      component: Detail
    },
    {
      path: '/cart',
      name: 'cart',
      component: Cart
    },
    {
      path: '/transactions',
      name: 'transactions',
      component: Transactions
    },
  ]
})

router.beforeEach((to, from, next) => {
  if ((to.name === 'login' || to.name === 'register') && localStorage.access_token) {
    next({ name: "home" })
  } else if ((to.name === 'login' || to.name === 'register' || to.name === 'home' || to.name === 'detail') && !localStorage.access_token) {
    next()
  } else if (to.name !== 'login' && !localStorage.access_token) {
    next({ name: "login" })
  } else {
    next()
  }
})


export default router
