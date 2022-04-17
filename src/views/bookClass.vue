<template>
  <ion-page>
    <ion-content :fullscreen="true">
        <div  class=" flex fixed z-20 justify-center py-4 px-2  bg-black w-full">
            <img @click="this.$router.back()" src="icons/arrowBack.svg" class="absolute left-2 top-4 bottom-4"/>
            <p class="text-2xl font-bold text-white">Book a class</p>
        </div>
        <div class=" rounded-lg border border-gray-200 bg-white mt-24 mx-4 flex justify-between">
            <div @click="active=0" class="p-4 border-r w-full text-center border-gray-300">
                <p :class="{active:active==0}" class="text-gray-500 uppercase text-lg font-bold">San Juan</p>
            </div>
            <div @click="active=1" class="p-4 w-full text-center">
                <p :class="{active:active==1}" class="text-gray-500 uppercase text-lg disabled font-bold">Alabang</p>
            </div>
        </div>
        <div class="flex justify-start items-start space-x-4 mx-4 mt-8">
            <img src="icons/pinPointIcon.svg"/>
            <p class="text-lg">
                 2/F Santolan Town Plaza - 276 Col. Bonny Serrano Avenue, 
                 San Juan, Metro Manila - <b class="font-bold underline">Direct Map</b>
            </p>
        </div>
        <div class="bg-white p-6 mx-4 mt-8 rounded-sm">
            <div class="flex justify-between">
                <button @click="prevMonth()" class="focus:outline-none">
                    <img src="icons/toLeftIcon.svg"/>
                </button>
                <p class="text-lg font-bold uppercase">{{month[monthIndex]}} {{year}} </p>
                
                <button @click="nextMonth()"  class="focus:outline-none">
                    <img src="icons/toRightIcon.svg"/>
                </button>
            </div>
           
                <div class="grid grid-cols-7 col-end-7 my-2">
                    <div class="text-sm  text-center w-7 h-7 ">Su</div>
                    <div class="text-sm text-center w-7 h-7 ">Mo</div>
                    <div class="text-sm text-center w-7 h-7 ">Tu</div>
                    <div class="text-sm text-center w-7 h-7 ">We</div>
                    <div class="text-sm text-center w-7 h-7 ">Th</div>
                    <div class="text-sm text-center w-7 h-7 ">Fr</div>
                    <div class="text-sm text-center w-7 h-7 ">Sa</div>
                </div>
           
            <div class="grid grid-cols-7 mt  items-center">
                
                <div v-for="x in firstDayMonth" :key="x" class=" flex justify-center items-center text-gray-100 text-sm w-7 h-7">
                    <p>{{lastMonthDays-firstDayMonth+x}}</p>
                </div>
                <div v-for="day in getDaysInMonth(date.getFullYear(),date.getMonth())"
                 :key="day" class="text-sm  w-7 h-7 flex justify-center items-center"  :class="{currentDay:currentDay==day,bookDate:bookDate==day}">
                    <p>{{day}}</p>
                </div>
            </div>
        </div>
        <div class="bg-white p-6 mx-4 my-8 rounded-sm">
            <div class="flex my-4 justify-between">
                <div class="flex justify-center items-center space-x-2">
                    <div class="w-12 h-12 rounded-full">
                        <img src="image/image2.jpg" class="w-12 h-12 rounded-full"/>
                    </div>
                    <p class="font-bold text-2xl">Mark</p>
                </div>
                <button @click="this.$router.push({path:'/selectBook'})" class="bg-black w-32 rounded-lg text-white focus:outline-none">Book</button>
            </div>
            <hr class="w-full bg-gray-400">
            <div class="flex flex-col my-4 justify-between">
                <p class="font-bold text-lg">PERIGON 45</p>
                <div class="flex justify-between">
                    <div>
                        <p class="text-gray-400 text-sm">Session</p>
                        <p class="font-bold">45 mins</p>
                    </div>
                    <div>
                        <p class="text-gray-400 text-sm">Time</p>
                        <p class="font-bold">12:00 PM</p>
                    </div>
                    <div>
                        <p class="text-gray-400 text-sm">Vacancy</p>
                        <p class="font-bold uppercase text-gray-400">3 left</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="bg-white p-6 mx-4 my-8 rounded-sm">
            <div class="flex my-4 justify-between">
                <div class="flex justify-center items-center space-x-2">
                    <div class="w-12 h-12 rounded-full">
                        <img src="image/image2.jpg" class="w-12 h-12 rounded-full"/>
                    </div>
                    <p class="font-bold text-2xl">FOLD</p>
                </div>
                
                <button @click="modal=true" class="bg-white focus:outline-none ring-offset-0 
                ring-2 ring-gray-400 w-32 rounded-lg uppercase">waitlist</button>
            </div>
            <hr class="w-full bg-gray-400">
            <div class="flex flex-col my-4 justify-between">
                <p class="font-bold text-lg">PERIGON 45</p>
                <div class="flex justify-between">
                    <div>
                        <p class="text-gray-400 text-sm">Session</p>
                        <p class="font-bold">45 mins</p>
                    </div>
                    <div>
                        <p class="text-gray-400 text-sm">Time</p>
                        <p class="font-bold">12:00 PM</p>
                    </div>
                    <div>
                        <p class="text-gray-400 text-sm">Vacancy</p>
                        <p class="font-bold uppercase text-gray-400">Full</p>
                    </div>
                </div>
            </div>
        </div>
        <div v-if="modal" class="fixed h-full w-full flex justify-center items-center top-0 inset-0 z-10 bg-black bg-opacity-25">
            <div class="bg-white rounded-xl flex flex-col p-6 mx-12">
                <p class="text-2xl font-bold uppercase tracking-wide">Waitlist</p>
                <p class="mt-2 text-gray-500">
                    This class is already full. No worries! We can waitlist 
                    you and book you a seat once it will be available for 1 
                    seat only. Are you sure you want to continue?
                </p>
                <div class="w-full mt-8 px-6">
                    <button @click="this.$router.push({path:'/classes'})" class="w-full h-10 bg-black font-bold rounded-lg text-white">
                        Yes
                    </button>
                    <button @click="modal=false" class="w-full h-10 text-black font-bold ">
                        Cancel
                    </button>
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
          bookDate:28,
          modal:false,
          active:0,
          date:new Date(),
          currentDate:new Date(),
          currentDay:'',
          year:'',
          lastMonthDays:'',
          firstDayMonth:'',
          monthIndex:'',
          month:[
              'Jan',
              'Feb',
              'Mar',
              'Apr',
              'May',
              'Jun',
              'Jul',
              'Aug',
              'Sep',
              'Oct',
              'Nov',
              'Dec',
          ]
      }
  },
methods:{
    getDaysInMonth(year, month) {
  return new Date(year, month+1, 0).getDate();
},
nextMonth(){
    this.monthIndex+=1
    if(this.monthIndex>11){
        this.monthIndex=0;
        this.year+=1;
    }
},
prevMonth(){
    this.monthIndex-=1
    if(this.monthIndex<0){
        this.monthIndex=11;
        this.year-=1;
    }
}
},
created(){
        this.date.setDate(1);
        this.monthIndex=this.date.getMonth();
        this.year=this.date.getFullYear();
        this.lastMonthDays=this.getDaysInMonth(this.year,this.monthIndex-1);
        this.firstDayMonth=this.date.getDay();
        this.currentDay=this.currentDate.getDate();
        

},
  
});
</script>

<style scoped>
ion-content{
    --ion-background-color:#E5E5E5;
}
.currentDay{
    position:relative;
    text-decoration: underline;
    font-style:bold;
}
.active{
    color:black;
}
.bookDate{
  background-color: black;
  color:white;
  border-radius: 100%;
}
</style>
