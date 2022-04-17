<template>
  <ion-page>
    <ion-content :fullscreen="true">
        <div  class=" flex items-center bg-gray-650 fixed z-20 justify-center py-8 px-2 w-full">
            <img @click="this.$router.back()" src="icons/arrowBack.svg" class="absolute left-2 top-4 bottom-4"/>
            <p class="text-2xl font-bold text-white">PERIGON 45</p>
        </div>
        <div class="mt-24 flex justify-center space-x-2">
            <div class="flex items-center text-white space-x-2">
                <div class="w-4 h-4 rounded-full border border-white"></div>
                <p>Available</p>
            </div>
            <div class="flex items-center text-white space-x-2">
                <div class="w-4 h-4 rounded-full bg-black border border-black"></div>
                <p>Booked</p>
            </div>
        </div>
    <div class="flex justify-between">
            <div class="w-32">
            <div class="mt-8 pl-4 grid grid-cols-3 gap-2 col-start-1">
                <input id type="checkbox" class="w-6 h-6 focus:outline-none
                    border border-white rounded-full appearance-none "/>
                <input  type="checkbox" class="w-6 h-6 focus:outline-none
                    border border-white rounded-full appearance-none "/>
                <input  type="checkbox" class="w-6 h-6 focus:outline-none
                    border border-white rounded-full appearance-none "/>
                <input disabled type="checkbox" class="w-6 h-6 focus:outline-none
                    border border-white rounded-full appearance-none "/>
                <input type="checkbox" class="w-6 h-6 focus:outline-none
                    border border-white rounded-full appearance-none "/>
                <input type="checkbox" class="w-6 h-6 focus:outline-none
                    border border-white rounded-full appearance-none "/>
                <input  disabled type="checkbox" checked class="w-6 h-6 focus:outline-none
                    border border-white rounded-full appearance-none "/>
                <input type="checkbox" class="w-6 h-6 focus:outline-none
                    border border-white rounded-full appearance-none "/>
                <input type="checkbox" class="w-6 h-6 focus:outline-none
                    border border-white rounded-full appearance-none "/>
                <input disabled  type="checkbox" class="w-6 h-6 focus:outline-none
                    border border-white rounded-full appearance-none "/>
                <input type="checkbox" class="w-6 h-6 focus:outline-none
                    border border-white rounded-full appearance-none "/>
                <input type="checkbox" class="w-6 h-6 focus:outline-none
                    border border-white rounded-full appearance-none "/>
            </div>
        <div class="pl-4  grid grid-cols-3 mt-2 gap-2">
            <input  type="checkbox" class="w-6 h-6 focus:outline-none
            border border-white rounded-full appearance-none "/>
            <span class="p-2"></span>
            <input  type="checkbox" class="w-6 h-6 focus:outline-none
            border border-white rounded-full appearance-none "/>
            <span></span>
            <input  type="checkbox" class="w-6 h-6 focus:outline-none
            border border-white rounded-full appearance-none "/>
            <input  type="checkbox" class="w-6 h-6 focus:outline-none
            border border-white rounded-full appearance-none "/>
            <span></span>
            <input  type="checkbox" class="w-6 h-6 focus:outline-none
            border border-white rounded-full appearance-none "/>
            <input  type="checkbox" class="w-6 h-6 focus:outline-none
            border border-white rounded-full appearance-none "/>
            <span></span>
        </div>
        <div class="pl-4 grid grid-cols-3 mt-2 gap-2">
            <input  type="checkbox" class="w-6 h-6 focus:outline-none
            border border-white rounded-full appearance-none "/>
            <input  type="checkbox" class="w-6 h-6 focus:outline-none
            border border-white rounded-full appearance-none "/>
            <input  type="checkbox" class="w-6 h-6 focus:outline-none
            border border-white rounded-full appearance-none "/>
            <input disabled type="checkbox" class="w-6 h-6 focus:outline-none
            border border-white rounded-full appearance-none "/>
            <input type="checkbox" class="w-6 h-6 focus:outline-none
            border border-white rounded-full appearance-none "/>
            <input type="checkbox" class="w-6 h-6 focus:outline-none
            border border-white rounded-full appearance-none "/>
            <input type="checkbox" class="w-6 h-6 focus:outline-none
            border border-white rounded-full appearance-none "/>
        </div>
        </div>
        <div class="mt-8 mr-12 flex flex-col space-y-2 items-center ">
            <input type="checkbox" class="w-6 h-6 focus:outline-none
            border border-white rounded-full appearance-none "/>
            <span class="p-2"></span>
            <input type="checkbox" class="w-6 h-6 focus:outline-none
            border border-white rounded-full appearance-none "/>
            <span class="p-2"></span>
            <span class="p-2"></span>
            
            <div class="w-12 h-12 rounded-full">
                <img src="image/image2.jpg" class="w-12 h-12 rounded-full"/>
            </div>
            <span class="p-2"></span>
            <input type="checkbox" class="w-6 h-6 focus:outline-none
            border border-white rounded-full appearance-none "/>
        </div>
    </div>
    <div class="p-2 pb-8  absolute bottom-0 bg-white w-full">
        <div class=" flex justify-between px-4 items-center h-16">
            <div>
                <p>Passes</p>
                <p class="uppercase font-bold">5 Left</p>
            </div>
            <button @click="this.$router.push({path:'/bookSummary'})" class="bg-black w-52 focus:outline-none h-full text-sm rounded-lg text-white">
                CONFIRM SPOT(S)
            </button>
        </div>
        <div class="flex justify-between px-4 mt-2">
            <div>
                <p class="text-gray-400">Session</p>
                <p class="uppercase text-lg font-bold">45 mins</p>
            </div>
            <div>
                <p class="text-gray-400">Date</p>
                <p class="uppercase text-lg font-bold">May 15</p>
            </div>
            <div>
                <p class="text-gray-400">Time</p>
                <p class="uppercase text-lg font-bold">12:00 PM</p>
            </div>

        </div>
    </div>
         <div class="fixed  bottom-0 bg-white  w-full  flex justify-center">
      <hr class="  justify-self-center  m-auto w-32 rounded-full bg-black h-2">
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
         id:0,
         newId:''
      }
  },
methods:{
    createId(){
        return this.id+=this.id
    }
},
  
});
</script>

<style scoped>
ion-content{
    --ion-background-color:#595959;
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
