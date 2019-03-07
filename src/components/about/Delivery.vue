<template>
  <div class="Delivery row">
     <div v-for="(item,index) in items" :key="index" class="col-4"> 
    <div class="card">
        <img class="card-img-top" :src="item.imgSrc" alt="Card image cap">
        <div class="card-body">
          <h4 class="card-title">{{item.title}}</h4>
          <p class="card-text text-success">{{item.text}}</p>
        </div>
    </div>
    <button class="btn btn-primary mt-2" @click="alert">订单详情</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Delivery',
  data () {
    return {
      items:[
         {imgSrc:'../../../static/del-sf.png',title:'顺丰快递',text:'您的快递已经发送到河北张家口'},
         {imgSrc:'../../../static/del-yt.jpg',title:'圆通快递',text:'您的快递已经发送到山东青岛'},
         {imgSrc:'../../../static/del-zt.jpg',title:'中通快递',text:'您的快递已经发送到河南洛阳'},
       ]
    }
  },
   methods:{
      alert(){
         alert('快递小哥正在快马加鞭的路上')
      }
     
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
 img{
    width:100%;
     height:200px;
   } 
</style>
