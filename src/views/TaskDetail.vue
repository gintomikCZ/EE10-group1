<template>
    <BasePage title="task detail page" :loading="loading"> 
        <template v-slot:top-right>
        </template>
        <template v-slot:content>
            <h2>{{ task.task }}</h2>
            <ul>
                <li v-if="task.priority===1">Priority: Low</li>
                <li v-else-if="task.priority===2">Priority: Medium</li>
                <li v-else>Priority: High</li>
                <li v-if="task.completed"> Completed: Yes</li>
                <li v-else>Completed: In Progress</li>
                <li>Project: {{ task.project }}</li>
                <li>Date: {{ formatDate(task.date) }}</li>
            </ul>
        </template>
        <template v-slot:footer>
            <BaseButton label="Edit task"/>
            <BaseButton label="Delete task"/>
        </template>
    </BasePage>
    
</template>

<script>
    import {formatDate} from '../utilities/dateFunctions.js'
    import BaseButton from '../components/BaseButton.vue';
    import BasePage from '../components/BasePage.vue';
    import db from '../utilities/db';
    export default {
        name: "TaskDetail",
        data(){
            return {
                task:{},
                loading: true
            }
        },
        methods: {
            formatDate(str){
                return formatDate(str)
            }
        },
        created(){
            db.get("js4tasks/" + this.$route.params.id).then(data => {
                this.task = data;
                this.loading = false   
            });
        },
        components: {BasePage, BaseButton}
    
    }
</script>
<style scoped>
    ul {
        max-width: 40rem;
        margin: 2rem auto;
        }

    li {
        display: flex;
        border-radius: 12px;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
        padding: 1rem;  
        justify-content: space-between;
        margin: 1rem 0;
    }

    h2 {
        text-align: center;
    }

</style>