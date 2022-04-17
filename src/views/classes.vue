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
                    <div class="w-full leading-loose  p-4  rounded-xl  bg-white">
                        <p class="text-sm">Next class in:</p>
                        <div class="flex justify-between relative">
                            <div class="flex justify-between items-start space-x-4">
                                <div class="flex flex-col items-center justify-center">
                                    <p class="text-xl font-bold">0</p>
                                    <p class="text-sm">Days</p>
                                </div>
                                <p class="text-xl font-bold">:</p>
                                <div class="flex flex-col items-center justify-center">
                                    <p class="text-xl font-bold">1</p>
                                    <p class="text-sm">Hrs</p>
                                </div>
                                <p class="text-xl font-bold">:</p>
                                <div class="flex flex-col items-center justify-center">
                                    <p class="text-xl font-bold">40</p>
                                    <p class="text-sm">Mins</p>
                                </div>
                            </div>
                        <div class="flex absolute right-0 bottom-5 top-1 space-y-1 flex-col justify-center items-center ">
                            <img src="image/image2.jpg" class="w-10 h-10 rounded-full ring-1 ring-offset-2 ring-gray-500"/>
                            <p class="text-sm text-gray-400">Instructor</p>
                        </div>
                        </div>
                    </div>
            </div>
        </div>
        <div class=" mt-16 mb-4 flex justify-between items-center mx-4 uppercase">
            <p class="text-xl font-bold"> Upcoming Classes</p>
            <p class="text-sm text-gray-400 font-bold">View All</p>
        </div>
        <div class="flex flex-col space-y-4 pb-28">
            <div class="flex  mx-4 bg-white rounded-xl h-48">
            <div class="relative h-full">
                <img src="image/image3.jpg" class="rounded-l-xl object-cover h-full"/>
                <div class=" absolute bottom-0 p-2">
                    <p class="text-white text-xl font-bold">YTLE</p>
                    <p class="text-white text-sm font-bold">45 Minutes</p>
                </div>
            </div>
            <div class="p-4">
                <div class="">
                    <p class="text-gray-400 ">Date</p>
                    <p class="text-lg font-bold">Sunday, Aug 25</p>
                </div>
                <div class="">
                    <p class="text-gray-400 ">Time</p>
                    <p class="text-lg font-bold">12:00 PM</p>
                </div>
                <div class="">
                    <p class="text-gray-400 ">Location</p>
                    <p class="text-lg font-bold">San Juan</p>
                </div>
            </div>
        </div>
        <div class="flex  mx-4 bg-white rounded-xl h-48">
            <div class="relative h-full">
                <img src="image/image4.jpg" class="rounded-l-xl object-cover h-full"/>
                <div class=" absolute bottom-0 p-2">
                    <p class="text-white text-xl font-bold">Rio</p>
                    <p class="text-white text-sm font-bold">45 Minutes</p>
                </div>
            </div>
            <div class="p-4">
                <div class="">
                    <p class="text-gray-400 ">Date</p>
                    <p class="text-lg font-bold">Sunday, Aug 25</p>
                </div>
                <div class="">
                    <p class="text-gray-400 ">Time</p>
                    <p class="text-lg font-bold">12:00 PM</p>
                </div>
                <div class="">
                    <p class="text-gray-400 ">Location</p>
                    <p class="text-lg font-bold">San Juan</p>
                </div>
            </div>
        </div>
        </div>
        <div class=" fixed flex justify-center  items-center bottom-0  w-full bg-white">
            <div @click="this.$router.push({path:'/home'})" class="flex flex-col items-center justify-center h-20 w-20 ">
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
ion-content{
    --ion-background-color:#E5E5E5;
}
</style>