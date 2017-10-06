<template>
    <v-app id="example-1" toolbar footer light>
        <v-navigation-drawer v-if="drawerIsDisabled" persistent v-model="drawer" light enable-resize-watcher absolute value="">
            <v-list dense>
                <v-layout row wrap class="nav-avatar">
                    <v-flex xs12 text-xs-center layout align-center justify-center>
                        <v-avatar :tile="false" size="75px" class="grey lighten-4">
                            <img src="http://www.oebmidsummit.com/img/noavatar.jpg" alt="">
                        </v-avatar>
                    </v-flex>
                    <v-flex xs12 text-xs-center layout align-center justify-center class="nav-avatar-name">
                        {{ profile.first_name }} {{ profile.last_name }}
                    </v-flex>
                </v-layout>

                <sidenavMenu></sidenavMenu>

            </v-list>
        </v-navigation-drawer>
        <v-toolbar class="indigo" dark fixed>
            <v-toolbar-side-icon v-if="drawerIsDisabled" @click.stop="drawer = !drawer"></v-toolbar-side-icon>

            <v-toolbar-title>{{ pageTitle }}</v-toolbar-title>

            <v-spacer></v-spacer>

            <!-- SIDEBAR BUTTONS -->
            <div v-if="!isAuth">
                <v-btn :to="{name: 'Login'}" flat>Login</v-btn>
                <v-btn :to="{name: 'Registration'}" flat>Registration</v-btn>
            </div>
            <div v-else>
                <v-btn flat>{{ profile.first_name }} {{ profile.last_name }}</v-btn>
                <v-btn flat @click="logout()">Logout</v-btn>
            </div>
            <!-- END SIDEBAR BUTTONS -->

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
    import SidenavMenu from './Sidenav/SidenavMenu.vue'
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
                this.$router.go(history.current);
            }
        },
        computed: {
            ...mapGetters({
                drawerIsDisabled: 'drawer',
                isAuth: 'isAuth',
                profile: 'profile'
            })
        },
        components: {
            'sidenavMenu': SidenavMenu
        }
    }
</script>