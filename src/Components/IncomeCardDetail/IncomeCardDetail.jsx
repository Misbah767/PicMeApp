import React, { useState } from "react";
import InputField from "../../Components/InputFeild/InputField";
import Button from "../../Components/Button/Button";
import "./IncomeCardDetail.css";

export default function IncomeCardDetail() {
  const [formData, setFormData] = useState({
    cardHolder: "",
    cardNumber: "",
    expiryDate: "",
    csv: "",
  });

  const [errors, setErrors] = useState({});

  const errorMessages = {
    cardHolder: "Card Holder Name cannot be empty",
    cardNumber: "Card Number cannot be empty",
    expiryDate: "Expiry Date cannot be empty",
    csv: "CSV cannot be empty",
  };

  const validateFields = (name, value) => {
    let error = "";
    if (!value) {
      error = errorMessages[name] || `${name} cannot be empty`;
    }
    setErrors((prev) => ({ ...prev, [name]: error }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    validateFields(name, value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    Object.entries(formData).forEach(([key, value]) => validateFields(key, value));
    if (Object.values(formData).some((v) => !v)) return;
    console.log("Form submitted:", formData);
  };

  return (
    <div className="income-card-detail">
      <h2 className="card-heading">Enter Card Details</h2>
      <form onSubmit={handleSubmit} noValidate>
        {/* Card Holder Name */}
        <InputField
          name="cardHolder"
          placeholder="Card Holder Name"
          value={formData.cardHolder}
          onChange={handleChange}
          error={errors.cardHolder}
        />

        {/* Card Number */}
        <InputField
          name="cardNumber"
          placeholder="Card Number"
          value={formData.cardNumber}
          onChange={handleChange}
          error={errors.cardNumber}
        />

        {/* Expiry Date */}
        <InputField
          name="expiryDate"
          type="month"
          placeholder="Expiry Date"
          value={formData.expiryDate}
          onChange={handleChange}
          error={errors.expiryDate}
        />

        {/* CSV */}
        <InputField
          name="csv"
          placeholder="CSV"
          value={formData.csv}
          onChange={handleChange}
          error={errors.csv}
        />

        {/* Continue Button */}
        <div className="btn-wrapper">
          <Button variant="filled" type="submit">
            Continue
          </Button>
        </div>
      </form>
    </div>
  );
}
