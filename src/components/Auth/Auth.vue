<template>
    <router-view></router-view>
</template>

<script>
    import Login from './../../pages/Auth/Login.vue'
    import Register from './../../pages/Auth/Register.vue'
    export default {
        name: 'Auth',
        components: {
            'login': Login,
            'registration': Register
        }
    }
</script>