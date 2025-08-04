// src/pages/Schedule/ScheduleScreen.jsx
import React from "react";
import { useLocation } from "react-router-dom";
import PackagePlan from "../../Components/PackagePlan/PackagePlan";
import "react-calendar/dist/Calendar.css";
import "./ScheduleScreen.css";
import ChooseDate from "./ChooseDate";
import Navbar from "../../Components/Navbar/Navbar";

const ScheduleScreen = () => {
  const location = useLocation();
  const { selectedPlan, selectedPayment } = location.state || {};

  console.log("ScheduleScreen received selectedPlan:", selectedPlan);
  console.log("ScheduleScreen received selectedPayment:", selectedPayment);

  return (
    <>
    <Navbar/>
    <div className="schedule-screen">
      <h1 className="schedule-heading">Choose Booking Date</h1>

      <div className="schedule-layout">
      
        {selectedPlan ? (
          <PackagePlan
            id={selectedPlan.id}
            icon={selectedPlan.icon}
            title={selectedPlan.title}
            price={selectedPlan.price}
            listItems={selectedPlan.listItems}
            buttonText="Selected"
            variant="filled"
            isLarge={true}
          />
        ) : (
          <p className="no-plan-msg"></p>
        )}

        {/* Date Calendar Section */}
        <div className="calendar-section">
          <ChooseDate />
        </div>
      </div>
    </div>
    </>
  );
};

export default ScheduleScreen;
