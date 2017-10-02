import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'

import Auth from './../components/Auth/Auth.vue'
import Login from './../pages/Auth/Login.vue'
import Register from './../pages/Auth/Register.vue'

Vue.use(Router);

export default new Router({
  routes: [
      {
          path: '/',
          name: 'Hello',
          component: Hello
      },
      {
          path: '/auth',
          name: 'Auth',
          component: Auth,
          children: [
              {
                  path: 'login',
                  component: Login,
              },
              {
                  path: 'registration',
                  component: Register
              }
          ]
      }
  ]
})
