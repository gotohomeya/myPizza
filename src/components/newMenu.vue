<template>
    <div class="text-center">
         <h3 class="text-warning">菜单管理</h3>
    <table class="table">
    <thead>
        <tr>
            <th scope="col">序号</th>
            <th scope="col">品种</th>
            <th scope="col">删除</th>
        </tr>
    </thead>
    <tbody v-for="(item,index) in items" :key="index">
        <tr>
            <td>{{index+1}}</td>
            <td>{{item.name}}</td>
            <td>
                <button class="btn btn-danger" @click="delItem(item)">delete</button>
            </td>
        </tr>
    
       
  </tbody>
</table>
    </div>
   
</template>
<script>
    import axios from 'axios'
   export default{
        name:"newMenu",
        data(){
            return{
                items:[]
         }
        },
        mounted(){
            var that=this
            axios.get('./menu-wl.json')
            .then(res=>{
                for(var key in res.data){
                    var item=res.data[key]
                    item.id=key
                    that.items.push(item)
                }
            })
        },
        methods: {
            delItem(item){
                axios.delete('./menu-wl/'+item.id+'.json')
                .then(res=>{
                    this.$router.push('/menu')
                })
            }
        },
        
    }
</script>
<style>

</style>