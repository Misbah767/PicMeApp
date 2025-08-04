// src/screens/VarificatonScreen/VerificationPage.jsx
import React from "react";
import Logo from "../../Components/Logo/Logo";
import RightSection from "../../Components/RightSection/RightSection";
import VerificationForm from "./VerificationForm";
import illustration from "../../assets/images/camera.png";
import "./VerificationPage.css";

export default function VerificationPage() {
  return (
    <div className="verification-page">
      <div className="logo-wrapper">
        <Logo />
      </div>
      <div className="left-screen">
        <VerificationForm />
      </div>
      <RightSection image={illustration} altText="Signup Illustration" />
    </div>
  );
}
