import * as api from './../../api/api'

const state = {
    profile: null
};

const getters = {
    profile: state => state.profile,
    isAuth: state => state.profile !== null
};

const mutations = {
    setProfile(state, userProfile) {
        state.profile = userProfile;
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
                    dispatch('changeDrawerState', true);
                }
                return response;
            });
    },
    logout({commit, dispatch}) {
        commit('unsetProfile');
        dispatch('changeDrawerSate', false);
    }
};

export default {
    state, getters, mutations, actions
}