<template>
    <v-app id="example-1" toolbar footer light>
        <v-navigation-drawer v-if="drawerIsDisabled" persistent v-model="drawer" light enable-resize-watcher absolute value="">
            <v-list dense>
                <userNav :profile="profile"></userNav>
                
                <sidenavMenu></sidenavMenu>
            </v-list>
        </v-navigation-drawer>
        <v-toolbar class="indigo" dark fixed>
            <v-toolbar-side-icon v-if="drawerIsDisabled" @click.stop="drawer = !drawer"></v-toolbar-side-icon>

            <v-toolbar-title>{{ pageTitle }}</v-toolbar-title>

            <v-spacer></v-spacer>

            <sidebarButtons :profile="profile" :isAuth="isAuth"></sidebarButtons>
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
    import UserNav from './Sidenav/UserNav.vue'
    import SidebarButtons from './Sidebar/SidebarButtons.vue'
    export default {
        props: {
            pageTitle: String
        },
        data() {
            return {
                drawer: true
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
            'sidenavMenu': SidenavMenu,
            'userNav': UserNav,
            'sidebarButtons': SidebarButtons
        }
    }
</script>