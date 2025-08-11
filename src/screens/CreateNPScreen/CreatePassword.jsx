import React from "react";
import CreatePassContent from "./CreatePassContent";
import useCreatePassword from "./useCreatePassword";
import RightSection from "../../Components/RightSection/RightSection";
import "./CreatePassword.css"
import Logo from "../../Components//Logo/Logo";
import illustration from "../../assets/images/camera.png";
export default function CreatePassword() {
  const {
    formData,
    handleChange,
    handleSubmit,
    errors,
    showPassword,
    togglePassword,
    showConfirmPassword,
    toggleConfirmPassword,
    loading,
  } = useCreatePassword();

  return (
    <div className="create-password-page">
        <div className="logo-wrapper">
        <Logo />
      </div>
      <div className="left-cpPage">
        <div className="form-center">
          <CreatePassContent
            formData={formData}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            errors={errors}
            showPassword={showPassword}
            togglePassword={togglePassword}
            showConfirmPassword={showConfirmPassword}
            toggleConfirmPassword={toggleConfirmPassword}
            loading={loading}
          />
        </div>
       
      </div>
      <RightSection image={illustration} altText="Forgot Password Illustration" />
    </div>
  );
}
