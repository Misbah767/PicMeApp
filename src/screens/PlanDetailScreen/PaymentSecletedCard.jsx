import React, { useState } from "react";
import PaymentOptions from "../../Components/PaymentInput/PaymentOptions";
import { useNavigate, useLocation } from "react-router-dom";
import "./PaymentSelectedCard.css";

const PaymentSelectedCard = () => {
  const [selectedOption, setSelectedOption] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  const handleContinue = () => {
    if (!selectedOption) {
      alert("Please select a payment method first.");
      return;
    }

    const plan = location.state?.selectedPlan;
    navigate("/schedule", {
      state: {
        selectedPayment: selectedOption,
        selectedPlan: plan,
      },
    });
  };

  return (
    <div className="payment-selected-card">
      <h2 className="heading">Select the Payment method</h2>
      <h2 className="heading-2">you want to use</h2>

      <PaymentOptions
        selectedOption={selectedOption}
        setSelectedOption={setSelectedOption}
      />

      <button
        className="btn-filled continue-btn"
        onClick={handleContinue}
        disabled={!selectedOption}
      >
        Continue
      </button>
    </div>
  );
};

export default PaymentSelectedCard;
