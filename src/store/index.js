import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import * as Cookies from 'js-cookie'

import drawer from './modules/drawer'
import user from './modules/user'

Vue.use(Vuex);

export default new Vuex.Store({
    plugins: [
        createPersistedState()
    ],
    modules: {
        drawer: drawer,
        user: user
    },
});