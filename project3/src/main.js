// ASSETS
import './assets/sass/style.scss';
import Vue from 'vue';
import App from './App.vue';
import { router } from './router';

// RENDER
new Vue({
    router,
    render: h => h(App)
}).$mount('#app');

