import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'

// axios.defaults.baseURL = 'http://127.0.0.1:8000'
axios.defaults.baseURL = 'https://hobbycoding.shop'  // accessing real server address

createApp(App).use(store).use(router, axios).mount('#app')
