<template>
  <ion-page>
    <ion-content :fullscreen="true">
    
      <div id="container">
        <strong class=" text-white ">PERIGON</strong>
        <p>The Undercover Athletes</p>
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
  created(){
    setTimeout(()=>this.$router.push({path:'/homePage'}),2000);
  }
  
});
</script>

<style scoped>
#container {
  text-align: center;
  
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}

#container strong {
  font-size: 76px;
  line-height: 26px;
  line-height: 77px;
}

#container p {
  font-family: 'Helvetica';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 150%;
color:white;
}

#container a {
  text-decoration: none;
}
ion-content{
  --ion-background-color:black;
}
</style>
