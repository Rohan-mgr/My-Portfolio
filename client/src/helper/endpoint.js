import { config } from "../config";

export const AUTH_ENDPOINT = {
  resetPassword: config.baseURL + "/admin/reset",
  resetNewPassword: config.baseURL + "/admin/new-password",
};
