<template>
    <ion-footer class="ion-padding">
        <p>Login</p>
        <a @click="signupWithGoogle" class="oauth">
            <img src="../assets/images/google_auth.png" />
            <span>Log in with Google</span>
        </a>
        <ion-grid>
            <ion-row>
                <ion-col>
                    <div class="bar"></div>
                </ion-col>
                <ion-col>
                    <p>Or continue with</p>
                </ion-col>
                <ion-col>
                    <div class="bar"></div>
                </ion-col>
            </ion-row>
        </ion-grid>
        <form @submit.prevent="login">
            <div class="finput">
                <ion-icon :icon="mailOutline" />
                <ion-input
                    id="email" 
                    aria-label="email"
                    type="email"
                    placeholder="Your email"
                    v-model="email"
                    value=""
                />
             </div>
            <div class="finput">
                <ion-icon :icon="lockClosedOutline" />
                <ion-input 
                    id="password" 
                    aria-label="password"
                    type="password"
                    placeholder="Your Password"
                    v-model="password"
                    value=""
                />
            </div>
            <p class="forgot-pass">
                Forgot password?
            </p>
            <ion-button 
                fill="solid"
                size="default"
                expand="block"
                type="submit"
            >Login</ion-button>  
        </form>
    </ion-footer>
</template>

<script setup lang="ts">
import { supabase } from '../lib/supbaseClient'
import { IonContent, IonFooter, IonPage, IonButton, IonGrid, IonRow, IonCol, IonIcon } from '@ionic/vue';
import { mailOutline, lockClosedOutline } from 'ionicons/icons';

const signupWithGoogle = async (event: any) => {
    event.preventDefault();
    const { data, error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
    })
}

</script>

<style scoped>
.oauth {
    display: flex;
    align-items: center;
    justify-content: center;
    align-content: center;

    border: 1px solid #1e293b20;
    margin: 1rem 0;
    border-radius: 4px;
    padding: 12px;
    font-weight: 500;
    text-decoration: none;
}
.oauth img {
    width: 12%;
    margin-right: .8rem;
}

.oauth span {
    color: #1e293b;
}
ion-row {
    display: flex;
    align-items: center;
}
.bar {
    width: 100%;
    height: 2px;
    background-color: #334155;
    opacity: .15;
}
ion-col, ion-row, ion-grid {
    padding: 0;
}
ion-col p {
    font-size: 12px;
    color: #334155;
    font-weight: bold;
    opacity: .4;
    text-align: center;
}
.finput {
    display: flex;
    align-items: center;
    justify-content: start;

    border: 1px solid #1e293b20;
    margin: 1rem 0;
    border-radius: 4px;
    --padding-bottom: 10px;
    --padding-end: 10px;
    --padding-start: 10px;
    --padding-top: 10px;
}
ion-icon {
    font-size: 25px;
    color: #0f172a;
    margin: 0 0 0 .6rem;
    opacity: .8;
}

ion-input {
    margin: 0 0 0 .8rem;
}

.auth-intro {
    text-align: center;
}

.auth-intro h1 {
    font-weight: bold;
}

.forgot-pass {
    display: flex;
    align-items: center;
    justify-content: end;
    color:#0f172a;
    text-decoration: underline;
    font-size: 14px;
}

ion-button {
    --background:#0f172a;
    --background-hover:#334155;
    --background-activated:#1e293b;
    --background-focused:#1e293b;
    
    --border-radius: 4px;
    height: 50px;
    font-weight: bold;
}
</style>

