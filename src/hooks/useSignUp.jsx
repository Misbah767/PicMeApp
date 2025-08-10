// src/hooks/useSignUp.js
import { useState, useEffect } from "react";
import {
  validateEmail,
  validatePassword,
  validateFullName1To3Words,
} from "../utils/helper";
import { setAccessToken, getAccessToken } from "../utils/localStorage"; // getAccessToken bhi import kiya
import { signUpUser } from "../api/auth";
import { useNavigate, useSearchParams } from "react-router-dom";

const useSignUp = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  
  const initialType = searchParams.get("type") || "0";

  // Redirect if user already logged in
  useEffect(() => {
    const checkAuth = async () => {
      const token = await getAccessToken();
      if (token) {
        const userType = initialType;
        navigate(userType === "0" ? "/searchLocation" : "/dashboard", {
          replace: true,
        });
      }
    };
    checkAuth();
  }, [navigate, initialType]);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    type: initialType,
  });

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [apiError, setApiError] = useState(null);

  // Update type in state if URL param changes
  useEffect(() => {
    setFormData((prev) => ({ ...prev, type: initialType }));
  }, [initialType]);

  const togglePassword = () => setShowPassword((prev) => !prev);

  const validateFields = (fieldName, value) => {
    let error = "";

    if (!value) {
      if (fieldName === "name") error = "Name cannot be empty";
      if (fieldName === "email") error = "Email cannot be empty";
      if (fieldName === "password") error = "Password cannot be empty";
      if (fieldName === "confirmPassword") error = "Confirm Password cannot be empty";
    } else {
      if (fieldName === "name" && !validateFullName1To3Words(value)) {
        error = "Enter 1–3 words, each 2–25 alphabetic characters";
      }
      if (fieldName === "email" && !validateEmail(value)) {
        error = "Enter a valid email address";
      }
      if (fieldName === "password" && !validatePassword(value)) {
        error = "Use 8+ characters with a letter, number & symbol";
      }
      if (fieldName === "confirmPassword" && value !== formData.password) {
        error = "Passwords do not match";
      }
    }

    setErrors((prev) => ({ ...prev, [fieldName]: error }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setTouched((prev) => ({ ...prev, [name]: true }));
    validateFields(name, value);
  };

  const isFormValid = () =>
    formData.name &&
    formData.email &&
    formData.password &&
    formData.confirmPassword &&
    !errors.name &&
    !errors.email &&
    !errors.password &&
    !errors.confirmPassword;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitted(true);
    setApiError(null);

    Object.entries(formData).forEach(([key, value]) => {
      validateFields(key, value);
    });

    if (!isFormValid()) return;

    try {
      setLoading(true);

      const payload = {
        name: formData.name,
        email: formData.email,
        password: formData.password,
        type: formData.type,  
      };

      const res = await signUpUser(payload);

      setAccessToken(res.token);
      localStorage.setItem("user", JSON.stringify(res.user));

      navigate("/VerificationPage");
    } catch (err) {
      console.error("Signup error:", err);
      setApiError(err.message || "Something went wrong");
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
    isFormValid: isFormValid(),
    loading,
    apiError,
  };
};

export default useSignUp;
