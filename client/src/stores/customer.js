import { defineStore } from 'pinia'
import axios from "axios"
import Swal from "sweetalert2"

export const useCustomerStore = defineStore('customer', {
  state: () => ({
    baseUrl: "https://tokoapaaja.shelamdp.xyz",
    dataLogin: {
      email: "",
      password: ""
    },
    dataRegister: {
      name: "",
      email: "",
      password: "",
      phoneNumber: "",
      address: ""
    }
  }),
  getters: {

  },
  actions: {
    async login() {
      try {
        let { data } = await axios({
          url: this.baseUrl + "/login",
          method: "post",
          data: this.dataLogin
        })
        localStorage.access_token = data.access_token
        this.router.push("/")
      } catch (error) {
        Swal.fire(
          'Oops...',
          error.response.data.message,
          'error'
        )

      }
    },

    async register(data) {
      try {
        let res = await axios({
          url: this.baseUrl + "/register",
          method: "post",
          data: this.dataRegister
        })
        this.router.push("/cust/login")
      } catch (error) {
        Swal.fire(
          'Oops...',
          error.response.data.message,
          'error'
        )
      }
    },

    async logout() {
      try {
        localStorage.clear()
        this.router.push("/login")
      } catch (error) {
        console.log(error)
      }
    },

    async loginGoogle(response) {
      try {
        let { data } = await axios({
          url: this.baseUrl + "/auth/google-sign-in",
          method: "post",
          headers: {
            google_token: response.credential
          }
        })
        localStorage.access_token = data.access_token
        // console.log(res)
        this.router.push("/")
      } catch (error) {
        Swal.fire(
          'Oops...',
          error.response.data.message,
          'error'
        )
      }
    },

  },
})
