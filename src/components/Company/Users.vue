<template>
    <div>
        <v-data-table v-if="users"
                      :headers="headers"
                      :items="users"
                      hide-actions
                      class="elevation-1">

            <template slot="items" scope="props">
                <td>{{ props.item.id }}</td>
                <td>{{ props.item.first_name }}</td>
                <td>{{ props.item.last_name }}</td>
                <td>{{ props.item.email }}</td>
            </template>
        </v-data-table>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                users: [],
                headers: [
                    {text: 'ID', value: 'id', align: 'left'},
                    {text: 'First name', value: 'first_name', align: 'left'},
                    {text: 'Last name', value: 'last_name', align: 'left'},
                    {text: 'Email', value: 'email', align: 'left'},
                ],
            }
        },
        methods: {
            refreshUsersList() {
                this.$store.dispatch('companyUsers')
                    .then(response => {
                        if (response.data.status) {
                            this.users = response.data.result;
                        }
                    });
            }
        },
        created: function() {
            this.refreshUsersList();
        }
    }
</script>