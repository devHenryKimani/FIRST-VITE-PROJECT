<script setup>
import { useCounterStore} from "@/store/CounterStore"
let Counter = useCounterStore();
</script>

<template>
    
<h2>{{ counter }}</h2>
    <button @click="counter.count++">Increment</button>
</template>