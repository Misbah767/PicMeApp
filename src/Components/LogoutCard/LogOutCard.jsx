import React from "react";
import { IoClose } from "react-icons/io5";
import Button from "../Button/Button";
import useLogout from "../../hooks/useLogout";
import "./LogoutCard.css";

const LogoutModal = ({ onClose }) => {
  const logout = useLogout();

  const handleLogout = () => {
    logout();
    onClose();
  };

  return (
    <div className="logout-overlay">
      <div className="logout-card">
        <div className="logout-header">
          <h3>Logout?</h3>
          <IoClose className="logout-close" onClick={onClose} />
        </div>
        <p>
          Are you sure you want to logout from the
          <br />
          app?
        </p>
        <div className="logout-actions">
          <Button variant="outlined" onClick={onClose}>
            Cancel
          </Button>
          <Button
            variant="filled"
            className="btn-logout-confirm"
            style={{ backgroundColor: "var(--dark-red)" }}
            onClick={handleLogout}
          >
            Logout
          </Button>
        </div>
      </div>
    </div>
  );
};

export default LogoutModal;
