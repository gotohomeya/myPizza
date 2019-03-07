<template>
  <div class="About row container mt-5">
    <div class="list-group col-4 ">
  <router-link to="/activity" class="mb-3 list-group-item list-group-item-action list-group-item-primary text-center">热门活动</router-link>
  <router-link to="/contact" class="mb-3 list-group-item list-group-item-action list-group-item-secondary text-center">联系我们</router-link>
  <router-link to="/delivery" class="mb-3 list-group-item list-group-item-action list-group-item-success text-center">快递信息</router-link>
  <router-link to="/history" class="list-group-item list-group-item-action list-group-item-danger text-center">历史订单</router-link>
  
  </div>
  <div class="col-8">
    <router-view />
  </div>
   
  </div>
</template>

<script>
export default {
  name: 'About',
  data () {
    return {
     
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
