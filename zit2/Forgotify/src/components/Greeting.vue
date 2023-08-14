<template>
    <h1 class="greeting">{{ greeting }}</h1>
</template>

<script setup lang="ts">
let greeting: String = "";
let hour = new Date().getHours()

if( hour > 6 && hour < 12 ) {
    greeting = "Good morning"
} else if (hour > 12 && hour < 18) {
    greeting = "Good afternoon"
} else if (hour > 18 && hour < 23) {
    greeting = "Good evening"
} else if (hour > 0 && hour < 4) {
    greeting = "Good night"
}
</script>

<style scoped>
.greeting {
    font-weight: 700;
    font-size: 2rem;
}
</style>