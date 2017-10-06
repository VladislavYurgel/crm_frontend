import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

import drawer from './modules/drawer'
import user from './modules/user'
import company from './modules/company'

Vue.use(Vuex);

export default new Vuex.Store({
    plugins: [
        createPersistedState()
    ],
    modules: {
        drawer: drawer,
        user: user,
        company: company
    },
});