import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { validatePassword } from "../../utils/helper";
import { postAPIWithoutAuth } from "../../api/api";

const useCreatePassword = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const email = searchParams.get("email") || "";

  const [formData, setFormData] = useState({
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const togglePassword = () => setShowPassword((prev) => !prev);
  const toggleConfirmPassword = () => setShowConfirmPassword((prev) => !prev);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.password.trim()) {
      newErrors.password = "Password cannot be empty";
    } else if (!validatePassword(formData.password)) {
      newErrors.password =
        "Password must be 8+ chars, 1 letter, 1 number & 1 special char";
    }

    if (!formData.confirmPassword.trim()) {
      newErrors.confirmPassword = "Please confirm your password";
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setLoading(true);

    try {
      const payload = {
        email,
        newPassword: formData.password,
      };

      const response = await postAPIWithoutAuth("/auth/reset_password", payload);

      if (response.success) {
        navigate("/SignIn?reset=success");
      } else {
        setErrors({ confirmPassword: response.message || "Failed to update password." });
      }
    } catch (err) {
      setErrors({ confirmPassword: err.message || "Something went wrong." });
    } finally {
      setLoading(false);
    }
  };

  return {
    formData,
    handleChange,
    handleSubmit,
    errors,
    showPassword,
    togglePassword,
    showConfirmPassword,
    toggleConfirmPassword,
    loading,
  };
};

export default useCreatePassword;
