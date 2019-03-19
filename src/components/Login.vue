<template>
  <div class="Login text-center">
    <img src="../../static/logo.png" width="100" alt="">
    <h3>登录</h3>
    <form>
        <div class="form-group">
           
            <input type="email" v-model="username" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="请输入账号">
            
        </div>
        <div class="form-group">
            
            <input type="password" v-model="password" class="form-control" id="exampleInputPassword1" placeholder="请输入密码">
        </div>
        <button type="submit" class="btn btn-primary" @click.prevent="onSubmit">Login</button>
</form>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Login',
  data () {
    return {
      username:'',
      password:''
    }
  },
  methods: {
    onSubmit(){
      axios.get('./use-wl.json')
      .then((res)=>{
        // console.log(res.data)
        var result=[]
        for(var key in res.data){
            var user=res.data[key]
            result.push(user)
        }
        console.log(result)

        var trueUser=result.filter((user)=>{
          return user.username===this.username && user.password===this.password
        })
        console.log(trueUser)
        if(trueUser!= null && trueUser.length>0){
          alert('登陆成功')
          this.$store.dispatch('setUser',trueUser[0].username) 
          sessionStorage.setItem('user',trueUser[0].username) 
          this.$router.push('/admin')
        }else{
          alert('账号或密码错误')
          this.$store.dispatch('setUser',null)  
        }

      })
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .Login{
    width:500px;
    margin:0 auto;
  }
  .btn{
    width:500px;
  }
</style>
