import { useState, useMemo } from "react";

export default function useCustomizeProfile() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const validateProfileForm = (fieldValues = formData) => {
    let tempErrors = { ...errors };

    if ("name" in fieldValues)
      tempErrors.name = fieldValues.name ? "" : "Full name is required.";

    if ("email" in fieldValues) {
      if (!fieldValues.email) {
        tempErrors.email = "Email is required.";
      } else if (!/\S+@\S+\.\S+/.test(fieldValues.email)) {
        tempErrors.email = "Invalid email address.";
      } else {
        tempErrors.email = "";
      }
    }

    if ("password" in fieldValues)
      tempErrors.password =
        fieldValues.password.length >= 6
          ? ""
          : "Password must be at least 6 characters.";

    if ("confirmPassword" in fieldValues)
      tempErrors.confirmPassword =
        fieldValues.confirmPassword === fieldValues.password
          ? ""
          : "Passwords do not match.";

    setErrors(tempErrors);
    return Object.values(tempErrors).every((x) => x === "");
  };

  const onProfileInputChange = (e) => {
    const { name, value } = e.target;
    const updatedData = { ...formData, [name]: value };
    setFormData(updatedData);
    validateProfileForm({ [name]: value });
  };

  const onProfileFormSubmit = (e) => {
    e.preventDefault();
    if (validateProfileForm()) {
      setLoading(true);
      setTimeout(() => {
        alert("Profile updated successfully!");
        setLoading(false);
      }, 1000);
    }
  };

  // Prevent infinite loop: calculate once per state change
  const isFormValid = useMemo(() => {
    return Object.values(errors).every((x) => x === "") &&
           Object.values(formData).every((x) => x.trim() !== "");
  }, [errors, formData]);

  return {
    formData,
    onProfileInputChange,
    onProfileFormSubmit,
    errors,
    isFormValid,
    loading,
  };
}
