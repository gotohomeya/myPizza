<template>
  <div class="Address">
    <h4 class="mt-3">{{address}}</h4>
  </div>
</template>

<script>
export default {
  name: 'Address',
  data () {
    return {
      address:'地址信息：北京市朝阳区五方桥10086号'
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
