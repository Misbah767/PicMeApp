// src/pages/SignIn/SignInContent.js
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import InputField from "../../Components/InputFeild/InputField";
import SocialButton from "../../Components/SocialButton/SocialButton";
import Button from "../../Components/Button/Button";
import GoogleIcon from "../../assets/icons/GoogIeIcon";
import FacebookIcon from "../../assets/icons/FaceBook";
import PasswordLock from "../../assets/icons/PasswordLock";
import MailIcon from "../../assets/icons/MailIcon";
import PasswordShowIcon from "../../assets/icons/PasswordShowIcon";
import PasswordHideIcon from "../../assets/icons/PasswordHideIcon";
import "./SignInContent.css";
import { Colors } from "../../constants/Colors";

export default function SignInContent({
  showPassword,
  togglePassword,
  handleSubmit,
  handleChange,
  formData,
  errors = {},
  type = "0",
  apiError,
  successMessage,
}) {
  const getIconColor = (fieldName) =>
    errors[fieldName] ? Colors.red : Colors.grayDark;

  const getIconProps = (fieldName) => ({
    width: "20",
    height: "20",
    color: getIconColor(fieldName),
  });

  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);

  useEffect(() => {
    if (successMessage) {
      setShowSuccess(true);
      const timer = setTimeout(() => setShowSuccess(false), 10000);
      return () => clearTimeout(timer);
    }
  }, [successMessage]);

  useEffect(() => {
    if (apiError) {
      setShowError(true);
      const timer = setTimeout(() => setShowError(false), 10000);
      return () => clearTimeout(timer);
    }
  }, [apiError]);

  return (
    <div className="signin-content">
      <h2 className="signin-heading">Sign In</h2>

      {/* Slide-in Messages */}
      {showSuccess && (
        <div className="toast-message toast-success">
          {successMessage}
        </div>
      )}
      {showError && (
        <div className="toast-message toast-error">
          {apiError}
        </div>
      )}

      <form className="signin-form" onSubmit={handleSubmit} noValidate>
        <div className="input-wrapper">
          <InputField
            type="email"
            name="email"
            placeholder="abc@email.com"
            value={formData.email}
            onChange={handleChange}
            leftIcon={<MailIcon {...getIconProps("email")} />}
            error={errors.email}
          />
        </div>

        <div className="input-wrapper">
          <InputField
            type={showPassword ? "text" : "password"}
            name="password"
            placeholder="Your password"
            value={formData.password}
            onChange={handleChange}
            leftIcon={<PasswordLock {...getIconProps("password")} />}
            rightIcon={
              <span className="toggle-password" onClick={togglePassword}>
                {showPassword ? (
                  <PasswordHideIcon {...getIconProps("password")} />
                ) : (
                  <PasswordShowIcon {...getIconProps("password")} />
                )}
              </span>
            }
            error={errors.password}
          />
        </div>

        <div className="form-options">
          <label className="remember-part">
            <label className="switch">
              <input type="checkbox" />
              <span className="slider"></span>
            </label>
            <span className="remember-btn">Remember me</span>
          </label>
          <Link className="forgot-password" to="/ForgotMessage">
            Forgot Password?
          </Link>
        </div>

        <div className="btn-signin">
          <Button variant="filled" type="submit">
            Sign In
          </Button>
        </div>

        <div className="or-separator">
          <div className="line-left"></div>
          <span>OR</span>
          <div className="line-right"></div>
        </div>

        <SocialButton
          type="button"
          icon={<GoogleIcon width="20" height="20" />}
          text="Continue with Google"
        />
        <SocialButton
          type="button"
          icon={<FacebookIcon width="20" height="20" />}
          text="Continue with Facebook"
        />

        <p className="signin-prompt">
          Don’t have an account?{" "}
          <Link to={`/signup?type=${encodeURIComponent(type)}`} className="signUp-link">
            Sign Up
          </Link>
        </p>
      </form>
    </div>
  );
}
