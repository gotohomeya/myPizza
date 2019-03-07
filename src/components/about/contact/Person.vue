<template>
  <div class="Person">
    <h4 class="mt-3">{{person}}</h4>
  </div>
</template>

<script>
export default {
  name: 'Person',
  data () {
    return {
      person:'web1112全体学生及老师' 
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
