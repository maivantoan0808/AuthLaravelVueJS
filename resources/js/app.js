import 'es6-promise/auto'
import axios from 'axios'
import './bootstrap'
import Vue from 'vue'
import VueRouter from 'vue-router'
import { routes }  from './index';
import VueAuth from '@websanova/vue-auth'
import VueAxios from 'vue-axios'
import auth from './auth'

// Set Vue globally
window.Vue = Vue

// Set Vue router
Vue.use(VueRouter)

const router = new VueRouter({
    mode: 'history',
    routes
})
Vue.router=router

// Set Vue authentication
Vue.use(VueAxios, axios)
axios.defaults.baseURL = `${process.env.MIX_APP_URL}/api`
Vue.use(VueAuth, auth)

const app = new Vue({
    el: '#app',
    router
});
