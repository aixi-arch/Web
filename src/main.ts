import { computed, createApp,ref } from 'vue'
// import { } from 'vue-tsc'
import App from './App.vue'
import { createPinia } from 'pinia'
import router from './router/router'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap'
import 'bootstrap-icons/font/bootstrap-icons.css'
import '@/assets/font-awesome-4.7.0/css/font-awesome.css'
import '@/assets/style.css'



createApp(App).use(router).use(createPinia()).mount('#app')
