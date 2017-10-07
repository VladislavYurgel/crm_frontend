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
        computed: {
            ...mapGetters({
                companies: 'userCompanies',
                company: 'userCurrentCompany'
            })
        }
    }
</script>