// src/hooks/useLogout.js
import { removeAccessToken, removeRememberME } from "../utils/localStorage";

const useLogout = () => {
  return () => {
    localStorage.removeItem("user");
    removeAccessToken();       // removes access_token
    removeRememberME();        // removes remember_me
    console.log( "Access token and user removed");
  };
};

export default useLogout;
