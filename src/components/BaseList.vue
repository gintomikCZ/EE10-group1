<template>
    <ul>
        <li v-for="item in items" @click="$router.push(item.to)">
                <div class="left">
                    <div class="header">{{ item.header }}</div>
                    <div class="subtitle">{{ item.subtitle }}</div>
                </div>
                
                <div class="right">
                    {{ item.rightContent }}
                </div>
        </li>
    </ul>
</template>

<script>
    export default {
        props: {
            items: Array   
        }
}

</script>

<style scoped>
    ul {
        max-width: 40rem;
        margin: 2rem auto;
        cursor: pointer;
    }

    li {
        display: flex;
        border-radius: 12px;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
        padding: 1rem;  
        justify-content: space-between;
        margin: 1rem 0;
    }

    .header {
        font-weight: bold;
        font-size: 1.3rem;
    }
</style>