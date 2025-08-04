import React from "react";
import { useNavigate } from "react-router-dom";
import SignInContent from "./SignInContent";
import useSignIn from "./useSignIn";
import "./SignIn.css";
import RightSection from "../../Components/RightSection/RightSection";
import illustration from "../../assets/images/camera.png";
import Logo from "../../Components/Logo/Logo";

export default function SignIn() {
  const {
    formData,
    handleChange,
    handleSubmit,
    showPassword,
    togglePassword,
    errors,
    apiError,
    loading,
    successMessage, 
  } = useSignIn();

  const handleGoogleLogin = () => {
    console.log("Google login clicked");
  };

  const handleFacebookLogin = () => {
    console.log("Facebook login clicked");
  };

  return (
    <div className="signup-page">
      <div className="signup-left">
        <div className="logo-wrapper">
          <Logo />
        </div>
        <div className="form-center">
          <SignInContent
            formData={formData}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            showPassword={showPassword}
            togglePassword={togglePassword}
            handleGoogleLogin={handleGoogleLogin}
            handleFacebookLogin={handleFacebookLogin}
            errors={errors}
            apiError={apiError}
            loading={loading}
            successMessage={successMessage} 
          />
        </div>
      </div>
      <RightSection image={illustration} altText="Signup Illustration" />
    </div>
  );
}
