<template>
  <div class="Home">
    <div class="box text-center">
      <div class="bg">
          <h3>欢迎来品尝pizza！</h3>
          <h5>这里有各种各样好吃的pizza！</h5>
          <button class="btn btn-primary mt-1" @click="goMenu">Let's Order.</button>
      </div>
    </div>
    <h5 class="text-center">历史订单</h5>
    <my-history></my-history>
    <h4 class="text-center">快递信息</h4>
    <my-delivery></my-delivery>
    
  </div>
</template>

<script>
import Delivery from '@/components/about/Delivery'  
import History from '@/components/about/History'  
export default {
  name: 'Home',
  data () {
    return {
     
    }
  },
  methods: {
    goMenu(){
      this.$router.push('/menu')
    }
  },
  components:{
    'my-delivery':Delivery,
    'my-history':History
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .box{
    background:url('../../static/pizza.jpg');
    width:100%;
    height:700px;
    padding: 10%;
  }
  .bg{
    background:#bbb;
    opacity:0.8;
    width:500px;
    height:150px;
    margin:150px auto;
  }
  
  
</style>
