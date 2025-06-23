<script setup>
import QuizHeader from './QuizHeader.vue';
import QuizQuestion from './QuizQuestion.vue';
import QuizFooter from './QuizFooter.vue';
import { state } from '@/store/quizStore';

</script>

<template>
    <QuizHeader/>
    <QuizQuestion/>
    <QuizFooter />
</template>