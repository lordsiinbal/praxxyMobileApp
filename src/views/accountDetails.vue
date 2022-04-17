<template>
  <ion-page>
    
    <ion-content :fullscreen="true">
      <div  class=" flex fixed z-20 justify-center py-4 px-2  bg-black w-full">
        <router-link to="/signUpPage">
          <img src="icons/arrowBack.svg" class="absolute left-2 top-4 bottom-4"/>
        </router-link>
        <p class="text-2xl font-bold text-white">Create Account</p>
      </div>
      <div class="relative h-full">
          
      <div id="container" class="text-center pt-16 text-lg m-8">
       <p>First base? We want to get to know you better. Sign up for an account and we'll take care of the rest.</p>
      </div>
      <div class="relative  flex justify-between items-center   w-full">
        <div class="absolute  top-8 m-auto w-full px-16 ">
          <hr class="border-t-2  border-gray-400  w-full  border-dashed">
        </div>
          <div class="flex flex-wrap gap-y-2 w-full flex-col text-center items-center">
          <div class=" flex  justify-center items-center w-16  z-10 h-16 rounded-full bg-black">
            <img src="icons/personIcon.svg" class="w-6 h-6"/>
          </div>
             <p class="uppercase font-extrabold text-sm">Personal information</p>
          </div>
          <div class="flex  flex-wrap flex-col   w-full gap-y-2 text-center items-center">
          <div class=" flex  justify-center items-center w-16  z-10 h-16 rounded-full bg-black ">
            <img src="icons/whiteDetailIcon.svg" class="w-6 h-6"/>
          </div>
             <p class="uppercase font-extrabold text-sm">Account <br>Details</p>
          </div>
          <div class="flex flex-wrap flex-col   w-full gap-y-2 text-center items-center">
          <div class=" flex  justify-center items-center w-16  z-10 h-16 rounded-full bg-white border-2 border-gray-400">
            <img src="icons/checkGrayIcon.svg" class="w-6 h-6"/>
          </div>
             <p class="text-gray-400 font-bold text-sm">Terms and Conditions</p>
          </div>
      </div>
          <div class="flex flex-col justify-start p-4 m-auto  ">
             <strong class="uppercase font-extrabold text-2xl pl-4 mt-4">Account Details</strong>
              <form class="flex flex-col gap-y-4" v-on:submit.prevent>
                  <div class=" flex flex-col outline-2 rounded-lg bg-white m-2  p-2">
                    <label class="text-sm text-gray-400 pl-1">Email</label>
                    <input type="email" class="h-10 font-bold pl-1 rounded-lg focus:outline-none" value="SamanthaNicole@gmail.com"/>
                  </div>
                  <div class=" flex flex-col outline-2 rounded-lg bg-white m-2  p-2">
                    <label class="text-sm text-gray-400 pl-1">Password</label>
                    <div class="flex justify-between">
                      <input :type="password" class="h-10 w-full font-bold pl-1 rounded-lg focus:outline-none" value="Chaves"/>
                      <img @click="visibility=visibilityPassword(visibility)" :src="visibility"/>
                    </div>
                  </div>
                  <div class=" flex flex-col outline-2 rounded-lg bg-white m-2  p-2">
                    <label class="text-sm text-gray-400 pl-1">Confirm Password</label>
                    <div class="flex justify-between">
                      <input :type="Cpassword" class="h-10 w-full font-bold pl-1 rounded-lg focus:outline-none" value="Chaves"/>
                      <img @click="Cvisibility=CvisibilityPassword(Cvisibility)" :src="Cvisibility"/>
                    </div>
                  </div>
                  <div class="flex space-x-2 items-start">
                      <input type="checkbox" class=" h-12 w-12 font-bold pl-1 rounded-lg focus:outline-none" />
                      <p >
                        I agree to receive emails from news, announcements and promotional offers from <b class="font-black">PERIGON</b> via email
                      </p>
                  </div>
                    <router-link to="/termsAndConditions">
                      <button class="bg-black w-full my-4 focus:outline-none text-white h-16 rounded-xl">Next</button>
                    </router-link>
              </form>
              
          </div>
          <div class="fixed  bottom-1  w-full  flex justify-center">
      <hr class="  justify-self-center  m-auto w-32 rounded-full bg-black h-2">
          </div>
      </div>
      
    </ion-content>
  </ion-page>
</template>

<script >
  import { IonContent, IonPage, } from '@ionic/vue';
  import { defineComponent } from 'vue';
  
  export default defineComponent({
    name: 'AccounDetails',
    components: {
      IonContent,
      IonPage
    },
    data(){
      return {
        visibility:'icons/hidePasswordIcon.svg',
        Cvisibility:'icons/hidePasswordIcon.svg',
        password:'password',
        Cpassword:'password'

      }
     
    },
     methods:{
       visibilityPassword(e){
         if(e=='icons/hidePasswordIcon.svg'){
           this.password='text';
           return 'icons/visiblePasswordIcon.svg';
         }
         else{
           this.password='password';
           return 'icons/hidePasswordIcon.svg';
         }
       },
       CvisibilityPassword(e){
         if(e=='icons/hidePasswordIcon.svg'){
           this.Cpassword='text';
           return 'icons/visiblePasswordIcon.svg';
         }
         else{
           this.Cpassword='password';
           return 'icons/hidePasswordIcon.svg';
         }
       }
      }
  });
</script>

<style scoped>
ion-content{
  --ion-background-color:#E5E5E5;
}
</style>