// src/screens/ForgotScreen/ForgotPage.jsx
import React from "react";
import Logo from "../../Components/Logo/Logo";
import RightSection from "../../Components/RightSection/RightSection";
import ForgotContent from "./ForgotContent";
import illustration from "../../assets/images/camera.png"; // reuse same image
import "./ForgotPage.css";

export default function ForgotPage() {
  return (
    <div className="verification-page">
      <div className="logo-wrapper">
        <Logo />
      </div>
      <div className="left-forgot-screen">
        <ForgotContent />
      </div>
      <RightSection image={illustration} altText="Forgot Password Illustration" />
    </div>
  );
}
