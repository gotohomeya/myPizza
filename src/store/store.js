import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
// 注意：
//  state + getters +mutations +actions 都是固定的特有写法
//  menuItems、getMenuItems、setMenuItems等都是自定义写法。

export var store = new Vuex.Store({
  state:{//状态库/数据源
    // 表示当前的菜品数组
    menuItems:[],
    // 当前的用户名
    currentUser:null,
    // 当前的登陆状态
    isLogin:false
  },
  getters:{//派生状态的数据源
    // 最好不要直接去操作state里的值
    getMenuItems:state=>state.menuItems,
    currentUser:state=>state.currentUser,
    // isLogin:function(state){return state.isLogin}
    isLogin:state=>state.isLogin
  }, 
  mutations:{//更改Vuex中store的状态值state
    
    //通过set方法实现get请求数据后的更新
    setMenuItems(state,data){//state当前状态值，data表示从组件传递的参数
      state.menuItems=data
    },
    //通过push方法实现newPizza页面的post数据让当前数据发生更新
    pushMenuItems(state,data){
       state.menuItems.push(data)
    },
    //通过delete方法实现newMenu页面的删除数据功能
    deleteMenuItems(state,data){
      state.menuItems.forEach((item,index)=>{
        if(item==data){
           state.menuItems.splice(index,1) 
        }  
      })
    },
    UserStatus(state,data){
      if(data){
        state.currentUser=data
        state.isLogin=true
      }else{
        state.currentUser=null
        state.isLogin=false
      }
    }   
  },
  actions:{//触发多个state的操作，使用mutations会触发时更好维护，
    // 但如果mutations过多就需要用actions来触发了
    // 必须要通过dispatch进行分发
    setUser({commit},user){
      commit('UserStatus',user)
    } 
  }
})


// 逻辑思路：
// 当前vuex==>store配置好了之后，要考虑一件事，究竟在哪个组件用到了什么方法呢？

// 1.Menu 
// 实例1：items>axios.get()要发生方法：getters
// 实例2：items当发生改变的时候，要发生一个方法：setMenuItems=>更新items 
// 2.Admin

// 2.1NewPizza
// 实例1：当axios.post()会发生一个方法pushMenuItems

// 2.2NewMenu
// 实例1：items>axios.get()要发生方法：getters来触发数据的管理
// 实例2：当newPizza更新数据（push数据），newMenu实时更新，setMenuItems=>更新items 
// 实例3：当删除delete时，会触发第三个方法 deleteMenuItems  


// 3.Register
// 注册时这个信息直接发送给服务器可以跳过vuex

// 4.Login
// 设置两个状态值
// currentUser ==>当前的账号名
// isLogin ==>判断的登陆状态
// isLogin ==>true ==>渲染当前的current +[退出]到Header.vue内
// isLogin ==>false==>默认Header.vue的显示内容
