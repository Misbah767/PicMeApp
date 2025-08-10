import React, { useState } from "react";
import PaymentOptions from "../../Components/PaymentInput/PaymentOptions";
import "./PaymentSelectedCard.css";

const PaymentSelectedCard = ({ onContinue }) => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleContinue = () => {
    if (!selectedOption) {
      alert("Please select a payment method first.");
      return;
    }
    onContinue(selectedOption); 
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
