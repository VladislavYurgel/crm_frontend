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
export const companyDepartments = apiDomain + apiVersion + "company/{id}/departments";
export const createDepartment = apiDomain + apiVersion + "company/{id}/departments/create";
export const companyPositions = apiDomain + apiVersion + "company/{id}/positions";
export const createPosition = apiDomain + apiVersion + "company/{id}/positions/create";
export const companyUsers = apiDomain + apiVersion + "company/{id}/users";