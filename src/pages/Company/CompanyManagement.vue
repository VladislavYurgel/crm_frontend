<template>
    <page-content pageTitle="Company management">
        <v-flex xs12>
            <v-btn round primary dark @click="changeComponent('departments')">Departments</v-btn>
            <v-btn round primary dark @click="changeComponent('positions')">Positions</v-btn>
            <v-btn round primary dark @click="changeComponent('users')">Users</v-btn>
        </v-flex>
        <div class="management-tab">
            <div>
                <departments v-if="currComponent === 'departments'"></departments>
                <positions v-if="currComponent === 'positions'"></positions>
                <users v-if="currComponent === 'users'"></users>
            </div>
        </div>
    </page-content>
</template>

<script>
    import Departments from '../../components/Company/Departments.vue'
    import Positions from '../../components/Company/Positions.vue'
    import Users from '../../components/Company/Users.vue'
    export default {
        data() {
            return {
                currComponent: 'departments'
            }
        },
        components: {
            'departments': Departments,
            'positions': Positions,
            'users': Users
        },
        methods: {
            changeComponent(newComponent) {
                this.currComponent = newComponent;
            }
        }
    }
</script>