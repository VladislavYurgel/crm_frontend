<template>
    <page-content pageTitle="Registration">
        <v-layout>
            <v-flex xs12 sm4 offset-sm4>
                <v-card>
                    <v-card-title>
                        <h4 class="headline mb-0">{{ title }}</h4>
                    </v-card-title>
                    <v-card-text>
                        <v-text-field label="First name" v-model="user.first_name" type="email" required></v-text-field>
                        <v-text-field label="Last name" v-model="user.last_name" type="email" required></v-text-field>
                        <v-text-field label="Email" v-model="user.email" type="email" required></v-text-field>
                        <v-text-field label="Password" v-model="user.password" type="password" required></v-text-field>
                    </v-card-text>
                    <v-card-actions>
                        <v-btn flat class="blue--text" @click="registration()">Registration</v-btn>
                        <v-btn flat class="black--text" to="login">I'm already have an account</v-btn>
                    </v-card-actions>
                </v-card>
            </v-flex>
        </v-layout>
    </page-content>
</template>

<script>
    export default {
        data() {
            return {
                onSending: false,
                title: 'Registration',
                user: {
                    first_name: '',
                    last_name: '',
                    email: '',
                    password: ''
                }
            }
        },
        methods: {
            registration() {
                this.onSending = true;

                this.$store.dispatch('userRegistration', this.user)
                    .then(response => {
                        if (!response.data.status) {
                            alert(response.data.message);
                        } else {
                            this.$router.push({name: 'hello'});
                        }
                    });

                this.onSending = false;
            }
        }
    }
</script>