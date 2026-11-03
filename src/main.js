import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index.js'
import reveal from './directives/reveal'
import './style.css'

const app = createApp(App)
app.use(router)
app.directive('reveal', reveal)
app.mount('#app')
