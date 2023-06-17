<template>
        <BaseList :items="tasksToDisplay"/>

</template>

<script>
import BaseList from '../components/BaseList.vue'
import db from '../utilities/db';

export default {
    name: "TaskView",
    data() {
        return{
            tasks:[]
        }
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

    created() {
        db.get('js4tasks').then(data => {
            this.tasks = data
            console.log(this.tasks);
        })
    },
    components: { BaseList }
}
</script>

