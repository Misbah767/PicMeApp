import React, { useState } from "react";
import "./CustomizeProfile.css";
import InputField from "../InputFeild/InputField";
import Button from "../Button/Button";
import useCustomizeProfile from "../../hooks/useCustomizeProfile"
import { FaUser, FaEnvelope, FaLock, FaEye, FaEyeSlash } from "react-icons/fa";

export default function CustomizeProfile() {
  const {
    formData,
    onProfileInputChange,
    onProfileFormSubmit,
    errors,
    isFormValid,
    loading,
  } = useCustomizeProfile();

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <div className="profile-customize-card">
      <h2 className="profile-customize-heading">Customize Your Profile</h2>

      <form onSubmit={onProfileFormSubmit} className="profile-customize-form">
        {/* Left Side Inputs */}
        <div className="profile-form-column">
          <InputField
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={onProfileInputChange}
            leftIcon={<FaUser />}
            error={errors.name}
          />
          <InputField
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={onProfileInputChange}
            leftIcon={<FaEnvelope />}
            error={errors.email}
          />
        </div>

        {/* Right Side Inputs + Buttons */}
        <div className="profile-form-column">
          <InputField
            name="password"
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            value={formData.password}
            onChange={onProfileInputChange}
            leftIcon={<FaLock />}
            rightIcon={
              <span
                className="icon-clickable"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            }
            error={errors.password}
          />
          <InputField
            name="confirmPassword"
            type={showConfirmPassword ? "text" : "password"}
            placeholder="Confirm Password"
            value={formData.confirmPassword}
            onChange={onProfileInputChange}
            leftIcon={<FaLock />}
            rightIcon={
              <span
                className="icon-clickable"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            }
            error={errors.confirmPassword}
          />

          <div className="profile-button-wrapper">
            <Button
              className="profile-save-btn"
              variant="filled"
              type="submit"
              disabled={!isFormValid || loading}
            >
              Save Changes
            </Button>
            <Button className="profile-cancel-btn" variant="outlined" type="button">
              Cancel
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
}
