import React, { useState } from "react";
import { useParams } from "react-router-dom";
import packageData from "../../Components/PackagePlan/packagedata";
import PackagePlan from "../../Components/PackagePlan/PackagePlan";
import PaymentSelectedCard from "./PaymentSecletedCard";
import ChooseDate from "../ScheduleScreen/ChooseDate"; 
import Navbar from "../../Components/Navbar/Navbar";
import "./PDetail.css";

const PDetailScreen = () => {
  const { planId } = useParams();
  const selectedPlan = packageData.find((plan) => plan.id === planId);

  const [showCalendar, setShowCalendar] = useState(false);
  const [selectedPayment, setSelectedPayment] = useState("");

  if (!selectedPlan) {
    return (
      <div className="paymentdetail-page">
        <Navbar />
        <h2>Plan not found</h2>
      </div>
    );
  }

  const handleContinue = (paymentOption) => {
    setSelectedPayment(paymentOption);
    setShowCalendar(true); // switch to calendar
  };

  return (
    <>
    <Navbar />
    <div className="paymentdetail-page">
      

      <h1 className="payment-detail-title">Payment Details</h1>
      <div>
        <div className="P-Detail">
          <PackagePlan
            {...selectedPlan}
            buttonText="Selected"
            variant="filled"
            isLarge={true}
          />

          {showCalendar ? (
            <div className="calendar-section">
              <ChooseDate />
            </div>
          ) : (
            <PaymentSelectedCard
              selectedPlan={selectedPlan}
              onContinue={handleContinue} // pass this prop
            />
          )}
        </div>
      </div>
    </div>
    </>
  );
};

export default PDetailScreen;
