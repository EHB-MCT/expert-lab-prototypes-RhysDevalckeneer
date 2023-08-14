<template>
  <ion-page>
    <ion-content :fullscreen="true" class="ion-padding">
      <div class="container">
        <div class="back-container">
          <a href="/home" class="back">
            <ion-icon :icon="chevronBack" class="back-icon"></ion-icon>
            Back
          </a>
        </div>
        <div class="album-cover">
          <ion-avatar>
            <img
              src="https://www.progarchives.com/progressive_rock_discography_covers/1023/cover_13251562016_r.jpg"
              alt="album cover"
            />
          </ion-avatar>
        </div>
        <div class="album-info">
          <div class="album-text">
            <marquee-text class="title" :duration="10" :repeat="2"> ob-la-di, ob-la-da 
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </marquee-text>
            <div class="album-heart">
              <button @click="favorite = !favorite" id="open-toast">
                <ion-icon v-if="favorite" :icon="heart" class="heart-icon liked"></ion-icon>
                <ion-icon v-else :icon="heartOutline" class="heart-icon"></ion-icon>
              </button>
              <ion-toast trigger="open-toast" :message="favorite ? 'Added to liked songs.' : 'Removed from liked songs.'" :duration="2500"></ion-toast>
            </div>
          </div>
          <h4 class="artist">The Beatles</h4>
        </div>
        <div class="timer">
          <ion-range aria-label="Volume"></ion-range>
          <div class="time">
            <p class="time-value">0:00</p>
            <p class="time-value">2:49</p>
          </div>
        </div>
        <div class="controls">
          <ion-icon :icon="shuffle" class="control-icon small"></ion-icon>
          <ion-icon :icon="playSkipBack" class="control-icon small disabled"></ion-icon>
          <button @click="isPlaying = !isPlaying">
            <ion-icon v-if="isPlaying" :icon="pauseCircle" class="control-icon play"></ion-icon>
            <ion-icon v-else :icon="playCircle" class="control-icon play"></ion-icon>
          </button>
          <ion-icon :icon="playSkipForward" class="control-icon small"></ion-icon>
          <ion-icon :icon="repeat" class="control-icon small"></ion-icon>
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonIcon, IonAvatar, IonToast, IonRange } from '@ionic/vue';
import { heartOutline, heart, playCircle, playSkipBack, playSkipForward, pauseCircle, shuffle, repeat, chevronBack } from 'ionicons/icons';
import MarqueeText from 'vue-marquee-text-component'

let favorite: any = ref(false);
let isPlaying: any = ref(false);

</script>

<style scoped>
ion-content, ion-footer {
  --background: #21272C;
  --color: #F5F5F5;
  color: #F5F5F5;
}
p, button{
  color: #FFF;
}
.container {
  height: 100%;
  width: 100%;
  /* background-color: #1DB854; */
  display: flex;
  align-content: center;
  justify-content: center;
  flex-direction: column;
}
.back-container {
  margin-bottom: 2rem;
  
}
.back {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  text-decoration: none;
  color: #F5F5F5;
  font-weight: 700;
  font-size: 1.4rem;
}
.back-icon {
  color: #F5F5F5;
  margin-right: .4rem;
  font-size: 2rem;
}
.album-cover {
  display: flex;
  align-content: center;
  align-items: center;
  justify-content: center;
  margin-bottom: 3rem;
}
ion-avatar {
  width: 100%;
  height: 100%;
  --border-radius: 12px;
}
.title {
  width: 90%;
  font-weight: 800;
  text-transform: capitalize;
  margin: 0 1rem .2rem 0;
  font-size: 1.65rem;
}
.artist {
  font-weight: 400;
  text-transform: capitalize;
  color: #bcbcbc;
}
.album-text {
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: flex-start;
}
button {
  background: none;
}
.heart-icon {
  margin-top: .15rem;
  font-size: 34px;
  color: #F5F5F5;
}
.liked {
  color: #1DB954;
}
.liked > ion-icon {
  box-shadow: 0px 0px 15px 5px rgba(29, 184, 84, 0.3);
}
ion-toast {
  --border-radius: 6px
}
.timer {
  margin-top: 1.5rem;
  display: flex;
  flex-direction: column;
}
.time {
  margin: -1rem 0 0 0;
  padding: 0;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
}
.time-value {
  color: #6c7684;
}
ion-range {
  --bar-background: #32373d;
  --bar-background-active: #1DB954;
}
.controls {
  margin-top: 1.2rem;
  display: flex;
  align-content: center;
  align-items: center;
  justify-content: space-between;
}
.control-icon {
  font-size: 5rem;
}
.small {
  font-size: 2.2rem;
}
.disabled {
  color: #4b5563;
}
</style>
