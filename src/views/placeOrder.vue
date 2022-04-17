<template>
  <ion-page>
    <ion-content :fullscreen="true">
        <div  class=" flex fixed  space-x-4 justify-start py-4 pl-2  bg-black w-full">
            <img @click="this.$router.back()"  src="icons/arrowBack.svg"/>
            <p class="text-2xl tracking-widest font-bold text-white">Purchase Summary</p>
        </div>
        <div class="mt-20 w-full text-lg text-center px-4">
            <p>
                You’re about to purchase the following pack/s:
            </p>
        </div>
        <div class="bg-white flex flex-col mt-8 space-y-4 shadow-lg p-2 mx-4 rounded-xl pb-8">
            <div class="flex p-2 text-sm justify-between items-center">
                <p>Packs</p>
                <div class="flex justify-end items-center space-x-2  w-full font-bold">
                    <p>5 Pack (5 passes)</p>
                    <img src="icons/closeIcon.svg" class="w-5"/>
                </div>
            </div>
            <hr class="bg-gray-400"/>
            <div class="flex p-2 w-full text-sm justify-between items-center">
                <p>Total</p>
                <div class="flex justify-end items-center space-x-2  w-full font-bold">
                    <p>Php 4,750</p>
                </div>
            </div>
        </div>
        <div class="mx-4 mt-8">
            <p class="uppercase font-bold text-xl mb-2">Payment</p>
            <div class="bg-white p-2 rounded-xl">
                <p class="text-sm text-gray-400">Payment Method</p>
                <p class="font-bold tracking-wide text-lg">Cash or Cheque (Over the counter)</p>
            </div>
        </div>
        <div class="bg-white flex justify-between items-center w-full p-8  fixed bottom-0">
           
            <div   class="w-full rounded-lg">
                <button @click="modal=true"  class="w-full focus:outline-none rounded-lg
                   h-12 font-bold bg-black text-white uppercase">Place Order</button>
            </div>
        </div>
        <div v-if="modal" class="fixed h-full w-full flex justify-center items-center top-0 inset-0 z-10 bg-black bg-opacity-25">
            <div class="bg-white rounded-xl flex flex-col justify-center p-4 mx-12">
                <p class=" text-center font-bold text-xl tracking-widest">Purchase Successful!</p>
                <p class="mt-4">You have successfully purchased <b class="font-bold">5 Pack (5 passes)</b> that will expires on <b class="font-bold">45 days</b>.
                     Would you like to book a class now?</p>
                <div class=" w-full mt-8 flex flex-col justify-center">
                    <button @click="this.$router.push({path:'/bookClass'})" class="uppercase font-bold bg-black text-sm rounded-md py-2 px-8  text-white">Book Now</button>
                    <button @click="modal=false" class="uppercase font-bold bg-white text-sm rounded-md py-2 px-8  text-black">Maybe Later</button>

                </div>
                
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
        modal:false,
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
</style>