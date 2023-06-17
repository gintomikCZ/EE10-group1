<template>
    <button @click="$emit('clicked')">{{ label }}</button>

</template>


<script>
export default {
    name: "BaseButton",
    props: ['label']
}


</script>


<style scoped>
    button {
        background-color: var(--primary);
        border: none;
        padding: 1rem;
        color: white;
        border-radius: 5px;
        cursor: pointer;        
    }

</style>