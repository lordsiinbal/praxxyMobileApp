<template>
  <ion-page>
    
    <ion-content :fullscreen="true">
      <div  class=" flex fixed z-20 justify-center py-4 px-2  bg-black w-full">
        <router-link to="/loginPage">
          <img src="icons/arrowBack.svg" class="absolute left-2 top-4 bottom-4"/>
        </router-link>
        <p class="text-2xl font-bold text-white">Create Account</p>
      </div>
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
          <div class=" flex  justify-center items-center w-16  z-10 h-16 rounded-full bg-white border-2 border-gray-400">
            <img src="icons/grayDetailIcon.svg" class="w-6 h-6"/>
          </div>
             <p class="text-gray-400 font-bold text-sm">Account Details</p>
          </div>
          <div class="flex flex-wrap flex-col   w-full gap-y-2 text-center items-center">
          <div class=" flex  justify-center items-center w-16  z-10 h-16 rounded-full bg-white border-2 border-gray-400">
            <img src="icons/checkGrayIcon.svg" class="w-6 h-6"/>
          </div>
             <p class="text-gray-400 font-bold text-sm">Terms and Conditions</p>
          </div>
      </div>
          <div class="flex flex-col justify-start p-4 m-auto  ">
             <strong class="uppercase font-extrabold text-2xl pl-4 mt-4">Personal Information</strong>
              <form class="flex flex-col gap-y-4" v-on:submit.prevent>
                  <div class=" flex flex-col outline-2 rounded-lg bg-white m-2  p-2">
                    <label class="text-sm text-gray-400 pl-1">First Name</label>
                    <input type="text" class="h-10 font-bold pl-1 rounded-lg focus:outline-none" value="Samantha Nicole"/>
                  </div>
                  <div class=" flex flex-col outline-2 rounded-lg bg-white m-2  p-2">
                    <label class="text-sm text-gray-400 pl-1">Last Name</label>
                    <input type="text" class="h-10 font-bold pl-1 rounded-lg focus:outline-none" value="Chaves"/>
                  </div>
                  <div class=" flex flex-col outline-2 rounded-lg bg-white m-2  p-2">
                    <label for  class="text-sm text-gray-400 pl-1">Birth Date</label>
                    <div class="flex flex-row items-center justify-between">
                       <input type="date"  id="birthDate" value="mm/dd/yyyy" class="bg-transparent
                         h-10 font-bold pl-1  appearance-none pointer-events-none rounded-lg focus:outline-none" />
                      <label for="birthDate">
                        <img src="icons/calendarIcon.svg"/>
                      </label>
                    </div>
                   
                  </div>
                  <div class=" flex flex-col outline-2 rounded-lg bg-white m-2  p-2">
                    <label class="text-sm text-gray-400 pl-1">Mobile Number</label>
                    <div>
                      <select class="bg-transparent appearance-none pointer-events-none text-gray-400">
                        <option selected>+63</option>
                      </select>
                      <input type="tel" maxlength="10" class="h-10 font-bold pl-1 rounded-lg focus:outline-none" />
                    </div>
                    </div>
                  <p class="font-bold text-3xl pl-4">Emergency Contact Information</p>
                  <div class=" flex flex-col outline-2 rounded-lg bg-white m-2  p-2">
                    <label class="text-sm text-gray-400 pl-1">Full Name</label>
                    <input type="text" class="h-10 font-bold pl-1 rounded-lg focus:outline-none" value="Larry Boy Santos"/>
                  </div>
                  <div class=" flex flex-col outline-2 rounded-lg bg-white m-2  p-2">
                    <label class="text-sm text-gray-400 pl-1">Mobile Number</label>
                    <div>
                      <select class="bg-transparent appearance-none pointer-events-none text-gray-400">
                        <option selected>+63</option>
                      </select>
                      <input type="tel" maxlength="10" class="h-10 font-bold pl-1 rounded-lg focus:outline-none" />
                    </div>
                    </div>
                    <router-link to="/accountDetails" >
                    <button class="bg-black my-4 w-full focus:outline-none text-white h-16 rounded-xl">Next</button>
                    </router-link>
              </form>
              <div class="flex justify-center mt-8">
                <router-link to="/loginPage"><a  class="underline  justify-self-center  text-black">Already signed up?</a></router-link>
              </div>
          </div>
    </ion-content>
  </ion-page>
</template>

<script >
  import { IonContent, IonPage, } from '@ionic/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    name: 'SignUp',
    components: {
      IonContent,
      IonPage
    },
  });
</script>

<style scoped>
ion-content{
  --ion-background-color:#E5E5E5;
}
</style>