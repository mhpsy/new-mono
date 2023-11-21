import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import elementPlus from 'element-plus'
import 'element-plus/theme-chalk/index.css'
console.log(elementPlus);


const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(elementPlus)

app.mount('#app')
