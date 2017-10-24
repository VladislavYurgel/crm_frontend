<template>
    <div>
        <v-data-table v-if="departments"
                      :headers="headers"
                      :items="departments"
                      hide-actions
                      class="elevation-1">

            <template slot="items" scope="props">
                <td>{{ props.item.id }}</td>
                <td>{{ props.item.name }}</td>
            </template>
        </v-data-table>

        <v-dialog v-model="dialog" persistent width="50%">
            <v-btn dark fab right absolute class="pink" slot="activator" style="bottom: 15px">
                <v-icon>add</v-icon>
            </v-btn>
            <v-card>
                <v-card-title>
                    <span class="headline">Create the new department</span>
                </v-card-title>
                <v-card-text>
                    <v-container grid-list-md>
                        <v-layout wrap>
                            <v-flex xs12>
                                <v-text-field label="Name" v-model="newDepartment.name" required></v-text-field>
                            </v-flex>
                            <v-flex xs12>
                                <v-text-field label="Description" v-model="newDepartment.description" multi-line></v-text-field>
                            </v-flex>
                        </v-layout>
                    </v-container>
                    <small>*indicates required field</small>
                </v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn class="blue--text darken-1" flat @click.native="dialog = false">Close</v-btn>
                    <v-btn class="blue--text darken-1" flat @click.native="createDepartment()">Save</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </div>
</template>

<script>
    import Form from './Departments/Form.vue'
    export default {
        data() {
            return {
                departments: [],
                newDepartment: {
                    name: '',
                    description: ''
                },
                dialog: false,
                headers: [
                    {text: 'ID', value: 'id', align: 'left'},
                    {text: 'Department name', value: 'name', align: 'left'}
                ],
            }
        },
        components: {
            'dep-form': Form
        },
        methods: {
            createDepartment() {
                this.$store.dispatch('createDepartment', this.newDepartment)
                    .then(response => {
                        this.refreshDepartments();
                    });
            },
            refreshDepartments() {
                this.$store.dispatch('companyDepartments')
                    .then(response => {
                        if (response.data.status) {
                            this.departments = response.data.result;
                        }
                    });
            }
        },
        created: function() {
            this.refreshDepartments();
        }
    }
</script>