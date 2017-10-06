import * as api from './../../api/api'

const state = {
    profile: null,
    token: null
};

const getters = {
    profile: state => state.profile,
    token: state => state.token,
    isAuth: state => state.profile !== null
};

const mutations = {
    setProfile(state, userProfile) {
        state.profile = userProfile;
    },
    setToken(state, token) {
        state.token = token;
    },
    unsetProfile(state) {
        state.profile = null;
    }
};

const actions = {
    userLogin({commit, dispatch}, data) {
        return api.userLogin(data)
            .then(response => {
                console.log(response.data);
                if (response.data.status) {
                    commit('setProfile', response.data.result);
                    commit('setToken', response.data.token);
                    dispatch('changeDrawerState', true);
                }
                return response;
            });
    },
    userRegistration({commit, dispatch}, data) {
        return api.userRegister(data)
            .then(response => {
                if (response.data.status) {
                    commit('setProfile', response.data.result);
                    commit('setToken', response.data.token);
                    dispatch('changeDrawerState', true);
                }
                return response;
            });
    },
    userCompanies() {
        return api.userCompany();
    },
    logout({commit, dispatch}) {
        commit('unsetProfile');
        dispatch('changeDrawerState', false);
    }
};

export default {
    state, getters, mutations, actions
}