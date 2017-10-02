import Vue from 'vue'
import * as api from './config'

export const userLogin = (data) => {
    return Vue.axios.post(api.loginUrl, data);
};
export const userRegister = (data) => {
    return Vue.axios.post(api.registerUrl, data);
};