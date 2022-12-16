import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyCGI073RW9N3EKv2pkJyieOl9az0UsKnx4",
    authDomain: "movie-app-cbae4.firebaseapp.com",
    projectId: "movie-app-cbae4",
    storageBucket: "movie-app-cbae4.appspot.com",
    messagingSenderId: "210818004098",
    appId: "1:210818004098:web:e67e9c3b4e9c68cfa1709b",
    measurementId: "G-WFSMD983HE"
};

const app  = initializeApp(firebaseConfig);

export const db = getFirestore(app);