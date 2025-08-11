import React from "react";
import { Link } from "react-router-dom";
import InputField from "../../Components/InputFeild/InputField";
import SocialButton from "../../Components/SocialButton/SocialButton";
import Button from "../../Components/Button/Button";

import GoogleIcon from "../../assets/icons/GoogIeIcon";
import FacebookIcon from "../../assets/icons/FaceBook";
import MailIcon from "../../assets/icons/MailIcon";
import PasswordLock from "../../assets/icons/PasswordLock";
import ProfileIcon from "../../assets/icons/ProfileIcon";

import "./SignUpContent.css";

import { Colors } from "../../constants/Colors";
export default function SignUpContent({
  showPassword,
  togglePassword,
  showConfirmPassword,
  toggleConfirmPassword,
  handleSubmit,
  handleChange,
  formData,
  handleGoogleLogin,
  handleFacebookLogin,
  handleClick,
  errors = {},
}) {
  const getIconColor = (field) => (errors[field] ? Colors.red : Colors.grayDark);

  const getIconProps = (field) => ({
    width: "20",
    height: "20",
    color: getIconColor(field),
    
  });

  return (
    <div className="signup-content">
      <h2 className="signup-heading">Sign Up</h2>

      <form className="signup-form" onSubmit={handleSubmit} noValidate>
        <div className="input-wrapper">
          <InputField
            type="text"
            name="name"
            placeholder="Your full name"
            value={formData.name}
            onChange={handleChange}
            leftIcon={<ProfileIcon {...getIconProps("name")} />}
            error={errors.name}
            required
          />
        </div>

        <div className="input-wrapper">
          <InputField
            type="email"
            name="email"
            placeholder="abc@email.com"
            value={formData.email}
            onChange={handleChange}
            leftIcon={<MailIcon {...getIconProps("email")} />}
            error={errors.email}
            required
          />
        </div>

        <div className="input-wrapper">
          <InputField
            type={showPassword ? "text" : "password"}
            name="password"
            placeholder="Create password"
            value={formData.password}
            onChange={handleChange}
            leftIcon={<PasswordLock {...getIconProps("password")} />}
            rightIcon={
              <span className="toggle-password" onClick={togglePassword}>
                <i className={`bi ${showPassword ? "bi-eye-slash" : "bi-eye"}`} />
              </span>
            }
            error={errors.password}
            required
          />
        </div>

        <div className="input-wrapper">
          <InputField
            type={showConfirmPassword ? "text" : "password"}
            name="confirmPassword"
            placeholder="Confirm password"
            value={formData.confirmPassword}
            onChange={handleChange}
            leftIcon={<PasswordLock {...getIconProps("confirmPassword")} />}
            rightIcon={
              <span className="toggle-password" onClick={toggleConfirmPassword}>
                <i className={`bi ${showConfirmPassword ? "bi-eye-slash" : "bi-eye"}`} />
              </span>
            }
            error={errors.confirmPassword}
            required
          />
        </div>

        <div className="signup-btn">
          <Button
            variant="filled"
            type="submit"
            onClick={handleClick}
          >
            Sign Up
          </Button>
        </div>

        <div className="or-separator">
          <div className="line-left" />
          <span>OR</span>
          <div className="line-right" />
        </div>

        <SocialButton
          type="button"
          icon={<GoogleIcon {...getIconProps("google")} />}
          text="Continue with Google"
          onClick={handleGoogleLogin}
        />

        <SocialButton
          type="button"
          icon={<FacebookIcon {...getIconProps("facebook")} />}
          text="Continue with Facebook"
          onClick={handleFacebookLogin}
        />

        <p className="signup-prompt">
          Already have an account?{" "}
          {/* <Link to="/signin" className="signUp-link" >
            Sign In
          </Link> */}
         <Link to={`/signin?type=${formData.type}`} className="signUp-link">
  Sign In
</Link>


        </p>
      </form>
    </div>
  );
}
