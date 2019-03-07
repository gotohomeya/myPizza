<template>
  <div class="Register text-center">
    <img src="../../static/logo.png" width="100" alt="">
    <h3>注册</h3>
    <form>
        <div class="form-group">
           
            <input type="email" v-model="username" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="请输入账号">
            
        </div>
        <div class="form-group">
            
            <input type="password" v-model="password" class="form-control" id="exampleInputPassword1" placeholder="请输入密码">
        </div>
        <div class="form-group">
            
            <input type="password" v-model="repassword" class="form-control" id="exampleInputPassword2" placeholder="请再次输入密码">
        </div>
        <div class="form-check">
            <input type="checkbox" class="form-check-input" id="exampleCheck1"> Remember me
           
        </div>
        <button type="submit" class="btn btn-primary" @click.prevent="onSubmit">Sign Up</button>
</form>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Register',
  data () {
    return {
      username:'',
      password:'',
      repassword:''
    }
  },
  methods: {
    onSubmit(){
      //判断两次密码是否一样
      if(this.password===this.repassword){
          var user={
            username:this.username,
            password:this.password
          }
          axios.post('./use-wl.json',user)
          .then(res=>{
            console.log('当前数据抛出成功')
            // 当注册成功时跳转到登录页，引导用户登陆
            // 两种方法实现跳转
            // 堆栈法
            // this.$router.push('/login')
            // 替代法
            this.$router.replace('/login')
          })
      }
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.Register{
  width:500px;
  margin:0 auto;
}
input{
  width:500px;
}
.btn{
  width:500px;
}
</style>
