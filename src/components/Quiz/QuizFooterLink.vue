<script setup>
import { state } from '@/store/quizStore';

</script>
<template>
    <div>
        <h5>{{ state.name }}</h5>
        <button @click="state.name='A new Quiz name'">Change Quiz Name</button>
        <ul>
            <li>
                <a href="#"> Get a job</a>
            </li>
             <li>
                <a href="#"> contact us</a>
            </li>
        </ul>
    </div>
</template>