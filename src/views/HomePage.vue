<template>
  <ion-page>
    <ion-content :fullscreen="true">
    <div  class=" container flex flex-col ">
        <div class=" bg-black w-52 h-52 m-auto my-16 flex justify-center rounded-full">
       <img :src="content[index].icon">
      </div>
      <div  class="text-center my-8  m-auto">
       <strong class="text-xl uppercase">{{content[index].header}}</strong>
       <p class="text-lg text-gray-500">{{content[index].text}}</p>
      </div>
      <div class="flex space-x-2 my-4 m-auto ">
        <div :class="{active:index==0}" class=" w-4 h-4 bg-gray-400 rounded-full"></div>
        <div  :class="{active:index==1}" class="w-4 h-4 bg-gray-400 rounded-full"></div>
        <div  :class="{active:index==2}" class="w-4 h-4 bg-gray-400 rounded-full"></div>
      </div>
      <div class=" flex flex-col my-2 m-auto ">
        
        <button  @click=" next()" class="w-full py-4 rounded-lg bg-black text-white text-lg font-bold focus:outline-none">Next</button>
        
        <router-link to="/loginPage">
        <button  class="w-52 py-4 rounded-lg  text-black text-lg font-bold focus:outline-none">Skip</button>
      </router-link>
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
          xIndex:0,
          index:0,
          path:'',
            content:[
              {
                  icon:'icons/buyPassesIcon.svg',
                  header:'BUY PASSES',
                  text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pulvinar ac neque, enim cursus est facilisis."
              },
              {
                  icon:'icons/bookArideIcon.svg',
                  header:'BOOK A RIDE',
                  text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pulvinar ac neque, enim cursus est facilisis."
              },
              {
                  icon:'icons/paymentIcon.svg',
                  header:'Pay at your Convenience',
                  text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pulvinar ac neque, enim cursus est facilisis."
              }
          ]
      }
  },
methods:{
next(){
  this.xIndex+=1;

  if(this.xIndex>2){
    return  this.$router.push('/loginPage')
  }
  else{
    this.index=this.xIndex
  }
  
}
}
  
});
</script>

<style scoped>
.active{
    background-color:black;
}
.container {
  text-align: center;
}
</style>
