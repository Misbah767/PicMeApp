// src/pages/Payment/PDetailScreen.jsx
import React from "react";
import { useParams } from "react-router-dom";
import packageData from "../../Components/PackagePlan/packagedata";
import PackagePlan from "../../Components/PackagePlan/PackagePlan";
import PaymentSelectedCard from "./PaymentSecletedCard";
import Navbar from "../../Components/Navbar/Navbar";
const PDetailScreen = () => {
  const { planId } = useParams();
  const selectedPlan = packageData.find((plan) => plan.id === planId);

  if (!selectedPlan) {
    return (
      <div className="paymentdetail-page">
        <Navbar />
        <h2 className="not-found-msg">Plan not found</h2>
      </div>
    );
  }

  return (
    <div className="paymentdetail-page">
      <Navbar />
      <h1 className="payment-detail-title">Payment Details</h1>
      <div className="paymentdetail-content">
        <PackagePlan
          {...selectedPlan}
          buttonText="Selected"
          variant="filled"
          isLarge={true}
        />
        <PaymentSelectedCard selectedPlan={selectedPlan} />
      </div>
    </div>
  );
};

export default PDetailScreen;
