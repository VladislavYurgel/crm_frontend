import * as api from './../../api/api'

const state = {
    departments: []
};

const getters = {

};

const mutations = {

};

const actions = {
    createCompany({dispatch}, data) {
        return api.createCompany(data)
            .then(response => {
                dispatch('userCompanies');
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

    companyDepartments({getters}) {
        return api.companyDepartments(getters.userCurrentCompany.id);
    },

    createDepartment({getters}, data) {
        return api.createDepartment(data, getters.userCurrentCompany.id)
            .then(response => {
                return response;
            });
    },

    companyPositions({getters}) {
        return api.companyPositions(getters.userCurrentCompany.id);
    },

    createPosition({getters}, data) {
        return api.createPosition(data, getters.userCurrentCompany.id)
            .then(response => {
                return response;
            });
    },

    companyUsers({getters}) {
        return api.companyUsers(getters.userCurrentCompany.id)
            .then(response => {
                return response;
            })
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