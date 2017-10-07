import * as api from './../../api/api'

const state = {
    profile: null,
    token: null,
    userCompanies: null,
    userCurrentCompany: null
};

const getters = {
    profile: state => state.profile,
    token: state => state.token,
    isAuth: state => state.profile !== null,
    userCompanies: state => state.companies,
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
    },
    setUserCompanies(state, data) {
        state.userCompanies = data;
    },
    setUserCurrentCompany(state, company) {
        if (state.userCurrentCompany === null || state.userCurrentCompany.id !== company.id) {
            state.userCurrentCompany = company;
        }
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
    userCompanies({commit, state}) {
        return api.userCompanies()
            .then(response => {
                if (response.data.status) {
                    if (response.data.result.length !== 0) {
                        commit('setUserCompanies', response.data.result);
                        commit('setUserCurrentCompany', state.userCompanies[0]);
                    }
                    return response;
                }
            });
    },
    logout({commit, dispatch}) {
        commit('unsetProfile');
        dispatch('changeDrawerState', false);
    }
};

export default {
    state, getters, mutations, actions
}