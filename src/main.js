// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
Vue.config.productionTip = false
import axios from 'axios'
axios.defaults.baseURL = "https://wd9536568346rrplrm.wilddogio.com/"

/* eslint-disable no-new */
new Vue({
    el: '#app',
    components: { App },
    router,
    template: '<App/>'
})