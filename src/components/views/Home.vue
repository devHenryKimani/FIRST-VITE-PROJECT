<!-- <script setup>
import TabbableTextarea from '../TabbableTextarea.vue';
import { ref } from 'vue';
let comment = ref('test value');
</script> 
<template>
<form>
    <TabbableTextarea v-model="comment" style="width: 100%; height: 300px;"></TabbableTextarea>
</form>
</template> -->
<script setup>
import Quiz from '../Quiz/Quiz.vue';
import { state } from '@/store/quizStore';
</script>
<template>
    <main>
        <Quiz :quiz="state"/>
    </main>
</template>