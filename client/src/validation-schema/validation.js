import * as yup from "yup";

let passwordRegex =
  /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*-_=?])[a-zA-Z0-9!@#$%^&*-_=?]{8,}/g;

export const emailValidation = yup.object().shape({
  email: yup.string().email().required("Please enter your email"),
});
export const passwordValidation = yup.object().shape({
  newPassword: yup
    .string()
    .min(8)
    .matches(passwordRegex, { message: "Please enter a strong password" })
    .required("Please enter the password"),
});
export const adminLoginValidation = yup.object().shape({
  email: yup.string().email().required("Please enter your email"),
  password: yup.string().required("Please enter your password"),
});
