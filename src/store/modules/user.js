import * as api from './../../api/api'

const state = {
    profile: null,
    token: null,
    userCompanies: [],
    userCurrentCompany: null
};

const getters = {
    profile: state => state.profile,
    token: state => state.token,
    isAuth: state => state.profile !== null,
    userCompanies: state => state.userCompanies,
    userCurrentCompany: state => state.userCurrentCompany
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
        state.token = null;
        state.userCompanies = null;
        state.userCurrentCompany = null;
    },
    setUserCompanies(state, data) {
        state.userCompanies = data;
    },
    setUserCurrentCompany(state, company) {
        state.userCurrentCompany = company;
    }
};

const actions = {
    userCompanies({commit, state}) {
        return api.userCompanies()
            .then(response => {
                console.log(response);
                if (response.data.status) {
                    if (response.data.result.length !== 0) {
                        commit('setUserCompanies', response.data.result);
                        let companyIdExists =
                            state.userCurrentCompany !== null &&
                            state.userCompanies.map(function(item) {return item.id;}).indexOf(state.userCurrentCompany.id) !== -1;
                        if (!companyIdExists)
                            commit('setUserCurrentCompany', state.userCompanies[0]);
                    } else {
                        commit('setUserCompanies', []);
                        commit('setUserCurrentCompany', null);
                    }
                    return response;
                }
            });
    },
    userLogin({commit, dispatch}, data) {
        return api.userLogin(data)
            .then(response => {
                console.log(response.data);
                if (response.data.status) {
                    commit('setProfile', response.data.result);
                    commit('setToken', response.data.token);
                    dispatch('changeDrawerState', true);
                    dispatch('userCompanies');
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
    setUserCurrentCompany({commit}, data) {
        commit('setUserCurrentCompany', data);
    },
    logout({commit, dispatch}) {
        commit('unsetProfile');
        dispatch('changeDrawerState', false);
    }
};

export default {
    state, getters, mutations, actions
}