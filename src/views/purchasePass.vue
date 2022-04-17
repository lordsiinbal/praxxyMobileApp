<template>
  <ion-page>
    <ion-content :fullscreen="true">
        <div  class=" flex fixed z-20 justify-center py-4 px-2  bg-black w-full">
            <img @click="this.$router.back()" src="icons/arrowBack.svg" class="absolute left-2 top-4 bottom-4"/>
            <p class="text-2xl font-bold text-white">Purchase Passes</p>
        </div>
        <div class="flex flex-col items-center justify-center px-8">
            <div class="relative flex flex-col shadow-2xl w-72 rounded-xl bg-white    mt-20">
                <div class="relative w-full  h-36  bg-black">
                    <div class="p-4">
                        <img src="icons/bikerIcon.svg"/>
                    <div class="flex justify-between items-center">
                        <p class="uppercase text-white text-xl">5 Passes</p>
                        <button @click="total+=tickets[0].price,buttonDisable=false"  class="focus:outline-none"><img src="icons/addIcon.svg"/></button>
                    </div>
                    </div>
                    
                    <div class="absolute -left-2 -top-2 w-8 h-8 bg-gray-200 rounded-full"></div>
                    <div class="absolute -right-2 -top-2 w-8 h-8 bg-gray-200 rounded-full"></div>
                <div class="flex w-full flex-row absolute justify-around     -bottom-4">
                        <div v-for="x in 11" :key="x" class="bg-gray-100 rounded-full  w-6 h-6 "></div>
                </div>
                </div>
                <div class="flex flex-col space-y-4  p-8">
                    <div>
                        <p class="text-gray-400">Price</p>
                        <p class="text-xl font-extrabold uppercase">Php {{tickets[0].price}}</p>
                    </div>
                    <div>
                        <p class="text-gray-400">Expiration</p>
                        <p class="text-xl font-extrabold uppercase">{{tickets[0].expiration}} days</p>
                    </div>
                    <div>
                        <p class="text-gray-400">Pack</p>
                        <p class="text-xl font-extrabold uppercase">{{tickets[0].pack}}-Pack</p>
                    </div>
                    <div>
                        <p class="text-gray-400">Mode</p>
                        <p class="text-xl font-extrabold uppercase">{{tickets[0].mode}}</p>
                    </div>
                </div>
                
            </div>
            <p class=" my-4">Entitles you to 5 PERIGON rides</p>
            
        </div>
        <div class="bg-white flex justify-between items-center w-full p-8  fixed bottom-0">
            <div class="flex flex-col w-full">
                <p class="text-gray-400">Total</p>
                <p class="font-bold">Php {{total}}</p>
            </div>
            <div  :class="{active:total>0}" class="w-full border border-black rounded-lg">
                <button @click="this.$router.push({path:'/placeOrder'})" :disabled="buttonDisable"  class="w-full focus:outline-none rounded-lg  text-black h-12 font-bold bg-white ">Checkout</button>
            </div>
        </div>
        <div class="fixed  bottom-0 bg-white  w-full  flex justify-center">
            <hr class="  justify-self-center  m-auto w-32 rounded-full bg-black h-2">
        </div>
    </ion-content>
    </ion-page>
</template>

<script>
import { IonContent, IonPage, } from '@ionic/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    name: 'SignUp',
    components: {
      IonContent,
      IonPage
    },
 data(){
     return{
         buttonDisable:true,
         total:0,
         tickets:[
             {
                price:4750,
                expiration:45,
                pack:5,
                mode:'Shareable'
             }
         ]
     }
 },
methods:{
   test(){
      
   } 
}
}

);
</script>

<style scoped>
ion-content{
    --ion-background-color:#E5E5E5;
}
.active{
    background-color: black;
    
}
.active button{
    background-color: black;
    color:white;
}
.actcive button:disabled,
button[disabled=false]{
  border: 1px solid #999999;
  background-color: #cccccc;
  color: #666666;
}
</style>