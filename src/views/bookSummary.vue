<template>
  <ion-page>
    <ion-content :fullscreen="true">
        <div  class=" flex fixed justify-center py-4 px-2  bg-black w-full">
            <img @click="this.$router.back()" src="icons/arrowBack.svg" class="absolute left-2 top-4 bottom-4"/>
            <p class="text-2xl font-bold text-white">Book Summary</p>
        </div>
        <div class=" text-center mx-8 text-lg mt-24 text-gray-400">
            <p>You are about to book 3 seat(s) for this class. 
            Kindly enter the full name of your guest/s below.
            </p>
        </div>
        <div class="p-4 bg-white mx-8 mt-8 rounded-xl">
            <div class="flex justify-between p-4">
                <p class="text-gray-400">Sesssion</p>
                <p class="font-bold">45 Minutes</p>
            </div>
            <hr class="bg-gray-400 mx-4"/>
            <div class="flex justify-between p-4">
                <p class="text-gray-400">Date</p>
                <p class="font-bold">May 05, 2020</p>
            </div>
            <hr class="bg-gray-400 mx-4"/>
            <div class="flex justify-between p-4">
                <p class="text-gray-400">Time</p>
                <p class="font-bold">12:00 PM</p>
            </div>
        </div>
        <p class="uppercase my-8 text-2xl font-bold ml-8">Guest Name</p>
        <div class="p-4 pl-2 rounded-lg bg-white mx-8 my-4">
            <p class="text-xs">Guest 1</p>
            <p class="text-sm font-bold">Juan Dela Cruz</p>
        </div>
        <div class="p-4 pl-2 bg-white rounded-lg mx-8 my-4">
            <p class="text-xs">Guest 2</p>
            <p class="text-sm font-bold">Karl Miranda</p>
        </div>
    <div class="p-8 bottom-2 bg-white w-full">
            <button @click="modal=true" class="bg-black w-full h-16 text-sm rounded-lg text-white">
               BOOK NOW
            </button>
    </div>
    
   
         <div class="fixed  bottom-0 bg-white  w-full  flex justify-center">
      <hr class="  justify-self-center  m-auto w-32 rounded-full bg-black h-2">
          </div>
    <div v-if="modal" class="fixed h-full w-full flex justify-center items-center top-0 inset-0 z-10 bg-black bg-opacity-25">
            <div class="bg-white rounded-xl flex flex-col justify-center p-10 mx-12">
                <p class=" text-left font-bold text-xl tracking-widest">Book Successful!</p>
                <p class="mt-4">You have successfully booked <b class="font-bold">3 sets </b> for this class.</p>
                <div class=" w-full mt-8 flex flex-col justify-center">
                    <button @click="this.$router.push({path:'/classes'})" 
                    class="uppercase font-bold bg-black 
                    text-sm rounded-md py-2 px-8  text-white">BACK TO ACCOUNT</button>
                   
                </div>
                
            </div>
    </div>
    </ion-content>
  </ion-page>
</template>

<script >
import { IonContent, IonPage,  } from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'loadPage',
  components: {
    IonContent,
    IonPage,
  },

  data(){
      return {
         modal:false
      }
  },
methods:{
},
  
});
</script>

<style scoped>
ion-content{
    --ion-background-color:#E5E5E5;;
}
input:checked {
    content: '1';
    background-color: white;
    border:none;
}
input[type="checkbox"]:disabled {
  background: black;
  border:none;
}
</style>
