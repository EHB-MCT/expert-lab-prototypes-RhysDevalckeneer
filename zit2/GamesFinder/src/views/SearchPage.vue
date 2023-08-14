<template>
  <ion-page>
    <ion-content :fullscreen="true" class="ion-padding">
        <h1>Search</h1>
        <div class="search-container">
            <ion-icon :icon="search" class="search-icon"></ion-icon>
            <ion-input 
                v-model="searchQuery" 
                placeholder="What do you want to listen to?" 
                @input="searchGames"
            ></ion-input>
        </div>
        <ion-list>
            <ion-item v-for="game in convertedGames" :key="game.id" :href="'/boardgame/'+game.id">             
                <ion-label>
                    <img :src="game.image_url" class="game_thumb"/>
                    {{ game.name }}
                </ion-label>
            </ion-item>
        </ion-list>
    </ion-content>
  </ion-page>
</template>
<style scoped>
h1 {
    font-weight: bold;
}
.search-container {
    border: 1px solid #9c9c9c;
    padding: 0rem 1rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    border-radius: 4px;
}
ion-label {
    display: flex;
    align-content: center;
    align-items: center;
}
.game_thumb {
    width: 2rem;
}
ion-icon {
    margin-right: .8rem;
    font-size: 22px;
}
</style>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import axios from 'axios'
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonIcon, IonInput, IonItem, IonLabel, IonList } from '@ionic/vue';
import { search } from 'ionicons/icons';


let searchQuery = ref("");
let gamesData: any = ref([]);
let convertedGames: any = ref([]);

// let access_token = ref("");
// id 6ql61ialeftbx61p83qkgk11mdn4ao
// secret totgzdho0yi6y4iu8sbscj8n3rjawo

const searchGames = async () => {
    console.log(searchQuery.value);
    try {
        const response = await axios.get(`https://api.boardgameatlas.com/api/search?name=${searchQuery.value}&pretty=true&client_id=Uibw5GLfDb`)
        .then((response) => gamesData.value = response.data.games)
        convertedGames.value = JSON.parse(JSON.stringify(gamesData.value))
    } catch (error) {
        console.log(error)
    }
    console.log(convertedGames.value);
}

</script>
