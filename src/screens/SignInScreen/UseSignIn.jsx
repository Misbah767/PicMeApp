// src/hooks/useSignIn.js
import { useState, useEffect } from "react";
import { useNavigate, useSearchParams, useLocation } from "react-router-dom";
import { validateEmail, validatePassword } from "../../utils/helper";
import { loginUser } from "../../api/auth";
import { setAccessToken } from "../../utils/localStorage";

const useSignIn = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [searchParams] = useSearchParams();
  const initialType = searchParams.get("type") || "0";

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    type: initialType,
  });

  const [errors, setErrors] = useState({});
  const [apiError, setApiError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setFormData((prev) => ({ ...prev, type: initialType }));
  }, [initialType]);

  const togglePassword = () => setShowPassword((prev) => !prev);

  const validateForm = () => {
    const newErrors = {};

    if (!formData.email.trim()) {
      newErrors.email = "Email cannot be empty";
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "Enter a valid email";
    }

    if (!formData.password.trim()) {
      newErrors.password = "Password cannot be empty";
    } else if (!validatePassword(formData.password)) {
      newErrors.password = "Password must be 8+ chars, 1 letter, 1 number & 1 special char";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

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

    setApiError("");
    setSuccessMessage("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setApiError("");
    setSuccessMessage("");
  
    if (!validateForm()) return;
  
    setLoading(true);
  
    try {
      const payload = {
        email: formData.email,
        password: formData.password,
        type: formData.type,
      };
  
      console.log(" Sending login payload:", payload); 
  
      const response = await loginUser(payload);
  
     
      console.log(" Token from response:", response.data?.token); 
      console.log(" User from response:", response.data?.user);
      console.log("full response data",response.data)
  
      const token = response.data?.token;
      const user = response.data?.user;
  
      if (token) {
        setAccessToken(token);
        localStorage.setItem("user", JSON.stringify(user));
  
        setSuccessMessage("Login successful!");
  
        setTimeout(() => {
          if (formData.type === "1") {
            navigate("/dashboard");
          } else {
            const redirectTo = location.state?.from?.pathname || "/";
            navigate(redirectTo);
          }
        }, 800);
      } else {
        setApiError(response.message || "Login failed. Try again.");
      }
    } catch (err) {
      console.error(" Login error:", err); // DEBUG
      setApiError(err.message || "Login failed. Try again.");
    } finally {
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
    successMessage,
    loading,
  };
};

export default useSignIn;
