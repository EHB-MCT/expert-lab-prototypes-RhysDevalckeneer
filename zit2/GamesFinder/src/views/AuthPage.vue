<template>
<ion-page>
    
    <ion-footer>
        <SignUpPage v-if="isSignup" />
        <LoginPage v-else />
        <ion-button
            @click="isSignup = !isSignup"
            fill="clear"
            size="small"
            expand="full"
        >
            {{
                isSignup
                ? "Already have an account? Log In"
                : "Don't have an account yet? Sign Up"
            }}
        </ion-button>
    </ion-footer>
</ion-page>
</template>

<script lang="ts">
import { ref } from 'vue';
import { IonContent, IonFooter, IonPage, IonButton } from '@ionic/vue';
import { SignUpPage, LoginPage } from './index';

export default {
    name: "AuthPage",
    components: {
        LoginPage,
        SignUpPage,
        IonContent, IonFooter, IonPage, IonButton
    },
    props: {
        isSignup: Boolean,
    },
    setup() {
        const isSignup = ref(true);
        return { isSignup };
    }
}

let isSignup = ref(true);
</script>

<style scoped></style>