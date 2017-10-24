<template>
    <page-content :pageTitle="title">
        <v-data-table v-if="companies"
            :headers="headers"
            :items="companies"
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
                    <span class="headline">Create the new company</span>
                </v-card-title>
                <v-card-text>
                    <v-container grid-list-md>
                        <v-layout wrap>
                            <v-flex xs12>
                                <v-text-field label="Company name" v-model="newCompany.name" required></v-text-field>
                            </v-flex>
                            <v-flex xs12>
                                <v-text-field label="Company description" v-model="newCompany.description" multi-line></v-text-field>
                            </v-flex>
                        </v-layout>
                    </v-container>
                    <small>*indicates required field</small>
                </v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn class="blue--text darken-1" flat @click.native="dialog = false">Close</v-btn>
                    <v-btn class="blue--text darken-1" flat @click.native="createCompany()">Save</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </page-content>
</template>

<script>
    import { mapGetters } from 'vuex'
    export default {
        data() {
            return {
                title: "User companies",
                headers: [
                    {text: 'ID', value: 'id', align: 'left'},
                    {text: 'Company name', value: 'name', align: 'left'}
                ],
                newCompany: {
                    name: '',
                    description: ''
                },
                dialog: false
            }
        },
        beforeCreate() {
            this.$store.dispatch('userCompanies')
                .then(response => {
                    console.log(response);
                });
        },
        methods: {
            createCompany() {
                this.$store.dispatch('createCompany', this.newCompany)
                    .catch(error => {
                        console.log(error);
                    });
                this.dialog = false;
            }
        },
        computed: {
            ...mapGetters({
                companies: 'userCompanies'
            })
        }
    }
</script>