<template>
  <div class="Menu row text-center">
      <div class="order text-center col-7 ">
          <h4 class="text-primary">点餐</h4>
          <table class="table text-center">
              <thead>
                <tr>
                  <th scope="col">尺寸</th>
                  <th scope="col">价格</th>
                  <th scope="col">加入</th>
                </tr>
              </thead>
              <tbody v-for="(item,index) in items" :key="index">
                <tr>
                  <td colspan="3">{{item.name}}</td>
                </tr>
                <tr>
                  <td colspan="3">{{item.description}}</td>
                </tr>
                <tr v-for="(item1,index1) in item.options" :key="index1">
                  <td>{{item1.size}}</td>
                  <td>{{item1.price}}</td>
                  <td>
                      <button class="btn btn-primary" @click="addItems(item,item1)">+</button>
                  </td>
                </tr>
              </tbody>
            </table>
      </div>
     
          <div class="trolley col-5 text-center">
            <h4 class="text-primary">购物车</h4>
            <table class="table">
                <thead>
                  <tr>
                    <th scope="col">数量</th>
                    <th scope="col">种类</th>
                    <th scope="col">价格</th>
                  </tr>
                </thead>
            <template v-if="newItems.length>0">
                <tbody v-for="(item,index) in newItems">
                  <tr>
                    <td>
                       <button class="btn btn-primary" @click="reduce(item,index)">-</button>
                      <input type="number" v-model.number="item.quantity">
                      <button class="btn btn-primary" @click="add(item)">+</button>
                    </td>
                    <td>{{item.name}}-{{item.size}}</td>
                    <td>{{item.price*item.quantity}}</td>
                  </tr>
                  <tr>
                      <td></td>
                      <td colspan="2" class="text-info">商品总件数：<span>{{totalNum}}</span></td>
                  </tr>
                  <tr>
                      <td></td>
                      <td colspan="2" class="text-info">商品总价格：<span>{{totalPrice}}</span></td>
                  </tr>
                </tbody>
                </template>
                <template v-else>
                    <tr>
                        <td colspan="3" >
                          <h3 class="text-danger">购物车空空如也~</h3>
                        </td>
                    </tr>
                </template>
              </table>
      </div>
      
      
      
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Menu',
  data () {
    return {
      //items:{},
      //   0:{
      //     name:'芝士pizza',
      //     description:'挺好吃的',
      //     options:[{
      //       size:'7寸',
      //       price:'70'
      //     },
      //     { size:'10寸',
      //       price:'95'
      //     }]
      //   },
      //     1:{
      //     name:'榴莲pizza',
      //     description:'挺臭的',
      //     options:[{
      //       size:'7寸',
      //       price:'90'
      //     },
      //     { size:'10寸',
      //       price:'115'
      //     }]
      //   }
      // },
      
    newItems:[]
    }
},
methods: {
    addItems(item,options){
        var result=this.newItems.filter((item1)=>{
          return item.name==item1.name && options.size==item1.size
        })


        if(result != null && result.length>0){
           if( result[0].quantity>=10){
               result[0].quantity=10
            }else{
              result[0].quantity++
            }
            
        }else{
          this.newItems.push({
            name:item.name,
            size:options.size,
            quantity:1,
            price:options.price
          })
        }
    },
    reduce(item,index){
      if(item.quantity>1){
         item.quantity--
      }else{
         this.newItems.splice(index,1)
      }

    },
    add(item){
      if(item.quantity>=10){
        item.quantity=10
      }else{
        item.quantity++
      }

    }
  },  
  computed:{
     totalPrice(){
        return this.newItems.reduce((sum,cur)=>{
           return sum+cur.price*cur.quantity
        },0)
     },
     totalNum(){
        return this.newItems.length
     },
      items(){
      return this.$store.getters.getMenuItems
     }
  },
   mounted(){
    axios.get('./menu-jsx.json')
    .then(res=>{
      // items = res.data
      this.$store.commit('setMenuItems',res.data)
    })
  },
  }

 </script>


<style scoped>
  input{
    width:40px;
  }
  .btn{
    width:30px;
    line-height:30px;
    text-align:center;
    padding:0;
  }
</style>
