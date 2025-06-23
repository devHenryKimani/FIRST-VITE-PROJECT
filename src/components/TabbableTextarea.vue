<script setup>
defineProps({
    modelvalue:String
});
function onTabpress(e){
    let textarea = e.target;
    let val= textarea.value;
    start = textarea.selectionStart,
    end= textarea.selectionEnd;

    textarea.value = val.substring(0,start) + "\t" + val.substring(end);
    textarea.selectionStart = textarea.selectionEnd= start + 1;
}
</script>


<template>
    
    <textarea
     @keydown.tab.prevent="onTabpress"
     v-text="modelvalue"
     ></textarea>

</template>