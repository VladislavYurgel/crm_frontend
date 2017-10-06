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
export const userCompany = () => {
    return axios.get(api.userCompany);
};

// company
export const createCompany = (data) => {
    return Vue.axios.post(api.createCompanyUrl, data);
};
export const updateCompany = (data, company_id) => {
    let url = api.updateCompanyUrl.replace('{id}', company_id);
    return Vue.axios.post(url, data);
};