<template>
  <ion-page>
    <ion-content :fullscreen="true" class="ion-padding">
      <h1>Home</h1>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/vue';
</script>

<style scoped>
h1 {
    font-weight: bold;
}
</style>
