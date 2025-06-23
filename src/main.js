import './assets/main.css'
import { createApp } from 'vue'
import App from '@/components/icons/App.vue'
import { createPinia } from 'pinia'

const app =createApp(App);
app.use(createPinia());
createApp(App).mount('#app')
