<template>
    <page-content :page-title="title">
        <v-layout>
            <v-flex xs12 sm4 offset-sm4>
                <v-card>
                    <v-card-title>
                        <h4 class="headline mb-0">{{ title }}</h4>
                    </v-card-title>
                    <v-card-text>
                        <v-text-field label="Email" v-model="user.email" type="email" required></v-text-field>
                        <v-text-field label="Password" v-model="user.password" type="password" required></v-text-field>
                    </v-card-text>
                    <v-card-actions>
                        <v-btn flat class="blue--text" @click="login()">
                            <v-progress-circular v-if="onSending" indeterminate class="primary--text"></v-progress-circular>
                            <span v-else>Login</span>
                        </v-btn>
                        <v-btn flat class="black--text" to="registration">I don't have an account</v-btn>
                    </v-card-actions>
                </v-card>
            </v-flex>
        </v-layout>
    </page-content>
</template>

<script>
    export default {
        name: 'Login',
        data() {
            return {
                onSending: false,
                user: {
                    email: '',
                    password: ''
                },
                title: 'Login'
            }
        },
        methods: {
            login() {
                this.onSending = true;

                this.$store.dispatch('userLogin', this.user)
                    .then(response => {
                        if (!response.data.status) {
                            alert(response.data.message);
                        } else {
                            this.$router.push({name: 'Hello'});
                        }
                    })
                    .catch(error => {
                        this.onSending = false;
                        console.log(error);
                    });

                this.onSending = false;
            }
        }
    }
</script>