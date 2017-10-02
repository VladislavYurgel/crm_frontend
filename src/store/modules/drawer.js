const state = {
    drawer: false
};

const getters = {
    drawer: state => state.drawer
};

const mutations = {
    setDrawerState(state, newState = null) {
        state.drawer = newState === null ? !state.drawer : newState;
    }
};

const actions = {
    changeDrawerState({commit}, newState = null) {
        commit('setDrawerState', newState);
    }
};

export default {
    state, getters, mutations, actions
}