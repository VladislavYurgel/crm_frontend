<template>
    <v-app id="example-1" toolbar footer>
        <v-navigation-drawer v-if="drawerIsDisabled" persistent v-model="drawer" light enable-resize-watcher absolute value="">
            <v-list dense>
                <v-list-tile @click="">
                    <v-list-tile-action>
                        <v-icon>home</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                        <v-list-tile-title>Home</v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>
            </v-list>
        </v-navigation-drawer>
        <v-toolbar class="indigo" dark fixed>
            <v-toolbar-side-icon v-if="drawerIsDisabled" @click.stop="drawer = !drawer"></v-toolbar-side-icon>

            <v-toolbar-title>{{ pageTitle }}</v-toolbar-title>

            <v-spacer></v-spacer>

            <div v-if="!isAuth">
                <v-btn :to="{name: 'login'}" flat>Login</v-btn>
                <v-btn :to="{name: 'registration'}" flat>Registration</v-btn>
            </div>
            <div v-else>
                <v-btn flat>{{ profile.first_name }} {{ profile.last_name }}</v-btn>
                <v-btn flat @click="logout()">Logout</v-btn>
            </div>
        </v-toolbar>
        <main>
            <v-container fluid>
                <slot></slot>
            </v-container>
        </main>
    </v-app>
</template>

<script>
    import { mapGetters } from 'vuex'
    export default {
        props: {
            pageTitle: String
        },
        data() {
            return {
                drawer: true
            }
        },
        methods: {
            logout() {
                this.$store.dispatch('logout');
            }
        },
        computed: {
            ...mapGetters({
                drawerIsDisabled: 'drawer',
                isAuth: 'isAuth',
                profile: 'profile'
            })
        }
    }
</script>