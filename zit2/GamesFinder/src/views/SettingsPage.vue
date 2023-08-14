
<template>
  <ion-page>
    <ion-content :fullscreen="true" class="ion-padding">
      <h1>Settings</h1>
        <ion-list lines="none">
            <ion-item @click="logout" class="logout">
                <ion-icon :icon="logOutOutline" />
                <ion-label>Logout</ion-label>
            </ion-item>
        </ion-list>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { supabase } from '../lib/supbaseClient'
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonIcon, IonList, IonItem, IonLabel } from '@ionic/vue';
import { logOutOutline } from 'ionicons/icons';

const redirect = (url: string, asLink = true) => asLink ? (window.location.href = url) : window.location.replace(url);

async function logout() {
    const { error } = await supabase.auth.signOut();
    if(error) console.log(error); 
    else { console.log("logout has been successful"); redirect("/auth"); };
}
</script>

<style scoped>
h1 {
    font-weight: bold;
}
ion-icon {
    margin-right: .5rem;
    color: #ef4444;
}
ion-item {
    --color: #ef4444;
    --background: #fef2f2;
    --border-radius: 4px;
    font-weight: 500;
}
</style>