<template>
    <v-layout row wrap class="nav-avatar">
        <v-flex xs12 text-xs-center layout align-center justify-center>
            <v-avatar :tile="false" size="75px" class="grey lighten-4">
                <img src="http://www.oebmidsummit.com/img/noavatar.jpg" alt="">
            </v-avatar>
        </v-flex>
        <v-flex xs12 text-xs-center layout align-center justify-center class="nav-avatar-name">
            {{ profile.first_name }} {{ profile.last_name }}
        </v-flex>
        <v-flex xs12 text-xs-center layout align-center justify-center class="nav-avatar-name">
            <v-dialog persistent v-model="teamDialog" width="25%">
                <v-chip class="green white--text sel-company" slot="activator">
                    <v-icon left>business</v-icon>
                    <span v-if="company">
                        {{ company.name }}
                    </span>
                    <span v-else>
                        No company
                    </span>
                </v-chip>
                <v-card>
                    <v-card-title>Change current team</v-card-title>
                    <v-list>
                        <v-divider></v-divider>
                        <template v-for="(company, key) in companies">
                            <v-list-tile :key="company.id" @click="setUserCurrentCompany(company)">
                                <v-list-tile-content>
                                    <v-list-tile-title v-html="company.name"></v-list-tile-title>
                                </v-list-tile-content>
                                <v-list-tile-action v-if="company.created_by === profile.id">
                                    <v-chip class="orange white--text">
                                        Owner
                                        <v-icon right>star</v-icon>
                                    </v-chip>
                                </v-list-tile-action>
                            </v-list-tile>
                            <v-divider></v-divider>
                        </template>
                    </v-list>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn flat @click.native="teamDialog = false">Close</v-btn>
                    </v-card-actions>
                </v-card>
            </v-dialog>
        </v-flex>
    </v-layout>
</template>

<script>
    import { mapGetters } from 'vuex'
    export default {
        props: {
            profile: Object,
        },
        data() {
            return {
                teamDialog: false
            }
        },
        methods: {
            setUserCurrentCompany(company) {
                this.$store.dispatch('setUserCurrentCompany', company);
                this.teamDialog = false;
            }
        },
        computed: {
            ...mapGetters({
                companies: 'userCompanies',
                company: 'userCurrentCompany'
            })
        }
    }
</script>