<template>
    <BasePage title="project detail page" :loading="loading"> 
        <template v-slot:top-right>
           <BaseButton label="add task"/>
        </template>
        <template v-slot:content>
            <h2>{{ project.project }}</h2>
            <BaseList :items="tasksToDisplay"/>
        </template>
        <template v-slot:footer>
            <BaseButton label="Edit project"/>
            <BaseButton label="Delete project"/>
        </template>
    </BasePage>
    
    
</template>

<script>
    import BaseButton from '../components/BaseButton.vue';
    import BasePage from '../components/BasePage.vue';
    import db from '../utilities/db';
    import BaseList from '../components/BaseList.vue'
    export default {
        name: "ProjectDetail",
        data(){
            return {
                project:{},
                tasks:[],
                loading: true
            }
        },
        created(){
            const p1 = db.get("js4projects/" + this.$route.params.id).then(data => {
                this.project = data;
            });
            const p2 = db.get("js4tasks?projectid=" + this.$route.params.id).then(data => {
                this.tasks = data;
            });
            Promise.all([p1, p2]).then(() => {
                this.loading = false
            })
        },
        computed: {
            tasksToDisplay() {
                return this.tasks.map(item => { 
                    return {
                        to: "/task/" + item.id,
                        id: item.id,
                        header: item.task,
                        subtitle: item.project,
                        rightContent: item.completed
                    }
                })
            }
        },
        components: { BaseList, BasePage, BaseButton }
    }
</script>