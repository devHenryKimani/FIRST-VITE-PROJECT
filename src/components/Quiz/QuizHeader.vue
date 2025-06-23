<script setup>

import { state } from '@/store/quizStore.js';
</script>

<template>
    <div>
        <h3>{{ state.name }}</h3>
        <p>Welcome to your first quiz. How do think youll do?</p>
    </div>
</template>