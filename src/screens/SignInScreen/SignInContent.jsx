// src/pages/SignIn/SignInContent.js
import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom"; // ⬅ Added useSearchParams
import { FiEye, FiEyeOff } from "react-icons/fi";

import InputField from "../../Components/InputFeild/InputField";
import SocialButton from "../../Components/SocialButton/SocialButton";
import Button from "../../Components/Button/Button";

import GoogleIcon from "../../assets/icons/GoogIeIcon";
import FacebookIcon from "../../assets/icons/FaceBook";
import PasswordLock from "../../assets/icons/PasswordLock";
import MailIcon from "../../assets/icons/MailIcon";

import "./SignInContent.css";
import { Colors } from "../../constants/Colors";

export default function SignInContent({
  showPassword,
  togglePassword,
  handleSubmit,
  handleChange,
  formData,
  errors = {},
  type: propType, // ⬅ renamed to avoid confusion
  apiError,
  successMessage,
}) {
  /* ===== Read current type from URL ===== */
  const [searchParams] = useSearchParams();
  const currentType = searchParams.get("type") || propType || "0";

  /* ===== Utility Functions for Icon Styling ===== */
  const getIconColor = (fieldName) =>
    errors[fieldName] ? Colors.red : Colors.grayDark;

  const getIconProps = (fieldName) => ({
    width: "20",
    height: "20",
    color: getIconColor(fieldName),
  });

  /* ===== Local State for Toast Messages ===== */
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);

  /* ===== Show success message for 10s ===== */
  useEffect(() => {
    if (successMessage) {
      setShowSuccess(true);
      const timer = setTimeout(() => setShowSuccess(false), 10000);
      return () => clearTimeout(timer);
    }
  }, [successMessage]);

  /* ===== Show error message for 10s ===== */
  useEffect(() => {
    if (apiError) {
      setShowError(true);
      const timer = setTimeout(() => setShowError(false), 10000);
      return () => clearTimeout(timer);
    }
  }, [apiError]);

  return (
    <div className="signin-content">
      {/* ===== Heading ===== */}
      <h2 className="signin-heading">Sign In</h2>

      {/* ===== Slide-in Messages (Success & Error) =====
      // {showSuccess && <div className="toast-message toast-success">{successMessage}</div>}
     {/* ===== Error Message Banner ===== */}
         {showError && (
       <div className="error-banner">
             <span className="error-icon">⚠️</span>
                      <span>{apiError}</span>
              </div>
             )}

      {/* ===== Sign In Form ===== */}
      <form className="signin-form" onSubmit={handleSubmit} noValidate>
        {/* ===== Email Input ===== */}
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

        {/* ===== Password Input (with toggle visibility) ===== */}
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
                  <FiEyeOff size={16} color={getIconColor("password")} />
                ) : (
                  <FiEye size={16} color={getIconColor("password")} />
                )}
              </span>
            }
            error={errors.password}
          />
        </div>

        {/* ===== Remember Me & Forgot Password ===== */}
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

        {/* ===== Sign In Button ===== */}
        <div className="btn-signin">
          <Button variant="filled" type="submit">
            Sign In
          </Button>
        </div>

        {/* ===== OR Separator ===== */}
        <div className="or-separator">
          <div className="line-left"></div>
          <span>OR</span>
          <div className="line-right"></div>
        </div>

        {/* ===== Social Login Buttons ===== */}
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

        {/* ===== Sign Up Link ===== */}
        <p className="signin-prompt">
          Don’t have an account?{" "}
          <Link to={`/signup?type=${encodeURIComponent(currentType)}`} className="signUp-link">
            Sign Up
          </Link>
        </p>
      </form>
    </div>
  );
}
