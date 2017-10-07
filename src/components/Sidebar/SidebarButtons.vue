<template>
    <div v-if="!isAuth">
        <v-btn :to="{name: 'Login'}" flat>Login</v-btn>
        <v-btn :to="{name: 'Registration'}" flat>Registration</v-btn>
    </div>
    <div v-else>
        <v-btn flat>{{ profile.first_name }} {{ profile.last_name }}</v-btn>
        <v-btn flat @click="logout()">Logout</v-btn>
    </div>
</template>

<script>
    export default {
        props: {
            profile: Object,
            isAuth: Boolean
        }
    }
</script>