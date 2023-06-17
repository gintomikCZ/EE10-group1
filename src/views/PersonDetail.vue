<template>
    <BasePage title="person detail page" :loading="loading"> 
        <template v-slot:top-right>
        </template>
        <template v-slot:content>
            <h2>{{ person.first + " " + person.last }}</h2>
            <ul>
                <li>Position: {{ person.position }}</li>
                <li>Completed tasks: {{ completedTasks }} </li>
                <li>Total tasks: {{ totalTasks }} </li>
            </ul>
        </template>
        <template v-slot:footer>
            <BaseButton label="Edit person"/>
            <BaseButton label="Delete person"/>
        </template>
    </BasePage>
    
</template>

<script>
    import BaseButton from '../components/BaseButton.vue';
    import BasePage from '../components/BasePage.vue'
    import db from '../utilities/db';
    export default {
        name: "PersonDetail",
        data(){
            return {
                person:{},
                loading: true,
                tasks: []
            }
        },
        created(){
            const promises = [
                db.get("js4persons/" + this.$route.params.id).then(data => {
                    this.person = data;  
                }),
                db.get("js4personstasks?personid=" + this.$route.params.id).then(data => {
                    this.tasks = data;
                })
            ]
            Promise.all(promises).then(() => {
                this.loading = false;
            })
        },
        computed: {
            totalTasks() {
                return this.tasks.length  
            },
            completedTasks() {
                return this.tasks.filter(task => task.completed).length 
            }
        },
        components: { BasePage, BaseButton } 
    }
</script>