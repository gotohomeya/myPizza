<template>
  <div class="Contact">

    <div class="card text-center">
      <div class="card-header">
        联系我们
      </div>
      <div class="card-body">
        <p class="card-text">欢迎来到my-pizza的关于我们的页面</p>
        <router-link to="/contact/address" class="btn btn-primary">地址信息</router-link>
        <router-link to="/contact/person" class="btn btn-primary">法人代表</router-link>
        <router-link to="/contact/tel" class="btn btn-primary">电话热线</router-link>
        <router-view />
      </div>
      <div class="card-footer text-muted">
         2 days ago
      </div>
    </div>
   
  </div>
</template>

<script>
export default {
  name: 'Contact',
  data () {
    return {
     
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
