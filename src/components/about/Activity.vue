<template>
  <div class="activity">
   <div class="card col-12" v-for="(item,index) in items" :key="index">
        <img class="card-img-top" :src="item.imgSrc" alt="Card image cap">
        <div class="card-body">
          <h5>{{item.title}}</h5>
          <p class="card-text">{{item.text}}</p>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Activity',
  data () {
    return {
       items:[
         {imgSrc:'../../../static/pizza1.jpg',title:'热门活动1',text:'啦啦啦啦啦啦啦啦啦啦啦'},
         {imgSrc:'../../../static/pizza2.jpg',title:'热门活动2',text:'买pizza，有机会赢得iPhone XS MAX...'},
         {imgSrc:'../../../static/pizza3.jpg',title:'热门活动3',text:'与好友一起尽享美味pizza，体验海岛风情...'},
       ]
    }
  }
 
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
