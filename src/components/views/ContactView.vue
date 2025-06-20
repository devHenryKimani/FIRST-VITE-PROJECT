
<script setup>
import{useFlash} from "@/composibles/useFlash";
 const{ flash } = useFlash();

</script>

<template>
    <div class="about">
        <p>
            <button @click="flash('it works')">contact</button>
        </p>

    </div>
</template>