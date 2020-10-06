import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Axios from 'axios'

const app = createApp(App)
app.use(store)
app.use(router)
app.mount('#app')
const token = sessionStorage.getItem('token')
if (token) {
  // eslint-disable-next-line dot-notation
  Axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
}
