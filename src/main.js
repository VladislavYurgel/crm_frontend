import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/index'
import axios from 'axios'
import VueAxios from 'vue-axios'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import PageContent from './components/PageContent.vue'

Vue.use(VueAxios, axios);
Vue.use(Vuetify);

Vue.config.productionTip = false;

Vue.component('page-content', PageContent);

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    template: '<App/>',
    components: { App }
});
