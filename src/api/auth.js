// src/api/auth.js
import { postAPIWithoutAuth } from "./api";
import { setAccessToken } from "../utils/localStorage";

// API Endpoints
export const SIGNUP_URL = "auth";
export const LOGIN_URL = "auth/sign_in";
export const VERIFY_URL = "auth/verify_code";
export const RESEND_CODE_URL = "auth/resend_code";
export const FORGOT_PASSWORD_URL = "auth/password";

// Sign Up (customer or photographer)
export const signUpUser = async (body) => {
  const response = await postAPIWithoutAuth(SIGNUP_URL, body);
  if (response.success && response.data?.token) {
    setAccessToken(response.data.token);
  }
  return response;
};

// Login (customer or photographer)
export const loginUser = async (body) => {
  const response = await postAPIWithoutAuth(LOGIN_URL, body);
  if (response.success && response.data?.token) {
    setAccessToken(response.data.token);
  }
  return response;
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
