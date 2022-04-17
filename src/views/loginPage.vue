<template>
  <ion-page>
    <ion-content :fullscreen="true">
        <img class="bgImage" src="icons/welcomeToPerigo.gif">
          <div  class=" container flex w-full h-full m-auto px-8 flex-col justify-center ">
             <div class=" m-auto my-16 flex justify-center ">
               <p class="uppercase text-white text-4xl">Perigon</p>
              </div>
              <div  class=" relative flex flex-col space-y-2 my-8 w-full h-full  m-auto">
              <strong class="text-xl pl-1.5  text-white text-left uppercase">Login Account</strong>
              <div class="flex flex-col space-y-1 bg-white rounded-xl w-full min-w-0 min-h-0">
                  <div class="flex flex-col h-min p-4">
                      <label class="text-gray-500 text-sm pl-1">Email</label>
                      <input type="email" value="samantha.nicole@email.com"  class=" h-10 pl-2 bg-gray-50 focus:outline-none rounded-lg"/>
                  </div>
                  <hr class="bg-gray-200">
                  <div class="flex flex-col p-4">
                      <label class="text-gray-500 text-sm pl-1">Password</label>
                      <input type="password" value="Password"  class="h-10 pl-2 bg-gray-50 focus:outline-none rounded-lg"/>
                  </div>
                </div>
                <a class="text-white text-sm pl-1 my-2">Forgot password?</a>
                <router-link to="/home">
                  <button class="   w-full my-8 py-4 rounded-lg
                   bg-black text-white text-lg font-bold 
                    focus:outline-none uppercase">Login
                  </button>
                </router-link>
                <div class=" w-full space-y-10 flex justify-center mt-64  m-auto text-sm text-white ">
                  <p class="pt-4">Don’t have an account? <router-link to="/signUpPage"><a class="font-bold text-white underline">Create account</a></router-link></p>
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
  name: 'loginPage',
  components: {
    IonContent,
    IonPage,
  },
  
});
</script>

<style scoped>
.bgImage{
    position:absolute;
    overflow: hidden;
    width: 100%;
    height:100%;
    object-fit: fill;
    z-index:-1;
}
</style>
