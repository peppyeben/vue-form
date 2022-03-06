import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// import '@/scss/style.scss'
// import '@/scss/_variables.scss'

const app = createApp(App)
app.use(router)
app.use(BootstrapIconsPlugin)
app.mount('#app')
