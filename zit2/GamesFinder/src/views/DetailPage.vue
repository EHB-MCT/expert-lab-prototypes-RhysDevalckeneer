<template>
    <ion-page>
        <ion-content class="ion-padding">
            <div class="back-container">
                <a href="/home" class="back">
                    <ion-icon :icon="chevronBack" class="back-icon"></ion-icon>
                    Back
                </a>
            </div>
            <img :src="convertedGameData.image_url" al="image"/>
            <h1 class="title">{{ convertedGameData.name }}</h1>
            <p>{{ convertedGameData.description_preview }}</p>
        </ion-content>
    </ion-page>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';
import { computed, onMounted, ref } from 'vue';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonIcon } from '@ionic/vue';
import { chevronBack } from 'ionicons/icons';
import axios from 'axios';

let route = useRoute();
let id: any = route.params.id;

let gameData =  ref("");
let convertedGameData = ref("");
// https://api.boardgameatlas.com/api/search?ids=${id}&pretty=true&client_id=Uibw5GLfDb

const getGameDetails = async () => {
    try {
        const response = await axios.get(`https://api.boardgameatlas.com/api/search?ids=${id}&pretty=true&client_id=Uibw5GLfDb`)
        .then((response) => gameData.value = response.data.games[0])
        convertedGameData.value = JSON.parse(JSON.stringify(gameData.value))
    } catch (error) {
        console.log(error)
    }
    console.log(convertedGameData.value);
}

onMounted(() => {
    getGameDetails();
    // console.log(convertedGameData.value);
})
</script>

<style scoped>
.back-container {
  margin-bottom: 2rem;
  
}
.back {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  text-decoration: none;
  color: #121212;
  font-weight: 700;
  font-size: 1.2rem;
}
.back-icon {
  color: #121212;
  margin-right: .4rem;
  font-size: 1.5rem;
}
.title {
    font-size: 22px;
    color: #121212;
    font-weight: 600;
}
</style>