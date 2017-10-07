import Store from './../store/index'

export const apiDomain = "http://127.0.0.1:8000/api/";
export const apiVersion = "v1/";

export const getHeader = function () {
    const headers = {
        headers: {
            'Accept': 'application/json',
            'Authorization': 'Bearer ' + Store.getters.token
        }
    };
    return headers;
};

// user auth
export const registerUrl = apiDomain + apiVersion + "auth/register";
export const loginUrl = apiDomain + apiVersion + "auth/login";
export const resetPasswordUrl = apiDomain + "password/email";
export const userCompanies = apiDomain + apiVersion + "user/companies";

// company
export const createCompanyUrl = apiDomain + apiVersion + "company/create";
export const updateCompanyUrl = apiDomain + apiVersion + "company/{id}/update";