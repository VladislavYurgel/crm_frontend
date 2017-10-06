<template>
    <div>
        <v-list-tile @click="item.clickCallback()" v-for="item in menu" :key="item.title">
            <v-list-tile-action>
                <v-icon>{{ item.icon }}</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
                <v-list-tile-title>{{ item.title }}</v-list-tile-title>
            </v-list-tile-content>
        </v-list-tile>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                menu: this.$sidenavMenuItems
            }
        }
    }
</script>