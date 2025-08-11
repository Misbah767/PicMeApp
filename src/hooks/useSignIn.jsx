import { useState } from "react";
import { validateEmail, validatePassword } from "../utils/helper";
import { loginUser } from "../api/auth";
import { setAccessToken } from "../utils/localStorage";
import { useNavigate, useSearchParams } from "react-router-dom";

export default function useSignIn() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const initialType = searchParams.get("type") || "0";

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    type: initialType,
  });

  const [errors, setErrors] = useState({});
  const [apiError, setApiError] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const togglePassword = () => setShowPassword((prev) => !prev);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.email) newErrors.email = "Email is required";
    else if (!validateEmail(formData.email))
      newErrors.email = "Invalid email format";

    if (!formData.password) newErrors.password = "Password is required";
    else if (!validatePassword(formData.password))
      newErrors.password = "Password must be at least 8 characters";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setApiError("");
    if (!validate()) return;

    setLoading(true);
    try {
      const payload = {
        email: formData.email,
        password: formData.password,
        type: formData.type,
      };

      const res = await loginUser(payload);

      if (!res) {
        setApiError("No response from server. Please try again.");
        setLoading(false);
        return;
      }

      if (res.success) {
        const token =
          res.headers?.authorization ||
          res.headers?.Authorization ||
          res.data?.token ||
          null;

        if (token) {
          const cleanToken = token.replace(/^Bearer\s+/i, "").trim();
          setAccessToken(cleanToken);

          // 
          setTimeout(() => {
            navigate("/searchLocation", { replace: true });
          }, 800); // 0.8 second delay for shwoing loader
        } else {
          setApiError("Token not found in response");
          setLoading(false);
        }
      } else {
        // error hanlding
        const errorMsg =
          res.message ||
          res.data?.message ||
          "We couldn't sign you in. Please try again later.";

        setApiError(errorMsg);
        setLoading(false);
      }
    } catch (err) {
      setApiError(
        err.response?.data?.message ||
          err.message ||
          "Login failed. Please try again."
      );
      setLoading(false);
    }
  };

  return {
    formData,
    handleChange,
    handleSubmit,
    showPassword,
    togglePassword,
    errors,
    apiError,
    loading,
  };
}
