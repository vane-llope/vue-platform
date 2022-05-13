import { createApp } from 'vue'
import "bootstrap/dist/css/bootstrap.css"
import App from './App.vue'
import router from './router'
import store from './store/index.js'

import './assets/main.css'

createApp(App).use(router).use(store).mount('#app')
import "bootstrap/dist/js/bootstrap.js"
