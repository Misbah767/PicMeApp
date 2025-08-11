import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { validateEmail } from "../../utils/helper";
import { postAPIWithoutAuth } from "../../api/api";

const useForgotLogic = () => {
  const [formData, setFormData] = useState({ email: "" });
  const [errors, setErrors] = useState({});
  const [apiError, setApiError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
    setApiError("");
  };

  const validateForm = () => {
    const newErrors = {};
    const email = formData.email.trim();

    if (!email) {
      newErrors.email = "Email is required";
    } else if (!validateEmail(email)) {
      newErrors.email = "Enter a valid email";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleContinue = async () => {
    if (!validateForm()) {
      console.log("Validation failed.");
      return;
    }

    setLoading(true);
    try {
      const payload = { email: formData.email.trim() };
      console.log("Sending to API:", payload);

      const response = await postAPIWithoutAuth("/auth/forgot_password", payload);
      console.log("API response:", response);

      if (!response.success) {
        const errorMsg = response.data?.message || "Something went wrong. Please try again.";
        setApiError(errorMsg);
      } else {
        console.log("Navigating to ForgotMessage...");
        navigate("/", { state: { email: formData.email.trim() } });
      }
    } catch (err) {
      console.error("API error:", err);
      setApiError("Unexpected error occurred. Try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleBack = () => navigate(-1);

  return {
    formData,
    errors,
    apiError,
    loading,
    handleChange,
    handleContinue,
    handleBack,
  };
};

export default useForgotLogic;
