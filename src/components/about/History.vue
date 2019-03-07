<template>
  <div class="History row">
    <div v-for="(item,index) in items" :key="index" class="col-4"> 
    <div class="card">
        <img class="card-img-top" :src="item.imgSrc" alt="Card image cap">
        <div class="card-body">
          <h4 class="card-title">{{item.title}}*{{item.num}}</h4>
          <p class="card-text text-success">{{item.text}}</p>
        </div>
    </div>
    <button class="btn btn-primary mt-2" @click="">订单详情</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'History',
  data () {
    return {
      items:[
         {imgSrc:'../../../static/pizza1.jpg',title:'意大利pizza',text:'已完成支付',num:4},
         {imgSrc:'../../../static/pizza2.jpg',title:'芝士pizza',text:'已完成支付',num:2},
         {imgSrc:'../../../static/pizza3.jpg',title:'榴莲pizza',text:'已完成支付',num:3},
       ]
    }
  },
   methods:{
      alert(){
         alert('订单已完成')
      }
     
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
img{
  height:131px;
}
</style>
