<template>
 <ion-page>
    <ion-tabs>
      <ion-router-outlet></ion-router-outlet>
      <ion-tab-bar>
        <ion-tab-button tab="home" href="/home">
          <ion-icon :icon="home" class="selected"/>
          <ion-icon :icon="homeOutline" class="unselected"/>
          <ion-label>Home</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="search" href="/search">
          <ion-icon :icon="search" class="selected"/>
          <ion-icon :icon="searchOutline" class="unselected"/>
          <ion-label>Search</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="settings" href="/settings">
          <ion-icon :icon="settings" class="selected"/>
          <ion-icon :icon="settingsOutline" class="unselected"/>
          <ion-label>Settings</ion-label>
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>
    
<script setup lang="ts">
import { IonPage, IonTabs, IonRouterOutlet, IonTabBar, IonTabButton, IonLabel, IonIcon } from '@ionic/vue';
import { home, settings, search, homeOutline, searchOutline, settingsOutline } from 'ionicons/icons';
</script>

<style>
ionn-icon {
  font-size: 32px;
}
.tab-selected .unselected {
  display: none;
}
.tab-selected .selected {
  display: initial !important;
}
.selected {
  display: none;
}
</style>
