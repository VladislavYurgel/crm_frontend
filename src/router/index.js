import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'

import Auth from './../components/Auth/Auth.vue'
import Login from './../pages/Auth/Login.vue'
import Register from './../pages/Auth/Register.vue'
import UserCompanies from './../pages/User/UserCompanies.vue'
import CompanyManagement from './../pages/Company/CompanyManagement.vue'

import store from './../store/index'

Vue.use(Router);

export default new Router({
  routes: [
      {
          path: '/',
          name: 'Hello',
          beforeEnter: (to, from, next) => {
              store.getters.isAuth ? next() : next({name: 'Login'});
          },
          component: Hello,
          children: [
              {
                  path: 'companyManagement',
                  name: 'companyManagement',
                  component: CompanyManagement
              }
          ]
      },
      {
          path: '/auth',
          name: 'Auth',
          component: Auth,
          children: [
              {
                  path: 'login',
                  name: 'Login',
                  component: Login,
              },
              {
                  path: 'registration',
                  name: 'Registration',
                  component: Register
              }
          ]
      }
  ]
})
