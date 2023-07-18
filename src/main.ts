import { createApp } from 'vue'
import PrimeVue from 'primevue/config';
import "primevue/resources/themes/lara-light-blue/theme.css";
import "primevue/resources/primevue.min.css";
import './style.css'
import App from './App.vue'

console.log(PrimeVue);


createApp(App)
.use(PrimeVue)
.mount('#app')

