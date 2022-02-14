import { createApp } from 'vue';
import App from './App.vue';
import VeeValidatePlugin from '@/plugins/VeeValidatePlugin.js';

const app = createApp(App);
app.use(VeeValidatePlugin);

app.mount('#app');
