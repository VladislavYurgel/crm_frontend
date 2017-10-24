<template>
    <div>
        <v-data-table v-if="positions"
                      :headers="headers"
                      :items="positions"
                      hide-actions
                      class="elevation-1">

            <template slot="items" scope="props">
                <td>{{ props.item.id }}</td>
                <td>{{ props.item.title }}</td>
                <td>{{ props.item.department_id }}</td>
                <td>{{ props.item.default_salary }}</td>
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
                                <v-text-field label="Title" v-model="position.title" required></v-text-field>
                            </v-flex>
                            <v-flex xs12>
                                <v-text-field label="Department" v-model="position.department_id" required></v-text-field>
                            </v-flex>
                            <v-flex xs12>
                                <v-text-field label="Default salary" v-model="position.default_salary" required></v-text-field>
                            </v-flex>
                            <v-flex xs12>
                                <v-text-field label="Description" v-model="position.description" multi-line required></v-text-field>
                            </v-flex>
                        </v-layout>
                    </v-container>
                    <small>*indicates required field</small>
                </v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn class="blue--text darken-1" flat @click.native="dialog = false">Close</v-btn>
                    <v-btn class="blue--text darken-1" flat @click.native="createPosition()">Save</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </div>
</template>

<script>

    export default {
        data() {
            return {
                positions: [],
                position: {
                    department_id: 0,
                    default_salary: 0,
                    title: '',
                    description: ''
                },
                dialog: false,
                headers: [
                    {text: 'ID', value: 'id', align: 'left'},
                    {text: 'Position', value: 'title', align: 'left'},
                    {text: 'Department', value: 'department_id', align: 'left'},
                    {text: 'Default salary', value: 'default_salary', align: 'left'}
                ],
            }
        },
        methods: {
            refreshPositions: function() {
                this.$store.dispatch('companyPositions')
                    .then(response => {
                        if (response.data.status) {
                            this.positions = response.data.result;
                        }
                    });
            },
            createPosition: function() {
                this.$store.dispatch('createPosition', this.position)
                    .then(response => {
                        this.dialog = false;
                        this.refreshPositions();
                    });
            }
        },
        created: function() {
            this.refreshPositions();
        }
    }
</script>