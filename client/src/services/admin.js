// import { _getSecureLs, getUserToken } from "../helper/storage";

import { AUTH_ENDPOINT } from "../helper/endpoint";
const { httpAuth, http } = require("../helper/http");

export const handleResetPassword = async (email) => {
  const URL = AUTH_ENDPOINT.resetPassword;
  const response = await httpAuth.post(URL, JSON.stringify(email));
  return response;
};

export const handleSetNewPassword = async (id, token, newPassword) => {
  const URL = AUTH_ENDPOINT.resetNewPassword + `/${id}/${token}`;
  const response = await httpAuth.post(URL, JSON.stringify(newPassword));
  return response;
};
export const handleAdminLogin = async (credentials) => {
  const URL = AUTH_ENDPOINT.signIn;
  const response = await httpAuth.post(URL, JSON.stringify(credentials));
  return response;
};

export const handleProjectUpload = async (projectInfo) => {
  const URL = AUTH_ENDPOINT.uploadProject;
  const response = await http.post(URL, JSON.stringify(projectInfo));
  return response;
};
