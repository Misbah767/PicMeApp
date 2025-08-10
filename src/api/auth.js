// src/api/auth.js
import { postAPIWithoutAuth } from "./api";

// API Endpoints
export const SIGNUP_URL = "auth";
export const LOGIN_URL = "auth/sign_in";
export const VERIFY_URL = "auth/verify_code";
export const RESEND_CODE_URL = "auth/resend_code";
export const FORGOT_PASSWORD_URL = "auth/password";
export const ME_URL = "users/me";

// Sign Up (customer or photographer)
export const signUpUser = async (body) => {
  return await postAPIWithoutAuth(SIGNUP_URL, body);
};

// Login (customer or photographer)
export const loginUser = async (body) => {
  return await postAPIWithoutAuth(LOGIN_URL, body);
};

// Verify Code
export const verifyCode = async (body) => {
  return await postAPIWithoutAuth(VERIFY_URL, body);
};

// Resend Code
export const resendCode = async (body) => {
  return await postAPIWithoutAuth(RESEND_CODE_URL, body);
};

// Forgot Password
export const forgotPassword = async (body) => {
  return await postAPIWithoutAuth(FORGOT_PASSWORD_URL, body);
};
