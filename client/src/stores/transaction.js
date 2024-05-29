import { defineStore } from 'pinia'
import axios from "axios"
import Swal from "sweetalert2"

export const usePaymentStore = defineStore('payment', {
    state: () => ({
        baseUrl: "https://tokoapaaja.shelamdp.xyz",
        histories: [],
    }),
    getters: {

    },
    actions: {
        async handleCheckout() {
            try {
                let {data} = await axios ({
                    url: this.baseUrl + "/cart/bulkDestroy",
                    method: "delete",
                    headers: {
                        access_token: localStorage.access_token
                    }
                })
                this.router.push("/")
            } catch (error) {
                console.log(error)
            }
        },

        async checkout() {
            try {
                const { data } = await axios({
                    url: this.baseUrl + "/payment/token",
                    method: "post",
                    headers: {
                        access_token: localStorage.access_token
                    }
                })

                const callback = this.handleCheckout
                window.snap.pay(data.token, {
                    onSuccess: function (result) {
                        callback()
                    }
                })
            } catch (error) {
                console.log(error)
            }
        },

        async getHistory() {
            try {
                const {data} = await axios ({
                    url: this.baseUrl + "/payment/history",
                    method: "get",
                    headers: {
                        access_token: localStorage.access_token
                    }
                })
                this.histories = data
            } catch (error) {
                console.log(error)
            }
        }

    },
})