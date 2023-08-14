<template>
  <ion-page>
    <ion-content :fullscreen="true" class="ion-padding">
      <div class="container">
        <Greeting />
        <div class="search-container">
          <ion-icon :icon="search" class="search-icon"></ion-icon>
          <ion-input 
            v-model="searchTerm" 
            placeholder="What do you want to listen to?" 
            bounce="200"
            @input="searchTracks"></ion-input>
        </div>

        <ion-list mode="ios" lines="none">
          
          <p class="searchResult">Search results for: {{ searchTerm }}</p>
          <ion-item href="/track/1" lines="none" v-for="track in convertTracks" :key="track.id">
            <img :src="track.album.images[0].url" class="thumbnail"/>
            <div class="track-wrapper">
              <span class="title">{{ track.name }}</span>
              <span class="artist">{{ track.artists[0].name }}</span>
            </div>
          </ion-item>
          
          
        </ion-list>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import axios from 'axios'
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonIcon, IonInput, IonList, IonLabel, IonItem } from '@ionic/vue';
import { search } from 'ionicons/icons';

import Greeting from '../components/Greeting.vue';

const loading = ref(false)

const spotifyToken = ref('');
const clientId = '91fc5e4ee85c4ccb8723042582132d37'; // Replace with your actual client ID
const clientSecret = 'd7787de6bdc445b6a32b336273b936aa'; // Replace with your actual client secret
const encodedCredentials = btoa(`${clientId}:${clientSecret}`);

const searchTerm = ref('');
let tracks:any = ref([]);
let convertTracks = ref([]);

let authParams = {}

onMounted(async () => {
  try {
    const response = await axios.post('https://accounts.spotify.com/api/token', 'grant_type=client_credentials', {
      headers: {
        'Authorization': `Basic ${encodedCredentials}`,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    });
    spotifyToken.value = response.data.access_token;
  } catch (error) {
    console.error(error);
  }
  console.log(spotifyToken.value)
})

const searchTracks = async () => {
  console.log(searchTerm.value);
  try {
    const response = await axios.get(`https://api.spotify.com/v1/search?q=${searchTerm.value}&type=track`, {
      headers: {
        'Authorization': `Bearer BQDbKlekhACjWoBozcrDRXcXTGckDIRzbXGRhLehf3JXCiWhjQIc-wGvtJJfho8EJ8z3APDAish7c6vgV_KL5mC7qt68GhpwVB377a7kHI_BQefMW8Q`
      }
    }) 
    .then(response => (tracks.value = response.data.tracks.items))
    convertTracks.value = JSON.parse(JSON.stringify(tracks.value))

  } catch (error) {
    console.error(error);
  }
  console.log(convertTracks);
}

</script>

<style scoped>
ion-content, ion-footer {
  --background: #21272C;
  --color: #F5F5F5;
  color: #F5F5F5;
}
.container {
  height: 100%;
  width: 100%;
  /* background-color: #1DB854; */
  display: flex;
  align-content: flex-start;
  justify-content: flex-start;
  flex-direction: column;
}
.search-container {
  width: 100%;
  margin: 2rem 0;
  border-radius: 4px;
  padding: .4rem .8rem;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  background: #FFF;
  color: #121212;
}
ion-input {
  --placeholder-font-weight: 700;
  --border-radius: 4px;
  --placeholder-color: #121212;
  font-size: 1.1rem;
}
.search-icon {
  font-size: 1.8rem;
  margin-right: .8rem;
  color: #121212;
}
.searchResult {
  margin: 0 0 1rem 0;
  font-weight: 700;
  font-size: 22px
}
ion-list {
  --background: #21272C !important;
  background-color: #21272C !important;
}
ion-item {
  --color: #F5F5F5;
  padding: 0;
  margin-bottom: 1rem;
  --border: none;
  --background: #21272C;
  --padding-start: 0;
  --border-color: #21272C;
  --border-style: none;
  --border-width: 0;
  --inner-border-width: 0;
}
.thumbnail {
  width: 4rem;
  margin-right: 1rem;
  border-radius: 4px;
}
.track-wrapper {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-around; 
}
.title {
  color: #F5F5F5;
  font-size: 19px;
  font-weight: 600;
  margin-bottom: 8px;
  text-transform: capitalize;
}
.artist {
  font-size: 16px;
  text-transform: capitalize;
  color: #c9c9c9;
  font-weight: 500;
}
</style>
