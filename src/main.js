import Vue from 'vue'
import App from './App'
import router from './router'
import VueMaterial from 'vue-material'
import Vuex from 'vuex'

Vue.use(VueMaterial);
Vue.use(Vuex);
require('vue-material/dist/vue-material');

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
});
