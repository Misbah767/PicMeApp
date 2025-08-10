import React, { useState } from "react";
import { FaCalendarAlt, FaCreditCard, FaUser } from "react-icons/fa";
import Button from "../Button/Button";
import InputField from "../InputFeild/InputField";
import LogoutCard from "../LogoutCard/LogOutCard";
import "./PaymentMethodCard.css";

const PaymentMethodCard = ({ paymentIcon: PaymentIcon = FaCreditCard, userName }) => {
  const [showLogoutModal, setShowLogoutModal] = useState(false);

  return (
    <div className="payment-method-card">
      {/* Header */}
      <div className="pmc-header">
        <h2 className="pmc-title">Payment Method</h2>
        <Button
          variant="filled"
          className="btn-remove"
          style={{ backgroundColor: "var(--dark-red)" }}
        >
          Remove
        </Button>
      </div>

      {/* Inputs */}
      <div className="pmc-inputs">
        {/* Left Side */}
        <div className="pmc-left">
          <InputField
            placeholder="Payment Method"
            leftIcon={<PaymentIcon />}
          />
          <InputField
            placeholder="XXXX_XXXXX_XXXX"
            leftIcon={<FaCreditCard />}
          />
          <InputField
            placeholder="XXXXX"
          />
        </div>

        {/* Right Side */}
        <div className="pmc-right">
          <InputField
            placeholder={userName || "User Name"}
            leftIcon={<FaUser />}
          />
          <InputField
            placeholder="24/2025"
            rightIcon={<FaCalendarAlt />}
          />
        </div>
      </div>

      {/* Footer */}
      <div className="pmc-footer">
        <Button
          variant="filled"
          className="btn-logout"
          style={{ backgroundColor: "var(--dark-red)" }}
          onClick={() => setShowLogoutModal(true)}
        >
          Logout
        </Button>
      </div>

      {showLogoutModal && (
        <LogoutCard onClose={() => setShowLogoutModal(false)} />
      )}
    </div>
  );
};

export default PaymentMethodCard;
