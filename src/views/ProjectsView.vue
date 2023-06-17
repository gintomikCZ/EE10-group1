<template>
    <BaseList :items="projectsToDisplay"/>
</template>

<script>
import BaseList from '../components/BaseList.vue';
import db from '../utilities/db';
export default {
    name: "ProjectsView",
    data() {
        return {
            projects: [],
            tasks: []
        };
    },

    computed: {
        projectsToDisplay() {
            return this.projects.map(item => { 
                return {
                    to: "/project/" + item.id,
                    id: item.id,
                    header: item.project,
                    rightContent: this.tasks.filter(task => task.projectid === item.id && task.completed).length + "/" + this.tasks.filter(task => task.projectid === item.id).length 
                }
            })
        }
    },

    created() {
        db.get("js4tasks").then(data => {
            this.tasks = data;
        })
        db.get("js4projects").then(data => {
            this.projects = data;
        });
    },
    components: { BaseList }
}

</script>