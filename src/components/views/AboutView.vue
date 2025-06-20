<script setup>
import{useFlash} from "@/composibles/useFlash";
 const{ flash } = useFlash();

</script>



<template>
    <div class="about">
        <p>
            <button @click="flash('it works on th about page')">About</button>
        </p>

    </div>
</template>