// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
Vue.config.productionTip = false
import axios from 'axios'
import {store} from './store/store'
axios.defaults.baseURL = "https://wd9536568346rrplrm.wilddogio.com/"
Vue.config.productionTip = false
//全局守卫
//当我刚进入localhost:8080的时候，让当前的页面跳转到对应的登录注册页
// router.beforeEach((to,from,next)=>{
//     if(sessionStorage.user){//已登陆
//        next()
//     }else{//未登陆状态
//       if(to.path=='/login' || to.path=='/register'){
//         next()
//       }else{
//         alert('对不起，你还没登陆，即将跳转登录页。。。。')
//         next('/login')
//       }
//     }
// })
/* eslint-disable no-new */
new Vue({
    el: '#app',
    components: { App },
    router,
    store,
    template: '<App/>'
})