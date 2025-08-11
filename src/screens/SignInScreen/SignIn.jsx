
  import React from "react";
  import SignInContent from "./SignInContent";
  import useSignIn from "../../hooks/useSignIn";
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
    } = useSignIn();

  if (loading) {
    return (
      <div className="loading-overlay">
        <div className="loading-container">
          {/* Spinner */}
          <div className="spinner"></div>

          {/* Text + Dots inline */}
          <div className="loading-text-inline">
            Signing you in
            <div className="dots-inline">
              <div className="dot"></div>
              <div className="dot"></div>
              <div className="dot"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }


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
              errors={errors}
              apiError={apiError}
            />
          </div>
        </div>
        <RightSection image={illustration} altText="Signup Illustration" />
      </div>
    );
  }

