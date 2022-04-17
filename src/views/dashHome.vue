<template>
  <ion-page>
    <ion-content :fullscreen="true">
        <div class="relative ">
            <div class="flex justify-between items-start pt-8  bg-black h-52">
                    <div class="flex select-none pl-4  items-center space-x-4">
                        <div class=" bg-white border border-white rounded-full">
                            <img src="image/image1.png" class="w-16 h-16"/>
                        </div>
                        <div class="text-white ">
                            <p class="font-light">Hello</p>
                            <p class="text-2xl">Samantha</p>
                            <p class="text-2xl">Nicole</p>
                        </div>
                    </div>
                    <div class="flex space-x-4 mx-4">
                        <img src="icons/settingIcon.svg" class="w-8">
                        <img src="icons/menuIcon.svg" class="w-8">
                    </div>
            </div>
            <div class=" absolute flex    top-40 w-full px-4  h-24">
                    <div class="w-full leading-loose m-auto p-4  rounded-xl  bg-white">
                        <p class="text-sm">Next class in:</p>
                        <div class="flex justify-between">
                            <p class="text-md">No next class available.</p>
                            <b @click="modal=true" class="ml-2 flex gap-x-2 font-black uppercase">Book Now 
                                <img src="icons/arrowRightIcon.svg" class="w-2 ml-2 "/></b> 
                        </div>
                    </div>
            </div>
        </div>
        <div class=" fixed flex justify-center  items-center bottom-0  w-full bg-white">
            <div class="flex flex-col items-center justify-center h-20 w-20 ">
                <img src="icons/homeIcon.svg" class="w-6 h-6">
                <p class="font-bold text-xs">Home</p>
            </div>
            <router-link to="/purchasePasses">
            <div  class="flex flex-col items-center justify-center h-20 w-20 ">
                <img src="icons/ticketIcon.svg" class="w-6 h-6">
                <p class="font-bold text-xs text-gray-300">Passes</p>
            </div>
            </router-link>
            <div  class="flex absolute -top-9 k flex-col  h-20 w-20 justify-center items-center">
                <div class="  self-center rounded-full  p-2 flex flex-col justify-center items-center bg-black w-20 h-20">
                    <img src="icons/bikeIcon.svg" class="w-8 h-8">
                    <p class="text-white text-xs">Classes</p>
                </div>
            </div>
            <div class="flex bflex-col  h-20 w-20 justify-center items-center">
                
            </div>
            <div class="flex  flex-col h-20 w-20 items-center  justify-center">
                <img src="icons/contactsIcon.svg" class="w-6 h-6">
                <p class="font-bold text-xs text-gray-300">Instructors</p>
            </div>
            <div class="flex flex-col h-20 w-20 justify-center items-center ">
                <img src="icons/notifIcon.svg" class="w-6 h-6">
                <p class="font-bold text-xs text-gray-300">Notification</p>
            </div>
        </div>
        <div v-if="modal==true" class=" bg-black bg-opacity-20 flex justify-center items-center h-full inset-0  w-full fixed">
            <div class="relative h-52 m-4 p-4 rounded-lg bg-white">
                <button @click="modal=false,x=0">
                    <img src="icons/closeXIcon.svg" class="absolute top-4 right-8"/>
                </button>
                <div class="px-4 mt-4">
                    <p class="text-xl font-bold">Uh Oh..</p>
                    <p>Looks like you don’t have any passes yet to use. 
                        Tap the icon below to purchase.
                    </p>
                </div>
                <a @click="modal=false,x=0" id='okay' :class="{hoverThis:x>0}" class=" absolute bottom-4 font-extrabold text-black right-8">
                   Okay, I understand
                </a>
            </div>
            <div class=" fixed flex justify-center  items-center bottom-0  w-full">
            <div class="flex flex-col items-center justify-center h-20 w-20 ">
                
            </div>
            <div @mousedown="x+=1" id='passes' class="flex flex-col relative  items-center justify-center h-20 bg-white rounded-full w-20 ">
                <img src="icons/longArrowDownIcon.svg" class="  absolute -top-24"/>
                <img src="icons/ticketIcon.svg" class="w-6 h-6">
                <p class="font-bold text-xs t   ext-gray-300">Passes</p>
            </div>
            <div class="flex absolute -top-9 k flex-col  h-20 w-20 justify-center items-center">
                
            </div>
            <div class="flex bflex-col  h-20 w-20 justify-center items-center">
                
            </div>
            <div class="flex  flex-col h-20 w-20 items-center  justify-center">
              
            </div>
            <div class="flex flex-col h-20 w-20 justify-center items-center ">
                
            </div>
        </div>
        </div>
    </ion-content>
  </ion-page>
</template>

<script>
import { IonContent, IonPage,  } from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'loginPage',
  components: {
    IonContent,
    IonPage,
  },
data(){
    return{
        modal:false,
        hoverThis:false,
        x:0,
    }
},
methods:{

}
});
</script>

<style scoped>
.hoverThis{
    animation: shake 0.5s;
    
}
@keyframes shake {

  0% { transform: translate(1px, 1px) rotate(0deg); }
  10% { transform: translate(-1px, -2px) rotate(-1deg); }
  20% { transform: translate(-3px, 0px) rotate(1deg); }
  30% { transform: translate(3px, 2px) rotate(0deg); }
  40% { transform: translate(1px, -1px) rotate(1deg); }
  50% { transform: translate(-1px, 2px) rotate(-1deg); }
  60% { transform: translate(-3px, 1px) rotate(0deg); }
  70% { transform: translate(3px, 1px) rotate(-1deg); }
  80% { transform: translate(-1px, -1px) rotate(1deg); }
  90% { transform: translate(1px, 2px) rotate(0deg); }
  100% { transform: translate(1px, -2px) rotate(-1deg); }
}
ion-content{
    --ion-background-color:#E5E5E5;
}
</style>