import * as api from './../../api/api'

const state = {

};

const getters = {

};

const mutations = {

};

const actions = {
    createCompany({}, data) {
        return api.createCompany(data)
            .then(response => {
                return response;
            });
    },
    updateCompany(data) {
        if (data.company_id === undefined || data.company_id === null) {
            return false;
        }
        delete data.company_id;
        return api.updateCompany(data, data.company_id)
            .then(response => {

                return response;
            });
    },
    createCompanyRoles(data) {
        if (data.company_id === undefined || data.company_id === null) {
            return false;
        }
    }
};

export default {
    state, getters, mutations, actions
}