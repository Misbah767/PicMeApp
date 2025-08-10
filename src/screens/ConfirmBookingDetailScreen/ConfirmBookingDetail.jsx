import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import BookingCard from "../../Components/BookingCard/BookingCard";
import "./ConfirmBookingDetail.css";
import thankyouimage from "../../assets/images/thankyou.png"
export default function ConfirmBookingDetail() {
  return (
    <>
      <Navbar />
      <div className="booking-card-detail-page">
        <h1 className="booking-detail-heading">Booking Details</h1>

        <div className="booking-card-detail">
          <img
            src={thankyouimage} 
            alt="Booking Illustration"
            className="booking-image"
          />

          {/* Right side Booking Card */}
          <BookingCard />
        </div>
      </div>
    </>
  );
}
