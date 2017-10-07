import Vue from 'vue'
import axios from 'axios'
import * as api from './config'

// user
export const userLogin = (data) => {
    return axios.post(api.loginUrl, data, api.getHeader());
};
export const userRegister = (data) => {
    return Vue.axios.post(api.registerUrl, data);
};
export const userCompanies = () => {
    return axios.get(api.userCompanies, api.getHeader());
};

// company
export const createCompany = (data) => {
    return Vue.axios.post(api.createCompanyUrl, data, api.getHeader());
};
export const updateCompany = (data, company_id) => {
    let url = api.updateCompanyUrl.replace('{id}', company_id);
    return Vue.axios.post(url, data);
};