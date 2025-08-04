// src/utils/localStorage.js

const TOKEN_KEY = 'access_token';
const REMEMBER_ME_KEY = 'remember_me';

/**
 * Set access token in localStorage
 * @param {string} value - JWT token
 */
export const setAccessToken = (value) => {
  try {
    localStorage.setItem(TOKEN_KEY, value);
  } catch (err) {
    console.error('Error setting access token:', err);
  }
};

/**
 * Get access token from localStorage
 * @returns {string|null}
 */
export const getAccessToken = () => {
  try {
    return localStorage.getItem(TOKEN_KEY);
  } catch (err) {
    console.error('Error getting access token:', err);
    return null;
  }
};

/**
 * Remove access token from localStorage
 */
export const removeAccessToken = () => {
  try {
    localStorage.removeItem(TOKEN_KEY);
  } catch (err) {
    console.error('Error removing access token:', err);
  }
};

/**
 * Set remember me value
 * @param {string} value - Typically "true" or "false"
 */
export const setRememberME = (value) => {
  try {
    localStorage.setItem(REMEMBER_ME_KEY, value);
  } catch (err) {
    console.error('Error setting remember me:', err);
  }
};

/**
 * Get remember me value
 * @returns {string|null}
 */
export const getRememberME = () => {
  try {
    return localStorage.getItem(REMEMBER_ME_KEY);
  } catch (err) {
    console.error('Error getting remember me:', err);
    return null;
  }
};

/**
 * Remove remember me value
 */
export const removeRememberME = () => {
  try {
    localStorage.removeItem(REMEMBER_ME_KEY);
  } catch (err) {
    console.error('Error removing remember me:', err);
  }
};
