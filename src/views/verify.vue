<template>
  <ion-page>
    
    <ion-content :fullscreen="true">
      <div  class=" flex fixed z-20 justify-center py-4 px-2  bg-black w-full">
        <img src="icons/arrowBack.svg" class="absolute left-2 top-4 bottom-4"/>
        <p class="text-2xl font-bold text-white">Verify Account</p>
      </div>
      
        <div class=" flex flex-col space-y-4 p-4 pt-8 h-full">
          
            <div id="container" class="text-center pt-16 text-lg">
                <p>Thank you for registering with us!  We have sent a
                    verification code to your email <b class="font-bold">samantha.nicole@email.com</b>.
                    Kindly check your email to verify your account.</p>
            </div>
            <input type="tel" maxlength="6" class="bg-white text-center text-xl  h-12 border rounded-xl focus:outline-none p-2 border-gray-300 w-full"/>
            <router-link to="/loginPage">
                <button class="bg-black w-full  focus:outline-none text-white h-16 rounded-xl">VERIFY CODE</button>
            </router-link>
        <div class="text-justify pt-8">
            <p>
                If you cannot locate the verification email in your main inbox, 
                please check your junk or spam mailbox. If you still can’t locate it, <b class="font-bold">Resend Code</b>
            </p>
        </div>
        </div>
        

            
          <div class="fixed  bottom-0 bg-white  w-full  flex justify-center">
      <hr class="  justify-self-center  m-auto w-32 rounded-full bg-black h-2">
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
         
      }
  });
</script>

<style scoped>
ion-content{
  --ion-background-color:#E5E5E5;
}
</style>