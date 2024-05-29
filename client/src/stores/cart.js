import { defineStore } from 'pinia'
import axios from "axios"
import Swal from "sweetalert2"

export const useCartStore = defineStore('cart', {
    state: () => ({
        baseUrl: "https://tokoapaaja.shelamdp.xyz",
        cartItems: [],
        price: 0
    }),
    getters: {

    },
    actions: {
        async addToCart(id) {
            try {
                let { data } = await axios({
                    url: this.baseUrl + "/cart/" + id,
                    method: "post",
                    headers: {
                        access_token: localStorage.access_token
                    }
                })
                Swal.fire(
                    'Succes!',
                    'Add to cart!',
                    'success'
                  )
            } catch (error) {
                Swal.fire(
                    'Oops...',
                    "Login first! Thank you.",
                    'error'
                  )
            }
        },

        async getAll() {
            try {
                let { data } = await axios({
                    url: this.baseUrl + "/cart/",
                    method: "get",
                    headers: {
                        access_token: localStorage.access_token
                    }
                })
                this.cartItems = data
                console.log(this.cartItems)
            } catch (error) {
                console.log(error)
            }
        },

        async totalPrice() {
            try {
                let { data } = await axios({
                    url: this.baseUrl + "/cart/price",
                    method: "get",
                    headers: {
                        access_token: localStorage.access_token
                    }
                })
                this.price = data.totalPrice

            } catch (error) {
                console.log(error)
            }
        },
        async destroy(id) {
            try {
                let { data } = await axios({
                    url: this.baseUrl + "/cart/" + id,
                    method: "delete",
                    headers: {
                        access_token: localStorage.access_token
                    }
                })
            this.getAll()
            this.totalPrice()
            } catch (error) {
                console.log(error)
            }
        }
    },

})