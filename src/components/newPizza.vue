<template>
    <form>
        <h3 class="text-warning text-center">添加新的Pizza</h3>
        <div class="form-group">
            <label for="exampleInputEmail1">
                <h6 class="text-warning">品种</h6>
            </label>
            <input v-model="newPizza.name" type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="请输入您的pizza种类">
            
        </div>
        <div class="form-group">
            <label for="textarea1">
                <h6 class="text-warning">商品描述</h6>
            </label>
           <textarea v-model="newPizza.description"id="textarea1" class="form-control" placeholder="请写下这款pizza有什么特点"></textarea>
        </div>
        <div class="form-group mt-3">
            <h6 class="text-warning">尺寸&价格</h6>
            <span class="span1  ml-5">尺寸：</span>
            <select v-model="newPizza.size1" class="form-control col-2 span1" id="exampleFormControlSelect1" >
                <option>7</option>
                <option>9</option>
                <option>11</option>
                <option>14</option>
                <option>17</option>
            </select>
            <span class="span2">价格:</span>
            <input type="text" v-model="newPizza.price1">
        </div>
        <div class="form-group mt-5">
           <span class="span1  ml-5">尺寸：</span>
            <select v-model="newPizza.size2" class="form-control col-2 span1" id="exampleFormControlSelect1" >
                <option>7</option>
                <option>9</option>
                <option>11</option>
                <option>15</option>
                <option>19</option>
            </select>
            <span class="span2">价格:</span>
            <input type="text" v-model="newPizza.price2">
        </div>
        
        <button type="submit" @click.prevent="addPizza" class="btn btn-primary btn-block mt-5">添加pizza</button>
    </form>
</template>
<script>
    import axios from 'axios'
    export default{
        name:"newPizza",
        data(){
            return{
            newPizza:{}
         }
        },
        methods: {
            addPizza(){
                var data={
                   name:this.newPizza.name,
                   description:this.newPizza.description,
                   options:[
                     {
                        size:this.newPizza.size1,
                        price:this.newPizza.price1
                     },
                     {
                        size:this.newPizza.size2,
                        price:this.newPizza.price2
                     }
                   ]
                }
                axios.post('./menu-wl.json',data)
                .then(res=>{
                    this.$router.push('/menu')
                })
            },
           
        },
        
    }

</script>
<style>
   .span1{
       float:left
   }
   .span2{
      padding-left:90px;
   }
</style>