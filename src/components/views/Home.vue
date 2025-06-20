<script setup>
import TheWelcome from "@/components/icons/TheWelcome.vue";
import{onMounted, ref} from "vue";
import { useStorage } from "@/composibles/useStorage";
let food = useStorage('food');
// onMounted(() =>{
//             alert("hi there");
//         });

        const message = ref("Hello World")
        
</script> 
<template>
<main>
    <form>
        Hi there
    </form>
</main>


{
    { <div>
        <P>
            whats your favorite food
            <input type="text" v-model="food"@input="write">
        </P>
    </div>
<div>
    <!-- <TheWelcome/> -->
    <p>{{ message }}</p>
    <input type="text" v-model="message"/>

</div> */} */}
</template>