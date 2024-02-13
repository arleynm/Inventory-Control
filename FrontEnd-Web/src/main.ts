import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import router from './router';
import Sidebar from './components/SideBar.vue';
import './style.css';


const app = createApp(App);

app.component('Sidebar', Sidebar);

app.use(createPinia());
app.use(router);

app.mount('#app');