import React from "react";
import CircleShowcase from "../../Components/Circle/CircleShowcase";
import IncomeCardDetail from "../../Components/IncomeCardDetail/IncomeCardDetail";
import "./CircleCardDetail.css";
import Navbar from "../../Components/Navbar/Navbar"
import BackButton from "../../Components/BackButton/BackButton";
export default function CircleCardDetail() {
  return (
    <>
    <Navbar/>
    <BackButton/>
    <div className="circle-card-detail-page">
      <h1 className="payament-detail-heading">Payment Details</h1>
    <div className="circle-card-detail">
      <CircleShowcase />
      <IncomeCardDetail />
    </div>
    </div>
    </>
  );
}
