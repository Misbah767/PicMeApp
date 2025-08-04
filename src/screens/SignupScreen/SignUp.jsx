// src/pages/SignUpScreen/SignUp.jsx
import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";
import SignUpContent from "./SignUpContent";
import useSignUp from "./useSignUp";
import "../SignInScreen/SignIn.css";
import "./SignUp.css";
import RightSection from "../../Components/RightSection/RightSection";
import illustration from "../../assets/images/camera.png";
import Logo from "../../Components/Logo/Logo";

function SignUp() {
  const [searchParams] = useSearchParams();
  const userType = searchParams.get("type") || "0"; 
  const isCustomer = userType === "0";

  const {
    formData,
    handleChange,
    handleSubmit,
    errors,
    showPassword,
    togglePassword,
    isFormValid,
    loading,
    apiError,
  } = useSignUp(userType); 

  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const toggleConfirmPassword = () => setShowConfirmPassword((prev) => !prev);

  const handleGoogleLogin = () => console.log("Google login clicked");
  const handleFacebookLogin = () => console.log("Facebook login clicked");

  return (
    <>
      <div className="signup-page">
        <div className="signup-left">
          <div className="form-center">
            <SignUpContent
              formData={formData}
              handleChange={handleChange}
              handleSubmit={handleSubmit}
              errors={errors}
              showPassword={showPassword}
              togglePassword={togglePassword}
              showConfirmPassword={showConfirmPassword}
              toggleConfirmPassword={toggleConfirmPassword}
              handleGoogleLogin={handleGoogleLogin}
              handleFacebookLogin={handleFacebookLogin}
              isCustomer={isCustomer}
              loading={loading}
              apiError={apiError}
            />
          </div>
        </div>
        <RightSection image={illustration} altText="Signup Illustration" />
      </div>
      <div className="logo-wrapper">
        <Logo />
      </div>
    </>
  );
}

export default SignUp;
