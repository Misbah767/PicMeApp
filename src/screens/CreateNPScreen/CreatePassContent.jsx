import React from "react";
import InputField from "../../Components/InputFeild/InputField";
import Button from "../../Components/Button/Button";
import PasswordLock from "../../assets/icons/PasswordLock";
import { Colors } from "../../constants/Colors";
import "./CreatePassContent.css"
export default function CreatePassContent({
  formData,
  handleChange,
  handleSubmit,
  errors,
  showPassword,
  togglePassword,
  showConfirmPassword,
  toggleConfirmPassword,
  loading,
}) {
  const getIconColor = (field) =>
    errors[field] ? Colors.red : Colors.grayDark;

  const getIconProps = (field) => ({
    width: "20",
    height: "20",
    color: getIconColor(field),
  });

  return (
    <div className="signin-content password-change-page">
      <h2 className="cp-heading">Create New Password</h2>
      <p className="subtext">
        Your new password must be different from previous used password.
      </p>

      <form onSubmit={handleSubmit} noValidate>
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
                <i
                  className={`bi ${
                    showPassword ? "bi-eye-slash" : "bi-eye"
                  }`}
                />
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
              <span
                className="toggle-password"
                onClick={toggleConfirmPassword}
              >
                <i
                  className={`bi ${
                    showConfirmPassword ? "bi-eye-slash" : "bi-eye"
                  }`}
                />
              </span>
            }
            error={errors.confirmPassword}
            required
          />
        </div>
        <div className="cp-btn">
          <Button type="submit" variant="filled" disabled={loading}>
            {loading ? "Updating..." : "Update Password"}
          </Button>
        </div>
      </form>
    </div>
  );
}
