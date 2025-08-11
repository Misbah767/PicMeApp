// src/hooks/useNavbar.js
import { useNavigate } from "react-router-dom";
import useLogout from "./useLogout";

const useNavbar = () => {
  const navigate = useNavigate();
  const logout = useLogout();

  const handleLogout = (event) => {
    event.preventDefault(); 
    logout();
    console.log("🚪 Logged out");
    navigate("/"); //  redirect to Home
  };

  return {
    handleLogout,
  };
};

export default useNavbar;
