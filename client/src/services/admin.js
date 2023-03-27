// import { _getSecureLs, getUserToken } from "../helper/storage";

import { AUTH_ENDPOINT } from "../helper/endpoint";
const { httpAuth } = require("../helper/http");

export const handleResetPassword = async (email) => {
  const URL = AUTH_ENDPOINT.resetPassword;
  console.log(URL);
  const response = await httpAuth.post(URL, JSON.stringify(email));
  return response;
};

export const handleSetNewPassword = async (id, token, newPassword) => {
  const URL = AUTH_ENDPOINT.resetNewPassword + `/${id}/${token}`;
  console.log(URL);
  const response = await httpAuth.post(URL, JSON.stringify(newPassword));
  return response;
};
