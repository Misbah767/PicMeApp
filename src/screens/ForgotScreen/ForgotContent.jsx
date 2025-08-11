import React from "react";
import InputField from "../../Components/InputFeild/InputField";
import Button from "../../Components/Button/Button";
import MailIcon from "../../assets/icons/MailIcon";
import BackIcon from "../../assets/icons/BackIcon";
import useForgotLogic from "./useForgotLogic";
import "./ForgotPassword.css";
import { Colors } from "../../constants/Colors";

export default function ForgotContent() {
  const {
    formData,
    errors,
    handleChange,
    handleContinue,
    handleBack,
    apiError,
    loading,
  } = useForgotLogic();

  const email = formData.email;
  const error = errors.email;
  
  const getIconColor = () => (error ? Colors.red : Colors.grayDark);
  const getIconProps = () => ({
    width: "18",
    height: "18",
    color: getIconColor(),
  });

  const isButtonDisabled = !!error || !email.trim() || loading;

  return (
    <div className="forgot-content">
      <h1>Forgot password?</h1>
      <p className="subtext">
        Please enter your email address to request a password reset
      </p>
      <InputField
        type="email"
        name="email"
        placeholder="abc@email.com"
        value={formData.email}
        onChange={handleChange}
        leftIcon={<MailIcon {...getIconProps("email")} />}
        error={errors.email}
      />

      {/* Show API error */}
      {apiError && <p className="api-error">{apiError}</p>}

      <div className="btn-group">
        <Button
          variant="filled"
          onClick={handleContinue}
          disabled={isButtonDisabled}
        >
          {loading ? "Loading..." : "Continue"}
        </Button>

        <Button
          variant="outline"
          leftIcon={<BackIcon />}
          onClick={handleBack}
        >
          BACK TO LOGIN
        </Button>
      </div>
    </div>
  );
}
