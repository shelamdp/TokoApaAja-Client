import { createApp, markRaw } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import vue3GoogleLogin from 'vue3-google-login';


const app = createApp(App)
const pinia = createPinia()
pinia.use(({ store }) => {
    store.router = markRaw(router)
})

app.use(vue3GoogleLogin, {
    clientId:
        '402188042847-sflsa1joe4nh1qp7m0is708rv1i029kp.apps.googleusercontent.com',
});
app.use(pinia)
app.use(router)

app.mount('#app')
