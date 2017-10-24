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
export const companyDepartments = (company_id) => {
    let url = api.companyDepartments.replace('{id}', company_id);
    return axios.get(url, api.getHeader());
};
export const createDepartment = (data, company_id) => {
    let url = api.createDepartment.replace('{id}', company_id);
    return axios.post(url, data, api.getHeader());
};
export const createPosition = (data, company_id) => {
    let url = api.createPosition.replace('{id}', company_id);
    return axios.post(url, data, api.getHeader());
};
export const companyPositions = (company_id) => {
    let url = api.companyPositions.replace('{id}', company_id);
    return axios.get(url, api.getHeader());
};
export const companyUsers = (company_id) => {
    let url = api.companyUsers.replace('{id}', company_id);
    return axios.get(url, api.getHeader());
};