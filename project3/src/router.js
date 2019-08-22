// ALL IMPORT IN FILE
import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from './view/Home.vue';

// PERFORMANCE

// ADD VUE ROUTER IN VUE JS
Vue.use(VueRouter);

// CONFIGRATION VUE ROUTER 
export const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            component: Home,
            name: 'home'
        }
    ]
});