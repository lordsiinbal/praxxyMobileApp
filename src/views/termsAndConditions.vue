<template>
  <ion-page>
    
    <ion-content :fullscreen="true">
      <div  class=" flex fixed z-20 justify-center py-4 px-2  bg-black w-full">
        <img src="icons/arrowBack.svg" class="absolute left-2 top-4 bottom-4"/>
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
          <div class=" flex  justify-center items-center w-16  z-10 h-16 rounded-full bg-black ">
            <img src="icons/checkWhiteIcon.svg" class="w-6 h-6"/>
          </div>
             <p class="uppercase font-extrabold text-sm">Terms and Conditions</p>
          </div>
      </div>
          <div class="flex flex-col justify-start p-4 m-auto  ">
             <strong class="uppercase font-extrabold text-2xl  my-4">Terms and Conditions</strong>
            <div class="text-justify leading-loose">
                <p>
                The following terms and conditions shall 
                be known as the "Agreement" and shall 
                govern the use of PERIGON's website 
                www.perigon.co (the "Website") and the
                PERIGON Mobile Application (the "App" ), 
                the purchase of PERIGON classes, 
                cancellation of purchase of PERIGON 
                classes, registration for classes, purchase 
                of merchandise, communication, with 
                PERIGON, and use of and attendance at 
                PERIGON's studios.
                </p>
                <p>These Terms of Service incorporates by 
                reference PERIGON's Privacy Policy.
                </p>
                <p>
                The following terms and conditions shall 
                known as the "Agreement" and shall 
                govern the use of PERIGON's website 
                www.perigon.co (the "Website") and the 
                PERIGON Mobile Application (the "App" ), 
                the purchase of PERIGON classes, 
                cancellation of purchase of PERIGON 
                classes, registration for classes, purchase 
                of merchandise, communication, with 
                PERIGON, and use of and attendance at 
                PERIGON's studios.
                </p>
                <p>
                These Terms of Service incorporates by 
                reference PERIGON's Privacy Policy.
                </p>
            </div>
              <router-link to="/verifyAccount">
                <button class="bg-black w-full my-4 focus:outline-none text-white h-16 rounded-xl">I ACCEPT</button>
              </router-link>
          </div>
            
          <div class="fixed  bottom-0 bg-white  w-full  flex justify-center">
      <hr class="  justify-self-center  m-auto w-32 rounded-full bg-black h-2">
          </div>
      </div>
      <div v-if="modal" class="transition delay-150 duration-300 ease-in-out  bg-gray-400 bg-opacity-50 px-10 fixed z-30 bottom-0 overflow-hidden inset-0 flex justify-center items-center">
                <div class=" bg-white px-8 pb-4 pt-8 rounded-xl w-full flex flex-col justify-center items-center">
                    <strong class="text-2xl">Scroll Down</strong>
                    <p class="text-gray-400 text-center">
                        Before you can proceed you must scroll to accept the latest Terms and Privacy Policy
                    </p>
                    <button  @click="closeModal()" class="bg-black w-full my-4 focus:outline-none text-white h-16 rounded-xl">OKAY, GOT IT</button>
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
        modal:true,
        visibility:'icons/hidePasswordIcon.svg',
        visPassword:[
          {
            icon:'icons/visiblePasswordIcon.svg'
          },
          
          {
            icon:'icons/hidePasswordIcon.svg'
          }
        ]

      }
     
    },
     methods:{
         closeModal(){
             this.modal=false;
         }
      }
  });
</script>

<style scoped>
ion-content{
  --ion-background-color:#E5E5E5;
}
</style>