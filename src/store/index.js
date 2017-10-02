import Vue from 'vue'
import Vuex from 'vuex'

import drawer from './modules/drawer'
import user from './modules/user'

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        drawer: drawer,
        user: user
    }
});