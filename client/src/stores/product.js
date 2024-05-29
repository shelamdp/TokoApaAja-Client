import { defineStore } from 'pinia'
import axios from "axios"
import Swal from "sweetalert2"

export const useProductStore = defineStore('product', {
    state: () => ({
        baseUrl: "https://tokoapaaja.shelamdp.xyz",
        products: [],
        detail: [],
        related: [],
        isLoading: false
    }),
    getters: {
    },
    actions: {
        async getProduct() {
            try {
                let {data} = await axios ({
                    url: this.baseUrl + "/product",
                    method: "get"
                })
                this.products = data
                // console.log(this.products)
            } catch (error) {
                console.log(error)
            }
        },

        async getDetail(id) {
            this.router.push(`/detail/${id}`)
            try {
                this.isLoading = true
                let {data} = await axios ({
                    url: this.baseUrl + "/product/" + id,
                    method: "get"
                })
                this.detail = data
                // console.log(this.detail)
            } catch (error) {
                console.log(error)
            } finally {
                this.isLoading = false
            }
        },

        async getRelated(id) {
            try {
                let {data} = await axios ({
                    url: this.baseUrl + "/product/limit",
                    method: "get"
                })
                this.related = data
            } catch (error) {
                console.log(error)
            }
        }
    },
  })