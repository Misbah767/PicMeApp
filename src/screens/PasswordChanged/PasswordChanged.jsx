import React from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../../Components/Logo/Logo";
import RightSection from "../../Components/RightSection/RightSection";
import Button from "../../Components/Button/Button";
import TickIcon from "../../assets/icons/TickIcon";
import BackIcon from "../../assets/icons/BackIcon";
import illustration from "../../assets/images/camera.png";
import "./PasswordChanged.css";

// Import Colors constants
import { Colors } from "../../constants/Colors";

export default function PasswordChanged() {
  const navigate = useNavigate();

  const handleBackToLogin = () => {
    navigate("/signin");
  };

  return (
    <div className="password-changed-page">
      <div className="logo-wrapper">
        <Logo />
      </div>

      <div className="left-password">
        <div className="confirmation-box">
          <div className="tick-icon">
            <TickIcon />
          </div>
          <h2 className="success-heading">Password Changed</h2>
          <p className="success-text">
            Your password has been changed successfully.
          </p>

          <Button
            onClick={handleBackToLogin}
            leftIcon={<BackIcon bgColor={Colors.secondaryColor} iconColor={Colors.primaryColor} />}
            className="back-btn"
          >
            BACK TO LOGIN
          </Button>
        </div>
      </div>

      <RightSection image={illustration} altText="Password Changed Illustration" />
    </div>
  );
}
