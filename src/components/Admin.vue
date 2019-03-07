<template>
  <div class="Admin row">
    <newPizza class="col-7"></newPizza>
    <newMenu class="col-5"></newMenu>
  </div>
</template>

<script>
import newPizza from "@/components/newPizza"
import newMenu from "@/components/newMenu"
export default {
  name: 'Admin',
  data () {
    return {
      
    }
  },
  components:{
    'newPizza':newPizza,
      'newMenu':newMenu
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
