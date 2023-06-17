<template>
    <BaseList :items="personsToDisplay"/>
</template>

<script>
import BaseList from '../components/BaseList.vue'
import db from '../utilities/db';
export default {
    name: "PersonsView",
    data() {
        return{
            persons:[],
            tasks:[],
            personsTasks:[]
        }
    },

    computed: {
        personsToDisplay() {
            return this.persons.map(item => { 
                return {
                    to: "/person/" + item.id,
                    id: item.id,
                    header: item.first + " " + item.last,
                    subtitle: item.position,
                    rightContent: this.personsTasks.filter(personTask => item.id === personTask.personid && personTask.completed).length + "/" + this.personsTasks.filter(personTask => item.id === personTask.personid).length  
                }
            })
        }},

    created() {
        db.get('js4persons').then(data => {
            this.persons = data
        })
        db.get("js4personstasks").then(data => {
            this.personsTasks = data;
            console.log(this.personsTasks)
        })
    },
    components: { BaseList }
}
</script>